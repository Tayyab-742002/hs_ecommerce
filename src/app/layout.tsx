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
  title: "H&S Ecommerce Agency | Amazon, eBay, Walmart, TikTok & Etsy Services",
  description:
    "Professional e-commerce services: seller & buyer accounts, VA services, and account reinstatement for Amazon, eBay, Walmart, TikTok, and Etsy.",
  keywords:
    "ecommerce agency, amazon seller accounts, ebay accounts, walmart seller, tiktok shop, etsy seller, virtual assistant services, account reinstatement",
  authors: [{ name: "H&S Ecommerce Agency" }],
  creator: "H&S Ecommerce Agency",
  publisher: "H&S Ecommerce Agency",
  metadataBase: new URL("https://www.hsecommerce.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "H&S Ecommerce Agency | Amazon, eBay, Walmart, TikTok & Etsy Services",
    description:
      "Professional e-commerce services: seller & buyer accounts, VA services, and account reinstatement for Amazon, eBay, Walmart, TikTok, and Etsy.",
    url: "https://www.hsecommerce.com",
    siteName: "H&S Ecommerce Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H&S Ecommerce Agency",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
