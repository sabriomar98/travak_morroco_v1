export interface Tour {
  slug: string;
  title: string;
  durationDays: number;
  departureCity: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  itineraryDays: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  included: string[];
  excluded: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  heroImage: string;
  galleryImages: string[];
  publishedAt: string;
  updatedAt: string;
  price?: number;
  category?: string;
}

export interface DayTrip {
  slug: string;
  title: string;
  departureCity: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  heroImage: string;
  galleryImages: string[];
  publishedAt: string;
  updatedAt: string;
  price?: number;
}

export interface Activity {
  slug: string;
  title: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  heroImage: string;
  galleryImages: string[];
  publishedAt: string;
  updatedAt: string;
  price?: number;
}
