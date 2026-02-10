import Button from "../Button";
import Link from "next/link";
import Container from "../Container";

function CtaSection() {
  return (
    <Container id="cta-section">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="text-2xl font-semibold">Like what you see?</h4>
          <p className="text-neutral-400">
            Let’s talk about how I can help you build fast, scalable, and
            SEO-friendly web applications.
          </p>
        </div>

        <Link href="#contact-section">
          <Button label="Let's work together" className="text-sm" />
        </Link>
      </div>
    </Container>
  );
}

export default CtaSection;
