export type TeachingItem = {
  role: string;
  course: string;
  institution: string;
  period: string;
  detail?: string;
};

export type MentorshipItem = {
  title: string;
  detail: string;
};

export const teaching: TeachingItem[] = [
  {
    role: "Teaching Assistant",
    course: "ME 205: Basic Laboratory Skills Course",
    institution: "Mechanical Engineering, KAUST",
    period: "Fall 2023, Spring 2024, Fall 2024",
    detail:
      "Mentored master’s students in experimental research methods, CAD and fabrication tools, microscopy, oscilloscope operation, and key experiments in fluid and solid mechanics.",
  },
];

export const mentorship: MentorshipItem[] = [
  {
    title: "PhD mentorship",
    detail:
      "Mentoring two PhD students on capacitive sensing for in-situ curing/aging monitoring of polymer composites, and on processing parameters affecting laser-induced graphene microstructure and properties (KAUST).",
  },
  {
    title: "Undergraduate research internships",
    detail:
      "Mentored two undergraduate research interns developing flexible and stretchable strain and temperature sensors using laser-induced graphene (KAUST).",
  },
];
