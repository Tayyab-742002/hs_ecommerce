import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <meta
          name="google-site-verification"
          content="Ys_aIc6BM8xc_r0PwTVNkGpGNveWOrEvXVrfHmFTjYk"
        />
        <meta name="msapplication-TileColor" content="#0D3D4C" />
        <meta name="theme-color" content="#0D3D4C" />
        <meta
          name="facebook-domain-verification"
          content="3mq0nbk706xpb8hrdysdkan8rvo2ke"
        />

        {/* Umami */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="42a19837-d4a5-428e-8998-7f72dc062dea"
          strategy="afterInteractive"
        />

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9399138356902429"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
n.callMethod.apply(n, arguments) : n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1762475904641283');
fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1762475904641283&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
