"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaAmazon, FaEtsy, FaTiktok, FaEbay } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import {
  getPlatformColor,
  getPlatformGradient,
} from "@/lib/utils/platform-colors";
interface PlatformBadgeProps {
  platformName: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "subtle";
  className?: string;
  withName?: boolean;
}

export function PlatformBadge({
  platformName,
  size = "md",
  variant = "filled",
  className,
  withName = true,
}: PlatformBadgeProps) {
  // Default logos if not provided
  const defaultLogos: Record<string, React.ReactNode> = {
    amazon: (
      <FaAmazon
        className="w-8 h-8"
        style={{ color: getPlatformColor("Amazon") }}
      />
    ),
    ebay: (
      <FaEbay className="w-8 h-8" style={{ color: getPlatformColor("Ebay") }} />
    ),
    walmart: (
      <TbBrandWalmart
        className="w-8 h-8"
        style={{ color: getPlatformColor("Walmart") }}
      />
    ),
    tiktok: (
      <FaTiktok
        className="w-8 h-8"
        style={{ color: getPlatformColor("Tiktok") }}
      />
    ),
    etsy: (
      <FaEtsy className="w-8 h-8" style={{ color: getPlatformColor("Etsy") }} />
    ),
    default: (
      <FaWpforms
        className="w-8 h-8"
        style={{ color: getPlatformColor("Tiktok") }}
      />
    ),
  };

  // Get platform name in lowercase for consistency
  const platformNameLower = platformName.toLowerCase();
  const platformLogo = defaultLogos[platformNameLower] || defaultLogos.default;
  // Size classes
  const sizeClasses = {
    sm: "h-6 text-xs",
    md: "h-8 text-sm",
    lg: "h-10 text-base",
  };

  // Padding classes
  const paddingClasses = {
    sm: withName ? "px-2" : "px-1",
    md: withName ? "px-3" : "px-1.5",
    lg: withName ? "px-4" : "px-2",
  };

  // Get style based on variant
  const getVariantStyle = () => {
    switch (variant) {
      case "filled":
        return {
          background: getPlatformGradient(platformNameLower),
          color: "white",
          border: "none",
        };
      case "outline":
        return {
          background: "transparent",
          color: getPlatformColor(platformNameLower),
          border: `1px solid ${getPlatformColor(platformNameLower)}`,
        };
      case "subtle":
        return {
          background: `${getPlatformGradient(platformNameLower)}15`,
          color: getPlatformColor(platformNameLower),
          border: "none",
          fontWeight: "bold",
        };
      default:
        return {};
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        sizeClasses[size],
        paddingClasses[size],
        className
      )}
      style={getVariantStyle()}
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {platformLogo}
      </div>

      {/* {withName && <span className="ml-1.5 mr-0.5">{platformName}</span>} */}
    </div>
  );
}

export function PlatformBadgeGroup({
  platforms,
  size = "sm",
  variant = "subtle",
  className,
}: {
  platforms: string[];
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "subtle";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {platforms.map((platform) => (
        <PlatformBadge
          key={platform}
          platformName={platform}
          size={size}
          variant={variant}
          withName={true}
        />
      ))}
    </div>
  );
}
