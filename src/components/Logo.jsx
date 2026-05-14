import { Link } from 'react-router-dom'

const LOGO_URL =
  'https://framerusercontent.com/images/ZkFzuyKlYP9oc43DHpDJSaDsA.png'

/**
 * Logo — the Le Cercle brand mark. The source PNG is dark, so we invert it
 * to render as warm white against the dark UI.
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
        src={LOGO_URL}
        alt="Le Cercle"
        style={{
          height,
          width: 'auto',
          filter: 'brightness(0) invert(1)',
        }}
        draggable="false"
      />
    </Link>
  )
}
