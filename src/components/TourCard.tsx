import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Locale, getDictionary } from "@/lib/i18n";

interface TourCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  durationDays?: number;
  departureCity: string;
  price?: number;
  locale: Locale;
  type: "tours" | "day-trips" | "activities";
  location?: string;
}

export function TourCard({
  slug,
  title,
  shortDescription,
  heroImage,
  durationDays,
  departureCity,
  price,
  locale,
  type,
  location,
}: TourCardProps) {
  const dict = getDictionary(locale);
  const href = `/${locale}/${type}/${slug}`;

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link
            href={href}
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {durationDays && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {durationDays} {dict.tour.days}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location || departureCity}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        {price && (
          <div className="text-lg font-semibold text-primary">
            {dict.tour.from} {price}€
          </div>
        )}
        <Button asChild variant="outline" size="sm">
          <Link href={href}>
            {locale === "fr" ? "Voir détails" : "View details"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
