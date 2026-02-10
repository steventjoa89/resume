"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation only once (better UX + SEO)
      easing: "ease-out-cubic",
    });
  }, []);

  return null;
}

export default AOSProvider;
