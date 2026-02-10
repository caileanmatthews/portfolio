export const profile = {
  name: "Cailean Matthews",
  title: "Software Engineer",
  bio: "I build performant, accessible web applications with modern tooling. Passionate about clean architecture, developer experience, and shipping products that matter.",
  techStack: [
    "Python",
    "TypeScript",
    "JavaScript",
    "React",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS",
  ],
  email: "matthewsmcailean@gmail.com",
  github: "https://github.com/caileanmatthews",
  linkedin: "https://linkedin.com/in/caileanmatthews",
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "FAIR",
    description:
      "Real-time stock analytics platform consuming live market data and financial news via external APIs, supporting per-stock historical analysis and market-wide summaries. Deployed to AWS EC2 with Dockerized services and an automated CI/CD pipeline using GitHub webhooks.",
    tech: ["React", "FastAPI", "AWS EC2", "Docker", "CI/CD"],
    github: "https://github.com/caileanmatthews",
  },
  {
    title: "Toolbox.AI",
    description:
      "Scalable LLM-powered web application with real-time token streaming for low-latency responses. Features secure OAuth2 authentication and persistent chat history. Won Best UI/UX at the UNC Charlotte CCI Startup Hackathon.",
    tech: ["FastAPI", "React", "OAuth2", "WebSockets", "SQLite"],
    github: "https://github.com/caileanmatthews",
  },
  {
    title: "UNCC Tutor",
    description:
      "Tutoring management platform built with Django following the MVT architecture pattern. Features a PostgreSQL schema supporting complex relationships between students, tutors, and scheduling availability.",
    tech: ["Django", "PostgreSQL", "Agile"],
    github: "https://github.com/caileanmatthews",
  },
];

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    school: "University of North Carolina at Charlotte",
    degree: "M.S. in Computer Science",
    location: "Charlotte, NC",
    period: "Expected May 2027",
  },
  {
    school: "University of North Carolina at Charlotte",
    degree: "B.S. in Computer Science",
    location: "Charlotte, NC",
    period: "Expected May 2026",
    detail: "GPA: 3.8 | Chancellor's List",
  },
  {
    school: "Central Piedmont Community College",
    degree: "Associate of Arts",
    location: "Charlotte, NC",
    period: "May 2024",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "TypeScript", "JavaScript"] },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Django", "RESTful APIs", "OAuth2", "PostgreSQL", "SQLite"],
  },
  { category: "Frontend", skills: ["React", "Tailwind CSS"] },
  {
    category: "Cloud & DevOps",
    skills: ["AWS EC2", "Docker", "Linux", "CI/CD", "GitHub Webhooks"],
  },
];

export interface Leadership {
  organization: string;
  role: string;
  location: string;
  period: string;
  description: string;
}

export const leadership: Leadership[] = [
  {
    organization: "HAVK Club (UNCC)",
    role: "Vice President",
    location: "Charlotte, NC",
    period: "Present",
    description:
      "Coordinate weekly club meetings, technical workshops, and student engineering initiatives.",
  },
];

export const awards = [
  {
    title: "2nd Place Winner & Most Creative",
    event: "HAVK AI and Data Visualization Competition",
  },
  {
    title: "Most Creative Entry",
    event: "HAVK Web Development Competition",
  },
  {
    title: "Best UI/UX",
    event: "UNC Charlotte CCI Startup Hackathon",
  },
];

export const certifications = [
  "DeepLearning.AI & Stanford Online: Supervised Machine Learning: Regression and Classification (Aug 2025)",
];
