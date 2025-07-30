"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, Truck, ArrowRight, Sparkles } from "lucide-react";

export function ThreePLBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden bg-[#b31c1f] border-b  z-900"
        >
          <div className="container mx-auto px-4  relative">
            <div className="flex items-center justify-between gap-4">
              {/* Banner Content */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Animated icon with glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden z-9 sm:flex w-6 h-6 rounded-xl bg-red-500 shadow-lg shadow-red-400/25 items-center justify-center flex-shrink-0"
                >
                  <span className="text-white text-[10px] font-bold">NEW</span>
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                  {/* Main announcement with sparkle animation */}
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm sm:text-base ">
                      3PL Services Now Available!
                    </span>
                  </div>

                  <div className="hidden sm:block w-px h-6 bg-red-300/50 dark:bg-red-700/50" />

                  <p className="text-red-700 dark:text-red-200 text-xs sm:text-sm font-medium ">
                    Complete logistics solutions for your e-commerce business
                  </p>
                </div>
              </div>

              {/* CTA Buttons with modern styling */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  size="sm"
                  className="bg-transparent! text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    <span className="hidden sm:inline">Learn More</span>
                    <span className="sm:hidden">Learn</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDismiss}
                  className="p-2 rounded-full text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
                  aria-label="Dismiss banner"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
