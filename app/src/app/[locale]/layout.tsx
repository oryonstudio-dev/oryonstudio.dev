import type { Metadata } from "next";
import "../globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Raleway, Poppins, Google_Sans_Code } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { MetadataParams } from '@/i18n/types';
import { readMetadata, checkLocale } from '@/i18n/functions';
import { routing } from '@/i18n/routing';
import TransitionProvider from "@/components/transitions/TransitionProvider";

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

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  checkLocale(locale);
  return readMetadata('home');
}

async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  checkLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${raleway.variable} ${poppins.variable} ${googleCode.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TransitionProvider>
            <Navbar />
            {children}
          </TransitionProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;