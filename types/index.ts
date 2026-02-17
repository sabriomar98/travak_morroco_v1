export interface Activity {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  duration: string;
  category: 'activity' | 'tour' | 'day-trip';
  location: string;
  highlights: string[];
}

export interface Tour extends Activity {
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface DayTrip extends Activity {
  departureTime: string;
  returnTime: string;
  included: string[];
  notIncluded: string[];
}
