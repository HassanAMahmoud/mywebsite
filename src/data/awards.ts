import { newsItems, type NewsItem } from "./news";

export type AwardItem = {
  title: string;
  detail: string;
  year: string;
};

/** News entries that should appear on the Awards page (with photos). */
export const awardNewsSlugs = [
  "ewshm-2026-toulouse",
  "aramco-outstanding-performance-2025",
  "deans-award-2025",
  "deans-award-2024",
  "lopec-2024-student-poster-award",
] as const;

export function getAwardNews(): NewsItem[] {
  const order = new Map(awardNewsSlugs.map((slug, index) => [slug, index]));
  return newsItems
    .filter((item) => order.has(item.slug as (typeof awardNewsSlugs)[number]))
    .sort(
      (a, b) =>
        (order.get(a.slug as (typeof awardNewsSlugs)[number]) ?? 0) -
        (order.get(b.slug as (typeof awardNewsSlugs)[number]) ?? 0),
    );
}

/** Additional honors that do not yet have a News photo entry. */
export const otherHonors: AwardItem[] = [
  {
    title: "IEEE ComSoc Student Competition — Honorary Certificate",
    detail: "Top 20, IEEE ComSoc 2025, Taiwan",
    year: "2025",
  },
  {
    title: "Top PhD Student Ambassador at KAUST",
    detail: "Qualcomm",
    year: "2025",
  },
  {
    title: "Recognition Award of Engineering Achievements",
    detail: "The British University in Egypt",
    year: "2022",
  },
];
