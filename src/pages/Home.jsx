import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/PageWrapper'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import StatCounter from '../components/StatCounter'
import { SectionHeading, SectionLabel } from '../components/Section'
import { ArrowDown, ArrowRight, CircleMark, PlusIcon, MapPin } from '../components/Icons'
import { ParallaxImage, ParallaxGlow, ParallaxText } from '../components/Parallax'
import { useModal } from '../context/ModalContext'
import { IMG, ADDRESS } from '../data/site'

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
    text: "L'émulation d'un collectif restreint, l'exigence d'un suivi personnalisé. Six athlètes, jamais plus.",
    img: IMG.gymInterior,
  },
]

const COACHES = [
  {
    initial: 'T',
    name: 'Tom',
    role: 'Coach · Cofondateur',
    text: "Préparateur physique de formation, Tom a fondé Le Cercle autour d'une conviction : la performance se construit dans la durée, jamais dans la précipitation.",
  },
  {
    initial: 'D',
    name: 'Dylan',
    role: 'Coach · Cofondateur',
    text: "Spécialiste du mouvement et de la force, Dylan veille à ce que chaque séance serve une trajectoire — celle de l'athlète qu'il accompagne, pas une autre.",
  },
]

const AVIS = [
  {
    name: 'Camille R.',
    role: 'Membre depuis 2 ans',
    text: "Je n'avais jamais été suivie avec une telle rigueur. Chaque séance a un sens, chaque détail est pensé. Le Cercle a changé mon rapport à l'effort.",
  },
  {
    name: 'Julien M.',
    role: 'Membre Signature',
    text: "Un cadre confidentiel, des coachs qui ne lâchent rien et une exigence constante. On ne vient pas ici par hasard — et ça se ressent.",
  },
  {
    name: 'Sarah L.',
    role: 'Membre depuis 1 an',
    text: "Le small group est une vraie révélation : l'émulation d'un collectif sans jamais perdre le sur-mesure. Je progresse plus vite que jamais.",
  },
]

const FAQ = [
  {
    q: 'Comment rejoindre Le Cercle ?',
    a: "L'adhésion se fait sur entretien. Vous nous adressez une demande, nous échangeons sur vos objectifs, puis nous définissons ensemble la formule la plus adaptée. Les places sont volontairement limitées.",
  },
  {
    q: 'Faut-il un niveau sportif particulier ?',
    a: "Non. Le Cercle accompagne aussi bien des débutants exigeants que des athlètes confirmés. Ce qui compte, c'est l'engagement — le programme, lui, est entièrement individualisé.",
  },
  {
    q: 'Où se situe le club ?',
    a: "Au 4 rue Joutx-Aigues, en plein cœur du quartier des Carmes à Toulouse. Un espace privatif, pensé comme un écrin.",
  },
  {
    q: 'Les séances sont-elles individuelles ou en groupe ?',
    a: "Les deux. Vous pouvez opter pour un coaching strictement individuel ou pour le small group, limité à six athlètes afin de préserver la qualité du suivi.",
  },
  {
    q: 'Quelles formules proposez-vous ?',
    a: "Trois formules : Essentiel, Signature et Privé. Chacune se décline selon votre rythme et vos ambitions. Le détail est disponible sur la page Nos Offres.",
  },
]

