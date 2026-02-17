'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import ActivityGrid from '@/components/ActivityGrid';
import CTASection from '@/components/CTASection';
import { tours } from '@/data/activities';

export default function ToursPage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/fr' },
    { label: 'Tours' }
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
            Nos Tours
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez le Maroc avec nos circuits guidés de plusieurs jours
          </p>
        </motion.div>

        {/* Tours Grid */}
        {tours.length > 0 ? (
          <ActivityGrid activities={tours} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nos tours seront bientôt disponibles. Revenez nous voir prochainement!
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <CTASection 
        title="Créez votre tour personnalisé"
        description="Nous pouvons créer un itinéraire sur mesure selon vos préférences"
      />
    </motion.main>
  );
}
