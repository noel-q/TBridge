import type { CityIndexEntry } from '../types'

export const CITY_INDEX: CityIndexEntry[] = [
  // ── United Kingdom ────────────────────────────────────────────────────────
  { name: 'London',       country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 100, capital: true,  tier: 'capital' },
  { name: 'Manchester',   country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 72, tier: 'major' },
  { name: 'Birmingham',   country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 70, tier: 'major' },
  { name: 'Edinburgh',    country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 68, tier: 'major' },
  { name: 'Glasgow',      country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 66, tier: 'major' },
  { name: 'Belfast',      country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 62, tier: 'major' },
  { name: 'Cardiff',      country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 60, tier: 'major' },
  { name: 'Bristol',      country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 58, tier: 'major' },
  { name: 'Leeds',        country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 56, tier: 'major' },
  { name: 'Liverpool',    country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 54, tier: 'major' },
  { name: 'Sheffield',    country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 52, tier: 'major' },
  { name: 'York',         country: 'United Kingdom', countryCode: 'GB', timezoneIana: 'Europe/London',  priority: 40, tier: 'regional' },
  { name: 'York',         country: 'United States',  countryCode: 'US', timezoneIana: 'America/New_York', priority: 10, tier: 'regional' },

  // ── United States ─────────────────────────────────────────────────────────
  { name: 'New York',      country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 100, tier: 'major' },
  { name: 'Washington',    country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 95, capital: true, tier: 'capital', aliases: ['Washington DC', 'DC'] },
  { name: 'Philadelphia',  country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 68, tier: 'major' },
  { name: 'Boston',        country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 70, tier: 'major' },
  { name: 'Atlanta',       country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 66, tier: 'major' },
  { name: 'Miami',         country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 70, tier: 'major' },
  { name: 'Detroit',       country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 60, tier: 'major' },
  { name: 'Baltimore',     country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 58, tier: 'major' },
  { name: 'Jacksonville',  country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 56, tier: 'major' },
  { name: 'Columbus',      country: 'United States', countryCode: 'US', timezoneIana: 'America/New_York',  priority: 54, tier: 'major' },
  { name: 'Chicago',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 90, tier: 'major' },
  { name: 'Houston',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 78, tier: 'major' },
  { name: 'Dallas',        country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 72, tier: 'major' },
  { name: 'San Antonio',   country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 64, tier: 'major' },
  { name: 'Austin',        country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 68, tier: 'major' },
  { name: 'Memphis',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 58, tier: 'major' },
  { name: 'Nashville',     country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 62, tier: 'major' },
  { name: 'Oklahoma City', country: 'United States', countryCode: 'US', timezoneIana: 'America/Chicago',   priority: 56, tier: 'major' },
  { name: 'Denver',        country: 'United States', countryCode: 'US', timezoneIana: 'America/Denver',    priority: 80, tier: 'major' },
  { name: 'Boulder',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Denver',    priority: 54, tier: 'regional' },
  { name: 'Phoenix',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Phoenix',   priority: 75, tier: 'major' },
  { name: 'Los Angeles',   country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 95, tier: 'major' },
  { name: 'San Francisco', country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 82, tier: 'major' },
  { name: 'Seattle',       country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 76, tier: 'major' },
  { name: 'San Diego',     country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 70, tier: 'major' },
  { name: 'Portland',      country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 65, tier: 'major' },
  { name: 'Las Vegas',     country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 72, tier: 'major' },
  { name: 'San Jose',      country: 'United States', countryCode: 'US', timezoneIana: 'America/Los_Angeles', priority: 64, tier: 'major' },
  { name: 'Honolulu',      country: 'United States', countryCode: 'US', timezoneIana: 'Pacific/Honolulu',  priority: 80, tier: 'major' },
  { name: 'Anchorage',     country: 'United States', countryCode: 'US', timezoneIana: 'America/Anchorage', priority: 72, tier: 'major' },

  // ── Canada ────────────────────────────────────────────────────────────────
  { name: 'Ottawa',      country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Toronto',   priority: 88, capital: true, tier: 'capital' },
  { name: 'Toronto',     country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Toronto',   priority: 90, tier: 'major' },
  { name: 'Montreal',    country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Toronto',   priority: 82, tier: 'major', aliases: ['Montreal'] },
  { name: 'Vancouver',   country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Vancouver', priority: 82, tier: 'major' },
  { name: 'Calgary',     country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Edmonton',  priority: 70, tier: 'major' },
  { name: 'Edmonton',    country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Edmonton',  priority: 68, tier: 'major' },
  { name: 'Winnipeg',    country: 'Canada', countryCode: 'CA', timezoneIana: 'America/Winnipeg',  priority: 64, tier: 'major' },

  // ── Mexico ────────────────────────────────────────────────────────────────
  { name: 'Mexico City', country: 'Mexico', countryCode: 'MX', timezoneIana: 'America/Mexico_City', priority: 92, capital: true, tier: 'capital' },
  { name: 'Guadalajara', country: 'Mexico', countryCode: 'MX', timezoneIana: 'America/Mexico_City', priority: 72, tier: 'major' },
  { name: 'Monterrey',   country: 'Mexico', countryCode: 'MX', timezoneIana: 'America/Mexico_City', priority: 70, tier: 'major' },

  // ── Central America ───────────────────────────────────────────────────────
  { name: 'Guatemala City', country: 'Guatemala',  countryCode: 'GT', timezoneIana: 'America/Guatemala',    priority: 75, capital: true, tier: 'capital' },
  { name: 'Belmopan',    country: 'Belize',         countryCode: 'BZ', timezoneIana: 'America/Belize',      priority: 60, capital: true, tier: 'capital' },
  { name: 'Tegucigalpa', country: 'Honduras',       countryCode: 'HN', timezoneIana: 'America/Tegucigalpa', priority: 65, capital: true, tier: 'capital' },
  { name: 'Managua',     country: 'Nicaragua',      countryCode: 'NI', timezoneIana: 'America/Managua',     priority: 68, capital: true, tier: 'capital' },
  { name: 'San Salvador', country: 'El Salvador',   countryCode: 'SV', timezoneIana: 'America/El_Salvador', priority: 68, capital: true, tier: 'capital' },
  { name: 'San Jose',    country: 'Costa Rica',      countryCode: 'CR', timezoneIana: 'America/Costa_Rica',  priority: 72, capital: true, tier: 'capital', aliases: ['San Jose CR'] },
  { name: 'Panama City', country: 'Panama',          countryCode: 'PA', timezoneIana: 'America/Panama',      priority: 72, capital: true, tier: 'capital', aliases: ['Panama'] },

  // ── Caribbean ─────────────────────────────────────────────────────────────
  { name: 'Havana',        country: 'Cuba',                countryCode: 'CU', timezoneIana: 'America/Havana',          priority: 80, capital: true, tier: 'capital' },
  { name: 'Kingston',      country: 'Jamaica',             countryCode: 'JM', timezoneIana: 'America/Jamaica',         priority: 72, capital: true, tier: 'capital' },
  { name: 'Port-au-Prince', country: 'Haiti',              countryCode: 'HT', timezoneIana: 'America/Port-au-Prince',  priority: 68, capital: true, tier: 'capital' },
  { name: 'Santo Domingo', country: 'Dominican Republic',  countryCode: 'DO', timezoneIana: 'America/Santo_Domingo',   priority: 72, capital: true, tier: 'capital' },
  { name: 'San Juan',      country: 'Puerto Rico',         countryCode: 'PR', timezoneIana: 'America/Puerto_Rico',     priority: 70, tier: 'major' },

  // ── South America ─────────────────────────────────────────────────────────
  { name: 'Bogota',      country: 'Colombia',  countryCode: 'CO', timezoneIana: 'America/Bogota',     priority: 88, capital: true, tier: 'capital', aliases: ['Bogota'] },
  { name: 'Medellin',    country: 'Colombia',  countryCode: 'CO', timezoneIana: 'America/Bogota',     priority: 70, tier: 'major', aliases: ['Medellin'] },
  { name: 'Cartagena',   country: 'Colombia',  countryCode: 'CO', timezoneIana: 'America/Bogota',     priority: 60, tier: 'major' },
  { name: 'Lima',        country: 'Peru',      countryCode: 'PE', timezoneIana: 'America/Lima',       priority: 88, capital: true, tier: 'capital' },
  { name: 'Quito',       country: 'Ecuador',   countryCode: 'EC', timezoneIana: 'America/Guayaquil',  priority: 82, capital: true, tier: 'capital' },
  { name: 'Guayaquil',   country: 'Ecuador',   countryCode: 'EC', timezoneIana: 'America/Guayaquil',  priority: 72, tier: 'major' },
  { name: 'Caracas',     country: 'Venezuela', countryCode: 'VE', timezoneIana: 'America/Caracas',    priority: 85, capital: true, tier: 'capital' },
  { name: 'La Paz',      country: 'Bolivia',   countryCode: 'BO', timezoneIana: 'America/La_Paz',     priority: 78, capital: true, tier: 'capital' },
  { name: 'Asuncion',    country: 'Paraguay',  countryCode: 'PY', timezoneIana: 'America/Asuncion',   priority: 75, capital: true, tier: 'capital', aliases: ['Asuncion'] },
  { name: 'Santiago',    country: 'Chile',     countryCode: 'CL', timezoneIana: 'America/Santiago',   priority: 88, capital: true, tier: 'capital' },
  { name: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', timezoneIana: 'America/Argentina/Buenos_Aires', priority: 92, capital: true, tier: 'capital' },
  { name: 'Montevideo',  country: 'Uruguay',   countryCode: 'UY', timezoneIana: 'America/Montevideo', priority: 78, capital: true, tier: 'capital' },
  { name: 'São Paulo',   country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 95, tier: 'major', aliases: ['Sao Paulo'] },
  { name: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 88, tier: 'major' },
  { name: 'Brasilia',    country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 85, capital: true, tier: 'capital', aliases: ['Brasilia'] },
  { name: 'Salvador',    country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 68, tier: 'major' },
  { name: 'Fortaleza',   country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 64, tier: 'major' },
  { name: 'Curitiba',    country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Sao_Paulo',  priority: 62, tier: 'major' },
  { name: 'Manaus',      country: 'Brazil',    countryCode: 'BR', timezoneIana: 'America/Manaus',     priority: 65, tier: 'major' },
  { name: 'Georgetown',  country: 'Guyana',    countryCode: 'GY', timezoneIana: 'America/Guyana',     priority: 68, capital: true, tier: 'capital' },
  { name: 'Paramaribo',  country: 'Suriname',  countryCode: 'SR', timezoneIana: 'America/Paramaribo', priority: 65, capital: true, tier: 'capital' },
  { name: 'Cayenne',     country: 'French Guiana', countryCode: 'GF', timezoneIana: 'America/Cayenne', priority: 58, capital: true, tier: 'capital' },

  // ── France ────────────────────────────────────────────────────────────────
  { name: 'Paris',      country: 'France', countryCode: 'FR', timezoneIana: 'Europe/Paris',  priority: 100, capital: true, tier: 'capital' },
  { name: 'Lyon',       country: 'France', countryCode: 'FR', timezoneIana: 'Europe/Paris',  priority: 68, tier: 'major' },
  { name: 'Marseille',  country: 'France', countryCode: 'FR', timezoneIana: 'Europe/Paris',  priority: 66, tier: 'major' },
  { name: 'Nice',       country: 'France', countryCode: 'FR', timezoneIana: 'Europe/Paris',  priority: 64, tier: 'major' },

  // ── Germany ───────────────────────────────────────────────────────────────
  { name: 'Berlin',    country: 'Germany', countryCode: 'DE', timezoneIana: 'Europe/Berlin', priority: 100, capital: true, tier: 'capital' },
  { name: 'Munich',    country: 'Germany', countryCode: 'DE', timezoneIana: 'Europe/Berlin', priority: 76, tier: 'major', aliases: ['Munchen'] },
  { name: 'Hamburg',   country: 'Germany', countryCode: 'DE', timezoneIana: 'Europe/Berlin', priority: 72, tier: 'major' },
  { name: 'Frankfurt', country: 'Germany', countryCode: 'DE', timezoneIana: 'Europe/Berlin', priority: 74, tier: 'major' },
  { name: 'Cologne',   country: 'Germany', countryCode: 'DE', timezoneIana: 'Europe/Berlin', priority: 68, tier: 'major', aliases: ['Koeln'] },

  // ── Spain ─────────────────────────────────────────────────────────────────
  { name: 'Madrid',    country: 'Spain', countryCode: 'ES', timezoneIana: 'Europe/Madrid', priority: 100, capital: true, tier: 'capital' },
  { name: 'Barcelona', country: 'Spain', countryCode: 'ES', timezoneIana: 'Europe/Madrid', priority: 82, tier: 'major' },
  { name: 'Seville',   country: 'Spain', countryCode: 'ES', timezoneIana: 'Europe/Madrid', priority: 64, tier: 'major', aliases: ['Sevilla'] },
  { name: 'Valencia',  country: 'Spain', countryCode: 'ES', timezoneIana: 'Europe/Madrid', priority: 66, tier: 'major' },

  // ── Italy ─────────────────────────────────────────────────────────────────
  { name: 'Rome',   country: 'Italy', countryCode: 'IT', timezoneIana: 'Europe/Rome', priority: 100, capital: true, tier: 'capital' },
  { name: 'Milan',  country: 'Italy', countryCode: 'IT', timezoneIana: 'Europe/Rome', priority: 82, tier: 'major', aliases: ['Milano'] },
  { name: 'Naples', country: 'Italy', countryCode: 'IT', timezoneIana: 'Europe/Rome', priority: 66, tier: 'major', aliases: ['Napoli'] },
  { name: 'Turin',  country: 'Italy', countryCode: 'IT', timezoneIana: 'Europe/Rome', priority: 64, tier: 'major', aliases: ['Torino'] },

  // ── Benelux ───────────────────────────────────────────────────────────────
  { name: 'Brussels',   country: 'Belgium',     countryCode: 'BE', timezoneIana: 'Europe/Brussels',   priority: 88, capital: true, tier: 'capital', aliases: ['Bruxelles', 'Brussel'] },
  { name: 'Amsterdam',  country: 'Netherlands', countryCode: 'NL', timezoneIana: 'Europe/Amsterdam',  priority: 90, capital: true, tier: 'capital' },
  { name: 'Luxembourg', country: 'Luxembourg',  countryCode: 'LU', timezoneIana: 'Europe/Luxembourg', priority: 75, capital: true, tier: 'capital' },

  // ── Portugal / Ireland ────────────────────────────────────────────────────
  { name: 'Lisbon', country: 'Portugal', countryCode: 'PT', timezoneIana: 'Europe/Lisbon', priority: 88, capital: true, tier: 'capital', aliases: ['Lisboa'] },
  { name: 'Dublin', country: 'Ireland',  countryCode: 'IE', timezoneIana: 'Europe/Dublin', priority: 88, capital: true, tier: 'capital' },

  // ── Scandinavia / Nordic ──────────────────────────────────────────────────
  { name: 'Oslo',       country: 'Norway',  countryCode: 'NO', timezoneIana: 'Europe/Oslo',        priority: 85, capital: true, tier: 'capital' },
  { name: 'Stockholm',  country: 'Sweden',  countryCode: 'SE', timezoneIana: 'Europe/Stockholm',   priority: 88, capital: true, tier: 'capital' },
  { name: 'Copenhagen', country: 'Denmark', countryCode: 'DK', timezoneIana: 'Europe/Copenhagen',  priority: 85, capital: true, tier: 'capital' },
  { name: 'Helsinki',   country: 'Finland', countryCode: 'FI', timezoneIana: 'Europe/Helsinki',    priority: 83, capital: true, tier: 'capital' },
  { name: 'Reykjavik',  country: 'Iceland', countryCode: 'IS', timezoneIana: 'Atlantic/Reykjavik', priority: 78, capital: true, tier: 'capital' },

  // ── Central Europe ────────────────────────────────────────────────────────
  { name: 'Vienna',     country: 'Austria',         countryCode: 'AT', timezoneIana: 'Europe/Vienna',    priority: 88, capital: true, tier: 'capital' },
  { name: 'Zurich',     country: 'Switzerland',     countryCode: 'CH', timezoneIana: 'Europe/Zurich',    priority: 85, tier: 'major' },
  { name: 'Bern',       country: 'Switzerland',     countryCode: 'CH', timezoneIana: 'Europe/Zurich',    priority: 70, capital: true, tier: 'capital' },
  { name: 'Warsaw',     country: 'Poland',          countryCode: 'PL', timezoneIana: 'Europe/Warsaw',    priority: 88, capital: true, tier: 'capital' },
  { name: 'Prague',     country: 'Czech Republic',  countryCode: 'CZ', timezoneIana: 'Europe/Prague',    priority: 85, capital: true, tier: 'capital' },
  { name: 'Budapest',   country: 'Hungary',         countryCode: 'HU', timezoneIana: 'Europe/Budapest',  priority: 85, capital: true, tier: 'capital' },
  { name: 'Bratislava', country: 'Slovakia',        countryCode: 'SK', timezoneIana: 'Europe/Bratislava', priority: 75, capital: true, tier: 'capital' },
  { name: 'Ljubljana',  country: 'Slovenia',        countryCode: 'SI', timezoneIana: 'Europe/Ljubljana',  priority: 70, capital: true, tier: 'capital' },

  // ── Balkans ───────────────────────────────────────────────────────────────
  { name: 'Zagreb',     country: 'Croatia',                  countryCode: 'HR', timezoneIana: 'Europe/Zagreb',    priority: 72, capital: true, tier: 'capital' },
  { name: 'Belgrade',   country: 'Serbia',                   countryCode: 'RS', timezoneIana: 'Europe/Belgrade',  priority: 75, capital: true, tier: 'capital' },
  { name: 'Sarajevo',   country: 'Bosnia and Herzegovina',   countryCode: 'BA', timezoneIana: 'Europe/Sarajevo',  priority: 68, capital: true, tier: 'capital' },
  { name: 'Podgorica',  country: 'Montenegro',               countryCode: 'ME', timezoneIana: 'Europe/Podgorica', priority: 60, capital: true, tier: 'capital' },
  { name: 'Tirana',     country: 'Albania',                  countryCode: 'AL', timezoneIana: 'Europe/Tirane',    priority: 65, capital: true, tier: 'capital' },
  { name: 'Skopje',     country: 'North Macedonia',          countryCode: 'MK', timezoneIana: 'Europe/Skopje',    priority: 63, capital: true, tier: 'capital' },
  { name: 'Athens',     country: 'Greece',                   countryCode: 'GR', timezoneIana: 'Europe/Athens',    priority: 90, capital: true, tier: 'capital' },
  { name: 'Bucharest',  country: 'Romania',                  countryCode: 'RO', timezoneIana: 'Europe/Bucharest', priority: 82, capital: true, tier: 'capital' },
  { name: 'Sofia',      country: 'Bulgaria',                 countryCode: 'BG', timezoneIana: 'Europe/Sofia',     priority: 78, capital: true, tier: 'capital' },

  // ── Baltic ────────────────────────────────────────────────────────────────
  { name: 'Tallinn', country: 'Estonia',   countryCode: 'EE', timezoneIana: 'Europe/Tallinn', priority: 70, capital: true, tier: 'capital' },
  { name: 'Riga',    country: 'Latvia',    countryCode: 'LV', timezoneIana: 'Europe/Riga',    priority: 70, capital: true, tier: 'capital' },
  { name: 'Vilnius', country: 'Lithuania', countryCode: 'LT', timezoneIana: 'Europe/Vilnius', priority: 70, capital: true, tier: 'capital' },

  // ── Eastern Europe ────────────────────────────────────────────────────────
  { name: 'Kyiv',        country: 'Ukraine', countryCode: 'UA', timezoneIana: 'Europe/Kyiv',     priority: 88, capital: true, tier: 'capital', aliases: ['Kiev'] },
  { name: 'Chisinau',    country: 'Moldova', countryCode: 'MD', timezoneIana: 'Europe/Chisinau', priority: 65, capital: true, tier: 'capital' },
  { name: 'Minsk',       country: 'Belarus', countryCode: 'BY', timezoneIana: 'Europe/Minsk',    priority: 75, capital: true, tier: 'capital' },
  { name: 'Moscow',      country: 'Russia',  countryCode: 'RU', timezoneIana: 'Europe/Moscow',   priority: 95, capital: true, tier: 'capital' },
  { name: 'St Petersburg', country: 'Russia', countryCode: 'RU', timezoneIana: 'Europe/Moscow',  priority: 78, tier: 'major', aliases: ['Saint Petersburg'] },

  // ── Mediterranean micro-states ────────────────────────────────────────────
  { name: 'Nicosia',    country: 'Cyprus',        countryCode: 'CY', timezoneIana: 'Asia/Nicosia',      priority: 68, capital: true, tier: 'capital' },
  { name: 'Valletta',   country: 'Malta',         countryCode: 'MT', timezoneIana: 'Europe/Malta',      priority: 63, capital: true, tier: 'capital' },
  { name: 'Monaco',     country: 'Monaco',        countryCode: 'MC', timezoneIana: 'Europe/Paris',      priority: 65, capital: true, tier: 'capital' },
  { name: 'Andorra la Vella', country: 'Andorra', countryCode: 'AD', timezoneIana: 'Europe/Paris',      priority: 55, capital: true, tier: 'capital', aliases: ['Andorra'] },
  { name: 'San Marino', country: 'San Marino',    countryCode: 'SM', timezoneIana: 'Europe/Rome',       priority: 52, capital: true, tier: 'capital' },
  { name: 'Vatican City', country: 'Vatican City', countryCode: 'VA', timezoneIana: 'Europe/Rome',      priority: 60, capital: true, tier: 'capital' },
  { name: 'Vaduz',      country: 'Liechtenstein', countryCode: 'LI', timezoneIana: 'Europe/Zurich',     priority: 50, capital: true, tier: 'capital' },

  // ── Middle East ───────────────────────────────────────────────────────────
  { name: 'Ankara',     country: 'Turkey',       countryCode: 'TR', timezoneIana: 'Europe/Istanbul', priority: 88, capital: true, tier: 'capital' },
  { name: 'Istanbul',   country: 'Turkey',       countryCode: 'TR', timezoneIana: 'Europe/Istanbul', priority: 92, tier: 'major' },
  { name: 'Dubai',      country: 'UAE',          countryCode: 'AE', timezoneIana: 'Asia/Dubai',      priority: 95, tier: 'major' },
  { name: 'Abu Dhabi',  country: 'UAE',          countryCode: 'AE', timezoneIana: 'Asia/Dubai',      priority: 85, capital: true, tier: 'capital' },
  { name: 'Doha',       country: 'Qatar',        countryCode: 'QA', timezoneIana: 'Asia/Qatar',      priority: 85, capital: true, tier: 'capital' },
  { name: 'Riyadh',     country: 'Saudi Arabia', countryCode: 'SA', timezoneIana: 'Asia/Riyadh',     priority: 90, capital: true, tier: 'capital' },
  { name: 'Jeddah',     country: 'Saudi Arabia', countryCode: 'SA', timezoneIana: 'Asia/Riyadh',     priority: 72, tier: 'major' },
  { name: 'Mecca',      country: 'Saudi Arabia', countryCode: 'SA', timezoneIana: 'Asia/Riyadh',     priority: 68, tier: 'major' },
  { name: 'Medina',     country: 'Saudi Arabia', countryCode: 'SA', timezoneIana: 'Asia/Riyadh',     priority: 62, tier: 'major' },
  { name: 'Beirut',     country: 'Lebanon',      countryCode: 'LB', timezoneIana: 'Asia/Beirut',     priority: 82, capital: true, tier: 'capital' },
  { name: 'Amman',      country: 'Jordan',       countryCode: 'JO', timezoneIana: 'Asia/Amman',      priority: 80, capital: true, tier: 'capital' },
  { name: 'Damascus',   country: 'Syria',        countryCode: 'SY', timezoneIana: 'Asia/Damascus',   priority: 78, capital: true, tier: 'capital' },
  { name: 'Jerusalem',  country: 'Israel',       countryCode: 'IL', timezoneIana: 'Asia/Jerusalem',  priority: 80, capital: true, tier: 'capital' },
  { name: 'Tel Aviv',   country: 'Israel',       countryCode: 'IL', timezoneIana: 'Asia/Jerusalem',  priority: 82, tier: 'major' },
  { name: 'Kuwait City', country: 'Kuwait',      countryCode: 'KW', timezoneIana: 'Asia/Kuwait',     priority: 78, capital: true, tier: 'capital' },
  { name: 'Manama',     country: 'Bahrain',      countryCode: 'BH', timezoneIana: 'Asia/Bahrain',    priority: 72, capital: true, tier: 'capital' },
  { name: 'Muscat',     country: 'Oman',         countryCode: 'OM', timezoneIana: 'Asia/Muscat',     priority: 75, capital: true, tier: 'capital' },
  { name: 'Sanaa',      country: 'Yemen',        countryCode: 'YE', timezoneIana: 'Asia/Aden',       priority: 68, capital: true, tier: 'capital', aliases: ["Sana'a"] },
  { name: 'Baghdad',    country: 'Iraq',         countryCode: 'IQ', timezoneIana: 'Asia/Baghdad',    priority: 85, capital: true, tier: 'capital' },
  { name: 'Tehran',     country: 'Iran',         countryCode: 'IR', timezoneIana: 'Asia/Tehran',     priority: 90, capital: true, tier: 'capital' },

  // ── Caucasus ──────────────────────────────────────────────────────────────
  { name: 'Baku',    country: 'Azerbaijan', countryCode: 'AZ', timezoneIana: 'Asia/Baku',    priority: 75, capital: true, tier: 'capital' },
  { name: 'Yerevan', country: 'Armenia',    countryCode: 'AM', timezoneIana: 'Asia/Yerevan', priority: 72, capital: true, tier: 'capital' },
  { name: 'Tbilisi', country: 'Georgia',    countryCode: 'GE', timezoneIana: 'Asia/Tbilisi', priority: 72, capital: true, tier: 'capital' },

  // ── Central Asia ──────────────────────────────────────────────────────────
  { name: 'Tashkent', country: 'Uzbekistan',   countryCode: 'UZ', timezoneIana: 'Asia/Tashkent', priority: 75, capital: true, tier: 'capital' },
  { name: 'Almaty',   country: 'Kazakhstan',   countryCode: 'KZ', timezoneIana: 'Asia/Almaty',   priority: 72, tier: 'major' },
  { name: 'Astana',   country: 'Kazakhstan',   countryCode: 'KZ', timezoneIana: 'Asia/Almaty',   priority: 75, capital: true, tier: 'capital', aliases: ['Nur-Sultan'] },
  { name: 'Bishkek',  country: 'Kyrgyzstan',   countryCode: 'KG', timezoneIana: 'Asia/Bishkek',  priority: 65, capital: true, tier: 'capital' },
  { name: 'Dushanbe', country: 'Tajikistan',   countryCode: 'TJ', timezoneIana: 'Asia/Dushanbe', priority: 62, capital: true, tier: 'capital' },
  { name: 'Ashgabat', country: 'Turkmenistan', countryCode: 'TM', timezoneIana: 'Asia/Ashgabat', priority: 62, capital: true, tier: 'capital' },
  { name: 'Kabul',    country: 'Afghanistan',  countryCode: 'AF', timezoneIana: 'Asia/Kabul',    priority: 78, capital: true, tier: 'capital' },

  // ── South Asia ────────────────────────────────────────────────────────────
  { name: 'Islamabad', country: 'Pakistan',    countryCode: 'PK', timezoneIana: 'Asia/Karachi', priority: 80, capital: true, tier: 'capital' },
  { name: 'Karachi',   country: 'Pakistan',    countryCode: 'PK', timezoneIana: 'Asia/Karachi', priority: 88, tier: 'major' },
  { name: 'Lahore',    country: 'Pakistan',    countryCode: 'PK', timezoneIana: 'Asia/Karachi', priority: 75, tier: 'major' },
  { name: 'Delhi',     country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 88, tier: 'major' },
  { name: 'New Delhi', country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 95, capital: true, tier: 'capital', aliases: ['Delhi'] },
  { name: 'Mumbai',    country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 92, tier: 'major', aliases: ['Bombay'] },
  { name: 'Bangalore', country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 82, tier: 'major', aliases: ['Bengaluru'] },
  { name: 'Chennai',   country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 78, tier: 'major', aliases: ['Madras'] },
  { name: 'Hyderabad', country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 76, tier: 'major' },
  { name: 'Kolkata',   country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 78, tier: 'major', aliases: ['Calcutta'] },
  { name: 'Ahmedabad', country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 70, tier: 'major' },
  { name: 'Pune',      country: 'India',       countryCode: 'IN', timezoneIana: 'Asia/Kolkata', priority: 68, tier: 'major' },
  { name: 'Kathmandu', country: 'Nepal',       countryCode: 'NP', timezoneIana: 'Asia/Kathmandu', priority: 80, capital: true, tier: 'capital' },
  { name: 'Thimphu',   country: 'Bhutan',      countryCode: 'BT', timezoneIana: 'Asia/Thimphu',   priority: 62, capital: true, tier: 'capital' },
  { name: 'Dhaka',     country: 'Bangladesh',  countryCode: 'BD', timezoneIana: 'Asia/Dhaka',     priority: 85, capital: true, tier: 'capital' },
  { name: 'Chittagong', country: 'Bangladesh', countryCode: 'BD', timezoneIana: 'Asia/Dhaka',     priority: 68, tier: 'major' },
  { name: 'Sylhet',    country: 'Bangladesh',  countryCode: 'BD', timezoneIana: 'Asia/Dhaka',     priority: 54, tier: 'regional' },
  { name: 'Colombo',   country: 'Sri Lanka',   countryCode: 'LK', timezoneIana: 'Asia/Colombo',   priority: 78, capital: true, tier: 'capital' },
  { name: 'Male',      country: 'Maldives',    countryCode: 'MV', timezoneIana: 'Indian/Maldives', priority: 65, capital: true, tier: 'capital' },

  // ── East Asia ─────────────────────────────────────────────────────────────
  { name: 'Beijing',   country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 98, capital: true, tier: 'capital' },
  { name: 'Shanghai',  country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 96, tier: 'major' },
  { name: 'Chengdu',   country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 72, tier: 'major' },
  { name: 'Guangzhou', country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 80, tier: 'major' },
  { name: 'Shenzhen',  country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 78, tier: 'major' },
  { name: 'Chongqing', country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 72, tier: 'major' },
  { name: "Xi'an",     country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 68, tier: 'major', aliases: ['Xian'] },
  { name: 'Wuhan',     country: 'China',      countryCode: 'CN', timezoneIana: 'Asia/Shanghai', priority: 70, tier: 'major' },
  { name: 'Hong Kong', country: 'Hong Kong',  countryCode: 'HK', timezoneIana: 'Asia/Hong_Kong', priority: 92, tier: 'major' },
  { name: 'Macau',     country: 'Macau',      countryCode: 'MO', timezoneIana: 'Asia/Macau',     priority: 70, tier: 'major', aliases: ['Macao'] },
  { name: 'Taipei',    country: 'Taiwan',     countryCode: 'TW', timezoneIana: 'Asia/Taipei',    priority: 85, capital: true, tier: 'capital' },
  { name: 'Tokyo',     country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 100, capital: true, tier: 'capital' },
  { name: 'Osaka',     country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 80, tier: 'major' },
  { name: 'Kyoto',     country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 62, tier: 'major' },
  { name: 'Yokohama',  country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 72, tier: 'major' },
  { name: 'Nagoya',    country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 68, tier: 'major' },
  { name: 'Sapporo',   country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 65, tier: 'major' },
  { name: 'Hiroshima', country: 'Japan',      countryCode: 'JP', timezoneIana: 'Asia/Tokyo',     priority: 62, tier: 'major' },
  { name: 'Seoul',     country: 'South Korea', countryCode: 'KR', timezoneIana: 'Asia/Seoul',     priority: 95, capital: true, tier: 'capital' },
  { name: 'Pyongyang', country: 'North Korea', countryCode: 'KP', timezoneIana: 'Asia/Pyongyang', priority: 72, capital: true, tier: 'capital' },
  { name: 'Ulaanbaatar', country: 'Mongolia', countryCode: 'MN', timezoneIana: 'Asia/Ulaanbaatar', priority: 65, capital: true, tier: 'capital' },

  // ── Southeast Asia ────────────────────────────────────────────────────────
  { name: 'Singapore',   country: 'Singapore',  countryCode: 'SG', timezoneIana: 'Asia/Singapore',    priority: 95, capital: true, tier: 'capital' },
  { name: 'Kuala Lumpur', country: 'Malaysia',  countryCode: 'MY', timezoneIana: 'Asia/Kuala_Lumpur', priority: 88, capital: true, tier: 'capital' },
  { name: 'Bangkok',      country: 'Thailand',  countryCode: 'TH', timezoneIana: 'Asia/Bangkok',      priority: 90, capital: true, tier: 'capital' },
  { name: 'Hanoi',        country: 'Vietnam',   countryCode: 'VN', timezoneIana: 'Asia/Bangkok',      priority: 82, capital: true, tier: 'capital' },
  { name: 'Ho Chi Minh City', country: 'Vietnam', countryCode: 'VN', timezoneIana: 'Asia/Bangkok',   priority: 84, tier: 'major', aliases: ['Saigon'] },
  { name: 'Jakarta',      country: 'Indonesia', countryCode: 'ID', timezoneIana: 'Asia/Jakarta',      priority: 90, capital: true, tier: 'capital' },
  { name: 'Surabaya',     country: 'Indonesia', countryCode: 'ID', timezoneIana: 'Asia/Jakarta',      priority: 70, tier: 'major' },
  { name: 'Manila',       country: 'Philippines', countryCode: 'PH', timezoneIana: 'Asia/Manila',     priority: 88, capital: true, tier: 'capital' },
  { name: 'Cebu',         country: 'Philippines', countryCode: 'PH', timezoneIana: 'Asia/Manila',     priority: 65, tier: 'major' },
  { name: 'Vientiane',    country: 'Laos',      countryCode: 'LA', timezoneIana: 'Asia/Vientiane',    priority: 65, capital: true, tier: 'capital' },
  { name: 'Phnom Penh',   country: 'Cambodia',  countryCode: 'KH', timezoneIana: 'Asia/Phnom_Penh',  priority: 70, capital: true, tier: 'capital' },
  { name: 'Naypyidaw',    country: 'Myanmar',   countryCode: 'MM', timezoneIana: 'Asia/Yangon',       priority: 60, capital: true, tier: 'capital' },
  { name: 'Yangon',       country: 'Myanmar',   countryCode: 'MM', timezoneIana: 'Asia/Yangon',       priority: 70, tier: 'major', aliases: ['Rangoon'] },
  { name: 'Bandar Seri Begawan', country: 'Brunei', countryCode: 'BN', timezoneIana: 'Asia/Brunei',  priority: 60, capital: true, tier: 'capital' },
  { name: 'Dili',         country: 'East Timor', countryCode: 'TL', timezoneIana: 'Asia/Dili',        priority: 58, capital: true, tier: 'capital' },

  // ── Africa — North ────────────────────────────────────────────────────────
  { name: 'Cairo',       country: 'Egypt',    countryCode: 'EG', timezoneIana: 'Africa/Cairo',     priority: 92, capital: true, tier: 'capital' },
  { name: 'Alexandria',  country: 'Egypt',    countryCode: 'EG', timezoneIana: 'Africa/Cairo',     priority: 72, tier: 'major' },
  { name: 'Tripoli',     country: 'Libya',    countryCode: 'LY', timezoneIana: 'Africa/Tripoli',   priority: 72, capital: true, tier: 'capital' },
  { name: 'Tunis',       country: 'Tunisia',  countryCode: 'TN', timezoneIana: 'Africa/Tunis',     priority: 80, capital: true, tier: 'capital' },
  { name: 'Algiers',     country: 'Algeria',  countryCode: 'DZ', timezoneIana: 'Africa/Algiers',   priority: 82, capital: true, tier: 'capital' },
  { name: 'Casablanca',  country: 'Morocco',  countryCode: 'MA', timezoneIana: 'Africa/Casablanca', priority: 82, tier: 'major' },
  { name: 'Rabat',       country: 'Morocco',  countryCode: 'MA', timezoneIana: 'Africa/Casablanca', priority: 72, capital: true, tier: 'capital' },
  { name: 'Khartoum',    country: 'Sudan',    countryCode: 'SD', timezoneIana: 'Africa/Khartoum',  priority: 75, capital: true, tier: 'capital' },

  // ── Africa — East ─────────────────────────────────────────────────────────
  { name: 'Juba',         country: 'South Sudan', countryCode: 'SS', timezoneIana: 'Africa/Juba',        priority: 65, capital: true, tier: 'capital' },
  { name: 'Addis Ababa',  country: 'Ethiopia',    countryCode: 'ET', timezoneIana: 'Africa/Addis_Ababa', priority: 82, capital: true, tier: 'capital' },
  { name: 'Asmara',       country: 'Eritrea',     countryCode: 'ER', timezoneIana: 'Africa/Asmara',      priority: 62, capital: true, tier: 'capital' },
  { name: 'Djibouti',     country: 'Djibouti',    countryCode: 'DJ', timezoneIana: 'Africa/Djibouti',    priority: 62, capital: true, tier: 'capital' },
  { name: 'Mogadishu',    country: 'Somalia',     countryCode: 'SO', timezoneIana: 'Africa/Mogadishu',   priority: 65, capital: true, tier: 'capital' },
  { name: 'Nairobi',      country: 'Kenya',       countryCode: 'KE', timezoneIana: 'Africa/Nairobi',     priority: 88, capital: true, tier: 'capital' },
  { name: 'Kampala',      country: 'Uganda',      countryCode: 'UG', timezoneIana: 'Africa/Nairobi',     priority: 72, capital: true, tier: 'capital' },
  { name: 'Dar es Salaam', country: 'Tanzania',   countryCode: 'TZ', timezoneIana: 'Africa/Nairobi',     priority: 72, tier: 'major' },
  { name: 'Dodoma',       country: 'Tanzania',    countryCode: 'TZ', timezoneIana: 'Africa/Nairobi',     priority: 60, capital: true, tier: 'capital' },
  { name: 'Kigali',       country: 'Rwanda',      countryCode: 'RW', timezoneIana: 'Africa/Kigali',      priority: 68, capital: true, tier: 'capital' },
  { name: 'Bujumbura',    country: 'Burundi',     countryCode: 'BI', timezoneIana: 'Africa/Bujumbura',   priority: 62, capital: true, tier: 'capital' },

  // ── Africa — Central ──────────────────────────────────────────────────────
  { name: 'Kinshasa',     country: 'DR Congo',                  countryCode: 'CD', timezoneIana: 'Africa/Kinshasa',    priority: 80, capital: true, tier: 'capital' },
  { name: 'Brazzaville',  country: 'Republic of the Congo',     countryCode: 'CG', timezoneIana: 'Africa/Brazzaville', priority: 65, capital: true, tier: 'capital' },
  { name: 'Libreville',   country: 'Gabon',                     countryCode: 'GA', timezoneIana: 'Africa/Libreville',  priority: 62, capital: true, tier: 'capital' },
  { name: 'Malabo',       country: 'Equatorial Guinea',         countryCode: 'GQ', timezoneIana: 'Africa/Malabo',      priority: 58, capital: true, tier: 'capital' },
  { name: 'Yaounde',      country: 'Cameroon',                  countryCode: 'CM', timezoneIana: 'Africa/Douala',      priority: 68, capital: true, tier: 'capital' },
  { name: 'Bangui',       country: 'Central African Republic',  countryCode: 'CF', timezoneIana: 'Africa/Bangui',      priority: 60, capital: true, tier: 'capital' },
  { name: 'Ndjamena',     country: 'Chad',                      countryCode: 'TD', timezoneIana: 'Africa/Ndjamena',    priority: 62, capital: true, tier: 'capital', aliases: ["N'Djamena"] },
  { name: 'Luanda',       country: 'Angola',                    countryCode: 'AO', timezoneIana: 'Africa/Luanda',      priority: 72, capital: true, tier: 'capital' },

  // ── Africa — West ─────────────────────────────────────────────────────────
  { name: 'Lagos',        country: 'Nigeria',       countryCode: 'NG', timezoneIana: 'Africa/Lagos',       priority: 90, tier: 'major' },
  { name: 'Abuja',        country: 'Nigeria',       countryCode: 'NG', timezoneIana: 'Africa/Lagos',       priority: 78, capital: true, tier: 'capital' },
  { name: 'Accra',        country: 'Ghana',         countryCode: 'GH', timezoneIana: 'Africa/Accra',       priority: 80, capital: true, tier: 'capital' },
  { name: 'Dakar',        country: 'Senegal',       countryCode: 'SN', timezoneIana: 'Africa/Dakar',       priority: 75, capital: true, tier: 'capital' },
  { name: 'Lome',         country: 'Togo',          countryCode: 'TG', timezoneIana: 'Africa/Lome',        priority: 62, capital: true, tier: 'capital' },
  { name: 'Porto-Novo',   country: 'Benin',         countryCode: 'BJ', timezoneIana: 'Africa/Porto-Novo',  priority: 60, capital: true, tier: 'capital' },
  { name: 'Ouagadougou',  country: 'Burkina Faso',  countryCode: 'BF', timezoneIana: 'Africa/Ouagadougou', priority: 65, capital: true, tier: 'capital' },
  { name: 'Bamako',       country: 'Mali',          countryCode: 'ML', timezoneIana: 'Africa/Bamako',      priority: 68, capital: true, tier: 'capital' },
  { name: 'Niamey',       country: 'Niger',         countryCode: 'NE', timezoneIana: 'Africa/Niamey',      priority: 65, capital: true, tier: 'capital' },
  { name: 'Banjul',       country: 'Gambia',        countryCode: 'GM', timezoneIana: 'Africa/Banjul',      priority: 58, capital: true, tier: 'capital' },
  { name: 'Bissau',       country: 'Guinea-Bissau', countryCode: 'GW', timezoneIana: 'Africa/Bissau',      priority: 58, capital: true, tier: 'capital' },
  { name: 'Conakry',      country: 'Guinea',        countryCode: 'GN', timezoneIana: 'Africa/Conakry',     priority: 65, capital: true, tier: 'capital' },
  { name: 'Freetown',     country: 'Sierra Leone',  countryCode: 'SL', timezoneIana: 'Africa/Freetown',    priority: 62, capital: true, tier: 'capital' },
  { name: 'Monrovia',     country: 'Liberia',       countryCode: 'LR', timezoneIana: 'Africa/Monrovia',    priority: 62, capital: true, tier: 'capital' },
  { name: 'Yamoussoukro', country: "Cote d'Ivoire", countryCode: 'CI', timezoneIana: 'Africa/Abidjan',     priority: 60, capital: true, tier: 'capital', aliases: ['Ivory Coast'] },
  { name: 'Abidjan',      country: "Cote d'Ivoire", countryCode: 'CI', timezoneIana: 'Africa/Abidjan',     priority: 72, tier: 'major' },
  { name: 'Nouakchott',   country: 'Mauritania',    countryCode: 'MR', timezoneIana: 'Africa/Nouakchott',  priority: 62, capital: true, tier: 'capital' },
  { name: 'Praia',        country: 'Cape Verde',    countryCode: 'CV', timezoneIana: 'Atlantic/Cape_Verde', priority: 60, capital: true, tier: 'capital' },

  // ── Africa — Southern ─────────────────────────────────────────────────────
  { name: 'Johannesburg', country: 'South Africa', countryCode: 'ZA', timezoneIana: 'Africa/Johannesburg', priority: 88, tier: 'major' },
  { name: 'Cape Town',    country: 'South Africa', countryCode: 'ZA', timezoneIana: 'Africa/Johannesburg', priority: 84, tier: 'major' },
  { name: 'Durban',       country: 'South Africa', countryCode: 'ZA', timezoneIana: 'Africa/Johannesburg', priority: 72, tier: 'major' },
  { name: 'Pretoria',     country: 'South Africa', countryCode: 'ZA', timezoneIana: 'Africa/Johannesburg', priority: 78, capital: true, tier: 'capital' },
  { name: 'Windhoek',     country: 'Namibia',      countryCode: 'NA', timezoneIana: 'Africa/Windhoek',     priority: 65, capital: true, tier: 'capital' },
  { name: 'Gaborone',     country: 'Botswana',     countryCode: 'BW', timezoneIana: 'Africa/Gaborone',     priority: 62, capital: true, tier: 'capital' },
  { name: 'Maseru',       country: 'Lesotho',      countryCode: 'LS', timezoneIana: 'Africa/Maseru',       priority: 58, capital: true, tier: 'capital' },
  { name: 'Mbabane',      country: 'Eswatini',     countryCode: 'SZ', timezoneIana: 'Africa/Mbabane',      priority: 58, capital: true, tier: 'capital' },
  { name: 'Maputo',       country: 'Mozambique',   countryCode: 'MZ', timezoneIana: 'Africa/Maputo',       priority: 65, capital: true, tier: 'capital' },
  { name: 'Harare',       country: 'Zimbabwe',     countryCode: 'ZW', timezoneIana: 'Africa/Harare',       priority: 70, capital: true, tier: 'capital' },
  { name: 'Lusaka',       country: 'Zambia',       countryCode: 'ZM', timezoneIana: 'Africa/Lusaka',       priority: 65, capital: true, tier: 'capital' },
  { name: 'Lilongwe',     country: 'Malawi',       countryCode: 'MW', timezoneIana: 'Africa/Blantyre',     priority: 62, capital: true, tier: 'capital' },

  // ── Africa — Indian Ocean ─────────────────────────────────────────────────
  { name: 'Antananarivo', country: 'Madagascar',  countryCode: 'MG', timezoneIana: 'Indian/Antananarivo', priority: 70, capital: true, tier: 'capital' },
  { name: 'Port Louis',   country: 'Mauritius',   countryCode: 'MU', timezoneIana: 'Indian/Mauritius',    priority: 65, capital: true, tier: 'capital' },
  { name: 'Victoria',     country: 'Seychelles',  countryCode: 'SC', timezoneIana: 'Indian/Mahe',         priority: 60, capital: true, tier: 'capital' },
  { name: 'Moroni',       country: 'Comoros',     countryCode: 'KM', timezoneIana: 'Indian/Comoro',       priority: 58, capital: true, tier: 'capital' },

  // ── Australia ─────────────────────────────────────────────────────────────
  { name: 'Canberra',  country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Sydney',    priority: 80, capital: true, tier: 'capital' },
  { name: 'Sydney',    country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Sydney',    priority: 92, tier: 'major' },
  { name: 'Melbourne', country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Melbourne', priority: 88, tier: 'major' },
  { name: 'Brisbane',  country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Brisbane',  priority: 80, tier: 'major' },
  { name: 'Perth',     country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Perth',     priority: 78, tier: 'major' },
  { name: 'Adelaide',  country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Adelaide',  priority: 72, tier: 'major' },
  { name: 'Darwin',    country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Darwin',    priority: 65, tier: 'major' },
  { name: 'Hobart',    country: 'Australia', countryCode: 'AU', timezoneIana: 'Australia/Hobart',    priority: 65, tier: 'major' },

  // ── New Zealand ───────────────────────────────────────────────────────────
  { name: 'Wellington',   country: 'New Zealand', countryCode: 'NZ', timezoneIana: 'Pacific/Auckland', priority: 80, capital: true, tier: 'capital' },
  { name: 'Auckland',     country: 'New Zealand', countryCode: 'NZ', timezoneIana: 'Pacific/Auckland', priority: 82, tier: 'major' },
  { name: 'Christchurch', country: 'New Zealand', countryCode: 'NZ', timezoneIana: 'Pacific/Auckland', priority: 68, tier: 'major' },

  // ── Pacific ───────────────────────────────────────────────────────────────
  { name: 'Suva',         country: 'Fiji',              countryCode: 'FJ', timezoneIana: 'Pacific/Fiji',        priority: 65, capital: true, tier: 'capital' },
  { name: 'Port Moresby', country: 'Papua New Guinea',  countryCode: 'PG', timezoneIana: 'Pacific/Port_Moresby', priority: 68, capital: true, tier: 'capital' },
  { name: 'Honiara',      country: 'Solomon Islands',   countryCode: 'SB', timezoneIana: 'Pacific/Guadalcanal', priority: 60, capital: true, tier: 'capital' },
  { name: 'Port Vila',    country: 'Vanuatu',           countryCode: 'VU', timezoneIana: 'Pacific/Efate',       priority: 58, capital: true, tier: 'capital' },
  { name: 'Noumea',       country: 'New Caledonia',     countryCode: 'NC', timezoneIana: 'Pacific/Noumea',      priority: 60, tier: 'major' },
  { name: 'Funafuti',     country: 'Tuvalu',            countryCode: 'TV', timezoneIana: 'Pacific/Funafuti',    priority: 55, capital: true, tier: 'capital' },
  { name: 'Tarawa',       country: 'Kiribati',          countryCode: 'KI', timezoneIana: 'Pacific/Tarawa',      priority: 55, capital: true, tier: 'capital' },
  { name: 'Majuro',       country: 'Marshall Islands',  countryCode: 'MH', timezoneIana: 'Pacific/Majuro',      priority: 55, capital: true, tier: 'capital' },
  { name: 'Palikir',      country: 'Micronesia',        countryCode: 'FM', timezoneIana: 'Pacific/Pohnpei',     priority: 52, capital: true, tier: 'capital' },
  { name: 'Apia',         country: 'Samoa',             countryCode: 'WS', timezoneIana: 'Pacific/Apia',        priority: 60, capital: true, tier: 'capital' },
  { name: "Nuku'alofa",   country: 'Tonga',             countryCode: 'TO', timezoneIana: 'Pacific/Tongatapu',   priority: 58, capital: true, tier: 'capital' },
]

/**
 * Score a city index entry against a normalised query string.
 * Returns a numeric score (lower = better match) or null if no match.
 *
 * Tiers (lower = better):
 *   0 — exact name match
 *   1 — name starts with query
 *   2 — name contains query
 *   3 — exact alias match
 *   4 — alias starts with query
 *   5 — alias contains query
 *   6 — country contains query
 *
 * Within each tier, entries are ranked by priority DESC (capital entries
 * carry higher priority values than regional ones).
 */
export function scoreCityEntry(entry: CityIndexEntry, q: string): number | null {
  const name = normalizeSearchText(entry.name)
  if (name === q) return 0
  if (name.startsWith(q)) return 1
  if (name.includes(q)) return 2
  if (entry.aliases) {
    for (const alias of entry.aliases) {
      const a = normalizeSearchText(alias)
      if (a === q) return 3
      if (a.startsWith(q)) return 4
      if (a.includes(q)) return 5
    }
  }
  if (normalizeSearchText(entry.country).includes(q)) return 6
  return null
}

export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}
