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
  category: string;
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
  const renderIcon = () => {
    return service.icon || <span className="text-2xl">🔧</span>;
  };
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative h-full text-foreground border border-border rounded-lg  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}
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

        <div className="relative py-6 px-4 h-full flex flex-col">
          {/* Header Section */}
          <div className="mb-6 ">
            {/* Category Badge */}
            <div className="flex justify-end mb-4">
              <div
                className={`inline-flex items-center gap-2 bg-primary/30 border border-border   px-3 py-0.5 rounded-full text-xs font-semibold  `}
              >
                <Sparkles className="w-2 h-2" />
                {service.category}
              </div>
            </div>

            {/* Icon and Title */}
            <div className="flex  items-center  justify-center gap-4 mb-4">
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
                  className={`font-bold text-xl leading-tight  transition-colors duration-300 `}
                >
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 mb-2">
            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4 group-hover:text-muted-foreground/80 transition-colors">
              {service.description}
            </p>
          </div>

          {/* Footer Section */}
          <div className={`pt-2 border-t border-border/50  transition-colors`}>
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <span className="text-sm text-muted-foreground font-medium mb-1">
                  Starting at :
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold text-primary`}>
                    ${service.price}
                  </span>
                  <span className="text-muted-foreground font-bold text-sm">
                    USD
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div
                  className={`w-12 h-12 bg-gradient-to-r  rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
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
