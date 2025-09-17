import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | UK Warehouse Consultation",
  description:
    "Thanks for submitting your UK Warehouse consultation request. We'll get back to you within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Thank You for Your Submission
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We&apos;ve received your consultation request and will contact you
            within 24 hours with a tailored plan for your UK warehouse and
            fulfillment needs.
          </p>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>If you need immediate assistance, reach us via WhatsApp.</p>
            <p>Meanwhile, feel free to explore our other services.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
