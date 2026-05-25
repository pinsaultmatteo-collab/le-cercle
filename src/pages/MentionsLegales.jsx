import LegalPage from '../components/LegalPage'

const SECTIONS = [
  {
    title: "Identification de l'éditeur",
    blocks: [
      {
        type: 'p',
        text: "Le présent site est édité par la société LE CERCLE CSP, exploitant Le Cercle — Club de Sport Privé.",
      },
      {
        type: 'kv',
        pairs: [
          ['Dénomination sociale', 'LE CERCLE CSP'],
          ['Forme juridique', 'Société par actions simplifiée (SAS)'],
          ['Capital social', '2 000 €'],
          ['Siège social', '4 rue Joutx-Aigues, 31000 Toulouse'],
          ['RCS', 'Toulouse'],
          ['SIREN', '101 917 219'],
          ['SIRET', '101 917 219 00012'],
          ['N° TVA intracommunautaire', 'FR06 101 917 219'],
          ['Code APE / NAF', '9313Z — Activités des centres de culture physique'],
          ['Président', 'Monsieur Tom Gioanni'],
          ['Directeur général', 'Monsieur Dylan Carvalho'],
          ['Directeur de la publication', 'Monsieur Tom Gioanni'],
        ],
      },
    ],
  },
  {
    title: 'Contact',
    blocks: [
      {
        type: 'p',
        text: "Toute demande relative au présent site peut être adressée à l'éditeur par courrier postal à l'adresse du siège social, ou via le formulaire de contact disponible sur le site.",
      },
    ],
  },
  {
    title: 'Hébergement',
    blocks: [
      {
        type: 'p',
        text: "Le présent site est hébergé par Vercel Inc., société de droit américain dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      },
      {
        type: 'p',
        text: 'Site web de l\'hébergeur : https://vercel.com',
      },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    blocks: [
      {
        type: 'p',
        text: "L'ensemble des éléments composant le présent site — textes, graphismes, photographies, logo, charte graphique, vidéos, structure générale — sont la propriété exclusive de la société LE CERCLE CSP ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.",
      },
      {
        type: 'p',
        text: "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite et préalable de la société LE CERCLE CSP.",
      },
      {
        type: 'p',
        text: "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient est constitutive de contrefaçon et passible des sanctions prévues aux articles L.335-2 et suivants du Code de la propriété intellectuelle.",
      },
    ],
  },
  {
    title: 'Données personnelles',
    blocks: [
      {
        type: 'p',
        text: "Les modalités de collecte et de traitement des données personnelles sont détaillées dans la Politique de confidentialité du site.",
      },
    ],
  },
  {
    title: 'Loi applicable',
    blocks: [
      {
        type: 'p',
        text: "Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur application relève de la compétence exclusive des tribunaux de Toulouse.",
      },
    ],
  },
]

export default function MentionsLegales() {
  return (
    <LegalPage
      label="Informations légales"
      title="Mentions légales"
      intro="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, les informations légales relatives à l'édition et à l'hébergement du présent site sont précisées ci-dessous."
      updated="Mai 2026"
      sections={SECTIONS}
    />
  )
}
