export type MediaItem = {
  date: string;
  outlet?: string;
  title: string;
  summary: string;
  image?: string;
  video?: string;
  link?: string;
  linkLabel?: string;
};

export const mediaItems: MediaItem[] = [
  {
    date: "19/03/2025",
    title: "Interview with KAUST Discovery on printable wireless strain sensors",
    summary:
      "I was interviewed by KAUST Discovery about our Advanced Science paper on a fully printable strain sensor for highly sensitive wireless near-field interrogation. In the interview, I discuss the sensor design, its sensitivity, and how this printable platform can support structural health monitoring and related applications.",
    image: "/images/media/kaust-discovery-2025.png",
    video: "/videos/media-clip.gif",
    link: "https://discovery.kaust.edu.sa/en/article/25512/sensor-design-enables-extreme-sensitivity/",
    linkLabel: "Read the interview",
  },
];
