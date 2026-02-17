import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel Morocco - Authentic Morocco Tours & Desert Adventures",
  description: "Discover Morocco with expert local guides. Custom tours to Sahara Desert, Marrakech, Fes, and beyond. Authentic experiences, competitive prices.",
  keywords: ["Morocco tours", "Sahara desert", "Marrakech travel", "Morocco vacation", "Atlas Mountains", "Chefchaouen", "Morocco travel agency"],
  authors: [{ name: "Travel Morocco" }],
  openGraph: {
    title: "Travel Morocco - Authentic Morocco Tours & Desert Adventures",
    description: "Discover Morocco with expert local guides. Custom tours to Sahara Desert, Marrakech, Fes, and beyond.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
