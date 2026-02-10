import React from "react";
import Container from "../Container";
import {
  BiCloud,
  BiCode,
  BiLayerPlus,
  BiPalette,
  BiSearch,
  BiServer,
  BiSolidZap,
} from "react-icons/bi";
import ServiceTile from "./ServiceTile";
import { FiMessageCircle } from "react-icons/fi";

function ServicesSection() {
  const services = [
    {
      icon: BiPalette,
      title: "Web Design & UI/UX",
      description:
        "Design modern, clean, and user-friendly interfaces that convert visitors into customers.",
    },
    {
      title: "Frontend Development",
      icon: BiCode,
      description:
        "Build fast, responsive, and SEO-friendly web apps using React and Next.js.",
    },
    {
      title: "Backend & API Development",
      icon: BiServer,
      description:
        "Develop scalable APIs and backend systems with modern stacks.",
    },
    {
      title: "Full-Stack Applications",
      icon: BiLayerPlus,
      description: "End-to-end development from UI to backend and deployment.",
    },
    {
      title: "Performance Optimization",
      icon: BiSolidZap,
      description: "Improve speed, Core Web Vitals, and Lighthouse scores.",
    },
    {
      title: "SEO & Technical SEO",
      icon: BiSearch,
      description: "Optimize for search engines with SSR and structured data.",
    },
    {
      title: "Deployment & DevOps",
      icon: BiCloud,
      description: "Deploy and maintain apps with CI/CD and cloud platforms.",
    },
    {
      title: "Consulting & Code Review",
      icon: FiMessageCircle,
      description: "Architecture guidance and professional code audits.",
    },
  ];

  return (
    <Container id="services-section">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl lg:text-5xl tracking-wide font-extralight">
          Services
        </h3>
        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>

        <p className="mt-6 text-sm md:text-base text-gray-400 max-w-xl">
          I help businesses and startups design, build, and scale modern web
          applications with a focus on performance, SEO, and great user
          experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceTile key={service.title} {...service} />
        ))}
      </div>
    </Container>
  );
}

export default ServicesSection;
