import { CTASection } from "@/components/pages/home/cta-section";
import { TopHeader } from "../common/TopHeader";
import { ServiceGrid } from "./ServiceGrid";
import { WhyChooseUs } from "./WhyChooseUs";
import { HowItWorks } from "./HowItWorks";
import { ServiceTestimonials } from "./ServiceTestimonials";
import { ServiceFAQ } from "./ServiceFAQ";
import { LucideIcon } from "lucide-react";
import { Service } from "./ServiceCard";
import { RequirementsForm } from "../accounts/RequirementsForm";
interface ServicePageData {
  hero: {
    badge: {
      icon: LucideIcon;
      text: string;
    };
    title: {
      main: string;
      subtitle: string;
    };
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
  };
  services: {
    title: string;
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
    data: Service[];
    badge?: {
      icon: LucideIcon;
      text: string;
    };
  };
  whyChooseUs: {
    title: string;
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
    features: Array<{
      icon: LucideIcon;
      title: string;
      description: string;
      gradient: string;
    }>;
    badge?: {
      icon: LucideIcon;
      text: string;
    };
  };
  howItWorks: {
    title: string;
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
    steps: Array<{
      step: string;
      title: string;
      description: string;
      gradient: string;
    }>;
    badge?: {
      icon: LucideIcon;
      text: string;
    };
  };
  testimonials: {
    title: string;
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
    data: Array<{
      quote: string;
      author: string;
      role: string;
      initials: string;
      gradient: string;
    }>;
    badge?: {
      icon: LucideIcon;
      text: string;
    };
  };
  faq: {
    title: string;
    description: {
      text: string;
      highlights: Array<{
        text: string;
        color: "primary" | "secondary" | "accent";
      }>;
    };
    items: Array<{
      id: number;
      title: string;
      content: string;
    }>;
  };
}

interface ServicePageLayoutProps {
  data: ServicePageData;
}

export function ServicePageLayout({ data }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Service Hero Section */}
      <TopHeader
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Services Grid Section */}
        <ServiceGrid
          title={data.services.title}
          description={data.services.description}
          services={data.services.data}
          badge={data.services.badge}
        />

        {/* How It Works Section */}
        <HowItWorks
          title={data.howItWorks.title}
          description={data.howItWorks.description}
          steps={data.howItWorks.steps}
          badge={data.howItWorks.badge}
        />

        {/* Testimonials Section */}
        <ServiceTestimonials
          title={data.testimonials.title}
          description={data.testimonials.description}
          testimonials={data.testimonials.data}
          badge={data.testimonials.badge}
        />

        {/* FAQ Section */}
        <ServiceFAQ
          title={data.faq.title}
          description={data.faq.description}
          faqs={data.faq.items}
        />
        <div className="p-6 rounded-xl ">
          <RequirementsForm platformName={data.services.title} fields={[]} />
        </div>
        <div className="relative">
          <CTASection />
        </div>
      </div>
    </div>
  );
}

// Export types for easy reuse
export type { ServicePageData, Service };
