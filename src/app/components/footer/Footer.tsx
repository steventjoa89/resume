import React from "react";
import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";
import { ADDRESS, EMAIL, MOBILE_NO } from "@/config/data";

type FooterMenuItem = {
  title: string;
  href: string;
};

export type FooterMenuSection = {
  title: string;
  menus?: FooterMenuItem[];
  paragraphs?: string[];
};

function Footer() {
  const footerMenus: FooterMenuSection[] = [
    {
      title: "Useful Links",
      menus: [
        // TODO: href link
        { title: "Home", href: "#home-section" },
        { title: "About Me", href: "#about-section" },
        { title: "Resume", href: "#resume-section" },
        { title: "Services", href: "#services-section" },
        { title: "Contact Me", href: "#contact-section" },
      ],
    },
    {
      title: "My Services",
      menus: [
        { title: "Web Development", href: "#services-section" },
        {
          title: "Frontend (React & Next.js)",
          href: "#services-section",
        },
        { title: "API Development", href: "#services-section" },
        { title: "Performance & SEO", href: "#services-section" },
        { title: "System Architecture", href: "#services-section" },
      ],
    },
    {
      title: "Contact Me",
      paragraphs: [ADDRESS, `Phone: ${MOBILE_NO}`, `Email: ${EMAIL}`],
    },
  ];

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Steven Tjoa Tanudjaja
            </h3>
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              Software Engineer and Web Developer passionate about building
              scalable, high-performance web applications and modern digital
              experiences.
            </p>
            <SocialMedia />
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 text-sm text-gray-300">
              {footerMenus.map((footerMenu) => (
                <FooterMenu key={footerMenu.title} footerMenu={footerMenu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
