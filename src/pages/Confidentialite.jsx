import LegalPage from '../components/LegalPage'

const SECTIONS = [
  {
    title: 'Responsable du traitement',
    blocks: [
      {
        type: 'p',
        text: "Le responsable du traitement des données personnelles collectées sur le présent site est la société LE CERCLE CSP, SAS au capital de 2 000 €, immatriculée au RCS de Toulouse sous le numéro 101 917 219, dont le siège social est situé 4 rue Joutx-Aigues, 31000 Toulouse.",
      },
    ],
  },
  {
    title: 'Données collectées',
    blocks: [
      {
        type: 'p',
        text: "Dans le cadre de la navigation et de l'utilisation du site, les données personnelles suivantes peuvent être collectées :",
      },
      {
        type: 'list',
        items: [
          "Données d'identification : nom, prénom, civilité.",
          'Coordonnées : adresse email, numéro de téléphone.',
          "Données relatives à la demande : message libre, formule d'adhésion souhaitée, objet de la demande.",
          "Données de navigation : adresse IP, type de navigateur, pages consultées, durée des visites — collectées uniquement à des fins statistiques et anonymisées.",
        ],
      },
    ],
  },
  {
    title: 'Finalités du traitement',
    blocks: [
      {
        type: 'p',
        text: 'Les données sont collectées et traitées aux finalités suivantes :',
      },
      {
        type: 'list',
        items: [
          'Répondre aux demandes de renseignement et aux demandes d\'adhésion adressées via les formulaires du site.',
          "Gérer la relation avec les membres et prospects du club.",
          "Améliorer le fonctionnement du site et la qualité du service.",
          "Respecter les obligations légales et réglementaires qui s'imposent à l'éditeur.",
        ],
      },
    ],
  },
  {
    title: 'Base légale du traitement',
    blocks: [
      {
        type: 'p',
        text: "Les traitements reposent, selon le cas, sur le consentement de l'utilisateur (formulaire de contact), sur l'exécution de mesures précontractuelles à sa demande (demande d'adhésion), ou sur l'intérêt légitime de l'éditeur à assurer le bon fonctionnement et la sécurité du site.",
      },
    ],
  },
  {
    title: 'Durée de conservation',
    blocks: [
      {
        type: 'p',
        text: "Les données collectées via les formulaires sont conservées pour la durée nécessaire à la finalité pour laquelle elles ont été recueillies, et au maximum trois ans à compter du dernier contact avec l'utilisateur, sauf obligation légale de conservation plus longue.",
      },
    ],
  },
  {
    title: 'Destinataires des données',
    blocks: [
      {
        type: 'p',
        text: "Les données personnelles sont exclusivement destinées aux équipes habilitées de la société LE CERCLE CSP. Elles ne font l'objet d'aucune cession ni location à des tiers à des fins commerciales.",
      },
      {
        type: 'p',
        text: "Certaines données peuvent être transmises à des sous-traitants techniques (hébergeur, prestataire de messagerie) agissant strictement sur instruction de l'éditeur et soumis à une obligation contractuelle de confidentialité.",
      },
    ],
  },
  {
    title: 'Vos droits',
    blocks: [
      {
        type: 'p',
        text: "Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :",
      },
      {
        type: 'list',
        items: [
          "Droit d'accès, de rectification, d'effacement de vos données.",
          'Droit à la limitation et à la portabilité de vos données.',
          'Droit d\'opposition au traitement pour motif légitime.',
          'Droit de définir des directives relatives au sort de vos données après votre décès.',
          'Droit de retirer votre consentement à tout moment.',
        ],
      },
      {
        type: 'p',
        text: "Ces droits peuvent être exercés en adressant une demande à la société LE CERCLE CSP par courrier postal à l'adresse du siège social, accompagnée d'un justificatif d'identité.",
      },
      {
        type: 'p',
        text: "En cas de difficulté ou de désaccord sur le traitement de vos données, vous disposez du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — ou via le site www.cnil.fr.",
      },
    ],
  },
  {
    title: 'Cookies',
    blocks: [
      {
        type: 'p',
        text: "Le présent site utilise uniquement des cookies strictement nécessaires à son bon fonctionnement. Aucun cookie de mesure d'audience tiers, de publicité ou de profilage n'est déposé sans le consentement explicite de l'utilisateur.",
      },
    ],
  },
  {
    title: 'Sécurité',
    blocks: [
      {
        type: 'p',
        text: "L'éditeur met en œuvre les mesures techniques et organisationnelles appropriées pour assurer la confidentialité, l'intégrité et la disponibilité des données personnelles collectées, conformément à l'état de l'art.",
      },
    ],
  },
]

export default function Confidentialite() {
  return (
    <LegalPage
      label="Protection des données"
      title="Politique de confidentialité"
      intro="La société LE CERCLE CSP accorde une grande importance à la protection des données personnelles de ses membres et visiteurs. La présente politique précise les modalités de collecte, de traitement et de conservation de ces données, ainsi que les droits dont vous disposez."
      updated="Mai 2026"
      sections={SECTIONS}
    />
  )
}
