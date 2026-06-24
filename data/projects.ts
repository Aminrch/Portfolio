export type Project = {
  slug: string
  url?: string
  title: string
  category: string
  year?: string
  shortDescription?: string
  overview?: string
  problem?: string
  solution?: string
  result?: string
  tech?: string[]
  coverImage?: string
}

export const projects: Project[] = [
  {
    slug: "roxana-medical",
    url: "https://roxanamed.com",
    title: "Roxana Medical",
    category: "Medical Website",
    year: "2025",
    shortDescription:
      "A modern medical website focused on clarity and trust.",
    overview:
      "Roxana Medical is a healthcare platform designed to present medical services in a clean and structured way for patients.",
    problem:
      "The previous version lacked hierarchy and failed to build trust for users seeking medical information.",
    solution:
      "I redesigned the layout with a strong visual hierarchy, improved spacing, and created a more guided user flow.",
    result:
      "Increased readability, improved trust perception, and a significantly more professional user experience.",
    tech: ["Webflow", "WordPress CMS", "SEO"],
    coverImage: "/images/projects/roxana.jpg",
  },
  {
    slug: "irfan-invest",
    url: "https://irfaninvests.webflow.io",
    title: "Irfan Invest",
    category: "Investment Platform",
    year: "2025",
    shortDescription:
      "A clean investment website designed for credibility.",
    overview:
      "A financial platform focused on presenting investment services in a trustworthy and minimal interface.",
    problem:
      "Users needed clearer structure and better content hierarchy to understand services.",
    solution:
      "I implemented a structured layout system and improved typography for financial clarity.",
    result:
      "Better user understanding and more professional brand perception.",
    tech: ["Webflow", "SEO", "UI build"],
    coverImage: "/images/projects/irfan.jpg",
  },
]
