import SocialMedia from "../footer/SocialMedia";
import HeroTyping from "./HeroTyping";

function HeroSection() {
  return (
    <section
      id="home-section"
      className="relative bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-screen space-y-4">
        <div className="relative">
          <h3 className="text-center font-urbanist text-2xl/15 md:text-3xl/18 mt-4 max-w-2xl">
            Hi, my name is
          </h3>
          <h2 className="text-center font-urbanist text-3xl sm:text-4xl md:text-5xl -mt-3 font-bold max-w-2xl leading-tight">
            Steven Tjoa Tanudjaja
          </h2>
        </div>

        <HeroTyping />

        <div className="max-w-lg flex items-center justify-center">
          <SocialMedia iconColor="white" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
