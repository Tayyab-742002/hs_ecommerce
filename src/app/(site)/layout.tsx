import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-4 md:px-6 lg:px-8">{children}</main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
