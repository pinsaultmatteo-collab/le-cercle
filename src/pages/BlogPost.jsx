import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionLabel } from '../components/Section'
import { ArrowLeft, ArrowRight, CircleMark } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts'

function ArticleBlock({ block }) {
  if (block.type === 'heading') {
    return (
      <h2 className="mt-14 font-display text-2xl font-normal leading-snug text-text-primary md:text-3xl">
        {block.text}
      </h2>
    )
  }
  if (block.type === 'p') {
    return (
      <p className="mt-6 text-[1.02rem] font-light leading-[1.85] text-text-secondary md:text-[1.08rem]">
        {block.text}
      </p>
    )
  }
  if (block.type === 'list') {
    return (
      <ul className="mt-6 space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-4 text-[1.02rem] font-light leading-relaxed text-text-secondary">
            <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="my-12 border-l border-accent pl-8 md:pl-10">
        <p className="font-display text-2xl font-light leading-snug text-text-primary md:text-3xl">
          « {block.text} »
        </p>
        {block.author && (
          <footer className="mt-5 text-label text-[0.6rem] text-text-secondary">
            {block.author}
          </footer>
        )}
      </blockquote>
    )
  }
  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const { openModal } = useModal()
  const post = getPostBySlug(slug)

  // when the slug changes, scroll back to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(slug, 3)

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative flex h-[68svh] min-h-[460px] items-end overflow-hidden">
        <motion.img
          src={post.img}
          alt=""
          aria-hidden="true"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.42)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-bg-primary/30" />

        <div className="relative z-10 mx-auto w-full max-w-container px-6 pb-14 md:px-12 md:pb-20">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 text-label text-[0.6rem] text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={14}
              className="text-accent transition-transform duration-500 ease-luxe group-hover:-translate-x-1"
            />
            Tous les articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4 text-label text-[0.58rem] text-text-secondary"
          >
            <span className="text-accent">{post.category}</span>
            <span className="h-px w-4 bg-border-gold" />
            <span>{post.date}</span>
            <span className="h-px w-4 bg-border-gold" />
            <span>{post.read} de lecture</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-4xl font-display text-[2.2rem] font-normal leading-[1.12] tracking-[-0.005em] text-text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <p className="border-l border-accent pl-6 font-display text-xl font-light leading-relaxed text-text-primary md:text-2xl">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-2 prose-article">
            {post.body.map((block, i) => (
              <ArticleBlock key={i} block={block} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px flex-1 bg-border-gold" />
            <CircleMark size={20} className="text-accent" />
            <span className="h-px flex-1 bg-border-gold" />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-label text-[0.6rem] text-text-secondary">
            Article rédigé par l'équipe du Cercle
          </p>
        </Reveal>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-border-gold bg-bg-secondary">
          <div className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
            <SectionLabel>À lire ensuite</SectionLabel>
            <h2 className="mt-7 font-display text-3xl font-normal leading-[1.15] text-text-primary md:text-4xl">
              D'autres articles du carnet.
            </h2>

            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="group block h-full">
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-full flex-col border border-border-gold bg-bg-card transition-colors duration-500 group-hover:border-accent"
                    >
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                          style={{ filter: 'brightness(0.72) grayscale(15%)' }}
                        />
                        <span className="absolute left-4 top-4 bg-bg-primary/85 px-3 py-1 text-label text-[0.5rem] text-accent backdrop-blur-sm">
                          {p.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center gap-3 text-label text-[0.52rem] text-text-secondary">
                          <span>{p.date}</span>
                          <span className="h-px w-3 bg-border-gold" />
                          <span>{p.read}</span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-normal leading-tight text-text-primary md:text-2xl">
                          {p.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-text-secondary">
                          {p.excerpt}
                        </p>
                        <span className="mt-6 inline-flex w-fit items-center gap-2 text-label text-[0.56rem] text-accent">
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
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border-gold">
        <div className="mx-auto max-w-container px-6 py-24 text-center md:px-12 md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-normal leading-[1.15] text-text-primary md:text-5xl">
              Envie d'aller plus loin que la théorie ?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-text-secondary">
              Les idées prennent toute leur valeur sur le terrain. Venez les
              mettre à l'épreuve.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
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
