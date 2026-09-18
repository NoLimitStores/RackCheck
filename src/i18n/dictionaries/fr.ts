import type { LocaleDict } from "./_types";

/** Dictionnaire francais (fr). Textes B2B professionnels pour la Belgique et la France. */
export const fr: LocaleDict = {
  nav: {
    inspection: "Inspection de rayonnages",
    howWeWork: "Methode de travail",
    pricing: "Tarifs",
    about: "A propos de RackCheck",
    contact: "Contact",
    request: "Demander une inspection",
    langMenu: "Choisir la langue",
    langCurrent: "Langue actuelle",
    skipToContent: "Aller au contenu principal",
  },
  ui: {
    answerLabel: "Reponse courte",
  },
  footer: {
    tagline:
      "Inspection independante des rayonnages d'entrepot. Un rapport clair avec des priorites, en general sous 24 heures.",
    colServices: "Inspections",
    colCompany: "Entreprise",
    contactTitle: "Contact",
    workingArea: "Zone d'intervention : Pays-Bas et Belgique",
    rights: "Tous droits reserves.",
    kvk: "Registre du commerce (KvK)",
    vat: "TVA",
  },
  cta: {
    title: "Etes-vous certain que vos rayonnages sont surs ?",
    text: "Demandez une inspection independante. Vous recevez un rapport clair avec des priorites, en general sous 24 heures.",
    primary: "Demander une inspection",
    phone: "Appeler",
    whatsapp: "WhatsApp",
  },
  form: {
    company: "Nom de l'entreprise",
    name: "Nom du contact",
    email: "E-mail professionnel",
    phone: "Numero de telephone",
    postcode: "Code postal",
    city: "Ville",
    locations: "Nombre de sites",
    warehouseSize: "Taille estimee de l'entrepot",
    rackTypes: "Types de rayonnages",
    reason: "Motif de la demande",
    timeframe: "Delai souhaite",
    message: "Message",
    messagePlaceholder:
      "Par ex. nombre de travees, marque, inspections precedentes ou nature du dommage.",
    photos: "Photos du dommage (facultatif)",
    choose: "Faites un choix",
    privacyBefore:
      "J'accepte que mes donnees soient utilisees pour me contacter au sujet de cette demande. Voir notre ",
    privacyLink: "declaration de confidentialite",
    privacyAfter: ".",
    submit: "Demander une inspection",
    submitting: "Envoi en cours...",
    successTitle: "Merci pour votre demande",
    successText:
      "Nous avons bien recu votre message et vous recontactons sous un jour ouvrable.",
    errorText:
      "L'envoi a echoue. Veuillez reessayer ou nous contacter directement.",
    reasonOptions: [
      "Inspection annuelle",
      "Inspection expiree",
      "Choc de chariot elevateur",
      "Dommage visible",
      "Deuxieme avis",
      "Rayonnages nouveaux ou deplaces",
      "Dommages recurrents",
      "Plusieurs sites",
      "Autre",
    ],
    subjectRequest: "Nouvelle demande d'inspection via RackCheck",
    subjectContact: "Nouvelle demande de contact via RackCheck",
  },
  pages: {
    home: {
      metaTitle: "RackCheck | Inspection independante de rayonnages d'entrepot",
      metaDescription:
        "RackCheck inspecte les rayonnages d'entrepot de maniere independante. Un rapport clair avec des priorites, un inspecteur attitre et un contact personnel. Actif aux Pays-Bas et en Belgique.",
      breadcrumb: "Accueil",
      h1: "La securite commence par une inspection",
      intro:
        "RackCheck inspecte vos rayonnages d'entrepot de maniere independante et traduit chaque constat en une priorite claire. Vous savez exactement ce qui est sur, ce qui demande attention et ce qui doit etre traite sans attendre.",
      hero: {
        image: "/images/magazijn-hero-inrijstelling.jpg",
        imageAlt: "Entrepot avec des rayonnages hauts et entierement charges le long d'une longue allee",
      },
      answer:
        "Une inspection de rayonnages est une evaluation experte de la securite de vos rayonnages d'entrepot conformement a la norme EN 15635. Vous recevez un rapport clair avec des priorites et des etapes concretes, en general sous 24 heures.",
      blocks: [
        { t: "h2", text: "Pourquoi RackCheck" },
        { t: "ul", items: [
          "Une evaluation independante, sans interet commercial",
          "Un rapport priorise, en general sous 24 heures",
          "Un inspecteur attitre et un contact personnel",
          "Actif aux Pays-Bas et en Belgique, et en Allemagne sur demande",
          "Les reparations peuvent etre organisees separement via Hovuma",
        ] },
      ],
      ctaTitle: "Etes-vous certain que vos rayonnages sont surs ?",
    },
    inspection: {
      metaTitle: "Inspection de rayonnages | Controle independant des rayonnages",
      metaDescription:
        "Inspection independante de rayonnages conforme a la norme EN 15635. Ce que nous controlons, quand une inspection est necessaire et ce que contient le rapport.",
      breadcrumb: "Inspection de rayonnages",
      eyebrow: "Service principal",
      h1: "Inspection des rayonnages d'entrepot",
      intro:
        "Une inspection independante de vos rayonnages d'entrepot, avec un rapport clair, des constats priorises et des recommandations concretes.",
      answer:
        "Une inspection de rayonnages est une evaluation experte de la securite de vos rayonnages conformement a la norme EN 15635. Chaque constat est classe en vert, orange ou rouge, avec un rapport en general sous 24 heures.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Entrepot avec de hauts rayonnages a palettes entierement charges",
      },
      blocks: [
        { t: "h2", text: "Ce que nous controlons" },
        { t: "ul", items: [
          "Les echelles pour les chocs, deformations et corrosion",
          "Les lisses pour la fleche et le bon verrouillage",
          "Les platines et l'ancrage au sol",
          "Les protections anti-collision aux points sensibles",
          "Les plaques de charge et le defaut d'aplomb",
        ] },
        { t: "h2", text: "Quand une inspection est-elle necessaire ?" },
        { t: "p", text: "En pratique, les rayonnages sont evalues par une personne competente au moins une fois par an, complete par des controles internes reguliers. Une inspection est aussi conseillee apres un choc, une modification de l'installation ou en cas de doute sur un rapport precedent." },
      ],
      ctaTitle: "Planifiez votre inspection de rayonnages",
    },
    "how-we-work": {
      metaTitle: "Methode de travail | De la demande au rapport",
      metaDescription:
        "Le deroulement d'une inspection de rayonnages chez RackCheck : prise en charge, planification, inspection sur site, alerte immediate en cas de danger et rapport en general sous 24 heures.",
      breadcrumb: "Methode de travail",
      eyebrow: "Methode de travail",
      h1: "De la demande au rapport",
      intro:
        "Un processus clair, de la premiere prise en charge a une eventuelle reevaluation apres reparation. L'inspection et la reparation restent strictement separees.",
      answer:
        "Apres votre demande, nous planifions l'inspection a un moment qui vous convient. Sur site, nous evaluons tous les rayonnages accessibles, signalons immediatement tout danger aigu et consignons dans le rapport ce qui doit etre fait et avec quelle priorite.",
      blocks: [
        { t: "h2", text: "Le processus en bref" },
        { t: "ol", items: [
          "Demande et prise en charge de votre situation",
          "Planification a un moment adapte a votre exploitation",
          "Inspection sur site de tous les rayonnages accessibles",
          "Retour immediat en cas de danger aigu",
          "Un rapport priorise, en general sous 24 heures",
          "Sur demande, une proposition de reparation distincte",
        ] },
      ],
      ctaTitle: "Planifier une inspection",
    },
    pricing: {
      metaTitle: "Tarifs | Inspection a partir de 395 EUR par an",
      metaDescription:
        "Une inspection de rayonnages chez RackCheck demarre a partir de 395 EUR par an. Nous fixons le prix exact selon votre situation et le confirmons a l'avance.",
      breadcrumb: "Tarifs",
      eyebrow: "Tarifs",
      h1: "Inspection a partir de 395 EUR par an",
      intro:
        "Nous fixons le prix exact selon votre situation et le confirmons a l'avance. Clair sur ce que vous payez, sans surprises par la suite.",
      answer:
        "Une inspection de rayonnages demarre a partir de 395 EUR par an, hors TVA. Le prix depend de la taille de votre entrepot, du nombre et du type de rayonnages et du nombre de sites. Nous confirmons le prix a l'avance.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Vue d'ensemble de rayonnages a palettes entierement charges dans un entrepot",
      },
      blocks: [
        { t: "h2", text: "Qu'est-ce qui determine le prix ?" },
        { t: "ul", items: [
          "La taille de votre entrepot",
          "Le nombre et le type de rayonnages",
          "Le nombre de sites",
        ] },
        { t: "p", text: "Plusieurs sites sont regroupes en une seule visite, ce qui reduit le temps de deplacement et les couts." },
      ],
      ctaTitle: "Demander un prix fixe",
    },
    about: {
      metaTitle: "A propos de RackCheck | Inspections independantes de rayonnages",
      metaDescription:
        "RackCheck realise des inspections independantes de rayonnages d'entrepot. Contact personnel avec un inspecteur attitre, actif aux Pays-Bas et en Belgique.",
      breadcrumb: "A propos de RackCheck",
      eyebrow: "A propos de RackCheck",
      h1: "Independant, expert et personnel",
      intro:
        "RackCheck evalue la securite des rayonnages d'entrepot independamment de la vente de reparations. Vous obtenez ainsi un avis honnete sur ce qui est sur et ce qui demande attention.",
      answer:
        "RackCheck est specialise dans l'inspection independante des rayonnages d'entrepot et des systemes de stockage. Vous travaillez avec un inspecteur attitre et recevez un rapport directement exploitable pour votre dossier et vos obligations de securite.",
      image: {
        src: "/images/draagarmstelling.jpg",
        alt: "Rayonnage cantilever a bras noirs pour charges longues dans un entrepot",
      },
      blocks: [
        { t: "h2", text: "Nos principes" },
        { t: "ul", items: [
          "L'inspection est distincte de la reparation : aucun interet commercial",
          "Un rapport clair avec des priorites",
          "Un interlocuteur unique et un contact personnel",
          "Actif aux Pays-Bas et en Belgique, et en Allemagne sur demande",
        ] },
        { t: "p", text: "Si une reparation est necessaire, elle peut etre organisee separement via Hovuma, independamment de l'inspection." },
      ],
      ctaTitle: "Decouvrez RackCheck",
    },
    contact: {
      metaTitle: "Contact | Contactez RackCheck",
      metaDescription:
        "Contactez RackCheck pour une inspection independante de rayonnages. Appelez, ecrivez via WhatsApp ou e-mail, ou demandez directement une inspection.",
      breadcrumb: "Contact",
      eyebrow: "Contact",
      h1: "Contactez-nous",
      intro:
        "Appelez, ecrivez via WhatsApp ou e-mail, ou laissez vos coordonnees. En cas de dommage urgent, nous vous aidons en priorite.",
      form: "compact",
      ctaTitle: "Vous preferez demander directement une inspection ?",
    },
    request: {
      metaTitle: "Demander une inspection | Inspection independante de rayonnages",
      metaDescription:
        "Demandez une inspection independante de rayonnages a RackCheck. Remplissez le formulaire et nous vous recontactons sous un jour ouvrable.",
      breadcrumb: "Demander une inspection",
      eyebrow: "Demander une inspection",
      h1: "Demandez votre inspection de rayonnages",
      intro:
        "Remplissez le formulaire avec les details de votre entrepot. Nous vous recontactons sous un jour ouvrable pour planifier l'inspection et confirmer le prix.",
      form: "full",
      ctaTitle: "Des questions ? Appelez-nous directement",
    },
  },
};
