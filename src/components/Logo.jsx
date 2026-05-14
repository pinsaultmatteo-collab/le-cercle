import { Link } from 'react-router-dom'

/**
 * Logo — the Le Cercle brand mark.
 * The source is a JPEG on a pure-black background; `mix-blend-mode: screen`
 * makes the black drop out so only the white circle + wordmark show against
 * the dark UI — no visible square edge.
 */
export default function Logo({ height = 48, className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Le Cercle — Accueil"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/logo.jpg"
        alt="Le Cercle"
        style={{
          height,
          width: 'auto',
          mixBlendMode: 'screen',
        }}
        draggable="false"
      />
    </Link>
  )
}
