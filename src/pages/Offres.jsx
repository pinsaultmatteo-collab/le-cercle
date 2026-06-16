import PageWrapper from '../components/PageWrapper'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { SectionHeading, SectionLabel } from '../components/Section'
import { CircleMark, ArrowRight } from '../components/Icons'
import { IMG } from '../data/site'

// ============ COURS COLLECTIFS — SMALL GROUP ============
const SMALL_GROUP = {
  intro:
    'Cours quotidiens de 8 personnes maximum (45 minutes), au choix : SOFT, MODÉRÉ, HARD. Réservation via l\'application. Séance d\'essai offerte.',
  rows: [
    { label: 'Séance d\'essai', price: 'Offerte' },
    { label: 'Pass 1 séance / semaine', price: '65 €', unit: '/ mois' },
    { label: 'Pass 2 séances / semaine', price: '105 €', unit: '/ mois' },
    { label: 'Pass 3 séances / semaine', price: '120 €', unit: '/ mois' },
    { label: 'Pass illimité', price: '150 €', unit: '/ mois' },
  ],
}

// ============ COACHING (SOLO & DUO) ============
const COACHING_BILAN = [
  { label: 'Séance bilan individuel', price: '70 €' },
  { label: 'Séance bilan en binôme', price: '85 €' },
]

const COACHING_SOLO = [
  { label: 'Pass 10 séances', price: '65 €', unit: '/ séance' },
  { label: 'Pass 20 séances', price: '60 €', unit: '/ séance' },
  { label: 'Pass 40 séances', price: '55 €', unit: '/ séance' },
]

const COACHING_DUO = [
  { label: 'Pass 10 séances', price: '70 €', unit: '/ séance' },
  { label: 'Pass 20 séances', price: '65 €', unit: '/ séance' },
  { label: 'Pass 40 séances', price: '60 €', unit: '/ séance' },
]

const FAQ = [
  {
    q: 'Comment s\'inscrire aux cours collectifs ?',
    a: 'Réservez vos cours directement via notre application. Vous visualisez le planning en temps réel et choisissez votre séance parmi les formats SOFT, MODÉRÉ ou HARD.',
  },
  {
    q: 'Quelle est la différence entre cours collectifs et coaching ?',
    a: 'Les cours collectifs en small group réunissent jusqu\'à 8 personnes autour d\'une séance commune (formules mensuelles). Le coaching, individuel ou en binôme, vous offre un accompagnement entièrement personnalisé avec un coach dédié (pass de séances).',
  },
  {
    q: 'Qu\'est-ce que la séance bilan ?',
    a: 'La séance bilan est un diagnostic complet d\'1h30 : immersion au club, bilan de santé et tests physiques techniques (mobilité, force, cardio). Ces données permettent de concevoir votre programme sur mesure.',
  },
  {
    q: 'Les séances sont-elles personnalisées ?',
    a: 'Toujours. Que ce soit en coaching individuel, en binôme ou en cours collectif, votre coach adapte le programme à votre niveau et vos objectifs. Le sur-mesure est au cœur de notre approche.',
  },
]

export default function Offres() {
  return (
    <PageWrapper>
      <Seo
        title="Nos Offres & Tarifs"
        description="Cours collectifs avec séance d'essai offerte · Coaching individuel à partir de 55 €/séance · Coaching en binôme à partir de 60 €. Découvrez toutes nos formules au Cercle, Toulouse."
        canonical="/offres"
      />
      <PageHero
        label="Nos offres"
        title={
          <>
            NOS OFFRES
          </>
        }
        intro="Chez LE CERCLE, nous croyons que chaque personne mérite notre offre d'accompagnement unique. Une expertise professionnelle, un cadre exclusif et un suivi de qualité."
        image={IMG.poids}
      />

      {/* PRICING — COURS COLLECTIFS */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
        <SectionHeading
          label="Cours collectifs"
          title="Les tarifs Small Group"
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-sm font-light leading-relaxed text-text-secondary">
            {SMALL_GROUP.intro}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl border border-border-gold bg-bg-card">
            {SMALL_GROUP.rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-baseline justify-between gap-4 px-7 py-6 md:px-10 ${
                  i !== SMALL_GROUP.rows.length - 1 ? 'border-b border-border-gold' : ''
                }`}
              >
                <span className="text-sm font-light text-text-primary md:text-base">
                  {row.label}
                </span>
                <span className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="font-display text-xl font-light text-accent md:text-2xl">
                    {row.price}
                  </span>
                  {row.unit && (
                    <span className="text-xs font-light text-text-secondary">
                      {row.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PRICING — COACHING */}
      <section className="border-y border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
          <SectionHeading
            label="Coaching"
            title="Les tarifs de Coaching"
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-center text-sm font-light leading-relaxed text-text-secondary">
              Un accompagnement entièrement personnalisé avec un coach dédié,
              en solo ou en binôme. Chaque parcours débute par une séance bilan.
            </p>
          </Reveal>

          {/* Séances bilan */}
          <Reveal delay={0.15}>
            <div className="mx-auto mt-14 max-w-2xl border border-border-gold bg-bg-primary">
              {COACHING_BILAN.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 px-7 py-6 md:px-10 ${
                    i !== COACHING_BILAN.length - 1 ? 'border-b border-border-gold' : ''
                  }`}
                >
                  <span className="text-sm font-light text-text-primary md:text-base">
                    {row.label}
                  </span>
                  <span className="font-display text-xl font-light text-accent md:text-2xl">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Solo & Duo */}
          <div className="mx-auto mt-8 grid max-w-2xl gap-8 md:grid-cols-2">
            <Reveal delay={0.2}>
              <div className="h-full border border-border-gold bg-bg-primary">
                <div className="border-b border-border-gold px-7 py-5 text-center">
                  <h3 className="text-label text-[0.62rem] text-accent">
                    Coaching solo
                  </h3>
                </div>
                {COACHING_SOLO.map((row) => (
                  <div key={row.label} className="px-7 py-5 text-center">
                    <p className="text-sm font-light text-text-primary">
                      {row.label}
                    </p>
                    <p className="mt-1">
                      <span className="font-display text-xl font-light text-accent">
                        {row.price}
                      </span>{' '}
                      <span className="text-xs font-light text-text-secondary">
                        {row.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="h-full border border-border-gold bg-bg-primary">
                <div className="border-b border-border-gold px-7 py-5 text-center">
                  <h3 className="text-label text-[0.62rem] text-accent">
                    Coaching duo
                  </h3>
                  <p className="mt-1 text-[0.7rem] font-light text-text-secondary">
                    tarif à partager entre les 2 participants
                  </p>
                </div>
                {COACHING_DUO.map((row) => (
                  <div key={row.label} className="px-7 py-5 text-center">
                    <p className="text-sm font-light text-text-primary">
                      {row.label}
                    </p>
                    <p className="mt-1">
                      <span className="font-display text-xl font-light text-accent">
                        {row.price}
                      </span>{' '}
                      <span className="text-xs font-light text-text-secondary">
                        {row.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 flex justify-center">
              <Button variant="solid" to="/contact">
                Nous contacter
              </Button>
            </div>
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
