import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/request';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('terms');
  
  return {
    title: t('title'),
    description: 'Terms of Service',
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('terms');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
            <p className="text-muted-foreground">{t('lastUpdated')}: January 2024</p>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website and our services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Booking and Payment</h2>
              <p className="text-muted-foreground">
                All bookings are subject to availability and confirmation. Payment terms and 
                conditions will be provided at the time of booking.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Cancellation Policy</h2>
              <p className="text-muted-foreground">
                Cancellation policies vary by tour and service. Specific terms will be provided 
                with your booking confirmation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Travel Insurance</h2>
              <p className="text-muted-foreground">
                We strongly recommend that all travelers purchase comprehensive travel insurance 
                to cover unforeseen circumstances.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Liability</h2>
              <p className="text-muted-foreground">
                We are not liable for any loss, damage, or injury arising from circumstances 
                beyond our reasonable control.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to the website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at info@travelmorocco.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
