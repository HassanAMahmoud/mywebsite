export type ExperienceItem = {
  period: string;
  place: string;
  title: string;
  org: string;
  detail?: string;
};

export const currentPositions: ExperienceItem[] = [
  {
    period: "Nov. 2025 – present",
    place: "Thuwal (Saudi Arabia)",
    title: "Postdoctoral Fellow",
    org: "MCEM Lab, King Abdullah University of Science and Technology (KAUST)",
    detail: "Mechanical Engineering / Composite mechanics and sensing",
  },
];

export const previousPositions: ExperienceItem[] = [
  {
    period: "Aug. 2021 – Nov. 2025",
    place: "Thuwal (Saudi Arabia)",
    title: "PhD Student",
    org: "MCEM Lab, KAUST",
    detail: "Dissertation: Ultra-thin, Wireless and Flexible Sensors for Smart Structures",
  },
  {
    period: "Jun. 2025 – Aug. 2025",
    place: "Saudi Arabia",
    title: "R&D Intern",
    org: "EXPEC ARC, Saudi Aramco",
    detail: "Wireless capacitive sensing for low-frequency seismic signal detection",
  },
  {
    period: "Jun. 2019 – Jul. 2021",
    place: "Cairo (Egypt)",
    title: "Graduate Research Assistant",
    org: "Center for Advanced Materials (CAM), The British University in Egypt",
  },
  {
    period: "Sep. 2016 – Jun. 2017",
    place: "Cairo (Egypt)",
    title: "Undergraduate Research Assistant",
    org: "Mechanical Vibrations & Rotor Dynamics Lab, Cairo University",
  },
];
