export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: "Typography" | "Grid Systems" | "Case Studies" | "Design Theory"
  slug: string
  image: string
  author: string
  tags: string[]
  featured?: boolean
  content: string[]
}

const blogImages = {
  hero: "/images/hero-swiss.png",
  typography: "/images/project-typography.png",
  poster: "/images/project-poster.png",
  featured: "/images/featured-project.png",
  studio: "/images/about-studio.png",
  video: "/images/video-thumbnail.png",
} as const

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "THE ENDURING INFLUENCE OF SWISS DESIGN IN THE DIGITAL AGE",
    excerpt: "How Swiss Design principles continue to shape modern digital design, from websites to mobile applications.",
    date: "May 5, 2025",
    readTime: "8 min read",
    category: "Design Theory",
    slug: "swiss-design-digital-age",
    image: blogImages.hero,
    author: "Emma Schmidt",
    tags: ["swiss-design", "digital-design", "design-theory"],
    featured: true,
    content: [
      "Swiss Design remains relevant because its focus on clarity and structure directly supports modern digital interfaces.",
      "Design systems, component libraries, and responsive layouts all inherit core Swiss principles: consistency, hierarchy, and objective communication.",
      "When teams align around these principles, products scale faster and remain easier to use over time.",
    ],
  },
  {
    id: "2",
    title: "THE GRID SYSTEM: FOUNDATION OF SWISS DESIGN",
    excerpt:
      "An exploration of the grid system as a fundamental element of Swiss Design, examining its history, principles, and application in modern design practice.",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Grid Systems",
    slug: "grid-system-foundation",
    image: blogImages.featured,
    author: "Thomas Weber",
    tags: ["grid-systems", "layout", "swiss-design"],
    content: [
      "The grid gives designers a repeatable framework for organizing information with precision.",
      "In practice, a grid improves readability, supports responsive behavior, and makes collaboration across teams simpler.",
      "Strong grid decisions are often invisible to users, but they are essential for coherent products.",
    ],
  },
  {
    id: "3",
    title: "HELVETICA: THE ICONIC TYPEFACE",
    excerpt:
      "A deep dive into the history and influence of Helvetica, the quintessential Swiss typeface that has defined modern typography and visual communication.",
    date: "April 15, 2025",
    readTime: "6 min read",
    category: "Typography",
    slug: "helvetica-iconic-typeface",
    image: blogImages.typography,
    author: "Lukas Müller",
    tags: ["typography", "helvetica", "history"],
    content: [
      "Helvetica became iconic because it balances neutrality with legibility across many contexts.",
      "Its success in signage, editorial, and interfaces demonstrates how type can carry both function and identity.",
      "Modern teams still rely on these qualities when building scalable visual languages.",
    ],
  },
  {
    id: "4",
    title: "CASE STUDY: ZURICH MUSEUM REBRAND",
    excerpt:
      "A detailed look at our recent rebrand for the Zurich Museum of Design, exploring our process, challenges, and solutions in applying Swiss Design principles.",
    date: "April 3, 2025",
    readTime: "7 min read",
    category: "Case Studies",
    slug: "zurich-museum-case-study",
    image: blogImages.poster,
    author: "Sophie Keller",
    tags: ["case-study", "branding", "museum"],
    content: [
      "This rebrand focused on unifying wayfinding, print, and digital touchpoints into one system.",
      "A modular structure and restrained palette improved consistency while leaving room for rotating exhibitions.",
      "The resulting identity increased recognition and simplified production workflows for the internal team.",
    ],
  },
  {
    id: "5",
    title: "MINIMALISM IN PRACTICE: LESS IS MORE",
    excerpt: "Exploring the minimalist principle of 'less is more' in Swiss Design and its application in contemporary visual communication.",
    date: "March 22, 2025",
    readTime: "4 min read",
    category: "Design Theory",
    slug: "minimalism-less-is-more",
    image: blogImages.studio,
    author: "Anna Hoffmann",
    tags: ["minimalism", "design-theory", "communication"],
    content: [
      "Minimalism is not about removing personality; it is about removing friction.",
      "By prioritizing hierarchy and whitespace, teams can improve comprehension without sacrificing brand character.",
      "Useful minimalism is deliberate, not empty.",
    ],
  },
  {
    id: "6",
    title: "THE ROLE OF PHOTOGRAPHY IN SWISS DESIGN",
    excerpt: "Examining the use of objective photography in Swiss Design and its role in creating clear, impactful visual communication.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Design Theory",
    slug: "photography-swiss-design",
    image: blogImages.video,
    author: "Marc Brunner",
    tags: ["photography", "swiss-design", "visual-language"],
    content: [
      "Swiss design often favors direct, documentary-style imagery over decoration.",
      "Objective photography supports trustworthy communication by anchoring message and context.",
      "In digital products, the same principle applies: images should clarify intent, not distract.",
    ],
  },
  {
    id: "7",
    title: "COLOR THEORY IN SWISS DESIGN",
    excerpt:
      "Analyzing the use of color in Swiss Design, from the traditional red and black to modern applications of color theory in visual communication.",
    date: "March 8, 2025",
    readTime: "6 min read",
    category: "Design Theory",
    slug: "color-theory-swiss-design",
    image: blogImages.featured,
    author: "Emma Schmidt",
    tags: ["color-theory", "design-theory", "swiss-design"],
    content: [
      "A limited palette reduces noise and strengthens hierarchy.",
      "Swiss-inspired systems often use color as a structural signal rather than decoration.",
      "This approach translates well to UI states, dashboards, and editorial layouts.",
    ],
  },
  {
    id: "8",
    title: "SWISS DESIGN IN THE AGE OF AI",
    excerpt:
      "Exploring how Swiss Design principles can guide the development of AI-generated visual content and maintain clarity in an increasingly automated design landscape.",
    date: "March 1, 2025",
    readTime: "7 min read",
    category: "Design Theory",
    slug: "swiss-design-ai-age",
    image: blogImages.hero,
    author: "Thomas Weber",
    tags: ["ai", "swiss-design", "systems"],
    content: [
      "AI can accelerate output, but clarity still depends on human editorial decisions.",
      "Swiss principles provide guardrails for evaluating generated layouts, typography, and hierarchy.",
      "Teams that define these rules upfront get better, more consistent outcomes from automation.",
    ],
  },
  {
    id: "9",
    title: "THE EVOLUTION OF SANS-SERIF TYPOGRAPHY",
    excerpt:
      "Exploring the development of sans-serif typography from its early days to its prominence in Swiss Design and modern digital interfaces.",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Typography",
    slug: "sans-serif-evolution",
    image: blogImages.typography,
    author: "Lukas Müller",
    tags: ["typography", "sans-serif", "history"],
    content: [
      "Sans-serif typography evolved from industrial utility into a core tool for modern identity systems.",
      "Its flexibility across print and screen made it central to Swiss design methods.",
      "Current digital platforms continue this trajectory through variable fonts and responsive type scales.",
    ],
  },
  {
    id: "10",
    title: "TYPOGRAPHIC HIERARCHY IN SWISS DESIGN",
    excerpt: "Understanding how Swiss designers establish clear typographic hierarchies to guide readers through content with precision and clarity.",
    date: "January 28, 2025",
    readTime: "5 min read",
    category: "Typography",
    slug: "typographic-hierarchy",
    image: blogImages.poster,
    author: "Sophie Keller",
    tags: ["typography", "hierarchy", "layout"],
    content: [
      "Hierarchy is built through scale, spacing, weight, and rhythm rather than ornament.",
      "A predictable typographic system reduces cognitive load and improves scanning.",
      "This is particularly important for product dashboards and long-form editorial content.",
    ],
  },
  {
    id: "11",
    title: "CHOOSING TYPEFACES FOR DIGITAL PRODUCTS",
    excerpt: "A practical guide to selecting and pairing typefaces for digital products using Swiss Design principles as a foundation.",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Typography",
    slug: "typefaces-digital-products",
    image: blogImages.typography,
    author: "Anna Hoffmann",
    tags: ["typography", "product-design", "ui"],
    content: [
      "Typeface choices should start with interface constraints, not trend boards.",
      "Swiss-inspired selection emphasizes legibility, structural contrast, and consistency.",
      "Testing in real UI contexts is the fastest way to validate type decisions.",
    ],
  },
  {
    id: "12",
    title: "RESPONSIVE GRID SYSTEMS FOR THE WEB",
    excerpt: "How to apply Swiss grid principles to responsive web design, creating flexible yet structured layouts across devices.",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Grid Systems",
    slug: "responsive-grid-systems",
    image: blogImages.featured,
    author: "Marc Brunner",
    tags: ["grid-systems", "responsive", "web"],
    content: [
      "Responsive grids should preserve rhythm while adapting column count and spacing.",
      "When spacing tokens and content widths are systematized, layouts remain coherent across breakpoints.",
      "The goal is flexible structure, not rigid templates.",
    ],
  },
  {
    id: "13",
    title: "THE PRINCIPLES OF SWISS DESIGN",
    excerpt: "An exploration of the core principles that define Swiss Design and how they continue to influence modern practice.",
    date: "May 20, 2024",
    readTime: "6 min read",
    category: "Design Theory",
    slug: "principles-of-swiss-design",
    image: blogImages.hero,
    author: "Emma Schmidt",
    tags: ["swiss-design", "principles", "design-theory"],
    content: [
      "Swiss design prioritizes objective communication over expressive decoration.",
      "Its pillars include grid systems, typographic hierarchy, and disciplined use of space.",
      "These principles remain practical because they improve clarity under real product constraints.",
    ],
  },
  {
    id: "14",
    title: "GRID SYSTEMS: THE FOUNDATION OF MODERN DESIGN",
    excerpt: "A historical and practical view of grid systems and their role in balanced composition.",
    date: "April 15, 2024",
    readTime: "7 min read",
    category: "Design Theory",
    slug: "grid-systems-foundation",
    image: blogImages.featured,
    author: "Thomas Weber",
    tags: ["grid-systems", "composition", "design-theory"],
    content: [
      "Grids reduce arbitrary placement and help teams make repeatable design decisions.",
      "They improve both visual coherence and production efficiency across channels.",
      "Good grids support experimentation by providing a clear baseline.",
    ],
  },
  {
    id: "15",
    title: "TYPOGRAPHY HIERARCHY: CREATING VISUAL ORDER",
    excerpt: "Understanding the principles of typographic hierarchy and how it guides readers through a composition.",
    date: "March 28, 2024",
    readTime: "5 min read",
    category: "Design Theory",
    slug: "typography-hierarchy",
    image: blogImages.typography,
    author: "Lukas Müller",
    tags: ["typography", "hierarchy", "design-theory"],
    content: [
      "Hierarchy communicates importance before the first sentence is fully read.",
      "Consistent heading scales and spacing create predictable reading paths.",
      "This principle is essential in both editorial systems and application interfaces.",
    ],
  },
  {
    id: "16",
    title: "NEGATIVE SPACE IN DESIGN",
    excerpt: "Exploring the power of negative space and how it contributes to clarity, emphasis, and rhythm.",
    date: "February 12, 2024",
    readTime: "4 min read",
    category: "Design Theory",
    slug: "negative-space-design",
    image: blogImages.studio,
    author: "Sophie Keller",
    tags: ["negative-space", "composition", "design-theory"],
    content: [
      "Negative space is an active structural element, not empty leftover area.",
      "Strategic whitespace improves focus and strengthens visual relationships.",
      "Teams often gain better results by removing elements than by adding more.",
    ],
  },
  {
    id: "17",
    title: "JOSEF MÜLLER-BROCKMANN AND THE MODULAR GRID",
    excerpt: "A look at Müller-Brockmann's pioneering work with modular grids and its relevance today.",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Grid Systems",
    slug: "muller-brockmann-modular-grid",
    image: blogImages.poster,
    author: "Marc Brunner",
    tags: ["grid-systems", "history", "muller-brockmann"],
    content: [
      "Müller-Brockmann showed how modular systems can produce both order and expressive variation.",
      "His approach remains useful for editorial systems and component-driven product teams.",
      "The key idea is consistency of structure, not sameness of output.",
    ],
  },
  {
    id: "18",
    title: "BREAKING THE GRID: WHEN AND HOW",
    excerpt: "Understanding when to break grid systems for emphasis while preserving coherence.",
    date: "October 5, 2024",
    readTime: "5 min read",
    category: "Grid Systems",
    slug: "breaking-the-grid",
    image: blogImages.video,
    author: "Anna Hoffmann",
    tags: ["grid-systems", "layout", "composition"],
    content: [
      "Breaking the grid works when it is intentional and contrasts with a clear baseline.",
      "Without a stable system, disruption reads as inconsistency rather than emphasis.",
      "Use controlled exceptions to direct attention to critical content.",
    ],
  },
  {
    id: "19",
    title: "BASEL ART FAIR: BRAND EVOLUTION",
    excerpt: "Exploring the process and outcomes of a comprehensive visual identity for the Basel Art Fair.",
    date: "April 22, 2024",
    readTime: "7 min read",
    category: "Case Studies",
    slug: "basel-art-fair-case-study",
    image: blogImages.studio,
    author: "Thomas Weber",
    tags: ["case-study", "branding", "art-fair"],
    content: [
      "The project required a system flexible enough for exhibitors while remaining unmistakably coherent.",
      "A modular identity kit enabled rapid rollout across signage, print, and digital channels.",
      "The result improved consistency and reduced production turnaround.",
    ],
  },
  {
    id: "20",
    title: "SWISS FILM FESTIVAL: IDENTITY DESIGN PROCESS",
    excerpt: "A case study on developing identity, motion graphics, and campaign assets for an annual festival.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    slug: "swiss-film-festival-case-study",
    image: blogImages.video,
    author: "Lukas Müller",
    tags: ["case-study", "branding", "film-festival"],
    content: [
      "The identity had to perform in trailers, social clips, and physical venue materials.",
      "A typographic-led motion system ensured visual continuity across formats.",
      "The campaign improved recognition and audience engagement across channels.",
    ],
  },
  {
    id: "21",
    title: "MINIMALIST PACKAGING: FROM CONCEPT TO SHELF",
    excerpt: "The journey of creating a minimalist packaging system for a premium skincare brand.",
    date: "February 5, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    slug: "minimalist-packaging-case-study",
    image: blogImages.poster,
    author: "Sophie Keller",
    tags: ["case-study", "packaging", "branding"],
    content: [
      "Packaging decisions were driven by shelf clarity, sustainability, and production constraints.",
      "A reduced visual language strengthened premium perception while simplifying manufacturing.",
      "The final system scaled cleanly across product variants.",
    ],
  },
  {
    id: "22",
    title: "CIRCULAR TYPE FOUNDRY: DIGITAL EXPERIENCE",
    excerpt: "A case study on creating identity and digital experience for a contemporary type foundry.",
    date: "January 18, 2024",
    readTime: "5 min read",
    category: "Case Studies",
    slug: "circular-type-foundry-case-study",
    image: blogImages.typography,
    author: "Marc Brunner",
    tags: ["case-study", "digital", "typography"],
    content: [
      "The product needed to showcase specimens while enabling practical licensing workflows.",
      "A strong typographic grid enabled expressive previews without compromising usability.",
      "The redesign improved conversion and reduced support requests.",
    ],
  },
  {
    id: "23",
    title: "THE EVOLUTION OF MINIMALISM",
    excerpt: "Tracing the development of minimalist design from its origins to contemporary application.",
    date: "December 10, 2023",
    readTime: "6 min read",
    category: "Design Theory",
    slug: "evolution-of-minimalism",
    image: blogImages.studio,
    author: "Anna Hoffmann",
    tags: ["minimalism", "history", "design-theory"],
    content: [
      "Minimalism matured from an aesthetic stance into a communication strategy.",
      "Its success depends on typographic rigor and structural discipline.",
      "Today it remains effective when paired with clear content and strong hierarchy.",
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: BlogPost["category"]) {
  return blogPosts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string) {
  const normalized = tag.toLowerCase()
  return blogPosts.filter((post) => post.tags.some((candidate) => candidate.toLowerCase() === normalized))
}

export function getRelatedPosts(post: BlogPost, limit = 2) {
  return blogPosts
    .filter(
      (candidate) =>
        candidate.slug !== post.slug &&
        (candidate.category === post.category || candidate.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, limit)
}
