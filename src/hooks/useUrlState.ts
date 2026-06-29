import { useState, useCallback, useEffect } from 'react'
import type { AppState, DestSelection } from '../types'
import { findTimezoneByIana, tzToSelection } from '../data/timezones'
import { CITY_ALIASES } from '../data/cityAliases'
import { CITY_INDEX } from '../data/cityIndex'

const DEFAULT_STATE: AppState = {
  date: '2026-06-30',
  time: '17:00',
  sourceIana: 'Europe/London',
  destSelections: [
    { iana: 'America/New_York', city: 'New York', country: 'United States', isAlias: false },
    { iana: 'America/Denver', city: 'Denver', country: 'United States', isAlias: false },
    { iana: 'Asia/Tokyo', city: 'Tokyo', country: 'Japan', isAlias: false },
  ],
  is24h: true,
}

/**
 * Encode a DestSelection for the URL.
 * Primary cities: just the IANA id.
 * Aliases: "CityName|iana" e.g. "Birmingham|Europe/London"
 */
function encodeSelection(sel: DestSelection): string {
  return sel.isAlias ? `${sel.city}|${sel.iana}` : sel.iana
}

/**
 * Decode a URL segment back into a DestSelection.
 * Handles both plain IANA strings and "City|iana" alias pairs.
 *
 * Lookup order for "City|iana" segments:
 *   1. CITY_ALIASES (backward compat for existing shared URLs)
 *   2. CITY_INDEX   (handles newer cities like York UK / York US)
 *   3. Plain IANA   (fallback — returns the primary city for that zone)
 */
function decodeSelection(segment: string): DestSelection | null {
  if (segment.includes('|')) {
    const pipeIdx = segment.indexOf('|')
    const city = segment.slice(0, pipeIdx)
    const iana = segment.slice(pipeIdx + 1)

    // 1. Legacy curated aliases
    const alias = CITY_ALIASES.find((a) => a.name === city && a.iana === iana)
    if (alias) {
      const primaryCity = findTimezoneByIana(iana)?.city
      return { iana, city: alias.name, country: alias.country, isAlias: true, primaryCity }
    }

    // 2. City index entries (York UK, York US, and any future additions)
    const indexEntry = CITY_INDEX.find((e) => e.name === city && e.timezoneIana === iana)
    if (indexEntry) {
      const primaryTz = findTimezoneByIana(iana)
      const isPrimary = primaryTz?.city === indexEntry.name
      return {
        iana,
        city: indexEntry.name,
        country: indexEntry.country,
        isAlias: !isPrimary,
        primaryCity: isPrimary ? undefined : primaryTz?.city,
      }
    }

    // 3. Unrecognised alias — fall through to primary city for that IANA
    const tz = findTimezoneByIana(iana)
    return tz ? tzToSelection(tz) : null
  }

  const tz = findTimezoneByIana(segment)
  return tz ? tzToSelection(tz) : null
}

function parseUrlState(): AppState {
  const params = new URLSearchParams(window.location.search)
  const date = params.get('date') ?? DEFAULT_STATE.date
  const time = params.get('time') ?? DEFAULT_STATE.time
  const sourceIana = params.get('src') ?? DEFAULT_STATE.sourceIana
  const dstParam = params.get('dst')
  const destSelections: DestSelection[] = dstParam
    ? dstParam.split(',').map(decodeSelection).filter((s): s is DestSelection => s !== null)
    : DEFAULT_STATE.destSelections
  const formatParam = params.get('format')
  const is24h = formatParam ? formatParam === '24h' : DEFAULT_STATE.is24h

  return { date, time, sourceIana, destSelections, is24h }
}

function stateToUrl(state: AppState): string {
  const params = new URLSearchParams()
  params.set('date', state.date)
  params.set('time', state.time)
  params.set('src', state.sourceIana)
  if (state.destSelections.length > 0) {
    params.set('dst', state.destSelections.map(encodeSelection).join(','))
  }
  params.set('format', state.is24h ? '24h' : '12h')
  return `${window.location.pathname}?${params.toString()}`
}

export function useUrlState(): [AppState, (patch: Partial<AppState>) => void, string] {
  const [state, setState] = useState<AppState>(parseUrlState)

  const updateState = useCallback((patch: Partial<AppState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch }
      const url = stateToUrl(next)
      window.history.replaceState(null, '', url)
      return next
    })
  }, [])

  // Stay in sync with browser back/forward navigation
  useEffect(() => {
    const onPop = () => setState(parseUrlState())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const shareUrl = stateToUrl(state)

  return [state, updateState, shareUrl]
}
