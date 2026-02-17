import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getLocale, getDictionary } from "@/lib/i18n";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "Conditions d'utilisation | Travel Morocco"
      : "Terms of Service | Travel Morocco";

  return {
    title,
    alternates: {
      canonical: `/${validLocale}/terms`,
      languages: {
        fr: "/fr/terms",
        en: "/en/terms",
      },
    },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
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
                ? "Conditions d'utilisation"
                : "Terms of Service",
          },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8 prose prose-lg">
        <h1 className="font-serif text-4xl font-bold mb-8">
          {validLocale === "fr"
            ? "Conditions d'utilisation"
            : "Terms of Service"}
        </h1>

        <p className="text-muted-foreground">
          {validLocale === "fr"
            ? "Dernière mise à jour : 15 février 2024"
            : "Last updated: February 15, 2024"}
        </p>

        {validLocale === "fr" ? (
          <>
            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant ce site web, vous acceptez d'être lié par
              ces conditions d'utilisation et toutes les lois et réglementations
              applicables.
            </p>

            <h2>2. Réservations</h2>
            <p>
              Toutes les réservations sont sujettes à disponibilité et confirmation.
              Nous nous réservons le droit de refuser toute réservation à notre
              discrétion.
            </p>

            <h2>3. Paiement</h2>
            <ul>
              <li>Un acompte est généralement requis lors de la réservation</li>
              <li>Le solde doit être payé avant le début du voyage</li>
              <li>Les prix sont indiqués en euros et peuvent être sujets à modification</li>
            </ul>

            <h2>4. Annulation et remboursement</h2>
            <p>Politique d'annulation :</p>
            <ul>
              <li>Plus de 30 jours avant : remboursement intégral moins les frais administratifs</li>
              <li>15-30 jours avant : 50% de remboursement</li>
              <li>Moins de 15 jours avant : aucun remboursement</li>
            </ul>

            <h2>5. Responsabilité</h2>
            <p>
              Travel Morocco ne peut être tenu responsable des retards, annulations,
              ou événements indépendants de notre volonté. Nous recommandons fortement
              une assurance voyage.
            </p>

            <h2>6. Modifications du voyage</h2>
            <p>
              Nous nous réservons le droit de modifier l'itinéraire en cas de
              circonstances exceptionnelles, tout en maintenant la qualité du service.
            </p>

            <h2>7. Comportement</h2>
            <p>
              Les clients doivent respecter les lois locales et les coutumes. Un
              comportement inapproprié peut entraîner l'exclusion du voyage sans
              remboursement.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à :
              contact@travelmorocco.com
            </p>
          </>
        ) : (
          <>
            <h2>1. Acceptance of terms</h2>
            <p>
              By accessing and using this website, you agree to be bound by these
              terms of service and all applicable laws and regulations.
            </p>

            <h2>2. Bookings</h2>
            <p>
              All bookings are subject to availability and confirmation. We reserve
              the right to refuse any booking at our discretion.
            </p>

            <h2>3. Payment</h2>
            <ul>
              <li>A deposit is generally required when booking</li>
              <li>The balance must be paid before the trip begins</li>
              <li>Prices are shown in euros and are subject to change</li>
            </ul>

            <h2>4. Cancellation and refund</h2>
            <p>Cancellation policy:</p>
            <ul>
              <li>More than 30 days before: full refund minus administrative fees</li>
              <li>15-30 days before: 50% refund</li>
              <li>Less than 15 days before: no refund</li>
            </ul>

            <h2>5. Liability</h2>
            <p>
              Travel Morocco cannot be held responsible for delays, cancellations,
              or events beyond our control. We strongly recommend travel insurance.
            </p>

            <h2>6. Trip modifications</h2>
            <p>
              We reserve the right to modify the itinerary in case of exceptional
              circumstances, while maintaining the quality of service.
            </p>

            <h2>7. Behavior</h2>
            <p>
              Clients must respect local laws and customs. Inappropriate behavior
              may result in exclusion from the trip without refund.
            </p>

            <h2>8. Contact</h2>
            <p>
              For any questions regarding these terms, contact us at:
              contact@travelmorocco.com
            </p>
          </>
        )}
      </article>
    </div>
  );
}
