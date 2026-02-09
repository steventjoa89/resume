import React from "react";
import { ProfessionalBackground } from "./ResumeSection";
import { FaBriefcase } from "react-icons/fa";

type Props = {
  data: ProfessionalBackground[];
};

function ProfessionalTimeline({ data }: Props) {
  return (
    <div className="mt-10 relative max-w-2xl mx-auto">
      <div className="absolute left-4 top-0 h-full w-1 bg-rose-500/60 rounded-full" />

      <div className="space-y-10">
        {data.map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-rose-500 text-white rounded-full">
              <FaBriefcase className="w-4 h-4" />
            </div>

            <div>
              <h4 className="font-semibold text-lg">{item.position}</h4>
              <p className="text-sm text-gray-400">
                {item.company} · {item.years[0]} – {item.years[1]}
              </p>

              <p className="mt-1 text-sm text-gray-400 max-w-md">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="mt-2 list-disc list-inside text-sm text-gray-400 space-y-1">
                  {item.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalTimeline;
