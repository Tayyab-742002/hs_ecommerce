import React from "react";
import Image from "next/image";

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
    <div className="group h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            {service.icon && service.icon.asset && (
              <div className="mr-3 bg-primary/10 p-2 rounded-md">
                <Image
                  src={service.icon.asset.url}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
            )}
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {service.title}
            </h3>
          </div>
          <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
            {service.platformName}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="text-sm">
            <span className="text-muted-foreground">Starting at</span>
            <span className="font-medium ml-1">{service.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
