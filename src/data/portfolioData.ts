import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Isabella Carranzani Borot",
    title: "Senior Frontend Engineer",
    tagline: "I build scalable, well-tested UI components and design systems.",
    bio: "Six years of frontend experience, most recently with React and TypeScript. Currently on the core UI team at Oracle NetSuite, owning shared platform components. Previously introduced a Storybook-based design system and drove part of a legacy-to-React migration at Lengow.",
    location: "Barcelona, Spain",
    email: "icabo1598@gmail.com",
    cvUrl: "/cv.pdf",
    contactIntro: "Questions, collaborations, or a chat about frontend work: send a message or find me on LinkedIn.",
    avatarUrl: '/avatar.jpeg',
  },
  socials: [
    { platform: "github", label: "GitHub", url: "https://github.com/Carranzani98" },
    { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/isabella-carranzani-borot-a540ba1b0/" },
    { platform: "email", label: "Email", url: "mailto:icabo1598@gmail.com" },
  ],
  skills: [
    { category: "Programming",icon: "code", skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Python"] },
    { category: "Frameworks & Libraries",icon: "layers", skills: ["React", "Redux", "Preact", "Oracle JET", "AngularJS"] },
    { category: "Testing", icon: "test", skills: ["Jest", "React Testing Library", "Enzyme", "E2E Testing"] },
    { category: "Design Systems & UI", icon: "design", skills: ["Storybook", "Chromatic", "Figma", "Component Libraries"] },
    { category: "Tools & AI", icon: "tools",skills: ["Git", "Jenkins", "JIRA", "GitHub Copilot", "Codex", "ChatGPT", "Gemini"] },
    { category: "Spoken Languages", icon: "languages", skills: ["English (advanced)", "Spanish (native)", "Catalan (native)"] },
  ],
  timeline: [
    {
      type: "work",
      title: "Software Engineer (Frontend)",
      organization: "Oracle NetSuite",
      period: "Jul 2024 – Present",
      current: true,
      highlights: [
        "Own the Record List Template and Smart Filters, core UI components used across the platform.",
        "Deliver features end to end, covering development plus unit and E2E testing.",
        "Use AI tools (Codex, Gemini, ChatGPT) to speed up Jest test generation, refactoring, and code review.",
        "Earlier in the role: built authentication UIs (SSO, OAuth2) with Oracle JET and led their move from a legacy architecture to a decoupled component structure.",
      ],
    },
    {
      type: "work",
      title: "Affiliated Teaching Staff, Frontend Development",
      organization: "Universitat Oberta de Catalunya (UOC)",
      period: "Feb 2024 – Feb 2025",
      highlights: [
        "Mentored students on practical frontend projects and evaluated code quality and best practices.",
      ],
    },
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Lengow",
      period: "Jan 2022 – Jul 2024",
      highlights: [
        "Drove frontend architecture in a migration of roughly 50–60% of the legacy codebase to React and TypeScript.",
        "Introduced Storybook and Chromatic and built the internal component library from scratch.",
        "Maintained and optimized JavaScript, HTML, and CSS for a high-traffic SaaS platform used daily by thousands of clients.",
      ],
    },
    {
      type: "education",
      title: "Master's Degree in Web App and Website Development",
      organization: "Universitat Oberta de Catalunya",
      period: "2022 – 2023",
      highlights: [],
    },
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Beabloo",
      period: "Jan 2020 – Jan 2022",
      highlights: [
        "Built custom client-facing applications from scratch in AngularJS, delivering medium-to-large features independently.",
        "Worked with product designers and managers to turn UX/UI designs into reusable components.",
        "Found and fixed frontend performance bottlenecks.",
      ],
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Engineering",
      organization: "Universitat Pompeu Fabra",
      period: "2016 – 2020",
      highlights: [],
    },
  ],
  projects: [
    {
      title: "KeepTalking",
      description:
        "Language-exchange web app built as my final Master's project. Full-stack, with separate backend and frontend code and a Docker Compose setup.",
      tags: ["React", "TypeScript", "Mantine UI", "PHP", "Docker"],
      repoUrl: "https://github.com/Carranzani98/KeepTalking",
    },
    {
      title: "This portfolio",
      description:
        "My personal site: a Next.js App Router project with a data-driven content file, class-based dark mode, and a contact form backed by a Server Action.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/Carranzani98/Portfolio"
    },
  ],
};