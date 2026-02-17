import { TourCard } from "./TourCard";
import { Tour } from "@/content/types";
import { DayTrip } from "@/content/types";
import { Activity } from "@/content/types";
import { Locale } from "@/lib/i18n";

interface TourGridProps {
  items: (Tour | DayTrip | Activity)[];
  locale: Locale;
  type: "tours" | "day-trips" | "activities";
}

export function TourGrid({ items, locale, type }: TourGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <TourCard
          key={item.slug}
          slug={item.slug}
          title={item.title}
          shortDescription={item.shortDescription}
          heroImage={item.heroImage}
          durationDays={"durationDays" in item ? item.durationDays : undefined}
          departureCity={
            "departureCity" in item ? item.departureCity : ""
          }
          location={"location" in item ? item.location : undefined}
          price={item.price}
          locale={locale}
          type={type}
        />
      ))}
    </div>
  );
}
