import React from "react";
import Container from "../Container";

import ServiceTile from "./ServiceTile";
import { SERVICES } from "@/config/data";
import ServiceBanner from "./ServiceBanner";

function ServicesSection() {
  return (
    <Container id="services-section">
      <div className="flex flex-col items-center text-center">
        <h3
          data-aos="fade-up"
          className="text-4xl lg:text-5xl tracking-wide font-extralight"
        >
          Services
        </h3>
        <div
          data-aos="fade-up"
          className="mx-auto mt-2 w-12 h-0.5 bg-white"
        ></div>

        <p
          data-aos="fade-up"
          className="mt-6 text-sm md:text-base text-neutral-400 max-w-xl"
        >
          I help businesses and startups design, build, and scale modern web
          applications with a focus on performance, SEO, and great user
          experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <ServiceTile key={service.title} {...service} />
        ))}
      </div>

      <ServiceBanner />
    </Container>
  );
}

export default ServicesSection;
