"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useColorScheme } from "@/providers/theme-provider";

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

export function Hero({
  heading = "Professional eCommerce Services for All Major Platforms",
  subheading = "Get verified accounts, VA services, and account reinstatement for Amazon, eBay, Walmart, TikTok, and Etsy",
  backgroundImage,
  cta = {
    text: "Explore Platforms",
    link: "/platforms",
  },
}: HeroProps) {
  const { getPlatformColor, getPlatformGradient } = useColorScheme();

  const platforms = ["Amazon", "eBay", "Walmart", "TikTok", "Etsy"];

  return (
    <section className="relative overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background opacity-95"></div>
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div className="absolute -right-32 top-1/3 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium mb-6">
              Premium eCommerce Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">
                {heading.split(" ").slice(0, -2).join(" ")}{" "}
              </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-amazon), var(--color-ebay), var(--color-walmart))",
                }}
              >
                {heading.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 rounded-full text-white"
                asChild
                style={{ background: getPlatformGradient("Amazon") }}
              >
                <Link href={cta.link}>
                  {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" className="px-8 rounded-full" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button> */}
            </div>

            {/* Platform badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6 + i * 0.1,
                      duration: 0.5,
                    },
                  }}
                  className="flex items-center gap-2 text-sm p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getPlatformColor(platform) }}
                  ></div>
                  <span>{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              {backgroundImage ? (
                <Image
                  src={backgroundImage.asset.url || "/images/hero.jpg"}
                  alt="H&S Ecommerce Services"
                  fill
                  priority
                  quality={90}
                  className="object-cover rounded-2xl shadow-2xl"
                />
              ) : (
                <div className="relative w-full h-full">
                  {/* Floating 3D device mockups */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="absolute top-16 right-4 w-80 h-64 md:w-96 md:h-72 rounded-2xl shadow-2xl rotate-3 z-20"
                    style={{ background: getPlatformGradient("Amazon") }}
                  >
                    <div className="w-full h-full bg-card rounded-xl p-4 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-destructive rounded-full"></div>
                          <div className="w-3 h-3 bg-warning rounded-full"></div>
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                        </div>
                        <div className="h-4 w-40 bg-muted rounded-md"></div>
                      </div>
                      <div className="flex gap-4 flex-1">
                        <div className="w-20 bg-muted rounded-md"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-muted rounded-md w-full"></div>
                          <div className="h-4 bg-muted rounded-md w-4/5"></div>
                          <div className="h-4 bg-muted rounded-md w-3/4"></div>
                          <div className="h-4 bg-muted rounded-md w-4/5"></div>
                          <div
                            className="h-20 rounded-md w-full mt-6"
                            style={{ backgroundColor: "var(--color-amazon)20" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-[45%] -left-4 w-64 h-56 md:w-72 md:h-64 rounded-2xl shadow-2xl -rotate-6 z-10"
                    style={{ background: getPlatformGradient("Walmart") }}
                  >
                    <div className="w-full h-full bg-card rounded-xl p-4 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div
                          className="h-6 w-20 rounded-md"
                          style={{ backgroundColor: "var(--color-walmart)20" }}
                        ></div>
                        <div
                          className="h-6 w-6 rounded-full"
                          style={{ backgroundColor: "var(--color-walmart)20" }}
                        ></div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="h-4 bg-muted rounded-md w-full"></div>
                        <div className="h-4 bg-muted rounded-md w-5/6"></div>
                        <div
                          className="h-10 rounded-md w-full mt-2"
                          style={{ backgroundColor: "var(--color-walmart)20" }}
                        ></div>
                        <div
                          className="h-10 rounded-md w-full"
                          style={{ backgroundColor: "var(--color-walmart)20" }}
                        ></div>
                        <div
                          className="h-10 rounded-md w-full"
                          style={{ backgroundColor: "var(--color-walmart)20" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-8 left-1/4 w-52 h-40 md:w-60 md:h-48 rounded-2xl shadow-2xl rotate-12 z-30"
                    style={{ background: getPlatformGradient("eBay") }}
                  >
                    <div className="w-full h-full bg-card rounded-xl p-3 flex flex-col">
                      <div className="flex space-x-2 mb-2">
                        <div
                          className="h-8 w-8 rounded-full"
                          style={{ backgroundColor: "var(--color-ebay)20" }}
                        ></div>
                        <div className="h-8 flex-1 bg-muted rounded-md"></div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div
                          className="h-16 rounded-md w-full"
                          style={{ backgroundColor: "var(--color-ebay)20" }}
                        ></div>
                        <div className="flex gap-2">
                          <div className="h-6 flex-1 bg-muted rounded-md"></div>
                          <div
                            className="h-6 w-16 rounded-md"
                            style={{ backgroundColor: "var(--color-ebay)30" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Animated glow effect */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -inset-0 filter blur-2xl rounded-full z-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-amazon)20, var(--color-ebay)20, var(--color-walmart)20)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
