import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'activities' });
  
  return {
    title: `Activity - ${params.slug}`,
    description: t('description'),
  };
}

export default function ActivityDetailPage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const t = useTranslations('activities');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Hero Image */}
          <section>
            <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
          </section>

          {/* Activity Details */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Activity: {params.slug}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-muted-foreground">
                    This is a detailed description of the activity. In a real implementation, 
                    this would contain rich content about the activity including details, 
                    what&apos;s included, requirements, and more.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Professional guide</li>
                    <li>Equipment</li>
                    <li>Transportation</li>
                    <li>Refreshments</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Minimum age: 12 years</li>
                    <li>Good physical condition</li>
                    <li>Comfortable clothing</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 space-y-4 sticky top-24">
                  <div className="text-3xl font-bold text-primary">€30</div>
                  <div className="text-muted-foreground">2-4 hours</div>
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
