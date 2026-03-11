import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { getLocale, getDictionary } from "@/lib/i18n";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr" ? "Contactez-nous | Travel Morocco" : "Contact Us | Travel Morocco";
  const description =
    validLocale === "fr"
      ? "Contactez Travel Morocco pour toutes vos questions sur nos circuits et excursions au Maroc."
      : "Contact Travel Morocco for any questions about our tours and excursions in Morocco.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/contact`,
      languages: {
        fr: "/fr/contact",
        en: "/en/contact",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${validLocale}/contact`,
      siteName: "Travel Morocco",
      locale: validLocale,
      type: "website",
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: `/${validLocale}` },
          { label: dict.nav.contact },
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {dict.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {dict.contact.subtitle}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">
                {validLocale === "fr"
                  ? "Informations de contact"
                  : "Contact Information"}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@travelmorocco.com"
                      className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      contact@travelmorocco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">
                      {validLocale === "fr" ? "Téléphone" : "Phone"}
                    </p>
                    <a
                      href="tel:+212600000000"
                      className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      +212 6 00 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">
                      {validLocale === "fr" ? "Adresse" : "Address"}
                    </p>
                    <p className="text-muted-foreground">
                      Marrakech, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                {validLocale === "fr"
                  ? "Horaires d'ouverture"
                  : "Opening Hours"}
              </h3>
              <p className="text-muted-foreground">
                {validLocale === "fr"
                  ? "Lundi - Samedi : 9h00 - 18h00"
                  : "Monday - Saturday: 9:00 AM - 6:00 PM"}
              </p>
              <p className="text-muted-foreground">
                {validLocale === "fr" ? "Dimanche : Fermé" : "Sunday: Closed"}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">
              {validLocale === "fr"
                ? "Envoyez-nous un message"
                : "Send us a message"}
            </h2>
            <ContactForm locale={validLocale} />
          </div>
        </div>
      </div>
    </div>
  );
}
