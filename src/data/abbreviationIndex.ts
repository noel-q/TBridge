export type AbbreviationIndexEntry = {
  abbreviation: string
  city: string
  iana: string
}

export const ABBREVIATION_INDEX: AbbreviationIndexEntry[] = [
  { abbreviation: 'UTC', city: 'London', iana: 'Europe/London' },
  { abbreviation: 'GMT', city: 'London', iana: 'Europe/London' },
  { abbreviation: 'BST', city: 'London', iana: 'Europe/London' },

  { abbreviation: 'EST', city: 'New York', iana: 'America/New_York' },
  { abbreviation: 'EDT', city: 'New York', iana: 'America/New_York' },
  { abbreviation: 'CST', city: 'Chicago', iana: 'America/Chicago' },
  { abbreviation: 'CDT', city: 'Chicago', iana: 'America/Chicago' },
  { abbreviation: 'MST', city: 'Denver', iana: 'America/Denver' },
  { abbreviation: 'MDT', city: 'Denver', iana: 'America/Denver' },
  { abbreviation: 'PST', city: 'Los Angeles', iana: 'America/Los_Angeles' },
  { abbreviation: 'PDT', city: 'Los Angeles', iana: 'America/Los_Angeles' },

  { abbreviation: 'CET', city: 'Paris', iana: 'Europe/Paris' },
  { abbreviation: 'CEST', city: 'Paris', iana: 'Europe/Paris' },
  { abbreviation: 'EET', city: 'Bucharest', iana: 'Europe/Bucharest' },
  { abbreviation: 'EEST', city: 'Bucharest', iana: 'Europe/Bucharest' },

  { abbreviation: 'GST', city: 'Dubai', iana: 'Asia/Dubai' },
  { abbreviation: 'AST', city: 'Riyadh', iana: 'Asia/Riyadh' },
  { abbreviation: 'IST', city: 'Mumbai', iana: 'Asia/Kolkata' },

  { abbreviation: 'SGT', city: 'Singapore', iana: 'Asia/Singapore' },
  { abbreviation: 'HKT', city: 'Hong Kong', iana: 'Asia/Hong_Kong' },
  { abbreviation: 'JST', city: 'Tokyo', iana: 'Asia/Tokyo' },
  { abbreviation: 'KST', city: 'Seoul', iana: 'Asia/Seoul' },

  { abbreviation: 'AEST', city: 'Sydney', iana: 'Australia/Sydney' },
  { abbreviation: 'AEDT', city: 'Sydney', iana: 'Australia/Sydney' },
  { abbreviation: 'NZST', city: 'Auckland', iana: 'Pacific/Auckland' },
  { abbreviation: 'NZDT', city: 'Auckland', iana: 'Pacific/Auckland' },
]
