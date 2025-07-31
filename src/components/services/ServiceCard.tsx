import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  deliveryTime?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  category?: string;
  features?: string[];
  icon?: {
    asset: {
      url: string;
    };
  };
}

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  // write a function to check the price, if there is any currency symbol in a string return true and otherwise return false
  const hasCurrencySymbol = (price: string) => {
    return price.includes("$") || price.includes("£") || price.includes("€");
  };
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={` h-full text-foreground border border-border rounded-lg  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}
      >
        {/* Optional Image Banner */}
        {service.image?.asset?.url && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image.asset.url}
              alt={service.title}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        )}

        <div className="p-6 flex flex-col h-full">
          {/* Category Badge - positioned absolutely over image or in corner */}
          <div className="flex justify-end mb-4">
            <div
              className={`inline-flex ${service.image?.asset?.url ? "absolute top-2 right-2 z-10" : ""} items-center gap-2 bg-primary/30 border border-border px-3 py-0.5 rounded-full text-xs font-semibold ${service.image?.asset?.url ? "text-white bg-black/50 backdrop-blur-sm" : ""}`}
            >
              <Sparkles className="w-2 h-2" />
              {service.category}
            </div>
          </div>

          {/* Icon and Title */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {service.icon?.asset?.url && (
              <Image
                src={service?.icon?.asset?.url as string}
                alt={service?.title || ""}
                width={56}
                height={56}
                className="h-7 w-7 object-contain"
              />
            )}

            <div className="flex-1">
              <h3
                className={`font-bold text-xl leading-tight transition-colors duration-300`}
              >
                {service.title}
              </h3>
            </div>
          </div>
          {/* Footer Section - always at bottom */}
          <div className=" pt-4 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex flex-row justify-center items-center gap-2">
                <span className="text-sm text-muted-foreground font-semibold mb-1">
                  Starting at:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-primary">
                    {hasCurrencySymbol(service.price)
                      ? service.price
                      : `$${service.price}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Description - takes up available space */}
          <div className="flex-1 mb-6">
            <p className="text-muted-foreground leading-relaxed text-sm  group-hover:text-muted-foreground/80 transition-colors">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
