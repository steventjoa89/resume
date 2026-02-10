"use client";

import { Typewriter } from "react-simple-typewriter";

function HeroTyping() {
  return (
    <p className="text-center max-w-lg text-xl md:text-2xl">
      I am a{" "}
      <span className="font-semibold text-rose-400 underline underline-offset-4 tracking-wide">
        <Typewriter
          words={[
            "Website Freelancer",
            "Frontend Developer",
            "Fullstack Web Developer",
            "UI/UX Enthusiast",
            "React Developer",
            "Web Problem Solver",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500} // time before typing next word
        />
      </span>
    </p>
  );
}

export default HeroTyping;
