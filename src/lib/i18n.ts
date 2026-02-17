export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      tours: "Circuits",
      dayTrips: "Excursions",
      activities: "Activités",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      title: "Découvrez le Maroc Authentique",
      subtitle: "Des circuits inoubliables à travers le désert, les montagnes et les villes impériales",
      cta: "Découvrir nos circuits",
      ctaSecondary: "Nous contacter",
    },
    tour: {
      duration: "Durée",
      days: "jours",
      departure: "Départ",
      price: "Prix",
      from: "À partir de",
      highlights: "Points forts",
      itinerary: "Itinéraire",
      day: "Jour",
      included: "Inclus",
      excluded: "Non inclus",
      faqs: "Questions fréquentes",
      bookNow: "Réserver maintenant",
      enquire: "Demander un devis",
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour répondre à vos questions",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      submit: "Envoyer",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    },
    footer: {
      company: "Travel Morocco",
      description: "Votre agence de voyages au Maroc",
      quickLinks: "Liens rapides",
      followUs: "Suivez-nous",
      copyright: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      dayTrips: "Day Trips",
      activities: "Activities",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Discover Authentic Morocco",
      subtitle: "Unforgettable tours through the desert, mountains, and imperial cities",
      cta: "Explore our tours",
      ctaSecondary: "Contact us",
    },
    tour: {
      duration: "Duration",
      days: "days",
      departure: "Departure",
      price: "Price",
      from: "From",
      highlights: "Highlights",
      itinerary: "Itinerary",
      day: "Day",
      included: "Included",
      excluded: "Not included",
      faqs: "FAQs",
      bookNow: "Book now",
      enquire: "Request a quote",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to answer your questions",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
    },
    footer: {
      company: "Travel Morocco",
      description: "Your travel agency in Morocco",
      quickLinks: "Quick links",
      followUs: "Follow us",
      copyright: "All rights reserved.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
