import { Tour } from "./types";

export const tours: Tour[] = [
  {
    slug: "desert-tour-marrakech-3-days",
    title: "Circuit Désert de Marrakech - 3 Jours",
    durationDays: 3,
    departureCity: "Marrakech",
    shortDescription: "Découvrez la magie du désert marocain avec notre circuit de 3 jours au départ de Marrakech. Traversez l'Atlas, visitez Aït Ben Haddou et vivez une nuit inoubliable dans le désert.",
    longDescription: "Embarquez pour une aventure inoubliable à travers les paysages les plus époustouflants du Maroc. Ce circuit de 3 jours vous emmène de Marrakech vers les dunes dorées de Merzouga, en passant par le majestueux Haut Atlas et le célèbre ksar d'Aït Ben Haddou. Vivez l'expérience authentique d'une nuit sous les étoiles dans un camp berbère traditionnel au cœur du désert.",
    highlights: [
      "Traversée spectaculaire du Haut Atlas",
      "Visite du site UNESCO Aït Ben Haddou",
      "Balade à dos de chameau au coucher du soleil",
      "Nuit sous les étoiles dans un camp berbère",
      "Lever de soleil magique sur les dunes de Merzouga",
      "Découverte des gorges du Todra",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Marrakech - Aït Ben Haddou - Vallée du Dadès",
        description: "Départ tôt le matin de Marrakech. Traversée du Haut Atlas par le col du Tizi n'Tichka (2 260m). Visite du célèbre ksar d'Aït Ben Haddou, classé au patrimoine mondial de l'UNESCO. Continuation vers Ouarzazate puis la vallée du Dadès. Dîner et nuit dans un hôtel traditionnel.",
      },
      {
        day: 2,
        title: "Vallée du Dadès - Gorges du Todra - Merzouga",
        description: "Après le petit-déjeuner, route vers les gorges du Todra. Temps libre pour une promenade dans ces impressionnantes gorges. Continuation vers Merzouga. Balade à dos de chameau au coucher du soleil pour rejoindre le camp berbère. Dîner sous les étoiles et nuit au camp.",
      },
      {
        day: 3,
        title: "Merzouga - Ouarzazate - Marrakech",
        description: "Lever tôt pour admirer le magnifique lever de soleil sur les dunes. Retour à Merzouga à dos de chameau. Après le petit-déjeuner, route de retour vers Marrakech via Ouarzazate et le Haut Atlas. Arrivée à Marrakech en fin d'après-midi.",
      },
    ],
    included: [
      "Transport en 4x4 climatisé",
      "Chauffeur professionnel parlant français",
      "2 nuits d'hébergement (1 hôtel + 1 camp désert)",
      "2 petits-déjeuners et 2 dîners",
      "Balade à dos de chameau",
      "Musique traditionnelle autour du feu",
    ],
    excluded: [
      "Déjeuners",
      "Boissons",
      "Entrées des sites touristiques",
      "Pourboires",
    ],
    faqs: [
      {
        question: "Quelle est la meilleure période pour ce circuit ?",
        answer: "Le circuit peut se faire toute l'année, mais les meilleures périodes sont le printemps (mars-mai) et l'automne (septembre-novembre) pour des températures plus agréables.",
      },
      {
        question: "Le circuit est-il adapté aux enfants ?",
        answer: "Oui, ce circuit convient aux familles avec enfants. Les trajets peuvent être longs, mais les paysages sont spectaculaires et les activités variées.",
      },
      {
        question: "Que faut-il apporter ?",
        answer: "Prévoyez des vêtements confortables, un chapeau, de la crème solaire, des lunettes de soleil et une veste pour les soirées fraîches dans le désert.",
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
    title: "Circuit des Villes Impériales depuis Casablanca - 5 Jours",
    durationDays: 5,
    departureCity: "Casablanca",
    shortDescription: "Explorez les quatre villes impériales du Maroc : Rabat, Meknès, Fès et Marrakech. Un voyage à travers l'histoire et la culture marocaine.",
    longDescription: "Découvrez les trésors historiques et culturels du Maroc lors de ce circuit complet de 5 jours. Visitez les quatre villes impériales qui ont marqué l'histoire du royaume : Rabat, la capitale moderne, Meknès et ses monuments majestueux, Fès la spirituelle avec sa médina millénaire, et enfin Marrakech la rouge avec ses souks colorés et sa place emblématique Jemaa el-Fna.",
    highlights: [
      "Découverte des 4 villes impériales",
      "Visite de la médina de Fès, patrimoine UNESCO",
      "Exploration de la place Jemaa el-Fna à Marrakech",
      "Visite des monuments historiques majeurs",
      "Rencontre avec l'artisanat traditionnel",
      "Dégustation de la gastronomie marocaine",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Casablanca - Rabat",
        description: "Départ de Casablanca avec visite de la mosquée Hassan II (extérieur). Route vers Rabat, capitale du Maroc. Visite du mausolée Mohammed V, de la tour Hassan et du Chellah. Nuit à Rabat.",
      },
      {
        day: 2,
        title: "Rabat - Meknès - Fès",
        description: "Départ pour Meknès. Visite de la porte Bab Mansour, du mausolée Moulay Ismaïl et des écuries royales. Excursion aux ruines romaines de Volubilis. Continuation vers Fès. Nuit à Fès.",
      },
      {
        day: 3,
        title: "Fès - Visite guidée",
        description: "Journée complète dédiée à la découverte de Fès. Visite de la médina classée UNESCO, de la medersa Bou Inania, de la fontaine Nejjarine et des tanneries. Découverte de l'artisanat local. Nuit à Fès.",
      },
      {
        day: 4,
        title: "Fès - Marrakech",
        description: "Route vers Marrakech via Beni Mellal et les plaines fertiles. Installation à l'hôtel. Temps libre pour découvrir la place Jemaa el-Fna en soirée. Nuit à Marrakech.",
      },
      {
        day: 5,
        title: "Marrakech - Visite et retour Casablanca",
        description: "Visite guidée de Marrakech : la mosquée Koutoubia, le palais Bahia, les tombeaux Saadiens et les jardins Majorelle. Retour vers Casablanca en fin de journée.",
      },
    ],
    included: [
      "Transport en véhicule climatisé",
      "Chauffeur/guide francophone",
      "4 nuits en hôtels 3-4 étoiles",
      "4 petits-déjeuners",
      "Guides locaux à Fès et Marrakech",
    ],
    excluded: [
      "Déjeuners et dîners",
      "Entrées des monuments",
      "Boissons",
      "Pourboires",
    ],
    faqs: [
      {
        question: "Le circuit peut-il être personnalisé ?",
        answer: "Oui, nous pouvons adapter l'itinéraire selon vos préférences et votre budget. Contactez-nous pour un devis personnalisé.",
      },
      {
        question: "Les guides parlent-ils français ?",
        answer: "Oui, tous nos guides sont francophones et connaissent parfaitement l'histoire et la culture marocaine.",
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
    title: "Circuit Côte Atlantique depuis Agadir - 4 Jours",
    durationDays: 4,
    departureCity: "Agadir",
    shortDescription: "Découvrez la beauté de la côte atlantique marocaine, d'Agadir à Essaouira, en passant par les plages sauvages et les villages de pêcheurs.",
    longDescription: "Ce circuit de 4 jours vous emmène le long de la magnifique côte atlantique marocaine. Au départ d'Agadir, découvrez les plages de sable fin, les villages de pêcheurs authentiques, et la ville fortifiée d'Essaouira. Un voyage parfait pour les amoureux de la mer, du surf et de la culture côtière marocaine.",
    highlights: [
      "Plages spectaculaires de l'Atlantique",
      "Visite d'Essaouira, perle de l'Atlantique",
      "Découverte de villages de pêcheurs traditionnels",
      "Dégustation de poissons frais",
      "Observation d'arganiers et visite de coopératives",
      "Spots de surf réputés",
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Agadir - Tiznit - Mirleft",
        description: "Départ d'Agadir vers le sud. Visite de Tiznit, ville fortifiée connue pour son artisanat en argent. Route vers Mirleft, charmant village côtier. Temps libre sur la plage. Nuit à Mirleft.",
      },
      {
        day: 2,
        title: "Mirleft - Sidi Ifni - Essaouira",
        description: "Exploration de Sidi Ifni et son architecture art déco espagnole. Route le long de la côte vers Essaouira. Installation à l'hôtel. Balade en soirée dans la médina. Nuit à Essaouira.",
      },
      {
        day: 3,
        title: "Essaouira - Journée libre",
        description: "Journée complète pour découvrir Essaouira. Visite de la médina UNESCO, du port, des remparts. Possibilité d'activités nautiques (surf, kite-surf). Temps libre pour flâner dans les souks. Nuit à Essaouira.",
      },
      {
        day: 4,
        title: "Essaouira - Agadir",
        description: "Retour vers Agadir par la route côtière. Arrêts photos panoramiques. Visite d'une coopérative d'huile d'argan. Arrivée à Agadir en fin de journée.",
      },
    ],
    included: [
      "Transport en 4x4 ou minibus",
      "Chauffeur francophone",
      "3 nuits en hôtels/riads",
      "3 petits-déjeuners",
    ],
    excluded: [
      "Déjeuners et dîners",
      "Entrées des sites",
      "Activités nautiques",
      "Boissons et pourboires",
    ],
    faqs: [
      {
        question: "Peut-on faire du surf pendant le circuit ?",
        answer: "Oui, les plages d'Essaouira et de Mirleft sont excellentes pour le surf. Vous pouvez louer du matériel et prendre des cours sur place.",
      },
      {
        question: "Quelle est la température de l'eau ?",
        answer: "L'eau est fraîche toute l'année (16-22°C) mais agréable en été. Prévoyez une combinaison pour le surf.",
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
