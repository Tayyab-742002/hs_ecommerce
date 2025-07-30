import { LucideIcon, Shield, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  gradient: string;
}

interface ServiceTestimonialsProps {
  title: string;
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
  testimonials: Testimonial[];

  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

export function ServiceTestimonials({
  title,
  description,
  testimonials,
  badge,
}: ServiceTestimonialsProps) {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group relative">
            <div
              className={`relative group py-2 px-4 lg:py-4 lg:px-6  rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className="flex text-primary mb-8 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <blockquote className="text-md italic text-muted-foreground mb-8 leading-relaxed text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div
                  className={`w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                >
                  <span className={`font-bold text-white text-lg`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-foreground text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
