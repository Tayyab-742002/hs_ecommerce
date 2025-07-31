import { Metadata } from "next";
import { getReinstatementServices } from "@/lib/services/reinstatement";
import { ServicePageLayout, ServicePageData } from "@/components/services";
import {
  AlertTriangle,
  Shield,
  Clock,
  Award,
  Target,
  MessageSquare,
  Trophy,
  Users,
  Zap,
  Star,
} from "lucide-react";
import { ReinstatementService } from "@/types";

export const revalidate = 60;

const fallbackReinstatementServices: ReinstatementService[] = [
  {
    _id: "fallback-amazon-reinstatement",
    title: "Amazon Account Reinstatement",
    slug: "amazon-account-reinstatement",
    platform: {
      _id: "amazon",
      name: "Amazon",
      slug: "amazon",
      logo: {
        asset: {
          url: "/images/platforms/amazon-logo.png",
        },
      },
    },
    description:
      "Get your suspended Amazon Seller Central account back online with our expert reinstatement service. Our specialists understand Amazon's complex policies and create compelling appeals that work.",
    features: [
      "Complete suspension analysis and root cause identification",
      "Professional Plan of Action (POA) crafted by Amazon experts",
      "Direct communication with Amazon Seller Performance team",
      "Policy compliance audit and recommendations",
      "Ongoing support until successful reinstatement",
      "Performance metrics optimization guidance",
      "Preventative measures for future suspensions",
    ],
    successRate: "87%",
    turnaroundTime: "5-14 days",
    price: "$350",
  },
  {
    _id: "fallback-ebay-reinstatement",
    title: "eBay Account Reinstatement",
    slug: "ebay-account-reinstatement",
    platform: {
      _id: "ebay",
      name: "eBay",
      slug: "ebay",
      logo: {
        asset: {
          url: "/images/platforms/ebay-logo.png",
        },
      },
    },
    description:
      "Restore your suspended eBay seller account with our specialized reinstatement service. We handle everything from appeals to policy compliance.",
    features: [
      "Comprehensive account audit and violation assessment",
      "Custom appeal letter writing with proven templates",
      "Direct liaison with eBay customer support",
      "Seller performance optimization strategies",
      "Policy compliance training and guidance",
      "Account health monitoring post-reinstatement",
      "Listing optimization recommendations",
    ],
    successRate: "82%",
    turnaroundTime: "7-21 days",
    price: "$350",
  },
  {
    _id: "fallback-walmart-reinstatement",
    title: "Walmart Marketplace Reinstatement",
    slug: "walmart-account-reinstatement",
    platform: {
      _id: "walmart",
      name: "Walmart",
      slug: "walmart",
      logo: {
        asset: {
          url: "/images/platforms/walmart-logo.png",
        },
      },
    },
    description:
      "Get your Walmart Marketplace seller account back in good standing with our specialized reinstatement team who understand Walmart's unique requirements.",
    features: [
      "Detailed suspension cause analysis",
      "Strategic appeal preparation with Walmart focus",
      "Performance metrics improvement planning",
      "Walmart policy compliance comprehensive review",
      "Long-term account health monitoring",
      "Product quality and safety compliance",
      "Marketplace performance optimization",
    ],
    successRate: "79%",
    turnaroundTime: "10-28 days",
    price: "$400",
  },
  {
    _id: "fallback-etsy-reinstatement",
    title: "Etsy Shop Reinstatement",
    slug: "etsy-shop-reinstatement",
    platform: {
      _id: "etsy",
      name: "Etsy",
      slug: "etsy",
      logo: {
        asset: {
          url: "/images/platforms/etsy-logo.png",
        },
      },
    },
    description:
      "Restore your suspended Etsy shop with our creative marketplace specialists who understand Etsy's unique community guidelines and handmade policies.",
    features: [
      "Creative policy violation assessment",
      "Handmade and vintage compliance review",
      "IP infringement resolution strategies",
      "Shop quality and authenticity verification",
      "Customer service improvement plans",
      "Listing optimization for Etsy algorithms",
      "Community guidelines training",
    ],
    successRate: "84%",
    turnaroundTime: "3-10 days",
    price: "$350",
  },
  {
    _id: "fallback-tiktok-reinstatement",
    title: "TikTok Shop Reinstatement",
    slug: "tiktok-shop-reinstatement",
    platform: {
      _id: "tiktok",
      name: "TikTok",
      slug: "tiktok",
      logo: {
        asset: {
          url: "/images/platforms/tiktok-logo.png",
        },
      },
    },
    description:
      "Reinstate your TikTok Shop account with our social commerce experts who specialize in TikTok's evolving e-commerce policies and creator guidelines.",
    features: [
      "Social commerce policy analysis",
      "Creator guidelines compliance review",
      "Live shopping violation assessment",
      "Content policy alignment strategies",
      "Community standards training",
      "Shop performance optimization",
      "Influencer partnership compliance",
    ],
    successRate: "76%",
    turnaroundTime: "7-18 days",
    price: "$350",
  },
];

// Generate metadata for reinstatement services page
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "Account Reinstatement Services | HS Ecommerce | H&S Ecommerce Agency",
    description:
      "Professional account reinstatement services for suspended Amazon, eBay, Walmart, TikTok, and Etsy accounts. Expert appeal writing and policy compliance assistance.",
    keywords:
      "account reinstatement, amazon reinstatement, ebay reinstatement, walmart reinstatement, etsy reinstatement, tiktok reinstatement, suspended account recovery, appeal writing, policy compliance, hs ecommerce, h&s ecommerce, h and s ecommerce agency",
    openGraph: {
      title:
        "Account Reinstatement Services | HS Ecommerce | H&S Ecommerce Agency",
      description:
        "Expert account reinstatement services to restore your suspended e-commerce accounts across all major platforms with proven success rates.",
      type: "website",
    },
  };
};

