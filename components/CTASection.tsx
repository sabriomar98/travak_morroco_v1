'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTASectionProps {
  locale: string;
}

export default function CTASection({ locale }: CTASectionProps) {
  const content = {
    fr: {
      title: "Créez votre expérience",
      description: "Contactez-nous pour combiner plusieurs activités et créer votre voyage sur mesure",
      button: "Nous contacter"
    },
    en: {
      title: "Create Your Experience",
      description: "Contact us to combine multiple activities and create your custom trip",
      button: "Contact Us"
    }
  };

  const { title, description, button } = content[locale as 'fr' | 'en'] || content.fr;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 py-16 rounded-2xl"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              {button}
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
