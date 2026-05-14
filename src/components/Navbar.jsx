import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { InstagramIcon } from './Icons'

const INSTAGRAM_URL = 'https://www.instagram.com/lecercle_clubdesport/'

const NAV_LINKS = [
  { label: 'Concept', to: '/concept' },
  { label: 'Services', to: '/services' },
  { label: 'Nos Offres', to: '/offres' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // background turns dark after a little scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
        <div
          className={`transition-all duration-500 ease-luxe ${
            scrolled || open
              ? 'border-b border-border-gold bg-bg-primary/90 backdrop-blur-md'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-5 md:px-12">
            {/* Logo */}
            <Logo height={44} className="cursor-grow relative z-[110]" />

            {/* Desktop links */}
            <div className="hidden items-center gap-10 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-label text-[0.68rem] transition-colors duration-300 ${
                      isActive
                        ? 'text-accent'
                        : 'text-text-primary/70 hover:text-accent-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <span className="h-4 w-px bg-border-gold" />

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-accent transition-transform duration-300 hover:scale-110"
              >
                <InstagramIcon size={18} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <motion.span
                className="block h-px w-7 bg-text-primary"
                animate={
                  open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-px w-7 bg-text-primary"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-7 bg-text-primary"
                animate={
                  open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-bg-primary lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-border-gold"
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-6 font-display text-5xl font-light tracking-tight transition-colors ${
                        isActive ? 'text-accent' : 'text-text-primary'
                      }`
                    }
                  >
                    <span className="mr-4 text-label align-middle text-[0.6rem] text-text-secondary">
                      0{i + 1}
                    </span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-between px-8 pb-10"
            >
              <p className="text-label text-[0.6rem] text-text-secondary">
                Carmes · Toulouse
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-accent"
              >
                <InstagramIcon size={18} />
                <span className="text-label text-[0.6rem]">Instagram</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
