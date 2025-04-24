"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeSelector } from "@/components/theme-selector";

const platforms = [
  {
    title: "Amazon",
    href: "/platforms/amazon",
    description: "Seller Central & Buyer accounts for all countries",
    icon: "🛍️",
  },
  {
    title: "eBay",
    href: "/platforms/ebay",
    description: "Seller and buyer accounts with global marketplace access",
    icon: "🌐",
  },
  {
    title: "Walmart",
    href: "/platforms/walmart",
    description: "Seller Center accounts for online marketplace",
    icon: "🏪",
  },
  {
    title: "TikTok",
    href: "/platforms/tiktok",
    description: "TikTok Shop seller accounts and management",
    icon: "📱",
  },
  {
    title: "Etsy",
    href: "/platforms/etsy",
    description: "Seller accounts for handmade and vintage marketplace",
    icon: "🎨",
  },
];

const services = [
  {
    title: "Virtual Assistant Services",
    href: "/services/va-services",
    description: "Professional VA services for all major e-commerce platforms",
    icon: "👥",
    subServices: [
      { name: "Amazon VA Services", icon: "🛍️" },
      { name: "Walmart VA Services", icon: "🏪" },
      { name: "eBay VA Services", icon: "🌐" },
      { name: "TikTok VA Services", icon: "📱" },
      { name: "Etsy VA Services", icon: "🎨" },
    ],
  },
  {
    title: "Account Reinstatement",
    href: "/services/reinstatement",
    description: "Professional help to recover blocked or suspended accounts",
    icon: "🔄",
    subServices: [
      { name: "Amazon Account Recovery", icon: "🛍️" },
      { name: "Walmart Account Recovery", icon: "🏪" },
      { name: "eBay Account Recovery", icon: "🌐" },
      { name: "TikTok Account Recovery", icon: "📱" },
      { name: "Etsy Account Recovery", icon: "🎨" },
    ],
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-90">
          <Image
            src="/logo.svg"
            alt="H&S Ecommerce Logo"
            width={36}
            height={36}
            className="dark:invert"
          />
          <span className="font-semibold text-xl tracking-tight">H&S Ecommerce</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10">Platforms</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {platforms.map((platform) => (
                    <ListItem
                      key={platform.title}
                      title={platform.title}
                      href={platform.href}
                      icon={platform.icon}
                    >
                      {platform.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      icon={service.icon}
                    >
                      <div className="mt-2 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.subServices.map((subService) => (
                            <div
                              key={subService.name}
                              className="flex items-center space-x-2 text-sm rounded-md p-1 hover:bg-accent transition-colors"
                            >
                              <span>{subService.icon}</span>
                              <span>{subService.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact Numbers and Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <ThemeSelector />
            <ThemeToggle />
          </div>

          <div className="flex flex-col items-end text-sm">
            <a href="tel:+923010510316" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+92 301 0510316</span>
            </a>
            <a href="tel:+447955426807" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+44 7955 426807</span>
            </a>
          </div>
          <Button size="sm" className="shadow-sm" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={(e) => {
                    // Close sheet on clicking the logo
                    const closeButton = document.querySelector(
                      '[data-state="open"] button[data-ui="close"]'
                    ) as HTMLButtonElement;
                    closeButton?.click();
                  }}
                >
                  <Image
                    src="/logo.svg"
                    alt="H&S Ecommerce Logo"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="ml-2 font-semibold text-lg">H&S Ecommerce</span>
                </Link>
              </div>
              <div className="mt-8 px-7">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg">Menu</h3>
                  <ThemeSelector />
                </div>
                <div className="mt-2 flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="rounded-md px-4 py-2 hover:bg-accent transition-colors"
                    onClick={(e) => {
                      const closeButton = document.querySelector(
                        '[data-state="open"] button[data-ui="close"]'
                      ) as HTMLButtonElement;
                      closeButton?.click();
                    }}
                  >
                    Home
                  </Link>
                  <div className="px-4 py-2">
                    <h4 className="font-medium mb-2">Platforms</h4>
                    <div className="ml-4 flex flex-col space-y-2">
                      {platforms.map((platform) => (
                        <Link
                          key={platform.title}
                          href={platform.href}
                          className="flex items-center space-x-2 rounded-md px-3 py-1.5 hover:bg-accent transition-colors"
                          onClick={(e) => {
                            const closeButton = document.querySelector(
                              '[data-state="open"] button[data-ui="close"]'
                            ) as HTMLButtonElement;
                            closeButton?.click();
                          }}
                        >
                          <span>{platform.icon}</span>
                          <span>{platform.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <h4 className="font-medium mb-2">Services</h4>
                    <div className="ml-4 flex flex-col space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center space-x-2 rounded-md px-3 py-1.5 hover:bg-accent transition-colors"
                          onClick={(e) => {
                            const closeButton = document.querySelector(
                              '[data-state="open"] button[data-ui="close"]'
                            ) as HTMLButtonElement;
                            closeButton?.click();
                          }}
                        >
                          <span>{service.icon}</span>
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="rounded-md px-4 py-2 hover:bg-accent transition-colors"
                    onClick={(e) => {
                      const closeButton = document.querySelector(
                        '[data-state="open"] button[data-ui="close"]'
                      ) as HTMLButtonElement;
                      closeButton?.click();
                    }}
                  >
                    Contact
                  </Link>
                </div>
                <div className="mt-8 space-y-2">
                  <h4 className="font-medium">Contact</h4>
                  <div className="space-y-2 ml-4">
                    <a
                      href="tel:+923010510316"
                      className="flex items-center space-x-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+92 301 0510316</span>
                    </a>
                    <a
                      href="tel:+447955426807"
                      className="flex items-center space-x-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+44 7955 426807</span>
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  {/* Mobile Navigation */}
                  {/* This component doesn't need an explicit X close button since Sheet provides that */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon && <span>{icon}</span>}
            <span>{title}</span>
          </div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
