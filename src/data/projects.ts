export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Ultrasensitive wireless crack-based strain sensors",
    summary:
      "Patterned metallic-film fragmentation and RFID architectures for ultra-sensitive, passive wireless strain sensing across wearable and structural health monitoring applications.",
    tags: ["RFID", "Crack sensors", "SHM"],
    link: "https://doi.org/10.1002/advs.202301807",
  },
  {
    title: "Fully printable near-field wireless strain sensors",
    summary:
      "Screen-printed capacitive resonators that exploit piezoresistivity-enabled transmission-line effects for highly sensitive wireless near-field interrogation on composite structures.",
    tags: ["Printed electronics", "NFC/RF", "Strain"],
    link: "https://doi.org/10.1002/advs.202411346",
  },
  {
    title: "Flexible e-tattoo wireless sensors for smart composites",
    summary:
      "Transferable e-tattoo wireless strain sensors for in-situ monitoring of composite bonded joints during curing and service loading without compromising structural integrity.",
    tags: ["E-tattoo", "Composites", "Curing"],
  },
  {
    title: "Laser-induced graphene flexible temperature sensing",
    summary:
      "Processing-controlled Seebeck modulation in laser-induced graphene for flexible thermoelectric temperature sensors and wearable thermal applications.",
    tags: ["LIG", "Temperature", "Thermoelectric"],
    link: "https://doi.org/10.1021/acsaelm.5c00562",
  },
  {
    title: "Wearable and human–machine interface sensing",
    summary:
      "Stretchable capacitive sensors for gesture recognition and sign-language monitoring, developed in collaboration with BrightSign Gloves (UK).",
    tags: ["Wearables", "HMI", "Capacitive"],
  },
  {
    title: "Composite joint toughness enhancement",
    summary:
      "Sacrificial-crack adhesive microstructuring and 3D-printed auxetic metal stiffeners that raise strength and toughness in composite and hybrid bonded joints.",
    tags: ["Fracture", "Joints", "Auxetics"],
    link: "https://doi.org/10.1016/j.matdes.2024.112963",
  },
];
