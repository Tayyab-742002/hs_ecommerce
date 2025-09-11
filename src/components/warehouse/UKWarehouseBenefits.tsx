"use client";

import { motion } from "framer-motion";
import { Check, MapPin, Package, TrendingUp, Users } from "lucide-react";

export function UKWarehouseBenefits() {
  const benefits = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "UK-Based Storage",
      description:
        "Secure, cost-effective warehouses in strategic UK locations with 24/7 monitoring.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Pick & Pack Service",
      description:
        "Lightning-fast, accurate order fulfillment with same-day processing guarantee.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Marketing Support",
      description:
        "Expert UK market strategies including Amazon PPC, social media, and brand optimization.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Pakistani Seller Focus",
      description:
        "Specialized services designed for Pakistani entrepreneurs expanding to UK markets.",
      iconBg: "bg-primary/10 text-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Check className="w-4 h-4" />
            Key Benefits
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Choose Our
            <span className="block text-primary">UK Services</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to successfully expand your business into the UK
            market with professional infrastructure and dedicated support.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-background/80 backdrop-blur-sm border border-border/30 rounded-3xl hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${benefit.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>

                  {/* Check Mark - Positioned at bottom right */}
                  <div className="absolute top-6 right-6 w-6 h-6 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm font-medium text-primary">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No setup fees</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Professional support</span>
            </div>
            <span className="text-primary/40">•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>UK registered business</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
