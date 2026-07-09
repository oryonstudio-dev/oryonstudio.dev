import type { Metadata } from "next";
import "../globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Raleway, Poppins, Ubuntu_Sans_Mono, Google_Sans_Code } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});

const poppins = Poppins({
  subsets:  ["latin"],
  variable: "--poppins",
  weight:   ["100", "200", "300", "400", "500", "600", "700"]
});

const googleCode = Google_Sans_Code({
  subsets:  ["latin"],
  variable: "--googleCode"
});

export const metadata: Metadata = {
  title: "ORYON STUDIO | Premium Next.js Web Design & Development",
  description: "We craft high-performance, visually stunning websites using Next.js. Tailored digital experiences for ambitious brands looking to stand out.",
};

async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const isLocale = routing.locales.includes(locale as Locale);
  if (!isLocale) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${raleway.variable} ${poppins.variable} ${googleCode.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;