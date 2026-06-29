import { DateTime } from 'luxon'
import type { ConversionResult, DestSelection } from '../types'

/**
 * Static fallback abbreviation map keyed by "iana|offsetMinutes".
 *
 * Used when the runtime Intl implementation lacks full ICU data and returns
 * a raw offset string (e.g. "GMT+9") instead of a named abbreviation (e.g. "JST").
 * This covers every timezone in our curated dataset.
 */
const ABBR_FALLBACK: Record<string, string> = {
  // Europe/London: GMT in winter, BST in summer
  'Europe/London|0': 'GMT',
  'Europe/London|60': 'BST',
  // America/New_York
  'America/New_York|-300': 'EST',
  'America/New_York|-240': 'EDT',
  // America/Denver
  'America/Denver|-420': 'MST',
  'America/Denver|-360': 'MDT',
  'America/Phoenix|-420': 'MST',
  // America/Los_Angeles
  'America/Los_Angeles|-480': 'PST',
  'America/Los_Angeles|-420': 'PDT',
  // America/Chicago
  'America/Chicago|-360': 'CST',
  'America/Chicago|-300': 'CDT',
  // America/Toronto
  'America/Toronto|-300': 'EST',
  'America/Toronto|-240': 'EDT',
  // America/Vancouver
  'America/Vancouver|-480': 'PST',
  'America/Vancouver|-420': 'PDT',
  'America/Edmonton|-420': 'MST',
  'America/Edmonton|-360': 'MDT',
  'America/Winnipeg|-360': 'CST',
  'America/Winnipeg|-300': 'CDT',
  // Europe CET/CEST countries
  'Europe/Paris|60': 'CET',
  'Europe/Paris|120': 'CEST',
  'Europe/Berlin|60': 'CET',
  'Europe/Berlin|120': 'CEST',
  'Europe/Madrid|60': 'CET',
  'Europe/Madrid|120': 'CEST',
  'Europe/Rome|60': 'CET',
  'Europe/Rome|120': 'CEST',
  'Europe/Budapest|60': 'CET',
  'Europe/Budapest|120': 'CEST',
  // Europe/Bucharest: EET/EEST
  'Europe/Bucharest|120': 'EET',
  'Europe/Bucharest|180': 'EEST',
  // Europe/Istanbul: no DST
  'Europe/Istanbul|180': 'TRT',
  // Asia/Dubai
  'Asia/Dubai|240': 'GST',
  // Asia/Qatar
  'Asia/Qatar|180': 'AST',
  // Asia/Riyadh
  'Asia/Riyadh|180': 'AST',
  // Asia/Kolkata (India)
  'Asia/Kolkata|330': 'IST',
  // Asia/Singapore
  'Asia/Singapore|480': 'SGT',
  // Asia/Hong_Kong
  'Asia/Hong_Kong|480': 'HKT',
  // Asia/Seoul
  'Asia/Seoul|540': 'KST',
  // Asia/Tokyo
  'Asia/Tokyo|540': 'JST',
  // Australia/Sydney, Australia/Melbourne: AEST/AEDT
  'Australia/Sydney|600': 'AEST',
  'Australia/Sydney|660': 'AEDT',
  'Australia/Melbourne|600': 'AEST',
  'Australia/Melbourne|660': 'AEDT',
  // Pacific/Auckland: NZST/NZDT
  'Pacific/Auckland|720': 'NZST',
  'Pacific/Auckland|780': 'NZDT',
  // Africa
  'Africa/Lagos|60': 'WAT',
  'Africa/Cairo|120': 'EET',
  'Africa/Casablanca|60': '+01',
  'Africa/Johannesburg|120': 'SAST',
  'Africa/Nairobi|180': 'EAT',
  // Asia — South
  'Asia/Dhaka|360': 'BST',
  'Asia/Karachi|300': 'PKT',
  // Asia — Southeast
  'Asia/Kuala_Lumpur|480': 'MYT',
  'Asia/Bangkok|420': 'ICT',
  'Asia/Jakarta|420': 'WIB',
  'Asia/Manila|480': 'PST',
  // Asia — East
  'Asia/Shanghai|480': 'CST',
  // Asia/Pyongyang — aligned with KST since 2018
  'Asia/Pyongyang|540': 'KST',
  // Asia — Middle East & Caucasus
  'Asia/Tehran|210': 'IRST',   // Iran Standard Time (UTC+3:30)
  'Asia/Tehran|270': 'IRDT',   // Iran Daylight Time (UTC+4:30)
  'Asia/Baghdad|180': 'AST',
  'Asia/Beirut|120': 'EET',
  'Asia/Beirut|180': 'EEST',
  'Asia/Amman|120': 'EET',
  'Asia/Amman|180': 'EEST',
  'Asia/Jerusalem|120': 'IST',  // Israel Standard Time
  'Asia/Jerusalem|180': 'IDT',  // Israel Daylight Time
  'Asia/Damascus|120': 'EET',
  'Asia/Damascus|180': 'EEST',
  'Asia/Kuwait|180': 'AST',
  'Asia/Bahrain|180': 'AST',
  'Asia/Tashkent|300': 'UZT',
  'Asia/Almaty|360': 'ALMT',
  'Asia/Baku|240': 'AZT',
  'Asia/Yerevan|240': 'AMT',
  'Asia/Tbilisi|240': 'GET',
  // Americas — Latin America
  'America/Mexico_City|-360': 'CST',
  'America/Mexico_City|-300': 'CDT',
  'America/Bogota|-300': 'COT',
  'America/Lima|-300': 'PET',
  'America/Santiago|-240': 'CLT',
  'America/Santiago|-180': 'CLST',
  'America/Argentina/Buenos_Aires|-180': 'ART',
  'America/Sao_Paulo|-180': 'BRT',
  'America/Manaus|-240': 'AMT',
  // Africa — West & North
  'Africa/Accra|0': 'GMT',
  'Africa/Dakar|0': 'GMT',
  'Africa/Tunis|60': 'CET',
  'Africa/Algiers|60': 'CET',
  // Europe — Western & Nordic
  'Europe/Lisbon|0': 'WET',
  'Europe/Lisbon|60': 'WEST',
  'Europe/Dublin|0': 'GMT',
  'Europe/Dublin|60': 'IST',    // Irish Standard Time
  'Europe/Warsaw|60': 'CET',
  'Europe/Warsaw|120': 'CEST',
  'Europe/Prague|60': 'CET',
  'Europe/Prague|120': 'CEST',
  'Europe/Vienna|60': 'CET',
  'Europe/Vienna|120': 'CEST',
  'Europe/Zurich|60': 'CET',
  'Europe/Zurich|120': 'CEST',
  'Europe/Stockholm|60': 'CET',
  'Europe/Stockholm|120': 'CEST',
  'Europe/Oslo|60': 'CET',
  'Europe/Oslo|120': 'CEST',
  'Europe/Copenhagen|60': 'CET',
  'Europe/Copenhagen|120': 'CEST',
  'Europe/Helsinki|120': 'EET',
  'Europe/Helsinki|180': 'EEST',
  'Europe/Athens|120': 'EET',
  'Europe/Athens|180': 'EEST',
  // Pacific
  'Pacific/Honolulu|-600': 'HST',

  // ── Americas — Alaska ────────────────────────────────────────────────────
  'America/Anchorage|-540': 'AKST',
  'America/Anchorage|-480': 'AKDT',

  // ── Americas — Caribbean ──────────────────────────────────────────────────
  'America/Havana|-300': 'CST',
  'America/Havana|-240': 'CDT',
  'America/Jamaica|-300': 'EST',
  'America/Port-au-Prince|-300': 'EST',
  'America/Port-au-Prince|-240': 'EDT',
  'America/Santo_Domingo|-240': 'AST',
  'America/Puerto_Rico|-240': 'AST',

  // ── Americas — Central America ────────────────────────────────────────────
  'America/Guatemala|-360': 'CST',
  'America/Belize|-360': 'CST',
  'America/Tegucigalpa|-360': 'CST',
  'America/Managua|-360': 'CST',
  'America/El_Salvador|-360': 'CST',
  'America/Costa_Rica|-360': 'CST',
  'America/Panama|-300': 'EST',

  // ── Americas — South America (additional) ────────────────────────────────
  'America/Guayaquil|-300': 'ECT',
  'America/La_Paz|-240': 'BOT',
  'America/Caracas|-240': 'VET',
  'America/Montevideo|-180': 'UYT',
  'America/Asuncion|-240': 'PYT',
  'America/Asuncion|-180': 'PYST',
  'America/Guyana|-240': 'GYT',
  'America/Paramaribo|-180': 'SRT',
  'America/Cayenne|-180': 'GFT',

  // ── Europe — Benelux ─────────────────────────────────────────────────────
  'Europe/Brussels|60': 'CET',
  'Europe/Brussels|120': 'CEST',
  'Europe/Amsterdam|60': 'CET',
  'Europe/Amsterdam|120': 'CEST',
  'Europe/Luxembourg|60': 'CET',
  'Europe/Luxembourg|120': 'CEST',

  // ── Europe — Balkans ─────────────────────────────────────────────────────
  'Europe/Bratislava|60': 'CET',
  'Europe/Bratislava|120': 'CEST',
  'Europe/Ljubljana|60': 'CET',
  'Europe/Ljubljana|120': 'CEST',
  'Europe/Zagreb|60': 'CET',
  'Europe/Zagreb|120': 'CEST',
  'Europe/Sarajevo|60': 'CET',
  'Europe/Sarajevo|120': 'CEST',
  'Europe/Belgrade|60': 'CET',
  'Europe/Belgrade|120': 'CEST',
  'Europe/Podgorica|60': 'CET',
  'Europe/Podgorica|120': 'CEST',
  'Europe/Tirane|60': 'CET',
  'Europe/Tirane|120': 'CEST',
  'Europe/Skopje|60': 'CET',
  'Europe/Skopje|120': 'CEST',
  'Europe/Sofia|120': 'EET',
  'Europe/Sofia|180': 'EEST',
  'Asia/Nicosia|120': 'EET',
  'Asia/Nicosia|180': 'EEST',
  'Europe/Malta|60': 'CET',
  'Europe/Malta|120': 'CEST',

  // ── Europe — Nordic & Atlantic ────────────────────────────────────────────
  'Atlantic/Reykjavik|0': 'GMT',
  'Europe/Tallinn|120': 'EET',
  'Europe/Tallinn|180': 'EEST',
  'Europe/Riga|120': 'EET',
  'Europe/Riga|180': 'EEST',
  'Europe/Vilnius|120': 'EET',
  'Europe/Vilnius|180': 'EEST',

  // ── Europe — Eastern ─────────────────────────────────────────────────────
  'Europe/Kyiv|120': 'EET',
  'Europe/Kyiv|180': 'EEST',
  'Europe/Chisinau|120': 'EET',
  'Europe/Chisinau|180': 'EEST',
  'Europe/Minsk|180': 'FET',
  'Europe/Moscow|180': 'MSK',

  // ── Africa — North ────────────────────────────────────────────────────────
  'Africa/Tripoli|120': 'EET',
  'Africa/Khartoum|180': 'EAT',

  // ── Africa — East ─────────────────────────────────────────────────────────
  'Africa/Juba|180': 'EAT',
  'Africa/Addis_Ababa|180': 'EAT',
  'Africa/Asmara|180': 'EAT',
  'Africa/Djibouti|180': 'EAT',
  'Africa/Mogadishu|180': 'EAT',
  'Africa/Kampala|180': 'EAT',
  'Africa/Dar_es_Salaam|180': 'EAT',
  'Africa/Kigali|120': 'CAT',
  'Africa/Bujumbura|120': 'CAT',
  'Indian/Antananarivo|180': 'EAT',
  'Indian/Comoro|180': 'EAT',

  // ── Africa — Central & West (WAT UTC+1) ──────────────────────────────────
  'Africa/Kinshasa|60': 'WAT',
  'Africa/Brazzaville|60': 'WAT',
  'Africa/Libreville|60': 'WAT',
  'Africa/Malabo|60': 'WAT',
  'Africa/Douala|60': 'WAT',
  'Africa/Bangui|60': 'WAT',
  'Africa/Ndjamena|60': 'WAT',
  'Africa/Porto-Novo|60': 'WAT',
  'Africa/Niamey|60': 'WAT',
  'Africa/Luanda|60': 'WAT',

  // ── Africa — West (GMT UTC+0) ─────────────────────────────────────────────
  'Africa/Lome|0': 'GMT',
  'Africa/Ouagadougou|0': 'GMT',
  'Africa/Bamako|0': 'GMT',
  'Africa/Banjul|0': 'GMT',
  'Africa/Bissau|0': 'GMT',
  'Africa/Conakry|0': 'GMT',
  'Africa/Freetown|0': 'GMT',
  'Africa/Monrovia|0': 'GMT',
  'Africa/Abidjan|0': 'GMT',
  'Africa/Nouakchott|0': 'GMT',
  'Atlantic/Cape_Verde|-60': 'CVT',

  // ── Africa — Southern (CAT UTC+2) ────────────────────────────────────────
  'Africa/Windhoek|120': 'CAT',
  'Africa/Gaborone|120': 'CAT',
  'Africa/Maseru|120': 'SAST',
  'Africa/Mbabane|120': 'SAST',
  'Africa/Maputo|120': 'CAT',
  'Africa/Harare|120': 'CAT',
  'Africa/Lusaka|120': 'CAT',
  'Africa/Blantyre|120': 'CAT',

  // ── Indian Ocean ──────────────────────────────────────────────────────────
  'Indian/Mauritius|240': 'MUT',
  'Indian/Mahe|240': 'SCT',
  'Indian/Maldives|300': 'MVT',

  // ── Asia — Middle East ────────────────────────────────────────────────────
  'Asia/Aden|180': 'AST',
  'Asia/Muscat|240': 'GST',

  // ── Asia — South ──────────────────────────────────────────────────────────
  'Asia/Colombo|330': 'IST',
  'Asia/Kathmandu|345': 'NPT',
  'Asia/Thimphu|360': 'BTT',
  'Asia/Kabul|270': 'AFT',

  // ── Asia — East (additional) ──────────────────────────────────────────────
  'Asia/Taipei|480': 'CST',
  'Asia/Macau|480': 'CST',
  'Asia/Ulaanbaatar|480': 'ULAT',

  // ── Asia — Southeast ──────────────────────────────────────────────────────
  'Asia/Vientiane|420': 'ICT',
  'Asia/Phnom_Penh|420': 'ICT',
  'Asia/Yangon|390': 'MMT',
  'Asia/Brunei|480': 'BNT',
  'Asia/Dili|540': 'TLT',

  // ── Asia — Central ────────────────────────────────────────────────────────
  'Asia/Bishkek|360': 'KGT',
  'Asia/Dushanbe|300': 'TJT',
  'Asia/Ashgabat|300': 'TMT',

  // ── Australia — Additional ────────────────────────────────────────────────
  'Australia/Perth|480': 'AWST',
  'Australia/Brisbane|600': 'AEST',
  'Australia/Adelaide|570': 'ACST',
  'Australia/Adelaide|630': 'ACDT',
  'Australia/Darwin|570': 'ACST',
  'Australia/Hobart|600': 'AEST',
  'Australia/Hobart|660': 'AEDT',

  // ── Pacific ───────────────────────────────────────────────────────────────
  'Pacific/Port_Moresby|600': 'PGT',
  'Pacific/Guadalcanal|660': 'SBT',
  'Pacific/Efate|660': 'VUT',
  'Pacific/Noumea|660': 'NCT',
  'Pacific/Fiji|720': 'FJT',
  'Pacific/Fiji|780': 'FJST',
  'Pacific/Funafuti|720': 'TVT',
  'Pacific/Tarawa|720': 'GILT',
  'Pacific/Majuro|720': 'MHT',
  'Pacific/Pohnpei|660': 'PONT',
  'Pacific/Apia|780': 'WST',
  'Pacific/Tongatapu|780': 'TOT',
}

