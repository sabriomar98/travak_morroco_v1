'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/fr' },
    { label: 'Contact' }
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 md:py-12 lg:py-16"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 space-y-8 md:space-y-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contactez-Nous
          </h1>
          <p className="text-lg text-gray-600">
            Nous serions ravis d&apos;organiser votre prochaine aventure au Maroc
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@travakmorocco.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600">+212 6XX-XXXXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">Marrakech, Maroc</p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
