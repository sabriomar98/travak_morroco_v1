import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Locale, getDictionary } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              {dict.footer.company}
            </h3>
            <p className="text-sm text-muted-foreground">
              {dict.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/tours`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {dict.nav.tours}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/day-trips`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {dict.nav.dayTrips}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/activities`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {dict.nav.activities}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">
              {locale === "fr" ? "Légal" : "Legal"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {locale === "fr"
                    ? "Politique de confidentialité"
                    : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {locale === "fr"
                    ? "Conditions d'utilisation"
                    : "Terms of Service"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{dict.nav.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@travelmorocco.com"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  contact@travelmorocco.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+212600000000"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  +212 6 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Travel Morocco. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
