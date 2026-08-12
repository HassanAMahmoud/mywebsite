export type ProjectVideo = {
  title: string;
  url: string;
  caption?: string;
};

export type ProjectAward = {
  title: string;
  image?: string;
};

export type ProjectCollaborator = {
  name: string;
  logo: string;
  href?: string;
};

export type ProjectFigure = {
  src: string;
  caption?: string;
};

export type ProjectResource = {
  title: string;
  href: string;
  label?: string;
};

/** Distinct efforts grouped under one research theme */
export type ProjectTrack = {
  title: string;
  summary: string;
  highlights?: string[];
  figures?: ProjectFigure[];
  collaborators?: ProjectCollaborator[];
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
  /** Show full image without cropping */
  imageFit?: "contain";
  /** CSS object-position for the research-list thumbnail */
  imagePosition?: string;
  /** Hide the hero image above Overview on the detail page */
  hideHero?: boolean;
  /** Extra figures shown on the project detail page */
  figures?: ProjectFigure[];
  /** Match publications by DOI URL or bare DOI suffix */
  relatedDois?: string[];
  videos?: ProjectVideo[];
  awards?: ProjectAward[];
  highlights?: string[];
  /** Optional sub-projects under the same theme */
  tracks?: ProjectTrack[];
  collaborators?: ProjectCollaborator[];
  resources?: ProjectResource[];
  /** Hide from Research list and detail routes until ready to publish */
  hidden?: boolean;
};

