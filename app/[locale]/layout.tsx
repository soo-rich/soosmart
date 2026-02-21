import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: {
      default: "SOOSMART GROUP | Réseaux & Cybersécurité",
      template: "%s | SOOSMART GROUP",
    },
    description: isFr
      ? "Intégrateur NTIC certifié — Réseaux, Cybersécurité, VoIP, Cloud. Certifiés Cisco, Microsoft & CompTIA."
      : "Certified NTIC Integrator — Networks, Cybersecurity, VoIP, Cloud. Certified by Cisco, Microsoft & CompTIA.",
    keywords: [
      "réseau",
      "cybersécurité",
      "Cisco",
      "CCNA",
      "CCNP",
      "Microsoft",
      "VoIP",
      "cloud",
      "IT",
    ],
    openGraph: {
      type: "website",
      locale: isFr ? "fr_FR" : "en_US",
      url: "https://soosmart.group",
      siteName: "SOOSMART GROUP",
      title: "SOOSMART GROUP | Réseaux & Cybersécurité",
      description: isFr
        ? "Intégrateur NTIC certifié — Réseaux, Cybersécurité, VoIP, Cloud."
        : "Certified NTIC Integrator — Networks, Cybersecurity, VoIP, Cloud.",
    },
    robots: { index: true, follow: true },
    metadataBase: new URL("https://soosmart.group"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-dark-800 text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
