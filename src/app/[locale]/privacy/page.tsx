import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'privacy' });
  
  return {
    title: t('title'),
    description: 'Privacy Policy',
  };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const t = useTranslations('privacy');

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
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, including when you create 
                an account, make a booking, contact us, or otherwise communicate with us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                to process your bookings, to communicate with you, and to comply with legal obligations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell or share your personal information with third parties except as 
                necessary to provide our services or as required by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal information. 
                You may also have the right to object to or restrict certain processing of your data.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@travelmorocco.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
