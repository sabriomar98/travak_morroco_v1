import { Metadata } from "next";
import { TourGrid } from "@/components/TourGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getLocale, getDictionary } from "@/lib/i18n";
import { activities as activitiesFr } from "@/content/activities.fr";
import { activities as activitiesEn } from "@/content/activities.en";

interface ActivitiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ActivitiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Activités au Maroc | Expériences Uniques"
      : "Activities in Morocco | Unique Experiences";
  const description =
    validLocale === "fr"
      ? "Vivez des expériences uniques au Maroc. Montgolfière, quad dans le désert, surf, randonnée."
      : "Experience unique activities in Morocco. Hot air balloon, desert quad, surfing, hiking.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/activities`,
      languages: {
        fr: "/fr/activities",
        en: "/en/activities",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${validLocale}/activities`,
      siteName: "Travel Morocco",
      locale: validLocale,
      type: "website",
    },
  };
}

export default async function ActivitiesPage({ params }: ActivitiesPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);
  const activities = validLocale === "fr" ? activitiesFr : activitiesEn;

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: `/${validLocale}` },
            { label: dict.nav.activities },
          ]}
        />

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {dict.nav.activities}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {validLocale === "fr"
              ? "Découvrez des activités exceptionnelles pour enrichir votre séjour au Maroc."
              : "Discover exceptional activities to enrich your stay in Morocco."}
          </p>
        </header>

        <TourGrid items={activities} locale={validLocale} type="activities" />
      </div>

      <CTASection
        title={
          validLocale === "fr"
            ? "Créez votre expérience"
            : "Create your experience"
        }
        description={
          validLocale === "fr"
            ? "Contactez-nous pour combiner plusieurs activités"
            : "Contact us to combine multiple activities"
        }
        ctaText={dict.nav.contact}
        ctaHref={`/${validLocale}/contact`}
      />
    </>
  );
}
