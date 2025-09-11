"use client";

import { motion } from "framer-motion";
import { MapPin, Package, TrendingUp, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export function UKWarehouseBenefits() {
  const benefits = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "UK-Based Storage",
      description: "Safe & affordable warehouses in prime UK locations.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Pick & Pack Service",
      description: "Accurate, fast order dispatch to your UK customers.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Marketing Support",
      description:
        "Scale your business with professional UK-targeted marketing.",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Pakistani Seller Focus",
      description: "Start selling in the UK without big upfront costs.",
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
    <section className="pt-20 lg:pt-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top-centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Our Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Professional UK warehousing built for Pakistani sellers — secure
            storage, fast fulfillment, and growth support you can trust.
          </p>
        </motion.div>

        {/* Bento grid (left) + benefits (right) - benefits take more space */}
        <div className="flex flex-col lg:flex-row gap-8  items-start">
          {/* Left: Compact bento grid */}

          <div className="grid grid-cols-2 gap-2 grid-rows-3 h-[430px] w-full max-w-[450px] mx-auto lg:mx-0">
            {/* Top Left */}
            <div className="relative overflow-hidden rounded-md border border-border/30 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop"
                alt="Warehouse visual"
                fill
                className="object-cover"
              />
            </div>
            {/* Top Right - spans 2 rows */}
            <div className="relative overflow-hidden rounded-md border border-border/30 shadow-sm row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=400&fit=crop"
                alt="Warehouse visual"
                fill
                className="object-cover"
              />
            </div>
            {/* Middle Left */}
            <div className="relative overflow-hidden rounded-md border border-border/30 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1624927637280-f033784c1279?w=300&h=200&fit=crop"
                alt="Warehouse visual"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: 2x2 benefit cards with numbered icon badge */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {benefits.map((benefit, index) => {
              const number = String(index + 1).padStart(2, "0");
              const Icon =
                [MapPin, Package, TrendingUp, Users][index] || MapPin;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="relative h-full rounded-2xl border border-border/40 bg-background/80 p-6 md:p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] transition-colors hover:border-primary/40">
                    {/* Floating number + icon badge */}
                    <div className="absolute -left-3 -top-3 rounded-xl border border-border/60 bg-background px-2 py-1 shadow-sm">
                      <div className="flex items-center gap-1 text-primary">
                        <Icon className="h-4 w-4" />
                        <span className="text-[10px] font-bold">{number}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
