"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faq1 from "../mvpblocks/faq-1";
import { LucideIcon, Shield } from "lucide-react";

interface FAQItem {
  id: number;
  title: string;
  content: string;
}

interface ServiceFAQProps {
  title: string;
  description: {
    text: string;
    highlights: Array<{
      text: string;
      color: "primary" | "secondary" | "accent";
    }>;
  };
  faqs: FAQItem[];
}

export function ServiceFAQ({ title, description, faqs }: ServiceFAQProps) {
  return (
    <div className="py-8">
      <Faq1 title={title} description={description.text} items={faqs} />
    </div>
  );
}
