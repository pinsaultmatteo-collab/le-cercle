import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/PageWrapper'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import StatCounter from '../components/StatCounter'
import { SectionHeading, SectionLabel } from '../components/Section'
import { ArrowDown, ArrowRight, CircleMark } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { IMG } from '../data/site'

const SERVICES_PREVIEW = [
  {
    n: '01',
    title: 'Coaching individuel',
    text: 'Un accompagnement entièrement sur-mesure, pensé autour de votre physiologie et de vos ambitions.',
    img: IMG.coachAthlete,
  },
  {
    n: '02',
    title: 'Préparation physique',
    text: 'La performance comme discipline. Force, endurance, mobilité — orchestrées avec précision.',
    img: IMG.trackNight,
  },
  {
    n: '03',
    title: 'Small group',
    text: 'L\'émulation d\'un collectif restreint, l\'exigence d\'un suivi personnalisé. Six athlètes, jamais plus.',
    img: IMG.gymInterior,
  },
]

export default function Home() {
  const { openModal } = useModal()
  const heroRef = useRef(null)

  // subtle parallax on the hero image
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <PageWrapper>
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative flex h-[100svh] min-h-[640px] items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: imgY }}
        >
          <img
            src={IMG.hero}
            alt="Athlète à l'entraînement"
            className="h-[118%] w-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
        </motion.div>

        {/* gradient veils */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-bg-primary/70 via-bg-primary/20 to-bg-primary"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-primary/80 to-transparent" />

        <div className="relative z-20 mx-auto w-full max-w-container px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Club de sport privé · Toulouse</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl font-display text-[3.4rem] font-light leading-[0.98] tracking-tight text-text-primary sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            L'exigence
            <br />
            <span className="italic text-accent">a son cercle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-base font-light leading-relaxed text-text-secondary md:text-lg"
          >
            Un club de coaching sportif confidentiel au cœur des Carmes.
            L'accompagnement d'exception, réservé à celles et ceux qui ne
            transigent pas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <Button variant="solid" onClick={() => openModal()}>
              Demander une adhésion
            </Button>
            <Button variant="ghost" to="/concept">
              Découvrir le concept
            </Button>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 text-text-secondary"
          >
            <span className="text-label text-[0.55rem]">Défiler</span>
            <ArrowDown size={16} className="text-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="border-y border-border-gold bg-bg-secondary py-8">
        <Marquee
          items={[
            'Performance',
            'Discipline',
            'Sur-mesure',
            'Confidentiel',
            'Excellence',
          ]}
          duration={32}
        />
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionLabel>Le manifeste</SectionLabel>
            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-3xl font-light leading-[1.25] text-text-primary sm:text-4xl md:text-[2.9rem]">
                Le Cercle n'est pas une salle de sport. C'est un{' '}
                <span className="italic text-accent">cercle restreint</span>{' '}
                où chaque membre est accompagné comme un athlète — avec
                rigueur, attention et une obsession partagée du détail.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rule-gold mb-8" />
              <p className="text-base font-light leading-relaxed text-text-secondary">
                Fondé à Toulouse, Le Cercle réunit des coachs d'élite et une
                approche profondément individualisée. Ici, on ne compte pas
                les répétitions — on construit une trajectoire.
              </p>
              <Link
                to="/concept"
                className="group mt-8 inline-flex items-center gap-3 text-label text-[0.65rem] text-accent transition-colors hover:text-accent-light"
              >
                Notre philosophie
                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 py-20 md:px-12 md:py-24">
          <Stagger className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
            <StaggerItem>
              <StatCounter value={6} label="Membres par groupe" />
            </StaggerItem>
            <StaggerItem>
              <StatCounter value={12} suffix="+" label="Coachs certifiés" />
            </StaggerItem>
            <StaggerItem>
              <StatCounter value={2400} label="Séances par an" />
            </StaggerItem>
            <StaggerItem>
              <StatCounter value={98} suffix="%" label="Membres fidèles" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="Nos disciplines"
            title={
              <>
                Un savoir-faire,
                <br />
                plusieurs visages.
              </>
            }
          />
          <Reveal delay={0.2}>
            <Button variant="outline" to="/services">
              Tous les services
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-20 grid gap-6 md:grid-cols-3">
          {SERVICES_PREVIEW.map((s) => (
            <StaggerItem key={s.n}>
              <Link to="/services" className="group block">
                <motion.article
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full border border-border-gold bg-bg-card transition-colors duration-500 group-hover:border-accent"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                      style={{ filter: 'brightness(0.7) grayscale(20%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 text-label text-[0.6rem] text-accent">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-light text-text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-text-secondary">
                      {s.text}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-accent">
                      <span className="text-label text-[0.58rem]">
                        En savoir plus
                      </span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ CONCEPT TEASER ============ */}
      <section className="relative overflow-hidden border-y border-border-gold">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
            <img
              src={IMG.athleteGrayscale}
              alt="Athlète en mouvement"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: 'brightness(0.8) grayscale(30%)' }}
            />
            <div className="absolute inset-0 bg-bg-primary/20" />
          </div>

          <div className="flex flex-col justify-center bg-bg-secondary px-6 py-20 md:px-16 md:py-28 lg:px-20">
            <SectionLabel>Le concept</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
                Un environnement
                <br />
                pensé pour la{' '}
                <span className="italic text-accent">progression.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-text-secondary">
                Espace privatif, matériel d'exception, coachs triés sur le
                volet. Le Cercle a été conçu comme un écrin — un lieu où la
                seule variable est votre engagement.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button variant="outline" to="/concept">
                  Explorer le concept
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COACH FEATURE ============ */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden border border-border-gold">
                  <img
                    src={IMG.tomPortrait}
                    alt="Tom — coach fondateur du Cercle"
                    className="h-full w-full object-cover"
                    style={{ filter: 'brightness(0.9) grayscale(15%)' }}
                  />
                </div>
                <div className="absolute -bottom-px -right-px flex items-center gap-3 border border-border-gold bg-bg-primary px-6 py-4">
                  <CircleMark size={20} className="text-accent" />
                  <span className="text-label text-[0.58rem] text-text-secondary">
                    Coach fondateur
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionLabel>L'équipe</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
                Des coachs qui
                <br />
                ne lâchent rien.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-text-secondary">
                Chaque coach du Cercle est sélectionné pour son expertise,
                son écoute et son obsession du résultat juste. Ils ne vous
                suivent pas — ils s'engagent à vos côtés.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="mt-10 border-l border-accent pl-8">
                <p className="font-display text-2xl font-light italic leading-snug text-text-primary md:text-3xl">
                  « On ne vend pas des séances. On construit des athlètes,
                  une décision à la fois. »
                </p>
                <footer className="mt-5 text-label text-[0.6rem] text-text-secondary">
                  Tom — Coach fondateur
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden">
        <img
          src={IMG.cyclist}
          alt="Cycliste à l'effort"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-bg-primary/60" />
        <div className="relative mx-auto max-w-container px-6 py-32 text-center md:px-12 md:py-44">
          <Reveal>
            <div className="flex justify-center">
              <CircleMark size={44} className="text-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-10 max-w-3xl font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-7xl">
              L'adhésion au Cercle
              <br />
              se mérite. Elle se{' '}
              <span className="italic text-accent">demande.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-text-secondary">
              Les places sont limitées et l'entrée se fait sur entretien.
              Prenez le premier rendez-vous qui pourrait tout changer.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button variant="solid" onClick={() => openModal()}>
                Demander une adhésion
              </Button>
              <Button variant="ghost" to="/offres">
                Voir nos offres
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
