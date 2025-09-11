"use client";

import { HeroSection } from "../hero-section-2";

export function UKWarehouseHero() {
  return (
    <HeroSection
      className=" mx-auto px-18  min-h-[90vh]"
      logo={{
        url: "/images/full-logo.png",
        alt: "H&S Ecommerce Logo",
        text: "H&S Ecommerce",
      }}
      slogan="UK WAREHOUSE & FULFILLMENT EXPERTS"
      title={
        <>
          Grow Your Business with{" "}
          <span className="text-primary">UK‑Based Warehouse</span> Pick & Pack
          Services
        </>
      }
      subtitle="Professional storage, lightning-fast fulfillment, and expert marketing support to help Pakistani sellers dominate the UK market. Trusted by 500+ successful sellers."
      callToAction={{
        text: "FREE CONSULTATION",
        href: "#consultation-form",
      }}
      backgroundImage="https://images.unsplash.com/photo-1624927637280-f033784c1279?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      contactInfo={{
        website: "hsecommerce.store",
        phone: "+44 7123 456789",
        address: "Manchester, London, Birmingham",
      }}
    />
  );
}
