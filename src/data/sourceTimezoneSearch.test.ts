import { describe, expect, it } from 'vitest'
import { SOURCE_TIMEZONES } from './sourceTimezones'
import {
  SOURCE_TIMEZONE_DETAILS,
  getSourceTimezoneDetails,
  searchSourceTimezones,
} from './sourceTimezoneSearch'

describe('source timezone search', () => {
  it('keeps London as the default source timezone', () => {
    expect(SOURCE_TIMEZONES[0]).toEqual({ city: 'London', iana: 'Europe/London' })
    expect(SOURCE_TIMEZONE_DETAILS[0].city).toBe('London')
  })

  it('searches by city name', () => {
    const [match] = searchSourceTimezones('tokyo')
    expect(match).toMatchObject({ city: 'Tokyo', iana: 'Asia/Tokyo' })
  })

  it('searches by IANA timezone identifier', () => {
    const [match] = searchSourceTimezones('America/New_York')
    expect(match).toMatchObject({ city: 'New York', iana: 'America/New_York' })
  })

  it('searches by timezone abbreviation', () => {
    expect(searchSourceTimezones('EST')[0]).toMatchObject({
      city: 'New York',
      iana: 'America/New_York',
    })
    expect(searchSourceTimezones('mdt')[0]).toMatchObject({
      city: 'Denver',
      iana: 'America/Denver',
    })
    expect(searchSourceTimezones(' JST ')[0]).toMatchObject({
      city: 'Tokyo',
      iana: 'Asia/Tokyo',
    })
  })

  it('searches by UTC offset', () => {
    expect(searchSourceTimezones('UTC+0').some((option) => option.city === 'London')).toBe(true)
    expect(searchSourceTimezones('UTC+00').some((option) => option.city === 'London')).toBe(true)
    expect(searchSourceTimezones('UTC-5')[0]).toMatchObject({
      city: 'New York',
      iana: 'America/New_York',
    })
    expect(searchSourceTimezones('UTC+09').some((option) => option.city === 'Tokyo')).toBe(true)
  })

  it('renders DST abbreviations for timezones that observe DST', () => {
    expect(getSourceTimezoneDetails({ city: 'London', iana: 'Europe/London' }).summary).toBe(
      'GMT/BST • UTC+00:00 / UTC+01:00',
    )
    expect(getSourceTimezoneDetails({ city: 'New York', iana: 'America/New_York' }).summary).toBe(
      'EST/EDT • UTC−05:00 / UTC−04:00',
    )
    expect(getSourceTimezoneDetails({ city: 'Paris', iana: 'Europe/Paris' }).summary).toBe(
      'CET/CEST • UTC+01:00 / UTC+02:00',
    )
  })

  it('renders a single abbreviation and UTC offset for non-DST timezones', () => {
    expect(getSourceTimezoneDetails({ city: 'Tokyo', iana: 'Asia/Tokyo' }).summary).toBe(
      'JST • UTC+09:00',
    )
    expect(getSourceTimezoneDetails({ city: 'Dubai', iana: 'Asia/Dubai' }).summary).toBe(
      'GST • UTC+04:00',
    )
  })
})
