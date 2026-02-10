import React from "react";
import Container from "../Container";
import Image from "next/image";
import { PROJECTS } from "@/config/data";
import PortfolioCard from "./PortfolioCard";

function PortfolioSection() {
  return (
    <Container id="portfolio-section">
      <div className="flex flex-col items-center text-center">
        <h3
          data-aos="fade-up"
          className="text-4xl lg:text-5xl tracking-wide font-extralight"
        >
          Portfolio
        </h3>
        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>

        <p
          data-aos="fade-up"
          className="mt-6 text-sm md:text-base text-neutral-400 max-w-xl"
        >
          Here are some of the projects I’ve built, highlighting my skills in
          frontend, backend, and full-stack development with a focus on clean
          architecture and UX.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <PortfolioCard key={i} {...p} />
        ))}
      </div>
    </Container>
  );
}

export default PortfolioSection;
