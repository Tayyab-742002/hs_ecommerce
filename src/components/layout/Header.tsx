"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaAmazon,
  FaTiktok,
  FaEtsy,
  FaTruckLoading,
  FaTruck,
} from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import { HiRefresh } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BiStore } from "react-icons/bi";
import { LuBoxes } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Menu,
  Phone,
  X,
  Building2,
  Users,
  HeadphonesIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EbayIcon from "@/icons/EbayIcon";
import { ShimmerButton } from "../magicui/shimmer-button";
import { useRouter } from "next/navigation";

const platforms = [
  {
    title: "Amazon",
    href: "/platforms/amazon",
    description: "Seller Central & Buyer accounts for all countries",
    icon: <FaAmazon className="w-5 h-5 text-[#FF9900]" />,
    features: ["Seller Central", "Buyer Accounts", "Global Support"],
  },
  {
    title: "eBay",
    href: "/platforms/ebay",
    description: "Seller and buyer accounts with global marketplace access",
    icon: <EbayIcon className="w-5 h-5 text-[#E53238]" />,
    features: ["Store Setup", "Listing Tools", "Global Access"],
  },
  {
    title: "Walmart",
    href: "/platforms/walmart",
    description: "Seller Center accounts for online marketplace",
    icon: <TbBrandWalmart className="w-5 h-5 text-[#0071CE]" />,
    features: ["Marketplace", "Seller Tools", "Inventory"],
  },
  {
    title: "TikTok",
    href: "/platforms/tiktok",
    description: "TikTok Shop seller accounts and management",
    icon: <FaTiktok className="w-5 h-5 text-[#FF0050]" />,
    features: ["Shop Setup", "Social Commerce", "Creator Tools"],
  },
  {
    title: "Etsy",
    href: "/platforms/etsy",
    description: "Seller accounts for handmade and vintage marketplace",
    icon: <FaEtsy className="w-5 h-5 text-[#F16521]" />,
    features: ["Handmade Focus", "Creative Tools", "Global Reach"],
  },
];

