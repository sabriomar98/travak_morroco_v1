import { DayTrip } from "./types";

export const dayTrips: DayTrip[] = [
  {
    slug: "ourika-valley-day-trip",
    title: "Excursion Vallée de l'Ourika",
    departureCity: "Marrakech",
    shortDescription: "Échappez à l'agitation de Marrakech et découvrez la beauté naturelle de la vallée de l'Ourika, ses cascades et ses villages berbères.",
    longDescription: "À seulement une heure de Marrakech, la vallée de l'Ourika offre un contraste saisissant avec la ville rouge. Nichée au pied du Haut Atlas, cette vallée verdoyante est parsemée de villages berbères traditionnels et de cascades rafraîchissantes. Une excursion parfaite pour découvrir la vie rurale marocaine et profiter de paysages montagnards spectaculaires.",
    highlights: [
      "Paysages spectaculaires du Haut Atlas",
      "Visite de villages berbères authentiques",
      "Randonnée aux cascades de Setti Fatma",
      "Déjeuner dans un restaurant au bord de la rivière",
      "Découverte de l'artisanat local",
      "Vues panoramiques sur la vallée",
    ],
    included: [
      "Transport aller-retour depuis Marrakech",
      "Chauffeur francophone",
      "Guide local pour la randonnée",
      "Temps libre pour le déjeuner",
    ],
    excluded: [
      "Déjeuner",
      "Boissons",
      "Pourboires",
      "Dépenses personnelles",
    ],
    faqs: [
      {
        question: "Quelle est la durée de l'excursion ?",
        answer: "L'excursion dure environ 8 heures, départ vers 8h30 et retour vers 17h.",
      },
      {
        question: "Le niveau de randonnée est-il difficile ?",
        answer: "La randonnée jusqu'aux cascades est de niveau modéré, accessible à tous avec une condition physique normale. Prévoyez de bonnes chaussures de marche.",
      },
      {
        question: "Peut-on se baigner dans les cascades ?",
        answer: "Oui, en été il est possible de se baigner. L'eau est fraîche et très rafraîchissante.",
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