export const projects: Project[] = [
{
    slug: "printable-e-tattoo-wireless-sensors",
    title: "Printable and E-Tattoo Wireless Strain Sensors",
    summary:
      "Printable and transferable e-tattoo wireless strain sensors that couple piezoresistive electrodes with LC resonance for highly sensitive near-field interrogation on composite structures.",
    overview: [
      "This research develops a family of printable and e-tattoo wireless strain sensors for structural health monitoring of composite structures. The two formats share the same sensing idea—strain-dependent electrode resistance that reshapes the capacitive/RF response—while spanning routes from fully printed patches to ultra-thin transferable tattoos.",
      "At the device level, interdigitated electrodes are modeled as a distributed RC network. Under low resistivity the AC signal spans the full electrode length; as strain raises electrode resistance, voltage attenuates along the fingers and the effective sensing length shrinks. That mechanism appears experimentally as a strong, frequency-dependent shift in effective capacitance and, in wireless LC tags, as a clear resonance-frequency shift under near-field readout—unlike control devices built with only conductive electrodes.",
      "Building on this principle, fully printable sensors enable highly sensitive wireless near-field interrogation, while e-tattoo variants are fabricated as ultra-thin, transferable films that conform to textured and curved composite surfaces. Frequency-modulated printed capacitive sensing further improves sensitivity and linearity. The devices have been integrated with flexible wireless readout electronics for real-time SHM demonstrations, and the printable-sensor work received the Best Poster Award at LOPEC 2024.",
    ],
    tags: ["Printed electronics", "E-tattoo", "NFC/RF", "Strain"],
    link: "https://doi.org/10.1002/advs.202411346",
    image: "/images/projects/printable-e-tattoo-list.png",
    hideHero: true,
    figures: [
      {
        src: "/images/projects/printable-ide-mechanism.png",
        caption:
          "Interdigitated electrode capacitive sensing: lumped-element model and strain-dependent frequency response under low- and high-resistivity electrode conditions.",
      },
      {
        src: "/images/projects/printable-wireless-lc-strain.png",
        caption:
          "Wireless LC strain sensor with piezoresistive IDE electrodes: near-field readout, resonance shift with strain, and comparison with conductive-electrode controls.",
      },
      {
        src: "/images/projects/printable-e-tattoo-fabrication.png",
        caption:
          "Fabrication and transfer of ultra-thin e-tattoo sensors, with conformal integration on textured and curved composite surfaces.",
      },
    ],
    relatedDois: [
      "10.1002/advs.202411346",
      "10.1109/FLEPS61194.2024.10604024",
      "10.1016/j.sna.2026.118364",
    ],
    highlights: [
      "Piezoresistive IDE electrodes that convert strain into a distributed RC / frequency-response change",
      "Fully printable LC wireless strain sensors with sensitive near-field resonance readout",
      "Ultra-thin e-tattoo formats transferable onto textured and curved composites",
      "Frequency-modulated printed capacitive sensing for higher sensitivity and linearity",
      "Flexible wireless readout demonstrated for real-time SHM",
      "Best Poster Award, LOPEC 2024",
    ],
    awards: [
      {
        title: "Best Poster Award, LOPEC 2024",
        image: "/images/news/lopec-2024.png",
      },
    ],
    videos: [
      {
        title: "Fabrication and Transfer Process for E-Tattoo Sensors",
        url: "/videos/video-s1.mp4",
        caption:
          "Fabrication and transfer process for e-tattoo wireless sensors.",
      },
      {
        title: "Real-time SHM with Flexible Printed Sensors and IoT Circuits",
        url: "/videos/video-s3.mp4",
        caption:
          "E-tattoo strain sensor integrated with a flexible wireless readout circuit for real-time structural health monitoring.",
      },
    ],
  },
{
    slug: "event-driven-edge-ai-shm",
    title: "Event-Driven and Edge AI for Structural Health Monitoring",
    summary:
      "An umbrella theme with two complementary projects: semantic edge AI on Qualcomm platforms, and a hybrid ultra-low-power event-driven SHM node.",
    overview: [
      "This research theme groups two related but distinct projects that both pursue power-efficient structural health monitoring—reducing continuous sensing, energy use, and network load—while attacking the problem from different layers of the stack.",
      "Together they span vision-triggered edge intelligence and ultra-low-power wireless sensing hardware, and can be combined into an end-to-end pipeline from detection to local sensing to cloud analytics.",
    ],
    tracks: [
      {
        title: "Semantic Edge AI and Event-Driven Wake-Up Sensing",
        summary:
          "In collaboration with Omar Khalifa and Ruslan Zhagypar, and under the guidance of Prof. Gilles Lubineau and Prof. Tareq Al-Naffouri, this track uses Qualcomm platforms for event-driven SHM: drone cameras detect cracks via semantic segmentation, and a wake-up transmitter activates local sensors only when anomalies are flagged. A split AI architecture keeps feature extraction at the edge and transmits compact feature tensors instead of raw frames, cutting end-to-end latency by about 56% and saving about 83% bandwidth on Qualcomm RB5 and RB3 Gen2 platforms. Presented and demonstrated at IEEE PIMRC, with related work under review for the IEEE ComSoc Student Competition.",
        collaborators: [
          {
            name: "KAUST",
            logo: "/images/logos/kaust.png",
            href: "https://www.kaust.edu.sa/",
          },
          {
            name: "Qualcomm",
            logo: "/images/logos/qualcomm.png",
            href: "https://www.qualcomm.com/",
          },
        ],
        figures: [
          {
            src: "/images/projects/edge-ai-pipeline.png",
            caption:
              "Pipeline for Project 1: semantic perception at the edge, split semantic computation with compressed feature tensors, and event-driven wake-up radio activation of ultra-low-power IoT sensors.",
          },
        ],
      },
      {
        title:
          "Hybrid Event-Driven SHM Node with Ultra-Low Power Adaptive Triggering",
        summary:
          "A second project focused on the sensing and radio node itself: a hybrid event-driven structural health monitoring node with ultra-low-power adaptive triggering. The KAUST team developed and demonstrated this system in the EWSHM 2026 Young Professionals Challenge.",
        collaborators: [
          {
            name: "KAUST",
            logo: "/images/logos/kaust.png",
            href: "https://www.kaust.edu.sa/",
          },
          {
            name: "Université Gustave Eiffel, Capturia, LAAS CNRS, AFENDA FrANDTB",
            logo: "/images/logos/ewshm-partners.png",
          },
        ],
        figures: [
          {
            src: "/images/projects/ewshm-hybrid-architecture.png",
            caption:
              "Hybrid event-driven SHM demo setup: gateway (dashboard, microcontroller, wake-up transmitter, wind-sensor mock-up) and IoT device (sensor, ESP32, wake-up radio, power profiler).",
          },
        ],
      },
    ],
    tags: ["Edge AI", "SHM", "IoT", "Event-driven sensing", "Qualcomm"],
    link: "https://www.linkedin.com/posts/ruslan-zhagypar-ab8015183_qualcomm-kaust-edgeai-ugcPost-7454844163130585088-PPoH",
    image: "/images/projects/edge-ai-architecture.png",
    imageFit: "contain",
    relatedDois: [
      "When Meaning Controls the Network: Event-Driven Semantic Communication at the Edge",
    ],
    videos: [
      {
        title: "Track 1 — PIMRC Demo: Event-Driven Edge-AI SHM",
        url: "/videos/ea-demo.mp4",
        caption:
          "Semantic edge-AI track: demonstration of the event-driven system presented at IEEE PIMRC.",
      },
      {
        title: "Track 2 — EWSHM 2026 Young Professionals Challenge",
        url: "/videos/ewshm-competition-demo.mp4",
        caption:
          "Ultra-low-power node track: competition video for the Hybrid Event-Driven SHM Node with Ultra-Low Power Adaptive Triggering.",
      },
    ],
    awards: [
      {
        title: "EWSHM 2026 Young Professionals Challenge Award",
        image: "/images/news/ewshm-2026.png",
      },
    ],
  },
{
    slug: "wireless-sensing-composite-pipelines",
    title: "Wireless Sensing for Composite Pipelines",
    hidden: true,
    summary:
      "Capacitive wireless strain sensing for structural health monitoring of composite pipes, developed in collaboration with Saudi Aramco.",
    overview: [
      "This research focuses on wireless strain sensing for composite pipeline structures, targeting practical structural health monitoring in energy infrastructure.",
      "In collaboration with Saudi Aramco, capacitive wireless strain sensors are developed and demonstrated for monitoring composite pipes—bridging laboratory sensing platforms with field-relevant non-metallic pipeline applications.",
      "The work supports denser, lower-overhead monitoring of composite piping systems by combining capacitive sensing with wireless interrogation suited to industrial SHM constraints.",
    ],
    tags: ["SHM", "Composite pipes", "Wireless sensing", "Aramco"],
    link: "https://www.ndt.net/search/docs.php?id=34073",
    image: "/images/projects/composite-pipelines-list.png",
    imageFit: "contain",
    hideHero: true,
    figures: [
      {
        src: "/images/projects/pipelines-capacitive-vs-gauge.png",
        caption:
          "Comparison of piezoresistive strain-gauge readout (low-level DC signal) with capacitive LC sensing (higher-voltage AC frequency readout and more consistent SNR).",
      },
      {
        src: "/images/projects/pipelines-iot-architecture.png",
        caption:
          "IoT sensor and aggregator workflows for low-power measurement, peer-to-peer data transfer, and mobile or stationary aggregation on composite pipes.",
      },
      {
        src: "/images/projects/pipelines-pipe-test-comparison.png",
        caption:
          "RTR pipe experiment with co-located capacitive strain sensor and reference strain gauge, and strain-time comparison under stepwise loading.",
      },
    ],
    relatedDois: ["https://www.ndt.net/search/docs.php?id=34073"],
    highlights: [
      "Capacitive wireless strain sensors for composite pipe SHM",
      "Application-driven collaboration with Saudi Aramco",
      "Wireless interrogation tailored to non-metallic pipeline monitoring",
      "Presented at EWSHM 2026",
    ],
    collaborators: [
      {
        name: "ENERCOMP, KAUST, and Saudi Aramco",
        logo: "/images/logos/enercomp-kaust-aramco.png",
      },
    ],
    awards: [],
    videos: [],
  },
{
    slug: "wireless-crack-strain-sensors",
    title: "Ultrasensitive Wireless Crack-Based Strain Sensors",
    summary:
      "Crack-based metallic-film and RFID sensing architectures for ultra-sensitive, passive wireless strain measurement in structural health monitoring and related applications.",
    overview: [
      "This research develops ultrasensitive wireless strain sensors that exploit controlled cracking and fragmentation in thin metallic films.",
      "By tuning film fragmentation, small mechanical strains produce large changes in electrical response, enabling high-sensitivity readout through RFID and related radiofrequency architectures without onboard batteries.",
      "These passive wireless sensors are suited to structural health monitoring of large infrastructure and composite structures, where dense, low-power sensing is needed across applications such as oil and gas assets, bridges, aerospace, and wind energy.",
    ],
    tags: ["RFID", "Crack sensors", "SHM", "Wireless"],
    link: "https://doi.org/10.1002/advs.202301807",
    image: "/images/projects/wireless-crack-strain-sensors.png",
    imageFit: "contain",
    figures: [
      {
        src: "/images/projects/crack-sensor-wireless.png",
        caption:
          "Wireless crack-based strain sensor architecture, sensing mechanism, and fabricated device.",
      },
      {
        src: "/images/projects/crack-sensor-fragmentation.png",
        caption:
          "Metallic-film fragmentation design, strain response, and SEM characterization of Cr/Au crack patterns.",
      },
    ],
    relatedDois: [
      "10.1002/advs.202301807",
      "10.1021/acsaelm.4c00819",
    ],
    highlights: [
      "High-sensitivity RFID strain sensing for structural health monitoring",
      "Optimization of metallic-film fragmentation for cracked-based strain sensors",
      "Passive wireless readout suitable for large-area SHM applications",
    ],
    awards: [],
    videos: [
      {
        title: "Portable VNA Readout of a Flexible Crack-Based RFID Coil",
        url: "/videos/crack-s1.mp4",
        caption:
          "Handheld S11 measurement of a flexible crack-based RFID coil sensor using a portable vector network analyzer.",
      },
      {
        title: "Near-Field Interrogation of a Crack-Based Wireless Strain Sensor",
        url: "/videos/video-crack-s2.mp4",
        caption:
          "Laboratory near-field probing of a crack-based wireless strain sensor with a vector network analyzer.",
      },
    ],
  },
{
    slug: "lig-flexible-sensors",
    title: "Laser-Induced Graphene Flexible Sensors",
    summary:
      "Laser-induced graphene platforms for flexible temperature and strain sensing, using processing to tune Seebeck contrast and electromechanical anisotropy.",
    overview: [
      "This research develops laser-induced graphene (LIG) as a multifunctional flexible sensing platform in which laser processing sets both the microstructure and the functional response. The same one-shot engraving route supports thermoelectric temperature sensing and highly sensitive strain sensing.",
      "For temperature sensing, processing parameters are used to modulate the Seebeck coefficient of LIG, creating controlled thermoelectric contrast in flexible U-shaped devices. The resulting sensors convert temperature gradients into measurable voltage, enabling lightweight, conformal thermal monitoring without complex multilayer thermoelectric stacks.",
      "For strain sensing, process-induced electromechanical anisotropy in LIG is leveraged to fabricate highly sensitive piezoresistive sensors in a single laser-engraving step. Aligning the sensing path with the process-defined anisotropy amplifies the resistance change under deformation, yielding sensitive strain readout from a simple, scalable LIG pattern.",
      "Together, these two lines of work show how laser processing can be used as a design tool—not only to write conductive graphene patterns, but to program thermoelectric and electromechanical performance for flexible sensing applications.",
    ],
    tags: ["LIG", "Temperature", "Strain", "Flexible electronics"],
    link: "https://doi.org/10.1021/acsaelm.5c00562",
    image: "/images/projects/lig-flexible-sensors-list.png",
    imagePosition: "center 42%",
    hideHero: true,
    figures: [
      {
        src: "/images/projects/lig-flexible-sensors.png",
        caption:
          "Flexible LIG thermoelectric temperature sensor: device photograph, Seebeck-based operating schematic, and temperature-response characterization.",
      },
      {
        src: "/images/pubs/anisotropy-lig-strain.png",
        caption:
          "Process-induced electromechanical anisotropy in LIG for one-shot engraving of highly sensitive strain sensors.",
      },
    ],
    relatedDois: [
      "10.1021/acsaelm.5c00562",
      "10.1021/acsanm.5c05242",
    ],
    highlights: [
      "Processing-tuned Seebeck contrast in LIG for flexible thermoelectric temperature sensors",
      "U-shaped LIG thermocouples that convert temperature gradients into voltage",
      "Process-induced electromechanical anisotropy for highly sensitive LIG strain sensors",
      "One-shot laser engraving of patterned strain sensors without multistep lithography",
      "Laser processing used as a design tool linking microstructure to sensing performance",
    ],
    awards: [],
    videos: [],
  },
{
    slug: "wearable-hmi-sensing",
    title: "Wearable and Human–Machine Interface Sensing",
    summary:
      "Frequency-tunable piezocapacitive PDMS/MWCNT stretchable sensors integrated in a smart glove for real-time sign language recognition, in collaboration with BrightSign Gloves (UK).",
    overview: [
      "This project develops ultrasensitive stretchable capacitive sensors based on PDMS/MWCNT nanocomposite piezoresistive electrodes for wearable human–machine interfaces.",
      "The sensors are fabricated as stretchable parallel-plate capacitors that retain electromechanical performance up to 100% stretchability. Their capacitive response is frequency tunable, enabling sensitivity to be adjusted through the interrogation frequency.",
      "When integrated into a smart glove, the sensors support accurate, reliable, and real-time sign language recognition by mapping finger motion to digital gesture output. The work was developed in collaboration with BrightSign Gloves (UK) and reported in Materials & Design (2026).",
    ],
    tags: ["Wearables", "HMI", "Capacitive", "Sign language"],
    image: "/images/projects/wearable-hmi-sensing.png",
    imageFit: "contain",
    relatedDois: ["10.1016/j.matdes.2026.116194"],
    highlights: [
      "PDMS/MWCNT piezoresistive ink for stretchable capacitive sensing",
      "Frequency-tunable sensitivity for piezocapacitive readout",
      "Smart-glove integration for real-time sign language recognition",
    ],
    collaborators: [
      {
        name: "BrightSign Glove",
        logo: "/images/logos/brightsign-collaborator.png",
        href: "https://www.brightsignglove.com/",
      },
    ],
    awards: [],
    videos: [
      {
        title: "Smart Glove Sign Language Recognition Demo",
        url: "/videos/wearable-hmi.mp4",
        caption:
          "Demonstration of stretchable capacitive sensors for real-time sign language recognition.",
      },
    ],
  },
{
    slug: "composite-joint-toughness",
    title: "Composite Joint Toughness Enhancement",
    summary:
      "Geometry-driven strategies—auxetic stiffeners, sacrificial-crack bondlines, and microstructured adhesives—that raise strength, toughness, and fatigue resistance in composite and hybrid joints.",
    overview: [
      "This research develops geometry-driven routes to enhance toughness in composite and hybrid bonded joints. Instead of relying only on stronger adhesives or thicker adherends, the work redesigns local architecture so that extrinsic dissipation, crack deflection, and controlled damage progression improve joint performance.",
      "One line of work uses 3D-printed auxetic metal stiffeners in lightweight metal–composite T-joints. The auxetic geometry couples stiffening with a deformation mode that delays catastrophic failure, raising both strength and toughness while keeping the joint light.",
      "A second line microstructures the adhesive bondline with tailored sacrificial cracks. These intentional defects guide Mode II crack growth, increase energy dissipation, and improve fatigue characteristics of composite bonded joints. Related thermoplastic adhesive tapes use similar microstructuring ideas to create tougher peel and shear response through controlled defects.",
      "More broadly, this theme connects to strategies that harness extrinsic dissipation to toughen composites and composite joints, linking architected interfaces, hybrid laminates, and adhesive design into a consistent mechanics-driven approach for durable bonded structures.",
    ],
    tags: ["Fracture", "Joints", "Auxetics"],
    link: "https://doi.org/10.1016/j.matdes.2024.112963",
    image: "/images/projects/composite-joint-list.png",
    imageFit: "contain",
    hideHero: true,
    figures: [
      {
        src: "/images/projects/composite-joint-toughness.png",
        caption:
          "Auxetic stiffener design for metal–composite T-joints: specimen geometry, load–displacement response, and damage-mode comparison showing stress redistribution that delays adhesive failure.",
      },
      {
        src: "/images/pubs/mode-ii-sacrificial-cracks.png",
        caption:
          "Microstructured adhesive bondline with tailored sacrificial cracks for improved Mode II fatigue response of composite bonded joints.",
      },
      {
        src: "/images/pubs/tough-thermoplastic-tape.png",
        caption:
          "Tough thermoplastic adhesive tape enabled by microstructuring with tailored defects.",
      },
    ],
    relatedDois: [
      "10.1016/j.matdes.2024.112963",
      "10.1002/adma.202407132",
      "10.1016/j.compositesa.2024.108090",
      "10.3390/polym15020259",
    ],
    highlights: [
      "3D-printed auxetic metal stiffeners for lightweight, high-toughness metal–composite T-joints",
      "Sacrificial-crack adhesive microstructuring for Mode II toughness and fatigue resistance",
      "Microstructured thermoplastic adhesive tapes with tailored defects for higher toughness",
      "Geometry-driven extrinsic dissipation as a design route for durable bonded joints",
    ],
    awards: [],
    videos: [],
  },
]

export const publishedProjects = projects.filter((project) => !project.hidden);

export function getProjectBySlug(slug: string): Project | undefined {
  return publishedProjects.find((project) => project.slug === slug);
}
