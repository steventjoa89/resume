import React from "react";
import { ServicesTileData } from "./ServicesSection";

function ServiceTile({ title, description, icon: Icon }: ServicesTileData) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
      {/* Icon */}
      <div className="flex items-center justify-center text-rose-400">
        <Icon className="w-10 h-10" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold tracking-wide">{title}</h4>

        <p className="mt-1 text-[0.9rem] text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ServiceTile;
