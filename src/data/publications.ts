export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  status?: "published" | "under-review" | "proceedings" | "patent" | "talk";
  /** Replace with a paper figure path under /public/images/pubs/ */
  image?: string;
  /** Show full image in the thumbnail (no crop). */
  imageFit?: "contain";
};

export const PUB_PLACEHOLDER = "/images/pub-placeholder.svg";

export const journalPublications: Publication[] = [
  {
    authors: "N. Divakaran, Y. Kara, H. A. Mahmoud, E. Hill, G. Lubineau",
    title:
      "Frequency-Tunable Piezocapacitive PDMS/MWCNT Nanocomposite Stretchable Sensors for Sign Language Recognition",
    venue: "Materials & Design",
    year: "2026",
    doi: "https://doi.org/10.1016/j.matdes.2026.116194",
    status: "published",
    image: "/images/pubs/sign-language-sensors.png",
  },
  {
    authors: "A. Abdou, H. A. Mahmoud, M. Al Refae, Y. Zhang, H. Rekik, A. Seno, G. Lubineau",
    title:
      "Leveraging Process-Induced Electromechanical Anisotropy of Laser-Induced Graphene for One-shot Engraving of Highly Sensitive Strain Sensors",
    venue: "ACS Applied Nano Materials",
    year: "2026",
    doi: "https://doi.org/10.1021/acsanm.5c05242",
    status: "published",
    image: "/images/pubs/anisotropy-lig-strain.png",
  },
  {
    authors: "W. Badeghaish, A. Wagih, H. A. Mahmoud, S. Abdel-Monsef, P. Maimi, G. Lubineau",
    title:
      "Effect of Supercritical CO2 Aging on the Microstructure and Fracture Properties of 3D Printed PEEK",
    venue: "Journal of Materials Research and Technology",
    year: "2025",
    doi: "https://doi.org/10.1016/j.jmrt.2025.12.085",
    status: "published",
    image: "/images/pubs/supercritical-co2-peek.png",
  },
  {
    authors:
      "A. Wagih, F. E. Oz, R. Melentiev, H. A. Mahmoud, P. Maimi, M. Abdelaziz, G. Lubineau",
    title:
      "Hydrogen Storage and Transportation Polymeric Tanks: Damage, Permeation Mitigation, and Sensing",
    venue: "International Journal of Hydrogen Energy",
    year: "2025",
    doi: "https://doi.org/10.1016/j.ijhydene.2025.151334",
    status: "published",
    image: "/images/pubs/hydrogen-storage-tanks.png",
  },
  {
    authors: "H. A. Mahmoud, A. AlJafari, M. Bahabri, M. A. Alrefae, G. Lubineau",
    title:
      "Processing-Controlled Seebeck Modulation in Laser-Induced Graphene for Flexible Temperature Sensors",
    venue: "ACS Applied Electronic Materials",
    year: "2025",
    doi: "https://doi.org/10.1021/acsaelm.5c00562",
    status: "published",
    image: "/images/pubs/seebeck-lig-temperature.png",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "A Fully Printable Strain Sensor Enabling Highly-Sensitive Wireless Near-Field Interrogation",
    venue: "Advanced Science",
    year: "2025",
    doi: "https://doi.org/10.1002/advs.202411346",
    status: "published",
    image: "/images/pubs/printable-strain-sensor.png",
  },
  {
    authors:
      "G. Lubineau, M. Alfano, R. Tao, A. Wagih, A. Yudhanto, Z. Li, K. Almuhammadi, M. Hashem, P. Hu, H. A. Mahmoud, F. Oz",
    title:
      "Harnessing Extrinsic Dissipation to Enhance the Toughness of Composites and Composite Joints: A State-of-the-Art Review of Recent Advances",
    venue: "Advanced Materials",
    year: "2024",
    doi: "https://doi.org/10.1002/adma.202407132",
    status: "published",
    image: "/images/pubs/extrinsic-dissipation-review.png",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, A. Wagih, G. Lubineau",
    title: "Optimization Fragmentation of Metallic Film for Cracked-Based Strain Sensors",
    venue: "ACS Applied Electronic Materials",
    year: "2024",
    doi: "https://doi.org/10.1021/acsaelm.4c00819",
    status: "published",
    image: "/images/pubs/cracked-metallic-film.png",
  },
  {
    authors: "A. Wagih, H. A. Mahmoud, G. Lubineau",
    title:
      "3D Printed Auxetic Metal Stiffener for Lightweight Metal–Composite T-Joints with High Strength and Toughness",
    venue: "Materials & Design",
    year: "2024",
    doi: "https://doi.org/10.1016/j.matdes.2024.112963",
    status: "published",
    image: "/images/pubs/auxetic-t-joints.png",
  },
  {
    authors: "A. Alshedayfat, A. Wagih, A. Yudhanto, H. A. Mahmoud, G. Lubineau",
    title:
      "Mode II Fatigue Characteristics of a Composite Bonded Joint with Microstructured Adhesive Bondline through Tailored Sacrificial Cracks",
    venue: "Composites Part A: Applied Science and Manufacturing",
    year: "2024",
    doi: "https://doi.org/10.1016/j.compositesa.2024.108090",
    status: "published",
    image: "/images/pubs/mode-ii-sacrificial-cracks.png",
  },
  {
    authors:
      "A. Wagih, H. Junaedi, H. A. Mahmoud, G. Lubineau, A. Kumar, T. A. Sebaey",
    title:
      "Enhanced Damage Tolerance and Fracture Toughness of Lightweight Carbon-Kevlar Fiber Hybrid Laminate",
    venue: "Journal of Composite Materials",
    year: "2024",
    doi: "https://doi.org/10.1177/00219983241235853",
    status: "published",
    image: "/images/pubs/carbon-kevlar-hybrid.png",
  },
  {
    authors: "H. Nesser, H. A. Mahmoud, G. Lubineau",
    title: "High-Sensitivity RFID Sensor for Structural Health Monitoring",
    venue: "Advanced Science",
    year: "2023",
    doi: "https://doi.org/10.1002/advs.202301807",
    status: "published",
    image: "/images/pubs/rfid-shm-sensor.png",
  },
  {
    authors: "A. Wagih, H. A. Mahmoud, R. Tao, G. Lubineau",
    title:
      "Towards Tough Thermoplastic Adhesive Tape by Microstructuring the Tape Using Tailored Defects",
    venue: "Polymers",
    year: "2023",
    doi: "https://doi.org/10.3390/polym15020259",
    status: "published",
    image: "/images/pubs/tough-thermoplastic-tape.png",
  },
];