const services = [
  {
    title: "Virtual Assistant Services",
    href: "/services/va-services",
    description: "Professional VA services for all major e-commerce platforms",
    icon: <Users className="w-5 h-5 text-primary" />,
    badge: "Most Popular",
    subServices: [
      {
        name: "Amazon VA Services",
        icon: <FaAmazon className="w-4 h-4 text-[#FF9900]" />,
        description: "Listing optimization, PPC management",
      },
      {
        name: "Walmart VA Services",
        icon: <TbBrandWalmart className="w-4 h-4 text-[#0071CE]" />,
        description: "Marketplace management, inventory",
      },
      {
        name: "eBay VA Services",
        icon: <EbayIcon className="w-4 h-4 text-[#E53238]" />,
        description: "Store management, customer service",
      },
      {
        name: "TikTok VA Services",
        icon: <FaTiktok className="w-4 h-4 text-[#FF0050]" />,
        description: "Social commerce, content creation",
      },
      {
        name: "Etsy VA Services",
        icon: <FaEtsy className="w-4 h-4 text-[#F16521]" />,
        description: "Creative optimization, SEO",
      },
    ],
  },
  {
    title: "Account Reinstatement",
    href: "/services/reinstatement",
    description: "Professional help to recover blocked or suspended accounts",
    icon: <HiRefresh className="w-5 h-5 text-primary" />,
    badge: "Expert Service",
    subServices: [
      {
        name: "Amazon Account Recovery",
        icon: <FaAmazon className="w-4 h-4 text-[#FF9900]" />,
        description: "85% success rate, POA creation",
      },
      {
        name: "Walmart Account Recovery",
        icon: <TbBrandWalmart className="w-4 h-4 text-[#0071CE]" />,
        description: "Performance improvement plans",
      },
      {
        name: "eBay Account Recovery",
        icon: <EbayIcon className="w-4 h-4 text-[#E53238]" />,
        description: "Appeal letter writing, compliance",
      },
      {
        name: "TikTok Account Recovery",
        icon: <FaTiktok className="w-4 h-4 text-[#FF0050]" />,
        description: "Community guidelines compliance",
      },
      {
        name: "Etsy Account Recovery",
        icon: <FaEtsy className="w-4 h-4 text-[#F16521]" />,
        description: "Policy violation resolution",
      },
    ],
  },
  {
    title: "3PL Services",
    href: "/services/3pl-services",
    description: "Warehousing, transportation, and order fulfillment solutions",
    icon: <FaTruckLoading className="w-5 h-5 text-primary" />,
    badge: "New",
    subServices: [
      {
        name: "Distribution & Warehousing",
        icon: <LuBoxes className="w-4 h-4 text-red-400" />,
        description: "Transportation and inventory management",
      },
      {
        name: "Logistics Optimization",
        icon: <FaTruck className="w-4 h-4 text-teal-400" />,
        description: "Enhancing efficiency and streamlining operations",
      },
      {
        name: "Order Fulfillment",
        icon: <GoNote className="w-4 h-4 text-black" />,
        description: "Reliable order processing and shipping",
      },
      {
        name: "3PL for Amazon, eBay, Shopify, Temu",
        icon: <BiStore className="w-4 h-4 text-pink-400" />,
        description: "Specialized fulfillment for top e-commerce platforms",
      },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "border-b border-border ",
        isScrolled ? "bg-background/95 shadow-md " : "bg-background/90"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 transition-all duration-200 hover:opacity-90 group"
        >
          <div className="relative">
            <Image
              src="/images/Logo.png"
              alt="H&S Ecommerce Logo"
              width={48}
              height={48}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg leading-tight tracking-tight">
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text ">
                H&S
              </span>
              <br />
              <span className="text-foreground/80 text-sm font-medium">
                Ecommerce
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2  ",
                  "text-sm font-medium transition-all duration-200",
                  "hover:bg-primary/10 hover:text-primary",
                  "focus:bg-primary/10 focus:text-primary focus:outline-none",
                  "data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 text-sm font-medium rounded-lg group hover:text-white">
                <NavigationMenuLink
                  href="/platforms"
                  className="flex items-center flex-row space-x-1  hover:text-white"
                >
                  <Building2 className="w-4 h-4  hover:text-white" />
                  <span className="hover:text-white">Platforms</span>
                </NavigationMenuLink>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-4 p-6 md:w-[700px] lg:w-[800px] ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        E-commerce Platforms
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional accounts for major marketplaces
                      </p>
                    </div>
                    <Link
                      href="/accounts"
                      className={cn(
                        "inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-2",
                        "text-sm font-medium text-primary transition-colors hover:bg-primary/70 hover:text-white"
                      )}
                    >
                      <span>View All Accounts</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {platforms.map((platform) => (
                      <PlatformItem
                        key={platform.title}
                        title={platform.title}
                        href={platform.href}
                        description={platform.description}
                        icon={platform.icon}
                        features={platform.features}
                      />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 text-sm font-medium rounded-lg ">
                <span className="flex items-center flex-row space-x-1   hover:text-white">
                  <HeadphonesIcon className="w-4 h-4 hover:text-white" />
                  <span className="hover:text-white">Services</span>
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[700px] p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Professional Services
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Expert assistance for your e-commerce business growth
                    </p>
                  </div>
                  <div className="grid gap-6 ">
                    {services.map((service) => (
                      <ServiceItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        description={service.description}
                        icon={service.icon}
                        badge={service.badge}
                        subServices={service.subServices}
                      />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 ",
                  "text-sm font-medium transition-all duration-200",
                  "hover:bg-primary/10 hover:text-primary",
                  "focus:bg-primary/10 focus:text-primary focus:outline-none",
                  "data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col items-end text-sm space-y-1">
            <a
              href="tel:+923010510316"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-3 w-3" />
              <span className="font-medium">+92 301 0510316</span>
            </a>
            <a
              href="tel:+447955426807"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-3 w-3" />
              <span className="font-medium">+44 7955 426807</span>
            </a>
          </div>
          <ShimmerButton
            className="text-white! bg-primary! py-1!"
            background="#fb4141"
            onClick={() => {
              router.push("/contact");
            }}
          >
            <Link href="/contact">Get Started</Link>
          </ShimmerButton>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-accent/80 transition-colors"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 pl-4 pr-0 overflow-y-auto"
            >
              <div className="flex flex-col h-full ">
                {/* Mobile Header */}
                <div className="mb-8 pt-2">
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={() => {
                      const closeButton = document.querySelector(
                        '[data-state="open"] button[aria-label="Close"]'
                      ) as HTMLButtonElement;
                      closeButton?.click();
                    }}
                  >
                    <Image
                      src="/images/Logo.png"
                      alt="H&S Ecommerce Logo"
                      width={40}
                      height={40}
                    />
                    <span className="font-bold text-lg">
                      <span className="text-primary">H&S</span>
                      <span className="text-foreground/80 ml-1">Ecommerce</span>
                    </span>
                  </Link>
                </div>

                <nav className="flex-1 space-y-8 ">
                  {/* Main Navigation */}
                  <div>
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Navigation
                      </h3>
                    </div>
                    <Link
                      href="/"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent transition-colors w-full"
                      onClick={() => {
                        const closeButton = document.querySelector(
                          '[data-state="open"] button[aria-label="Close"]'
                        ) as HTMLButtonElement;
                        closeButton?.click();
                      }}
                    >
                      <span className="text-primary text-lg">🏠</span>
                      <span>Home</span>
                    </Link>
                  </div>

                  {/* Platforms Section */}
                  <div>
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <Link href="/platforms">Platforms</Link>
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {platforms.map((platform) => (
                        <Link
                          key={platform.title}
                          href={platform.href}
                          className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
                          onClick={() => {
                            const closeButton = document.querySelector(
                              '[data-state="open"] button[aria-label="Close"]'
                            ) as HTMLButtonElement;
                            closeButton?.click();
                          }}
                        >
                          {platform.icon}
                          <span>{platform.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Accounts Section */}
                  <div>
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Accounts
                      </h3>
                    </div>
                    <Link
                      href="/accounts"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
                      onClick={() => {
                        const closeButton = document.querySelector(
                          '[data-state="open"] button[aria-label="Close"]'
                        ) as HTMLButtonElement;
                        closeButton?.click();
                      }}
                    >
                      <span className="text-primary text-lg">🔑</span>
                      <span>All Accounts</span>
                    </Link>
                  </div>

                  {/* Services Section */}
                  <div>
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Services
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
                          onClick={() => {
                            const closeButton = document.querySelector(
                              '[data-state="open"] button[aria-label="Close"]'
                            ) as HTMLButtonElement;
                            closeButton?.click();
                          }}
                        >
                          {service.icon}
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div>
                    <div className="px-3 mb-3">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Support
                      </h3>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
                      onClick={() => {
                        const closeButton = document.querySelector(
                          '[data-state="open"] button[aria-label="Close"]'
                        ) as HTMLButtonElement;
                        closeButton?.click();
                      }}
                    >
                      <span className="text-primary text-lg">📞</span>
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="mt-auto py-6 border-t border-border">
                  <div className="px-3 mb-3">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Contact Numbers
                    </h3>
                  </div>
                  <div className="space-y-3 px-3">
                    <a
                      href="tel:+923010510316"
                      className="flex items-center space-x-3 py-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        +92 301 0510316
                      </span>
                    </a>
                    <a
                      href="tel:+447955426807"
                      className="flex items-center space-x-3 py-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        +44 7955 426807
                      </span>
                    </a>
                    <ShimmerButton
                      className="text-white! w-full bg-primary! py-1!"
                      background="#fb4141"
                      onClick={() => {
                        router.push("/contact");
                      }}
                    >
                      <Link href="/contact">Get Started</Link>
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Enhanced Platform Item Component
const PlatformItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ReactNode;
    description: string;
    features: string[];
  }
>(
  (
    { className, title, children, icon, description, features, ...props },
    ref
  ) => {
    return (
      <div>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-3 rounded-xl p-4 leading-none no-underline outline-none",
              "transition-all duration-200 hover:bg-accent/20  hover:shadow-sm group ",
              "focus:bg-accent focus:text-accent-foreground border border-border/50 hover:border-border/80",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-3 mb-2">
              {icon && <span className="flex-shrink-0">{icon}</span>}
              <span className="text-sm font-semibold leading-none">
                {title}
              </span>
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground  mb-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-1">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-block text-xs px-2 py-1 bg-primary/30 text-primary rounded-md font-medium border border-primary/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </a>
        </NavigationMenuLink>
      </div>
    );
  }
);

// Enhanced Service Item Component
const ServiceItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ReactNode;
    description: string;
    badge?: string;
    subServices: Array<{
      name: string;
      icon: React.ReactNode;
      description: string;
    }>;
  }
>(
  (
    { className, title, description, icon, badge, subServices, ...props },
    ref
  ) => {
    return (
      <div>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-xl p-4 leading-none no-underline outline-none",
              "transition-all  duration-200 hover:bg-accent/30 border border-border/50 hover:border-border",
              className
            )}
            {...props}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {icon && <span className="flex-shrink-0">{icon}</span>}
                <span className="text-sm font-semibold leading-none">
                  {title}
                </span>
              </div>
              {badge && (
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                  {badge}
                </span>
              )}
            </div>
            <p className="text-xs leading-snug text-muted-foreground mb-4">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {subServices.slice(0, 4).map((subService, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-xs p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <span className="flex-shrink-0">{subService.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-foreground/90 truncate">
                      {subService.name}
                    </div>
                    <div className="text-muted-foreground text-[10px] leading-tight">
                      {subService.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </a>
        </NavigationMenuLink>
      </div>
    );
  }
);

PlatformItem.displayName = "PlatformItem";
ServiceItem.displayName = "ServiceItem";
