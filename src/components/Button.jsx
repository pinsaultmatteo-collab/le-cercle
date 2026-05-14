import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

/**
 * Button — luxury CTA with gold shimmer sweep on hover.
 * Renders as <Link>, <a>, or <button> depending on props.
 *
 * variant: 'solid' | 'outline' | 'ghost'
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'outline',
  withArrow = true,
  className = '',
  ...rest
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-3 px-9 py-4 text-label text-[0.7rem] transition-colors duration-500 ease-luxe btn-shimmer select-none'

  const variants = {
    solid:
      'bg-accent text-bg-primary hover:bg-accent-light border border-accent',
    outline:
      'border border-border-gold text-text-primary hover:border-accent hover:text-accent-light',
    ghost:
      'border border-transparent text-text-secondary hover:text-accent-light',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={15}
          className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={onClick}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  )
}
