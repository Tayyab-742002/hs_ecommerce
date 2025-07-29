"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  HeadphonesIcon,
  Globe,
  Award,
  ThumbsUp,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useColorScheme } from "@/providers/theme-provider";
import { HiLockClosed } from "react-icons/hi";

export function WhyChooseUs() {
 

  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Verified Accounts",
      description: "Fully verified and ready to use",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "24-48 hours delivery",
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Coverage",
      description: "Worldwide availability",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Expert Team",
      description: "E-commerce specialists",
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      title: "High Success Rate",
      description: "75-85% success rate",
    },
    {
      icon: <HiLockClosed className="w-5 h-5" />,
      title: "Secure Transactions",
      description: "Advanced encryption",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalable Solutions",
      description: "Grows with your business",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            <Shield className="w-3 h-3" />
            Our Advantages
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose H&S Ecommerce
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Exceptional value and service for your e-commerce success
          </p>
        </motion.div>

        {/* Compact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-border/30"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-primary">1000+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">85%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
