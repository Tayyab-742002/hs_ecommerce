"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Warehouse,
  Truck,
  Package,
  TrendingUp,
  MapPin,
  Phone,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";

export function ThreePLServices() {
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
      title: "Distribution & Warehousing",
      description: "Transportation & Inventory Management",
      icon: <Warehouse className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
    },
    {
      title: "Logistic Operation Enhancement",
      description: "Efficiency Improvement",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient:
        "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
    },
    {
      title: "Fast and Reliable Order Fulfillment",
      description: "Advanced Inventory Management",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-500",
      bgGradient:
        "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
    },
    {
      title: "All Amazon eBay Shopify and Temu 3PL Services",
      description: "Complete platform integration support",
      icon: <Truck className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden ">
      {/* Enhanced background with animated elements */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium mb-4"
        >
          Third-party Logistics Solutions
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-pink-500"
        >
          3PL Services
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg max-w-3xl mx-auto"
        >
          From warehousing to last-mile delivery, H&S 3PL Services ensures
          seamless logistics support tailored to your business. Let us handle
          the heavy lifting while you focus on growth.
        </motion.p>
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            {/* Stats preview */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { label: "Orders Processed", value: "50K+", icon: Package },
                { label: "Happy Clients", value: "200+", icon: ShieldCheck },
                { label: "Delivery Speed", value: "99.9%", icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Premium Services
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive logistics solutions designed to scale with your
                business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className={`group relative p-8 rounded-2xl border border-border/50 bg-gradient-to-br  backdrop-blur-sm hover:border-border transition-all duration-500 overflow-hidden`}
                >
                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      {/* Enhanced icon with gradient */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br  shadow-lg flex items-center justify-center text-white group-hover:shadow-xl transition-all duration-300`}
                        >
                          {React.cloneElement(service.icon, {
                            className: "w-8 h-8",
                          })}
                        </div>
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        {/* Check mark and title */}
                        <div className="flex items-start gap-3 mb-4">
                          <h4 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 text-current" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div variants={itemVariants} className="relative">
            {/* Background with gradient */}

            {/* Content */}
            <div className="relative bg-card  rounded-3xl border border-border/50 p-8 md:p-12 overflow-hidden">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 ">
                      Get Started Today
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Ready to transform your logistics? Contact our experts
                      now.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Blackburn, England",
                      },

                      {
                        icon: Phone,
                        label: "Call Us",
                        value: "+44 7955 426807",
                        href: "tel:+447955426807",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className={`w-14 h-14 rounded-2xl  shadow-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-xl transition-all duration-300`}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              target={
                                contact.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                contact.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold text-foreground">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-right"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-foreground">
                        Ready to Scale?
                      </h4>
                      <p className="text-muted-foreground">
                        Join 200+ businesses that trust us with their logistics
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="lg"
                          className="w-full lg:w-auto bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600  hover:to-rose-600 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 text-base font-semibold px-8 py-4 rounded-full"
                          asChild
                        >
                          <Link href="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full lg:w-auto border-2 border-border hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 text-base font-semibold px-8 py-4 rounded-full"
                          asChild
                        >
                          <a href="tel:+447955426807">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Trust indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center lg:justify-end gap-4 pt-4 text-sm text-muted-foreground"
                    >
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>Secure</span>
                      </div>
                      <div className="w-px h-4 bg-border"></div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span>Fast Response</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
