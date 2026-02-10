"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { NAV_MENUS } from "@/config/data";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero-section");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: detect active section
  useEffect(() => {
    const sectionIds = NAV_MENUS.map((menu) => menu.href);

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // offset for early highlight

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.querySelector(sectionIds[i]);
        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPosition
        ) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300
          ${scrolled ? "bg-neutral-800/80" : "bg-transparent border-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="#home-section"
            className="text-2xl md:text-3xl tracking-wide"
          >
            Steven
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {NAV_MENUS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`py-1 px-3 transition-colors ${
                    isActive
                      ? "text-rose-400 font-bold"
                      : "text-white hover:text-rose-400"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMenuSharp fontSize={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
    </>
  );
}

export default Navbar;
