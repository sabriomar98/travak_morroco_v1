import { Metadata } from "next";
import { TourGrid } from "@/components/TourGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getLocale, getDictionary } from "@/lib/i18n";
import { tours as toursFr } from "@/content/tours.fr";
import { tours as toursEn } from "@/content/tours.en";

interface ToursPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ToursPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Circuits au Maroc | Tours Premium & Voyages Organisés"
      : "Morocco Tours | Premium Tours & Organized Travel";
  const description =
    validLocale === "fr"
      ? "Explorez le Maroc avec nos circuits organisés. Désert, villes impériales, Atlas. Départs de Marrakech, Casablanca, Agadir."
      : "Explore Morocco with our organized tours. Desert, imperial cities, Atlas. Departures from Marrakech, Casablanca, Agadir.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/tours`,
      languages: {
        fr: "/fr/tours",
        en: "/en/tours",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${validLocale}/tours`,
      siteName: "Travel Morocco",
      images: [
        {
          url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
          width: 1200,
          height: 630,
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

export default async function ToursPage({ params }: ToursPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);
  const tours = validLocale === "fr" ? toursFr : toursEn;

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: `/${validLocale}` },
            { label: dict.nav.tours },
          ]}
        />

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {dict.nav.tours}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {validLocale === "fr"
              ? "Découvrez nos circuits organisés à travers le Maroc. Des déserts aux montagnes, des villes impériales aux côtes atlantiques."
              : "Discover our organized tours across Morocco. From deserts to mountains, imperial cities to Atlantic coasts."}
          </p>
        </header>

        <TourGrid items={tours} locale={validLocale} type="tours" />
      </div>

      <CTASection
        title={
          validLocale === "fr"
            ? "Circuit personnalisé ?"
            : "Custom tour?"
        }
        description={
          validLocale === "fr"
            ? "Contactez-nous pour créer votre circuit sur mesure"
            : "Contact us to create your custom tour"
        }
        ctaText={dict.nav.contact}
        ctaHref={`/${validLocale}/contact`}
      />
    </>
  );
}
