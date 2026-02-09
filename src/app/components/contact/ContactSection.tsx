import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactTile from "./ContactTile";
import { IconType } from "react-icons";
import { ADDRESS, EMAIL, MOBILE_NO } from "@/config/data";
import ContactForm from "./ContactForm";

export type ContactTileData = {
  icon: IconType;
  title: string;
  info: string;
};

function ContactSection() {
  const contactTiles: ContactTileData[] = [
    {
      title: "Address",
      info: ADDRESS,
      icon: FaMapMarkerAlt,
    },
    {
      title: "Phone",
      info: MOBILE_NO,
      icon: FaPhoneAlt,
    },
    {
      title: "Email",
      info: EMAIL,
      icon: FaEnvelope,
    },
  ];

  return (
    <div id="contact-section" className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl lg:text-5xl tracking-wide font-extralight">
          Contact Me
        </h3>
        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>

        <p className="mt-6 text-sm md:text-base text-gray-400 max-w-xl">
          Feel free to reach out for collaboration, job opportunities, or just a
          friendly chat about technology and software development.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          {contactTiles.map((tile) => (
            <ContactTile key={tile.title} {...tile} />
          ))}
        </div>
        <div className="col-span-2">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 transition">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
