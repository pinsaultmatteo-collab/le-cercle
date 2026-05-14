import { motion } from 'framer-motion'

/**
 * Marquee — infinite horizontal scroll loop.
 * `items` is an array of strings. `reverse` flips direction.
 */
export default function Marquee({
  items = [],
  reverse = false,
  duration = 28,
  className = '',
}) {
  // duplicate the list so the loop is seamless
  const loop = [...items, ...items]

  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-3xl font-light text-text-primary/80 md:text-5xl">
              {item}
            </span>
            <span className="text-accent/70 text-2xl md:text-4xl">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
