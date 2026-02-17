export interface Activity {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  departureCity?: string;
  durationDays?: number;
  price?: number;
}
