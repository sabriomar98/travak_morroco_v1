import { activities as activitiesFr } from '@/content/activities.fr';
import { activities as activitiesEn } from '@/content/activities.en';
import ActivityGrid from '@/components/ActivityGrid';
import CTASection from '@/components/CTASection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  const activities = locale === 'fr' ? activitiesFr : activitiesEn;

  const content = {
    fr: {
      title: "Nos Activités",
      subtitle: "Découvrez nos expériences authentiques au Maroc"
    },
    en: {
      title: "Our Activities",
      subtitle: "Discover our authentic experiences in Morocco"
    }
  };

  const pageContent = content[locale as 'fr' | 'en'] || content.en;

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            {pageContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {pageContent.subtitle}
          </p>
        </div>
        
        <ActivityGrid activities={activities} locale={locale} />
        
        <CTASection locale={locale} />
      </div>
    </main>
  );
}
