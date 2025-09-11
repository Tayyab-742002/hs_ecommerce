import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-border/50 bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent focus:border-primary focus:ring-0 focus:ring-offset-0 file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-primary  disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
