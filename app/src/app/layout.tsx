import type { Metadata } from "next";
import { Children } from "@/utils/types";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "ORYON STUDIO | Premium Next.js Web Design & Development",
  description: "We craft high-performance, visually stunning websites using Next.js. Tailored digital experiences for ambitious brands looking to stand out.",
};

function RootLayout({ children }: Children) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        { children }
      </body>
    </html>
  );
}

export default RootLayout;