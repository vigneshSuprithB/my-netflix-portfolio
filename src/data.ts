export interface ProjectItem {
  id: number;
  title: string;
  season: string;
  match: string;
  rating: string;
  duration: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: string; icon: string }[];
}

export const portfolioData = {
  hero: {
    badge: "V S E R I E S",
    title: "VIGNESH",
    subtitle: "MSc Computing & Technology • Full Stack & Cloud Developer",
    matchScore: "98% Match",
    year: "2026",
    rating: "18+",
    seasons: "1 Season",
    quality: "Ultra HD 4K",
    synopsis:
      "A passionate technologist navigating modern web ecosystems, cloud computing, and intelligent systems. Specializing in high-performance React architectures, backend APIs, and seamless digital experiences.",
    resumeUrl: "#",
    githubUrl: "https://github.com/vigneshSuprithB",
    linkedinUrl: "https://linkedin.com",
    avatarCutout: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },

  exploreCards: [
    { id: "story", label: "THE FULL STORY", subtitle: "Education & Background", icon: "BookOpen" },
    { id: "skills", label: "SKILL UNIVERSE", subtitle: "Tech Stacks & Tools", icon: "Cpu" },
    { id: "projects", label: "FEATURED EPISODES", subtitle: "Shipped Projects", icon: "PlaySquare" },
    { id: "contact", label: "TO BE CONTINUED...", subtitle: "Get in Touch", icon: "Send" }
  ],

  story: {
    education: [
      {
        degree: "MSc Computing and Technologies",
        institution: "Master's Degree Program",
        period: "2025 - Present",
        details: "Specializing in Software Architecture, Distributed Systems, Cloud Computing, and Emerging Technologies."
      },
      {
        degree: "Bachelor of Technology",
        institution: "Undergraduate Degree",
        period: "Completed",
        details: "Core Computer Science, Algorithms, Data Structures, Database Management, and Web Technologies."
      }
    ],
    achievements: [
      { title: "Full Stack Engineer", org: "Modern Web", year: "2026", icon: "Award" },
      { title: "Cloud Architecture", org: "Distributed Systems", year: "2026", icon: "ShieldCheck" },
      { title: "Vite & React Specialist", org: "Frontend Performance", year: "2026", icon: "Zap" }
    ]
  },

  skillCategories: [
    {
      id: "languages",
      name: "LANGUAGES",
      skills: [
        { name: "TypeScript / JavaScript", level: "Advanced", icon: "Code2" },
        { name: "Python", level: "Proficient", icon: "Terminal" },
        { name: "HTML5 / Modern CSS", level: "Advanced", icon: "Layout" },
        { name: "SQL", level: "Proficient", icon: "Database" }
      ]
    },
    {
      id: "frontend",
      name: "FRONTEND",
      skills: [
        { name: "React 18 / 19", level: "Advanced", icon: "Layers" },
        { name: "Vite Tooling", level: "Advanced", icon: "Zap" },
        { name: "CSS-in-JS & Glassmorphism", level: "Advanced", icon: "Palette" },
        { name: "Responsive UI/UX", level: "Advanced", icon: "Smartphone" }
      ]
    },
    {
      id: "backend",
      name: "BACKEND & APIS",
      skills: [
        { name: "Node.js & Express", level: "Proficient", icon: "Server" },
        { name: "RESTful API Design", level: "Proficient", icon: "Network" },
        { name: "Authentication & JWT", level: "Intermediate", icon: "Lock" }
      ]
    },
    {
      id: "infra",
      name: "INFRA & TOOLS",
      skills: [
        { name: "Git & GitHub CI/CD", level: "Advanced", icon: "GitBranch" },
        { name: "Vercel Deployment", level: "Advanced", icon: "Cloud" },
        { name: "VS Code & Terminal", level: "Advanced", icon: "TerminalSquare" }
      ]
    },
    {
      id: "databases",
      name: "DATABASES",
      skills: [
        { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
        { name: "MongoDB", level: "Intermediate", icon: "Layers" },
        { name: "SQLite", level: "Proficient", icon: "HardDrive" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Netflix Themed Portfolio",
      season: "S1:E1",
      match: "99% Match",
      rating: "Top 10",
      duration: "Active",
      description: "Interactive Netflix UI cinematic developer portfolio built with React, Vite, and modern responsive CSS.",
      tags: ["React", "TypeScript", "Vite", "CSS"],
      githubUrl: "https://github.com/vigneshSuprithB/my-netflix-portfolio",
      liveUrl: "https://vigneshsuprith-portfolio.vercel.app",
      badge: "Trending #1"
    },
    {
      id: 2,
      title: "EDUGENIE AI",
      season: "S1:E2",
      match: "96% Match",
      rating: "Original",
      duration: "Completed",
      description: "An intelligent learning and educational assistant designed to streamline study workflows and automate conceptual understanding.",
      tags: ["Python", "AI / LLM", "Full Stack"],
      githubUrl: "https://github.com/vigneshSuprithB/EDUGENIE_AI",
      badge: "New Release"
    }
  ]
};