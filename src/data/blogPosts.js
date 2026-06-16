import { IMG } from './site'

/**
 * Blog posts. Each post body is an array of blocks rendered by BlogPost.jsx.
 * Block types:
 *   { type: 'heading', text }
 *   { type: 'p', text }
 *   { type: 'quote', text, author? }
 *   { type: 'list', items: [string] }
 */

export const POSTS = [
  {
    slug: 'progression-non-lineaire',
    title: "La progression n'est pas linéaire — et c'est tant mieux",
    excerpt:
      'Pourquoi les plateaux font partie du chemin, et comment Le Cercle transforme la stagnation en tremplin.',
    category: 'Performance',
    date: '13 Juin 2026',
    read: '6 min',
    img: IMG.trackNight,
    featured: true,
    body: [
      {
        type: 'p',
        text: "Il y a deux types d'athlètes : ceux qui pensent que la progression est une ligne droite, et ceux qui ont arrêté. Les premiers abandonneront tôt ou tard. Les seconds savent que la performance ne se mesure pas en semaines, mais en années — et que les paliers font partie intégrante du chemin.",
      },
      {
        type: 'heading',
        text: 'Le mythe de la courbe ascendante',
      },
      {
        type: 'p',
        text: "Nous avons été conditionnés à attendre des résultats visibles, mesurables, hebdomadaires. Les réseaux sociaux ont accéléré cette impatience. Pourtant, le corps humain n'est pas un graphique Excel. Il progresse par à-coups, par phases d'assimilation, par paliers de consolidation. Un mois sans amélioration apparente peut cacher une transformation profonde du système nerveux, hormonal ou tendineux.",
      },
      {
        type: 'p',
        text: "Au Cercle, nous parlons souvent de « progression invisible ». C'est cette phase silencieuse où rien ne semble bouger, mais où tout s'aligne pour le prochain saut. Comprendre cela, c'est déjà s'épargner 80 % des abandons.",
      },
      {
        type: 'heading',
        text: 'Le plateau comme indicateur',
      },
      {
        type: 'p',
        text: "Un plateau n'est pas un échec. C'est un message. Il indique que votre corps a intégré le stimulus actuel et qu'il attend autre chose. Mieux : il vous force à revisiter vos fondamentaux — votre sommeil, votre alimentation, votre récupération, votre technique. C'est souvent là que se cachent les vrais leviers de progression, plus que dans l'ajout d'une cinquième séance hebdomadaire.",
      },
      {
        type: 'quote',
        text: "Le plateau n'est pas le mur — c'est le palier. On y reprend son souffle avant la marche suivante.",
        author: 'Tom — Cofondateur',
      },
      {
        type: 'heading',
        text: 'Notre approche',
      },
      {
        type: 'p',
        text: "Quand un membre traverse un plateau, nous ne paniquons pas. Nous réévaluons. Nous regardons les données — fréquence, intensité, volume — et nous identifions le point de friction. Parfois il faut charger plus, parfois moins. Parfois il faut changer de discipline pendant trois semaines pour solliciter d'autres fibres. Parfois il faut simplement dormir.",
      },
      {
        type: 'p',
        text: "Le rôle d'un coach n'est pas de pousser à tout prix, mais de lire l'instant juste. C'est cette lecture qui distingue un programme d'entraînement d'un véritable accompagnement.",
      },
    ],
  },
  {
    slug: 'manger-pour-performer',
    title: 'Manger pour performer : en finir avec les régimes',
    excerpt:
      "L'assiette d'un athlète ne se prive pas, elle se construit. Les principes que nos coachs nutrition appliquent au quotidien.",
    category: 'Nutrition',
    date: '11 Juin 2026',
    read: '8 min',
    img: IMG.coachPortrait,
    featured: false,
    body: [
      {
        type: 'p',
        text: "Un régime, par définition, a un début et une fin. C'est précisément pour cela qu'aucun régime ne fonctionne sur le long terme. La nutrition d'un athlète est tout sauf un régime : c'est une architecture, pensée pour soutenir un effort et accompagner une trajectoire.",
      },
      {
        type: 'heading',
        text: 'Sortir de la logique de privation',
      },
      {
        type: 'p',
        text: "La privation crée une dette. Le corps la rembourse — toujours, et souvent avec intérêts. Plus on restreint, plus on déclenche les mécanismes inverses : faim accrue, rétention, perte de masse musculaire, ralentissement métabolique. La performance, elle, demande l'inverse : abondance contrôlée, densité nutritionnelle, régularité.",
      },
      {
        type: 'p',
        text: "Un athlète bien nourri n'a pas peur de manger. Il sait simplement ce qu'il mange, à quel moment, et pourquoi.",
      },
      {
        type: 'heading',
        text: 'Les trois piliers',
      },
      {
        type: 'list',
        items: [
          "Protéines suffisantes — entre 1,6 et 2,2 g par kilo de poids corporel, réparties sur la journée. C'est la matière première de la reconstruction.",
          "Glucides ciblés — pas diabolisés, mais positionnés autour des séances. L'énergie disponible au bon moment vaut plus que toute restriction.",
          "Lipides de qualité — huile d'olive, poissons gras, oléagineux. Ils nourrissent les hormones et soutiennent la récupération.",
        ],
      },
      {
        type: 'heading',
        text: "Ce qui n'est pas dans l'assiette",
      },
      {
        type: 'p',
        text: "L'hydratation reste le levier le plus sous-estimé. Une perte d'eau de 2 % du poids corporel suffit à diminuer la performance de 10 à 15 %. Avant de penser supplément, on boit. Avant de penser brûleur, on dort. Avant de penser superaliment, on mange vrai.",
      },
      {
        type: 'quote',
        text: "Ce que vous mangez détermine ce que vous êtes capable de faire le lendemain. Pas hier — demain.",
        author: 'Dylan — Cofondateur',
      },
      {
        type: 'p',
        text: "La nutrition au Cercle n'est pas un protocole rigide. C'est un cadre adaptable, construit autour de votre vie, de votre métier, de votre rythme. Parce qu'un cadre qu'on ne peut pas tenir n'a aucune valeur.",
      },
    ],
  },
  {
    slug: 'sommeil-entrainement-invisible',
    title: 'Le sommeil, votre entraînement invisible',
    excerpt:
      'Ce qui se joue la nuit détermine ce que vous réalisez le jour. Comprendre la récupération comme un levier de performance.',
    category: 'Récupération',
    date: '09 Juin 2026',
    read: '5 min',
    img: IMG.gymInterior,
    featured: false,
    body: [
      {
        type: 'p',
        text: "On parle d'entraînement comme s'il s'agissait uniquement de ce qui se passe à la salle. C'est une vision tronquée. L'entraînement crée le stimulus ; la récupération, elle, construit l'adaptation. Et la pièce maîtresse de cette récupération, c'est le sommeil.",
      },
      {
        type: 'heading',
        text: 'Ce qui se joue pendant que vous dormez',
      },
      {
        type: 'p',
        text: "C'est durant les phases de sommeil profond que l'hormone de croissance est sécrétée à son pic. C'est durant le sommeil paradoxal que le système nerveux consolide les apprentissages moteurs. C'est cette nuit-là, et pas pendant la séance, que vos progrès se fixent. Mal dormir, c'est abandonner 50 % du travail fourni.",
      },
      {
        type: 'heading',
        text: 'Le seuil du non-négociable',
      },
      {
        type: 'p',
        text: "Sept heures. C'est le seuil en deçà duquel les marqueurs de performance, de récupération et de motivation chutent significativement chez la majorité des adultes. En dessous, vous ne vous entraînez pas — vous vous épuisez.",
      },
      {
        type: 'list',
        items: [
          "Couchez-vous à la même heure, même le week-end. La régularité prime sur la quantité.",
          "Éteignez les écrans 60 minutes avant. La lumière bleue ne pardonne pas.",
          "Baissez la température de la chambre à 18-19 °C. Le corps a besoin de froid pour s'endormir.",
          "Pas de séance intense après 20 h. Le système nerveux reste activé deux à trois heures.",
        ],
      },
      {
        type: 'quote',
        text: "Un athlète qui ne dort pas est un athlète qui ne progresse plus. Le reste est secondaire.",
      },
      {
        type: 'p',
        text: "Au Cercle, nous n'imposons pas de protocole sommeil. Nous vous aidons à le considérer pour ce qu'il est : la séance la plus importante de la semaine — celle qui dure huit heures, tous les soirs.",
      },
    ],
  },
  {
    slug: 'discipline-respect-de-soi',
    title: "La discipline n'est pas une punition",
    excerpt:
      "Redéfinir la rigueur comme un acte de respect envers soi-même. Une réflexion sur l'état d'esprit des membres du Cercle.",
    category: "État d'esprit",
    date: '06 Juin 2026',
    read: '7 min',
    img: IMG.athleteGrayscale,
    featured: false,
    body: [
      {
        type: 'p',
        text: "Le mot « discipline » porte un poids historique : celui de la contrainte, de la sanction, du sacrifice. Pourtant, dans la bouche des athlètes qui durent, il prend un autre sens. La discipline n'est pas ce qu'on s'inflige ; c'est ce qu'on s'accorde.",
      },
      {
        type: 'heading',
        text: "L'écart entre vouloir et faire",
      },
      {
        type: 'p',
        text: "Tout le monde veut. Peu agissent. La différence ne se joue pas dans l'intention, mais dans la capacité à honorer une décision passée même quand l'humeur du jour la contredit. C'est exactement ce qu'est la discipline : tenir parole avec soi-même.",
      },
      {
        type: 'p',
        text: "Et c'est précisément pour cela qu'elle est un acte de respect. Renoncer à une séance parce qu'on n'en a pas envie, c'est dire à soi-même : « ce que je ressens à l'instant T compte plus que ce que je me suis promis. » À répétition, ce message érode la confiance que l'on se porte.",
      },
      {
        type: 'heading',
        text: "Construire un cadre, pas une cage",
      },
      {
        type: 'p',
        text: "La rigueur ne consiste pas à tout contrôler. Elle consiste à protéger l'essentiel. Trois séances par semaine bien tenues valent mieux que cinq abandonnées au quatrième jour. Un programme alimentaire respecté à 85 % vaut mieux qu'un programme parfait suivi deux semaines.",
      },
      {
        type: 'quote',
        text: "La discipline, c'est le pont entre vos objectifs et vos accomplissements. Sans elle, l'un et l'autre restent étrangers.",
      },
      {
        type: 'heading',
        text: "Ce qu'on observe au Cercle",
      },
      {
        type: 'p',
        text: "Les membres qui progressent le plus ne sont pas les plus talentueux. Ce sont les plus constants. Ils ont compris une chose simple : l'exigence envers soi est une forme de bienveillance. Elle dit « je crois en ce que je peux devenir, alors je ne me trahis pas en route ».",
      },
    ],
  },
  {
    slug: 'small-group-energie-du-collectif',
    title: "Small group : l'énergie du collectif, le suivi du sur-mesure",
    excerpt:
      'Pourquoi s\'entraîner à 8 maximum change tout. Ce que le format small group apporte que ni la salle bondée ni le solo ne peuvent offrir.',
    category: 'Performance',
    date: '04 Juin 2026',
    read: '6 min',
    img: IMG.salleBoxing,
    featured: false,
    body: [
      {
        type: 'p',
        text: "Il existe une zone idéale entre l'anonymat d'une grande salle et la solitude de l'entraînement individuel. Cette zone, c'est le small group : un collectif assez restreint pour que chacun soit vu, assez nombreux pour que l'énergie circule. Au Cercle, nous l'avons fixé à 8 personnes maximum. Ce n'est pas un hasard.",
      },
      {
        type: 'heading',
        text: 'Pourquoi huit, et pas trente',
      },
      {
        type: 'p',
        text: "Au-delà d'une certaine taille, un coach ne coache plus : il surveille. Il ne peut plus corriger une posture, ajuster une charge, encourager au bon moment. À huit, tout redevient possible. Chaque participant garde son intensité propre — SOFT, MODÉRÉ ou HARD — tout en profitant de la dynamique du groupe. Vous n'êtes jamais un numéro, jamais perdu dans la masse.",
      },
      {
        type: 'heading',
        text: "L'émulation, ce moteur sous-estimé",
      },
      {
        type: 'p',
        text: "S'entraîner seul demande une volonté de fer. S'entraîner à côté de personnes qui donnent tout, c'est laisser le collectif porter une partie de l'effort. On se dépasse sans s'en rendre compte, simplement parce que l'énergie de la séance nous tire vers le haut. C'est l'un des leviers les plus puissants — et les plus gratuits — de la progression.",
      },
      {
        type: 'quote',
        text: "Seul on va plus vite, à huit on va plus loin. Et surtout, on revient le lendemain.",
        author: 'Dylan — Cofondateur',
      },
      {
        type: 'heading',
        text: 'Trois intensités, un même cadre',
      },
      {
        type: 'list',
        items: [
          'SOFT — séances douces pour se détendre, améliorer la souplesse et retrouver l\'équilibre.',
          'MODÉRÉ — entraînements dynamiques pour renforcer le corps et maintenir la forme.',
          'HARD — sessions intensives pour dépasser ses limites et atteindre des performances optimales.',
        ],
      },
      {
        type: 'p',
        text: "Vous réservez votre cours via l'application, en fonction de votre forme du jour et de vos disponibilités. Une séance d'essai est offerte : le meilleur moyen de comprendre, en 45 minutes, pourquoi le format change tout.",
      },
    ],
  },
  {
    slug: 'mobilite-chainon-oublie',
    title: 'Mobilité : le chaînon trop souvent oublié',
    excerpt:
      "Avant la force, l'amplitude. Pourquoi nos protocoles commencent toujours par libérer le mouvement.",
    category: 'Récupération',
    date: '02 Juin 2026',
    read: '6 min',
    img: IMG.coachAthlete,
    featured: false,
    body: [
      {
        type: 'p',
        text: "Un mouvement contraint, c'est de la force gaspillée. Vous pouvez avoir les meilleurs muscles du monde — s'ils opèrent dans une amplitude réduite, vous transformez en kinésithérapeute ce qui aurait pu être un coach. La mobilité n'est pas un échauffement de complaisance. C'est la première brique de toute performance durable.",
      },
      {
        type: 'heading',
        text: 'Souplesse, mobilité, stabilité',
      },
      {
        type: 'p',
        text: "Trois notions souvent confondues. La souplesse, c'est l'amplitude passive d'une articulation. La mobilité, c'est cette même amplitude rendue active, contrôlée, utilisable. La stabilité, c'est la capacité à tenir une position dans cette amplitude. Un athlète a besoin des trois — mais sans mobilité, les deux autres ne servent à rien.",
      },
      {
        type: 'heading',
        text: 'Là où ça se joue',
      },
      {
        type: 'list',
        items: [
          "Hanches — la clé de presque tout : squat, fente, course, soulevé de terre.",
          "Épaules — sous-utilisées chez les sédentaires, surchargées chez les sportifs.",
          'Chevilles — sous-estimées, alors que leur amplitude conditionne tout le bas du corps.',
          'Thoracique — rigide chez 95 % des personnes assises à un bureau. Première à libérer.',
        ],
      },
      {
        type: 'quote',
        text: "On ne construit pas une cathédrale sur des fondations bancales. Travailler la force sans mobilité, c'est exactement cela.",
        author: 'Tom — Cofondateur',
      },
      {
        type: 'heading',
        text: 'Notre approche',
      },
      {
        type: 'p',
        text: "Chaque séance au Cercle commence par un protocole de mobilité ciblé sur ce que la séance va exiger. Pas dix minutes d'étirements statiques façon cours de gym — un travail actif, dirigé, qui prépare les articulations à recevoir la charge. C'est moins spectaculaire que les bras de fer en story Instagram. Mais c'est ce qui fait la différence à six mois.",
      },
    ],
  },
]

export const CATEGORIES = [
  'Tout',
  'Performance',
  'Nutrition',
  'Récupération',
  "État d'esprit",
]

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = getPostBySlug(currentSlug)
  if (!current) return POSTS.slice(0, limit)
  const sameCategory = POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  )
  const others = POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}