export default async function ReinstatementServicesPage() {
  // Fetch services data (fallback to fallback array if not available)
  const services = await getReinstatementServices().catch(() => []);
  const displayServices = services?.length
    ? services
    : fallbackReinstatementServices;

  // Transform services to match new Service interface
  const transformedServices = displayServices.map(
    (service: ReinstatementService) => ({
      id: service._id,
      title: service.title,
      description: service.description,
      price: service.price,
      category: service.platform?.name || "Account Recovery",
      platform: service.platform,
      image: {
        asset: {
          url: `/images/services/reinstatement/${service.title}.jpg`,
        },
      },
    })
  );

  // Service page data configuration
  const pageData: ServicePageData = {
    hero: {
      badge: {
        icon: AlertTriangle,
        text: "Expert Account Recovery Specialists",
      },
      title: {
        main: "Reclaim Your Account",
        subtitle: "with Confidence",
      },
      description: {
        text: "We help sellers restore suspended accounts through {highlight1}, expert-led reinstatement services. Don't let setbacks stop your {highlight2}.",
        highlights: [
          { text: "strategic", color: "primary" },
          { text: "e-commerce journey", color: "secondary" },
        ],
      },
    },
    services: {
      title: "Choose Your Recovery Service",
      description: {
        text: "From Amazon to TikTok, we've got all your {highlight1} covered with {highlight2}",
        highlights: [
          { text: "account reinstatement needs", color: "primary" },
          { text: "proven expertise", color: "secondary" },
        ],
      },
      data: transformedServices,
      badge: {
        icon: Shield,
        text: "Our Services",
      },
    },
    whyChooseUs: {
      title: "Why Choose Our Recovery Services",
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
          title: "Proven Expertise",
          description:
            "Our team has successfully handled over 1,250 reinstatements across all major platforms with an industry-leading success rate.",
          gradient: "from-red-500/20 to-pink-500/20",
        },
        {
          icon: Clock,
          title: "Fast Turnaround",
          description:
            "We prioritize urgent cases and work efficiently to get your account reinstated as quickly as possible without compromising quality.",
          gradient: "from-orange-500/20 to-yellow-500/20",
        },
        {
          icon: Award,
          title: "No Success, No Fee",
          description:
            "We're so confident in our service that we offer a money-back guarantee if we can't successfully reinstate your account.",
          gradient: "from-yellow-500/20 to-green-500/20",
        },
      ],
      badge: {
        icon: Trophy,
        text: "Why Choose Us",
      },
    },
    howItWorks: {
      title: "How Our Recovery Services Work",
      description: {
        text: "Simple, streamlined process to get your account {highlight1}",
        highlights: [{ text: "back online quickly", color: "primary" }],
      },
      steps: [
        {
          step: "1",
          title: "Analyze & Assess",
          description:
            "We conduct a comprehensive analysis of your suspension, reviewing all communications and policy violations to identify the root cause.",
          gradient: "from-red-500/10 to-orange-500/10",
        },
        {
          step: "2",
          title: "Create Strategy",
          description:
            "Our experts craft a tailored reinstatement strategy and prepare compelling documentation to address all platform concerns.",
          gradient: "from-orange-500/10 to-yellow-500/10",
        },
        {
          step: "3",
          title: "Execute & Monitor",
          description:
            "We handle the submission process and provide ongoing monitoring to ensure compliance and prevent future issues.",
          gradient: "from-yellow-500/10 to-red-500/10",
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
        text: "Real accounts restored for real businesses we've helped {highlight1}",
        highlights: [{ text: "recover", color: "primary" }],
      },
      data: [
        {
          quote:
            "I was struggling to get my eBay account reinstated, but their team helped me through every step. Now I'm back in business and growing! ",
          author: "Jasminn",
          role: "Ebay Seller",
          initials: "J",
          gradient: "from-red-500/10 to-orange-500/10",
        },
        {
          quote:
            "After my Walmart account was suspended, I thought I'd lost everything. Their reinstatement service got me back online in just 9 days. Highly recommended! ",
          author: "Sarah Johnson",
          role: "Online Store Owner",
          initials: "SJ",
          gradient: "from-orange-500/10 to-yellow-500/10",
        },
      ],
      badge: {
        icon: MessageSquare,
        text: "Client Success Stories",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: {
        text: "Get answers to common questions about our {highlight1}",
        highlights: [{ text: "recovery services", color: "primary" }],
      },
      items: [
        {
          id: 1,
          title: "What is your success rate?",
          content:
            "We maintain an average success rate of 92% across all platforms. Our success rate varies by platform and violation type, but we have extensive experience with all major e-commerce marketplaces.",
        },
        {
          id: 2,
          title: "How long does the reinstatement process take?",
          content:
            "Timeline varies by platform and complexity of the case. Most cases are resolved within 5-21 days. We provide regular updates throughout the process and work as quickly as possible while ensuring quality.",
        },
        {
          id: 3,
          title: "Do you offer any guarantees?",
          content:
            "Yes, we offer a money-back guarantee if we cannot successfully reinstate your account. We're confident in our expertise and stand behind our work with full transparency.",
        },
        {
          id: 4,
          title: "Which platforms do you support?",
          content:
            "We provide reinstatement services for Amazon, eBay, Walmart Marketplace, Etsy, and TikTok Shop. Each platform has unique requirements, and our specialists focus on their assigned platforms for maximum expertise.",
        },
      ],
    },
  };

  return <ServicePageLayout data={pageData} />;
}
