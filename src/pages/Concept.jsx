import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import StatCounter from '../components/StatCounter'
import Marquee from '../components/Marquee'
import { SectionHeading, SectionLabel } from '../components/Section'
import { CircleMark } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { IMG } from '../data/site'

const PILLARS = [
  {
    n: '01',
    title: 'Confidentialité',
    text: 'Un espace privatif, à l\'abri des regards. Le Cercle se vit en petit comité — jamais en foule.',
  },
  {
    n: '02',
    title: 'Sur-mesure absolu',
    text: 'Aucun programme générique. Chaque protocole est dessiné autour de votre corps, votre histoire, vos objectifs.',
  },
  {
    n: '03',
    title: 'Exigence partagée',
    text: 'Coachs et membres avancent ensemble, animés par la même intransigeance sur la qualité du geste.',
  },
  {
    n: '04',
    title: 'Constance',
    text: 'La performance n\'est pas un sprint. Le Cercle bâtit des trajectoires sur la durée, sans raccourci.',
  },
]

const APPROACH = [
  {
    step: 'I',
    title: 'L\'entretien',
    text: 'Tout commence par une rencontre. On écoute, on évalue, on comprend votre point de départ et votre destination.',
  },
  {
    step: 'II',
    title: 'Le protocole',
    text: 'Vos coachs construisent un plan d\'entraînement individualisé — précis, évolutif, mesurable.',
  },
  {
    step: 'III',
    title: 'L\'accompagnement',
    text: 'Séance après séance, votre coach ajuste, corrige et vous pousse vers le geste juste.',
  },
  {
    step: 'IV',
    title: 'La progression',
    text: 'Les résultats se mesurent, se célèbrent, et nourrissent le prochain palier. Le Cercle ne s\'arrête jamais.',
  },
]

export default function Concept() {
  const { openModal } = useModal()

  return (
    <PageWrapper>
      <PageHero
        label="Le concept"
        title={
          <>
            Plus qu'un club.
            <br />
            <span className="text-accent">Un cercle.</span>
          </>
        }
        intro="Le Cercle réinvente le coaching sportif à Toulouse : confidentiel, exigeant, profondément humain. Voici ce qui nous distingue."
        image={IMG.gymInterior}
      />

      {/* INTRO STATEMENT */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <SectionLabel>Notre raison d'être</SectionLabel>
            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-3xl font-light leading-[1.22] text-text-primary sm:text-4xl md:text-[2.9rem]">
                Nous avons créé Le Cercle parce que la performance mérite{' '}
                <span className="text-accent">mieux</span> que des
                salles bondées et des programmes interchangeables. Ici, chaque
                membre est un projet à part entière.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="rule-gold mb-8" />
              <p className="text-base font-light leading-relaxed text-text-secondary">
                Au cœur des Carmes, dans un espace pensé comme un atelier
                d'orfèvre, Le Cercle accueille un nombre volontairement
                restreint de membres. C'est le prix de l'attention réelle.
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
            <p className="max-w-lg font-display text-3xl font-light leading-snug text-text-primary md:text-4xl">
              « Le luxe, ce n'est pas l'abondance. C'est la justesse. »
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <SectionHeading
          label="Nos piliers"
          title={
            <>
              Quatre principes,
              <br />
              une seule direction.
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
                <h3 className="mt-10 font-display text-3xl font-light text-text-primary">
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
            intro="Un parcours en quatre temps, rigoureux et entièrement personnalisé — de la première rencontre au dépassement."
          />

          <div className="mt-20 grid gap-px border border-border-gold bg-border-gold md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.12}>
                <div className="h-full bg-bg-secondary p-10">
                  <span className="font-display text-5xl font-light text-accent">
                    {a.step}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-light text-text-primary">
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
          <StatCounter value={2018} label="Année de fondation" />
          <StatCounter value={40} suffix="+" label="Membres actifs" />
          <StatCounter value={6} label="Athlètes par groupe" />
          <StatCounter value={1} prefix="N°" label="Adresse aux Carmes" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border-gold bg-bg-secondary py-8">
        <Marquee
          items={['Rigueur', 'Écoute', 'Précision', 'Engagement', 'Justesse']}
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
          <h2 className="mx-auto mt-10 max-w-2xl font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
            Le Cercle vous ressemble ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-lg text-base font-light leading-relaxed text-text-secondary">
            Découvrez nos services et nos formules, ou demandez directement
            un entretien d'adhésion.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button variant="solid" onClick={() => openModal()}>
              Demander une adhésion
            </Button>
            <Button variant="outline" to="/services">
              Découvrir les services
            </Button>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}
