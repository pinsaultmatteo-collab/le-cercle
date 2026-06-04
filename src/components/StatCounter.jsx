import useCountUp from '../hooks/useCountUp'

/**
 * StatCounter — animated count-up stat block.
 * Counts from 0 to `value` when scrolled into view.
 */
export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
  align = 'left',
  size = 'lg',
}) {
  const [ref, display] = useCountUp(value, { decimals, duration: 2200 })

  const sizeClass =
    size === 'sm'
      ? 'font-display text-4xl font-light leading-none text-text-primary md:text-5xl'
      : 'font-display text-6xl font-light leading-none text-text-primary md:text-7xl'

  return (
    <div
      ref={ref}
      className={
        align === 'center'
          ? 'text-center'
          : align === 'right'
            ? 'text-right'
            : 'text-left'
      }
    >
      <div className={sizeClass}>
        <span className="text-accent">{prefix}</span>
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-4 text-label text-[0.65rem] text-text-secondary">
        {label}
      </div>
    </div>
  )
}
