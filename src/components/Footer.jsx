import { Link } from 'react-router-dom'
import Logo from './Logo'
import { InstagramIcon, CircleMark } from './Icons'

const INSTAGRAM_URL = 'https://www.instagram.com/lecercle_clubdesport/'

const NAV_LINKS = [
  { label: 'Concept', to: '/concept' },
  { label: 'Services', to: '/services' },
  { label: 'Nos Offres', to: '/offres' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Politique de confidentialité', to: '/confidentialite' },
  { label: 'CGU', to: '/cgu' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border-gold bg-bg-secondary">
      <div className="mx-auto max-w-container px-6 py-20 md:px-12">
        {/* top row */}
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Logo height={52} />
            <p className="text-label text-[0.62rem] text-text-secondary">
              4 rue Joutx-Aigues · Carmes · Toulouse
            </p>
          </div>

          <div className="flex items-center gap-2 text-accent/40">
            <span className="h-px w-12 bg-border-gold" />
            <CircleMark size={22} />
            <span className="h-px w-12 bg-border-gold" />
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-text-primary/80 transition-colors hover:text-accent-light"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} className="text-accent" />
            <span className="text-label text-[0.62rem]">
              @lecercle_clubdesport
            </span>
          </a>
        </div>

        <div className="rule-gold my-12" />

        {/* nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-label text-[0.62rem] text-text-secondary transition-colors duration-300 hover:text-accent-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* legal links */}
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-start">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[0.68rem] font-light text-text-secondary/80 transition-colors duration-300 hover:text-accent-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-gold pt-8 md:flex-row">
          <p className="text-[0.7rem] font-light tracking-wide text-text-secondary">
            © {new Date().getFullYear()} Le Cercle CSP — Club de Sport Privé · Toulouse
          </p>
          <p className="text-[0.7rem] font-light tracking-wide text-text-secondary">
            SIREN 101 917 219
          </p>
        </div>
      </div>
    </footer>
  )
}
