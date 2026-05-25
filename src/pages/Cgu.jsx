import LegalPage from '../components/LegalPage'

const SECTIONS = [
  {
    title: 'Objet',
    blocks: [
      {
        type: 'p',
        text: "Les présentes conditions générales d'utilisation (« CGU ») ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs peuvent accéder au site internet édité par la société LE CERCLE CSP et utiliser les services qu'il propose.",
      },
      {
        type: 'p',
        text: "Toute navigation sur le site implique l'acceptation pleine et entière des présentes CGU. L'éditeur se réserve le droit de modifier les présentes à tout moment ; les conditions applicables sont celles en vigueur à la date de la visite.",
      },
    ],
  },
  {
    title: 'Accès au site',
    blocks: [
      {
        type: 'p',
        text: "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Les coûts liés à l'accès au site — matériel, logiciels, connexion — sont à la charge exclusive de l'utilisateur.",
      },
      {
        type: 'p',
        text: "L'éditeur s'efforce d'assurer la disponibilité du site 24 heures sur 24 et 7 jours sur 7 ; il se réserve toutefois la faculté d'en interrompre l'accès, notamment pour des opérations de maintenance, sans que cette interruption puisse engager sa responsabilité.",
      },
    ],
  },
  {
    title: 'Services proposés',
    blocks: [
      {
        type: 'p',
        text: "Le site présente l'activité de la société LE CERCLE CSP, exploitant Le Cercle — Club de Sport Privé, ainsi que les formules d'accompagnement sportif proposées. Il permet également aux utilisateurs d'adresser des demandes d'information ou d'adhésion par l'intermédiaire de formulaires dédiés.",
      },
      {
        type: 'p',
        text: "Les informations communiquées sur le site sont fournies à titre indicatif et ne constituent pas une offre contractuelle. L'adhésion au club se fait sur entretien préalable et fait l'objet d'un contrat distinct conclu entre la société et le membre.",
      },
    ],
  },
  {
    title: "Obligations de l'utilisateur",
    blocks: [
      {
        type: 'p',
        text: "L'utilisateur s'engage à utiliser le site dans le respect des présentes CGU et de la législation en vigueur. Il s'engage notamment à :",
      },
      {
        type: 'list',
        items: [
          'Fournir des informations exactes, complètes et actualisées lors de la soumission des formulaires.',
          "Ne pas utiliser le site à des fins illicites, frauduleuses ou portant atteinte aux droits de tiers.",
          "Ne pas tenter de porter atteinte à l'intégrité, à la sécurité ou au fonctionnement du site.",
          "Respecter les droits de propriété intellectuelle attachés aux contenus du site.",
        ],
      },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    blocks: [
      {
        type: 'p',
        text: "L'ensemble des éléments composant le site — textes, images, vidéos, logos, marques, charte graphique, structure — est protégé par les dispositions du Code de la propriété intellectuelle et appartient à la société LE CERCLE CSP ou à ses partenaires.",
      },
      {
        type: 'p',
        text: "Toute reproduction, représentation ou diffusion, totale ou partielle, de tout ou partie du site, sans l'autorisation préalable et écrite de l'éditeur, est strictement interdite et constituerait une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.",
      },
    ],
  },
  {
    title: 'Liens hypertextes',
    blocks: [
      {
        type: 'p',
        text: "Le site peut contenir des liens hypertextes vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu, de leur disponibilité ou de leurs pratiques en matière de protection des données.",
      },
      {
        type: 'p',
        text: "La création de liens vers le site est soumise à l'autorisation préalable et écrite de l'éditeur.",
      },
    ],
  },
  {
    title: 'Limitation de responsabilité',
    blocks: [
      {
        type: 'p',
        text: "L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur le site, mais ne saurait garantir l'absence d'erreur ou d'omission. Il ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, et notamment de l'inaccessibilité du site, de la présence de virus, ou de l'utilisation faite par l'utilisateur des informations qui y sont publiées.",
      },
    ],
  },
  {
    title: 'Données personnelles',
    blocks: [
      {
        type: 'p',
        text: "Les modalités de collecte et de traitement des données personnelles sont précisées dans la Politique de confidentialité, accessible depuis le pied de page du site.",
      },
    ],
  },
  {
    title: 'Loi applicable et juridiction',
    blocks: [
      {
        type: 'p',
        text: "Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution sera soumis, à défaut de résolution amiable, à la compétence exclusive des tribunaux de Toulouse.",
      },
    ],
  },
]

export default function Cgu() {
  return (
    <LegalPage
      label="Utilisation du site"
      title="Conditions générales"
      intro="Les présentes conditions encadrent l'utilisation du site internet du Cercle. Elles s'appliquent à l'ensemble des visiteurs et utilisateurs et complètent les Mentions légales et la Politique de confidentialité."
      updated="Mai 2026"
      sections={SECTIONS}
    />
  )
}
