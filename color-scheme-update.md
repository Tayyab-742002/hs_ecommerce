# H&S Ecommerce Color Scheme Update

## Overview

This document summarizes the changes made to implement the charcoal grey color scheme across the H&S Ecommerce platform, replacing the previous blue-based palette.

## Color System Architecture

### CSS Variables
The color system uses OKLCH color space for modern, perceptually uniform colors with excellent support for dark mode. All colors are defined as CSS variables in `globals.css`.

### Platform-Specific Colors
Each platform has its own designated color:
- Amazon: Green-based (`--color-amazon`)
- eBay: Warm orange/brown (`--color-ebay`)
- Walmart: Blue-based (`--color-walmart`) 
- TikTok: Vibrant purple (`--color-tiktok`)
- Etsy: Warm orange (`--color-etsy`)

### Charcoal Gray Palette
The base color scheme uses a sophisticated charcoal grey palette with these key variables:
- `--color-primary`: Main brand color
- `--color-accent`: Secondary accent color
- `--color-background`: Page background
- `--color-card`: Card and component backgrounds
- `--color-border`: Border color for UI elements

## Components Updated

### Core Components:
- `FeaturedPlatforms`: Uses dynamic platform colors via CSS variables
- `Testimonials`: Updated with platform-specific color styling
- `PlatformsOverview`: Completely redesigned with new color scheme
- `CTASection`: Enhanced with proper gradient backgrounds
- `StatsSection`: Updated to use the new color system

### Theme System:
- Enhanced `ThemeProvider` with platform color utilities
- Created `ThemeToggle` component for simple theme switching
- Added `ThemeSelector` dropdown for more theme options

### Data Models:
- Updated Platform schema to include a color field
- Modified fallback platform data to use the new color system

## Utility Functions

### Added Color Utilities:
- `getPlatformColor(platformName)`: Gets a platform's color from its name
- `getPlatformGradient(platformName)`: Generates a gradient using platform color

### Theme Detection:
- `isDark`: Boolean to detect if dark mode is active
- `isLight`: Boolean to detect if light mode is active

## Implementation Notes

1. All hardcoded color classes (e.g., `bg-blue-500`) have been replaced with CSS variables
2. Inline styles use these variables for consistency
3. Platform-specific styling uses dynamic variable references
4. Dark/light mode handled through CSS variables with Theme Provider

## Next Steps

1. Ensure consistency across all remaining components
2. Implement the ThemeSelector in the site header
3. Test color contrast for accessibility
4. Optimize dark mode appearance for all components
