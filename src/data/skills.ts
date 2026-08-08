export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Modeling & simulation",
    items: [
      "ABAQUS (structural, thermal, composites, fracture/damage)",
      "ANSYS (mechanical, thermal, Maxwell)",
      "HFSS, CST Studio, LTSpice, COMSOL",
      "SolidWorks, Geomagic Design X, Avizo, Clewin",
      "MATLAB and Python for analysis and sensor signal processing",
    ],
  },
  {
    title: "Fabrication & prototyping",
    items: [
      "Composite manufacturing (hand layup, vacuum infusion, prepreg)",
      "Micro/nanofabrication (sputtering, etching, photolithography, RIE)",
      "Printed electronics (screen printing, Voltera NOVA dispenser)",
      "Polymer/SLS 3D printing, laser direct writing",
      "Waterjet and laser cutting of patterned sheets",
    ],
  },
  {
    title: "Characterization",
    items: [
      "Mechanical, fracture, fatigue, and impact testing (incl. SHPB)",
      "In-situ X-ray CT, synchrotron imaging, DIC, and DVC",
      "SEM, optical microscopy, Raman, DSC, FTIR, profilometry",
      "RF/electrical metrology (VNA, LCR, impedance analyzers)",
    ],
  },
];
