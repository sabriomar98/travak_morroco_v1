'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-primary font-bold text-sm">
              {activity.price}€
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Location & Duration */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{activity.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{activity.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {activity.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {activity.shortDescription}
          </p>

          {/* Highlights */}
          {activity.highlights && activity.highlights.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {activity.highlights.slice(0, 2).map((highlight, index) => (
                  <span
                    key={index}
                    className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Button */}
          <Link
            href={`/fr/activities/${activity.slug}`}
            className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-auto"
          >
            Voir détails
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
