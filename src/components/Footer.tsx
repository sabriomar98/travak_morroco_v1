'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Travel Morocco</h3>
            <p className="text-gray-400">{t('description')}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">{tNav('home')}</Link></li>
              <li><Link href={`/${locale}/tours`} className="text-gray-400 hover:text-white transition-colors">{tNav('tours')}</Link></li>
              <li><Link href={`/${locale}/day-trips`} className="text-gray-400 hover:text-white transition-colors">{tNav('dayTrips')}</Link></li>
              <li><Link href={`/${locale}/activities`} className="text-gray-400 hover:text-white transition-colors">{tNav('activities')}</Link></li>
              <li><Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors">{tNav('about')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-gray-400 hover:text-white transition-colors">{tNav('contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{tNav('contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@travelmorocco.com</li>
              <li>Phone: +212 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Travel Morocco. {t('copyright')}.</p>
        </div>
      </div>
    </footer>
  );
}
