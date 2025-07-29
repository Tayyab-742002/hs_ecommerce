import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: {
    main: string;
    subtitle: string;
  };
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
}

export function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12  relative">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
            <span className={`text-primary `}>{title.main}</span>
            <br />
            <span className="text-foreground relative">{title.subtitle}</span>
          </h1>

          {/* Enhanced Description */}
          <div className="text-md sm:text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-16 font-light">
            {description.text
              .split(/(\{highlight\d+\})/g)
              .map((part, index) => {
                const highlightMatch = part.match(/\{highlight(\d+)\}/);
                if (highlightMatch) {
                  const highlightIndex = parseInt(highlightMatch[1]) - 1;
                  const highlight = description.highlights[highlightIndex];
                  if (highlight) {
                    return (
                      <span
                        key={index}
                        className={`text-primary font-semibold`}
                      >
                        {highlight.text}
                      </span>
                    );
                  }
                }
                return part;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
