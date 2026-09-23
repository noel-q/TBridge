import { useState } from 'react'
import { convertTime, formatResultLine } from '../utils/conversion'
import { findTimezoneByIana, tzToSelection } from '../data/timezones'
import type { AppState } from '../types'

type Props = {
  state: AppState
  shareUrl: string
}

type CopyState = 'idle' | 'copied-text' | 'copied-url' | 'failed-text' | 'failed-url'

export function CopyShareBar({ state, shareUrl }: Props) {
  const [copyState, setCopyState] = useState<CopyState>('idle')

  function buildCopyText(): string {
    const sourceTz = findTimezoneByIana(state.sourceIana)
    if (!sourceTz) return ''

    const allSelections = [tzToSelection(sourceTz), ...state.destSelections]
    const results = convertTime(state.date, state.time, state.sourceIana, allSelections, state.is24h)
    return results.map(formatResultLine).join('\n')
  }

  async function copy(text: string, done: CopyState, failed: CopyState) {
    try {
      await navigator.clipboard.writeText(text)
      setCopyState(done)
    } catch {
      setCopyState(failed)
    }
    setTimeout(() => setCopyState('idle'), 2000)
  }

  if (state.destSelections.length === 0) return null

  const copyText = buildCopyText()

  return (
    <div className="action-bar">
      <button
        type="button"
        onClick={() => copy(copyText, 'copied-text', 'failed-text')}
        disabled={copyText === ''}
        className="btn-secondary"
      >
        {copyState === 'copied-text' ? '✓ Copied' : copyState === 'failed-text' ? 'Copy failed' : 'Copy results'}
      </button>
      <button
        type="button"
        onClick={() => copy(`${window.location.origin}${shareUrl}`, 'copied-url', 'failed-url')}
        className="btn-primary"
      >
        {copyState === 'copied-url' ? '✓ Copied link' : copyState === 'failed-url' ? 'Copy failed' : 'Share link'}
      </button>
    </div>
  )
}
