'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/content/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  locale: string;
}

export default function ActivityCard({ activity, locale }: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={activity.heroImage}
            alt={activity.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <CardHeader>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {activity.title}
          </h3>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {activity.shortDescription}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {activity.departureCity && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{activity.departureCity}</span>
              </div>
            )}
            {activity.durationDays && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{activity.durationDays} jour{activity.durationDays > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between">
          {activity.price && (
            <div className="text-lg font-bold text-primary">
              À partir de {activity.price}€
            </div>
          )}
          <Link href={`/${locale}/activities/${activity.slug}`}>
            <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
              Voir détails
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
