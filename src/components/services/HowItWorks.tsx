import { LucideIcon, Shield } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  gradient: string;
}

interface HowItWorksProps {
  title: string;
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
  steps: ProcessStep[];

  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

export function HowItWorks({
  title,
  description,
  steps,
  badge,
}: HowItWorksProps) {
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
    <div className="py-12">
      <div className="text-center mb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div
              className={`relative  rounded-3xl border border-border/50 p-8 lg:p-10 h-full hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div
                className={`absolute -top-8 left-8 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl `}
              >
                {step.step}
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
