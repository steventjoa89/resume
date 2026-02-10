import { FaLinkedin } from "react-icons/fa";
import { ILink } from "../../types";

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

export const NAV_MENUS: ILink[] = [
  { title: "Home", href: "#home-section" },
  { title: "About Me", href: "#about-section" },
  { title: "Resume", href: "#resume-section" },
  { title: "Services", href: "#services-section" },
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
