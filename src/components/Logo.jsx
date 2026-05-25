import { Link } from 'react-router-dom'

/**
 * Logo — the Le Cercle brand mark.
 * Real transparent PNG, so no blend-mode trickery needed.
 */
export default function Logo({ height = 56, className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Le Cercle — Accueil"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/logo.png"
        alt="Le Cercle"
        style={{ height, width: 'auto' }}
        draggable="false"
      />
    </Link>
  )
}
