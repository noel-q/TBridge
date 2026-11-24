import { SourceTimezoneCombobox } from './SourceTimezoneCombobox'
import type { AppState } from '../types'

type Props = {
  state: AppState
  onChange: (patch: Partial<AppState>) => void
}

export function DateTimeInput({ state, onChange }: Props) {
  return (
    <section className="tb-section" aria-labelledby="from-heading">
      <h2 id="from-heading" className="tb-section__title">From</h2>
      <div className="tb-from">
        <div className="tb-field">
          <label htmlFor="date-input" className="tb-field__label">Date</label>
          <input
            id="date-input"
            type="date"
            value={state.date}
            onChange={(e) => onChange({ date: e.target.value })}
            className="q-input"
          />
        </div>
        <div className="tb-field">
          <label htmlFor="time-input" className="tb-field__label">Time</label>
          <input
            id="time-input"
            type="time"
            value={state.time}
            onChange={(e) => onChange({ time: e.target.value })}
            className="q-input"
          />
        </div>
        <div className="tb-field">
          <label htmlFor="source-tz" className="tb-field__label">Time zone</label>
          <SourceTimezoneCombobox
            value={state.sourceIana}
            date={state.date}
            time={state.time}
            onChange={(sourceIana) => onChange({ sourceIana })}
          />
        </div>
      </div>
    </section>
  )
}
