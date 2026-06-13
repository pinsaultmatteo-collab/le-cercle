import { useState } from 'react'
import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionHeading, SectionLabel } from '../components/Section'
import { PlusIcon, ArrowRight, CircleMark } from '../components/Icons'
import { IMG } from '../data/site'

const SERVICES = [
  {
    n: '01',
    title: 'Cours collectifs en small group',
    tagline: 'À partir de 65 € / mois',
    text: 'Une offre structurée en trois intensités pour répondre avec précision à chaque niveau et objectif de performance. Cours quotidien de 8 personnes maximum (45 minutes). Réservez vos cours via l\'application.',
    img: IMG.salleBoxing,
    points: [
      'SOFT : séances douces pour se détendre, améliorer la souplesse et retrouver l\'équilibre',
      'MODÉRÉ : entraînements dynamiques pour renforcer le corps et maintenir la forme',
      'HARD : sessions intensives pour dépasser vos limites et atteindre des performances optimales',
    ],
  },
  {
    n: '02',
    title: 'Coaching individuel',
    tagline: 'À partir de 55 € / séance',
    text: 'Une approche sur-mesure, centrée sur vos objectifs spécifiques, que ce soit pour améliorer vos performances, retrouver la forme, ou simplement vous sentir bien dans votre corps. Un focus total sur vos objectifs pour une transformation garantie.',
    img: IMG.salleRack,
    points: [
      'Prise de contact, bilan personnalisé et définition des objectifs',
      'Entraînement sur mesure pensé pour vous',
      'Planification de vos séances hebdomadaires selon vos disponibilités',
      'Séance d\'une heure avec coach dédié',
    ],
  },
  {
    n: '03',
    title: 'Coaching en binôme',
    tagline: 'À partir de 60 € / binôme / séance',
    text: 'Deux fois plus de motivation, deux fois plus de résultats. Partagez votre accompagnement avec un partenaire pour des séances dynamiques et stimulantes.',
    img: IMG.trackNight,
    points: [
      'Premier échange approfondi pour analyser votre situation et fixer vos objectifs',
      'Planification de vos séances hebdomadaires selon vos disponibilités',
      'Séance d\'une heure en binôme avec coach dédié',
    ],
  },
  {
    n: '04',
    title: 'Séance bilan',
    tagline: 'Le premier contact',
    text: 'La séance bilan est un diagnostic complet de 1h30 qui combine immersion au studio, bilan de santé et tests physiques techniques (mobilité, force, cardio) pour quantifier précisément vos capacités initiales.',
    img: IMG.tapisCourse,
    points: [
      'Immersion au studio Le Cercle',
      'Bilan de santé complet',
      'Tests physiques techniques : mobilité, force, cardio',
      'Conception d\'un programme sur mesure et suivi de progression précis',
    ],
  },
  {
    n: '05',
    title: 'Pass 2 séances / semaine',
    tagline: '105 € / mois',
    text: 'Notre abonnement pour les plus assidus. Deux séances par semaine pour progresser régulièrement et ancrer de bonnes habitudes sportives dans votre quotidien.',
    img: IMG.poids,
    points: [
      'Accès illimité aux cours collectifs en small group',
      '2 séances par semaine incluses',
      'Réservation via l\'application',
      'Idéal pour une progression régulière et durable',
    ],
  },
]

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false)
  const flipped = index % 2 === 1

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group grid overflow-hidden border border-border-gold bg-bg-card transition-colors duration-500 hover:border-accent lg:grid-cols-2">
        {/* image */}
        <div
          className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px] ${
            flipped ? 'lg:order-2' : ''
          }`}
        >
          <img
            src={service.img}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
            style={{ filter: 'brightness(0.72) grayscale(20%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent lg:bg-gradient-to-r" />
          <span className="absolute left-6 top-6 font-display text-5xl font-light text-accent">
            {service.n}
          </span>
        </div>

        {/* content */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
          <span className="text-label text-[0.6rem] text-accent">
            {service.tagline}
          </span>
          <h3 className="mt-5 font-display text-3xl font-normal text-text-primary md:text-4xl">
            {service.title}
          </h3>
          <p className="mt-5 text-sm font-light leading-relaxed text-text-secondary md:text-base">
            {service.text}
          </p>

          {/* expandable detail */}
          <motion.div
            initial={false}
            animate={{
              height: open ? 'auto' : 0,
              opacity: open ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-7 space-y-3 border-t border-border-gold pt-7">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm font-light text-text-primary"
                >
                  <span className="h-px w-5 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-8 inline-flex w-fit items-center gap-3 text-label text-[0.6rem] text-accent transition-colors hover:text-accent-light"
            aria-expanded={open}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlusIcon size={14} />
            </motion.span>
            {open ? 'Réduire' : 'Ce que ça comprend'}
          </button>
        </div>
      </article>
    </Reveal>
  )
}

export default function Services() {
  return (
    <PageWrapper>
      <Seo
        title="Nos Services — Cours collectifs, Coaching individuel & Binôme"
        description="Cours collectifs SOFT, MODÉRÉ, HARD, SPÉCIAUX · Coaching individuel dès 55 € · Coaching en binôme dès 60 € · Séance bilan 360°. Coachs certifiés à Toulouse - Carmes."
        canonical="/services"
      />
      <PageHero
        label="Nos services"
        title={
          <>
            NOS OFFRES
          </>
        }
        intro="Chez LE CERCLE, nous croyons que chaque personne mérite notre offre d'accompagnement unique. Nos coachs sont passionnés et certifiés, prêts à vous accompagner avec des programmes adaptés."
        image={IMG.salleBoxing}
      />

      {/* INTRO */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Une offre complète</SectionLabel>
            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-3xl font-normal leading-[1.22] text-text-primary sm:text-4xl">
                Une expertise professionnelle au service{' '}
                <span className="text-accent">de votre corps.</span>
              </p>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-base font-light leading-relaxed text-text-secondary">
                Un cadre exclusif : profitez d'un environnement premium pensé
                pour votre confort et votre motivation. Un accompagnement
                global : au-delà des entraînements, nous vous guidons dans
                l'adoption d'un mode de vie sain et équilibré.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="mx-auto max-w-container px-6 pb-28 md:px-12 md:pb-40">
        <div className="space-y-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.n} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-y border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
          <SectionHeading
            label="Et ensuite ?"
            title="Trois pas vers votre première séance"
            align="center"
            className="mx-auto"
          />
          <Stagger className="mt-16 grid gap-px border border-border-gold bg-border-gold md:grid-cols-3">
            {[
              {
                n: '01',
                t: 'Contactez-nous',
                d: 'Un échange pour cerner vos objectifs et vous orienter vers le bon service.',
              },
              {
                n: '02',
                t: 'Rencontrez votre coach',
                d: 'Coaching 360° : bilan de santé, tests physiques et construction de votre programme personnalisé.',
              },
              {
                n: '03',
                t: 'Passez à l\'action !',
                d: 'Votre accompagnement commence. Séances collectives, individuelles ou en binôme — selon votre formule.',
              },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="h-full bg-bg-secondary p-10 text-center">
                  <span className="font-display text-5xl font-light text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-normal text-text-primary">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-text-secondary">
                    {s.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={IMG.salleLarge}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-bg-primary/60" />
        <div className="relative mx-auto max-w-container px-6 py-32 text-center md:px-12 md:py-44">
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
              élevés. Commencez par une séance d'essai offerte pour les cours
              collectifs.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button variant="solid" to="/contact">
                Nous contacter
              </Button>
              <Button variant="ghost" to="/offres">
                Voir les offres
                <ArrowRight size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
