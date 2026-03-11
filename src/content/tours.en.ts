import { Tour } from "./types";

export const tours: Tour[] = [
  {
    slug: "desert-tour-marrakech-3-days",
    title: "Marrakech Desert Tour - 3 Days",
    durationDays: 3,
    departureCity: "Marrakech",
    shortDescription: "Discover the magic of the Moroccan desert with our 3-day tour from Marrakech. Cross the Atlas, visit Aït Ben Haddou and experience an unforgettable night in the desert.",
    longDescription: "Embark on an unforgettable adventure through Morocco's most breathtaking landscapes. This 3-day tour takes you from Marrakech to the golden dunes of Merzouga, passing through the majestic High Atlas and the famous ksar of Aït Ben Haddou. Experience the authentic adventure of a night under the stars in a traditional Berber camp in the heart of the desert.",
    highlights: [
      "Spectacular crossing of the High Atlas",
      "Visit to UNESCO site Aït Ben Haddou",
      "Sunset camel ride",
      "Night under the stars in a Berber camp",
      "Magical sunrise over Merzouga dunes",
      "Discovery of Todra Gorges",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Marrakech - Aït Ben Haddou - Dades Valley",
        description: "Early departure from Marrakech. Cross the High Atlas via the Tizi n'Tichka pass (2,260m). Visit the famous ksar of Aït Ben Haddou, UNESCO World Heritage site. Continue to Ouarzazate then Dades Valley. Dinner and overnight in a traditional hotel.",
      },
      {
        day: 2,
        title: "Dades Valley - Todra Gorges - Merzouga",
        description: "After breakfast, drive to Todra Gorges. Free time for a walk in these impressive gorges. Continue to Merzouga. Sunset camel ride to reach the Berber camp. Dinner under the stars and overnight at the camp.",
      },
      {
        day: 3,
        title: "Merzouga - Ouarzazate - Marrakech",
        description: "Early rise to admire the magnificent sunrise over the dunes. Return to Merzouga by camel. After breakfast, drive back to Marrakech via Ouarzazate and the High Atlas. Arrival in Marrakech in the late afternoon.",
      },
    ],
    included: [
      "Air-conditioned 4x4 transport",
      "Professional English-speaking driver",
      "2 nights accommodation (1 hotel + 1 desert camp)",
      "2 breakfasts and 2 dinners",
      "Camel ride",
      "Traditional music around the fire",
    ],
    excluded: [
      "Lunches",
      "Drinks",
      "Tourist site entrance fees",
      "Tips",
    ],
    faqs: [
      {
        question: "What is the best time for this tour?",
        answer: "The tour can be done year-round, but the best periods are spring (March-May) and autumn (September-November) for more pleasant temperatures.",
      },
      {
        question: "Is the tour suitable for children?",
        answer: "Yes, this tour is suitable for families with children. The journeys can be long, but the landscapes are spectacular and the activities varied.",
      },
      {
        question: "What should I bring?",
        answer: "Bring comfortable clothes, a hat, sunscreen, sunglasses, and a jacket for cool evenings in the desert.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    galleryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      "https://images.unsplash.com/photo-1545158535-c3f7168c28b6",
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b",
    ],
    publishedAt: "2024-01-15",
    updatedAt: "2024-02-15",
    price: 250,
    category: "desert",
  },
  {
    slug: "imperial-cities-tour-casablanca-5-days",
    title: "Imperial Cities Tour from Casablanca - 5 Days",
    durationDays: 5,
    departureCity: "Casablanca",
    shortDescription: "Explore Morocco's four imperial cities: Rabat, Meknes, Fes and Marrakech. A journey through Moroccan history and culture.",
    longDescription: "Discover the historical and cultural treasures of Morocco during this comprehensive 5-day tour. Visit the four imperial cities that marked the kingdom's history: Rabat, the modern capital, Meknes with its majestic monuments, Fes the spiritual with its thousand-year-old medina, and finally red Marrakech with its colorful souks and iconic Jemaa el-Fna square.",
    highlights: [
      "Discovery of the 4 imperial cities",
      "Visit to Fes medina, UNESCO heritage",
      "Exploration of Jemaa el-Fna square in Marrakech",
      "Visit of major historical monuments",
      "Meeting with traditional crafts",
      "Tasting of Moroccan gastronomy",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Casablanca - Rabat",
        description: "Departure from Casablanca with a visit to Hassan II Mosque (exterior). Drive to Rabat, capital of Morocco. Visit Mohammed V Mausoleum, Hassan Tower and Chellah. Overnight in Rabat.",
      },
      {
        day: 2,
        title: "Rabat - Meknes - Fes",
        description: "Departure to Meknes. Visit Bab Mansour gate, Moulay Ismail mausoleum and royal stables. Excursion to Roman ruins of Volubilis. Continue to Fes. Overnight in Fes.",
      },
      {
        day: 3,
        title: "Fes - Guided tour",
        description: "Full day dedicated to discovering Fes. Visit UNESCO-listed medina, Bou Inania Madrasa, Nejjarine fountain and tanneries. Discovery of local crafts. Overnight in Fes.",
      },
      {
        day: 4,
        title: "Fes - Marrakech",
        description: "Drive to Marrakech via Beni Mellal and fertile plains. Check-in at hotel. Free time to discover Jemaa el-Fna square in the evening. Overnight in Marrakech.",
      },
      {
        day: 5,
        title: "Marrakech - Visit and return to Casablanca",
        description: "Guided tour of Marrakech: Koutoubia Mosque, Bahia Palace, Saadian Tombs and Majorelle Gardens. Return to Casablanca in the late afternoon.",
      },
    ],
    included: [
      "Air-conditioned vehicle transport",
      "English-speaking driver/guide",
      "4 nights in 3-4 star hotels",
      "4 breakfasts",
      "Local guides in Fes and Marrakech",
    ],
    excluded: [
      "Lunches and dinners",
      "Monument entrance fees",
      "Drinks",
      "Tips",
    ],
    faqs: [
      {
        question: "Can the tour be customized?",
        answer: "Yes, we can adapt the itinerary according to your preferences and budget. Contact us for a personalized quote.",
      },
      {
        question: "Do the guides speak English?",
        answer: "Yes, all our guides are English-speaking and have excellent knowledge of Moroccan history and culture.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
    galleryImages: [
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
      "https://images.unsplash.com/photo-1548260906-1a0b18b7a5c8",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
    ],
    publishedAt: "2024-01-20",
    updatedAt: "2024-02-15",
    price: 450,
    category: "cultural",
  },
  {
    slug: "atlantic-coast-tour-agadir-4-days",
    title: "Atlantic Coast Tour from Agadir - 4 Days",
    durationDays: 4,
    departureCity: "Agadir",
    shortDescription: "Discover the beauty of the Moroccan Atlantic coast, from Agadir to Essaouira, passing through wild beaches and fishing villages.",
    longDescription: "This 4-day tour takes you along the magnificent Moroccan Atlantic coast. Starting from Agadir, discover fine sandy beaches, authentic fishing villages, and the fortified city of Essaouira. A perfect journey for lovers of the sea, surfing, and Moroccan coastal culture.",
    highlights: [
      "Spectacular Atlantic beaches",
      "Visit to Essaouira, pearl of the Atlantic",
      "Discovery of traditional fishing villages",
      "Fresh fish tasting",
      "Argan tree observation and cooperative visits",
      "Renowned surf spots",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Agadir - Tiznit - Mirleft",
        description: "Departure from Agadir heading south. Visit Tiznit, fortified town known for its silver crafts. Drive to Mirleft, charming coastal village. Free time on the beach. Overnight in Mirleft.",
      },
      {
        day: 2,
        title: "Mirleft - Sidi Ifni - Essaouira",
        description: "Exploration of Sidi Ifni and its Spanish Art Deco architecture. Coastal drive to Essaouira. Hotel check-in. Evening stroll in the medina. Overnight in Essaouira.",
      },
      {
        day: 3,
        title: "Essaouira - Free day",
        description: "Full day to discover Essaouira. Visit UNESCO medina, port, ramparts. Possibility of water activities (surfing, kite-surfing). Free time to wander the souks. Overnight in Essaouira.",
      },
      {
        day: 4,
        title: "Essaouira - Agadir",
        description: "Return to Agadir via the coastal road. Panoramic photo stops. Visit to an argan oil cooperative. Arrival in Agadir in the late afternoon.",
      },
    ],
    included: [
      "4x4 or minibus transport",
      "English-speaking driver",
      "3 nights in hotels/riads",
      "3 breakfasts",
    ],
    excluded: [
      "Lunches and dinners",
      "Site entrance fees",
      "Water activities",
      "Drinks and tips",
    ],
    faqs: [
      {
        question: "Can we surf during the tour?",
        answer: "Yes, Essaouira and Mirleft beaches are excellent for surfing. You can rent equipment and take lessons on site.",
      },
      {
        question: "What is the water temperature?",
        answer: "The water is cool year-round (16-22°C) but pleasant in summer. Bring a wetsuit for surfing.",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1517639493569-5666a7556f8c",
    galleryImages: [
      "https://images.unsplash.com/photo-1517639493569-5666a7556f8c",
      "https://images.unsplash.com/photo-1579551053957-f2d0de0ce8da",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020",
    ],
    publishedAt: "2024-01-25",
    updatedAt: "2024-02-15",
    price: 320,
    category: "coastal",
  },
];
