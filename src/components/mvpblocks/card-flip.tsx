"use client";

/**
 * @author: @nuelst
 * @description: Card Flip - MVP Development Theme
 * @version: 1.1.0
 * @date: 2025-01-14
 * @license: MIT
 * @website: https://nueslt.vercel.app
 * @github: https://github.com/nuelst
 */

import { cn } from "@/lib/utils";

import { ArrowRight, Code2, Copy, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaAmazon } from "react-icons/fa6";

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  icon?: React.ReactNode;
  link?: string;
  platformColor?: string;
}

export default function CardFlip({
  title = "Build MVPs Fast",
  subtitle = "Launch your idea in record time",
  description = "Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.",
  features = [
    "Copy & Paste Ready",
    "Developer-First",
    "MVP Optimized",
    "Zero Setup Required",
  ],
  icon = <FaAmazon />,
  link = "/platforms/amazon",
  platformColor = "#000000",
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[360px] w-full  max-w-[300px] [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(0deg)] [backface-visibility:hidden]",
            "overflow-hidden rounded-2xl",

            "border border-border dark:border-border/50",
            "shadow-lg dark:shadow-xl",
            "transition-all duration-700",
            "group-hover:shadow-xl dark:group-hover:shadow-2xl",
            "group-hover:border-primary/20 dark:group-hover:border-primary/30",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Background gradient effect */}
          {/* <div className="from-primary/5 dark:from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-primary/5 dark:to-primary/10" /> */}

          {/* Animated code blocks */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2">
              {/* Code blocks animation */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 w-full rounded-sm",
                    "from-primary/30 via-primary/30 to-primary/30 bg-gradient-to-r",
                    "animate-[slideIn_2s_ease-in-out_infinite]",
                    "opacity-0"
                  )}
                  style={{
                    width: `${60 + Math.random() * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    marginLeft: `${Math.random() * 20}%`,
                  }}
                />
              ))}

              {/* Central rocket icon */}
              <div className="absolute flex items-center justify-center">
                <div
                  className={cn(
                    "h-16 w-16 rounded-xl",

                    "flex items-center justify-center",
                    "shadow-primary/25 shadow-lg",
                    "animate-pulse",
                    "transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  )}
                >
                  {icon}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-primary transition-all duration-500 ease-out group-hover:translate-y-[-4px] ">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm tracking-tight text-slate-500 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px] ">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "from-primary/20 via-primary/10 bg-gradient-to-br to-transparent",
                    "opacity-0 group-hover/icon:opacity-100"
                  )}
                />
                <Zap
                  className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12"
                  style={{ color: platformColor }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "rounded-2xl p-5",

            "border border-border",
            "shadow-lg dark:shadow-xl",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl dark:group-hover:shadow-2xl",
            "group-hover:border-primary/20 dark:group-hover:border-primary/30",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Background gradient */}
          <div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

          <div className="relative z-10 flex-1 space-y-5">
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="bg-transparent flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                  {icon}
                </div>
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-primary transition-all duration-500 ease-out group-hover:translate-y-[-2px] ">
                  {title}
                </h3>
              </div>
              <p className="line-clamp-2 text-sm tracking-tight text-slate-500 transition-all duration-500 ease-out group-hover:translate-y-[-2px] ">
                {description}
              </p>
            </div>

            <div className="space-y-2.5">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-400 transition-all duration-500 "
                    style={{
                      transform: isFlipped
                        ? "translateX(0)"
                        : "translateX(-10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="bg-primary/10 dark:bg-primary/20 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md">
                      <IconComponent className="text-primary h-3 w-3" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            href={link}
            className="relative z-10 mt-auto  border-t border-border pt-4 "
          >
            <div
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "rounded-lg p-2.5",
                "transition-all duration-300",
                "bg-gradient-to-r bg-primary/80",
                "hover:from-primary/10 hover:via-primary/5 hover:to-transparent",
                "hover:scale-[1.02] hover:cursor-pointer",
                "hover:border-primary/20 border border-transparent"
              )}
            >
              <span className="group-hover/start:text-primary text-sm font-semibold text-zinc-900 transition-colors duration-300 dark:text-white">
                Explore {title}
              </span>

              <div className="group/icon relative">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    "from-primary/20 via-primary/10 bg-gradient-to-br to-transparent",
                    "scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100"
                  )}
                />
                <ArrowRight className="text-white relative  z-10 h-4 w-4 transition-all duration-300 group-hover/start:translate-x-1 group-hover/start:scale-110" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
