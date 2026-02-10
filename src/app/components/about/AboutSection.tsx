import React from "react";
import Container from "../Container";
import AboutMeCard from "./AboutMeCard";
import AboutMeInfo from "./AboutMeInfo";

function AboutSection() {
  return (
    <Container id="about-section">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl lg:text-5xl tracking-wide font-extralight">
          About Me
        </h3>
        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>

        <p className="mt-6 text-sm md:text-base text-neutral-400 max-w-3xl">
          Web-focused software engineer building fast, scalable, and
          SEO-friendly web applications with modern technologies and a strong
          emphasis on performance and user experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        <AboutMeCard />
        <AboutMeInfo />
      </div>
    </Container>
  );
}

export default AboutSection;
