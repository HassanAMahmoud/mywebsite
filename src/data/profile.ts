export const profile = {
  name: "Hassan A. Mahmoud",
  title: "Postdoctoral Fellow · MCEM Lab, KAUST",
  headline:
    "Architected material mechanics, hands-on fabrication, and computational modeling for smart sensing and composite structures",
  affiliation:
    "Mechanics of Composites for Energy and Mobility (MCEM), King Abdullah University of Science and Technology",
  location: "Thuwal, Saudi Arabia",
  address: "KAUST, Thuwal, Kingdom of Saudi Arabia",
  institution: "KAUST",
  portrait: "/images/portrait.png",
  /** Replace cover-placeholder.svg with your banner image (e.g. cover.jpg). */
  cover: "/images/cover-placeholder.svg",
  email: "hassan.mahmoud@kaust.edu.sa",
  links: {
    linkedin: "https://www.linkedin.com/in/hassanamahmoud",
    orcid: "https://orcid.org/0000-0001-8553-4914",
    scholar: "https://scholar.google.com.eg/citations?user=jcaLshEAAAAJ&hl=en",
    cv: "/cv/Hassan-A-Mahmoud-CV.pdf",
    researchPdf: "/cv/Hassan-Mahmoud-Research-Work.pdf",
  },
  interests: [
    "Geometry-driven mechanics of architected materials and composites",
    "Flexible and printable wireless sensors for structural health monitoring",
    "Fabricate–test–model workflows (3D printing, laser/waterjet, microfabrication)",
    "In-situ characterization (X-ray CT/synchrotron, DIC/DVC)",
    "Fracture, fatigue, and toughness tailoring of bonded joints",
    "IoT-enabled sensing for energy and composite infrastructure",
  ],
  about: `Hello! I am Hassan A. Mahmoud, a Postdoctoral Fellow in the Mechanics of Composites for Energy and Mobility (MCEM) Lab at King Abdullah University of Science and Technology (KAUST). I work at the intersection of architected material mechanics, hands-on fabrication, and computational modeling — closing the loop from geometry-driven design to fabrication, mechanical testing, and finite-element prediction.`,
  bio: `I completed my PhD in Mechanical Engineering at KAUST (2025) with a dissertation on ultra-thin, wireless, and flexible sensors for smart structures. Before that, I earned my MSc (2021) and BSc (2017) in Mechanical Design and Production from Cairo University, Faculty of Engineering.

My doctoral and postdoctoral research includes printable and e-tattoo wireless strain sensors, cracked-based RFID sensors, laser-induced graphene temperature sensors, wearable capacitive sensing, and geometry-driven toughness enhancement of composite joints (including auxetic stiffeners and microarchitectured interfaces). I combine fabrication experience with mechanical, fracture, fatigue, and dynamic characterization — including in-situ X-ray CT, synchrotron imaging, and DIC/DVC — and structural finite-element modeling in ABAQUS.

I am currently leading printable wireless piezoelectric sensing platforms for SHM, developing sensing methods for loading, degradation, curing, and damage in composites, and contributing to non-metallic pipeline inspection under the ENERCOMP consortium with Saudi Aramco.`,
  education: [
    {
      school: "King Abdullah University of Science and Technology (KAUST)",
      degree: "PhD in Mechanical Engineering",
      year: "2025",
      detail:
        "Dissertation: Ultra-thin, Wireless and Flexible Sensors for Smart Structures",
    },
    {
      school: "Cairo University, Faculty of Engineering",
      degree: "MSc in Mechanical Design and Production",
      year: "2021",
      detail:
        "Thesis: Analysis of Composite Bolted Connections under Out-of-Plane Loading",
    },
    {
      school: "Cairo University, Faculty of Engineering",
      degree: "BSc in Mechanical Design and Production",
      year: "2017",
      detail:
        "Thesis: Reverse Engineering, Static and Dynamic Analysis of Turbocharger",
    },
  ],
} as const;
