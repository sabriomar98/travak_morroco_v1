import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
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
  const t = await getTranslations('enquiry');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function EnquiryPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('enquiry');

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
            <p className="text-lg text-muted-foreground">{t('description')}</p>
          </section>

          {/* Enquiry Form */}
          <section className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select an option</option>
                  <option value="tours">Tours</option>
                  <option value="day-trips">Day Trips</option>
                  <option value="activities">Activities</option>
                  <option value="custom">Custom Experience</option>
                </select>
              </div>

              <div>
                <label htmlFor="travelDates" className="block text-sm font-medium mb-2">
                  Preferred Travel Dates
                </label>
                <input
                  type="text"
                  id="travelDates"
                  name="travelDates"
                  placeholder="e.g., June 2024"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="groupSize" className="block text-sm font-medium mb-2">
                  Group Size
                </label>
                <input
                  type="number"
                  id="groupSize"
                  name="groupSize"
                  min="1"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your interests, special requirements, or any questions you have..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Enquiry
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
