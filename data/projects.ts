export type Project = {
  slug: string
  title: string
  category: string
  year: string
  shortDescription: string
  overview: string
  challenge: string
  outcome: string
  services: string[]
  tech: string[]
  liveUrl?: string
  coverImage: string
  accent: string
}

export const projects: Project[] = [
  {
    slug: "roxana-medical",
    title: "Roxana Medical",
    category: "Medical Website",
    year: "2025",
    shortDescription:
      "A clean and trustworthy medical website designed to communicate services clearly.",
    overview:
      "Roxana Medical was built as a business-facing healthcare website.",
    challenge:
      "Present medical content in a simple but professional way.",
    outcome:
      "A cleaner and more modern structure.",
    services: [
      "Webflow Development",
      "Responsive Build",
      "UI Design",
    ],
    tech: ["Webflow", "CMS", "SEO"],
    liveUrl: "https://roxanamed.com",
    coverImage: "/images/projects/roxana-cover.jpg",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    slug: "irfan-invest",
    title: "Irfan Invest",
    category: "Investment Website",
    year: "2025",
    shortDescription:
      "A modern investment-focused website with clean structure.",
    overview:
      "Designed to improve brand trust and clarity.",
    challenge:
      "Create a professional financial UI.",
    outcome:
      "A more polished and structured site.",
    services: [
      "Webflow Development",
      "Responsive Design",
    ],
    tech: ["Webflow", "SEO"],
    liveUrl: "https://irfaninvest.webflow.io",
    coverImage: "/images/projects/irfan-cover.jpg",
    accent: "from-fuchsia-500/20 to-purple-500/10",
  },
]

export const featuredProjects = projects
