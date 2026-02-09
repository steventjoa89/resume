import React from "react";
import { AcademicBackground } from "./ResumeSection";
import { FaGraduationCap } from "react-icons/fa";

type Props = {
  data: AcademicBackground[];
};

function AcademicTimeline({ data }: Props) {
  return (
    <div className="mt-10 relative max-w-2xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-3 top-0 h-full w-1 bg-rose-500/60 rounded-full" />

      <div className="space-y-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex items-start gap-6">
              {/* Bullet Icon */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-rose-500 text-white rounded-full">
                <FaGraduationCap className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="w-full gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-rose-400 text-sm px-3 py-1 bg-rose-500/20 rounded-full">
                    {item.years[0]} - {item.years[1]}
                  </div>
                  <div className="uppercase text-gray-400 text-xs tracking-wider">
                    {item.degree}
                  </div>
                </div>

                <h4 className="font-semibold text-lg">
                  {item.degree} of {item.field}
                </h4>

                <h5 className="-mt-2.5 text-sm text-gray-400">
                  {item.university} · {item.country}
                </h5>

                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AcademicTimeline;
