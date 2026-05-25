import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionLabel } from '../components/Section'
import { ArrowRight, CircleMark } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { IMG } from '../data/site'
import { POSTS, CATEGORIES } from '../data/blogPosts'

export default function Blog() {
  const { openModal } = useModal()
  const [active, setActive] = useState('Tout')

  const featured = POSTS.find((p) => p.featured)
  const rest = POSTS.filter((p) => !p.featured)
  const filtered =
    active === 'Tout' ? rest : rest.filter((p) => p.category === active)

  return (
    <PageWrapper>
      <PageHero
        label="Le journal"
        title={
          <>
            Le carnet
            <br />
            <span className="text-accent">du Cercle.</span>
          </>
        }
        intro="Réflexions, méthodes et regards de coachs. Ce que nous apprenons sur le terrain, partagé sans filtre."
        image={IMG.cyclist}
      />

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group block"
            >
              <article className="grid overflow-hidden border border-border-gold bg-bg-card transition-colors duration-500 group-hover:border-accent lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[480px]">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                  <span className="absolute left-6 top-6 bg-accent px-4 py-1 text-label text-[0.55rem] text-bg-primary">
                    À la une
                  </span>
                </div>
                <div className="flex flex-col justify-center p-9 md:p-14">
                  <div className="flex items-center gap-4 text-label text-[0.58rem] text-text-secondary">
                    <span className="text-accent">{featured.category}</span>
                    <span className="h-px w-4 bg-border-gold" />
                    <span>{featured.date}</span>
                    <span className="h-px w-4 bg-border-gold" />
                    <span>{featured.read} de lecture</span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-normal leading-[1.15] text-text-primary md:text-5xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-sm font-light leading-relaxed text-text-secondary md:text-base">
                    {featured.excerpt}
                  </p>
                  <span className="mt-9 inline-flex w-fit items-center gap-3 text-label text-[0.6rem] text-accent transition-colors group-hover:text-accent-light">
                    Lire l'article
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        </section>
      )}

      {/* FILTER + GRID */}
      <section className="mx-auto max-w-container px-6 pb-28 md:px-12 md:pb-40">
        <div className="flex flex-col gap-8 border-b border-border-gold pb-8 md:flex-row md:items-center md:justify-between">
          <SectionLabel>Tous les articles</SectionLabel>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`text-label text-[0.6rem] transition-colors duration-300 ${
                  active === cat
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-full flex-col border border-border-gold bg-bg-card transition-colors duration-500 group-hover:border-accent"
                    >
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                          style={{ filter: 'brightness(0.72) grayscale(15%)' }}
                        />
                        <span className="absolute left-4 top-4 bg-bg-primary/85 px-3 py-1 text-label text-[0.5rem] text-accent backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center gap-3 text-label text-[0.52rem] text-text-secondary">
                          <span>{post.date}</span>
                          <span className="h-px w-3 bg-border-gold" />
                          <span>{post.read}</span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-normal leading-tight text-text-primary md:text-2xl">
                          {post.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-text-secondary">
                          {post.excerpt}
                        </p>
                        <span className="mt-6 inline-flex w-fit items-center gap-2 text-label text-[0.56rem] text-accent transition-colors group-hover:text-accent-light">
                          Lire
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            {filtered.length === 0 && (
              <p className="mt-20 text-center text-sm font-light text-text-secondary">
                Aucun article dans cette catégorie pour l'instant.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="border-t border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-28 text-center md:px-12 md:py-36">
          <Reveal>
            <div className="flex justify-center">
              <CircleMark size={40} className="text-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-10 max-w-2xl font-display text-3xl font-normal leading-[1.15] text-text-primary md:text-5xl">
              Ces idées vous parlent ?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-lg text-base font-light leading-relaxed text-text-secondary">
              Le meilleur du carnet se vit sur le terrain. Venez transformer la
              théorie en résultats.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex justify-center">
              <Button variant="solid" onClick={() => openModal()}>
                Demander une adhésion
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
