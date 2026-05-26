import { useEffect, useMemo } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'

const CENTER = 50
const RADIUS = 49.2
const TWO_PI = Math.PI * 2
const CIRCUMFERENCE = TWO_PI * RADIUS

const EMBER_COLORS = [
  '#FFE9B8',
  '#FFD27D',
  '#FFB347',
  '#FFC069',
  '#FFF1C7',
  '#FFAE5C',
]

/**
 * Build a deterministic-ish set of embers distributed along the circle.
 * Each ember knows when it spawns (matched to head position) and where it
 * flies — outward, with a random spread.
 */
function buildEmbers({ bursts = 22, perBurst = 3 } = {}) {
  const out = []
  for (let i = 0; i < bursts; i++) {
    const spawnP = (i + 0.5) / bursts
    const angle = TWO_PI * spawnP
    const cx = CENTER + RADIUS * Math.cos(angle)
    const cy = CENTER + RADIUS * Math.sin(angle)
    for (let j = 0; j < perBurst; j++) {
      const spread = (Math.random() - 0.5) * 1.4
      const driftAngle = angle + spread
      const speed = 2 + Math.random() * 4
      out.push({
        spawnP,
        cx,
        cy,
        vx: Math.cos(driftAngle) * speed,
        // gravity-ish drift downward in screen space (y+) → after the SVG -rotate-90 wrapper this becomes a sideways drift, which still reads like sparkles
        vy: Math.sin(driftAngle) * speed + Math.random() * 0.8,
        r: 0.22 + Math.random() * 0.45,
        // each ember lives a fraction of total progress
        lifespan: 0.08 + Math.random() * 0.08,
        color: EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
      })
    }
  }
  return out
}

function Ember({ spec, progress }) {
  const local = useTransform(
    progress,
    [spec.spawnP, spec.spawnP + spec.lifespan],
    [0, 1],
    { clamp: true }
  )
  const opacity = useTransform(local, [0, 0.15, 1], [0, 1, 0])
  const x = useTransform(local, (p) => spec.cx + spec.vx * p)
  const y = useTransform(local, (p) => spec.cy + spec.vy * p)
  const r = useTransform(local, [0, 1], [spec.r, 0.04])
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={r}
      fill={spec.color}
      style={{ opacity }}
    />
  )
}

export default function HeroSparkCircle({
  className = '',
  duration = 4.8,
  delay = 0.5,
}) {
  const progress = useMotionValue(0)
  const embers = useMemo(() => buildEmbers(), [])

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    })
    return () => controls.stop()
  }, [progress, duration, delay])

  // dash offset reveals the burnt trail behind the spark head
  const dashOffset = useTransform(progress, [0, 1], [CIRCUMFERENCE, 0])

  // bright head position — tip of the moving spark
  const headX = useTransform(progress, (p) =>
    CENTER + RADIUS * Math.cos(TWO_PI * p)
  )
  const headY = useTransform(progress, (p) =>
    CENTER + RADIUS * Math.sin(TWO_PI * p)
  )
  // fade in fast, fade out as the spark reaches the start again
  const headOpacity = useTransform(progress, [0, 0.03, 0.94, 1], [0, 1, 1, 0])
  const trailOpacity = useTransform(progress, [0.92, 1], [1, 0.55])
  // kill any embers still alive once the animation completes — prevents
  // leftover dots near the spawn-point at the top of the circle
  const embersGroupOpacity = useTransform(progress, [0.94, 1], [1, 0])

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={`-rotate-90 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <defs>
        <filter id="sparkSoftGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="0.55" />
        </filter>
        <filter id="sparkWideGlow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="1.7" />
        </filter>
      </defs>

      {/* Burnt trail — what the spark leaves behind */}
      <motion.circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        fill="none"
        stroke="rgba(255, 178, 80, 0.62)"
        strokeWidth="0.22"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        style={{ strokeDashoffset: dashOffset, opacity: trailOpacity }}
      />

      {/* Soft warm glow following the trail (gives it a "still hot" look) */}
      <motion.circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        fill="none"
        stroke="rgba(255, 150, 60, 0.25)"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        filter="url(#sparkSoftGlow)"
        style={{ strokeDashoffset: dashOffset, opacity: trailOpacity }}
      />

      {/* Drifting embers along the trail — wrapped in a group that fades
          out at the very end so no stray particles linger after the
          animation completes */}
      <motion.g style={{ opacity: embersGroupOpacity }}>
        {embers.map((spec, i) => (
          <Ember key={i} spec={spec} progress={progress} />
        ))}
      </motion.g>

      {/* Outer halo around the head */}
      <motion.circle
        cx={headX}
        cy={headY}
        r="2.8"
        fill="rgba(255, 200, 100, 0.55)"
        filter="url(#sparkWideGlow)"
        style={{ opacity: headOpacity }}
      />
      {/* Mid halo */}
      <motion.circle
        cx={headX}
        cy={headY}
        r="1.3"
        fill="rgba(255, 220, 140, 0.9)"
        filter="url(#sparkSoftGlow)"
        style={{ opacity: headOpacity }}
      />
      {/* Bright core — the burning fuse tip */}
      <motion.circle
        cx={headX}
        cy={headY}
        r="0.55"
        fill="#FFF8E0"
        style={{ opacity: headOpacity }}
      />
    </motion.svg>
  )
}
