import { ReactNode } from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getLocale, Locale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocale(locale);

  return {
    alternates: {
      canonical: `/${validLocale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = getLocale(locale) as Locale;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        {validLocale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <Header locale={validLocale} />
      <main id="main-content">{children}</main>
      <Footer locale={validLocale} />
    </>
  );
}