/**
 * Resolve timezone abbreviation for a Luxon DateTime.
 * Prefers the runtime Intl name; falls back to static map if Intl returns a raw offset.
 */
function resolveAbbreviation(dt: DateTime, iana: string): string {
  const name = dt.offsetNameShort
  // Raw offset strings look like "GMT+9", "GMT-5", "UTC+5:30" — fall back if so
  if (name && !/^(GMT|UTC)[+-]/.test(name)) return name
  const key = `${iana}|${dt.offset}`
  return ABBR_FALLBACK[key] ?? (name ?? dt.toFormat('ZZ'))
}

/**
 * Convert a date + time in a source IANA timezone to one or more destinations.
 * Destinations are DestSelection objects — supports both primary cities and aliases.
 * All DST handling is delegated to Luxon. No manual offset arithmetic.
 */
export function convertTime(
  date: string,      // ISO date string: "2026-06-30"
  time: string,      // HH:MM: "17:00"
  sourceIana: string,
  destinations: DestSelection[],
  is24h: boolean,
): ConversionResult[] {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)

  const sourceDateTime = DateTime.fromObject(
    { year, month, day, hour, minute },
    { zone: sourceIana },
  )

  if (!sourceDateTime.isValid) return []

  return destinations.map((dest) => {
    const converted = sourceDateTime.setZone(dest.iana)

    const dayDiff = converted.startOf('day').diff(sourceDateTime.startOf('day'), 'days').days
    const clampedOffset = Math.max(-1, Math.min(1, Math.round(dayDiff)))
    const dayOffset = clampedOffset as -1 | 0 | 1

    const displayDate = converted.toFormat('EEE d MMM yyyy')
    const displayTime = is24h
      ? converted.toFormat('HH:mm')
      : converted.toFormat('h:mm a')
    const abbreviation = resolveAbbreviation(converted, dest.iana)

    return {
      city: dest.city,
      country: dest.country,
      iana: dest.iana,
      isAlias: dest.isAlias,
      primaryCity: dest.primaryCity,
      displayDate,
      displayTime,
      abbreviation,
      dayOffset,
    }
  })
}

/**
 * Format a single ConversionResult as a plain-text line suitable for copying.
 */
export function formatResultLine(result: ConversionResult): string {
  const dayTag =
    result.dayOffset === 1 ? ' (+1 day)' : result.dayOffset === -1 ? ' (−1 day)' : ''
  return `${result.city}: ${result.displayDate}, ${result.displayTime} ${result.abbreviation}${dayTag}`
}
