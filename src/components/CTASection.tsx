import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function CTASection({
  title,
  description,
  ctaText,
  ctaHref,
}: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
