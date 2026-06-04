import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxImage — a full-bleed background image that drifts vertically as its
 * parent section scrolls through the viewport. Wrap in a `relative
 * overflow-hidden` container. The image is rendered oversized so the drift
 * never exposes an edge.
 */
export function ParallaxImage({
  src,
  alt = '',
  speed = 0.18,
  filter = 'brightness(0.5)',
  className = '',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`]
  )

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, filter }}
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full object-cover"
        draggable="false"
      />
    </div>
  )
}

/**
 * ParallaxGlow — a soft radial gold glow that drifts diagonally on scroll.
 * Purely decorative; sits behind content. Give the parent `relative
 * overflow-hidden`.
 */
export function ParallaxGlow({
  className = '',
  size = 540,
  from = { x: -60, y: -40 },
  to = { x: 60, y: 60 },
  opacity = 0.5,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [from.x, to.x])
  const y = useTransform(scrollYProgress, [0, 1], [from.y, to.y])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          x,
          y,
          width: size,
          height: size,
          opacity,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 38%, transparent 70%)',
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
      />
    </div>
  )
}

/**
 * ParallaxText — a large faint wordmark that slides horizontally on scroll.
 * Decorative watermark used behind section content.
 */
export function ParallaxText({ children, className = '', distance = 160 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [-distance, distance])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 flex items-center overflow-hidden ${className}`}
    >
      <motion.span
        style={{ x }}
        className="whitespace-nowrap font-display text-[18vw] font-extralight uppercase leading-none tracking-[0.1em] text-text-primary/[0.03]"
      >
        {children}
      </motion.span>
    </div>
  )
}
