import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import Button from '../components/Button'
import { CircleMark } from '../components/Icons'
import { IMG } from '../data/site'

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={IMG.trackNight}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.32)' }}
        />
        <div className="absolute inset-0 bg-bg-primary/60" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <CircleMark size={48} className="text-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-label text-[0.65rem] text-accent"
          >
            Erreur 404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-6xl font-light leading-[1.02] text-text-primary md:text-8xl"
          >
            Cette page est
            <br />
            <span className="text-accent">hors du Cercle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mx-auto mt-7 max-w-md text-base font-light leading-relaxed text-text-secondary"
          >
            La page que vous cherchez n'existe pas ou a été déplacée.
            Revenons à l'essentiel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-11 flex justify-center"
          >
            <Button variant="solid" to="/">
              Retour à l'accueil
            </Button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
