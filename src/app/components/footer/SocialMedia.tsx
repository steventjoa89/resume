import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="my-4">
      <div
        className="inline-flex items-center justify-center border border-gray-500 rounded-full p-2 text-gray-500 cursor-pointer
                  transition-colors duration-300 ease-in-out hover:text-rose-400 hover:border-rose-400"
      >
        <Link
          href="https://www.linkedin.com/in/steven-tjoa-641875114/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
