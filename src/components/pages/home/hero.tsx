"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { color, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useColorScheme } from "@/providers/theme-provider";

import { ColourfulText } from "@/components/ui/colorful-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GridBackground } from "@/components/ui/grid-background";
import { FaAmazon, FaEbay, FaTiktok, FaEtsy } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";

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

  const platforms = [
    { title: "Amazon", icon: <FaAmazon color="var(--color-amazon)" /> },
    { title: "Ebay", icon: <FaEbay color="var(--color-ebay)" /> },
    {
      title: "Walmart",
      icon: <TbBrandWalmart color="var(--color-walmart)" />,
    },
    { title: "Tiktok", icon: <FaTiktok color="var(--color-tiktok)" /> },
    { title: "Etsy", icon: <FaEtsy color="var(--color-etsy)" /> },
  ];

  return (
    <GridBackground>
      <section className="relative overflow-hidden mb-32 md:mb-0">
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
                <span className="text-foreground inline-block">
                  {heading && heading.split(" ").length > 1 ? (
                    <>
                      {heading.split(" ").slice(0, -1).join(" ")}{" "}
                      <ColourfulText
                        text={heading.split(" ").slice(-1).join(" ")}
                      />
                    </>
                  ) : (
                    <ColourfulText text={heading || ""} />
                  )}
                </span>
                {/* <span className="inline-block"></span> */}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                {subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-secondary text-black dark:text-white flex items-center space-x-2"
                >
                  <Link href={cta.link}>{cta.text}</Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </HoverBorderGradient>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform.title}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: 0.1 + i * 0.05,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    className={`
            flex items-center gap-1.5
            px-2.5 py-1
            rounded-full
            text-xs font-medium
            bg-muted/70
            border border-transparent
            hover:border-border/80
            cursor-default
            transition-all duration-150 ease-in-out
            select-none



          `}
                  >
                    {/* Colored indicator dot */}

                    {/* Optional Icon */}
                    {platform.icon && (
                      <div className="flex-shrink-0 w-3 h-3 text-muted-foreground">
                        {platform.icon}
                      </div>
                    )}

                    {/* Platform Title */}
                    <span className="text-foreground/90">
                      {" "}
                      {/* Badge text */}
                      {platform.title}
                    </span>
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
                              style={{
                                backgroundColor: "var(--color-amazon)20",
                              }}
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
                            style={{
                              backgroundColor: "var(--color-walmart)20",
                            }}
                          ></div>
                          <div
                            className="h-6 w-6 rounded-full"
                            style={{
                              backgroundColor: "var(--color-walmart)20",
                            }}
                          ></div>
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="h-4 bg-muted rounded-md w-full"></div>
                          <div className="h-4 bg-muted rounded-md w-5/6"></div>
                          <div
                            className="h-10 rounded-md w-full mt-2"
                            style={{
                              backgroundColor: "var(--color-walmart)20",
                            }}
                          ></div>
                          <div
                            className="h-10 rounded-md w-full"
                            style={{
                              backgroundColor: "var(--color-walmart)20",
                            }}
                          ></div>
                          <div
                            className="h-10 rounded-md w-full"
                            style={{
                              backgroundColor: "var(--color-walmart)20",
                            }}
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
                              style={{
                                backgroundColor: "var(--color-ebay)30",
                              }}
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
    </GridBackground>
  );
}
