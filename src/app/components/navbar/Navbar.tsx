"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ILink } from "../../../../types";
import { IoMenuSharp } from "react-icons/io5";
import { NAV_MENUS } from "@/config/data";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <div className="hidden md:flex gap-3">
            {NAV_MENUS.map((link: ILink) => (
              <Link
                key={link.title}
                href={link.href}
                className="py-1 px-3 hover:text-rose-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
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
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default Navbar;
