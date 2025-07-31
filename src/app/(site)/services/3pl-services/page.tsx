import { Metadata } from "next";
import { ServicePageLayout, ServicePageData } from "@/components/services";
import {
  Truck,
  Package,
  Warehouse,
  BarChart3,
  Shield,
  Clock,
  Zap,
  Target,
  MessageSquare,
  Trophy,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";

export const revalidate = 60;

// Generate metadata for 3PL services page
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "3PL Services | Third-Party Logistics | HS Ecommerce | H&S Ecommerce Agency",
    description:
      "Professional 3PL (Third-Party Logistics) services including warehousing, fulfillment, inventory management, shipping, and distribution for e-commerce businesses.",
    keywords:
      "3pl services, third party logistics, warehousing, fulfillment, inventory management, shipping, distribution, logistics solutions, ecommerce fulfillment, hs ecommerce, h&s ecommerce, h and s ecommerce agency",
    openGraph: {
      title:
        "3PL Services | Third-Party Logistics | HS Ecommerce | H&S Ecommerce Agency",
      description:
        "Complete third-party logistics solutions to streamline your e-commerce operations with professional warehousing, fulfillment, and distribution services.",
      type: "website",
    },
  };
};

// 3PL services data
const threePLServices = [
  {
    id: "warehousing-storage",
    title: "Warehousing & Storage",
    description:
      "Secure, climate-controlled warehouse facilities with real-time inventory tracking and management systems for optimal storage conditions.",
    price: "£7",
    deliveryTime: "24-48 hours setup",
    icon: "🏭",
    category: "Storage Solutions",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-1.jpg",
      },
    },
  },
  {
    id: "order-fulfillment",
    title: "Order Fulfillment",
    description:
      "End-to-end order processing from pick and pack to shipping, ensuring fast and accurate delivery to your customers worldwide.",
    price: "149",
    deliveryTime: "Same-day processing",
    icon: "📦",
    category: "Fulfillment",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-2.jpg",
      },
    },
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    description:
      "Advanced inventory tracking and management systems with automated reorder points and comprehensive reporting for optimal stock levels.",
    price: "£1 to £1000",
    deliveryTime: "Real-time updates",
    icon: "📊",
    category: "Management",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-3.jpg",
      },
    },
  },
  {
    id: "shipping-distribution",
    title: "Shipping & Distribution",
    description:
      "Multi-carrier shipping solutions with discounted rates, route optimization, and delivery tracking for efficient distribution networks.",
    price: "179",
    deliveryTime: "24-hour dispatch",
    icon: "🚚",
    category: "Distribution",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-4.jpg",
      },
    },
  },
  {
    id: "returns-processing",
    title: "Returns Processing",
    description:
      "Comprehensive returns management including inspection, restocking, refurbishment, and customer communication for seamless reverse logistics.",
    price: "£1 to £500",
    deliveryTime: "48-hour processing",
    icon: "🔄",
    category: "Returns Management",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-5.jpg",
      },
    },
  },
  {
    id: "logistics-consulting",
    title: "Logistics Consulting",
    description:
      "Strategic logistics consulting to optimize your supply chain, reduce costs, and improve efficiency with customized solutions.",
    price: "£100 to £500",
    deliveryTime: "1-2 weeks analysis",
    icon: "💡",
    category: "Consulting",
    image: {
      asset: {
        url: "/images/services/3pl/3pl-service-6.jpg",
      },
    },
  },
];

