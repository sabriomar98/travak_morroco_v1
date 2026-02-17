import { Activity } from '@/types';

export const activities: Activity[] = [
  {
    id: '1',
    slug: 'camel-ride-sahara',
    title: 'Balade à dos de chameau dans le Sahara',
    description: 'Vivez une expérience inoubliable avec une balade à dos de chameau dans les dunes dorées du Sahara marocain. Admirez le coucher de soleil spectaculaire sur le désert.',
    shortDescription: 'Découvrez le Sahara à dos de chameau au coucher du soleil',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=600&fit=crop',
    price: 45,
    duration: '2 heures',
    category: 'activity',
    location: 'Merzouga',
    highlights: [
      'Balade au coucher du soleil',
      'Guide local expérimenté',
      'Thé à la menthe traditionnel',
      'Photos panoramiques'
    ]
  },
  {
    id: '2',
    slug: 'quad-desert',
    title: 'Excursion en quad dans le désert',
    description: 'Explorez le désert marocain en quad pour une aventure pleine d\'adrénaline. Parcourez les dunes et les paysages désertiques époustouflants.',
    shortDescription: 'Aventure en quad à travers les dunes du désert',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    price: 80,
    duration: '3 heures',
    category: 'activity',
    location: 'Marrakech',
    highlights: [
      'Équipement professionnel fourni',
      'Formation de sécurité',
      'Paysages désertiques variés',
      'Pause rafraîchissement'
    ]
  },
  {
    id: '3',
    slug: 'cooking-class-marrakech',
    title: 'Cours de cuisine marocaine',
    description: 'Apprenez à préparer des plats traditionnels marocains avec un chef local. Découvrez les secrets du tajine, du couscous et des pâtisseries orientales.',
    shortDescription: 'Cours de cuisine avec un chef marocain',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    price: 65,
    duration: '4 heures',
    category: 'activity',
    location: 'Marrakech',
    highlights: [
      'Chef professionnel',
      'Marché local inclus',
      'Recettes authentiques',
      'Dégustation incluse'
    ]
  },
  {
    id: '4',
    slug: 'hammam-spa',
    title: 'Expérience Hammam & Spa',
    description: 'Détendez-vous avec un hammam traditionnel marocain suivi d\'un massage relaxant. Purifiez votre corps et votre esprit selon les traditions ancestrales.',
    shortDescription: 'Hammam traditionnel et massage',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    price: 55,
    duration: '2.5 heures',
    category: 'activity',
    location: 'Marrakech',
    highlights: [
      'Hammam traditionnel',
      'Gommage au savon noir',
      'Massage argan oil',
      'Thé à la menthe'
    ]
  },
  {
    id: '5',
    slug: 'hot-air-balloon',
    title: 'Vol en montgolfière au-dessus du désert',
    description: 'Survolez le désert marocain en montgolfière au lever du soleil. Profitez d\'une vue panoramique à 360° sur les paysages spectaculaires.',
    shortDescription: 'Vol en montgolfière au lever du soleil',
    image: 'https://images.unsplash.com/photo-1498550744921-75f79806b163?w=800&h=600&fit=crop',
    price: 180,
    duration: '4 heures',
    category: 'activity',
    location: 'Marrakech',
    highlights: [
      'Vol au lever du soleil',
      'Petit-déjeuner berbère',
      'Certificat de vol',
      'Transport inclus'
    ]
  },
  {
    id: '6',
    slug: 'medina-walking-tour',
    title: 'Visite guidée de la Médina',
    description: 'Explorez les ruelles animées de la médina avec un guide local. Découvrez l\'histoire, la culture et les secrets des souks traditionnels.',
    shortDescription: 'Découverte à pied de la médina historique',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop',
    price: 30,
    duration: '3 heures',
    category: 'activity',
    location: 'Fès',
    highlights: [
      'Guide local expert',
      'Souks traditionnels',
      'Sites historiques',
      'Dégustation locale'
    ]
  }
];

export const tours = activities.filter(a => a.category === 'tour');
export const dayTrips = activities.filter(a => a.category === 'day-trip');
