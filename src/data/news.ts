export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  link?: string;
};

/** Placeholder entries — replace with real news later. */
export const newsItems: NewsItem[] = [
  {
    date: "2025",
    title: "News item placeholder",
    summary:
      "Add announcements here (awards, paper acceptances, talks, media features). Replace this placeholder when ready.",
  },
];
