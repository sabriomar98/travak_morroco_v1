import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { getLocale, getDictionary } from "@/lib/i18n";
import { activities as activitiesFr } from "@/content/activities.fr";
import { activities as activitiesEn } from "@/content/activities.en";

interface ActivityPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = activitiesFr.map((activity) => activity.slug);
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
}: ActivityPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = getLocale(locale);
  const activities = validLocale === "fr" ? activitiesFr : activitiesEn;
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return { title: "Activity not found" };
  }

  return {
    title: activity.title,
    description: activity.shortDescription,
    alternates: {
      canonical: `/${validLocale}/activities/${slug}`,
      languages: {
        fr: `/fr/activities/${slug}`,
        en: `/en/activities/${slug}`,
      },
    },
    openGraph: {
      title: activity.title,
      description: activity.shortDescription,
      url: `/${validLocale}/activities/${slug}`,
      siteName: "Travel Morocco",
      images: [{ url: activity.heroImage, width: 1200, height: 630 }],
      locale: validLocale,
      type: "website",
    },
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { locale, slug } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);
  const activities = validLocale === "fr" ? activitiesFr : activitiesEn;
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image
          src={activity.heroImage}
          alt={activity.title}
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
            { label: dict.nav.activities, href: `/${validLocale}/activities` },
            { label: activity.title },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <article className="lg:col-span-2">
            <header className="mb-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {activity.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{activity.location}</span>
              </div>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <p>{activity.longDescription}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-4">
                {dict.tour.highlights}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {activity.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">
                  {dict.tour.included}
                </h2>
                <ul className="space-y-2">
                  {activity.included.map((item, index) => (
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
                  {activity.excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {activity.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold mb-6">
                  {dict.tour.faqs}
                </h2>
                <FAQAccordion faqs={activity.faqs} />
              </section>
            )}
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="border rounded-lg p-6 shadow-lg">
                {activity.price && (
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">
                      {dict.tour.from}
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {activity.price}€
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {validLocale === "fr" ? "par personne" : "per person"}
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/${validLocale}/enquiry?tour=${activity.slug}`}>
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
    </>
  );
}
