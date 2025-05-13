import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0D3D4C",
};

export const metadata: Metadata = {
  title: "H&S Ecommerce Agency | HS Ecommerce | Amazon, eBay, Walmart Services",
  description:
    "HS Ecommerce Agency (H&S) provides professional e-commerce services: seller accounts, VA services, and account reinstatement for Amazon, eBay, Walmart, TikTok, and Etsy.",
  keywords:
    "hs ecommerce, h&s ecommerce, ecommerce agency, h and s ecommerce, amazon seller accounts, ebay accounts, walmart seller, tiktok shop, etsy seller, virtual assistant services, account reinstatement",
  authors: [{ name: "H&S Ecommerce Agency" }],
  creator: "H&S Ecommerce Agency",
  publisher: "H&S Ecommerce Agency",
  metadataBase: new URL("https://www.hsecommerce.store"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "H&S Ecommerce Agency | HS Ecommerce | Amazon, eBay, Walmart Services",
    description:
      "HS Ecommerce Agency (H&S) provides professional e-commerce services: seller accounts, VA services, and account reinstatement for Amazon, eBay, Walmart, TikTok, and Etsy.",
    url: "https://www.hsecommerce.store",
    siteName: "HS Ecommerce Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hsecommerce.store/logo.png",
        width: 512,
        height: 512,
        alt: "HS Ecommerce Agency logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HS Ecommerce Agency",
    description:
      "Professional e-commerce services for Amazon, eBay, Walmart, TikTok, and Etsy.",
    creator: "@hsecommerce",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0D3D4C",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="Ys_aIc6BM8xc_r0PwTVNkGpGNveWOrEvXVrfHmFTjYk"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#0D3D4C" />
        <meta name="theme-color" content="#0D3D4C" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
