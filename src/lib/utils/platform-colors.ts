// Platform color utility functions

export function getPlatformColor(platformName: string): string {
  const platformColors: Record<string, string> = {
    amazon: "var(--color-amazon, #FF9900)",
    ebay: "var(--color-ebay, #E53238)",
    walmart: "var(--color-walmart, #0071CE)",
    tiktok: "var(--color-tiktok, #FF0050)",
    etsy: "var(--color-etsy, #F45800)",
    facebook: "var(--color-facebook, #1877F2)",
    instagram: "var(--color-instagram, #E1306C)",
    twitter: "var(--color-twitter, #1DA1F2)",
    linkedin: "var(--color-linkedin, #0A66C2)",
    pinterest: "var(--color-pinterest, #E60023)",
    shopify: "var(--color-shopify, #7AB55C)",
    youtube: "var(--color-youtube, #FF0000)",
    aliexpress: "var(--color-aliexpress, #FF0000)",

    // Add more platforms as needed
  };

  // Normalize platform name to lowercase and remove spaces
  const normalizedName = platformName.toLowerCase().replace(/\s+/g, "");

  // Return the color or a default if not found
  return platformColors[normalizedName] || "var(--color-primary)";
}

export function getPlatformGradient(platformName: string): string {
  const color = getPlatformColor(platformName);
  return `linear-gradient(135deg, ${color}15, ${color}30)`;
}
