import type { ConversionResult } from '../types'

type Props = {
  result: ConversionResult
  isSource?: boolean
}

export function ResultCard({ result, isSource = false }: Props) {
  const dayOffset = result.dayOffset

  return (
    <div className={`result-row ${isSource ? 'result-row--source' : ''}`}>
      {/* Left: city name + meta */}
      <div className="result-meta">
        <span className="result-city-name">{result.city}</span>
        {isSource && <span className="source-badge">source</span>}
        <span className="result-sub">
          {result.country}
          {result.isAlias && result.primaryCity && (
            <> · <span className="text-neutral-600">{result.iana}</span></>
          )}
        </span>
      </div>

      {/* Right: time + date */}
      <div className="result-time-block">
        {dayOffset !== 0 && (
          <span className={`day-badge ${dayOffset === 1 ? 'day-badge--next' : 'day-badge--prev'}`}>
            {dayOffset === 1 ? '+1' : '−1'}
          </span>
        )}
        <span className="result-time-display">{result.displayTime}</span>
        <span className="result-abbr">{result.abbreviation}</span>
        <span className="result-date-display">{result.displayDate}</span>
      </div>
    </div>
  )
}
