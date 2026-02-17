"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Locale, getDictionary } from "@/lib/i18n";
import { useState } from "react";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.tours, href: `/${locale}/tours` },
    { name: dict.nav.dayTrips, href: `/${locale}/day-trips` },
    { name: dict.nav.activities, href: `/${locale}/activities` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-primary">
            Travel Morocco
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher locale={locale} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
