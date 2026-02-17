import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('tours');
  
  return {
    title: `Tour - ${slug}`,
    description: t('description'),
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('tours');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Hero Image */}
          <section>
            <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
          </section>

          {/* Tour Details */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Tour: {slug}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-muted-foreground">
                    This is a detailed description of the tour. In a real implementation, 
                    this would contain rich content about the tour including itinerary, 
                    what&apos;s included, what to bring, and more.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((day) => (
                      <div key={day} className="border border-border rounded-lg p-4">
                        <h3 className="font-bold mb-2">Day {day}</h3>
                        <p className="text-muted-foreground">
                          Daily itinerary details would be displayed here.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 space-y-4 sticky top-24">
                  <div className="text-3xl font-bold text-primary">{t('from')} €500</div>
                  <div className="text-muted-foreground">7 {t('days')}</div>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
