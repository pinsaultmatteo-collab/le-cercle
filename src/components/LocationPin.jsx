import { motion } from 'framer-motion'

/**
 * LocationPin — red teardrop pin overlaid on a map iframe.
 * Anchor with absolute positioning on a parent that has `position: relative`.
 * The tip of the pin aligns with `top: 50%`, `left: 50%` of the parent.
 */
export default function LocationPin({ size = 36, label }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full"
      style={{ width: size, height: size * 1.35 }}
    >
      {/* pulsing ring at the tip */}
      <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#E63946]/40 animate-ping" />
      <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#E63946] shadow-[0_0_10px_rgba(230,57,70,0.85)]" />

      {/* pin teardrop */}
      <motion.svg
        initial={{ y: -10, opacity: 0, scale: 0.85 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        width={size}
        height={size * 1.35}
        viewBox="0 0 24 32"
        fill="none"
        className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]"
      >
        <path
          d="M12 0C5.4 0 0 5.4 0 12c0 8.5 12 20 12 20s12-11.5 12-20C24 5.4 18.6 0 12 0z"
          fill="#E63946"
          stroke="#FFFFFF"
          strokeWidth="0.9"
        />
        <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
      </motion.svg>

      {label && (
        <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-bg-primary/90 px-2 py-0.5 text-label text-[0.5rem] text-text-primary backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
