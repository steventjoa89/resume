import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";
import {
  ADDRESS,
  EMAIL,
  FOOTER_SERVICE_MENUS,
  MOBILE_NO,
  NAV_MENUS,
} from "@/config/data";
import Container from "../Container";
import { IFooterMenuSection } from "../../../../types";

function Footer() {
  const footerMenus: IFooterMenuSection[] = [
    {
      title: "Useful Links",
      menus: NAV_MENUS,
    },
    {
      title: "My Services",
      menus: FOOTER_SERVICE_MENUS,
    },
    {
      title: "Contact Me",
      paragraphs: [ADDRESS, MOBILE_NO, EMAIL],
    },
  ];

  return (
    <footer>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Steven Tjoa Tanudjaja
            </h3>
            <p className="my-3 text-sm text-neutral-400 max-w-md">
              Software Engineer and Web Developer passionate about building
              scalable, high-performance web applications and modern digital
              experiences.
            </p>
            <SocialMedia />
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 text-sm text-neutral-300">
              {footerMenus.map((footerMenu) => (
                <FooterMenu key={footerMenu.title} footerMenu={footerMenu} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
