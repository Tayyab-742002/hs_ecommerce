import { cn } from "@/lib/utils";
import { getPlatformColor } from "@/lib/utils/platform-colors";

export function FeaturesSectionWithHoverEffects({
  features,
}: {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
    platform: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature: any, index: number) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  platform,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  platform: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-primary/40  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-primary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-primary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        <div
          className="p-4 rounded-full mb-6"
          style={{
            color: getPlatformColor(platform),
          }}
        >
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full  group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary ">
          {title}
        </span>
      </div>
      <p className="text-sm  text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
