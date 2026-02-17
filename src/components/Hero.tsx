import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Locale } from "@/lib/i18n";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  locale: Locale;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  backgroundImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
}: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
          {ctaSecondaryText && ctaSecondaryHref && (
            <Button asChild size="lg" variant="outline" className="text-base bg-white/10 hover:bg-white/20 text-white border-white">
              <Link href={ctaSecondaryHref}>{ctaSecondaryText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
