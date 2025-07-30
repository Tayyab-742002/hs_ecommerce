"use client";

import { motion } from "framer-motion";

import { FaUsers } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
export function StatsSection() {
  const stats = [
    {
      value: "2,500+",
      label: "Accounts Delivered",
      icon: <FaUsers className="w-8 h-8 text-[#94A3B8]" />,
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <FaRankingStar className="w-8 h-8 text-[#94A3B8]" />,
    },
    {
      value: "24/7",
      label: "Expert Support",
      icon: <CiTimer className="w-8 h-8 text-[#94A3B8]" />,
    },
    {
      value: "50+",
      label: "Global Coverage",
      icon: (
        <BsGlobeAsiaAustralia className="w-6 h-6 md:w-8 md:h-8 text-[#94A3B8]" />
      ),
    },
  ];

  return (
    <section className="w-full   py-4 sm:py-5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-around  items-center gap-y-3 sm:gap-y-0 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex min-w-[140px] gap-2 place-items-center"
            >
              <div className="flex w-full flex-col items-center justify-center space-y-1 gap-2">
                <div className="flex items-center justify-center mb-1">
                  {stat.icon}
                </div>
                <div className="text-base font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
