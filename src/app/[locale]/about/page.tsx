import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const t = useTranslations('about');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('description')}</p>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Travel Morocco was founded with a passion for sharing the beauty and culture of Morocco 
                with travelers from around the world. Our team of expert local guides brings years of 
                experience and deep knowledge of Moroccan culture, history, and traditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                We strive to provide authentic, immersive travel experiences that showcase the best 
                of Morocco while supporting local communities and sustainable tourism practices.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Expert local guides with deep cultural knowledge</li>
                <li>Small group sizes for personalized experiences</li>
                <li>Authentic cultural immersion</li>
                <li>Sustainable and responsible tourism</li>
                <li>Flexible itineraries tailored to your interests</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
