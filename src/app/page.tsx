import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import CtaSection from "./components/cta/CtaSection";
import Divider from "./components/Divider";
import HeroSection from "./components/hero/HeroSection";
import ResumeSection from "./components/resume/ResumeSection";
import ServicesSection from "./components/services/ServicesSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Divider />
      <ResumeSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <CtaSection />
      <Divider />
      <ContactSection />
    </main>
  );
}
