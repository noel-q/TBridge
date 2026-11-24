import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { shortcutFor } from '../hooks/useShortcuts'
import { nextThemeMode } from '../components/ThemeToggle'
import { describeZoneAt } from '../components/SourceTimezoneCombobox'

const appCss = readFileSync(resolve(import.meta.dirname, 'app.css'), 'utf8')
const tokensCss = readFileSync(resolve(import.meta.dirname, 'quiet-tokens.css'), 'utf8')

describe('Quiet styles', () => {
  it('uses no hard-coded colours outside the generated tokens', () => {
    expect(appCss.match(/#[0-9a-fA-F]{3,8}\b/g)).toBeNull()
    expect(appCss).not.toMatch(/\b(rgb|rgba|hsl|hsla)\(/)
  })

  it('only uses font sizes from the Quiet type scale', () => {
    const sizes = [...appCss.matchAll(/font-size:\s*(\d+)px/g)].map((m) => Number(m[1]))
    const scale = [12, 13, 15, 17, 22, 28, 40, 56]
    expect(sizes.length).toBeGreaterThan(0)
    for (const size of sizes) expect(scale).toContain(size)
  })

  it('points the accent at tide in both themes', () => {
    expect(tokensCss.match(/--accent: var\(--tide\);/g)?.length).toBe(3)
  })

  it('keeps all movement behind prefers-reduced-motion', () => {
    expect(appCss).toContain('@media (prefers-reduced-motion: no-preference)')
    expect(appCss).toContain('@media (prefers-reduced-motion: reduce)')
  })
})

describe('shortcutFor', () => {
  const body = { tagName: 'BODY' } as unknown as EventTarget
  const input = { tagName: 'INPUT' } as unknown as EventTarget
  const press = (key: string, extra: Partial<KeyboardEvent> = {}) =>
    shortcutFor({ key, metaKey: false, ctrlKey: false, altKey: false, target: body, ...extra })

  it('maps the single-key shortcuts', () => {
    expect(press('/')).toBe('/')
    expect(press('c')).toBe('c')
    expect(press('S')).toBe('s')
    expect(press('h')).toBe('h')
    expect(press('t')).toBe('t')
    expect(press('x')).toBeNull()
  })

  it('leaves typing and browser shortcuts alone', () => {
    expect(press('c', { target: input })).toBeNull()
    expect(press('c', { metaKey: true })).toBeNull()
    expect(press('s', { ctrlKey: true })).toBeNull()
    expect(press('t', { altKey: true })).toBeNull()
  })
})

describe('theme cycle', () => {
  it('goes system, light, dark and round again', () => {
    expect(nextThemeMode('system')).toBe('light')
    expect(nextThemeMode('light')).toBe('dark')
    expect(nextThemeMode('dark')).toBe('system')
  })
})

describe('describeZoneAt', () => {
  it('shows the abbreviation and offset in force at the chosen moment', () => {
    expect(describeZoneAt('Europe/London', '2026-11-24', '17:00')).toBe('GMT · UTC+00:00')
    expect(describeZoneAt('Europe/London', '2026-07-01', '12:00')).toBe('BST · UTC+01:00')
    expect(describeZoneAt('America/New_York', '2026-11-24', '17:00')).toBe('EST · UTC−05:00')
  })
})
