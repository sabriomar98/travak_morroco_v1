import { Activity } from "./types";

export const activities: Activity[] = [
  {
    slug: "hot-air-balloon-marrakech",
    title: "Vol en Montgolfière au-dessus de Marrakech",
    location: "Marrakech",
    shortDescription: "Survolez les palmeraies et les villages berbères au lever du soleil. Une expérience magique et inoubliable.",
    longDescription: "Vivez une expérience unique en montgolfière au-dessus des paysages enchanteurs de Marrakech. Au lever du soleil, admirez les palmeraies, les villages berbères traditionnels et l'Atlas enneigé. Un moment magique qui vous laissera des souvenirs impérissables. Après le vol, profitez d'un petit-déjeuner berbère traditionnel sous une tente nomade.",
    highlights: [
      "Vol au lever du soleil (environ 1 heure)",
      "Vues panoramiques sur l'Atlas et le désert",
      "Survol de palmeraies et villages berbères",
      "Petit-déjeuner berbère sous tente nomade",
      "Certificat de vol",
      "Transport aller-retour depuis Marrakech",
    ],
    included: [
      "Transport 4x4 depuis/vers l'hôtel",
      "Vol en montgolfière (environ 1h)",
      "Pilote professionnel certifié",
      "Petit-déjeuner berbère traditionnel",
      "Certificat de vol souvenir",
      "Assurance",
    ],
    excluded: [
      "Photos et vidéos du vol (disponibles à l'achat)",
      "Pourboires",
    ],
    faqs: [
      {
        question: "À quelle heure commence l'activité ?",
        answer: "Le départ de votre hôtel se fait très tôt le matin (vers 5h-6h selon la saison) pour profiter du lever du soleil.",
      },
      {
        question: "L'activité est-elle sûre ?",
        answer: "Oui, tous nos pilotes sont certifiés et expérimentés. Les montgolfières sont régulièrement inspectées et nous respectons toutes les normes de sécurité.",
      },
      {
        question: "Que se passe-t-il en cas de mauvais temps ?",
        answer: "Si les conditions météo ne permettent pas le vol, l'activité sera reportée ou remboursée intégralement.",
      },
      {
        question: "Y a-t-il des restrictions ?",
        answer: "L'activité n'est pas recommandée aux femmes enceintes, personnes ayant des problèmes cardiaques ou de mobilité. Âge minimum : 6 ans.",
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
