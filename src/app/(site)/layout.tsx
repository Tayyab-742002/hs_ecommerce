import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingContact } from '@/components/layout/FloatingContact';
import { FloatingThemeToggle } from '@/components/layout/FloatingThemeToggle';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { CookieConsent } from '@/components/ui/cookie-consent';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <FloatingThemeToggle />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
