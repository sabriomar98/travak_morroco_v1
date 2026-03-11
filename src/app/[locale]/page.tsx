import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TourGrid } from "@/components/TourGrid";
import { CTASection } from "@/components/CTASection";
import { getLocale, getDictionary } from "@/lib/i18n";
import { tours as toursFr } from "@/content/tours.fr";
import { tours as toursEn } from "@/content/tours.en";
import { dayTrips as dayTripsFr } from "@/content/dayTrips.fr";
import { dayTrips as dayTripsEn } from "@/content/dayTrips.en";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Circuits au Maroc | Voyages Authentiques & Tours Premium"
      : "Morocco Tours | Authentic Travel & Premium Tours";
  const description =
    validLocale === "fr"
      ? "Découvrez le Maroc authentique avec nos circuits premium. Désert, villes impériales, côte atlantique. Guides experts, expériences inoubliables."
      : "Discover authentic Morocco with our premium tours. Desert, imperial cities, Atlantic coast. Expert guides, unforgettable experiences.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${validLocale}`,
      siteName: "Travel Morocco",
      images: [
        {
          url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
          width: 1200,
          height: 630,
          alt: "Moroccan desert landscape",
        },
      ],
      locale: validLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"],
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);

  const tours = validLocale === "fr" ? toursFr : toursEn;
  const dayTrips = validLocale === "fr" ? dayTripsFr : dayTripsEn;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Travel Morocco",
    description:
      validLocale === "fr"
        ? "Agence de voyages spécialisée au Maroc"
        : "Specialized travel agency in Morocco",
    url: `https://travelmorocco.com/${validLocale}`,
    logo: "https://travelmorocco.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-6-00-00-00-00",
      contactType: "customer service",
      availableLanguage: ["French", "English", "Arabic"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Hero
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        ctaText={dict.hero.cta}
        ctaHref={`/${validLocale}/tours`}
        ctaSecondaryText={dict.hero.ctaSecondary}
        ctaSecondaryHref={`/${validLocale}/contact`}
        locale={validLocale}
      />

      {/* Featured Tours */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
          {validLocale === "fr" ? "Nos Circuits Populaires" : "Our Popular Tours"}
        </h2>
        <TourGrid items={tours.slice(0, 3)} locale={validLocale} type="tours" />
        <div className="text-center mt-8">
          <a
            href={`/${validLocale}/tours`}
            className="text-primary hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            {validLocale === "fr"
              ? "Voir tous les circuits →"
              : "View all tours →"}
          </a>
        </div>
      </section>

      {/* Featured Day Trips */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            {validLocale === "fr"
              ? "Excursions d'une Journée"
              : "Day Trips"}
          </h2>
          <TourGrid
            items={dayTrips}
            locale={validLocale}
            type="day-trips"
          />
          <div className="text-center mt-8">
            <a
              href={`/${validLocale}/day-trips`}
              className="text-primary hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              {validLocale === "fr"
                ? "Voir toutes les excursions →"
                : "View all day trips →"}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title={
          validLocale === "fr"
            ? "Prêt pour l'aventure ?"
            : "Ready for an adventure?"
        }
        description={
          validLocale === "fr"
            ? "Contactez-nous pour créer votre voyage sur mesure au Maroc"
            : "Contact us to create your custom trip to Morocco"
        }
        ctaText={dict.nav.contact}
        ctaHref={`/${validLocale}/contact`}
      />
    </>
  );
}
