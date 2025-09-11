"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaAmazon, FaEbay, FaShopify } from "react-icons/fa";
import { Shield, Star, Users, CheckCircle } from "lucide-react";

export function UKWarehouseTrust() {
  const platforms = [
    {
      name: "Amazon",
      icon: <FaAmazon className="w-8 h-8 text-[#FF9900]" />,
      description: "Trusted Amazon Partner",
    },
    {
      name: "eBay",
      icon: <FaEbay className="w-8 h-8 text-[#E53238]" />,
      description: "eBay Verified Seller Support",
    },
    {
      name: "Shopify",
      icon: <FaShopify className="w-8 h-8 text-[#7AB55C]" />,
      description: "Shopify Plus Partner",
    },
  ];

  const trustMetrics = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Pakistani Sellers",
      description: "Successfully expanded to UK",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 200+ reviews",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable warehouse operations",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
    },
  ];

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
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Shield className="w-4 h-4" />
            Trusted & Verified
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Trusted by Pakistani sellers
            <span className="block text-primary">
              expanding to the UK market
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful sellers who have scaled their business
            with our reliable UK warehouse and fulfillment infrastructure.
          </p>
        </motion.div>

        {/* Platform Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              INTEGRATED WITH LEADING PLATFORMS
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                className="group flex flex-col items-center gap-4 p-8 bg-background/80 backdrop-blur-sm border border-border/30 rounded-3xl hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-muted/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground mb-2 text-lg">
                    {platform.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {platform.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-8 bg-background/80 backdrop-blur-sm border border-border/30 rounded-3xl hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>

              <div className="text-4xl font-bold text-primary mb-3">
                {metric.value}
              </div>

              <div className="font-bold text-foreground mb-3 text-lg">
                {metric.label}
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-10 py-6 bg-primary/5 border border-primary/20 rounded-3xl">
            <div className="flex items-center gap-3 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">UK Registered Business</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-3 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">GDPR Compliant</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-3 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Insured Warehouse</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-3 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">ISO Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
