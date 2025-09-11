"use client";

import { CallToAction } from "@/components/common/CallToAction";

export function CTASection() {
  return (
    <CallToAction
      title="Ready to Grow Your E-commerce Business?"
      subtitle="Get started with our professional accounts, VA services, and reinstatement solutions for Amazon, eBay, Walmart, TikTok, and Etsy."
      primaryText="Contact Us Now"
      primaryHref="/contact"
      secondaryText="Explore Platforms"
      secondaryHref="/platforms"
      contacts={[
        {
          type: "whatsapp",
          text: "+92 301 0510316",
          href: "https://wa.me/923010510316",
        },
        {
          type: "whatsapp",
          text: "+92 317 1606703",
          href: "https://wa.me/923171606703",
        },
        {
          type: "phone",
          text: "+44 7955 426807",
          href: "tel:+447955426807",
        },
      ]}
    />
  );
}
