import { useEffect, useState } from 'react'

/**
 * DebugPanel — panneau de diagnostic temporaire (activé via ?debug=1).
 * Mesure la géométrie réelle du header fixe et remonte la chaîne
 * d'ancêtres à la recherche de ce qui crée un bloc conteneur
 * (transform / filter / will-change / contain / backdrop-filter / perspective),
 * ce qui désancrerait le header du viewport.
 */
export default function DebugPanel() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    const read = () => {
      const header = document.querySelector('header')
      if (!header) return setLines([['header', 'INTROUVABLE', true]])

      const r = header.getBoundingClientRect()
      const hcs = getComputedStyle(header)
      const probe = document.getElementById('sat-probe')
      const out = []

      const top = Math.round(r.top * 10) / 10
      out.push(['header.top', top, Math.abs(top) > 1])
      out.push(['header.position', hcs.position, hcs.position !== 'fixed'])
      out.push(['header.transform', hcs.transform === 'none' ? 'none' : 'SET', false])
      out.push([
        'safe-area-top',
        probe ? Math.round(probe.getBoundingClientRect().height) : '?',
        false,
      ])

      const bar = header.firstElementChild
      if (bar) {
        const bcs = getComputedStyle(bar)
        const br = bar.getBoundingClientRect()
        out.push(['bar.top', Math.round(br.top), false])
        out.push(['bar.height', Math.round(br.height), false])
        out.push(['bar.padTop', bcs.paddingTop, false])
        out.push([
          'bar.bg',
          bcs.backgroundColor,
          bcs.backgroundColor.includes('rgba') && bcs.backgroundColor.endsWith(', 0)'),
        ])
      }
      out.push(['scrollY', Math.round(window.scrollY), false])
      out.push(['innerH', window.innerHeight, false])
      out.push([
        'visualVP.offTop',
        window.visualViewport ? Math.round(window.visualViewport.offsetTop) : 'n/a',
        false,
      ])

      // remontée des ancêtres : qui crée un bloc conteneur ?
      let el = header.parentElement
      let depth = 0
      let culprit = false
      while (el && depth < 12) {
        const cs = getComputedStyle(el)
        const flags = []
        if (cs.transform && cs.transform !== 'none') flags.push('transform')
        if (cs.filter && cs.filter !== 'none') flags.push('filter')
        if (cs.backdropFilter && cs.backdropFilter !== 'none') flags.push('backdrop')
        if (cs.perspective && cs.perspective !== 'none') flags.push('perspective')
        if (cs.willChange && cs.willChange !== 'auto') flags.push('wc:' + cs.willChange)
        if (cs.contain && cs.contain !== 'none') flags.push('contain:' + cs.contain)

        const name =
          el.tagName.toLowerCase() +
          (el.id ? '#' + el.id : '') +
          (el.className && typeof el.className === 'string'
            ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
            : '')

        if (flags.length) {
          culprit = true
          out.push(['^' + depth + ' ' + name.slice(0, 26), flags.join(','), true])
        }
        el = el.parentElement
        depth++
      }
      if (!culprit) out.push(['ancetres', 'aucun bloc conteneur', false])

      setLines(out)
    }

    read()
    const id = setInterval(read, 400)
    addEventListener('scroll', read, { passive: true })
    addEventListener('resize', read)
    return () => {
      clearInterval(id)
      removeEventListener('scroll', read)
      removeEventListener('resize', read)
    }
  }, [])

  return (
    <>
      <div
        id="sat-probe"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 1,
          height: 'env(safe-area-inset-top)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          background: '#000',
          borderTop: '3px solid #0f0',
          color: '#0f0',
          font: '14px/1.45 ui-monospace, Menlo, monospace',
          padding: '8px 10px calc(8px + env(safe-area-inset-bottom))',
          maxHeight: '46vh',
          overflowY: 'auto',
        }}
      >
        {lines.map(([k, v, bad]) => (
          <div key={k}>
            <span style={{ color: '#fff' }}>{k}</span>:{' '}
            <span style={{ color: bad ? '#ff4444' : '#0f0', fontWeight: bad ? 800 : 400 }}>
              {String(v)}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
