import { useEffect, useRef, useState } from 'react'
import { convertTime, formatResultLine } from '../utils/conversion'
import { findTimezoneByIana, tzToSelection } from '../data/timezones'
import { useShortcuts } from '../hooks/useShortcuts'
import type { AppState } from '../types'

type Props = {
  state: AppState
  shareUrl: string
}

type CopyState = 'idle' | 'copied-text' | 'copied-url' | 'failed-text' | 'failed-url'

// Quiet: an inline "Copied" replaces the label for 1.2 s. Failures stay a little longer.
const DONE_MS = 1200
const FAILED_MS = 2500

export function CopyShareBar({ state, shareUrl }: Props) {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  function buildCopyText(): string {
    const sourceTz = findTimezoneByIana(state.sourceIana)
    if (!sourceTz) return ''

    const allSelections = [tzToSelection(sourceTz), ...state.destSelections]
    const results = convertTime(state.date, state.time, state.sourceIana, allSelections, state.is24h)
    return results.map(formatResultLine).join('\n')
  }

  async function copy(text: string, done: CopyState, failed: CopyState) {
    let ok = true
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      ok = false
    }
    setCopyState(ok ? done : failed)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState('idle'), ok ? DONE_MS : FAILED_MS)
  }

  const visible = state.destSelections.length > 0
  const copyText = visible ? buildCopyText() : ''

  const copyResults = () => {
    if (copyText !== '') void copy(copyText, 'copied-text', 'failed-text')
  }
  const shareLink = () => void copy(`${window.location.origin}${shareUrl}`, 'copied-url', 'failed-url')

  useShortcuts(visible ? { c: copyResults, s: shareLink } : {})

  if (!visible) return null

  return (
    <div className="tb-actions">
      <span className="sr-only" role="status" aria-live="polite">
        {copyState === 'copied-text' ? 'Results copied' : copyState === 'copied-url' ? 'Link copied' : copyState.startsWith('failed') ? 'Copy failed' : ''}
      </span>
      <button
        type="button"
        onClick={copyResults}
        disabled={copyText === ''}
        className="q-btn"
        aria-keyshortcuts="C"
      >
        {copyState === 'copied-text' ? 'Copied' : copyState === 'failed-text' ? 'Copy failed' : 'Copy results'}
        <span className="q-kbd" aria-hidden="true">C</span>
      </button>
      <button type="button" onClick={shareLink} className="q-btn q-btn--primary" aria-keyshortcuts="S">
        {copyState === 'copied-url' ? 'Copied link' : copyState === 'failed-url' ? 'Copy failed' : 'Share link'}
        <span className="q-kbd" aria-hidden="true">S</span>
      </button>
    </div>
  )
}
