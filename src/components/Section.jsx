import Reveal from './Reveal'

/**
 * SectionLabel — small uppercase Montserrat label with a leading gold tick.
 */
export function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-10 bg-accent" />
      <span className="text-label text-[0.65rem] text-accent">
        {children}
      </span>
    </div>
  )
}

/**
 * SectionHeading — large Montserrat display heading. Accepts an optional
 * label above it and supporting copy below.
 */
export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {label && (
        <Reveal>
          <SectionLabel
            className={align === 'center' ? 'justify-center' : ''}
          >
            {label}
          </SectionLabel>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-7 max-w-3xl font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p
            className={`mt-7 max-w-xl text-base font-light leading-relaxed text-text-secondary ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
