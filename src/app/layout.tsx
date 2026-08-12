import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { siteFacts } from "@/lib/siteFacts";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteFacts.url),
  title: {
    default: "Cleaning Boca Raton | House & Commercial Cleaning in Boca Raton, FL",
    template: "%s | Cleaning Boca Raton",
  },
  applicationName: siteFacts.brandName,
  description:
    "Professional residential and commercial cleaning in Boca Raton, FL. Insured cleaners serving Mizner Park, Boca West, East Boca & Palm Beach County. Book online in 60 seconds.",
  alternates: {
    canonical: siteFacts.url,
  },
  openGraph: {
    siteName: siteFacts.brandName,
    type: "website",
    url: siteFacts.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Analytics from "@/components/Analytics";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://a.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://b.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://c.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-body antialiased">
        <MicrosoftClarity />
        <Analytics />
        <ScrollToTop />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        {isProd && pixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
