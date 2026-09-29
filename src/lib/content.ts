import type { Locale } from "./i18n";

/** Textos del sitio en cada idioma. Las imágenes y el orden de las secciones viven en las páginas. */
const es = {
  siteTitle: "AUREA Plastic Surgery — Cirugía plástica con propósito",
  description: "Cirugía plástica con propósito: un enfoque distinto en cada detalle, de la primera consulta al seguimiento posoperatorio.",
  whatsappMessage: "Hola, me gustaría agendar una consulta en Aurea Plastic Surgery.",

  ui: {
    language: "Idioma",
    nav: { "/": "Inicio", "/procedimientos": "Procedimientos", "/proceso-de-consulta": "Proceso de Consulta" } as Record<string, string>,
    navAria: "Navegación principal",
    book: "Agendar consulta",
    bookCta: "Agenda tu consulta",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    whatsappAria: "Escríbenos por WhatsApp",
    viewProcedures: "Ver procedimientos",
  },

  footer: {
    desc: "Cirugía plástica con propósito: un enfoque distinto en cada detalle, de la primera consulta al seguimiento posoperatorio.",
    nav: "Navegación",
    contact: "Contacto",
    addressPending: "Dirección pendiente",
    emailPending: "Email pendiente",
    follow: "Síguenos",
    socialPending: "Redes sociales pendientes",
    rights: "Todos los derechos reservados.",
    privacy: "Aviso de privacidad — próximamente",
  },

  cta: {
    kicker: "Tu momento",
    title: ["Tu piel, tu decisión,", "tu momento"],
    text: "Explora nuestros procedimientos o agenda tu primera consulta y descubre el camino pensado para ti.",
  },

  procedures: [
    { title: "Rinoplastia", desc: "Armonía facial con resultados naturales, adaptados a cada rostro." },
    { title: "Liposucción", desc: "Contorno corporal preciso y definido." },
    { title: "Aumento mamario", desc: "Proporciones equilibradas que respetan tu anatomía." },
    { title: "Lifting facial", desc: "Rejuvenecimiento sutil, sin perder la expresión propia." },
    { title: "Abdominoplastia", desc: "Firmeza y definición para el área abdominal." },
    { title: "Blefaroplastia", desc: "Una mirada descansada y renovada." },
  ],

  steps: [
    { title: "Consulta inicial", desc: "Conversamos sobre tus objetivos y evaluamos tu caso en detalle." },
    { title: "Plan personalizado", desc: "Diseñamos una propuesta adaptada a tu anatomía y expectativas." },
    { title: "Procedimiento", desc: "Ejecutamos el plan acordado con los más altos estándares de precisión." },
    { title: "Seguimiento", desc: "Te acompañamos en cada etapa de tu recuperación." },
  ],

  home: {
    heroAlt: "Precisión y planificación previa a un procedimiento estético",
    heroTitle: "Cirugía plástica con propósito",
    heroLead: "Explora nuestros procedimientos o agenda tu primera consulta y descubre el camino pensado para ti.",
    scroll: "Descubre",
    clinicKicker: "La clínica",
    clinicTitle: "Un enfoque distinto en cada detalle",
    clinicAlt: "Fachada de Aurea Plastic Surgery al atardecer",
    diffs: [
      { title: "Atención personalizada", desc: "Cada plan quirúrgico se diseña a partir de tu anatomía y tus objetivos." },
      { title: "Tecnología de vanguardia", desc: "Instalaciones y equipamiento pensados para la precisión y la seguridad." },
      { title: "Acompañamiento integral", desc: "Del diagnóstico inicial al seguimiento posoperatorio, un mismo equipo te acompaña." },
      { title: "Discreción y confianza", desc: "Un entorno privado y humano, donde cada decisión se toma con información clara." },
    ],
    procsKicker: "Procedimientos",
    procsTitle: ["Cada procedimiento,", "pensado a tu medida"],
    procsAll: "Ver todos los procedimientos",
    teamKicker: "El equipo",
    teamTitle: "Detrás de cada resultado, un equipo dedicado",
    teamLead: "Acompañamos cada procedimiento con el mismo equipo, del diagnóstico inicial al seguimiento posoperatorio.",
    directorAlt: "Dra. Laura Sofía Medina, directora médica de Aurea Plastic Surgery",
    directorRole: "Directora médica · Cirugía Plástica, Estética y Reconstructiva",
    teamAlt: "Equipo clínico de Aurea Plastic Surgery",
    team: [
      { name: "Dra. Laura Sofía Medina", role: "Directora médica · Cirugía Plástica" },
      { name: "Dr. Andrés Salgado", role: "Cirugía Plástica y Reconstructiva" },
      { name: "Dra. Camila Torres", role: "Cirugía Plástica" },
      { name: "Dr. Mateo Restrepo", role: "Anestesiología" },
      { name: "Valentina Rojas", role: "Enfermería Quirúrgica" },
      { name: "Daniela Pardo", role: "Instrumentación Quirúrgica" },
    ],
    stepsKicker: "El proceso",
    stepsTitle: "Un camino claro, paso a paso",
    stepsAll: "Conocer el proceso completo",
    spaceKicker: "Atmósfera Aurea",
    spaceTitle: "La estética que guía cada espacio",
    spaceAlts: ["Atmósfera Aurea — pasillo interior", "Atmósfera Aurea — fachada y entrada", "Atmósfera Aurea — materiales y texturas"],
    spaceCaption: "Atmósfera Aurea",
  },

  proceduresPage: {
    metaTitle: "Procedimientos — AUREA Plastic Surgery",
    kicker: "Procedimientos",
    title: ["Cada procedimiento,", "pensado a tu medida"],
    ctaTitle: "¿Listo para dar el siguiente paso?",
    ctaText: "Agenda tu primera consulta y descubre el plan pensado para tu anatomía y tus objetivos.",
  },

  processPage: {
    metaTitle: "Proceso de Consulta — AUREA Plastic Surgery",
    kicker: "El proceso",
    title: ["Un camino claro,", "paso a paso"],
  },
};

