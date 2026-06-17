import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1B6B3A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sakaryamimarlik.com.tr"),
  title: {
    default: "Sakarya Mimarlık | Mimari Proje & Tasarım",
    template: "%s | Sakarya Mimarlık",
  },
  description:
    "Sakarya Mimarlık — Mimari proje, tasarım ve danışmanlık hizmetleri. Modern ve sürdürülebilir mimari çözümler. Yakında sizlerle buluşuyoruz.",
  keywords: [
    "mimarlık",
    "mimari proje",
    "sakarya mimarlık",
    "mimari tasarım",
    "bina tasarımı",
    "mimar",
    "proje",
    "sakarya",
    "iç mimarlık",
    "dış cephe",
    "kentsel dönüşüm",
    "konut projesi",
    "ticari proje",
  ],
  authors: [{ name: "Sakarya Mimarlık" }],
  creator: "Sakarya Mimarlık",
  publisher: "Sakarya Mimarlık",
  applicationName: "Sakarya Mimarlık",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sakaryamimarlik.com.tr",
    siteName: "Sakarya Mimarlık",
    title: "Sakarya Mimarlık | Mimari Proje & Tasarım",
    description:
      "Modern ve sürdürülebilir mimari çözümler sunan Sakarya Mimarlık. Yakında sizlerle buluşuyoruz.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Sakarya Mimarlık Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakarya Mimarlık | Mimari Proje & Tasarım",
    description:
      "Modern ve sürdürülebilir mimari çözümler sunan Sakarya Mimarlık. Yakında sizlerle buluşuyoruz.",
    images: ["/images/logo.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sakarya Mimarlık",
              url: "https://sakaryamimarlik.com.tr",
              logo: "https://sakaryamimarlik.com.tr/images/logo.jpg",
              description:
                "Mimari proje, tasarım ve danışmanlık hizmetleri sunan modern mimarlık firması.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sakarya",
                addressCountry: "TR",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