export default async function ThreePLServicesPage() {
  // Service page data configuration
  const pageData: ServicePageData = {
    hero: {
      badge: {
        icon: Truck,
        text: "Complete Logistics Solutions",
      },
      title: {
        main: "Third-Party Logistics",
        subtitle: "Excellence",
      },
      description: {
        text: "Streamline your e-commerce operations with our {highlight1} 3PL services. From warehousing to fulfillment, we handle the logistics so you can {highlight2}.",
        highlights: [
          { text: "comprehensive", color: "primary" },
          { text: "focus on growth", color: "secondary" },
        ],
      },
    },
    services: {
      title: "Choose Your 3PL Service",
      description: {
        text: "From warehousing to last-mile delivery, we offer {highlight1} designed to {highlight2}.",
        highlights: [
          { text: "end-to-end logistics solutions", color: "primary" },
          { text: "optimize your operations", color: "secondary" },
        ],
      },
      data: threePLServices as any,
      badge: {
        icon: Package,
        text: "Our Services",
      },
    },
    whyChooseUs: {
      title: "Why Choose Our 3PL Services",
      description: {
        text: "We deliver exceptional logistics solutions through {highlight1}, {highlight2}, and {highlight3}",
        highlights: [
          { text: "technology", color: "primary" },
          { text: "efficiency", color: "secondary" },
          { text: "reliability", color: "primary" },
        ],
      },
      features: [
        {
          icon: Warehouse,
          title: "State-of-the-Art Facilities",
          description:
            "Modern warehouse facilities equipped with advanced automation, climate control, and security systems to ensure optimal storage conditions.",
          gradient: "from-green-500/20 to-teal-500/20",
        },
        {
          icon: BarChart3,
          title: "Real-Time Analytics",
          description:
            "Comprehensive dashboard with real-time inventory tracking, order status, and performance analytics to keep you informed.",
          gradient: "from-teal-500/20 to-cyan-500/20",
        },
        {
          icon: TrendingUp,
          title: "Scalable Solutions",
          description:
            "Flexible logistics solutions that grow with your business, from startup to enterprise-level operations with seamless scaling.",
          gradient: "from-cyan-500/20 to-green-500/20",
        },
      ],
      badge: {
        icon: Trophy,
        text: "Why Choose Us",
      },
    },
    howItWorks: {
      title: "How Our 3PL Services Work",
      description: {
        text: "Simple integration process to get your {highlight1}",
        highlights: [
          { text: "logistics operations optimized", color: "primary" },
        ],
      },
      steps: [
        {
          step: "1",
          title: "Assessment & Setup",
          description:
            "We analyze your current logistics needs, design a customized solution, and set up your dedicated warehouse space and systems.",
          gradient: "from-green-500/10 to-teal-500/10",
        },
        {
          step: "2",
          title: "Integration & Training",
          description:
            "Seamless integration with your existing systems, staff training, and implementation of automated processes for optimal efficiency.",
          gradient: "from-teal-500/10 to-cyan-500/10",
        },
        {
          step: "3",
          title: "Operations & Optimization",
          description:
            "Continuous monitoring, performance optimization, and regular reporting to ensure your logistics operations run smoothly and efficiently.",
          gradient: "from-cyan-500/10 to-green-500/10",
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
        text: "Real results from businesses that have {highlight1} with our 3PL services",
        highlights: [{ text: "transformed their logistics", color: "primary" }],
      },
      data: [
        {
          quote:
            "Their 3PL services revolutionized our fulfillment process. Order accuracy improved to 99.9% and shipping times were cut in half. Outstanding service!",
          author: "Jennifer Davis",
          role: "E-commerce Director",
          initials: "JD",
          gradient: "from-green-500/10 to-teal-500/10",
        },
        {
          quote:
            "The real-time inventory management and analytics dashboard gave us complete visibility into our operations. Game-changing logistics partner!",
          author: "Robert Martinez",
          role: "Operations Manager",
          initials: "RM",
          gradient: "from-teal-500/10 to-cyan-500/10",
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
        highlights: [{ text: "3PL services", color: "primary" }],
      },
      items: [
        {
          id: 1,
          title: "How long does setup take?",
          content:
            "Initial setup typically takes 1-2 weeks depending on inventory volume and complexity. We provide dedicated project managers to ensure smooth onboarding and minimal disruption to your operations.",
        },
        {
          id: 2,
          title: "Is there a minimum order volume?",
          content:
            "We work with businesses of all sizes. While there's no strict minimum, our services are most cost-effective for businesses processing 100+ orders per month. We offer flexible pricing based on your volume.",
        },
        {
          id: 3,
          title: "How do you integrate with our systems?",
          content:
            "We support integration with major e-commerce platforms (Shopify, WooCommerce, Amazon, etc.) and ERPs. Our API allows real-time data sync for inventory, orders, and shipping information.",
        },
        {
          id: 4,
          title: "What's your shipping coverage?",
          content:
            "We offer domestic and international shipping through partnerships with major carriers (FedEx, UPS, DHL, USPS). Same-day and next-day delivery available in major metropolitan areas.",
        },
      ],
    },
  };

  return <ServicePageLayout data={pageData} />;
}
