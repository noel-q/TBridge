type Option<T extends string> = { value: T; label: string }

type Props<T extends string> = {
  label: string
  shortcut: string
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}

/** Quiet SegmentedControl: a small group of pressed buttons on surface-raised. */
export function Segmented<T extends string>({ label, shortcut, options, value, onChange }: Props<T>) {
  return (
    <div className="q-seg" role="group" aria-label={label} title={`${label} (${shortcut})`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="q-seg__item"
          aria-pressed={option.value === value}
          aria-keyshortcuts={shortcut}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
