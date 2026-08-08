export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  status?: "published" | "under-review" | "proceedings";
};

export const journalPublications: Publication[] = [
  {
    authors: "A. Abdou, H. A. Mahmoud, M. Al Refae, Y. Zhang, H. Rekik, A. Seno, G. Lubineau",
    title:
      "Leveraging Process-Induced Electromechanical Anisotropy of Laser-Induced Graphene for One-shot Engraving of Highly Sensitive Strain Sensors",
    venue: "ACS Applied Nano Materials",
    year: "2025",
    doi: "https://doi.org/10.1021/acsanm.5c05242",
    status: "published",
  },
  {
    authors: "W. Badeghaish, A. Wagih, H. A. Mahmoud, S. Abdel-Monsef, P. Maimi, G. Lubineau",
    title:
      "Effect of Supercritical CO2 Aging on the Microstructure and Fracture Properties of 3D Printed PEEK",
    venue: "Journal of Materials Research and Technology",
    year: "2025",
    doi: "https://doi.org/10.1016/j.jmrt.2025.12.085",
    status: "published",
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
  },
  {
    authors: "H. A. Mahmoud, A. AlJafari, M. Bahabri, M. A. Alrefae, G. Lubineau",
    title:
      "Processing-Controlled Seebeck Modulation in Laser-Induced Graphene for Flexible Temperature Sensors",
    venue: "ACS Applied Electronic Materials",
    year: "2025",
    doi: "https://doi.org/10.1021/acsaelm.5c00562",
    status: "published",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "A Fully Printable Strain Sensor Enabling Highly-Sensitive Wireless Near-Field Interrogation",
    venue: "Advanced Science",
    year: "2025",
    doi: "https://doi.org/10.1002/advs.202411346",
    status: "published",
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
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, A. Wagih, G. Lubineau",
    title: "Optimization Fragmentation of Metallic Film for Cracked-Based Strain Sensors",
    venue: "ACS Applied Electronic Materials",
    year: "2024",
    doi: "https://doi.org/10.1021/acsaelm.4c00819",
    status: "published",
  },
  {
    authors: "A. Wagih, H. A. Mahmoud, G. Lubineau",
    title:
      "3D Printed Auxetic Metal Stiffener for Lightweight Metal–Composite T-Joints with High Strength and Toughness",
    venue: "Materials & Design",
    year: "2024",
    doi: "https://doi.org/10.1016/j.matdes.2024.112963",
    status: "published",
  },
  {
    authors: "A. Alshedayfat, A. Wagih, A. Yudhanto, H. A. Mahmoud, G. Lubineau",
    title:
      "Mode II Fatigue Characteristics of a Composite Bonded Joint with Microstructured Adhesive Bondline through Tailored Sacrificial Cracks",
    venue: "Composites Part A: Applied Science and Manufacturing",
    year: "2024",
    doi: "https://doi.org/10.1016/j.compositesa.2024.108090",
    status: "published",
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
  },
  {
    authors: "H. Nesser, H. A. Mahmoud, G. Lubineau",
    title: "High-Sensitivity RFID Sensor for Structural Health Monitoring",
    venue: "Advanced Science",
    year: "2023",
    doi: "https://doi.org/10.1002/advs.202301807",
    status: "published",
  },
  {
    authors: "A. Wagih, H. A. Mahmoud, R. Tao, G. Lubineau",
    title:
      "Towards Tough Thermoplastic Adhesive Tape by Microstructuring the Tape Using Tailored Defects",
    venue: "Polymers",
    year: "2023",
    doi: "https://doi.org/10.3390/polym15020259",
    status: "published",
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
    authors: "H. A. Mahmoud, G. Lubineau",
    title:
      "Advanced E-Tattoo Wireless Strain Sensors for Smart Structural Health Monitoring of Composite Structures",
    venue: "SPIE Smart Structures + NDE",
    year: "2025",
    doi: "https://doi.org/10.1117/12.3052549",
    status: "proceedings",
  },
  {
    authors: "H. A. Mahmoud, G. Lubineau",
    title:
      "Flexible Temperature Sensor using Laser Induced Graphene (LIG) Based on Processing-Controlled Seebeck Contrast",
    venue: "SPIE Smart Structures + NDE",
    year: "2025",
    doi: "https://doi.org/10.1117/12.3050755",
    status: "proceedings",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "Integrated Piezoresistivity and Frequency Modulation for High Sensitivity Printed Capacitive Strain Sensing",
    venue: "IEEE FLEPS",
    year: "2024",
    doi: "https://doi.org/10.1109/FLEPS61194.2024.10604024",
    status: "proceedings",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, G. Lubineau",
    title:
      "Advancing Wireless Strain Sensing with Low-Cost Printable Supersensitive Radiofrequency Patches",
    venue: "e-Journal of Nondestructive Testing",
    year: "2024",
    doi: "https://doi.org/10.58286/29725",
    status: "proceedings",
  },
  {
    authors: "H. A. Mahmoud, H. Nesser, A. Wagih, G. Lubineau",
    title: "High Sensitivity Wireless Strain Sensor for SHM Applications",
    venue: "Structural Health Monitoring",
    year: "2023",
    doi: "https://doi.org/10.12783/shm2023/36847",
    status: "proceedings",
  },
];