export const underReview: Publication[] = [
  {
    authors: "N. Divakaran, Y. Kara, H. A. Mahmoud, E. Hill, G. Lubineau",
    title:
      "Development of a Wearable and Sensitive PDMS-based Capacitive Strain Sensor for Sign Language Recognition",
    venue: "Under review",
    year: "2025",
    status: "under-review",
  },
  {
    authors:
      "M. S. Ibrahim, S. Ye, H. A. Mahmoud, H. B. Seresht, M. Y. Bayoumy, G. Lubineau, W. R. Wagner, Y. Chun",
    title:
      "A Novel Arterial Pulsation Driven In-Situ Surface Maintenance System Using Thin Piezoelectric Layer to Enhance Hemocompatibility in Endovascular Devices",
    venue: "Under review",
    year: "2025",
    status: "under-review",
  },
  {
    authors:
      "H. A. Mahmoud, O. Khalifa, Y. Shi, A. Wagih, T. AlNaffouri, G. Lubineau",
    title:
      "Integrable E-Tattoo Wireless Sensors for In-Situ Health Monitoring of Composite Structures",
    venue: "Under review",
    year: "2025",
    status: "under-review",
  },
  {
    authors: "H. A. Mahmoud, H. E. Rekik, G. Lubineau",
    title:
      "Enhancing Linearity in Printed Capacitive Strain Sensors using Variable Spacing Interdigitated Electrodes",
    venue: "Under review",
    year: "2025",
    status: "under-review",
  },
  {
    authors: "Y. Shi, H. A. Mahmoud, X. Li, P. Hu, A. H. Seno, G. Lubineau",
    title:
      "Printable Multifunctional Interface Enabling Wireless Self Diagnosis: A Pathway Toward Smart Structures",
    venue: "Under review",
    year: "2025",
    status: "under-review",
  },
];