export type Content = typeof es;

const en: Content = {
  siteTitle: "AUREA Plastic Surgery — Plastic surgery with purpose",
  description: "Plastic surgery with purpose: a distinct approach to every detail, from the first consultation to post-operative follow-up.",
  whatsappMessage: "Hello, I would like to schedule a consultation at Aurea Plastic Surgery.",

  ui: {
    language: "Language",
    nav: { "/": "Home", "/procedimientos": "Procedures", "/proceso-de-consulta": "Consultation Process" },
    navAria: "Main navigation",
    book: "Book a consultation",
    bookCta: "Book your consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    whatsappAria: "Message us on WhatsApp",
    viewProcedures: "View procedures",
  },

  footer: {
    desc: "Plastic surgery with purpose: a distinct approach to every detail, from the first consultation to post-operative follow-up.",
    nav: "Navigation",
    contact: "Contact",
    addressPending: "Address pending",
    emailPending: "Email pending",
    follow: "Follow us",
    socialPending: "Social media pending",
    rights: "All rights reserved.",
    privacy: "Privacy notice — coming soon",
  },

  cta: {
    kicker: "Your moment",
    title: ["Your skin, your decision,", "your moment"],
    text: "Explore our procedures or book your first consultation and discover the path designed for you.",
  },

  procedures: [
    { title: "Rhinoplasty", desc: "Facial harmony with natural results, tailored to every face." },
    { title: "Liposuction", desc: "Precise, defined body contouring." },
    { title: "Breast augmentation", desc: "Balanced proportions that respect your anatomy." },
    { title: "Facelift", desc: "Subtle rejuvenation, without losing your own expression." },
    { title: "Abdominoplasty", desc: "Firmness and definition for the abdominal area." },
    { title: "Blepharoplasty", desc: "A rested, renewed look." },
  ],

  steps: [
    { title: "Initial consultation", desc: "We discuss your goals and evaluate your case in detail." },
    { title: "Personalized plan", desc: "We design a proposal adapted to your anatomy and expectations." },
    { title: "Procedure", desc: "We carry out the agreed plan with the highest standards of precision." },
    { title: "Follow-up", desc: "We support you at every stage of your recovery." },
  ],

  home: {
    heroAlt: "Precision and planning ahead of an aesthetic procedure",
    heroTitle: "Plastic surgery with purpose",
    heroLead: "Explore our procedures or book your first consultation and discover the path designed for you.",
    scroll: "Discover",
    clinicKicker: "The clinic",
    clinicTitle: "A distinct approach to every detail",
    clinicAlt: "Aurea Plastic Surgery façade at sunset",
    diffs: [
      { title: "Personalized care", desc: "Every surgical plan is designed around your anatomy and your goals." },
      { title: "Cutting-edge technology", desc: "Facilities and equipment built for precision and safety." },
      { title: "Comprehensive support", desc: "From the initial diagnosis to post-operative follow-up, the same team is by your side." },
      { title: "Discretion and trust", desc: "A private, human setting where every decision is made with clear information." },
    ],
    procsKicker: "Procedures",
    procsTitle: ["Every procedure,", "tailored to you"],
    procsAll: "View all procedures",
    teamKicker: "The team",
    teamTitle: "Behind every result, a dedicated team",
    teamLead: "We accompany every procedure with the same team, from the initial diagnosis to post-operative follow-up.",
    directorAlt: "Dr. Laura Sofía Medina, medical director of Aurea Plastic Surgery",
    directorRole: "Medical Director · Plastic, Aesthetic and Reconstructive Surgery",
    teamAlt: "Aurea Plastic Surgery clinical team",
    team: [
      { name: "Dr. Laura Sofía Medina", role: "Medical Director · Plastic Surgery" },
      { name: "Dr. Andrés Salgado", role: "Plastic and Reconstructive Surgery" },
      { name: "Dr. Camila Torres", role: "Plastic Surgery" },
      { name: "Dr. Mateo Restrepo", role: "Anesthesiology" },
      { name: "Valentina Rojas", role: "Surgical Nursing" },
      { name: "Daniela Pardo", role: "Surgical Instrumentation" },
    ],
    stepsKicker: "The process",
    stepsTitle: "A clear path, step by step",
    stepsAll: "Learn the full process",
    spaceKicker: "Aurea atmosphere",
    spaceTitle: "The aesthetic that guides every space",
    spaceAlts: ["Aurea atmosphere — interior hallway", "Aurea atmosphere — façade and entrance", "Aurea atmosphere — materials and textures"],
    spaceCaption: "Aurea atmosphere",
  },

  proceduresPage: {
    metaTitle: "Procedures — AUREA Plastic Surgery",
    kicker: "Procedures",
    title: ["Every procedure,", "tailored to you"],
    ctaTitle: "Ready to take the next step?",
    ctaText: "Book your first consultation and discover the plan designed for your anatomy and your goals.",
  },

  processPage: {
    metaTitle: "Consultation Process — AUREA Plastic Surgery",
    kicker: "The process",
    title: ["A clear path,", "step by step"],
  },
};

export const getContent = (locale: Locale): Content => (locale === "en" ? en : es);
