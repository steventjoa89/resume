import {
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import ContactTile from "../contact/ContactTile";
import { ContactTileData } from "../contact/ContactSection";
import { EMAIL, MOBILE_NO } from "@/config/data";

function AboutMeInfo() {
  const aboutMeInfos: ContactTileData[] = [
    { title: "Experience", info: "8+ Years", icon: FaBriefcase },
    { title: "Degree", info: "Computer Science", icon: FaGraduationCap },
    { title: "Based In", info: "Jakarta, Indonesia", icon: FaMapMarkerAlt },
    { title: "Email", info: EMAIL, icon: FaEnvelope },
    { title: "Phone", info: MOBILE_NO, icon: FaPhone },
    {
      title: "Specialty",
      info: "Web Design & Development",
      icon: FaLaptopCode,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h4 className="text-2xl lg:text-3xl tracking-wide">
          Turning Ideas into Digital Experiences
        </h4>

        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>

        <p className="mt-6 text-sm md:text-base text-gray-400 max-w-3xl">
          I am a passionate web designer and developer who loves transforming
          concepts into beautiful, user-friendly digital experiences. With years
          of experience creating responsive websites and interactive interfaces,
          I focus on crafting designs that delight users and help businesses
          grow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutMeInfos.map((ami) => (
          <ContactTile
            key={ami.title}
            title={ami.info}
            info={ami.title}
            icon={ami.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutMeInfo;
