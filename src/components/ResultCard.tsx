import type { ConversionResult } from '../types'

type Props = {
  result: ConversionResult
  isSource?: boolean
  enter?: boolean
}

export function ResultCard({ result, isSource = false, enter = false }: Props) {
  const dayOffset = result.dayOffset
  const showZone = isSource || (result.isAlias && result.primaryCity)

  return (
    <li className={`tb-row${enter ? ' tb-row--enter' : ''}`}>
      <div className="tb-row__place">
        <span className="tb-row__city">
          {result.city}
          {isSource && <span className="q-badge">From</span>}
        </span>
        <span className="tb-row__meta">
          {result.country}
          {showZone && (
            <> · <span className="q-mono">{result.iana}</span></>
          )}
        </span>
      </div>

      <div className="tb-row__when">
        <span className="tb-row__time">
          {dayOffset !== 0 && (
            <span className="q-badge">{dayOffset === 1 ? 'Next day' : 'Previous day'}</span>
          )}
          <span className="tb-row__clock">{result.displayTime}</span>
          <span className="tb-row__abbr">{result.abbreviation}</span>
        </span>
        <span className="tb-row__date">{result.displayDate}</span>
      </div>
    </li>
  )
}
