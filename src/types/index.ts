/**
 * An entry in the offline city index.
 * Provides ranked, scalable city search without an external API.
 * Cities not in the primary timezone dataset are treated as aliases
 * (their timezoneIana maps to an existing primary timezone).
 */
export type CityIndexEntry = {
  name: string
  country: string
  countryCode: string      // ISO 3166-1 alpha-2
  timezoneIana: string
  population?: number           // approximate city population for ranking
  aliases?: string[]            // alternative spellings / short names
  priority?: number             // manual ranking boost 0–100
  capital?: boolean             // true for UN-recognised capital cities
  tier?: 'capital' | 'major' | 'regional'
}

export type TimezoneOption = {
  id: string
  label: string
  city: string
  country: string
  iana: string
  keywords: string[]
}

export type CityAlias = {
  name: string
  country: string
  iana: string
  keywords: string[]
}

/** Unified result from search — either a primary timezone city or a city alias */
export type SearchResult = {
  iana: string
  city: string
  country: string
  isAlias: boolean
  primaryCity?: string // populated when isAlias is true
  hint?: string        // e.g. "Uses London timezone · Europe/London"
}

/** A user-selected destination (primary city or alias), stored in app state */
export type DestSelection = {
  iana: string
  city: string
  country: string
  isAlias: boolean
  primaryCity?: string // primary city name when isAlias is true
}

export type ConversionResult = {
  city: string
  country: string
  iana: string
  isAlias: boolean
  primaryCity?: string
  displayDate: string
  displayTime: string
  abbreviation: string
  /** Day offset vs source date. Known V1 limitation: clamped to -1|0|1. */
  dayOffset: -1 | 0 | 1
}

export type AppState = {
  date: string           // ISO date: "2026-06-30"
  time: string           // HH:MM: "17:00"
  sourceIana: string     // IANA id: "Europe/London"
  destSelections: DestSelection[]
  is24h: boolean
}
