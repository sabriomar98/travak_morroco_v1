import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://travelmorocco.com"),
  title: {
    default: "Travel Morocco - Authentic Moroccan Tours & Adventures",
    template: "%s | Travel Morocco",
  },
  description:
    "Discover authentic Morocco with premium tours, day trips, and activities. Expert guides, unforgettable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
