export type ProjectVideo = {
  title: string;
  url: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  overview: string[];
  tags: string[];
  link?: string;
  /** One large summary figure under /public/images/projects/ */
  image?: string;
  /** Match publications by DOI URL or bare DOI suffix */
  relatedDois?: string[];
  videos?: ProjectVideo[];
  awards?: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "wireless-crack-strain-sensors",
    title: "Ultrasensitive wireless crack-based strain sensors",
    summary:
      "Patterned metallic-film fragmentation and RFID architectures for ultra-sensitive, passive wireless strain sensing across wearable and structural health monitoring applications.",
    overview: [
      "This project develops crack-based metallic-film sensors and RFID architectures that achieve ultra-high sensitivity for passive wireless strain measurement.",
      "By controlling fragmentation patterns in thin metallic films, the sensors convert small mechanical strains into large electrical responses suitable for chipless or RFID readout.",
    ],
    tags: ["RFID", "Crack sensors", "SHM"],
    link: "https://doi.org/10.1002/advs.202301807",
    image: "/images/projects/wireless-crack-strain-sensors.png",
    relatedDois: [
      "10.1002/advs.202301807",
      "10.1021/acsaelm.4c00819",
    ],
    awards: ["Best Poster Award, LOPEC 2024"],
    videos: [],
  },
  {
    slug: "printable-near-field-strain-sensors",
    title: "Fully printable near-field wireless strain sensors",
    summary:
      "Screen-printed capacitive resonators that exploit piezoresistivity-enabled transmission-line effects for highly sensitive wireless near-field interrogation on composite structures.",
    overview: [
      "This project focuses on fully printable, passive wireless strain sensors that can be fabricated with screen printing and interrogated through near-field coupling.",
      "Piezoresistive electrodes are combined with capacitive resonant circuits to achieve high sensitivity while remaining thin enough for embedding in composite structures.",
    ],
    tags: ["Printed electronics", "NFC/RF", "Strain"],
    link: "https://doi.org/10.1002/advs.202411346",
    relatedDois: ["10.1002/advs.202411346"],
    awards: [],
    videos: [],
  },
  {
    slug: "e-tattoo-wireless-sensors",
    title: "Flexible e-tattoo wireless sensors for smart composites",
    summary:
      "Transferable e-tattoo wireless strain sensors for in-situ monitoring of composite bonded joints during curing and service loading without compromising structural integrity.",
    overview: [
      "E-tattoo wireless sensors provide an ultra-thin, transferable platform for monitoring strain and adhesive curing in composite joints.",
      "The devices can be laminated onto curved or bonded structures and interrogated wirelessly with low power requirements.",
    ],
    tags: ["E-tattoo", "Composites", "Curing"],
    relatedDois: [],
    awards: [],
    videos: [],
  },
  {
    slug: "lig-temperature-sensing",
    title: "Laser-induced graphene flexible temperature sensing",
    summary:
      "Processing-controlled Seebeck modulation in laser-induced graphene for flexible thermoelectric temperature sensors and wearable thermal applications.",
    overview: [
      "Laser-induced graphene (LIG) is used as a multifunctional material for flexible temperature sensing.",
      "By tuning laser fluence and processing parameters, the Seebeck response can be modulated to improve thermoelectric performance in flexible thermocouples.",
    ],
    tags: ["LIG", "Temperature", "Thermoelectric"],
    link: "https://doi.org/10.1021/acsaelm.5c00562",
    relatedDois: ["10.1021/acsaelm.5c00562", "10.1117/12.3050755"],
    awards: [],
    videos: [],
  },
  {
    slug: "wearable-hmi-sensing",
    title: "Wearable and human–machine interface sensing",
    summary:
      "Stretchable capacitive sensors for gesture recognition and sign-language monitoring, developed in collaboration with BrightSign Gloves (UK).",
    overview: [
      "This project develops stretchable piezocapacitive sensors for wearable and human–machine interface applications.",
      "Frequency-tunable PDMS/MWCNT nanocomposite sensors support gesture and sign-language recognition with high reliability.",
    ],
    tags: ["Wearables", "HMI", "Capacitive"],
    relatedDois: ["10.1016/j.matdes.2026.116194"],
    awards: [],
    videos: [],
  },
  {
    slug: "composite-joint-toughness",
    title: "Composite joint toughness enhancement",
    summary:
      "Sacrificial-crack adhesive microstructuring and 3D-printed auxetic metal stiffeners that raise strength and toughness in composite and hybrid bonded joints.",
    overview: [
      "This project investigates geometry-driven strategies to enhance toughness in composite and hybrid bonded joints.",
      "Approaches include microstructured adhesive bondlines with sacrificial cracks and 3D-printed auxetic metal stiffeners for lightweight T-joints with improved strength and toughness.",
    ],
    tags: ["Fracture", "Joints", "Auxetics"],
    link: "https://doi.org/10.1016/j.matdes.2024.112963",
    relatedDois: [
      "10.1016/j.matdes.2024.112963",
      "10.1002/adma.202407132",
      "10.1016/j.compositesa.2024.108090",
      "10.3390/polym15020259",
    ],
    awards: [],
    videos: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
