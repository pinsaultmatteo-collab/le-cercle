import { useState } from 'react'
import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import MapEmbed from '../components/MapEmbed'
import { SectionLabel } from '../components/Section'
import {
  MapPin,
  MailIcon,
  PhoneIcon,
  InstagramIcon,
  CircleMark,
} from '../components/Icons'
import { ADDRESS, INSTAGRAM_URL, IMG } from '../data/site'

const SUBJECTS = [
  'Demande d\'adhésion',
  'Renseignements services',
  'Renseignements offres',
  'Partenariat',
  'Autre',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const field =
    'w-full border-b border-border-gold bg-transparent py-3.5 font-body text-sm font-light text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none transition-colors duration-300'
  const labelCls = 'text-label text-[0.58rem] text-text-secondary'

  return (
    <PageWrapper>
      <PageHero
        label="Contact"
        title={
          <>
            Entrons
            <br />
            <span className="text-accent">en contact.</span>
          </>
        }
        intro="Une question, une demande d'adhésion, une envie d'en savoir plus ? Écrivez-nous — nous répondons à chaque message avec attention."
        image={IMG.coachPortrait}
      />

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* INFO COLUMN */}
          <div className="lg:col-span-5">
            <SectionLabel>Coordonnées</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-normal leading-[1.1] text-text-primary md:text-5xl">
                Le Cercle,
                <br />
                au cœur des Carmes.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-text-secondary">
                Notre espace privatif se niche dans l'un des quartiers les
                plus raffinés de Toulouse. Les visites se font uniquement sur
                rendez-vous.
              </p>
            </Reveal>

            <div className="mt-12 space-y-px border border-border-gold bg-border-gold">
              <div className="flex items-start gap-5 bg-bg-primary p-7">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-label text-[0.56rem] text-text-secondary">
                    Adresse
                  </p>
                  <p className="mt-2 font-light text-text-primary">
                    {ADDRESS.street}
                  </p>
                  <p className="font-light text-text-primary">
                    {ADDRESS.district} · {ADDRESS.city}
                  </p>
                </div>
              </div>

              <a
                href="mailto:contact@lecercle-sports.fr"
                className="group flex items-start gap-5 bg-bg-primary p-7 transition-colors hover:bg-bg-card"
              >
                <MailIcon size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-label text-[0.56rem] text-text-secondary">
                    Email
                  </p>
                  <p className="mt-2 font-light text-text-primary transition-colors group-hover:text-accent-light">
                    contact@lecercle-sports.fr
                  </p>
                </div>
              </a>

              <a
                href="tel:+33500000000"
                className="group flex items-start gap-5 bg-bg-primary p-7 transition-colors hover:bg-bg-card"
              >
                <PhoneIcon size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-label text-[0.56rem] text-text-secondary">
                    Téléphone
                  </p>
                  <p className="mt-2 font-light text-text-primary transition-colors group-hover:text-accent-light">
                    05 00 00 00 00
                  </p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 bg-bg-primary p-7 transition-colors hover:bg-bg-card"
              >
                <InstagramIcon
                  size={18}
                  className="mt-1 shrink-0 text-accent"
                />
                <div>
                  <p className="text-label text-[0.56rem] text-text-secondary">
                    Instagram
                  </p>
                  <p className="mt-2 font-light text-text-primary transition-colors group-hover:text-accent-light">
                    @lecercle_clubdesport
                  </p>
                </div>
              </a>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4 text-text-secondary">
                <span className="h-px flex-1 bg-border-gold" />
                <CircleMark size={20} className="text-accent" />
                <span className="h-px flex-1 bg-border-gold" />
              </div>
            </Reveal>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-7">
            <div className="border border-border-gold bg-bg-card p-8 md:p-12">
              {!submitted ? (
                <>
                  <SectionLabel>Écrivez-nous</SectionLabel>
                  <h3 className="mt-7 font-display text-3xl font-normal text-text-primary md:text-4xl">
                    Votre message
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                    Remplissez ce formulaire — un membre de l'équipe vous
                    répond sous 48 heures ouvrées.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-nom" className={labelCls}>
                          Nom complet *
                        </label>
                        <input
                          id="c-nom"
                          name="nom"
                          type="text"
                          required
                          value={form.nom}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className={field}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelCls}>
                          Email *
                        </label>
                        <input
                          id="c-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="vous@email.com"
                          className={field}
                        />
                      </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-tel" className={labelCls}>
                          Téléphone
                        </label>
                        <input
                          id="c-tel"
                          name="telephone"
                          type="tel"
                          value={form.telephone}
                          onChange={handleChange}
                          placeholder="06 00 00 00 00"
                          className={field}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-sujet" className={labelCls}>
                          Sujet *
                        </label>
                        <select
                          id="c-sujet"
                          name="sujet"
                          required
                          value={form.sujet}
                          onChange={handleChange}
                          className={`${field} appearance-none`}
                        >
                          <option value="" className="bg-bg-card">
                            Sélectionnez un sujet
                          </option>
                          {SUBJECTS.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="bg-bg-card"
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-message" className={labelCls}>
                        Votre message *
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Dites-nous tout…"
                        className={`${field} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shimmer group relative w-full border border-accent bg-accent px-8 py-4 text-label text-[0.68rem] text-bg-primary transition-colors duration-500 hover:bg-accent-light sm:w-auto sm:px-12"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-accent"
                  >
                    <CircleMark size={56} />
                  </motion.div>
                  <h3 className="mt-8 font-display text-4xl font-normal text-text-primary">
                    Message envoyé
                  </h3>
                  <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-text-secondary">
                    Merci{form.nom ? `, ${form.nom.split(' ')[0]}` : ''}. Votre
                    message a bien été transmis à l'équipe du Cercle. Nous
                    revenons vers vous très vite.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        nom: '',
                        email: '',
                        telephone: '',
                        sujet: '',
                        message: '',
                      })
                    }}
                    className="btn-shimmer mt-9 border border-border-gold px-9 py-4 text-label text-[0.66rem] text-text-primary transition-colors duration-500 hover:border-accent hover:text-accent-light"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP STRIP */}
      <section className="border-t border-border-gold">
        <div className="relative h-[42svh] min-h-[320px] overflow-hidden bg-bg-secondary">
          <MapEmbed className="absolute inset-0 h-full w-full" zoom={17} />
          <div className="pointer-events-none absolute bottom-6 left-6 z-[400] flex items-center gap-3 border border-border-gold bg-bg-primary/90 px-6 py-4 backdrop-blur-sm md:left-12">
            <MapPin size={16} className="text-accent" />
            <span className="text-label text-[0.58rem] text-text-primary">
              {ADDRESS.full}
            </span>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
