import { ACADEMIC_BACKGROUNDS, PROFESSIONAL_BACKGROUNDS } from "@/config/data";
import Container from "../Container";
import AcademicTimeline from "./AcademicTimeline";
import ProfessionalTimeline from "./ProfessionalTimeline";

function ResumeTitle({ value }: { value: string }) {
  return (
    <h4 className="text-2xl lg:text-3xl tracking-wide font-extralight">
      {value}
    </h4>
  );
}

function ResumeSection() {
  return (
    <Container id="resume-section">
      <div className="flex flex-col items-center text-center">
        <h3
          data-aos="fade-up"
          className="text-4xl lg:text-5xl tracking-wide font-extralight"
        >
          Resume
        </h3>
        <div
          data-aos="fade-up"
          className="mx-auto mt-2 w-12 h-0.5 bg-white"
        ></div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div data-aos="fade-right">
          <div className="flex flex-col items-center text-center">
            <ResumeTitle value="Professional Journey" />
            <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>
          </div>

          <ProfessionalTimeline data={PROFESSIONAL_BACKGROUNDS} />
        </div>
        <div data-aos="fade-left">
          <div className="flex flex-col items-center text-center">
            <ResumeTitle value="Academic Background" />
            <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>
          </div>

          <AcademicTimeline data={ACADEMIC_BACKGROUNDS} />
        </div>
      </div>
    </Container>
  );
}

export default ResumeSection;
