import { DayTrip } from "./types";

export const dayTrips: DayTrip[] = [
  {
    slug: "ourika-valley-day-trip",
    title: "Ourika Valley Day Trip",
    departureCity: "Marrakech",
    shortDescription: "Escape the hustle of Marrakech and discover the natural beauty of Ourika Valley, its waterfalls and Berber villages.",
    longDescription: "Just one hour from Marrakech, Ourika Valley offers a striking contrast to the red city. Nestled at the foot of the High Atlas, this green valley is dotted with traditional Berber villages and refreshing waterfalls. A perfect excursion to discover Moroccan rural life and enjoy spectacular mountain landscapes.",
    highlights: [
      "Spectacular High Atlas landscapes",
      "Visit to authentic Berber villages",
      "Hike to Setti Fatma waterfalls",
      "Lunch at a riverside restaurant",
      "Discovery of local crafts",
      "Panoramic views of the valley",
    ],
    included: [
      "Round-trip transport from Marrakech",
      "English-speaking driver",
      "Local guide for the hike",
      "Free time for lunch",
    ],
    excluded: [
      "Lunch",
      "Drinks",
      "Tips",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "How long is the excursion?",
        answer: "The excursion lasts about 8 hours, departure around 8:30 AM and return around 5 PM.",
      },
      {
        question: "Is the hike difficult?",
        answer: "The hike to the waterfalls is moderate level, accessible to all with normal fitness. Bring good walking shoes.",
      },
      {
        question: "Can we swim in the waterfalls?",
        answer: "Yes, in summer it is possible to swim. The water is cool and very refreshing.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1513415032843-35baed77f44f",
    galleryImages: [
      "https://images.unsplash.com/photo-1513415032843-35baed77f44f",
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    ],
    publishedAt: "2024-02-01",
    updatedAt: "2024-02-15",
    price: 45,
  },
];
