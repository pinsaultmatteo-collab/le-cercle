import { motion } from 'framer-motion'

import PageWrapper from '../components/PageWrapper'
import PageHero from '../components/PageHero'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'
import { SectionHeading, SectionLabel } from '../components/Section'
import { CircleMark, ArrowRight } from '../components/Icons'
import { useModal } from '../context/ModalContext'
import { IMG } from '../data/site'

const OFFERS = [
  {
    name: 'Essentiel',
    price: '180',
    cadence: '/ mois',
    summary: 'Pour débuter l\'aventure avec un cadre solide.',
    features: [
      '4 séances small group / mois',
      'Bilan physiologique initial',
      'Accès à l\'espace privatif',
      'Suivi digital de progression',
    ],
    featured: false,
  },
  {
    name: 'Signature',
    price: '340',
    cadence: '/ mois',
    summary: 'Notre formule la plus choisie. L\'équilibre parfait.',
    features: [
      '8 séances / mois (mix individuel & groupe)',
      'Coach attitré',
      'Programmation 100 % sur-mesure',
      'Suivi nutritionnel intégré',
      'Accès illimité à l\'espace privatif',
    ],
    featured: true,
  },
  {
    name: 'Privé',
    price: 'Sur devis',
    cadence: '',
    summary: 'L\'accompagnement sans limite, pour les plus exigeants.',
    features: [
      'Séances individuelles illimitées',
      'Coach dédié & préparateur physique',
      'Bilan complet trimestriel',
      'Nutrition & récupération sur-mesure',
      'Disponibilités prioritaires',
      'Accompagnement compétition',
    ],
    featured: false,
  },
]

const FAQ = [
  {
    q: 'Comment rejoindre Le Cercle ?',
    a: 'L\'adhésion se fait sur entretien. Vous remplissez une demande, nous vous recontactons sous 48 heures pour convenir d\'une première rencontre sans engagement.',
  },
  {
    q: 'Y a-t-il un engagement de durée ?',
    a: 'Nos formules mensuelles sont sans engagement long. Nous croyons que la fidélité se gagne séance après séance, pas par contrat.',
  },
  {
    q: 'Puis-je changer de formule ?',
    a: 'Absolument. Votre accompagnement évolue avec vous : il est possible de monter ou d\'ajuster votre formule à tout moment, en accord avec votre coach.',
  },
  {
    q: 'Les séances sont-elles personnalisées ?',
    a: 'Toujours. Même en small group, chaque membre suit une intention propre. Le sur-mesure est le socle non négociable du Cercle.',
  },
]

export default function Offres() {
  const { openModal } = useModal()

  return (
    <PageWrapper>
      <PageHero
        label="Nos offres"
        title={
          <>
            L'excellence,
            <br />
            <span className="text-accent">à votre mesure.</span>
          </>
        }
        intro="Trois formules pensées comme des paliers d'engagement. Toutes partagent la même exigence — seule l'intensité de l'accompagnement varie."
        image={IMG.athleteGrayscale}
      />

      {/* PRICING */}
      <section className="mx-auto max-w-container px-6 py-28 md:px-12 md:py-36">
        <SectionHeading
          label="Les formules"
          title="Choisissez votre niveau d'accompagnement"
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
                  <span className="font-display text-6xl font-light text-text-primary">
                    {offer.price === 'Sur devis' ? '' : '€'}
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
                    onClick={() => openModal(offer.name)}
                    className="w-full"
                  >
                    Choisir {offer.name}
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm font-light leading-relaxed text-text-secondary">
            Toutes les formules incluent l'accès à l'espace privatif des
            Carmes et un bilan de progression régulier. Tarifs entreprises et
            duo sur demande.
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
            <p className="max-w-2xl font-display text-3xl font-light leading-snug text-text-primary md:text-5xl">
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
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] text-text-primary md:text-5xl">
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
                    <h3 className="flex items-start gap-5 font-display text-2xl font-light text-text-primary">
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
            <h2 className="mx-auto mt-10 max-w-2xl font-display text-4xl font-light leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
              Prêt à franchir la porte ?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-lg text-base font-light leading-relaxed text-text-secondary">
              Demandez votre entretien d'adhésion. Nous étudions chaque
              candidature avec la même attention.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button variant="solid" onClick={() => openModal()}>
                Demander une adhésion
              </Button>
              <Button variant="ghost" to="/contact">
                Nous contacter
                <ArrowRight size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
