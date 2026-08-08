export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Modeling, simulation & design",
    items: [
      "ABAQUS (structural, thermal, composites, fracture)",
      "ANSYS (mechanical, CFD, thermal, Maxwell)",
      "HFSS, CST Studio, LTSpice, COMSOL",
      "SolidWorks, Geomagic Design X, Avizo, Clewin",
      "MATLAB and Python",
    ],
  },
  {
    title: "Fabrication & prototyping",
    items: [
      "Composite manufacturing (hand layup, vacuum infusion, prepreg)",
      "Micro/nano-fabrication (sputtering, etching, photolithography, RIE)",
      "Printed electronics (screen printing, Voltera NOVA dispenser)",
      "Laser direct writing and polymer / SLS 3D printing",
      "Waterjet and laser cutting",
    ],
  },
  {
    title: "Characterization",
    items: [
      "Mechanical testing (tensile, fracture, vibration, nanoindentation)",
      "CT, SEM, optical microscopy, Raman, profilometry",
      "RF and electrical metrology (VNA, LCR, impedance analyzers)",
      "Four-point probe and probe-station measurements",
    ],
  },
];
