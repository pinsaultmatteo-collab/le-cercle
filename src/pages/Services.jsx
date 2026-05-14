import { useState } from 'react'
import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionHeading, SectionLabel } from '../components/Section'
import { PlusIcon, ArrowRight, CircleMark } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { IMG } from '../data/site'

const SERVICES = [
  {
    n: '01',
    title: 'Coaching individuel',
    tagline: 'L\'accompagnement absolu',
    text: 'Un coach dédié, un protocole unique. Chaque séance est pensée pour vous : posture, charge, récupération, nutrition. Le sur-mesure poussé à son extrême.',
    img: IMG.coachAthlete,
    points: ['Bilan physiologique complet', 'Programmation individualisée', 'Suivi nutritionnel'],
  },
  {
    n: '02',
    title: 'Préparation physique',
    tagline: 'La performance comme discipline',
    text: 'Pour l\'athlète, le compétiteur ou l\'ambitieux. Force, puissance, endurance et mobilité orchestrées avec une précision chirurgicale.',
    img: IMG.trackNight,
    points: ['Tests de performance', 'Périodisation avancée', 'Prévention des blessures'],
  },
  {
    n: '03',
    title: 'Small group training',
    tagline: 'L\'émulation du collectif',
    text: 'Six membres maximum. L\'énergie d\'un groupe, l\'exigence d\'un suivi rapproché. On progresse ensemble, sans jamais se perdre dans la masse.',
    img: IMG.gymInterior,
    points: ['Groupes de 6 maximum', 'Sessions thématiques', 'Coach attitré'],
  },
  {
    n: '04',
    title: 'Coaching cycliste',
    tagline: 'La route, maîtrisée',
    text: 'Préparation spécifique pour cyclistes et triathlètes. Puissance au seuil, gestion de l\'effort, planification de saison — du loisir éclairé à la compétition.',
    img: IMG.cyclist,
    points: ['Analyse de puissance', 'Plan de saison', 'Sorties encadrées'],
  },
  {
    n: '05',
    title: 'Remise en forme',
    tagline: 'Le retour au mouvement',
    text: 'Reprendre, se reconstruire, retrouver le plaisir du corps en action. Un accompagnement progressif et bienveillant, sans jugement, sans précipitation.',
    img: IMG.athleteGrayscale,
    points: ['Reprise progressive', 'Mobilité & posture', 'Objectifs réalistes'],
  },
  {
    n: '06',
    title: 'Coaching nutrition',
    tagline: 'L\'assiette au service du geste',
    text: 'La performance se construit aussi à table. Un accompagnement nutritionnel intégré, concret et durable — pensé pour votre quotidien, pas contre lui.',
    img: IMG.coachPortrait,
    points: ['Bilan alimentaire', 'Stratégie personnalisée', 'Suivi mensuel'],
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
          <h3 className="mt-5 font-display text-3xl font-light text-text-primary md:text-4xl">
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
  const { openModal } = useModal()

  return (
    <PageWrapper>
      <PageHero
        label="Nos services"
        title={
          <>
            Le coaching,
            <br />
            <span className="italic text-accent">décliné.</span>
          </>
        }
        intro="Six disciplines, une même obsession : vous amener exactement là où vous voulez aller. Choisissez votre voie."
        image={IMG.trackNight}
      />

      {/* INTRO */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Une offre complète</SectionLabel>
            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-3xl font-light leading-[1.22] text-text-primary sm:text-4xl">
                Quel que soit votre point de départ, Le Cercle a une réponse{' '}
                <span className="italic text-accent">taillée pour vous.</span>
              </p>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-base font-light leading-relaxed text-text-secondary">
                Tous nos services partagent le même socle : un coach expert,
                un protocole sur-mesure et un suivi sans concession. Le reste
                n'est qu'une question d'objectif.
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
                t: 'Demandez un entretien',
                d: 'Un échange pour cerner vos objectifs et vous orienter vers le bon service.',
              },
              {
                n: '02',
                t: 'Rencontrez votre coach',
                d: 'Bilan initial, tests, et construction de votre protocole personnalisé.',
              },
              {
                n: '03',
                t: 'Entrez dans Le Cercle',
                d: 'Votre accompagnement commence. Et il ne ressemblera à aucun autre.',
              },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="h-full bg-bg-secondary p-10 text-center">
                  <span className="font-display text-5xl font-light text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-light text-text-primary">
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
          src={IMG.gymInterior}
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
            <h2 className="mx-auto mt-10 max-w-2xl font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
              Une question sur le service idéal ?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-lg text-base font-light leading-relaxed text-text-secondary">
              Nos coachs vous orientent avec plaisir. Le premier échange ne
              vous engage à rien — si ce n'est à viser juste.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button variant="solid" onClick={() => openModal()}>
                Demander une adhésion
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
