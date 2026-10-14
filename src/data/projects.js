/**
 * Featured projects. Each needs a color (hex) used for the card accent.
 */
export const projects = [
  {
    title: "Abroad Study Consulting",
    subtitle: "Full-Stack Web Platform",
    description:
      "Role-based platform for a study-abroad consultancy. Students apply, managers assign consultants, and consultants track status and notes, with JWT auth across four roles.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "Tailwind CSS"],
    color: "#2DD4BF",
    year: "2023",
    image: "project_bg/ASC_UG.png",
    demo: "https://abroad-study-consulting-next.vercel.app",
    sources: [
      { label: "Frontend", href: "https://github.com/aftabrakinsad/Abroad_Study_Consulting_Next" },
      { label: "API", href: "https://github.com/aftabrakinsad/Abroad_Study_Consulting_Nest" },
    ],
  },
  {
    title: "Banking Management System",
    subtitle: "Full-Stack Web Platform",
    description:
      "Role-based banking platform with four portals. A single master admin approves manager and employee applications and oversees every transaction; employees run a customer request queue and cash desk; customers send money with PIN confirmation. Atomic transfers, hashed credentials, CSRF protection and a full audit log.",
    tech: ["PHP", "MySQL", "JavaScript", "Docker", "TiDB Cloud", "Render"],
    color: "#F59E0B",
    year: "2022",
    image: "project_bg/BMS_WT_UG.jpg",
    demo: "https://bms-wt-aiub.onrender.com",
    sources: [
      { label: "Source", href: "https://github.com/aftabrakinsad/Banking-Managment-System" },
    ],
  },
];