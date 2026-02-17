import { MetadataRoute } from "next";
import { tours as toursFr } from "@/content/tours.fr";
import { dayTrips as dayTripsFr } from "@/content/dayTrips.fr";
import { activities as activitiesFr } from "@/content/activities.fr";

const baseUrl = "https://travelmorocco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/tours`,
          en: `${baseUrl}/en/tours`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/day-trips`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/day-trips`,
          en: `${baseUrl}/en/day-trips`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/activities`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/activities`,
          en: `${baseUrl}/en/activities`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/about`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
  ];

  const tourPages = toursFr.map((tour) => ({
    url: `${baseUrl}/fr/tours/${tour.slug}`,
    lastModified: new Date(tour.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr/tours/${tour.slug}`,
        en: `${baseUrl}/en/tours/${tour.slug}`,
      },
    },
  }));

  const dayTripPages = dayTripsFr.map((trip) => ({
    url: `${baseUrl}/fr/day-trips/${trip.slug}`,
    lastModified: new Date(trip.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr/day-trips/${trip.slug}`,
        en: `${baseUrl}/en/day-trips/${trip.slug}`,
      },
    },
  }));

  const activityPages = activitiesFr.map((activity) => ({
    url: `${baseUrl}/fr/activities/${activity.slug}`,
    lastModified: new Date(activity.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr/activities/${activity.slug}`,
        en: `${baseUrl}/en/activities/${activity.slug}`,
      },
    },
  }));

  return [...staticPages, ...tourPages, ...dayTripPages, ...activityPages];
}
