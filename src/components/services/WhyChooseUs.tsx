import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface WhyChooseUsProps {
  title: string;
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
  features: Feature[];

  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

export function WhyChooseUs({
  title,
  description,
  features,

  badge,
}: WhyChooseUsProps) {
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

  return (
    <div className="mb-24">
      <div className="text-center mb-20">
        {badge && (
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 to-primary/15 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 shadow-lg`}
          >
            <badge.icon className="w-4 h-4" />
            {badge.text}
          </div>
        )}
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent`}
        >
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {renderDescription()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
            ></div>
            <div
              className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 text-center hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div
                  className={`w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/30 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon
                  className={`h-12 w-12 text-primary`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
