import { motion } from 'framer-motion'

import PageWrapper from './PageWrapper'
import Reveal from './Reveal'
import { SectionLabel } from './Section'

/**
 * LegalPage — consistent layout for Mentions légales / Confidentialité / CGU.
 * `sections` is an array: { title, blocks: [{ type: 'p'|'list'|'kv', ... }] }
 *   - p: { type: 'p', text }
 *   - list: { type: 'list', items: [string] }
 *   - kv: { type: 'kv', pairs: [[label, value]] }
 */
export default function LegalPage({ label, title, intro, sections, updated }) {
  return (
    <PageWrapper>
      <section className="border-b border-border-gold pt-36 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 pb-14 md:px-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>{label}</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-[2.4rem] font-normal leading-[1.1] tracking-[-0.005em] text-text-primary sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base font-light leading-relaxed text-text-secondary"
            >
              {intro}
            </motion.p>
          )}
          {updated && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 text-label text-[0.58rem] text-text-secondary"
            >
              Dernière mise à jour · {updated}
            </motion.p>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-20 md:px-12 md:py-28">
        {sections.map((section, i) => (
          <Reveal key={section.title} delay={i * 0.05}>
            <section className="mt-14 first:mt-0">
              <h2 className="font-display text-2xl font-normal leading-snug text-text-primary md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-2 h-px w-12 bg-accent" />

              {section.blocks.map((block, j) => {
                if (block.type === 'p') {
                  return (
                    <p
                      key={j}
                      className="mt-6 text-[1rem] font-light leading-[1.85] text-text-secondary"
                    >
                      {block.text}
                    </p>
                  )
                }
                if (block.type === 'list') {
                  return (
                    <ul key={j} className="mt-6 space-y-3">
                      {block.items.map((item, k) => (
                        <li
                          key={k}
                          className="flex gap-4 text-[1rem] font-light leading-relaxed text-text-secondary"
                        >
                          <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === 'kv') {
                  return (
                    <dl
                      key={j}
                      className="mt-7 grid gap-x-8 gap-y-4 border border-border-gold bg-bg-card p-7 sm:grid-cols-[max-content_1fr]"
                    >
                      {block.pairs.map(([k, v]) => (
                        <div
                          key={k}
                          className="contents"
                        >
                          <dt className="text-label text-[0.58rem] text-text-secondary">
                            {k}
                          </dt>
                          <dd className="text-sm font-light text-text-primary">
                            {v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )
                }
                return null
              })}
            </section>
          </Reveal>
        ))}
      </article>
    </PageWrapper>
  )
}
