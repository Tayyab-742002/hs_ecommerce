"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useColorScheme } from "@/providers/theme-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function CTASection() {
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

  return (
    <section className="py-12 px-2 lg:px-0 relative overflow-hidden ">
      {/* Main content */}
      <div className="container  px-4 sm:px-6 lg:px-8 bg-primary mx-auto p-5 rounded-lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl text-white font-bold tracking-tight md:text-4xl mb-2"
          >
            Ready to Grow Your E-commerce Business?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-md text-white/60 mb-8 max-w-3xl mx-auto"
          >
            Get started with our professional accounts, VA services, and
            reinstatement solutions for Amazon, eBay, Walmart, TikTok, and Etsy.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ShimmerButton
              className="text-white! bg-primary! py-1!"
              background="#fb4141"
            >
              <Link href="/contact">Contact Us Now</Link>
            </ShimmerButton>

            <Button
              size="lg"
              variant="ghost"
              asChild
              className="rounded-full  px-6 py-1! border-2 backdrop-blur-sm"
              style={{
                borderColor: `${getPlatformColor("etsy")}40`,
                color: getPlatformColor("etsy"),
              }}
            >
              <Link href="/platforms" className="text-white/80!">
                Explore Platforms
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <p className="text-white font-semibold">Contact us:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923010510316"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg transition-colors text-white/80! text-sm"
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="lightgreen"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +92 301 0510316
              </a>

              <a
                href="tel:+447955426807"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg transition-colors text-white/80! text-sm"
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="orange"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +44 7955 426807
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
