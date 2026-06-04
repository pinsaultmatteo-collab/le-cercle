import { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor — a small gold circle that trails the mouse with eased lag.
 * Grows when hovering interactive elements. Desktop / fine-pointer only.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  // target + current positions
  const target = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)
  const visible = useRef(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (!visible.current) {
        visible.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '1'
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onLeave = () => {
      visible.current = false
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-grow',
      )
      hovering.current = !!interactive
    }

    let raf
    const lerp = (a, b, n) => a + (b - a) * n
    const render = () => {
      ring.current.x = lerp(ring.current.x, target.current.x, 0.15)
      ring.current.y = lerp(ring.current.y, target.current.y, 0.15)
      if (ringRef.current) {
        const scale = hovering.current ? 2.4 : 1
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) scale(${scale})`
        ringRef.current.style.borderColor = hovering.current
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.5)'
        ringRef.current.style.backgroundColor = hovering.current
          ? 'rgba(255, 255, 255, 0.06)'
          : 'transparent'
      }
      raf = requestAnimationFrame(render)
    }
    render()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* center dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-light)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          marginLeft: -15,
          marginTop: -15,
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition:
            'opacity 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
          willChange: 'transform',
        }}
      />
    </>
  )
}
