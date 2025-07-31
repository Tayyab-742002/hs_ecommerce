import { Metadata } from "next";
import { getAllServices } from "@/lib/services/all-services";
import { ServicePageLayout, ServicePageData } from "@/components/services";
import {
  Briefcase,
  MessageCircle,
  Zap,
  Trophy,
  Shield,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const revalidate = 60;

// Generate metadata for VA services page
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "VA Services | Virtual Assistant | HS Ecommerce | H&S Ecommerce Agency",
    description:
      "HS Ecommerce (H&S) provides professional virtual assistant services for e-commerce businesses including Amazon, eBay, Walmart, TikTok, and Etsy management.",
    keywords:
      "hs ecommerce, h&s ecommerce, virtual assistant, va services, amazon va, ebay va, walmart va, tiktok va, etsy va, ecommerce management, h and s ecommerce agency",
    openGraph: {
      title:
        "VA Services | Virtual Assistant | HS Ecommerce | H&S Ecommerce Agency",
      description:
        "Professional virtual assistant services to manage and grow your e-commerce business across multiple platforms with expert support and proven strategies.",
      type: "website",
    },
  };
};

export default async function VAServicesPage() {
  // Fetch services data (fallback to empty array if not available)
  const services = await getAllServices();
  // Transform services to match new Service interface
  const transformedServices = services.map((service: any) => {
    if (!service.isReinstatement) {
      return {
        id: service._id,
        title: service.name,
        description: service.shortDescription,
        price: service.price,
        category: service.platform?.name || "Virtual Assistant",
        platform: service.platform,
        icon: service.icon,
        image: {
          asset: {
            url: `/images/services/vaservices/${service.name}.jpg`,
          },
        },
      };
    }
  });
  // Service page data configuration
  const pageData: ServicePageData = {
    hero: {
      badge: {
        icon: Briefcase,
        text: "Professional VA Services",
      },
      title: {
        main: "Virtual Assistant",
        subtitle: "Services",
      },
      description: {
        text: "Scale your e-commerce business with our {highlight1} virtual assistant services. From product research to customer support, we handle everything so you can {highlight2}.",
        highlights: [
          { text: "professional", color: "primary" },
          { text: "focus on growth", color: "secondary" },
        ],
      },
    },
    services: {
      title: "Choose Your VA Service",
      description: {
        text: "From product research to customer support, we offer {highlight1} designed to {highlight2}.",
        highlights: [
          { text: "comprehensive VA solutions", color: "primary" },
          { text: "scale your business", color: "secondary" },
        ],
      },
      data: transformedServices,
      badge: {
        icon: Sparkles,
        text: "Our Services",
      },
    },
    whyChooseUs: {
      title: "Why Choose Our VA Services",
      description: {
        text: "We deliver exceptional results through {highlight1}, {highlight2}, and {highlight3}",
        highlights: [
          { text: "expertise", color: "primary" },
          { text: "efficiency", color: "secondary" },
          { text: "dedication", color: "primary" },
        ],
      },
      features: [
        {
          icon: Shield,
          title: "Experienced Professionals",
          description:
            "Our virtual assistants are highly trained professionals with years of experience in e-commerce management and platform-specific expertise.",
          gradient: "from-blue-500/20 to-purple-500/20",
        },
        {
          icon: Zap,
          title: "Fast Turnaround",
          description:
            "Quick response times and efficient task completion ensure your business operations run smoothly without delays or bottlenecks.",
          gradient: "from-purple-500/20 to-pink-500/20",
        },
        {
          icon: TrendingUp,
          title: "Proven Results",
          description:
            "Track record of helping businesses increase sales, improve efficiency, and scale operations across multiple e-commerce platforms.",
          gradient: "from-pink-500/20 to-blue-500/20",
        },
      ],
      badge: {
        icon: Trophy,
        text: "Why Choose Us",
      },
    },
    howItWorks: {
      title: "How Our VA Services Work",
      description: {
        text: "Simple onboarding process to get your {highlight1}",
        highlights: [
          { text: "business support started quickly", color: "primary" },
        ],
      },
      steps: [
        {
          step: "1",
          title: "Consultation & Setup",
          description:
            "We discuss your business needs, goals, and requirements to match you with the perfect virtual assistant for your specific industry and platform.",
          gradient: "from-blue-500/10 to-purple-500/10",
        },
        {
          step: "2",
          title: "VA Assignment & Training",
          description:
            "Your dedicated VA is assigned and trained on your specific business processes, tools, and requirements to ensure seamless integration.",
          gradient: "from-purple-500/10 to-pink-500/10",
        },
        {
          step: "3",
          title: "Ongoing Support & Management",
          description:
            "Continuous task execution, regular reporting, and ongoing optimization to help your business grow while you focus on strategic decisions.",
          gradient: "from-pink-500/10 to-blue-500/10",
        },
      ],
      badge: {
        icon: Target,
        text: "Our Process",
      },
    },
    testimonials: {
      title: "What Our Clients Say",
      description: {
        text: "Real results from businesses that have {highlight1} with our services",
        highlights: [
          { text: "transformed their operations", color: "primary" },
        ],
      },
      data: [
        {
          quote:
            "The Amazon seller account I got was perfectly set up and ready to use. Their team helped me get started quickly, and the VA services are top-notch! ",
          author: "James Wilson",
          role: "E-commerce Entrepreneur",
          initials: "JW",
          gradient: "from-blue-500/10 to-purple-500/10",
        },
        {
          quote:
            "I was struggling to get my TikTok account reinstated, but their team helped me through every step. Now I'm back in business and growing!",
          author: "Amna Ilyas",
          role: "Online Store Owner",
          initials: "AI",
          gradient: "from-purple-500/10 to-pink-500/10",
        },
      ],
      badge: {
        icon: MessageCircle,
        text: "Client Success Stories",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: {
        text: "Get answers to common questions about our VA Services",
        highlights: [{ text: "VA services", color: "primary" }],
      },
      items: [
        {
          id: 1,
          title: "What experience do your VAs have?",
          content:
            "Our virtual assistants have extensive experience in e-commerce management, with most having 3+ years of platform-specific expertise across Amazon, eBay, Walmart, TikTok, and Etsy.",
        },
        {
          id: 2,
          title: "What are the working hours?",
          content:
            "We offer flexible working arrangements including full-time, part-time, and project-based VAs. Most of our team can work according to your preferred timezone and schedule.",
        },
        {
          id: 3,
          title: "How do you ensure good communication?",
          content:
            "We use various communication tools including Slack, email, video calls, and project management platforms. Regular check-ins and detailed reporting keep you informed of all activities.",
        },
        {
          id: 4,
          title: "Which platforms do you support?",
          content:
            "We provide specialized VAs for Amazon, eBay, Walmart, TikTok Shop, Etsy, Shopify, and other major e-commerce platforms, with platform-specific training and expertise.",
        },
      ],
    },
  };
  return <>{transformedServices && <ServicePageLayout data={pageData} />}</>;
}
