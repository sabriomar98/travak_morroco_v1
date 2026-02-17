'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="text-2xl font-bold text-primary">
            Travel Morocco
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><Link href={`/${locale}`} className="hover:text-primary transition-colors">{t('home')}</Link></li>
            <li><Link href={`/${locale}/tours`} className="hover:text-primary transition-colors">{t('tours')}</Link></li>
            <li><Link href={`/${locale}/day-trips`} className="hover:text-primary transition-colors">{t('dayTrips')}</Link></li>
            <li><Link href={`/${locale}/activities`} className="hover:text-primary transition-colors">{t('activities')}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:text-primary transition-colors">{t('about')}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-primary transition-colors">{t('contact')}</Link></li>
          </ul>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
