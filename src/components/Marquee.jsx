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
          <span key={i} className="flex items-center gap-7">
            <span className="text-label text-[0.85rem] text-text-primary/80 md:text-base">
              {item}
            </span>
            <span className="text-accent/60 text-sm md:text-base">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
