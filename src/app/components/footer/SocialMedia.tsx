import { SOCIAL_MEDIAS } from "@/config/data";
import Link from "next/link";

function SocialMedia({ iconColor }: { iconColor?: string }) {
  // Base classes
  let divClassName =
    "inline-flex items-center justify-center border rounded-full p-2 cursor-pointer transition-colors duration-300 ease-in-out";

  // Conditional classes
  if (iconColor === "white") {
    divClassName +=
      " text-white border-white hover:text-rose-400 hover:border-rose-400";
  } else {
    divClassName +=
      " text-neutral-500 border-neutral-500 hover:text-rose-400 hover:border-rose-400";
  }

  return (
    <div className="my-4">
      <div className={divClassName}>
        {SOCIAL_MEDIAS.map((sm) => (
          <Link
            key={sm.type}
            href={sm.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <sm.icon size={22} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