function Stars() {
  return (
    <div className="flex gap-1.5" aria-label="5 sur 5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-accent"
        >
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  const { openModal } = useModal()
  const heroRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(0)

  // subtle parallax on the hero image + text
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <PageWrapper>
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative flex h-[100svh] min-h-[680px] items-center justify-center overflow-hidden"
      >
        {/* background photo */}
        <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
          <img
            src={IMG.hero}
            alt="Athlète à l'entraînement"
            className="h-[118%] w-full object-cover"
            style={{ filter: 'brightness(0.32) grayscale(40%)' }}
          />
        </motion.div>

        {/* vignettes */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-bg-primary/85 via-bg-primary/55 to-bg-primary"
          style={{ opacity: overlayOpacity }}
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.6)_70%,rgba(8,8,8,0.92)_100%)]" />

        {/* inner frame — corner brackets */}
        <div className="pointer-events-none absolute inset-x-5 inset-y-20 z-20 md:inset-x-12 md:inset-y-24">
          {/* top-left */}
          <span className="absolute left-0 top-0 h-5 w-px bg-accent/50" />
          <span className="absolute left-0 top-0 h-px w-5 bg-accent/50" />
          {/* top-right */}
          <span className="absolute right-0 top-0 h-5 w-px bg-accent/50" />
          <span className="absolute right-0 top-0 h-px w-5 bg-accent/50" />
          {/* bottom-left */}
          <span className="absolute bottom-0 left-0 h-5 w-px bg-accent/50" />
          <span className="absolute bottom-0 left-0 h-px w-5 bg-accent/50" />
          {/* bottom-right */}
          <span className="absolute bottom-0 right-0 h-5 w-px bg-accent/50" />
          <span className="absolute bottom-0 right-0 h-px w-5 bg-accent/50" />
        </div>

        {/* side rails — desktop only, rotated text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-7 z-20 hidden items-center md:flex"
        >
          <div className="flex items-center gap-4 [writing-mode:vertical-rl] rotate-180">
            <span className="h-12 w-px bg-border-gold" />
            <span className="text-label text-[0.55rem] text-text-secondary">
              Admission sur entretien
            </span>
            <span className="h-12 w-px bg-border-gold" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-7 z-20 hidden items-center md:flex"
        >
          <div className="flex items-center gap-4 [writing-mode:vertical-rl]">
            <span className="h-12 w-px bg-border-gold" />
            <span className="text-label text-[0.55rem] text-text-secondary">
              Club de sport privé · Toulouse
            </span>
            <span className="h-12 w-px bg-border-gold" />
          </div>
        </motion.div>

        {/* main centered composition */}
        <motion.div
          style={{ y: heroTextY }}
          className="relative z-30 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center md:px-12"
        >
          {/* giant faint outlined circle echoing the logo, behind the title */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 sm:h-[40rem] sm:w-[40rem]"
          >
            <div className="absolute inset-0 rounded-full border border-accent/15" />
            <div className="absolute inset-6 rounded-full border border-accent/8" />
          </motion.div>

          {/* metadata trio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-label text-[0.55rem] text-text-secondary"
          >
            <span className="text-accent">Est · MMXXVI</span>
            <span className="h-px w-6 bg-border-gold" />
            <span>Carmes · Toulouse</span>
            <span className="h-px w-6 bg-border-gold" />
            <span>43.60°N · 01.44°E</span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 font-display text-[3.4rem] font-light leading-[0.95] tracking-[-0.015em] text-text-primary sm:text-7xl md:text-[6.4rem]"
          >
            L'exigence
            <span className="mx-2 inline-block text-accent">—</span>
            <br />
            a son <span className="text-accent">cercle.</span>
          </motion.h1>

          {/* gold rule + circle mark divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex w-full max-w-sm origin-center items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-accent/40" />
            <CircleMark size={20} className="text-accent" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent/40" />
          </motion.div>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-10 max-w-md text-[0.98rem] font-light leading-relaxed text-text-secondary md:text-lg"
          >
            Un club de coaching sportif confidentiel au cœur des Carmes.
            L'accompagnement d'exception — réservé à celles et ceux qui ne
            transigent pas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
          >
            <Button variant="solid" onClick={() => openModal()}>
              Demander une adhésion
            </Button>
            <Button variant="ghost" to="/concept">
              Découvrir le concept
            </Button>
          </motion.div>

          {/* admission micro-note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 text-label text-[0.52rem] text-text-secondary/70"
          >
            Places limitées · Entrée sur entretien
          </motion.p>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 text-text-secondary"
          >
            <span className="text-label text-[0.5rem]">Défiler</span>
            <ArrowDown size={14} className="text-accent" />
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
      <section className="relative overflow-hidden">
        <ParallaxText>Le Cercle</ParallaxText>
        <ParallaxGlow
          className="z-0"
          from={{ x: -120, y: -80 }}
          to={{ x: 120, y: 80 }}
        />
        <div className="relative z-10 mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionLabel>Le manifeste</SectionLabel>
              <Reveal delay={0.1}>
                <p className="mt-9 font-display text-3xl font-normal leading-[1.25] text-text-primary sm:text-4xl md:text-[2.9rem]">
                  Le Cercle n'est pas une salle de sport. C'est un{' '}
                  <span className="text-accent">cercle restreint</span> où
                  chaque membre est accompagné comme un athlète — avec rigueur,
                  attention et une obsession partagée du détail.
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
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative overflow-hidden border-y border-border-gold bg-bg-secondary">
        <ParallaxGlow
          className="z-0"
          size={420}
          from={{ x: 160, y: -30 }}
          to={{ x: -160, y: 30 }}
          opacity={0.6}
        />
        <div className="relative z-10 mx-auto max-w-container px-6 py-20 md:px-12 md:py-24">
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
                    <h3 className="font-display text-2xl font-normal text-text-primary">
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
            <ParallaxImage
              src={IMG.athleteGrayscale}
              alt="Athlète en mouvement"
              speed={0.2}
              filter="brightness(0.8) grayscale(30%)"
            />
            <div className="absolute inset-0 bg-bg-primary/20" />
          </div>

          <div className="flex flex-col justify-center bg-bg-secondary px-6 py-20 md:px-16 md:py-28 lg:px-20">
            <SectionLabel>Le concept</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-normal leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
                Un environnement
                <br />
                pensé pour la <span className="text-accent">progression.</span>
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

      {/* ============ COACHS — TOM & DYLAN ============ */}
      <section className="relative overflow-hidden">
        <ParallaxGlow
          className="z-0"
          from={{ x: -100, y: 60 }}
          to={{ x: 100, y: -60 }}
        />
        <div className="relative z-10 mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              label="Les cofondateurs"
              align="center"
              title={
                <>
                  Deux coachs,
                  <br />
                  une même exigence.
                </>
              }
              intro="Le Cercle, c'est d'abord un binôme. Tom et Dylan ont bâti le club autour d'une conviction commune : on ne suit pas un membre, on s'engage à ses côtés."
              className="mx-auto"
            />
          </div>

          <Stagger className="mt-20 grid gap-6 md:grid-cols-2">
            {COACHES.map((coach) => (
              <StaggerItem key={coach.initial}>
                <article className="group flex h-full flex-col items-center border border-border-gold bg-bg-card px-8 py-14 text-center transition-colors duration-500 hover:border-accent md:px-12">
                  {/* Monogram portrait */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-32 w-32 items-center justify-center rounded-full border border-accent/40 bg-bg-primary md:h-36 md:w-36"
                    >
                      <span className="font-display text-5xl font-light tracking-tight text-accent md:text-6xl">
                        {coach.initial}
                      </span>
                    </motion.div>
                    <span className="absolute -inset-2 -z-10 rounded-full border border-border-gold" />
                  </div>

                  <h3 className="mt-8 font-display text-3xl font-normal text-text-primary">
                    {coach.name}
                  </h3>
                  <p className="mt-2 text-label text-[0.58rem] text-accent">
                    {coach.role}
                  </p>
                  <div className="rule-gold my-7 max-w-[140px]" />
                  <p className="max-w-sm text-sm font-light leading-relaxed text-text-secondary">
                    {coach.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <blockquote className="mx-auto mt-16 max-w-2xl border-l border-accent pl-8 md:pl-10">
              <p className="font-display text-2xl font-normal leading-snug text-text-primary md:text-3xl">
                « On ne vend pas des séances. On construit des athlètes, une
                décision à la fois. »
              </p>
              <footer className="mt-5 text-label text-[0.6rem] text-text-secondary">
                Tom &amp; Dylan — Cofondateurs du Cercle
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ AVIS ============ */}
      <section className="relative overflow-hidden border-y border-border-gold bg-bg-secondary">
        <ParallaxText className="opacity-60">Avis</ParallaxText>
        <div className="relative z-10 mx-auto max-w-container px-6 py-28 md:px-12 md:py-36">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              label="Ils en parlent"
              align="center"
              title={
                <>
                  La parole
                  <br />
                  à nos membres.
                </>
              }
              className="mx-auto"
            />
          </div>

          <Stagger className="mt-20 grid gap-6 md:grid-cols-3">
            {AVIS.map((avis) => (
              <StaggerItem key={avis.name}>
                <article className="flex h-full flex-col border border-border-gold bg-bg-card p-8 transition-colors duration-500 hover:border-accent md:p-10">
                  <Stars />
                  <p className="mt-6 flex-1 text-[0.95rem] font-light leading-relaxed text-text-primary">
                    « {avis.text} »
                  </p>
                  <div className="rule-gold my-7" />
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-primary font-display text-lg font-normal text-accent">
                      {avis.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-light text-text-primary">
                        {avis.name}
                      </p>
                      <p className="text-label text-[0.54rem] text-text-secondary">
                        {avis.role}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative overflow-hidden">
        <ParallaxGlow
          className="z-0"
          size={460}
          from={{ x: 140, y: -60 }}
          to={{ x: -140, y: 60 }}
        />
        <div className="relative z-10 mx-auto max-w-container px-6 py-28 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                label="Questions fréquentes"
                title={
                  <>
                    Tout savoir
                    <br />
                    avant d'entrer.
                  </>
                }
              />
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-xs text-sm font-light leading-relaxed text-text-secondary">
                  Une question qui n'est pas ici ? Écrivez-nous, nous vous
                  répondons sous 48 heures.
                </p>
                <div className="mt-8">
                  <Button variant="outline" to="/contact">
                    Nous contacter
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-border-gold">
                {FAQ.map((item, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div key={item.q} className="border-b border-border-gold">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-accent-light"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className="text-label text-[0.6rem] text-accent">
                            0{i + 1}
                          </span>
                          <span className="font-display text-xl font-normal text-text-primary md:text-2xl">
                            {item.q}
                          </span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="shrink-0 text-accent"
                        >
                          <PlusIcon size={18} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.45,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-xl pb-8 pl-[2.6rem] text-sm font-light leading-relaxed text-text-secondary">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAP — NOUS TROUVER ============ */}
      <section className="relative border-t border-border-gold bg-bg-secondary">
        <div className="mx-auto max-w-container px-6 pt-24 md:px-12 md:pt-32">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <SectionHeading
              label="Nous trouver"
              title={
                <>
                  Au cœur
                  <br />
                  des Carmes.
                </>
              }
            />
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-5 md:items-end">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <p className="font-display text-lg font-normal text-text-primary">
                      {ADDRESS.street}
                    </p>
                    <p className="mt-1 text-sm font-light text-text-secondary">
                      {ADDRESS.district} · {ADDRESS.city}
                    </p>
                  </div>
                </div>
                <a
                  href={ADDRESS.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-label text-[0.62rem] text-accent transition-colors hover:text-accent-light"
                >
                  Ouvrir dans le plan
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-container px-6 pb-24 md:px-12 md:pb-32">
          <Reveal>
            <div className="relative h-[44svh] min-h-[340px] overflow-hidden border border-border-gold">
              <iframe
                title="Le Cercle — 4 rue Joutx-Aigues, Toulouse"
                src={ADDRESS.mapEmbed}
                className="absolute inset-0 h-full w-full"
                style={{
                  border: 0,
                  filter: 'grayscale(100%) invert(92%) contrast(0.9)',
                }}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-bg-primary/10" />
              <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 border border-border-gold bg-bg-primary/90 px-6 py-4 backdrop-blur-sm">
                <CircleMark size={18} className="text-accent" />
                <span className="text-label text-[0.56rem] text-text-primary">
                  {ADDRESS.full}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden">
        <ParallaxImage
          src={IMG.cyclist}
          alt="Cycliste à l'effort"
          speed={0.22}
          filter="brightness(0.35)"
        />
        <div className="absolute inset-0 bg-bg-primary/60" />
        <div className="relative z-10 mx-auto max-w-container px-6 py-32 text-center md:px-12 md:py-44">
          <Reveal>
            <div className="flex justify-center">
              <CircleMark size={44} className="text-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-10 max-w-3xl font-display text-4xl font-normal leading-[1.1] text-text-primary sm:text-5xl md:text-7xl">
              L'adhésion au Cercle
              <br />
              se mérite. Elle se <span className="text-accent">demande.</span>
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
