import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getLocale, getDictionary } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  const title =
    validLocale === "fr"
      ? "À propos de nous | Travel Morocco"
      : "About Us | Travel Morocco";
  const description =
    validLocale === "fr"
      ? "Découvrez Travel Morocco, votre agence de voyages spécialisée au Maroc. Expertise, passion et authenticité."
      : "Discover Travel Morocco, your specialized travel agency in Morocco. Expertise, passion and authenticity.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${validLocale}/about`,
      languages: {
        fr: "/fr/about",
        en: "/en/about",
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale);
  const dict = getDictionary(validLocale);

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: `/${validLocale}` },
          { label: dict.nav.about },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8 prose prose-lg">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">
          {dict.nav.about}
        </h1>

        {validLocale === "fr" ? (
          <>
            <h2>Notre Histoire</h2>
            <p>
              Travel Morocco est née de notre passion pour le Maroc et notre désir de
              partager les trésors cachés de ce magnifique pays. Depuis plus de 10 ans,
              nous organisons des voyages authentiques qui permettent à nos clients de
              découvrir le vrai visage du Maroc.
            </p>

            <h2>Notre Mission</h2>
            <p>
              Notre mission est de créer des expériences de voyage inoubliables qui
              vont au-delà du tourisme traditionnel. Nous croyons en un tourisme
              responsable et durable qui bénéficie aux communautés locales tout en
              offrant à nos clients des souvenirs impérissables.
            </p>

            <h2>Notre Équipe</h2>
            <p>
              Notre équipe est composée de guides professionnels, passionnés et
              expérimentés qui connaissent le Maroc comme leur poche. Tous
              francophones et anglophones, ils sont dévoués à rendre votre voyage
              aussi enrichissant que possible.
            </p>

            <h2>Pourquoi Nous Choisir ?</h2>
            <ul>
              <li>
                <strong>Expertise locale</strong> : Nous vivons au Maroc et connaissons
                les meilleurs endroits hors des sentiers battus.
              </li>
              <li>
                <strong>Circuits personnalisés</strong> : Chaque voyage peut être adapté
                à vos préférences et votre budget.
              </li>
              <li>
                <strong>Guides professionnels</strong> : Tous nos guides sont certifiés,
                expérimentés et parlent plusieurs langues.
              </li>
              <li>
                <strong>Prix transparents</strong> : Pas de frais cachés, tout est inclus
                dans nos tarifs.
              </li>
              <li>
                <strong>Support 24/7</strong> : Nous sommes toujours disponibles pendant
                votre voyage.
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2>Our Story</h2>
            <p>
              Travel Morocco was born from our passion for Morocco and our desire to
              share the hidden treasures of this magnificent country. For over 10 years,
              we have been organizing authentic trips that allow our clients to
              discover the true face of Morocco.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to create unforgettable travel experiences that go beyond
              traditional tourism. We believe in responsible and sustainable tourism
              that benefits local communities while providing our clients with lasting
              memories.
            </p>

            <h2>Our Team</h2>
            <p>
              Our team is made up of professional, passionate and experienced guides
              who know Morocco like the back of their hand. All French and English
              speaking, they are dedicated to making your trip as enriching as
              possible.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <strong>Local expertise</strong>: We live in Morocco and know the best
                off-the-beaten-path places.
              </li>
              <li>
                <strong>Customized tours</strong>: Every trip can be adapted to your
                preferences and budget.
              </li>
              <li>
                <strong>Professional guides</strong>: All our guides are certified,
                experienced and speak multiple languages.
              </li>
              <li>
                <strong>Transparent pricing</strong>: No hidden fees, everything is
                included in our rates.
              </li>
              <li>
                <strong>24/7 support</strong>: We are always available during your
                trip.
              </li>
            </ul>
          </>
        )}
      </article>
    </div>
  );
}
