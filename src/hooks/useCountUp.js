import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — counts from 0 to `target` once the element scrolls into view.
 * Returns [ref, value]. Attach ref to the element you want observed.
 */
export default function useCountUp(target, { duration = 2000, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true

            if (prefersReduced) {
              setValue(target)
              return
            }

            const start = performance.now()
            const tick = (now) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              // easeOutExpo
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
              setValue(target * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setValue(target)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toString()

  return [ref, display]
}
