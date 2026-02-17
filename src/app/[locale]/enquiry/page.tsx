import { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { getLocale, getDictionary } from "@/lib/i18n";

interface EnquiryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: EnquiryPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Demande de devis | Travel Morocco"
      : "Request a Quote | Travel Morocco";
  const description =
    validLocale === "fr"
      ? "Demandez un devis personnalisé pour votre voyage au Maroc."
      : "Request a personalized quote for your trip to Morocco.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/enquiry`,
      languages: {
        fr: "/fr/enquiry",
        en: "/en/enquiry",
      },
    },
  };
}

export default async function EnquiryPage({ params }: EnquiryPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: `/${validLocale}` },
          {
            label:
              validLocale === "fr" ? "Demande de devis" : "Request a quote",
          },
        ]}
      />

      <div className="max-w-2xl mx-auto mt-8">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {validLocale === "fr"
              ? "Demande de devis"
              : "Request a Quote"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {validLocale === "fr"
              ? "Remplissez le formulaire et nous vous contacterons rapidement avec un devis personnalisé."
              : "Fill out the form and we will contact you quickly with a personalized quote."}
          </p>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <EnquiryForm locale={validLocale} />
        </Suspense>
      </div>
    </div>
  );
}
