'use client';

import { motion } from 'framer-motion';
import { Activity } from '@/content/types';
import ActivityCard from './ActivityCard';

interface ActivityGridProps {
  activities: Activity[];
  locale: string;
}

export default function ActivityGrid({ activities, locale }: ActivityGridProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {activities.map((activity) => (
        <motion.div
          key={activity.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <ActivityCard activity={activity} locale={locale} />
        </motion.div>
      ))}
    </motion.div>
  );
}
