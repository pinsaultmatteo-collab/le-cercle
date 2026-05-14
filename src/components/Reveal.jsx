import { motion } from 'framer-motion'

/**
 * Reveal — fade-up entrance (y: 40 -> 0, opacity: 0 -> 1) triggered on scroll.
 * Use `delay` for staggered sequences.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = '',
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Stagger — parent container that staggers its Reveal-like children.
 */
export function Stagger({ children, className = '', delayChildren = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 40 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
