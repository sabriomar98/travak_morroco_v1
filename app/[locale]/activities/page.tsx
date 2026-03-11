'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import ActivityGrid from '@/components/ActivityGrid';
import CTASection from '@/components/CTASection';
import { activities } from '@/data/activities';

export default function ActivitiesPage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/fr' },
    { label: 'Activités' }
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 md:py-12 lg:py-16"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 space-y-8 md:space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Nos Activités
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection d&apos;activités authentiques pour vivre des expériences inoubliables au Maroc
          </p>
        </motion.div>

        {/* Activities Grid */}
        <ActivityGrid activities={activities} />
      </div>

      {/* CTA Section */}
      <CTASection />
    </motion.main>
  );
}
