export type NewsItem = {
  slug: string;
  date: string;
  conference: string;
  location: string;
  talkTitle?: string;
  image: string;
  body: string[];
  paperLink?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "ewshm-2026-toulouse",
    date: "14/07/2026",
    conference: "EWSHM 2026 — Young Professionals Challenge Award",
    location: "Toulouse, France",
    talkTitle: "Wireless printed sensors for structural health monitoring",
    image: "/images/news/ewshm-2026.png",
    body: [
      "I had the opportunity to participate in the 12th European Workshop on Structural Health Monitoring (EWSHM 2026) in Toulouse, France.",
      "During the conference, I presented our latest work on wireless printed sensors for structural health monitoring. Our research leverages transfer printing to fabricate conformal wireless sensors that can be integrated onto 3D and geometrically complex structures.",
      "Together with my colleagues Omar Khalifa and Aldyandra Hami Seno, I also demonstrated our “Hybrid Event-Driven Structural Health Monitoring Node with Ultra-Low Power Adaptive Triggering” as part of the Young Professionals Challenge Demonstrations.",
      "I am especially proud that our team received the Young Professionals Challenge Award. A special thank you to Prof. Gilles Lubineau and Prof. Tareq Al-Naffouri for their continuous guidance and encouragement, and to the organizers, judges, and everyone who attended our presentation and demonstration.",
    ],
  },
  {
    slug: "shm-summer-school-tudelft-2026",
    date: "07/2026",
    conference: "SHM Summer School at TU Delft",
    location: "TU Delft | Aerospace Engineering, the Netherlands",
    image: "/images/news/summer-school.png",
    body: [
      "Wrapping up an inspiring week at the SHM Summer School at TU Delft | Aerospace Engineering!",
      "It was a fantastic week of learning, insightful discussions, and networking — with lots of new ideas, great conversations, and valuable connections along the way.",
      "Thanks to the organizers, speakers, and participants for making it such a great experience. The program focused on the era of AI and digitalization for structural applications: intelligent monitoring, analysis, and decisions.",
    ],
  },
  {
    slug: "mecc-19-enercomp-2025",
    date: "17/11/2025",
    conference: "MECC 19 with the ENERCOMP team",
    location: "Dhahran, KSA",
    image: "/images/news/mecc-19.png",
    body: [
      "It was a great first day at MECC with the ENERCOMP team! Thank you to everyone who visited our stand, asked questions, and shared ideas.",
      "I enjoyed the conversations and connections around how ENERCOMP is advancing innovation in energy composites and smart monitoring. Looking forward to more discussions throughout the event.",
    ],
  },
  {
    slug: "phd-defense-2025",
    date: "09/11/2025",
    conference: "PhD Defense at KAUST",
    location: "KAUST, Thuwal, Saudi Arabia",
    talkTitle: "Ultra-thin, Wireless, and Flexible Sensors for Smart Structures",
    image: "/images/news/phd-defense-2025.png",
    body: [
      "I am pleased to announce that I have successfully defended my PhD at KAUST. Thesis: Ultra-thin, Wireless, and Flexible Sensors for Smart Structures.",
      "This achievement would not have been possible without the support and mentorship of many individuals. I would like to extend my deepest appreciation to Prof. Gilles Lubineau for his guidance, encouragement, and trust throughout my doctoral journey.",
      "I am grateful to my thesis committee members — Prof. Eric Feron, Prof. Shehab Ahmed Elsayed from KAUST, and Prof. Ferri Aliabadi from Imperial College London — for their time, thoughtful feedback, and constructive discussions that significantly contributed to the quality of this work.",
      "I am also grateful to my collaborators and colleagues in the group for their support, productive discussions, and shared efforts. I am especially grateful to my mentors Dr. Hussein Nesser and Dr. Ahmed Wagih for their continuous support, advice, and encouragement over the years.",
      "This journey has been challenging, rewarding, and deeply meaningful. I am grateful for every step and every person who has been part of it. One more chapter closed, and another one begins.",
    ],
  },
  {
    slug: "sesame-hydrogen-storage-2025",
    date: "15/10/2025",
    conference:
      "In-situ testing experiments for hydrogen storage materials at the SESAME Synchrotron Light Source",
    location: "SESAME Synchrotron Light Source",
    image: "/images/news/sesame-2025.png",
    body: [
      "Following a grant from the SESAME Synchrotron Light Source, I joined our team members Dr. Ahmed Wagih and Karim Chouchen to complete in-situ testing experiments for hydrogen storage materials.",
      "Using SESAME’s beamline capabilities, we observed in real time the behavior of thin-ply CF/PA6 composites under mechanical loading for Type V hydrogen storage tanks. These results provide important insights toward next-generation, high-performance hydrogen storage systems.",
      "I am grateful to SESAME for enabling this research and to KAUST for its continued support. I look forward to further collaboration with the SESAME team.",
    ],
  },
  {
    slug: "aramco-outstanding-performance-2025",
    date: "11/08/2025",
    conference: "Outstanding Performance Award, Aramco Research Center",
    location: "EXPEC ARC / KAUST, Thuwal, Saudi Arabia",
    image: "/images/news/aramco-outstanding-2025.png",
    body: [
      "I am honored to have received the Outstanding Performance Award at the Aramco Research Center.",
      "I recently completed my internship at the Aramco Research Center at KAUST with the Advanced Sensing Team at the EXPEC Advanced Research Center. At the end of the program, student interns presented their work in a competition, and my research was recognized with this award.",
      "I am grateful for this recognition and for the opportunity to contribute during the internship.",
    ],
  },
  {
    slug: "deans-award-2025",
    date: "09/06/2025",
    conference: "Dean's Award 2025",
    location: "KAUST, Thuwal, Saudi Arabia",
    image: "/images/news/deans-award-2024-2025.png",
    body: [
      "I am honored to have received the Dean’s Award again in 2025 at KAUST.",
      "This recognition continues to acknowledge scholarly achievement, dedication to research, and commitment to excellence throughout the PhD journey.",
    ],
  },
  {
    slug: "spie-smart-structures-nde-2025",
    date: "25/03/2025",
    conference: "SPIE Smart Structures + NDE 2025",
    location: "Vancouver, Canada",
    talkTitle:
      "Advanced e-tattoo wireless strain sensors for smart structural health monitoring of composite structures",
    image: "/images/news/spie-2025.png",
    body: [
      "I presented my work at the SPIE Smart Structures + NDE 2025 conference in Vancouver, Canada.",
      "My oral presentation was titled “Advanced e-tattoo wireless strain sensors for smart structural health monitoring of composite structures.”",
      "I also participated in the poster session with my work on “Flexible temperature sensor using laser induced graphene (LIG) based on processing-controlled Seebeck contrast.”",
      "The conference was held in Vancouver from 15 to 19 March 2025 and brought together researchers working on multifunctional materials, sensor systems, NDE, and structural health monitoring.",
    ],
  },
  {
    slug: "bue-invited-talk-2024",
    date: "15/12/2024",
    conference: "Invited Talk — The British University in Egypt",
    location: "Faculty of Engineering, The British University in Egypt",
    talkTitle:
      "Flexible and Printable Wireless Sensors Technologies for Structural, Wearable and Environmental Monitoring Applications",
    image: "/images/news/bue-invited-talk-2024.png",
    body: [
      "It was a nice opportunity to meet old colleagues and present our recent research work on flexible and printable sensors at The British University in Egypt.",
      "I was invited to speak in the workshop “Recent Advances in Manufacturing Engineering: Additive Manufacturing, Post Processing, and Applications,” organized by the Sustainable Materials and Manufacturing Research Group at the Faculty of Engineering.",
      "My talk focused on innovations in flexible and printable wireless sensor technologies for structural, wearable, and environmental monitoring applications.",
    ],
  },
  {
    slug: "ieee-fleps-2024-tampere",
    date: "01/07/2024",
    conference: "IEEE FLEPS 2024",
    location: "Tampere, Finland",
    talkTitle:
      "Integrated Piezoresistivity and Frequency Modulation for High-Sensitivity Printed Capacitive Strain Sensing",
    image: "/images/news/ieee-fleps-2024.png",
    body: [
      "I presented my research at the IEEE FLEPS 2024 conference in Tampere, Finland.",
      "At the conference, I shared my work on “Advancing Wireless Passive Strain Sensor for Structural Integrity Monitoring” and “Integrated Piezoresistivity and Frequency Modulation for High-Sensitivity Printed Capacitive Strain Sensing.”",
      "It was a valuable opportunity to discuss printable and flexible sensing technologies with the IEEE FLEPS community.",
    ],
  },
  {
    slug: "ewshm-2024-potsdam",
    date: "11/06/2024",
    conference: "European Workshop on SHM — EWSHM 2024",
    location: "Potsdam, Germany",
    talkTitle:
      "Advancing Wireless Strain Sensing with Low-Cost Printable Supersensitive Radiofrequency Patch",
    image: "/images/news/ewshm-2024.png",
    body: [
      "I had the honor of presenting my research at the European Workshop on Structural Health Monitoring (EWSHM) 2024 in Potsdam, Germany.",
      "I presented my work titled “Advancing Wireless Strain Sensing with Low-Cost Printable Supersensitive Radiofrequency Patch,” and it was a great experience to share this research and receive insightful feedback from the audience.",
      "EWSHM 2024, the 11th European Workshop on Structural Health Monitoring, was held from 10 to 13 June 2024 in Potsdam.",
    ],
  },
  {
    slug: "deans-award-2024",
    date: "09/06/2024",
    conference: "Dean's Awards 2024",
    location: "KAUST, Thuwal, Saudi Arabia",
    image: "/images/news/deans-award-2024.png",
    body: [
      "I am proud to have been named one of the Dean’s Awards 2024 recipients at KAUST, in recognition of outstanding academic performance and contributions to the academic community.",
    ],
  },
  {
    slug: "lopec-2024-student-poster-award",
    date: "06/03/2024",
    conference: "Student Poster Award, LOPEC 2024",
    location: "Munich, Germany",
    talkTitle: "Printed Wireless Strain Sensor for Structural Health Monitoring",
    image: "/images/news/lopec-2024.png",
    body: [
      "My poster, “Printed Wireless Strain Sensor for Structural Health Monitoring,” received the Student Poster Award at the LOPEC Scientific Conference 2024 in Munich, Germany.",
    ],
  },
  {
    slug: "shm-workshop-italy-2023",
    date: "2023",
    conference:
      "Workshop on SHM for Integrity Management of Civil Structures and Infrastructures",
    location: "Politecnico di Milano, Italy",
    image: "/images/news/shm-workshop-italy-2023.png",
    body: [
      "I attended a workshop at Politecnico di Milano, Italy, on Structural Health Monitoring (SHM) for integrity management of civil structures and infrastructures.",
      "The workshop brought together researchers and practitioners to discuss advances in SHM technologies and their application to the assessment and long-term integrity of civil structures and infrastructure systems.",
    ],
  },
  {
    slug: "smart-2023-eccomas-patras",
    date: "03/07/2023",
    conference: "10th SMART 2023 ECCOMAS",
    location: "Patras, Greece",
    talkTitle:
      "Towards Smart Composite for Structural Health Monitoring via Highly Sensitive Capacitive Wireless Sensor",
    image: "/images/news/smart-2023.png",
    body: [
      "I presented my proceedings paper, “Towards Smart Composite for Structural Health Monitoring via Highly Sensitive Capacitive Wireless Sensor,” at the SMART 2023 ECCOMAS Thematic Conference on Smart Structures and Materials in Patras, Greece.",
      "SMART 2023 was the 10th event in this international conference series on intelligent materials, smart structures, and systems, and was held in Patras from 3 to 5 July 2023.",
    ],
    paperLink: "https://doi.org/10.1002/advs.202301807",
  },
  {
    slug: "joining-kaust-phd-2021",
    date: "09/2021",
    conference: "Joining KAUST as a PhD Student",
    location: "KAUST, Thuwal, Saudi Arabia",
    image: "/images/news/joining-kaust-phd-2021.png",
    body: [
      "I am glad to announce that I am joining KAUST (King Abdullah University of Science and Technology) as a Ph.D. Student in the Department of Mechanical Engineering at the Physical Science and Engineering Division, and as a member of the Mechanics of Composites for Energy and Mobility (MCEM) Lab.",
      "I would like to thank my family, supervisors, and all the amazing team at The British University in Egypt for their support. I am looking forward to the new learning, challenges, and professional development with my colleagues at KAUST.",
    ],
  },
  {
    slug: "msc-graduation-talk-2021",
    date: "2021",
    conference: "Master’s Graduation Defense, Cairo University",
    location: "Faculty of Engineering, Cairo University, Egypt",
    talkTitle:
      "Analysis of Composite Bolted Connections under Out-of-Plane Loading",
    image: "/images/news/msc-graduation-2021.png",
    body: [
      "I successfully defended my master’s thesis and completed my MSc in Mechanical Design and Production at the Faculty of Engineering, Cairo University.",
      "My thesis, “Analysis of Composite Bolted Connections under Out-of-Plane Loading,” focused on the mechanical behavior of composite bolted joints under out-of-plane loading conditions.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
