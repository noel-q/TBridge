import { useUrlState } from './hooks/useUrlState'
import { DateTimeInput } from './components/DateTimeInput'
import { DestinationSelector } from './components/DestinationSelector'
import { ResultsList } from './components/ResultsList'
import { CopyShareBar } from './components/CopyShareBar'
import { ThemeToggle } from './components/ThemeToggle'
import { Segmented } from './components/Segmented'
import { Signature } from './components/Signature'
import { BridgeMark } from './components/Icons'
import { useTheme } from './hooks/useTheme'
import { useShortcuts } from './hooks/useShortcuts'

type Clock = '24h' | '12h'

const CLOCK_OPTIONS: { value: Clock; label: string }[] = [
  { value: '24h', label: '24h' },
  { value: '12h', label: '12h' },
]

export default function App() {
  const [state, updateState, shareUrl] = useUrlState()
  const theme = useTheme()

  useShortcuts({ h: () => updateState({ is24h: !state.is24h }) })

  return (
    <div className="tb-page">
      <header className="tb-header">
        <span className="tb-brand">
          <BridgeMark />
          TBridge
        </span>

        <div className="tb-header__controls">
          <Segmented
            label="Clock"
            shortcut="H"
            options={CLOCK_OPTIONS}
            value={state.is24h ? '24h' : '12h'}
            onChange={(clock) => updateState({ is24h: clock === '24h' })}
          />
          <ThemeToggle mode={theme.mode} onChange={theme.setMode} />
        </div>
      </header>

      <div className="tb-intro">
        <h1 className="tb-title">Convert a time</h1>
        <p className="tb-lede">
          Pick a date, time and place, then add the cities you want to compare. Daylight saving is handled for you.
        </p>
      </div>

      <main className="tb-main">
        <DateTimeInput state={state} onChange={updateState} />
        <DestinationSelector state={state} onChange={updateState} />

        <section className="tb-section" aria-label="Converted times">
          <ResultsList state={state} />
          <CopyShareBar state={state} shareUrl={shareUrl} />
        </section>
      </main>

      <footer className="tb-footer">
        <div className="q-hints" aria-label="Keyboard shortcuts">
          <span className="q-hint"><span className="q-kbd">/</span> Add a city</span>
          <span className="q-hint"><span className="q-kbd">⌫</span> Remove last city</span>
          <span className="q-hint"><span className="q-kbd">H</span> 12 or 24 hour</span>
          <span className="q-hint"><span className="q-kbd">T</span> Theme</span>
        </div>
        <p className="tb-about">
          <Signature version={__APP_VERSION__} />
        </p>
        <p className="tb-about">
          <span>
            Runs in your browser. No accounts, analytics or cookies; only your theme choice is saved on this device.
          </span>
          <a href="https://github.com/noel-q/TBridge" target="_blank" rel="noopener noreferrer">
            Source on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
