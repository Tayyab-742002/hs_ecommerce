"use client";

import { motion } from "framer-motion";
import { LiaSmileWinkSolid } from "react-icons/lia";
import {
  ArrowRight,
  ShoppingCart,
  UserCheck,
  LineChart,
  ShieldCheck,
  Home,
  PackageCheckIcon,
} from "lucide-react";
import { useColorScheme } from "@/providers/theme-provider";
import { WobbleCard } from "@/components/ui/wobble-card";
import BentoGrid from "@/components/mvpblocks/bento-grid-2";

export function ServicesShowcase() {
  const { getPlatformColor, getPlatformGradient } = useColorScheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      title: "3PL Services",
      meta: "Third-Party Logistics Solutions",
      description:
        "From warehousing to last-mile delivery, we offer end-to-end 3PL services including distribution, inventory management, and fulfillment for platforms like Amazon, eBay, Shopify, and Temu.",
      icon: <PackageCheckIcon className="w-6 h-6" />,
      platform: "Multi-Platform",
      link: "/services/3pl",
      status: "active",
      tags: [
        "logistics",
        "fulfillment",
        "warehousing",
        "3PL",
        "amazon",
        "ebay",
        "shopify",
        "temu",
      ],
      colSpan: 2,
      hasPersistentHover: false,
    },
    {
      title: "Account Services",
      meta: "Professional Account Setup",
      description:
        "We provide professional seller and buyer accounts for all major e-commerce platforms, verified and ready to use.",
      icon: <ShoppingCart className="w-6 h-6" />,
      platform: "Amazon",
      link: "/platforms",
      status: "active",
      tags: ["account", "ecommerce", "verified"],
      colSpan: 1,
      hasPersistentHover: false,
    },
    {
      title: "VA Services",
      meta: "Virtual Assistant Support",
      description:
        "Our experienced virtual assistants help manage your e-commerce business operations, listings, and customer service.",
      icon: <UserCheck className="w-6 h-6" />,
      platform: "eBay",
      link: "/services/va-services",
      status: "active",
      tags: ["va", "support", "operations"],
      colSpan: 1,
      hasPersistentHover: false,
    },
    {
      title: "Performance Optimization",
      meta: "Boost Store Performance",
      description:
        "Improve your store's performance with our specialized optimization services for all marketplace platforms.",
      icon: <LineChart className="w-6 h-6" />,
      platform: "TikTok",
      link: "/services/va-services",
      status: "active",
      tags: ["optimization", "performance", "boost"],
      colSpan: 1,
      hasPersistentHover: false,
    },
    {
      title: "Account Reinstatement",
      meta: "Restore Suspended Accounts",
      description:
        "Get your suspended or blocked accounts back online with our specialized reinstatement services.",
      icon: <ShieldCheck className="w-6 h-6" />,
      platform: "Walmart",
      link: "/services/reinstatement",
      status: "active",
      tags: ["reinstatement", "account recovery"],
      colSpan: 1,
      hasPersistentHover: false,
    },
  ];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          <LiaSmileWinkSolid className="w-3 h-3" />
          Our Comprehensive Services
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          E-commerce Solutions for Sellers
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          From account setup to management and optimization, we provide
          end-to-end services to help you succeed on Amazon, eBay, Walmart,
          TikTok, and Etsy.
        </p>
      </motion.div>
      <BentoGrid items={services} />
    </section>
  );
}
