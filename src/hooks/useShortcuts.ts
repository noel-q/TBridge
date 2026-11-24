import { useEffect, useRef } from 'react'

/** Single-key shortcuts, shown as key hints in the UI. */
export type ShortcutKey = '/' | 'c' | 's' | 'h' | 't'

type KeyEventLike = Pick<KeyboardEvent, 'key' | 'metaKey' | 'ctrlKey' | 'altKey' | 'target'>

function isEditable(target: EventTarget | null): boolean {
  if (!target || typeof target !== 'object') return false
  const el = target as { tagName?: string; isContentEditable?: boolean }
  const tag = el.tagName?.toLowerCase()
  return tag === 'input' || tag === 'textarea' || tag === 'select' || el.isContentEditable === true
}

/**
 * Returns the shortcut a key press means, or null.
 * Shortcuts only fire outside text fields and without Cmd, Ctrl or Alt, so typing and
 * browser shortcuts (Cmd+C, Ctrl+S) keep working.
 */
export function shortcutFor(event: KeyEventLike): ShortcutKey | null {
  if (event.metaKey || event.ctrlKey || event.altKey) return null
  if (isEditable(event.target)) return null
  const key = event.key.toLowerCase()
  return key === '/' || key === 'c' || key === 's' || key === 'h' || key === 't' ? key : null
}

/** Registers handlers for single-key shortcuts while the component is mounted. */
export function useShortcuts(handlers: Partial<Record<ShortcutKey, () => void>>) {
  const latest = useRef(handlers)
  latest.current = handlers

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = shortcutFor(event)
      if (!key) return
      const handler = latest.current[key]
      if (!handler) return
      event.preventDefault()
      handler()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])
}
