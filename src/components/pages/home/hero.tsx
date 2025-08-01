"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import AvatarGroup from "@/components/avatar-group";
import { FaAmazon, FaEtsy, FaTiktok, FaEbay } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import { getPlatformColor } from "@/lib/utils/platform-colors";
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
  heading = "Navigating Success in Business",
  subheading = "Unlock your business's full potential with Pioneer—a trusted ally in strategic consulting. From innovative solutions to sustainable growth, we're committed to elevating your success journey with expert guidance.",
  cta = {
    text: "Continue Now",
    link: "/platforms",
  },
  backgroundImage,
}: HeroProps) {
  const platforms = [
    {
      alt: "Amazon",
      icon: (
        <FaAmazon
          className="w-8 h-8"
          style={{ color: getPlatformColor("Amazon") }}
        />
      ),
    },
    {
      alt: "Ebay",
      icon: (
        <FaEbay
          className="w-8 h-8"
          style={{ color: getPlatformColor("Ebay") }}
        />
      ),
    },
    {
      alt: "Tiktok",
      icon: (
        <FaTiktok
          className="w-8 h-8"
          style={{ color: getPlatformColor("Tiktok") }}
        />
      ),
    },
    {
      alt: "Etsy",
      icon: (
        <FaEtsy
          className="w-8 h-8"
          style={{ color: getPlatformColor("Etsy") }}
        />
      ),
    },
    {
      alt: "Walmart",
      icon: (
        <TbBrandWalmart
          className="w-8 h-8"
          style={{ color: getPlatformColor("Walmart") }}
        />
      ),
    },
  ];

  return (
    <section className="py-12">
      <div className=" container justify-center! items-center! z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pt-20">
        <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-10 ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 "
          >
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl text-center lg:text-left lg:text-6xl font-bold text-primary leading-tight">
              {heading}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-center lg:text-left text-slate-400 leading-relaxed max-w-2xl">
              {subheading}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 flex-col lg:flex-row"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link href={cta.link} className="flex items-center">
                  {cta.text}
                </Link>
              </Button>

              {/* Client Avatars */}
              <div className="flex items-center gap-4">
                <AvatarGroup
                  items={[
                    {
                      id: 1,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image: "https://randomuser.me/api/portraits/men/60.jpg",
                    },
                    {
                      id: 2,
                      name: "Jane Smith",
                      designation: "Product Manager",
                      image: "https://randomuser.me/api/portraits/men/61.jpg",
                    },
                    {
                      id: 3,
                      name: "Jim Beam",
                      designation: "Marketing Manager",
                      image: "https://randomuser.me/api/portraits/men/62.jpg",
                    },
                    {
                      id: 4,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image: "https://randomuser.me/api/portraits/men/63.jpg",
                    },
                    {
                      id: 5,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image: "https://randomuser.me/api/portraits/men/64.jpg",
                    },
                    {
                      id: 6,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image: "https://randomuser.me/api/portraits/men/65.jpg",
                    },
                  ]}
                  maxVisible={5}
                  size="md"
                />
                <div className="text-sm">
                  <div className="font-semibold text-primary ">340+</div>
                  <div className="text-muted-foreground">satisfied clients</div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 mt-2">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-center  gap-2 "
                  >
                    {platform.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-center items-center "
          >
            <Image
              src={backgroundImage?.asset.url || ""}
              alt="Hero Image"
              width={700}
              height={700}
              className="object-cover rounded-2xl "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
