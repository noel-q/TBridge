import { useUrlState } from './hooks/useUrlState'
import { DateTimeInput } from './components/DateTimeInput'
import { DestinationSelector } from './components/DestinationSelector'
import { ResultsList } from './components/ResultsList'
import { CopyShareBar } from './components/CopyShareBar'

/**
 * Responsive container: full width on mobile (16px padding each side),
 * expands naturally on tablet, caps at 1040px centred on desktop.
 */
const CONTAINER = 'w-full max-w-[1040px] mx-auto px-4 sm:px-6'

export default function App() {
  const [state, updateState, shareUrl] = useUrlState()

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-800/60">
        <div className={`${CONTAINER} py-3.5 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-semibold tracking-tight">TimeBridge</span>
          </div>

          {/* 12h / 24h toggle */}
          <button
            onClick={() => updateState({ is24h: !state.is24h })}
            className="format-toggle"
            aria-label={`Switch to ${state.is24h ? '12-hour' : '24-hour'} format`}
          >
            <span className={`format-option ${state.is24h ? 'format-option--active' : ''}`}>
              24h
            </span>
            <span className={`format-option ${!state.is24h ? 'format-option--active' : ''}`}>
              12h
            </span>
          </button>
        </div>
      </header>

      {/* Input panel */}
      <div className={CONTAINER}>
        <DateTimeInput state={state} onChange={updateState} />
        <div className="section-divider" />
        <DestinationSelector state={state} onChange={updateState} />
      </div>

      {/* Results */}
      <div className={`${CONTAINER} mt-4`}>
        <div className="section-divider mb-1" />
        <ResultsList state={state} />
        <div className="mt-4">
          <CopyShareBar state={state} shareUrl={shareUrl} />
        </div>
      </div>

      <footer className={`${CONTAINER} py-8 text-xs text-neutral-700 text-center`}>
        Luxon · IANA · DST-aware
      </footer>
    </div>
  )
}
