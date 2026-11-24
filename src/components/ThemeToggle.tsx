import type { ThemeMode } from '../hooks/useTheme'
import { useShortcuts } from '../hooks/useShortcuts'
import { Segmented } from './Segmented'

type Props = {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

export function nextThemeMode(mode: ThemeMode): ThemeMode {
  const index = THEME_OPTIONS.findIndex((option) => option.value === mode)
  return THEME_OPTIONS[(index + 1) % THEME_OPTIONS.length].value
}

export function ThemeToggle({ mode, onChange }: Props) {
  useShortcuts({ t: () => onChange(nextThemeMode(mode)) })

  return <Segmented label="Theme" shortcut="T" options={THEME_OPTIONS} value={mode} onChange={onChange} />
}
