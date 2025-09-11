"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import { motion } from "framer-motion";
import { FlowButton } from "../../../ui/flow-button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  backgroundImage?: {
    asset: {
      url: string;
    };
  };
  cta?: {
    text: string;
    link: string;
  };
}

export function HeroSection({
  heading = "Navigating Success in Business",
  subheading = "Unlock your business's full potential with Pioneer—a trusted ally in strategic consulting. From innovative solutions to sustainable growth, we're committed to elevating your success journey with expert guidance.",
  cta = {
    text: "Continue Now",
    link: "/platforms",
  },
  backgroundImage = {
    asset: {
      url: "/images/hero-image.jpg",
    },
  },
}: HeroProps) {
  return (
    <>
      <main className="overflow-x-hidden mb-16 md:mb-20 lg:mb-24">
        <section>
          {/* Hero Content Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[70vh]">
              {/* Text Content */}
              <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight text-foreground"
                >
                  {heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg md:text-xl text-balance text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  {subheading}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 md:mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                >
                  <FlowButton text={cta.text} href={cta.link} />
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-11 md:h-12 rounded-full px-5 text-sm md:text-base hover:bg-zinc-950/5 dark:hover:bg-white/5 w-full sm:w-auto"
                  >
                    <Link href="/platforms">
                      <span className="text-nowrap">View Platforms</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Image Content */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
                >
                  {backgroundImage?.asset?.url ? (
                    <Image
                      src={backgroundImage.asset.url}
                      alt="Hero Image"
                      width={700}
                      height={700}
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
                      <span className="text-gray-400 dark:text-gray-600 text-lg">
                        Hero Image
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners/Brands Section */}
        <section className="bg-background  ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Label */}
              <div className="flex-shrink-0 text-center md:text-right md:min-w-[11rem] md:pr-6 md:border-r border-border/50">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Platforms We Serve
                </p>
              </div>

              {/* Logo Slider */}
              <div className="relative flex-1 w-full">
                <InfiniteSlider gap={112}>
                  <div className="flex items-center justify-center">
                    <img
                      className="h-4 sm:h-5 w-auto object-contain"
                      src="/images/platforms/amazon-logo.png"
                      alt="Amazon Logo"
                      height="30"
                      width="auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      className="h-3 sm:h-4 w-auto object-contain"
                      src="/images/platforms/ebay-logo.png"
                      alt="eBay Logo"
                      height="30"
                      width="auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      className="h-3 sm:h-4 w-auto object-contain"
                      src="/images/platforms/etsy-logo.png"
                      alt="Etsy Logo"
                      height="30"
                      width="auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      className="h-4 sm:h-5 w-auto object-contain"
                      src="/images/platforms/tiktok-logo.png"
                      alt="TikTok Logo"
                      height="30"
                      width="auto"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      className="h-4 sm:h-5 w-auto object-contain dark:invert"
                      src="/images/platforms/walmart-logo.png"
                      alt="Walmart Logo"
                      height="30"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


