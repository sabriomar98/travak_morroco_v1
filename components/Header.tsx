'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/fr" className="flex items-center">
            <span className="text-2xl font-bold text-primary">TravakMorocco</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/fr"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/fr/activities"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Activités
            </Link>
            <Link
              href="/fr/tours"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Tours
            </Link>
            <Link
              href="/fr/day-trips"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Excursions
            </Link>
            <Link
              href="/fr/contact"
              className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/fr"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/fr/activities"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Activités
              </Link>
              <Link
                href="/fr/tours"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="/fr/day-trips"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Excursions
              </Link>
              <Link
                href="/fr/contact"
                className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