export const proceedings: Publication[] = [
  {
    authors: "H. A. Mahmoud, O. Khalifa, Y. Shi, A. Wagih, T. Y. Al-Naffouri, G. Lubineau",
    title: "Printed E-Tattoo Wireless Sensor for Smart Monitoring of Composite Structures",
    venue: "EWSHM 2026",
    year: "2026",
    doi: "https://www.ndt.net/search/docs.php?id=33840",
    status: "proceedings",
    image: "/images/pubs/e-tattoo-wireless-sensor.png",
  },
  {
    authors:
      "H. A. Mahmoud, O. Khalifa, A. H. Seno, M. A. Hussaini, N. Kouzahya, A. Asiri, A. Al-Jarro, A. Shehri, H. Saiari, T. Y. Al-Naffouri, G. Lubineau",
    title: "Capacitive Wireless Strain Sensors for Structural Health Monitoring of Composite Pipes",
    venue: "EWSHM 2026",
    year: "2026",
    doi: "https://www.ndt.net/search/docs.php?id=34073",
    status: "proceedings",
    image: "/images/pubs/capacitive-wireless-pipes.png",
  },
  {
    authors: "H. A. Mahmoud, G. Lubineau",
    title:
      "Advanced E-Tattoo Wireless Strain Sensors for Smart Structural Health Monitoring of Composite Structures",
    venue: "SPIE Smart Structures + NDE",
    year: "2025",
    doi: "https://doi.org/10.1117/12.3052549",
    status: "proceedings",
    image: "/images/pubs/advanced-e-tattoo-spie.png",
  },
  {
    authors: "H. A. Mahmoud, G. Lubineau",
    title:
      "Flexible Temperature Sensor using Laser Induced Graphene (LIG) Based on Processing-Controlled Seebeck Contrast",
    venue: "SPIE Smart Structures + NDE",
    year: "2025",
    doi: "https://doi.org/10.1117/12.3050755",
    status: "proceedings",
    image: "/images/pubs/lig-temperature-spie.png",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "Integrated Piezoresistivity and Frequency Modulation for High Sensitivity Printed Capacitive Strain Sensing",
    venue: "IEEE FLEPS",
    year: "2024",
    doi: "https://doi.org/10.1109/FLEPS61194.2024.10604024",
    status: "proceedings",
    image: "/images/pubs/piezoresistive-capacitive-fleps.png",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "Advancing Wireless Strain Sensing with Low-Cost Printable Supersensitive Radiofrequency Patches",
    venue: "e-Journal of Nondestructive Testing",
    year: "2024",
    doi: "https://doi.org/10.58286/29725",
    status: "proceedings",
    image: "/images/pubs/printable-rf-patches.png",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, A. Wagih, G. Lubineau",
    title: "High Sensitivity Wireless Strain Sensor for SHM Applications",
    venue: "Structural Health Monitoring",
    year: "2023",
    doi: "https://doi.org/10.12783/shm2023/36847",
    status: "proceedings",
    image: "/images/pubs/wireless-strain-shm.png",
  },
  {
    authors: "G. Lubineau, H. A. Mahmoud, H. Nesser",
    title:
      "Toward Smart Composites for Structural Health Monitoring via Highly Sensitive Capacitive Wireless Sensor",
    image: "/images/pubs/smart-composites-capacitive.png",
    venue: "SMART 2023 (ECCOMAS)",
    year: "2023",
    doi: "https://doi.org/10.7712/150123.9766.443434",
    status: "proceedings",
  },
  {
    authors: "H. A. Mahmoud, M. Shazly, Y. Bahie El-din, E. El-kashif",
    title:
      "Analysis of Composite Bolted Connection Joints under Out-of-Plane Loading",
    venue: "ASME IMECE",
    year: "2020",
    image: "/images/pubs/bolted-joints-out-of-plane.png",
    doi: "https://doi.org/10.1115/IMECE2020-23303",
    status: "proceedings",
  },
];

