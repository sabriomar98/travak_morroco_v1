import { Activity } from "./types";

export const activities: Activity[] = [
  {
    slug: "hot-air-balloon-marrakech",
    title: "Hot Air Balloon Flight over Marrakech",
    location: "Marrakech",
    shortDescription: "Fly over palm groves and Berber villages at sunrise. A magical and unforgettable experience.",
    longDescription: "Experience a unique hot air balloon adventure over Marrakech's enchanting landscapes. At sunrise, admire palm groves, traditional Berber villages, and the snowy Atlas Mountains. A magical moment that will leave you with lasting memories. After the flight, enjoy a traditional Berber breakfast under a nomadic tent.",
    highlights: [
      "Sunrise flight (approximately 1 hour)",
      "Panoramic views of Atlas and desert",
      "Flight over palm groves and Berber villages",
      "Berber breakfast under nomadic tent",
      "Flight certificate",
      "Round-trip transport from Marrakech",
    ],
    included: [
      "4x4 transport to/from hotel",
      "Hot air balloon flight (approx. 1h)",
      "Certified professional pilot",
      "Traditional Berber breakfast",
      "Souvenir flight certificate",
      "Insurance",
    ],
    excluded: [
      "Photos and videos of the flight (available for purchase)",
      "Tips",
    ],
    faqs: [
      {
        question: "What time does the activity start?",
        answer: "Departure from your hotel is very early in the morning (around 5-6 AM depending on season) to enjoy the sunrise.",
      },
      {
        question: "Is the activity safe?",
        answer: "Yes, all our pilots are certified and experienced. Balloons are regularly inspected and we comply with all safety standards.",
      },
      {
        question: "What happens in bad weather?",
        answer: "If weather conditions do not allow the flight, the activity will be rescheduled or fully refunded.",
      },
      {
        question: "Are there any restrictions?",
        answer: "The activity is not recommended for pregnant women, people with heart problems or mobility issues. Minimum age: 6 years.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a",
    galleryImages: [
      "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e",
    ],
    publishedAt: "2024-02-05",
    updatedAt: "2024-02-15",
    price: 180,
  },
];
