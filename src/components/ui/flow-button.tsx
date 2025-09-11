"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FlowButtonProps {
  text?: string;
  href?: string;
}

export function FlowButton({ text = "Modern Button", href }: FlowButtonProps) {
  const handleHashClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!href) return;
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inner = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-foreground fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out ">
        {text}
      </span>

      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight className="absolute w-4 h-4 right-4 stroke-accent fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
    </>
  );

  const baseClasses =
    "group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-border/40 bg-transparent px-8 py-3 text-sm font-semibold  cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]  text-primary hover:border-transparent hover:text-white hover:rounded-[12px] active:scale-[0.95]";

  // If no href provided, render as a button (for actions or hash scrolling)
  if (!href) {
    return (
      <button type="button" className={baseClasses}>
        {inner}
      </button>
    );
  }

  // If href is a hash, smooth-scroll on click
  if (href.startsWith("#")) {
    return (
      <button type="button" onClick={handleHashClick} className={baseClasses}>
        {inner}
      </button>
    );
  }

  // Otherwise, navigate using Next.js Link while preserving styling/structure
  return (
    <Link href={href} className={baseClasses}>
      {inner}
    </Link>
  );
}