export const patents: Publication[] = [
  {
    authors: "Y. Shi, H. A. Mahmoud, G. Lubineau",
    title:
      "Embedded Passive Wireless Capacitive Sensing System and Method for Real-Time Curing Monitoring",
    venue: "Provisional U.S. Application (Filed) — Docket No. 0338-855/2026-180-01",
    year: "2026",
    status: "patent",
  },
  {
    authors: "A. Wagih, H. Ejaz, H. A. Mahmoud, G. Lubineau",
    title: "Inspection of GFRP Composite Adhesive Joint using Optical Transillumination",
    venue: "Provisional U.S. Application (Filed) — Docket No. 0338-843/2026-148-01",
    year: "2026",
    status: "patent",
  },
  {
    authors: "H. A. Mahmoud, N. Jaber, G. Lubineau",
    title: "Wireless Capacitive Sensor for Low Frequency Vibrations",
    venue: "Provisional U.S. Application (Filed)",
    year: "2025",
    status: "patent",
  },
  {
    authors:
      "H. A. Mahmoud, O. Khalifa, M. Abdullah, A. H. Seno, N. Kouzahya, A. Asiri, A. Al-Jarro, A. Shehri, H. Saiari, T. Al-Naffouri, G. Lubineau",
    title:
      "Capacitive Strain Sensing IoT Device with Secure On-Demand Wireless Data Transmission",
    venue: "Provisional U.S. Application (Filed) — November 15, 2025",
    year: "2025",
    status: "patent",
  },
  {
    authors:
      "H. A. Mahmoud, O. Khalifa, M. Abdullah, A. H. Seno, N. Kouzahya, A. Asiri, A. Al-Jarro, A. Shehri, H. Saiari, T. Al-Naffouri, G. Lubineau",
    title: "Data Aggregator for Reading Sensed IoT Data on Demand",
    venue: "Provisional U.S. Application (Filed) — November 15, 2025",
    year: "2025",
    status: "patent",
  },
  {
    authors: "N. Divakaran, H. A. Mahmoud, G. Lubineau",
    title:
      "PDMS-MWCNT-Based Piezoresistive Ink with Tunable Viscosity for Stretchable Sensor Fabrication",
    venue: "Provisional U.S. Application (Filed) — No. 2026-029",
    year: "2025",
    status: "patent",
  },
  {
    authors: "H. A. Mahmoud, G. Lubineau",
    title:
      "Controlling the Sensitivity and Linearity of Capacitive Strain Sensors Using Non-Uniform Interdigitated Electrodes",
    venue: "Provisional U.S. Application (Filed) — No. 63/725,625",
    year: "2024",
    status: "patent",
  },
  {
    authors: "A. Wagih, H. A. Mahmoud, R. Tao, G. Lubineau",
    title: "Toughening Thermoplastic Adhesive Tapes using Tailored Defects",
    venue: "Provisional U.S. Application (Filed)",
    year: "2022",
    status: "patent",
  },
];

export const talksAndPosters: Publication[] = [
  {
    authors: "H. A. Mahmoud",
    title: "European Workshop on SHM — EWSHM 2026",
    venue: "Oral + Demo Session — Toulouse, France",
    year: "2026",
    status: "talk",
    image: "/images/pubs/ewshm-2026-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "MECC 19",
    venue: "Dhahran, KSA",
    year: "2025",
    status: "talk",
    image: "/images/pubs/mecc-19-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "IEEE PIMRC",
    venue: "Oral + Demo Session — Istanbul, Turkey",
    year: "2025",
    status: "talk",
    image: "/images/pubs/ieee-pimrc.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "SPIE Smart Structures + NDE 2025",
    venue: "Oral and Poster — Vancouver, Canada",
    year: "2025",
    status: "talk",
    image: "/images/pubs/spie-2025-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "LOPEC 2025",
    venue: "Poster — Munich, Germany",
    year: "2025",
    status: "talk",
    image: "/images/pubs/lopec-2025-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title:
      "Flexible and Printable Wireless Sensors Technologies for Structural, Wearable and Environmental Monitoring Applications",
    venue: "Invited Talk — The British University in Egypt",
    year: "2024",
    status: "talk",
    image: "/images/pubs/bue-invited-talk-2024.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "IEEE FLEPS 2024",
    venue: "Poster — Tampere, Finland",
    year: "2024",
    status: "talk",
    image: "/images/pubs/ieee-fleps-2024-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "European Workshop on SHM — EWSHM 2024",
    venue: "Oral — Potsdam, Germany",
    year: "2024",
    status: "talk",
    image: "/images/pubs/ewshm-2024-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "LOPEC 2024",
    venue: "Poster — Munich, Germany",
    year: "2024",
    status: "talk",
    image: "/images/pubs/lopec-2024-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "International Workshop on SHM — IWSHM 2023",
    venue: "Oral — Stanford, USA",
    year: "2023",
    status: "talk",
    image: "/images/pubs/iwshm-2023.png",
    imageFit: "contain",
  },
  {
    authors: "H. A. Mahmoud",
    title: "ECCOMAS SMART 2023",
    venue: "Oral — Patras, Greece",
    year: "2023",
    status: "talk",
    image: "/images/pubs/eccomas-smart-2023-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "Energizing the Future with Composites",
    venue: "Poster — KAUST, KSA",
    year: "2023",
    status: "talk",
    image: "/images/pubs/energizing-composites-2023.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "European Workshop on SHM — EWSHM 2022",
    venue: "Oral — Palermo, Italy",
    year: "2022",
    status: "talk",
    image: "/images/pubs/ewshm-2022-talk.png",
  },
  {
    authors: "H. A. Mahmoud",
    title: "ASME IMECE 2020",
    venue: "Oral — Virtual",
    year: "2020",
    status: "talk",
    image: "/images/pubs/asme-imece-2020-talk.png",
  },
];
