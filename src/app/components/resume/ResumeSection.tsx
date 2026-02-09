import Container from "../Container";
import AcademicTimeline from "./AcademicTimeline";
import ProfessionalTimeline from "./ProfessionalTimeline";

export type ProfessionalBackground = {
  position: string;
  company: string;
  years: [string, string];
  description: string;
  highlights?: string[];
};

export type AcademicBackground = {
  degree: string;
  field: string;
  university: string;
  country: string;
  years: [number, number];
  description: string;
};

function ResumeTitle({ value }: { value: string }) {
  return (
    <h4 className="text-2xl lg:text-3xl tracking-wide font-extralight">
      {value}
    </h4>
  );
}

function ResumeSection() {
  const professionalBackgrounds: ProfessionalBackground[] = [
    {
      position: "Software Engineer",
      company: "PT. Allianz Life Indonesia",
      years: ["Mar 2022", "May 2024"],
      description:
        "Worked as a Java Developer, Technical Analyst, and Business Analyst delivering enterprise insurance systems.",
      highlights: [
        "Led developer interactions to align business and IT stakeholders",
        "Collaborated with Product Owners and BAs to define system requirements",
        "Applied agile methodologies to deliver high-quality software",
        "Provided middleware and backend support for production systems",
      ],
    },
    {
      position: "Technical Leader",
      company: "PT. Indivara Group",
      years: ["Oct 2021", "Mar 2022"],
      description:
        "Led engineering teams and cloud architecture initiatives for enterprise clients.",
      highlights: [
        "Designed microservices architecture using AWS, Docker, and Kubernetes",
        "Built CI/CD pipelines and improved deployment workflows",
        "Led development team and coordinated with overseas clients",
        "Implemented automated testing to improve delivery quality",
      ],
    },
    {
      position: "Java Developer Engineer",
      company: "PT. Fintopia Indonesia",
      years: ["Aug 2019", "Oct 2021"],
      description:
        "Developed fintech systems and ensured regulatory compliance with OJK and AFPI.",
      highlights: [
        "Led technical design and system architecture",
        "Optimized system performance and scalability",
        "Ensured compliance with financial regulations",
        "Collaborated across teams for system integration",
      ],
    },
    {
      position: "Developer & Operation Manager",
      company: "PT. Prudential Life Assurance",
      years: ["Jul 2016", "Aug 2019"],
      description:
        "Managed development teams and production systems for enterprise insurance platforms.",
      highlights: [
        "Led DevOps and production support operations",
        "Improved system performance and architecture",
        "Conducted performance analysis and optimization",
        "Promoted cross-team collaboration and continuous improvement",
      ],
    },
    {
      position: "Software Analyst & Report Designer",
      company: "PT. Emerio Indonesia",
      years: ["Dec 2015", "Jul 2016"],
      description:
        "Bridged business requirements with technical implementation and reporting systems.",
      highlights: [
        "Developed scalable applications and reports",
        "Worked with React, Angular, PHP, and Flutter",
        "Designed data architecture and reporting pipelines",
        "Delivered high-performance software solutions",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "PT. Sentra Solusi Informatika",
      years: ["Mar 2011", "Dec 2015"],
      description:
        "Built enterprise web applications and managed databases for travel industry systems.",
      highlights: [
        "Developed VB.NET and Laravel applications",
        "Managed MySQL database performance and scalability",
        "Created Crystal Reports and data visualizations",
        "Delivered end-to-end enterprise solutions",
      ],
    },
  ];

  const academicBackgrounds: AcademicBackground[] = [
    {
      degree: "Master",
      field: "International Business",
      university: "University of Wollongong",
      country: "Australia",
      years: [2009, 2010],
      description:
        "Focused on global business strategy, management, and international market analysis.",
    },
    {
      degree: "Bachelor",
      field: "Computer Science",
      university: "University of Wollongong",
      country: "Australia",
      years: [2006, 2008],
      description:
        "Studied software engineering, algorithms, and system design with hands-on programming projects.",
    },
    {
      degree: "High School",
      field: "Science",
      university: "Sang Timur High School",
      country: "Indonesia",
      years: [2003, 2006],
      description: "",
    },
  ];

  return (
    <Container id="resume-section">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl lg:text-5xl tracking-wide font-extralight">
          Resume
        </h3>
        <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex flex-col items-center text-center">
            <ResumeTitle value="Professional Journey" />
            <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>
          </div>

          <ProfessionalTimeline data={professionalBackgrounds} />
        </div>
        <div>
          <div className="flex flex-col items-center text-center">
            <ResumeTitle value="Academic Background" />
            <div className="mx-auto mt-2 w-12 h-0.5 bg-white"></div>
          </div>

          <AcademicTimeline data={academicBackgrounds} />
        </div>
      </div>
    </Container>
  );
}

export default ResumeSection;
