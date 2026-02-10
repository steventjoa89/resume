import Link from "next/link";
import { IFooterMenuSection } from "../../../../types";

interface FooterMenuProps {
  footerMenu: IFooterMenuSection;
}

function FooterMenu({ footerMenu }: FooterMenuProps) {
  return (
    <div
      className={`text-neutral-400 ${footerMenu.title.toLowerCase() === "contact me" ? "col-span-2 sm:col-span-1" : ""}`}
    >
      <h4 className="text-[0.99rem] font-semibold text-neutral-300">
        {footerMenu.title}
      </h4>
      {footerMenu.menus && (
        <ul className="mt-4 space-y-2 text-sm">
          {footerMenu.menus.map((m) => (
            <li key={m.title}>
              <Link href={m.href} className="hover:text-rose-400">
                {m.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {footerMenu.paragraphs && (
        <div className="mt-4 space-y-2 text-sm">
          {footerMenu.paragraphs.map((p, i) => (
            <div key={i}>{p}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FooterMenu;
