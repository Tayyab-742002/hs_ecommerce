import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface VAServiceCardProps {
  service: {
    title: string;
    description: string;
    price: string;
    icon?: {
      asset: {
        url: string;
      };
    };
    platformName: string;
  };
}

export function VAServiceCard({ service }: VAServiceCardProps) {
  return (
    <div className="group h-full relative overflow-hidden">
      {/* Card Background with Enhanced Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm"></div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Main Card Content */}
      <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
        {/* Shimmer Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
        </div>

        <div className="relative p-6 lg:p-8 h-full flex flex-col">
          {/* Header Section */}
          <div className="mb-6">
            {/* Platform Badge */}
            <div className="flex justify-end mb-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                {service.platformName}
              </div>
            </div>

            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              {service.icon && service.icon.asset && (
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src={service.icon.asset.url}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 mb-6">
            <p className="text-muted-foreground leading-relaxed text-base line-clamp-4 group-hover:text-muted-foreground/80 transition-colors">
              {service.description}
            </p>
          </div>

          {/* Footer Section */}
          <div className="pt-6 border-t border-border/50 group-hover:border-primary/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium mb-1">
                  Starting at
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ${service.price}
                  </span>
                  <span className="text-muted-foreground text-sm">USD</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
