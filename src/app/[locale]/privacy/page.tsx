import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getLocale, getDictionary } from "@/lib/i18n";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Politique de confidentialité | Travel Morocco"
      : "Privacy Policy | Travel Morocco";

  return {
    title,
    alternates: {
      canonical: `/${validLocale}/privacy`,
      languages: {
        fr: "/fr/privacy",
        en: "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
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
              validLocale === "fr"
                ? "Politique de confidentialité"
                : "Privacy Policy",
          },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8 prose prose-lg">
        <h1 className="font-serif text-4xl font-bold mb-8">
          {validLocale === "fr"
            ? "Politique de confidentialité"
            : "Privacy Policy"}
        </h1>

        <p className="text-muted-foreground">
          {validLocale === "fr"
            ? "Dernière mise à jour : 15 février 2024"
            : "Last updated: February 15, 2024"}
        </p>

        {validLocale === "fr" ? (
          <>
            <h2>1. Introduction</h2>
            <p>
              Travel Morocco s'engage à protéger votre vie privée. Cette politique
              de confidentialité explique comment nous collectons, utilisons et
              protégeons vos informations personnelles.
            </p>

            <h2>2. Informations que nous collectons</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul>
              <li>Nom et coordonnées (email, téléphone)</li>
              <li>Informations de réservation</li>
              <li>Préférences de voyage</li>
              <li>Données de navigation sur notre site</li>
            </ul>

            <h2>3. Utilisation des informations</h2>
            <p>Nous utilisons vos informations pour :</p>
            <ul>
              <li>Traiter vos réservations</li>
              <li>Vous contacter concernant votre voyage</li>
              <li>Améliorer nos services</li>
              <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
            </ul>

            <h2>4. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
              vos informations personnelles contre tout accès non autorisé, altération,
              divulgation ou destruction.
            </p>

            <h2>5. Vos droits</h2>
            <p>Vous avez le droit de :</p>
            <ul>
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier vos données</li>
              <li>Demander la suppression de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez désactiver les cookies dans les paramètres de
              votre navigateur.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité,
              contactez-nous à : contact@travelmorocco.com
            </p>
          </>
        ) : (
          <>
            <h2>1. Introduction</h2>
            <p>
              Travel Morocco is committed to protecting your privacy. This privacy
              policy explains how we collect, use and protect your personal
              information.
            </p>

            <h2>2. Information we collect</h2>
            <p>We collect the following information:</p>
            <ul>
              <li>Name and contact details (email, phone)</li>
              <li>Booking information</li>
              <li>Travel preferences</li>
              <li>Browsing data on our site</li>
            </ul>

            <h2>3. Use of information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process your bookings</li>
              <li>Contact you regarding your trip</li>
              <li>Improve our services</li>
              <li>Send you promotional offers (with your consent)</li>
            </ul>

            <h2>4. Data protection</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information against unauthorized access, alteration, disclosure or
              destruction.
            </p>

            <h2>5. Your rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify your data</li>
              <li>Request deletion of your data</li>
              <li>Object to the processing of your data</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Our site uses cookies to improve your browsing experience. You can
              disable cookies in your browser settings.
            </p>

            <h2>7. Contact</h2>
            <p>
              For any questions regarding this privacy policy, contact us at:
              contact@travelmorocco.com
            </p>
          </>
        )}
      </article>
    </div>
  );
}
