"use client";

import { CallToAction } from "../common/CallToAction";

export function UKWarehouseFinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <CallToAction
        title="Ready to Grow Your UK Sales?"
        subtitle="No upfront cost - just tell us your needs and our team will guide you step by step to grow your UK sales."
        primaryText="Chat with Us on WhatsApp"
        primaryHref="https://wa.me/923010510316"
        primaryIsWhatsApp
        primaryShimmerBackground="#25D366"
        primaryButtonClassName="rounded-full px-6 py-2!"
        primaryTarget="_blank"
        secondaryText="Explore More"
        secondaryHref="/"
        secondaryButtonClassName="rounded-full"
        contacts={[
          {
            type: "whatsapp",
            text: "+92 301 0510316",
            href: "https://wa.me/923010510316",
          },
          {
            type: "phone",
            text: "+44 7955 426807",
            href: "tel:+447955426807",
          },
        ]}
      />
    </section>
  );
}
