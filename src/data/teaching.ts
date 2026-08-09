export type TeachingOutcome = {
  title: string;
  venue: string;
  year: string;
  href?: string;
  student?: string;
};

export type TeachingBullet = {
  /** Bold lead-in, e.g. "Teaching Assistant" or "Guest Lecturer" */
  lead?: string;
  /** Course or activity title shown in italics */
  course?: string;
  /** Rest of the line (period, description, reference, etc.) */
  detail: string;
  /** Mentorship outcomes such as student publications */
  outcomes?: TeachingOutcome[];
};

export type TeachingOrg = {
  name: string;
  logo: string;
  items: TeachingBullet[];
};

export const teachingOrgs: TeachingOrg[] = [
  {
    name: "King Abdullah University of Science and Technology (KAUST)",
    logo: "/images/logos/kaust.png",
    items: [
      {
        lead: "Teaching Assistant",
        course: "ME 205: Basic Laboratory Skills Course",
        detail:
          "(Fall 2023, Spring 2024, Fall 2024). Mentored master’s students in experimental research methods, CAD and fabrication tools, microscopy, oscilloscope operation, and key experiments in fluid and solid mechanics.",
      },
      {
        lead: "PhD mentorship",
        detail:
          "Mentoring PhD students Yupeng Shi (capacitive sensing for in-situ curing/aging monitoring of polymer composites) and Alaa Abdou (processing parameters affecting laser-induced graphene microstructure and properties).",
        outcomes: [
          {
            student: "Yupeng Shi",
            title:
              "Embedded Passive Wireless Capacitive Sensing System and Method for Real-Time Curing Monitoring",
            venue: "Provisional U.S. Application (Filed)",
            year: "2026",
          },
          {
            student: "Yupeng Shi",
            title:
              "Printable Multifunctional Interface Enabling Wireless Self Diagnosis: A Pathway Toward Smart Structures",
            venue: "Under review",
            year: "2025",
          },
          {
            student: "Alaa Abdou",
            title:
              "Leveraging Process-Induced Electromechanical Anisotropy of Laser-Induced Graphene for One-shot Engraving of Highly Sensitive Strain Sensors",
            venue: "ACS Applied Nano Materials",
            year: "2026",
            href: "https://doi.org/10.1021/acsanm.5c05242",
          },
        ],
      },
      {
        lead: "Undergraduate research internships",
        detail:
          "Mentored two undergraduate research interns developing flexible and stretchable strain and temperature sensors using laser-induced graphene.",
      },
    ],
  },
];
