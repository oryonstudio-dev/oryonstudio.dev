import type { Metadata } from "next";
import { Children } from "@/utils/types";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Raleway, Poppins, Ubuntu_Sans_Mono, Google_Sans_Code } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});

const poppins = Poppins({
  subsets:  ["latin"],
  variable: "--poppins",
  weight:   ["100", "200", "300", "400", "500", "600", "700"]
});

const ubuntuMono = Ubuntu_Sans_Mono({
  subsets:  ["latin"],
  variable: "--ubuntuMono"
});

const googleCode = Google_Sans_Code({
  subsets:  ["latin"],
  variable: "--googleCode"
});

export const metadata: Metadata = {
  title: "ORYON STUDIO | Premium Next.js Web Design & Development",
  description: "We craft high-performance, visually stunning websites using Next.js. Tailored digital experiences for ambitious brands looking to stand out.",
};

function RootLayout({ children }: Children) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} ${ubuntuMono.variable} ${googleCode.variable}`}>
      <body>
        <Navbar />
        { children }
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;