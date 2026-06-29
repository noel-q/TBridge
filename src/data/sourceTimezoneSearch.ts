import { DateTime } from 'luxon'
import { getTimezoneAbbreviation } from '../utils/conversion'
import { ABBREVIATION_INDEX } from './abbreviationIndex'
import { normalizeSearchText } from './cityIndex'
import { SOURCE_TIMEZONES, type SourceTimezoneOption } from './sourceTimezones'

export type SourceTimezoneDetail = SourceTimezoneOption & {
  abbreviations: string[]
  offsets: string[]
  offsetMinutes: number[]
  summary: string
  groupLabel: string
}

export type SourceTimezoneGroup = {
  label: string
  options: SourceTimezoneDetail[]
}

const REPRESENTATIVE_DATES = [
  DateTime.utc(2026, 1, 15, 12),
  DateTime.utc(2026, 7, 15, 12),
]

function formatUtcOffset(minutes: number): string {
  const sign = minutes < 0 ? '−' : '+'
  const absolute = Math.abs(minutes)
  const hours = String(Math.floor(absolute / 60)).padStart(2, '0')
  const mins = String(absolute % 60).padStart(2, '0')
  return `UTC${sign}${hours}:${mins}`
}

function normalizeOffsetQuery(query: string): string | null {
  const compact = query
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '')
    .replace('−', '-')

  const match = compact.match(/^UTC([+-])(\d{1,2})(?::?(\d{2}))?$/)
  if (!match) return null

  const [, sign, rawHours, rawMinutes] = match
  const hours = Number(rawHours)
  const minutes = rawMinutes ? Number(rawMinutes) : 0
  if (hours > 14 || minutes > 59) return null

  const total = hours * 60 + minutes
  return formatUtcOffset(sign === '-' ? -total : total)
}

function getCanonicalAbbreviationCity(query: string): string | null {
  const match = ABBREVIATION_INDEX.find(
    (entry) => normalizeSearchText(entry.abbreviation) === query,
  )
  return match?.city ?? null
}

export function getSourceTimezoneDetails(
  option: SourceTimezoneOption,
): SourceTimezoneDetail {
  const observed = REPRESENTATIVE_DATES.map((date) => {
    const zoned = date.setZone(option.iana)
    return {
      abbreviation: getTimezoneAbbreviation(option.iana, date),
      offsetMinutes: zoned.offset,
    }
  })

  const byOffset = new Map<number, string>()
  for (const item of observed) {
    if (!byOffset.has(item.offsetMinutes)) {
      byOffset.set(item.offsetMinutes, item.abbreviation)
    }
  }

  const offsetMinutes = [...byOffset.keys()].sort((a, b) => a - b)
  const abbreviations = offsetMinutes.map((offset) => byOffset.get(offset) ?? '')
  const offsets = offsetMinutes.map(formatUtcOffset)

  return {
    ...option,
    abbreviations,
    offsets,
    offsetMinutes,
    summary: `${abbreviations.join('/')} • ${offsets.join(' / ')}`,
    groupLabel: offsets[0],
  }
}

export const SOURCE_TIMEZONE_DETAILS: SourceTimezoneDetail[] = SOURCE_TIMEZONES.map(
  getSourceTimezoneDetails,
)

export const SOURCE_TIMEZONE_GROUPS: SourceTimezoneGroup[] = SOURCE_TIMEZONE_DETAILS
  .reduce<SourceTimezoneGroup[]>((groups, option) => {
    const group = groups.find((item) => item.label === option.groupLabel)
    if (group) {
      group.options.push(option)
    } else {
      groups.push({ label: option.groupLabel, options: [option] })
    }
    return groups
  }, [])

export function searchSourceTimezones(query: string): SourceTimezoneDetail[] {
  const q = normalizeSearchText(query)
  if (!q) return SOURCE_TIMEZONE_DETAILS

  const offsetQuery = normalizeOffsetQuery(query)
  const canonicalCity = getCanonicalAbbreviationCity(q)

  return SOURCE_TIMEZONE_DETAILS
    .map((option) => {
      let score: number | null = null
      const city = normalizeSearchText(option.city)
      const iana = normalizeSearchText(option.iana)
      const abbreviations = option.abbreviations.map(normalizeSearchText)
      const offsets = option.offsets.map((offset) => offset.replace('−', '-').toUpperCase())

      if (canonicalCity && normalizeSearchText(canonicalCity) === city) score = 0
      else if (city === q) score = 1
      else if (iana === q) score = 2
      else if (abbreviations.includes(q)) score = 3
      else if (offsetQuery && option.groupLabel === offsetQuery) score = 4
      else if (city.startsWith(q)) score = 5
      else if (iana.includes(q)) score = 6
      else if (city.includes(q)) score = 7
      else if (offsetQuery && option.offsets.includes(offsetQuery)) score = 8
      else if (offsetQuery && offsets.includes(offsetQuery.replace('−', '-'))) score = 8

      return score === null ? null : { option, score }
    })
    .filter((item): item is { option: SourceTimezoneDetail; score: number } => item !== null)
    .sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score
      return a.option.offsetMinutes[0] - b.option.offsetMinutes[0]
    })
    .map((item) => item.option)
}
