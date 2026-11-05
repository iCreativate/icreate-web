import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Code_Pro, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  COMPANY,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  ZA_KEYWORDS,
  absUrl,
} from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "iCreate is a free creative suite from South Africa: photo, vector, video, layout and more, without an Adobe subscription. Rand pricing. Works offline.",
  keywords: [...ZA_KEYWORDS],
  authors: [{ name: COMPANY, url: SITE_URL }],
  creator: COMPANY,
  publisher: COMPANY,
  applicationName: SITE_NAME,
  category: "MultimediaApplication",
  alternates: { canonical: absUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Free Photoshop, Illustrator and Premiere alternatives you can run in South Africa without a dollar subscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "A free creative suite. No Adobe subscription. Priced in rand when you want extras.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${dmSans.variable} ${syne.variable} ${sourceCode.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: SITE_NAME,
            applicationCategory: "MultimediaApplication",
            operatingSystem: "macOS, Windows, Linux",
            url: SITE_URL,
            description: SITE_TAGLINE,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "ZAR",
            },
            author: {
              "@type": "Organization",
              name: COMPANY,
              url: SITE_URL,
            },
            areaServed: { "@type": "Country", name: "South Africa" },
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-invert-bg focus:px-3 focus:py-2 focus:text-invert-fg"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
