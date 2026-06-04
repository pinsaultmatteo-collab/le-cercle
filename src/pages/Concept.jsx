import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import StatCounter from '../components/StatCounter'
import Marquee from '../components/Marquee'
import { SectionHeading, SectionLabel } from '../components/Section'
import { CircleMark } from '../components/Icons'
import { IMG } from '../data/site'

const PILLARS = [
  {
    n: '01',
    title: 'Zone de coworking',
    text: 'Profitez d\'un espace calme et confortable pour travailler, passer un appel, répondre à vos mails ou simplement prendre un moment pour vous avant ou après votre séance. Café, pause, concentration ou récupération : ici, tout est pensé pour que vous vous sentiez attendu, installé, privilégié.',
  },
  {
    n: '02',
    title: 'Balance impédancemètre',
    text: 'Suivez votre progression avec précision grâce à notre balance à impédancemètre professionnelle. Analyse de la composition corporelle, évolution mesurable, données concrètes : un suivi clair pour piloter vos résultats avec exigence.',
  },
  {
    n: '03',
    title: 'Expertise certifiée',
    text: 'Nos coachs sont passionnés et certifiés, prêts à vous accompagner avec des programmes adaptés à votre situation. Une expertise professionnelle au service de votre corps.',
  },
  {
    n: '04',
    title: 'Accompagnement global',
    text: 'Au-delà des entraînements, nous vous guidons dans l\'adoption d\'un mode de vie sain et équilibré. Le Cercle, où l\'on vient travailler sur soi, mais jamais seul.',
  },
]

const APPROACH = [
  {
    step: 'I',
    title: 'Prise de contact',
    text: 'Contactez-nous pour un premier échange. Nous écoutons vos objectifs et vous orientons vers le service le plus adapté à votre situation.',
  },
  {
    step: 'II',
    title: 'Coaching 360°',
    text: 'Un diagnostic complet de 1h30 : immersion au studio, bilan de santé et tests physiques techniques (mobilité, force, cardio) pour concevoir votre programme sur mesure.',
  },
  {
    step: 'III',
    title: 'Le coaching',
    text: 'Sur une durée d\'une heure, votre coach vous offre une expérience sportive de qualité, personnalisée et adaptée à vos besoins spécifiques, en cohérence avec les données du Coaching 360°.',
  },
  {
    step: 'IV',
    title: 'La progression',
    text: 'Votre programme évolue avec vous. Résultats mesurables, ajustements réguliers — Le Cercle vous accompagne vers vos objectifs les plus élevés.',
  },
]

export default function Concept() {
  return (
    <PageWrapper>
      <PageHero
        label="Le concept"
        title={
          <>
            Le Cercle,
            <br />
            <span className="text-accent">c'est quoi ?</span>
          </>
        }
        intro="Bienvenue dans LE CERCLE, un espace dédié à votre bien-être et à vos objectifs sportifs, où chaque entraînement est conçu sur-mesure pour répondre à vos besoins."
        image={IMG.gymInterior}
      />

      {/* INTRO STATEMENT */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <SectionLabel>Notre raison d'être</SectionLabel>
            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-3xl font-normal leading-[1.22] text-text-primary sm:text-4xl md:text-[2.9rem]">
                Parce qu'un cercle est un espace clos et ouvert à la fois. Il
                protège, il{' '}
                <span className="text-accent">rassemble</span>, il unit.
                C'est une forme pleine, équilibrée, continue, comme le parcours
                de transformation qu'on propose à chacun ici.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="rule-gold mb-8" />
              <p className="text-base font-light leading-relaxed text-text-secondary">
                Le Cercle, où l'on vient travailler sur soi, mais jamais seul.
                C'est un espace où l'on s'entraîne, où l'on partage, où l'on
                se recentre.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[50svh] min-h-[380px] overflow-hidden border-y border-border-gold">
        <motion.img
          src={IMG.coachPortrait}
          alt="Coach du Cercle"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.55) grayscale(25%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-container items-center px-6 md:px-12">
          <Reveal>
            <p className="max-w-lg font-display text-3xl font-normal leading-snug text-text-primary md:text-4xl">
              « Notre mission : offrir un coaching premium, alliant expertise
              et personnalisation, dans un cadre motivant et chaleureux. »
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <SectionHeading
          label="Le club"
          title={
            <>
              Un cadre pensé
              <br />
              pour votre réussite.
            </>
          }
        />

        <Stagger className="mt-20 grid gap-px border border-border-gold bg-border-gold sm:grid-cols-2">
          {PILLARS.map((p) => (
            <StaggerItem key={p.n}>
              <motion.div
                whileHover={{ backgroundColor: '#161616' }}
                transition={{ duration: 0.4 }}
                className="group h-full bg-bg-primary p-10 md:p-14"
              >
                <div className="flex items-start justify-between">
                  <span className="text-label text-[0.62rem] text-accent">
                    {p.n}
                  </span>
                  <CircleMark
                    size={22}
                    className="text-text-secondary/30 transition-colors duration-500 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-10 font-display text-3xl font-normal text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                  {p.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* APPROACH / METHOD */}
      <section className="border-y border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
          <SectionHeading
            label="La méthode"
            title="Comment Le Cercle vous accompagne"
            intro="Un parcours en quatre temps, rigoureux et entièrement personnalisé — de la première prise de contact à l'atteinte de vos objectifs."
          />

          <div className="mt-20 grid gap-px border border-border-gold bg-border-gold md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.12}>
                <div className="h-full bg-bg-secondary p-10">
                  <span className="font-display text-5xl font-light text-accent">
                    {a.step}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-normal text-text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-text-secondary">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          <StatCounter value={8} suffix=" à 10" label="Personnes par cours collectif" />
          <StatCounter value={45} suffix=" min" label="Durée des cours collectifs" />
          <StatCounter value={55} prefix="À partir de " suffix=" €" label="Coaching individuel / séance" />
          <StatCounter value={60} prefix="À partir de " suffix=" €" label="Coaching binôme / séance" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border-gold bg-bg-secondary py-8">
        <Marquee
          items={['Performance', 'Discipline', 'Sur-mesure', 'Confidentiel', 'Excellence']}
          reverse
          duration={34}
        />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container px-6 py-28 text-center md:px-12 md:py-40">
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
            élevés. Découvrez nos services ou contactez-nous directement.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button variant="solid" to="/contact">
              Nous contacter
            </Button>
            <Button variant="outline" to="/services">
              Nos services
            </Button>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
