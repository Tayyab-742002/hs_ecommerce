import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/sanity/lib/live";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SanityLive />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

