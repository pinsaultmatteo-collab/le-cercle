import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon, CircleMark } from './Icons'

/**
 * MembershipModal — a refined enquiry modal for joining Le Cercle.
 * Controlled via `open` / `onClose`. No backend: shows a success state.
 */
export default function MembershipModal({ open, onClose, preselect = '' }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    formule: preselect,
    message: '',
  })

  // keep formule in sync if a card pre-selects an offer
  useEffect(() => {
    setForm((f) => ({ ...f, formule: preselect }))
  }, [preselect])

  // lock scroll + escape to close
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // reset success state shortly after closing
  useEffect(() => {
    if (!open && submitted) {
      const t = setTimeout(() => {
        setSubmitted(false)
        setForm({
          nom: '',
          email: '',
          telephone: '',
          formule: preselect,
          message: '',
        })
      }, 400)
      return () => clearTimeout(t)
    }
  }, [open, submitted, preselect])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const field =
    'w-full border-b border-border-gold bg-transparent py-3 font-body text-sm font-light text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none transition-colors duration-300'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-bg-primary/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Demande d'adhésion"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-border-gold bg-bg-card"
          >
            {/* close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-5 top-5 text-text-secondary transition-colors hover:text-accent-light"
            >
              <CloseIcon size={22} />
            </button>

            <div className="px-8 py-12 md:px-12">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-4 text-accent">
                    <CircleMark size={28} />
                    <span className="text-label text-[0.62rem]">
                      Adhésion
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-4xl font-normal leading-tight text-text-primary">
                    Rejoindre Le Cercle
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                    Laissez-nous vos coordonnées — nous vous recontactons
                    rapidement pour convenir d'une première rencontre.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-9 space-y-7">
                    <div>
                      <label
                        htmlFor="m-nom"
                        className="text-label text-[0.58rem] text-text-secondary"
                      >
                        Nom complet
                      </label>
                      <input
                        id="m-nom"
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
                      <label
                        htmlFor="m-email"
                        className="text-label text-[0.58rem] text-text-secondary"
                      >
                        Email
                      </label>
                      <input
                        id="m-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vous@email.com"
                        className={field}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="m-tel"
                        className="text-label text-[0.58rem] text-text-secondary"
                      >
                        Téléphone
                      </label>
                      <input
                        id="m-tel"
                        name="telephone"
                        type="tel"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className={field}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="m-formule"
                        className="text-label text-[0.58rem] text-text-secondary"
                      >
                        Service souhaité
                      </label>
                      <select
                        id="m-formule"
                        name="formule"
                        value={form.formule}
                        onChange={handleChange}
                        className={`${field} appearance-none`}
                      >
                        <option value="" className="bg-bg-card">
                          Sélectionnez un service
                        </option>
                        <option value="Coaching individuel" className="bg-bg-card">
                          Coaching individuel
                        </option>
                        <option value="Coaching en binôme" className="bg-bg-card">
                          Coaching en binôme
                        </option>
                        <option value="Cours collectifs en small group" className="bg-bg-card">
                          Cours collectifs en small group
                        </option>
                        <option value="Je ne sais pas" className="bg-bg-card">
                          Je ne sais pas encore
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="m-message"
                        className="text-label text-[0.58rem] text-text-secondary"
                      >
                        Votre objectif
                      </label>
                      <textarea
                        id="m-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Quelques mots sur vos ambitions sportives…"
                        className={`${field} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shimmer group relative w-full border border-accent bg-accent px-8 py-4 text-label text-[0.68rem] text-bg-primary transition-colors duration-500 hover:bg-accent-light"
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center py-10 text-center"
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
                    Demande reçue
                  </h3>
                  <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-text-secondary">
                    Merci{form.nom ? `, ${form.nom.split(' ')[0]}` : ''}. Votre
                    demande a bien été transmise. Un membre de l'équipe Le
                    Cercle vous recontactera très prochainement.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-shimmer mt-9 border border-border-gold px-9 py-4 text-label text-[0.68rem] text-text-primary transition-colors duration-500 hover:border-accent hover:text-accent-light"
                  >
                    Fermer
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
