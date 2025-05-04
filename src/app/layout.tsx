import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
