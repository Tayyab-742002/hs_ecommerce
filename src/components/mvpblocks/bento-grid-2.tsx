"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { getPlatformColor } from "@/lib/utils/platform-colors";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  link?: string;
  platform?: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Decorative elements */}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.a
            href={item.link || "#"}
            key={`${item.title}-${item.status || item.meta}`}
            className={cn(
              item.colSpan || "col-span-1",
              item.colSpan === 2 ? "md:col-span-2" : ""
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "group bg-card/40 relative h-full transition-all duration-300 hover:shadow-md",
                "will-change-transform hover:-translate-y-1",
                "border-border/60 overflow-hidden",
                {
                  "-translate-y-1 shadow-md": item.hasPersistentHover,
                }
              )}
            >
              <div
                className={cn(
                  "absolute inset-0",
                  item.hasPersistentHover
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300"
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
              </div>

              <CardHeader className="relative space-y-0 p-4">
                <div className="flex items-center justify-between">
                  <div
                    className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg "
                    style={{
                      color: getPlatformColor(item.platform || ""),
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="bg-green-500/40 border border-green-500/70 text-green rounded-md px-2 py-0.5 text-xs font-medium">
                    {item.status || "Active"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-2 p-4 pt-0">
                <h3 className="text-foreground text-[18px] font-bold tracking-tight">
                  {item.title}
                  {item.meta && (
                    <span className="text-muted-foreground ml-2 text-xs font-normal">
                      {item.meta}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter className="relative p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="text-muted-foreground flex flex-wrap gap-2 text-xs">
                    {item.tags?.map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="bg-secondary/50 rounded-md px-2 py-1 backdrop-blur-xs transition-all duration-200 text-white "
                        style={{
                          backgroundColor: getPlatformColor(
                            item.platform || ""
                          ),
                          opacity: 0.8,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    {item.cta || "Explore →"}
                  </span>
                </div>
              </CardFooter>

              <div
                className={cn(
                  "via-primary/10 absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent to-transparent p-px",
                  item.hasPersistentHover
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300"
                )}
              />
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
