import { Metadata } from "next";
import { UKWarehouseHero } from "@/components/warehouse/UKWarehouseHero";
import { UKWarehouseBenefits } from "@/components/warehouse/UKWarehouseBenefits";
import { UKWarehouseTrust } from "@/components/warehouse/UKWarehouseTrust";
import { UKWarehouseConsultationForm } from "@/components/warehouse/UKWarehouseConsultationForm";
import { UKWarehouseFinalCTA } from "@/components/warehouse/UKWarehouseFinalCTA";

export const revalidate = 60;

// Generate metadata for UK Warehouse services page
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "UK Warehouse Services | Storage & Fulfillment | HS Ecommerce",
    description:
      "Grow your business with UK-based warehouse, pick & pack and marketing services. Affordable storage, fast order fulfillment for international sellers targeting UK market.",
    keywords:
      "uk warehouse, uk fulfillment, pick and pack services, uk storage, ecommerce fulfillment, international shipping, warehouse services, order fulfillment",
    openGraph: {
      title: "UK Warehouse Services | Storage & Fulfillment | HS Ecommerce",
      description:
        "Professional UK warehouse and fulfillment services for international sellers. Storage, pick & pack, and marketing support to grow your UK business.",
      type: "website",
    },
  };
};

export default function UKWarehousePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* <UKWarehouseHero /> */}
      {/* Consultation Form Section */}
      <UKWarehouseConsultationForm />
      {/* Key Benefits Section */}
      {/* <UKWarehouseBenefits /> */}

      {/* Trust/Social Proof Section */}
      <UKWarehouseTrust />

      {/* Final CTA Section */}
      <UKWarehouseFinalCTA />
    </div>
  );
}
