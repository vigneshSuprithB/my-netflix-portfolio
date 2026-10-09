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
      "A passionate technologist navigating modern web ecosystems, cloud computing, and intelligent systems. Specializing in high-performance full-stack architectures, distributed services, and immersive interactive user experiences.",
    resumeUrl: "#",
    githubUrl: "https://github.com/vigneshSuprithB",
    linkedinUrl: "https://linkedin.com",
    email: "vigneshsuprith@gmail.com",
    photo: "/my-photo.jpg",
    audio: "/netflix.mp3"
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
        institution: "Northumbria University, Newcastle",
        period: "2025 - 2026",
        details: "Specialized in Distributed Software Architectures, Enterprise Cloud Computing, and Emerging Technologies."
      },
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "JNTUA",
        period: "2020 - 2024",
        details: "Core foundations in Algorithms, Systems Engineering, Database Management, and Networking."
      }
    ],
    experience: [
      {
        role: "Full Stack Developer",
        institution: "Enterprise Tech Solutions",
        period: "2024 - Present",
        details: "Architecting cloud-native web applications, containerized microservices, and reactive user interfaces."
      }
    ],
    achievements: [
      { title: "Cloud Architecture Certified", org: "AWS", year: "2025", icon: "Award" },
      { title: "Dean's Honor List", org: "Northumbria", year: "2025", icon: "ShieldCheck" }
    ]
  },

  skillCategories: [
    {
      id: "programming",
      name: "LANGUAGES & CORE",
      skills: [
        { name: "TypeScript / JavaScript", level: "Advanced", icon: "Code2" },
        { name: "Python", level: "Advanced", icon: "Terminal" },
        { name: "Java / C#", level: "Proficient", icon: "TerminalSquare" },
        { name: "SQL & Relational DBs", level: "Advanced", icon: "Database" }
      ]
    },
    {
      id: "frontend",
      name: "FRONTEND & UI",
      skills: [
        { name: "React / Vite / Next.js", level: "Advanced", icon: "Layout" },
        { name: "Tailwind CSS & Styling", level: "Advanced", icon: "Palette" },
        { name: "State Management & Redux", level: "Proficient", icon: "Layers" },
        { name: "Responsive UI/UX", level: "Advanced", icon: "Smartphone" }
      ]
    },
    {
      id: "backend",
      name: "BACKEND & CLOUD",
      skills: [
        { name: "Node.js / Express", level: "Advanced", icon: "Server" },
        { name: "REST & GraphQL APIs", level: "Advanced", icon: "Network" },
        { name: "Docker & Containers", level: "Proficient", icon: "HardDrive" },
        { name: "AWS Cloud Services", level: "Proficient", icon: "Cloud" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Cinematic Portfolio Experience",
      season: "S1:E1",
      match: "99% Match",
      rating: "Top 10",
      duration: "Interactive Platform",
      description: "A streaming-inspired developer showcase featuring custom audio orchestration, 3D card perspective flipping, and tailored user persona routing.",
      tags: ["React", "TypeScript", "Vite", "CSS3 3D", "Web Audio API"],
      githubUrl: "https://github.com/vigneshSuprithB/my-netflix-portfolio",
      badge: "Trending #1"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Hub",
      season: "S1:E2",
      match: "97% Match",
      rating: "Cloud Tech",
      duration: "System Architecture",
      description: "Distributed backend pipeline for orchestrating containerized services with continuous monitoring, telemetry, and automated deployment scripts.",
      tags: ["AWS", "Docker", "Node.js", "CI/CD"],
      githubUrl: "https://github.com/vigneshSuprithB",
      badge: "Architect"
    }
  ]
};