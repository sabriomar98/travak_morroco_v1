"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getAlternateHref = () => {
    if (!pathname) return `/${locale === "fr" ? "en" : "fr"}`;
    
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, "");
    
    // Add new locale
    return `/${locale === "fr" ? "en" : "fr"}${pathWithoutLocale}`;
  };

  return (
    <Link href={getAlternateHref()} hrefLang={locale === "fr" ? "en" : "fr"}>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2"
        aria-label={locale === "fr" ? "Switch to English" : "Passer au français"}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{locale === "fr" ? "EN" : "FR"}</span>
      </Button>
    </Link>
  );
}
