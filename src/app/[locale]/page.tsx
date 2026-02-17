import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'hero' });
  
  return {
    title: 'Travel Morocco - ' + t('title'),
    description: t('subtitle'),
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const t = useTranslations('hero');
  const tTours = useTranslations('tours');
  const tActivities = useTranslations('activities');
  const tCta = useTranslations('cta');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${params.locale}/tours`}>
                <Button size="lg">{t('exploreTours')}</Button>
              </Link>
              <Link href={`/${params.locale}/contact`}>
                <Button size="lg" variant="outline">{t('contactUs')}</Button>
              </Link>
            </div>
          </section>

          {/* Tours Preview */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">{tTours('title')}</h2>
              <p className="text-lg text-muted-foreground">{tTours('description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Tour cards would go here */}
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Tour cards will be displayed here</p>
              </div>
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Tour cards will be displayed here</p>
              </div>
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Tour cards will be displayed here</p>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/${params.locale}/tours`}>
                <Button variant="outline">{tTours('viewDetails')}</Button>
              </Link>
            </div>
          </section>

          {/* Activities Preview */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">{tActivities('title')}</h2>
              <p className="text-lg text-muted-foreground">{tActivities('description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Activity cards would go here */}
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Activity cards will be displayed here</p>
              </div>
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Activity cards will be displayed here</p>
              </div>
              <div className="p-8 border border-border rounded-lg text-center">
                <p className="text-muted-foreground">Activity cards will be displayed here</p>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/${params.locale}/activities`}>
                <Button variant="outline">{tActivities('viewDetails')}</Button>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 md:p-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{tCta('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{tCta('description')}</p>
            <Link href={`/${params.locale}/contact`}>
              <Button size="lg">{tCta('button')}</Button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
