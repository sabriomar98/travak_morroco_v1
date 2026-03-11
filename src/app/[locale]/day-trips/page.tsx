import { Metadata } from "next";
import { TourGrid } from "@/components/TourGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getLocale, getDictionary } from "@/lib/i18n";
import { dayTrips as dayTripsFr } from "@/content/dayTrips.fr";
import { dayTrips as dayTripsEn } from "@/content/dayTrips.en";

interface DayTripsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DayTripsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Excursions d'une Journée au Maroc | Day Trips"
      : "Day Trips in Morocco | One Day Excursions";
  const description =
    validLocale === "fr"
      ? "Explorez le Maroc en une journée. Excursions depuis Marrakech, Casablanca, Fès. Montagnes, cascades, villages berbères."
      : "Explore Morocco in one day. Excursions from Marrakech, Casablanca, Fes. Mountains, waterfalls, Berber villages.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/day-trips`,
      languages: {
        fr: "/fr/day-trips",
        en: "/en/day-trips",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${validLocale}/day-trips`,
      siteName: "Travel Morocco",
      locale: validLocale,
      type: "website",
    },
  };
}

export default async function DayTripsPage({ params }: DayTripsPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);
  const dayTrips = validLocale === "fr" ? dayTripsFr : dayTripsEn;

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: `/${validLocale}` },
            { label: dict.nav.dayTrips },
          ]}
        />

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {dict.nav.dayTrips}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {validLocale === "fr"
              ? "Profitez d'excursions inoubliables d'une journée au départ des principales villes du Maroc."
              : "Enjoy unforgettable one-day excursions from Morocco's main cities."}
          </p>
        </header>

        <TourGrid items={dayTrips} locale={validLocale} type="day-trips" />
      </div>

      <CTASection
        title={
          validLocale === "fr"
            ? "Besoin d'une excursion personnalisée ?"
            : "Need a custom excursion?"
        }
        description={
          validLocale === "fr"
            ? "Contactez-nous pour organiser votre excursion sur mesure"
            : "Contact us to organize your custom excursion"
        }
        ctaText={dict.nav.contact}
        ctaHref={`/${validLocale}/contact`}
      />
    </>
  );
}
