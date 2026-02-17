import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { getLocale, getDictionary } from "@/lib/i18n";
import { tours as toursFr } from "@/content/tours.fr";
import { tours as toursEn } from "@/content/tours.en";

interface TourPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = toursFr.map((tour) => tour.slug);
  const locales = ["fr", "en"];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = getLocale(locale);
  const tours = validLocale === "fr" ? toursFr : toursEn;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return { title: "Tour not found" };
  }

  return {
    title: tour.title,
    description: tour.shortDescription,
    alternates: {
      canonical: `/${validLocale}/tours/${slug}`,
      languages: {
        fr: `/fr/tours/${slug}`,
        en: `/en/tours/${slug}`,
      },
    },
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      url: `/${validLocale}/tours/${slug}`,
      siteName: "Travel Morocco",
      images: [
        {
          url: tour.heroImage,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
      locale: validLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.shortDescription,
      images: [tour.heroImage],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { locale, slug } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);
  const tours = validLocale === "fr" ? toursFr : toursEn;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  // Tour Schema
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.longDescription,
    image: tour.heroImage,
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itineraryDays.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: day.title,
        description: day.description,
      })),
    },
    offers: tour.price
      ? {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container py-8">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: `/${validLocale}` },
            { label: dict.nav.tours, href: `/${validLocale}/tours` },
            { label: tour.title },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <header className="mb-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {tour.durationDays} {dict.tour.days}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>
                    {dict.tour.departure}: {tour.departureCity}
                  </span>
                </div>
              </div>
            </header>

            {/* Description */}
            <section className="prose prose-lg max-w-none mb-12">
              <p>{tour.longDescription}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-4">
                {dict.tour.highlights}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6">
                {dict.tour.itinerary}
              </h2>
              <div className="space-y-6">
                {tour.itineraryDays.map((day) => (
                  <div
                    key={day.day}
                    className="border-l-4 border-primary pl-4 py-2"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {dict.tour.day} {day.day}: {day.title}
                    </h3>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Included/Excluded */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">
                  {dict.tour.included}
                </h2>
                <ul className="space-y-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">
                  {dict.tour.excluded}
                </h2>
                <ul className="space-y-2">
                  {tour.excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQs */}
            {tour.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold mb-6">
                  {dict.tour.faqs}
                </h2>
                <FAQAccordion faqs={tour.faqs} />
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Booking Card */}
              <div className="border rounded-lg p-6 shadow-lg">
                {tour.price && (
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">
                      {dict.tour.from}
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {tour.price}€
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {validLocale === "fr" ? "par personne" : "per person"}
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/${validLocale}/enquiry?tour=${tour.slug}`}>
                      {dict.tour.bookNow}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full"
                  >
                    <Link href={`/${validLocale}/contact`}>
                      {dict.tour.enquire}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTASection
        title={
          validLocale === "fr"
            ? "Découvrez d'autres circuits"
            : "Discover other tours"
        }
        description={
          validLocale === "fr"
            ? "Explorez notre sélection complète de circuits au Maroc"
            : "Explore our complete selection of tours in Morocco"
        }
        ctaText={
          validLocale === "fr" ? "Voir tous les circuits" : "View all tours"
        }
        ctaHref={`/${validLocale}/tours`}
      />
    </>
  );
}
