import { FaEnvelope, FaStar } from "react-icons/fa";
import Divider from "../Divider";
import SocialMedia from "../footer/SocialMedia";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { GoDownload } from "react-icons/go";

function AboutMeStatsInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <span className="text-3xl text-rose-400">{value}</span>
      <span className="uppercase text-xs text-neutral-400">{label}</span>
    </div>
  );
}

function AboutMeCard() {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 space-y-4"
    >
      <div className="w-36 h-36 rounded-full border-5 border-rose-500 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/profile.webp"
          alt="Steven Tjoa"
          width={144}
          height={144}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold">Steven Tjoa Tanudjaja</h2>
      {/* Role */}
      <p className="-mt-3 text-sm text-rose-400">Web Designer</p>

      {/* Star */}
      <div className="pb-3 flex items-center justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>

      <Divider />

      {/* Stats */}
      <div className="mt-3 mb-6 px-10 flex w-full justify-between text-sm text-white/80">
        <AboutMeStatsInfo label="Projects" value="146" />
        <AboutMeStatsInfo label="Years" value="8+" />
      </div>

      <Divider />

      <div className="mt-3 mb-6 w-full flex flex-col space-y-4">
        {/* Download CV */}
        <a href="/pdf/resume.pdf" download="resume.pdf">
          <Button label="Download CV" className="w-full" icon={GoDownload} />
        </a>

        {/* Contact Me */}
        <Link href="#contact-section">
          <button className="w-full inline-flex items-center justify-center gap-2 border border-rose-500/40 text-rose-400 hover:border-rose-500 hover:bg-rose-500/10 transition-all duration-200 px-10 py-3 rounded-lg cursor-pointer">
            <FaEnvelope className="text-xl" />
            Contact
          </button>
        </Link>
      </div>

      <Divider />

      <SocialMedia />
    </div>
  );
}

export default AboutMeCard;
