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
          className="relative overflow-hidden bg-gradient-to-r from-red-50 via-rose-50 to-pink-50 dark:from-red-950/30 dark:via-rose-950/30 dark:to-pink-950/30 border-b border-red-200/30 dark:border-red-800/30 z-999"
        >
          <div className="container mx-auto px-4 py-4 relative">
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
                  className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 shadow-lg shadow-red-400/25 items-center justify-center flex-shrink-0"
                >
                  <Truck className="w-5 h-5 text-white" />
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                  {/* Main announcement with sparkle animation */}
                  <div className="flex items-center gap-2">
                    <span className="text-red-900 dark:text-red-100 font-bold text-sm sm:text-base bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-300 dark:to-rose-300 bg-clip-text ">
                      NEW: 3PL Services Now Available!
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
                  className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
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
