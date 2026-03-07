export type Project = {
  id: string
  title: string
  categories: string[]
  tags: string[]
  year: string
  image: string
  slug: string
  excerpt: string
  services?: string[]
  featured?: boolean
  content: {
    overview: string
    challenge: string
    solution: string
    results: string
  }
}

const projectImages = {
  featured: "/images/featured-project.png",
  typography: "/images/project-typography.png",
  poster: "/images/project-poster.png",
  studio: "/images/about-studio.png",
  video: "/images/video-thumbnail.png",
  hero: "/images/hero-swiss.png",
} as const

export const projects: Project[] = [
  {
    id: "1",
    title: "Zurich Museum of Design",
    categories: ["Branding"],
    tags: ["branding", "environmental", "digital"],
    year: "2024",
    image: projectImages.featured,
    slug: "zurich-museum",
    excerpt:
      "A comprehensive rebrand for the Zurich Museum of Design, featuring a new visual identity system, signage, and digital presence.",
    services: ["Brand Identity", "Environmental Design", "Digital Experience", "Print Collateral"],
    featured: true,
    content: {
      overview:
        "We developed a complete identity system for the museum that aligned architecture, exhibition graphics, and digital touchpoints.",
      challenge:
        "The previous system was inconsistent across channels and difficult to scale for rotating exhibitions and multilingual content.",
      solution:
        "We introduced a modular grid, strong typographic hierarchy, and a restrained palette that could flex across formats.",
      results:
        "The museum team gained faster production workflows, stronger brand recognition, and clearer visitor communications.",
    },
  },
  {
    id: "2",
    title: "Helvetica Now Campaign",
    categories: ["Typography", "Print"],
    tags: ["typography", "print"],
    year: "2023",
    image: projectImages.typography,
    slug: "helvetica-now",
    excerpt:
      "A promotional campaign for the release of the Helvetica Now typeface, featuring print and digital activations.",
    content: {
      overview: "This campaign translated typographic precision into a high-visibility launch across editorial, outdoor, and social channels.",
      challenge: "The work needed to respect Helvetica's heritage while still feeling contemporary and campaign-ready.",
      solution:
        "We built a system around scale contrast, disciplined spacing, and dynamic specimen compositions for both static and motion formats.",
      results: "Launch assets were widely shared across design communities and drove strong engagement around the release.",
    },
  },
  {
    id: "3",
    title: "Basel Art Fair",
    categories: ["Branding", "Environmental"],
    tags: ["branding", "environmental"],
    year: "2023",
    image: projectImages.studio,
    slug: "basel-art-fair",
    excerpt: "A visual identity and environmental graphics system for the Basel Art Fair.",
    content: {
      overview:
        "We designed an event identity that balanced institutional clarity with flexible expression for exhibitors and partners.",
      challenge: "Signage, printed matter, and wayfinding all needed to stay coherent in a complex physical environment.",
      solution: "A modular identity toolkit and typographic ruleset ensured consistency across every visitor touchpoint.",
      results: "The new system simplified vendor production and improved on-site legibility for attendees.",
    },
  },
  {
    id: "4",
    title: "Grid Systems Publication",
    categories: ["Editorial", "Typography"],
    tags: ["editorial", "typography", "print"],
    year: "2022",
    image: projectImages.poster,
    slug: "grid-systems",
    excerpt: "An editorial design project demonstrating practical grid systems in contemporary graphic design.",
    content: {
      overview: "This publication combined historical context with production-ready grid templates for designers.",
      challenge: "The book had to teach complex structure without becoming visually dense or academic.",
      solution: "We used progressive hierarchy, consistent modules, and annotation layers to guide readers through each system.",
      results: "The publication became a reference resource for both design teams and classroom instruction.",
    },
  },
  {
    id: "5",
    title: "Circular Type Foundry",
    categories: ["Branding", "Digital"],
    tags: ["branding", "digital", "typography"],
    year: "2022",
    image: projectImages.typography,
    slug: "circular-type",
    excerpt: "Brand identity and digital product experience for a contemporary type foundry.",
    content: {
      overview: "We created a brand and commerce experience focused on specimen clarity and licensing usability.",
      challenge: "Type products require expressive previews while still supporting technical purchase decisions.",
      solution: "A component-based specimen system and structured product flows balanced exploration and conversion.",
      results: "The foundry saw stronger product discovery and higher checkout completion.",
    },
  },
  {
    id: "6",
    title: "Modernist Architecture Book",
    categories: ["Editorial", "Photography"],
    tags: ["editorial", "photography", "print"],
    year: "2021",
    image: projectImages.hero,
    slug: "modernist-architecture",
    excerpt: "Editorial design for a book exploring Swiss modernist architecture and visual culture.",
    content: {
      overview: "The book paired archival photography with analytical essays in a highly structured layout.",
      challenge: "Dense long-form content needed to remain navigable and visually balanced over hundreds of pages.",
      solution: "We designed a rhythm-driven system using consistent baseline grids and image anchoring rules.",
      results: "Readers and contributors praised the publication for clarity and editorial coherence.",
    },
  },
  {
    id: "7",
    title: "Swiss Film Festival",
    categories: ["Branding", "Motion"],
    tags: ["branding", "motion", "digital"],
    year: "2021",
    image: projectImages.video,
    slug: "swiss-film-festival",
    excerpt: "Brand identity, motion graphics, and campaign assets for an annual Swiss cinema festival.",
    content: {
      overview: "We delivered a festival identity spanning title cards, social motion, and venue graphics.",
      challenge: "Assets had to adapt quickly to changing schedules and partner requirements.",
      solution: "A typographic motion framework and reusable templates enabled fast, consistent updates.",
      results: "The festival team reduced turnaround time while maintaining a distinctive visual language.",
    },
  },
  {
    id: "8",
    title: "Swiss Design Conference",
    categories: ["Branding", "Environmental"],
    tags: ["branding", "environmental", "print"],
    year: "2024",
    image: projectImages.studio,
    slug: "swiss-design-conference",
    excerpt: "Visual identity and event environment for the annual Swiss Design Conference in Zurich.",
    content: {
      overview: "The conference identity needed to unify speaker content, venue flow, and digital updates.",
      challenge: "Multiple stakeholders produced materials in parallel, creating consistency risks.",
      solution: "We defined strict type, spacing, and signage rules with practical templates for all teams.",
      results: "The event delivered a cohesive attendee experience across print, projection, and wayfinding.",
    },
  },
  {
    id: "9",
    title: "Geometric Typeface",
    categories: ["Typography"],
    tags: ["typography", "digital"],
    year: "2024",
    image: projectImages.typography,
    slug: "geometric-typeface",
    excerpt: "A custom geometric sans-serif family created for a technology company in Zurich.",
    content: {
      overview: "We designed a type family optimized for interface readability and brand distinction.",
      challenge: "The client required a voice that felt technical but not sterile across product and marketing usage.",
      solution: "Character sets were tuned for digital rendering, multilingual support, and systematic hierarchy.",
      results: "The custom typeface improved brand consistency and elevated product UI clarity.",
    },
  },
  {
    id: "10",
    title: "Minimalist Packaging",
    categories: ["Packaging"],
    tags: ["packaging", "branding", "print"],
    year: "2024",
    image: projectImages.poster,
    slug: "minimalist-packaging",
    excerpt: "A minimalist packaging system for a premium skincare line inspired by Swiss principles.",
    content: {
      overview: "The system was designed to scale across SKUs while preserving premium shelf presence.",
      challenge: "Regulatory copy and variant complexity threatened visual simplicity.",
      solution: "A strict hierarchy and modular labeling architecture kept information clear and production efficient.",
      results: "Packaging rollout stayed consistent across new product launches with reduced design overhead.",
    },
  },
  {
    id: "11",
    title: "Museum Typeface System",
    categories: ["Typography", "Branding"],
    tags: ["typography", "branding", "museum"],
    year: "2023",
    image: projectImages.featured,
    slug: "museum-typeface",
    excerpt: "A bespoke typographic system designed for cultural institutions and exhibition environments.",
    content: {
      overview: "This project created a flexible type system for signage, editorial, and digital communication.",
      challenge: "The institution required a single system that could handle long-form text and large-scale wayfinding.",
      solution: "We developed a coordinated family with optical size logic and strict usage guidance.",
      results: "The institution gained a durable visual foundation for both permanent and temporary programming.",
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        (candidate.categories.some((category) => project.categories.includes(category)) ||
          candidate.tags.some((tag) => project.tags.includes(tag))),
    )
    .slice(0, limit)
}
