"use client";

import { motion } from "framer-motion";
import { useColorScheme } from "@/providers/theme-provider";

export function StatsSection() {
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

  const stats = [
    {
      value: "2,500+",
      label: "Accounts Delivered",
      description: "Across all platforms for clients worldwide",
      platform: "amazon",
      icon: "🟢",
    },
    {
      value: "85%",
      label: "Success Rate",
      description: "For account reinstatement services",
      platform: "ebay",
      icon: "✓",
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Via WhatsApp and email for urgent issues",
      platform: "walmart",
      icon: "💬",
    },
    {
      value: "50+",
      label: "Countries Covered",
      description: "With specialized regional accounts",
      platform: "tiktok",
      icon: "🌐",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const platformColor = getPlatformColor(stat.platform);
            const platformGradient = getPlatformGradient(stat.platform);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col text-center"
              >
                <div className="relative mb-6 mx-auto">
                  <div
                    className="absolute inset-0 rounded-full opacity-2 blur-lg transform scale-150"
                    style={{ backgroundColor: platformColor }}
                  ></div>
                  <div
                    className="relative w-24 h-24 flex items-center justify-center rounded-full text-white shadow-md"
                    style={{ background: platformGradient }}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>

                <div
                  className="mb-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                  style={{ background: platformGradient }}
                >
                  {stat.value}
                </div>

                <div className="text-lg font-semibold mb-2">{stat.label}</div>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
