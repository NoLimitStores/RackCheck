import type { LocaleDict } from "./_types";

/** English (en) dictionary. Professional B2B copy for the UK/international market. */
export const en: LocaleDict = {
  nav: {
    inspection: "Racking inspection",
    howWeWork: "How we work",
    pricing: "Pricing",
    about: "About RackCheck",
    contact: "Contact",
    request: "Request an inspection",
    langMenu: "Choose language",
    langCurrent: "Current language",
    skipToContent: "Skip to main content",
  },
  ui: {
    answerLabel: "Short answer",
  },
  footer: {
    tagline:
      "Independent inspection of warehouse racking. A clear report with prioritised findings, usually within 24 hours.",
    colServices: "Inspections",
    colCompany: "Company",
    contactTitle: "Contact",
    workingArea: "Working area: the Netherlands and Belgium",
    rights: "All rights reserved.",
    kvk: "Chamber of Commerce",
    vat: "VAT",
  },
  cta: {
    title: "Are you sure your racking is still safe?",
    text: "Request an independent inspection. You receive a clear report with prioritised findings, usually within 24 hours.",
    primary: "Request an inspection",
    phone: "Call us",
    whatsapp: "WhatsApp",
  },
  form: {
    company: "Company name",
    name: "Contact name",
    email: "Business email",
    phone: "Phone number",
    postcode: "Postcode",
    city: "Town or city",
    locations: "Number of sites",
    warehouseSize: "Estimated warehouse size",
    rackTypes: "Types of racking",
    reason: "Reason for your request",
    timeframe: "Preferred timeframe",
    message: "Message",
    messagePlaceholder:
      "E.g. number of bays, brand, previous inspections or the nature of the damage.",
    photos: "Photos of the damage (optional)",
    choose: "Please choose",
    privacyBefore:
      "I agree that my details may be used to contact me about this request. See our ",
    privacyLink: "privacy statement",
    privacyAfter: ".",
    submit: "Request an inspection",
    submitting: "Sending...",
    successTitle: "Thank you for your request",
    successText:
      "We have received your message and will get back to you within one working day.",
    errorText:
      "Something went wrong while sending. Please try again or contact us directly.",
    reasonOptions: [
      "Annual inspection",
      "Inspection overdue",
      "Forklift impact",
      "Visible damage",
      "Second opinion",
      "New or relocated racking",
      "Recurring damage",
      "Multiple sites",
      "Other",
    ],
    subjectRequest: "New inspection request via RackCheck",
    subjectContact: "New contact request via RackCheck",
  },
  pages: {
    home: {
      metaTitle: "RackCheck | Independent warehouse racking inspection",
      metaDescription:
        "RackCheck inspects warehouse racking independently. A clear report with priorities, one dedicated inspector and personal contact. Active in the Netherlands and Belgium.",
      breadcrumb: "Home",
      h1: "Safety starts with an inspection",
      intro:
        "RackCheck inspects your warehouse racking independently and turns every finding into a clear priority. You know exactly what is safe, what needs attention and what must be dealt with now.",
      hero: {
        image: "/images/magazijn-hero-inrijstelling.jpg",
        imageAlt: "Warehouse with tall, fully loaded racking along a long aisle",
      },
      answer:
        "A racking inspection is an expert assessment of the safety of your warehouse racking in line with EN 15635. You receive a clear report with prioritised findings and concrete next steps, usually within 24 hours.",
      blocks: [
        { t: "h2", text: "Why RackCheck" },
        { t: "ul", items: [
          "Independent assessment with no sales interest",
          "A prioritised report, usually within 24 hours",
          "One dedicated inspector and personal contact",
          "Active in the Netherlands and Belgium, and in Germany by arrangement",
          "Repairs can be arranged separately through Hovuma",
        ] },
      ],
      ctaTitle: "Are you sure your racking is still safe?",
    },
    inspection: {
      metaTitle: "Racking inspection | Independent warehouse racking safety check",
      metaDescription:
        "Independent racking inspection in line with EN 15635. What we check, when an inspection is needed and what the report contains.",
      breadcrumb: "Racking inspection",
      eyebrow: "Core service",
      h1: "Warehouse racking inspection",
      intro:
        "An independent inspection of your warehouse racking, with a clear report, prioritised findings and concrete next-step advice.",
      answer:
        "A racking inspection is an expert assessment of the safety of your warehouse racking in line with EN 15635. Every finding is graded green, amber or red, with a report usually delivered within 24 hours.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Warehouse with tall, fully loaded pallet racking",
      },
      blocks: [
        { t: "h2", text: "What we check" },
        { t: "ul", items: [
          "Uprights for dents, deformation and corrosion",
          "Beams for deflection and correct locking",
          "Baseplates and floor fixings",
          "Rack protection at vulnerable points",
          "Load signage and out-of-plumb",
        ] },
        { t: "h2", text: "When is an inspection needed?" },
        { t: "p", text: "In practice, racking is assessed by an expert at least once a year, supported by regular internal checks. An inspection is also advisable after an impact, a change to the installation, or when you have doubts about a previous report." },
      ],
      ctaTitle: "Plan your racking inspection",
    },
    "how-we-work": {
      metaTitle: "How we work | From request to report",
      metaDescription:
        "How a racking inspection works at RackCheck: intake, planning, on-site inspection, immediate warning of danger and a report usually within 24 hours.",
      breadcrumb: "How we work",
      eyebrow: "How we work",
      h1: "From request to report",
      intro:
        "A clear process, from the first intake to an optional re-assessment after repairs. Inspection and repair remain strictly separate.",
      answer:
        "After your request we schedule the inspection at a time that suits you. On site we assess all accessible racking, report any acute danger immediately and record in the report what needs to happen and with what priority.",
      blocks: [
        { t: "h2", text: "The process in brief" },
        { t: "ol", items: [
          "Request and intake of your situation",
          "Planning at a time that suits your operation",
          "On-site inspection of all accessible racking",
          "Immediate feedback in case of acute danger",
          "A prioritised report, usually within 24 hours",
          "An optional separate repair proposal on request",
        ] },
      ],
      ctaTitle: "Plan an inspection",
    },
    pricing: {
      metaTitle: "Pricing | Inspection from EUR 395 per year",
      metaDescription:
        "A racking inspection at RackCheck starts from EUR 395 per year. We set the exact price based on your situation and confirm it in advance.",
      breadcrumb: "Pricing",
      eyebrow: "Pricing",
      h1: "Inspection from EUR 395 per year",
      intro:
        "We set the exact price based on your situation and confirm it in advance. Clear about what you pay, with no surprises afterwards.",
      answer:
        "A racking inspection starts from EUR 395 per year, excluding VAT. The price depends on the size of your warehouse, the number and type of racking systems and the number of sites. We confirm the price up front.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Overview of fully loaded pallet racking in a warehouse",
      },
      blocks: [
        { t: "h2", text: "What determines the price?" },
        { t: "ul", items: [
          "The size of your warehouse",
          "The number and type of racking systems",
          "The number of sites",
        ] },
        { t: "p", text: "Several sites are combined into a single visit, which saves travel time and cost." },
      ],
      ctaTitle: "Request a fixed price",
    },
    about: {
      metaTitle: "About RackCheck | Independent racking inspections",
      metaDescription:
        "RackCheck carries out independent inspections of warehouse racking. Personal contact with a dedicated inspector, active in the Netherlands and Belgium.",
      breadcrumb: "About RackCheck",
      eyebrow: "About RackCheck",
      h1: "Independent, expert and personal",
      intro:
        "RackCheck assesses the safety of warehouse racking separately from repair sales. That gives you an honest verdict on what is safe and what needs attention.",
      answer:
        "RackCheck specialises in the independent inspection of warehouse racking and storage systems. You work with one dedicated inspector and receive a report you can use directly for your records and duty of care.",
      image: {
        src: "/images/draagarmstelling.jpg",
        alt: "Cantilever racking with black arms for long goods in a warehouse",
      },
      blocks: [
        { t: "h2", text: "Our principles" },
        { t: "ul", items: [
          "Inspection is separate from repair: no sales interest",
          "A clear report with priorities",
          "A single point of contact and personal service",
          "Active in the Netherlands and Belgium, and in Germany by arrangement",
        ] },
        { t: "p", text: "If repairs are needed, they can be arranged separately through Hovuma, independently of the inspection." },
      ],
      ctaTitle: "Get to know RackCheck",
    },
    contact: {
      metaTitle: "Contact | Get in touch with RackCheck",
      metaDescription:
        "Get in touch with RackCheck for an independent racking inspection. Call, WhatsApp or email us, or request an inspection directly.",
      breadcrumb: "Contact",
      eyebrow: "Contact",
      h1: "Get in touch",
      intro:
        "Call, WhatsApp or email us, or leave your details. For urgent damage we help you as a priority.",
      form: "compact",
      ctaTitle: "Prefer to request an inspection directly?",
    },
    request: {
      metaTitle: "Request an inspection | Independent racking inspection",
      metaDescription:
        "Request an independent racking inspection from RackCheck. Complete the form and we will contact you within one working day.",
      breadcrumb: "Request an inspection",
      eyebrow: "Request an inspection",
      h1: "Request your racking inspection",
      intro:
        "Complete the form with the details of your warehouse. We will contact you within one working day to schedule the inspection and confirm the price.",
      form: "full",
      ctaTitle: "Questions? Call us directly",
    },
  },
};
