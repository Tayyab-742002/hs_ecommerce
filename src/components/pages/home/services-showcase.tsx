"use client";

import { motion } from "framer-motion";
import { LiaSmileWinkSolid } from "react-icons/lia";
import {
  ShoppingCart,
  UserCheck,
  LineChart,
  ShieldCheck,
  PackageCheckIcon,
} from "lucide-react";

import BentoGrid from "@/components/mvpblocks/bento-grid-2";

export function ServicesShowcase() {
  const services = [
    {
      title: "3PL Services",
      meta: "Third-Party Logistics Solutions",
      description:
        "From warehousing to last-mile delivery, we offer end-to-end 3PL services including distribution, inventory management, and fulfillment for platforms like Amazon, eBay, Shopify, and Temu.",
      icon: <PackageCheckIcon className="w-6 h-6" />,
      platform: "Multi-Platform",
      link: "/services/3pl-services",
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
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
}
