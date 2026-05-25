import { motion } from 'framer-motion'
import { SectionLabel } from './Section'

/**
 * PageHero — full-bleed hero banner used at the top of interior pages.
 */
export default function PageHero({ label, title, intro, image, align = 'center' }) {
  return (
    <section className="relative flex h-[68svh] min-h-[460px] items-end overflow-hidden">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'brightness(0.45)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-bg-primary/30" />

      <div
        className={`relative z-10 mx-auto w-full max-w-container px-6 pb-16 md:px-12 md:pb-24 ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel
            className={align === 'center' ? 'justify-center' : ''}
          >
            {label}
          </SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-7 max-w-4xl font-display text-[2.6rem] font-normal leading-[1.06] tracking-[-0.01em] text-text-primary sm:text-5xl md:text-7xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-7 max-w-xl text-base font-light leading-relaxed text-text-secondary md:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  )
}
