import { IProject } from "../../../../types";
import Image from "next/image";

function PortfolioCard({ title, subtitle, year, image }: IProject) {
  return (
    <div
      data-aos="flip-up"
      className="group cursor-pointer transition-transform duration-300 hover:scale-[1.05]"
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl lg:rounded-2xl bg-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info Row */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm md:text-base font-medium text-white">
            {title}
          </h3>
          <p className="text-xs text-neutral-400">{subtitle}</p>
        </div>

        <span className="text-xs text-neutral-500">{year}</span>
      </div>
    </div>
  );
}

export default PortfolioCard;
