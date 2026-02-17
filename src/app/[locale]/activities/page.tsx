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
  const t = await getTranslations('activities');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ActivitiesPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('activities');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
            <p className="text-lg text-muted-foreground">{t('description')}</p>
          </section>

          {/* Activities Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Activity cards will be populated here */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border border-border rounded-lg p-6 space-y-4">
                  <div className="h-48 bg-gray-200 rounded-lg"></div>
                  <h3 className="text-xl font-bold">Sample Activity {i}</h3>
                  <p className="text-muted-foreground">
                    This is a sample activity description. Actual activity data will be displayed here.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">2-4 hours</span>
                    <span className="text-lg font-bold text-primary">€30</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
