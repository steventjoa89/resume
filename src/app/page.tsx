import ContactSection from "./components/contact/ContactSection";
import CtaSection from "./components/cta/CtaSection";
import Divider from "./components/Divider";
import ResumeSection from "./components/resume/ResumeSection";
import ServicesSection from "./components/services/ServicesSection";

export default function Page() {
  return (
    <main>
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
