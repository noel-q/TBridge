import { useMemo, useRef } from 'react'
import { Info } from '@phosphor-icons/react/dist/csr/Info'
import { convertTime, getSourceTimeNotice } from '../utils/conversion'
import { findTimezoneByIana, tzToSelection } from '../data/timezones'
import { ResultCard } from './ResultCard'
import type { AppState, ConversionResult } from '../types'

type Props = {
  state: AppState
}

/** Stable keys for rows, so only a newly added city animates in. Repeats get a counter. */
function rowKeys(results: ConversionResult[]): string[] {
  const seen = new Map<string, number>()
  return results.map((result) => {
    const base = `${result.city}|${result.iana}`
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    return count === 0 ? base : `${base}#${count}`
  })
}

export function ResultsList({ state }: Props) {
  const sourceTz = findTimezoneByIana(state.sourceIana)
  const sourceSel = sourceTz ? tzToSelection(sourceTz) : null
  const initialKeys = useRef<Set<string> | null>(null)

  const sourceResult = useMemo(() => {
    if (!sourceSel) return null
    const [result] = convertTime(state.date, state.time, state.sourceIana, [sourceSel], state.is24h)
    return result ?? null
  }, [state.date, state.time, state.sourceIana, state.is24h, sourceSel])

  const notice = useMemo(
    () => getSourceTimeNotice(state.date, state.time, state.sourceIana),
    [state.date, state.time, state.sourceIana],
  )

  const destResults = useMemo(
    () => convertTime(state.date, state.time, state.sourceIana, state.destSelections, state.is24h),
    [state.date, state.time, state.sourceIana, state.destSelections, state.is24h],
  )
  const keys = rowKeys(destResults)
  // Rows present on first render do not animate; later additions do.
  if (initialKeys.current === null) initialKeys.current = new Set(keys)

  if (!sourceSel) {
    return (
      <div className="tb-empty" role="status">
        <p className="tb-empty__title">Pick a time zone to convert from</p>
        <p className="tb-empty__text">Search by city, abbreviation or offset in the time zone field.</p>
      </div>
    )
  }

  if (!sourceResult) {
    return (
      <div className="tb-empty" role="status">
        <p className="tb-empty__title">Enter a date and time</p>
        <p className="tb-empty__text">{notice?.message ?? 'Enter a valid date and time to see the conversion.'}</p>
      </div>
    )
  }

  return (
    <>
      {notice && (
        <p className="tb-notice" role="status">
          <Info size={16} aria-hidden="true" />
          <span>{notice.message}</span>
        </p>
      )}
      <ul className="tb-results">
        <ResultCard result={sourceResult} isSource />
        {destResults.map((result, i) => (
          <ResultCard key={keys[i]} result={result} enter={!initialKeys.current?.has(keys[i])} />
        ))}
      </ul>
      {state.destSelections.length === 0 && (
        <div className="tb-empty">
          <p className="tb-empty__title">No cities to compare yet</p>
          <p className="tb-empty__text">Add a city above to see its local time. Press / to search.</p>
        </div>
      )}
    </>
  )
}
