import { NAV_MENUS } from "@/config/data";
import React from "react";
import { ILink } from "../../../../types";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 z-60 w-full bg-neutral-800 shadow-xl shadow-black/5 transition-all duration-300 ease-in-out
          ${isMenuOpen ? "h-80 overflow-hidden" : "h-0 overflow-hidden"}
        `}
    >
      <div className="flex items-center justify-end p-4">
        <button
          className="text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoClose />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4 text-base">
        {NAV_MENUS.map((link: ILink) => (
          <Link
            key={link.title}
            href={link.href}
            className="py-1 px-3 hover:text-rose-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
