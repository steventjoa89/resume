import { FaLinkedin } from "react-icons/fa";
import {
  IAcademicBackground,
  ILink,
  IProfessionalBackground,
  IProject,
  IService,
} from "../../types";
import {
  BiCloud,
  BiCode,
  BiLayerPlus,
  BiPalette,
  BiSearch,
  BiServer,
  BiSolidZap,
} from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";

export const SITE_URL = "https://steventjoa.com";

export const MOBILE_NO = "+62 819 058 7 5858";
export const EMAIL = "steventjoa89@gmail.com";
export const ADDRESS = "Taman Kebun Jeruk, West Jakarta, Indonesia";

export const SOCIAL_MEDIAS = [
  {
    type: "linkedin",
    url: "https://www.linkedin.com/in/steven-tjoa-641875114/",
    icon: FaLinkedin,
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Next.js • Tailwind • Stripe",
    year: 2024,
    image: "/projects/ecommerce.avif",
  },
  {
    title: "SaaS Dashboard",
    subtitle: "React • Node • PostgreSQL",
    year: 2023,
    image: "/projects/saas.webp",
  },
  {
    title: "Company Website",
    subtitle: "Next.js • Framer Motion",
    year: 2022,
    image: "/projects/website.jpg",
  },
];

export const NAV_MENUS: ILink[] = [
  { title: "Home", href: "#home-section" },
  { title: "About Me", href: "#about-section" },
  { title: "Resume", href: "#resume-section" },
  { title: "Services", href: "#services-section" },
  { title: "Portfolio", href: "#portfolio-section" },
  { title: "Contact", href: "#contact-section" },
];

export const FOOTER_SERVICE_MENUS: ILink[] = [
  { title: "Web Development", href: "#services-section" },
  {
    title: "Frontend (React & Next.js)",
    href: "#services-section",
  },
  { title: "API Development", href: "#services-section" },
  { title: "Performance & SEO", href: "#services-section" },
  { title: "System Architecture", href: "#services-section" },
];

export const PROFESSIONAL_BACKGROUNDS: IProfessionalBackground[] = [
  {
    position: "Software Engineer",
    company: "PT. Allianz Life Indonesia",
    years: ["Mar 2022", "May 2024"],
    description:
      "Worked as a Java Developer, Technical Analyst, and Business Analyst delivering enterprise insurance systems.",
    highlights: [
      "Led developer interactions to align business and IT stakeholders",
      "Collaborated with Product Owners and BAs to define system requirements",
      "Applied agile methodologies to deliver high-quality software",
      "Provided middleware and backend support for production systems",
    ],
  },
  {
    position: "Technical Leader",
    company: "PT. Indivara Group",
    years: ["Oct 2021", "Mar 2022"],
    description:
      "Led engineering teams and cloud architecture initiatives for enterprise clients.",
    highlights: [
      "Designed microservices architecture using AWS, Docker, and Kubernetes",
      "Built CI/CD pipelines and improved deployment workflows",
      "Led development team and coordinated with overseas clients",
      "Implemented automated testing to improve delivery quality",
    ],
  },
  {
    position: "Java Developer Engineer",
    company: "PT. Fintopia Indonesia",
    years: ["Aug 2019", "Oct 2021"],
    description:
      "Developed fintech systems and ensured regulatory compliance with OJK and AFPI.",
    highlights: [
      "Led technical design and system architecture",
      "Optimized system performance and scalability",
      "Ensured compliance with financial regulations",
      "Collaborated across teams for system integration",
    ],
  },
  {
    position: "Developer & Operation Manager",
    company: "PT. Prudential Life Assurance",
    years: ["Jul 2016", "Aug 2019"],
    description:
      "Managed development teams and production systems for enterprise insurance platforms.",
    highlights: [
      "Led DevOps and production support operations",
      "Improved system performance and architecture",
      "Conducted performance analysis and optimization",
      "Promoted cross-team collaboration and continuous improvement",
    ],
  },
  {
    position: "Software Analyst & Report Designer",
    company: "PT. Emerio Indonesia",
    years: ["Dec 2015", "Jul 2016"],
    description:
      "Bridged business requirements with technical implementation and reporting systems.",
    highlights: [
      "Developed scalable applications and reports",
      "Worked with React, Angular, PHP, and Flutter",
      "Designed data architecture and reporting pipelines",
      "Delivered high-performance software solutions",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "PT. Sentra Solusi Informatika",
    years: ["Mar 2011", "Dec 2015"],
    description:
      "Built enterprise web applications and managed databases for travel industry systems.",
    highlights: [
      "Developed VB.NET and Laravel applications",
      "Managed MySQL database performance and scalability",
      "Created Crystal Reports and data visualizations",
      "Delivered end-to-end enterprise solutions",
    ],
  },
];

export const ACADEMIC_BACKGROUNDS: IAcademicBackground[] = [
  {
    degree: "Master",
    field: "International Business",
    university: "University of Wollongong",
    country: "Australia",
    years: [2009, 2010],
    description:
      "Focused on global business strategy, management, and international market analysis.",
  },
  {
    degree: "Bachelor",
    field: "Computer Science",
    university: "University of Wollongong",
    country: "Australia",
    years: [2006, 2008],
    description:
      "Studied software engineering, algorithms, and system design with hands-on programming projects.",
  },
  {
    degree: "High School",
    field: "Science",
    university: "Sang Timur High School",
    country: "Indonesia",
    years: [2003, 2006],
    description: "",
  },
];

export const SERVICES: IService[] = [
  {
    icon: BiPalette,
    title: "Web Design & UI/UX",
    description:
      "Design modern, clean, and user-friendly interfaces that convert visitors into customers.",
  },
  {
    title: "Frontend Development",
    icon: BiCode,
    description:
      "Build fast, responsive, and SEO-friendly web apps using React and Next.js.",
  },
  {
    title: "Backend & API Development",
    icon: BiServer,
    description:
      "Develop scalable APIs and backend systems with modern stacks.",
  },
  {
    title: "Full-Stack Applications",
    icon: BiLayerPlus,
    description: "End-to-end development from UI to backend and deployment.",
  },
  {
    title: "Performance Optimization",
    icon: BiSolidZap,
    description: "Improve speed, Core Web Vitals, and Lighthouse scores.",
  },
  {
    title: "SEO & Technical SEO",
    icon: BiSearch,
    description: "Optimize for search engines with SSR and structured data.",
  },
  {
    title: "Deployment & DevOps",
    icon: BiCloud,
    description: "Deploy and maintain apps with CI/CD and cloud platforms.",
  },
  {
    title: "Consulting & Code Review",
    icon: FiMessageCircle,
    description: "Architecture guidance and professional code audits.",
  },
];
