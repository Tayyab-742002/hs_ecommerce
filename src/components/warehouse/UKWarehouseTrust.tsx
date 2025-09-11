"use client";

import { motion } from "framer-motion";
import { FaAmazon, FaEbay, FaShopify } from "react-icons/fa";
import { SiEtsy, SiTiktok } from "react-icons/si";
import { Shield, Star, Users } from "lucide-react";

export function UKWarehouseTrust() {
  const platforms = [
    {
      name: "Amazon",
      icon: <FaAmazon className="w-6 h-6 text-[#FF9900]" />,
      description: "Official Partner",
    },
    {
      name: "eBay",
      icon: <FaEbay className="w-6 h-6 text-[#E53238]" />,
      description: "Verified Seller",
    },
    {
      name: "Shopify",
      icon: <FaShopify className="w-6 h-6 text-[#7AB55C]" />,
      description: "Plus Partner",
    },
    {
      name: "Etsy",
      icon: <SiEtsy className="w-6 h-6 text-[#F16521]" />,
      description: "Trusted Seller",
    },
    {
      name: "TikTok Shop",
      icon: <SiTiktok className="w-6 h-6 text-[#000000]" />,
      description: "Verified Partner",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      number: "500+",
      label: "Active Sellers",
    },
    {
      icon: <Star className="w-5 h-5" />,
      number: "99.9%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      number: "5+",
      label: "Years Experience",
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
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Shield className="w-4 h-4" />
            Trusted & Verified
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="text-primary">500+ international sellers</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join successful sellers expanding to the UK market with our reliable
            infrastructure
          </p>
        </motion.div>

        {/* Stats (minimal band, no cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {stat.icon}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold text-foreground">
                    {stat.number}
                  </span>
                  <span className="text-xs lg:text-sm uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <span
                    className="hidden md:inline-block h-6 w-px bg-border/60 ml-6"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Integration */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Integrated with leading platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                className="group flex items-center gap-3 px-4 py-3 bg-background/80 border border-border/30 rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-muted/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-sm">
                    {platform.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {platform.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
