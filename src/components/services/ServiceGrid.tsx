import { LucideIcon, Shield } from "lucide-react";
import { Service, ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  title: string;
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
  services: Service[];

  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

export function ServiceGrid({
  title,
  description,
  services,
  badge,
}: ServiceGridProps) {
  const renderDescription = () => {
    return description.text.split(/(\{highlight\d+\})/g).map((part, index) => {
      const highlightMatch = part.match(/\{highlight(\d+)\}/);
      if (highlightMatch) {
        const highlightIndex = parseInt(highlightMatch[1]) - 1;
        const highlight = description.highlights[highlightIndex];
        if (highlight) {
          return (
            <span key={index} className={`text-primary font-semibold`}>
              {highlight.text}
            </span>
          );
        }
      }
      return part;
    });
  };
  // console.log("Services Grid", services);
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          <Shield className="w-3 h-3" />
          {badge?.text}
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {renderDescription()}
        </p>
      </div>

      {/* Enhanced Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
