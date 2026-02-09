import ContactSection from "./components/contact/ContactSection";
import CtaSection from "./components/cta/CtaSection";
import Divider from "./components/Divider";
import ServicesSection from "./components/services/ServicesSection";

export default function Page() {
  return (
    <main>
      <Divider />
      <ServicesSection />
      <Divider />
      <CtaSection />
      <Divider />
      <ContactSection />
    </main>
  );
}
