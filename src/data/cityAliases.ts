import type { CityAlias } from '../types'

/**
 * City aliases — cities not in the primary timezone dataset that map to
 * an existing IANA timezone. Kept separate to avoid bloating TimezoneOption
 * objects with duplicates.
 *
 * Each alias resolves to the same timezone as its mapped IANA id.
 * The display name in the UI will use the alias city name, not the primary city.
 */
export const CITY_ALIASES: CityAlias[] = [
  // United Kingdom — all Europe/London
  { name: 'Birmingham', country: 'United Kingdom', iana: 'Europe/London', keywords: ['birmingham', 'brum', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Manchester', country: 'United Kingdom', iana: 'Europe/London', keywords: ['manchester', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Liverpool', country: 'United Kingdom', iana: 'Europe/London', keywords: ['liverpool', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Leeds', country: 'United Kingdom', iana: 'Europe/London', keywords: ['leeds', 'uk', 'england', 'yorkshire', 'gmt', 'bst'] },
  { name: 'Glasgow', country: 'United Kingdom', iana: 'Europe/London', keywords: ['glasgow', 'scotland', 'uk', 'gmt', 'bst'] },
  { name: 'Edinburgh', country: 'United Kingdom', iana: 'Europe/London', keywords: ['edinburgh', 'scotland', 'uk', 'gmt', 'bst'] },
  { name: 'Cardiff', country: 'United Kingdom', iana: 'Europe/London', keywords: ['cardiff', 'wales', 'uk', 'gmt', 'bst'] },
  { name: 'Bristol', country: 'United Kingdom', iana: 'Europe/London', keywords: ['bristol', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Oxford', country: 'United Kingdom', iana: 'Europe/London', keywords: ['oxford', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Cambridge', country: 'United Kingdom', iana: 'Europe/London', keywords: ['cambridge', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Sheffield', country: 'United Kingdom', iana: 'Europe/London', keywords: ['sheffield', 'uk', 'england', 'gmt', 'bst'] },
  { name: 'Nottingham', country: 'United Kingdom', iana: 'Europe/London', keywords: ['nottingham', 'uk', 'england', 'gmt', 'bst'] },

  // United States — New York area
  { name: 'Brooklyn', country: 'United States', iana: 'America/New_York', keywords: ['brooklyn', 'nyc', 'new york', 'est', 'edt'] },
  { name: 'Queens', country: 'United States', iana: 'America/New_York', keywords: ['queens', 'nyc', 'new york', 'est', 'edt'] },
  { name: 'Manhattan', country: 'United States', iana: 'America/New_York', keywords: ['manhattan', 'nyc', 'new york', 'est', 'edt'] },
  { name: 'Jersey City', country: 'United States', iana: 'America/New_York', keywords: ['jersey city', 'nj', 'new jersey', 'est', 'edt'] },
  { name: 'Philadelphia', country: 'United States', iana: 'America/New_York', keywords: ['philadelphia', 'philly', 'pa', 'pennsylvania', 'est', 'edt'] },
  { name: 'Boston', country: 'United States', iana: 'America/New_York', keywords: ['boston', 'ma', 'massachusetts', 'est', 'edt'] },
  { name: 'Miami', country: 'United States', iana: 'America/New_York', keywords: ['miami', 'florida', 'fl', 'est', 'edt'] },
  { name: 'Atlanta', country: 'United States', iana: 'America/New_York', keywords: ['atlanta', 'georgia', 'ga', 'est', 'edt'] },
  { name: 'Washington DC', country: 'United States', iana: 'America/New_York', keywords: ['washington', 'dc', 'district of columbia', 'est', 'edt'] },

  // United States — Los Angeles area
  { name: 'San Francisco', country: 'United States', iana: 'America/Los_Angeles', keywords: ['san francisco', 'sf', 'bay area', 'california', 'ca', 'pst', 'pdt'] },
  { name: 'Seattle', country: 'United States', iana: 'America/Los_Angeles', keywords: ['seattle', 'washington', 'wa', 'pst', 'pdt'] },
  { name: 'Las Vegas', country: 'United States', iana: 'America/Los_Angeles', keywords: ['las vegas', 'nevada', 'nv', 'pst', 'pdt'] },
  { name: 'San Diego', country: 'United States', iana: 'America/Los_Angeles', keywords: ['san diego', 'california', 'ca', 'pst', 'pdt'] },
  { name: 'Portland', country: 'United States', iana: 'America/Los_Angeles', keywords: ['portland', 'oregon', 'or', 'pst', 'pdt'] },
  { name: 'Sacramento', country: 'United States', iana: 'America/Los_Angeles', keywords: ['sacramento', 'california', 'ca', 'pst', 'pdt'] },

  // United States — Chicago area
  { name: 'Austin', country: 'United States', iana: 'America/Chicago', keywords: ['austin', 'texas', 'tx', 'cst', 'cdt'] },
  { name: 'Dallas', country: 'United States', iana: 'America/Chicago', keywords: ['dallas', 'texas', 'tx', 'cst', 'cdt'] },
  { name: 'Houston', country: 'United States', iana: 'America/Chicago', keywords: ['houston', 'texas', 'tx', 'cst', 'cdt'] },
  { name: 'San Antonio', country: 'United States', iana: 'America/Chicago', keywords: ['san antonio', 'texas', 'tx', 'cst', 'cdt'] },
  { name: 'Nashville', country: 'United States', iana: 'America/Chicago', keywords: ['nashville', 'tennessee', 'tn', 'cst', 'cdt'] },
  { name: 'New Orleans', country: 'United States', iana: 'America/Chicago', keywords: ['new orleans', 'louisiana', 'la', 'cst', 'cdt'] },
  { name: 'Minneapolis', country: 'United States', iana: 'America/Chicago', keywords: ['minneapolis', 'minnesota', 'mn', 'cst', 'cdt'] },

  // United States — Denver area
  { name: 'Boulder', country: 'United States', iana: 'America/Denver', keywords: ['boulder', 'colorado', 'co', 'mst', 'mdt'] },
  { name: 'Colorado Springs', country: 'United States', iana: 'America/Denver', keywords: ['colorado springs', 'colorado', 'co', 'mst', 'mdt'] },
  { name: 'Salt Lake City', country: 'United States', iana: 'America/Denver', keywords: ['salt lake city', 'slc', 'utah', 'ut', 'mst', 'mdt'] },
  { name: 'Albuquerque', country: 'United States', iana: 'America/Denver', keywords: ['albuquerque', 'new mexico', 'nm', 'mst', 'mdt'] },
  { name: 'Phoenix', country: 'United States', iana: 'America/Denver', keywords: ['phoenix', 'arizona', 'az', 'mst'] },

  // Japan — Asia/Tokyo
  { name: 'Kyoto', country: 'Japan', iana: 'Asia/Tokyo', keywords: ['kyoto', 'japan', 'jst'] },
  { name: 'Osaka', country: 'Japan', iana: 'Asia/Tokyo', keywords: ['osaka', 'japan', 'jst'] },
  { name: 'Nagoya', country: 'Japan', iana: 'Asia/Tokyo', keywords: ['nagoya', 'japan', 'jst'] },
  { name: 'Sapporo', country: 'Japan', iana: 'Asia/Tokyo', keywords: ['sapporo', 'hokkaido', 'japan', 'jst'] },
  { name: 'Yokohama', country: 'Japan', iana: 'Asia/Tokyo', keywords: ['yokohama', 'japan', 'jst'] },

  // UAE — Asia/Dubai
  { name: 'Abu Dhabi', country: 'UAE', iana: 'Asia/Dubai', keywords: ['abu dhabi', 'uae', 'emirates', 'gulf', 'gst'] },
  { name: 'Sharjah', country: 'UAE', iana: 'Asia/Dubai', keywords: ['sharjah', 'uae', 'emirates', 'gulf', 'gst'] },

  // South Korea — Asia/Seoul
  { name: 'Busan', country: 'South Korea', iana: 'Asia/Seoul', keywords: ['busan', 'korea', 'south korea', 'kst'] },

  // Australia extras
  { name: 'Canberra', country: 'Australia', iana: 'Australia/Sydney', keywords: ['canberra', 'act', 'australia', 'aest', 'aedt'] },
  { name: 'Brisbane', country: 'Australia', iana: 'Australia/Sydney', keywords: ['brisbane', 'queensland', 'australia', 'aest'] },

  // Canada extras
  { name: 'Montreal', country: 'Canada', iana: 'America/Toronto', keywords: ['montreal', 'quebec', 'canada', 'est', 'edt'] },
  { name: 'Ottawa', country: 'Canada', iana: 'America/Toronto', keywords: ['ottawa', 'ontario', 'canada', 'est', 'edt'] },
  { name: 'Calgary', country: 'Canada', iana: 'America/Denver', keywords: ['calgary', 'alberta', 'canada', 'mst', 'mdt'] },

  // Bangladesh — Asia/Dhaka
  { name: 'Chittagong', country: 'Bangladesh', iana: 'Asia/Dhaka', keywords: ['chittagong', 'chattogram', 'bangladesh', 'bst'] },
  { name: 'Sylhet', country: 'Bangladesh', iana: 'Asia/Dhaka', keywords: ['sylhet', 'bangladesh', 'bst'] },

  // Nigeria — Africa/Lagos
  { name: 'Abuja', country: 'Nigeria', iana: 'Africa/Lagos', keywords: ['abuja', 'nigeria', 'africa', 'wat'] },
  { name: 'Kano', country: 'Nigeria', iana: 'Africa/Lagos', keywords: ['kano', 'nigeria', 'africa', 'wat'] },

  // Morocco — Africa/Casablanca
  { name: 'Rabat', country: 'Morocco', iana: 'Africa/Casablanca', keywords: ['rabat', 'morocco', 'africa'] },
  { name: 'Marrakech', country: 'Morocco', iana: 'Africa/Casablanca', keywords: ['marrakech', 'marrakesh', 'morocco', 'africa'] },

  // South Africa — Africa/Johannesburg
  { name: 'Cape Town', country: 'South Africa', iana: 'Africa/Johannesburg', keywords: ['cape town', 'south africa', 'sast', 'africa'] },
  { name: 'Durban', country: 'South Africa', iana: 'Africa/Johannesburg', keywords: ['durban', 'south africa', 'sast', 'africa'] },
  { name: 'Pretoria', country: 'South Africa', iana: 'Africa/Johannesburg', keywords: ['pretoria', 'south africa', 'sast', 'africa'] },

  // East Africa — Africa/Nairobi
  { name: 'Mombasa', country: 'Kenya', iana: 'Africa/Nairobi', keywords: ['mombasa', 'kenya', 'eat', 'east africa'] },
  { name: 'Kampala', country: 'Uganda', iana: 'Africa/Nairobi', keywords: ['kampala', 'uganda', 'eat', 'east africa'] },
  { name: 'Dar es Salaam', country: 'Tanzania', iana: 'Africa/Nairobi', keywords: ['dar es salaam', 'tanzania', 'eat', 'east africa'] },
  { name: 'Addis Ababa', country: 'Ethiopia', iana: 'Africa/Nairobi', keywords: ['addis ababa', 'ethiopia', 'eat', 'east africa'] },

  // Pakistan — Asia/Karachi
  { name: 'Lahore', country: 'Pakistan', iana: 'Asia/Karachi', keywords: ['lahore', 'pakistan', 'pkt'] },
  { name: 'Islamabad', country: 'Pakistan', iana: 'Asia/Karachi', keywords: ['islamabad', 'pakistan', 'pkt'] },
  { name: 'Rawalpindi', country: 'Pakistan', iana: 'Asia/Karachi', keywords: ['rawalpindi', 'pakistan', 'pkt'] },
  { name: 'Faisalabad', country: 'Pakistan', iana: 'Asia/Karachi', keywords: ['faisalabad', 'pakistan', 'pkt'] },

  // India — Asia/Kolkata (primary is Mumbai)
  { name: 'Delhi', country: 'India', iana: 'Asia/Kolkata', keywords: ['delhi', 'india', 'ist'] },
  { name: 'New Delhi', country: 'India', iana: 'Asia/Kolkata', keywords: ['new delhi', 'india', 'ist', 'capital'] },
  { name: 'Bangalore', country: 'India', iana: 'Asia/Kolkata', keywords: ['bangalore', 'bengaluru', 'india', 'ist', 'tech'] },
  { name: 'Hyderabad', country: 'India', iana: 'Asia/Kolkata', keywords: ['hyderabad', 'india', 'ist'] },
  { name: 'Chennai', country: 'India', iana: 'Asia/Kolkata', keywords: ['chennai', 'madras', 'india', 'ist'] },
  { name: 'Pune', country: 'India', iana: 'Asia/Kolkata', keywords: ['pune', 'india', 'ist'] },
  { name: 'Ahmedabad', country: 'India', iana: 'Asia/Kolkata', keywords: ['ahmedabad', 'india', 'ist', 'gujarat'] },
  { name: 'Kolkata', country: 'India', iana: 'Asia/Kolkata', keywords: ['kolkata', 'calcutta', 'india', 'ist', 'west bengal'] },
  { name: 'Jaipur', country: 'India', iana: 'Asia/Kolkata', keywords: ['jaipur', 'india', 'ist', 'rajasthan'] },

  // Malaysia — Asia/Kuala_Lumpur
  { name: 'Petaling Jaya', country: 'Malaysia', iana: 'Asia/Kuala_Lumpur', keywords: ['petaling jaya', 'pj', 'malaysia', 'myt'] },
  { name: 'Penang', country: 'Malaysia', iana: 'Asia/Kuala_Lumpur', keywords: ['penang', 'george town', 'malaysia', 'myt'] },

  // Thailand — Asia/Bangkok
  { name: 'Chiang Mai', country: 'Thailand', iana: 'Asia/Bangkok', keywords: ['chiang mai', 'thailand', 'ict'] },
  { name: 'Phuket', country: 'Thailand', iana: 'Asia/Bangkok', keywords: ['phuket', 'thailand', 'ict'] },
  // Vietnam and Cambodia share ICT (UTC+7)
  { name: 'Ho Chi Minh City', country: 'Vietnam', iana: 'Asia/Bangkok', keywords: ['ho chi minh', 'saigon', 'vietnam', 'ict'] },
  { name: 'Hanoi', country: 'Vietnam', iana: 'Asia/Bangkok', keywords: ['hanoi', 'vietnam', 'ict'] },
  { name: 'Phnom Penh', country: 'Cambodia', iana: 'Asia/Bangkok', keywords: ['phnom penh', 'cambodia', 'ict'] },

  // Indonesia — Asia/Jakarta
  { name: 'Bandung', country: 'Indonesia', iana: 'Asia/Jakarta', keywords: ['bandung', 'indonesia', 'wib', 'java'] },
  { name: 'Surabaya', country: 'Indonesia', iana: 'Asia/Jakarta', keywords: ['surabaya', 'indonesia', 'wib', 'java'] },

  // Philippines — Asia/Manila
  { name: 'Cebu', country: 'Philippines', iana: 'Asia/Manila', keywords: ['cebu', 'philippines', 'pst'] },
  { name: 'Quezon City', country: 'Philippines', iana: 'Asia/Manila', keywords: ['quezon city', 'philippines', 'pst'] },

  // China — Asia/Shanghai
  { name: 'Beijing', country: 'China', iana: 'Asia/Shanghai', keywords: ['beijing', 'peking', 'china', 'cst'] },
  { name: 'Shenzhen', country: 'China', iana: 'Asia/Shanghai', keywords: ['shenzhen', 'china', 'cst', 'guangdong'] },
  { name: 'Guangzhou', country: 'China', iana: 'Asia/Shanghai', keywords: ['guangzhou', 'canton', 'china', 'cst'] },
  { name: 'Chengdu', country: 'China', iana: 'Asia/Shanghai', keywords: ['chengdu', 'china', 'cst', 'sichuan'] },
  { name: 'Wuhan', country: 'China', iana: 'Asia/Shanghai', keywords: ['wuhan', 'china', 'cst'] },

  // Egypt — Africa/Cairo
  { name: 'Alexandria', country: 'Egypt', iana: 'Africa/Cairo', keywords: ['alexandria', 'egypt', 'eet', 'africa'] },

  // Middle East extras
  // UAE/Gulf — Asia/Dubai (Muscat kept as-is per requirement)
  { name: 'Muscat', country: 'Oman', iana: 'Asia/Dubai', keywords: ['muscat', 'oman', 'gulf', 'gst'] },

  // Israel — Asia/Jerusalem (corrected from wrong Africa/Cairo)
  { name: 'Tel Aviv', country: 'Israel', iana: 'Asia/Jerusalem', keywords: ['tel aviv', 'israel', 'ist', 'idt'] },
  { name: 'Haifa', country: 'Israel', iana: 'Asia/Jerusalem', keywords: ['haifa', 'israel', 'ist', 'idt'] },

  // Turkey — Europe/Istanbul
  { name: 'Ankara', country: 'Turkey', iana: 'Europe/Istanbul', keywords: ['ankara', 'turkey', 'turkiye', 'trt'] },
  { name: 'Izmir', country: 'Turkey', iana: 'Europe/Istanbul', keywords: ['izmir', 'turkey', 'turkiye', 'trt'] },
  { name: 'Antalya', country: 'Turkey', iana: 'Europe/Istanbul', keywords: ['antalya', 'turkey', 'turkiye', 'trt'] },
  { name: 'Bursa', country: 'Turkey', iana: 'Europe/Istanbul', keywords: ['bursa', 'turkey', 'turkiye', 'trt'] },

  // Kazakhstan — Asia/Almaty
  { name: 'Astana', country: 'Kazakhstan', iana: 'Asia/Almaty', keywords: ['astana', 'nur-sultan', 'nursultan', 'kazakhstan', 'almt'] },

  // New Zealand — Pacific/Auckland
  { name: 'Wellington', country: 'New Zealand', iana: 'Pacific/Auckland', keywords: ['wellington', 'new zealand', 'nzst', 'nzdt', 'nz'] },
  { name: 'Christchurch', country: 'New Zealand', iana: 'Pacific/Auckland', keywords: ['christchurch', 'new zealand', 'nzst', 'nzdt', 'nz'] },

  // Brazil — America/Sao_Paulo
  { name: 'Rio de Janeiro', country: 'Brazil', iana: 'America/Sao_Paulo', keywords: ['rio de janeiro', 'rio', 'brazil', 'brasil', 'brt'] },
  { name: 'Brasília', country: 'Brazil', iana: 'America/Sao_Paulo', keywords: ['brasilia', 'brasília', 'brazil', 'brasil', 'brt'] },

  // Colombia — America/Bogota
  { name: 'Medellín', country: 'Colombia', iana: 'America/Bogota', keywords: ['medellin', 'medellín', 'colombia', 'cot'] },
  { name: 'Cali', country: 'Colombia', iana: 'America/Bogota', keywords: ['cali', 'colombia', 'cot'] },

  // Portugal — Europe/Lisbon
  { name: 'Porto', country: 'Portugal', iana: 'Europe/Lisbon', keywords: ['porto', 'oporto', 'portugal', 'wet', 'west'] },

  // Nordic extras
  { name: 'Gothenburg', country: 'Sweden', iana: 'Europe/Stockholm', keywords: ['gothenburg', 'goteborg', 'sweden', 'cet', 'cest'] },
  { name: 'Bergen', country: 'Norway', iana: 'Europe/Oslo', keywords: ['bergen', 'norway', 'cet', 'cest'] },
  { name: 'Krakow', country: 'Poland', iana: 'Europe/Warsaw', keywords: ['krakow', 'kraków', 'poland', 'cet', 'cest'] },

  // Greece
  { name: 'Thessaloniki', country: 'Greece', iana: 'Europe/Athens', keywords: ['thessaloniki', 'greece', 'eet', 'eest'] },

  // West Africa extras
  { name: 'Abidjan', country: 'Côte d\'Ivoire', iana: 'Africa/Accra', keywords: ['abidjan', 'ivory coast', 'cote divoire', 'gmt'] },
  { name: 'Conakry', country: 'Guinea', iana: 'Africa/Dakar', keywords: ['conakry', 'guinea', 'gmt'] },
]
