import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionHeading, SectionLabel } from '../components/Section'
import { CircleMark, ArrowRight } from '../components/Icons'
import { IMG } from '../data/site'

const OFFERS = [
  {
    name: 'Cours collectifs',
    price: 'Séance d\'essai offerte',
    cadence: '',
    summary: 'Au choix : SOFT, MODÉRÉ, HARD, SPÉCIAUX. Cours quotidien de 8 à 10 personnes (45 minutes).',
    features: [
      'Séance d\'essai offerte',
      'Au choix : SOFT, MODÉRÉ, HARD, SPÉCIAUX',
      'Réservez vos cours via l\'application',
      'Cours quotidien de 8 à 10 personnes (45 minutes)',
    ],
    featured: false,
    cta: 'Détails',
  },
  {
    name: 'Coaching individuel',
    price: 'À partir de 55 €',
    cadence: '/ séance',
    summary: 'Un focus total sur vos objectifs pour une transformation garantie. Séance d\'une heure avec coach dédié.',
    features: [
      'Prise de contact, bilan personnalisé et définition des objectifs',
      'Entraînement sur mesure pensé pour vous',
      'Planification de vos séances hebdomadaires selon vos disponibilités',
      'Séance d\'une heure avec coach dédié',
    ],
    featured: true,
    cta: 'Détails',
  },
  {
    name: 'Coaching en binôme',
    price: 'À partir de 60 €',
    cadence: '/ binôme / séance',
    summary: 'Deux fois plus de motivation, deux fois plus de résultats. Séance d\'une heure en binôme avec coach dédié.',
    features: [
      'Premier échange approfondi pour analyser votre situation et fixer vos objectifs',
      'Mise à jour du programme toutes les 2 semaines',
      'Planification de vos séances hebdomadaires selon vos disponibilités',
      'Séance d\'une heure en binôme avec coach dédié',
    ],
    featured: false,
    cta: 'Détails',
  },
]

const FAQ = [
  {
    q: 'Comment s\'inscrire aux cours collectifs ?',
    a: 'Réservez vos cours directement via notre application. Vous visualisez le planning en temps réel et choisissez votre séance parmi les formats SOFT, MODÉRÉ, HARD ou SPÉCIAUX.',
  },
  {
    q: 'Comment fonctionne le coaching individuel ?',
    a: 'Tout commence par une prise de contact et un bilan personnalisé pour définir vos objectifs. Votre coach crée un entraînement sur mesure et planifie vos séances hebdomadaires selon vos disponibilités.',
  },
  {
    q: 'Qu\'est-ce que le Coaching 360° ?',
    a: 'Le Coaching 360° est un diagnostic complet d\'1h30 : immersion au studio, bilan de santé et tests physiques techniques (mobilité, force, cardio). Ces données permettent de concevoir votre programme sur mesure et de vous orienter vers le service le plus adapté.',
  },
  {
    q: 'Les séances sont-elles personnalisées ?',
    a: 'Toujours. Que ce soit en coaching individuel, en binôme ou même en cours collectif, votre coach adapte le programme à votre niveau et vos objectifs. Le sur-mesure est au cœur de notre approche.',
  },
]

export default function Offres() {
  return (
    <PageWrapper>
      <PageHero
        label="Nos offres"
        title={
          <>
            NOS OFFRES
          </>
        }
        intro="Chez LE CERCLE, nous croyons que chaque individu mérite un accompagnement unique. C'est pourquoi nous proposons une expertise professionnelle, un cadre exclusif et un accompagnement global."
        image={IMG.athleteGrayscale}
      />

      {/* PRICING */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-36">
        <SectionHeading
          label="Les formules"
          title="Cours collectifs &amp; Coaching"
          align="center"
          className="mx-auto"
        />

        <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <StaggerItem key={offer.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex h-full flex-col border p-9 md:p-10 ${
                  offer.featured
                    ? 'border-accent bg-bg-card'
                    : 'border-border-gold bg-bg-primary'
                }`}
              >
                {offer.featured && (
                  <span className="absolute -top-px right-8 -translate-y-1/2 bg-accent px-4 py-1 text-label text-[0.55rem] text-bg-primary">
                    Le plus choisi
                  </span>
                )}

                <span className="text-label text-[0.62rem] text-accent">
                  {offer.name}
                </span>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-light text-text-primary">
                    {offer.price}
                  </span>
                  <span className="text-sm font-light text-text-secondary">
                    {offer.cadence}
                  </span>
                </div>

                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                  {offer.summary}
                </p>

                <div className="rule-gold my-8" />

                <ul className="flex-1 space-y-4">
                  {offer.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-light leading-snug text-text-primary"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    variant={offer.featured ? 'solid' : 'outline'}
                    to="/contact"
                    className="w-full"
                  >
                    Nous contacter
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm font-light leading-relaxed text-text-secondary">
            Une séance d'essai offerte pour les cours collectifs. Contactez-nous
            pour connaître nos tarifs détaillés et trouver la formule adaptée à
            vos objectifs.
          </p>
        </Reveal>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[46svh] min-h-[340px] overflow-hidden border-y border-border-gold">
        <motion.img
          src={IMG.coachAthlete}
          alt="Séance de coaching au Cercle"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-bg-primary/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-container items-center px-6 md:px-12">
          <Reveal>
            <p className="max-w-2xl font-display text-3xl font-normal leading-snug text-text-primary md:text-5xl">
              « Investir dans son corps n'est jamais une dépense. C'est la
              plus sûre des fondations. »
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionLabel>Questions fréquentes</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-normal leading-[1.1] text-text-primary md:text-5xl">
                Tout ce qu'il faut savoir.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-sm font-light leading-relaxed text-text-secondary">
                Une autre question ? Notre équipe vous répond avec plaisir
                via la page contact.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border-gold">
              {FAQ.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.08}>
                  <div className="border-b border-border-gold py-8">
                    <h3 className="flex items-start gap-5 font-display text-2xl font-normal text-text-primary">
                      <span className="text-label text-[0.6rem] text-accent">
                        0{i + 1}
                      </span>
                      {item.q}
                    </h3>
                    <p className="mt-4 pl-[2.6rem] text-sm font-light leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-28 text-center md:px-12 md:py-36">
          <Reveal>
            <div className="flex justify-center">
              <CircleMark size={40} className="text-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-10 max-w-2xl font-display text-4xl font-normal leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
              Prêt à atteindre vos objectifs ?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-lg text-base font-light leading-relaxed text-text-secondary">
              Ensemble, nous vous aidons à atteindre vos objectifs les plus
              élevés. Contactez-nous pour votre première séance.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button variant="solid" to="/contact">
                Nous contacter
              </Button>
              <Button variant="ghost" to="/services">
                Nos services
                <ArrowRight size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
