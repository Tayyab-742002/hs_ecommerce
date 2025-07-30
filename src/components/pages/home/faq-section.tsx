"use client";

import Link from "next/link";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { getPlatformColor } from "@/lib/utils/platform-colors";
interface FAQ {
  id: number;
  title: string;
  content: React.ReactNode;
}

export function FAQSection() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.4,
      },
    }),
  };

  const faqs: FAQ[] = [
    {
      id: 1,
      title: "What types of accounts do you provide?",

      content: (
        <>
          We provide seller and buyer accounts for all major e-commerce
          platforms including Amazon, eBay, Walmart, TikTok, and Etsy. All
          accounts are available for multiple countries and regions worldwide.
        </>
      ),
    },
    {
      id: 2,
      title: "How quickly can I get my account?",

      content: (
        <>
          Most accounts are delivered within 24-48 hours after payment
          confirmation. Some specialized accounts may take 3-5 business days.
          We'll provide you with a specific timeframe when you place your order.
        </>
      ),
    },
    {
      id: 3,
      title: "Are the accounts verified and ready to use?",

      content: (
        <>
          Yes, all accounts come fully verified and ready to use immediately. We
          handle all the verification processes including email, phone, and ID
          verification where required.
        </>
      ),
    },
    {
      id: 4,
      title: "What virtual assistant services do you offer?",

      content: (
        <>
          We offer a comprehensive range of VA services including listing
          creation and optimization, account management, customer service,
          inventory management, PPC campaign management, and more. Visit our{" "}
          <Link
            href="/services/va-services"
            className="hover:underline"
            style={{ color: getPlatformColor("TikTok") }}
          >
            VA Services page
          </Link>{" "}
          for more details.
        </>
      ),
    },
    {
      id: 5,
      title: "How does the account reinstatement service work?",

      content: (
        <>
          Our account reinstatement service helps sellers get their suspended or
          blocked accounts back online. We analyze the reason for suspension,
          create a professional Plan of Action (POA), and communicate with the
          marketplace on your behalf until your account is reinstated. Our
          success rate is approximately 75-85% depending on the platform and
          reason for suspension.
        </>
      ),
    },
    {
      id: 6,
      title: "Do you offer support after purchase?",

      content: (
        <>
          Yes, we provide 24/7 support via WhatsApp and email. Our team of
          experts is always available to help you with any questions or issues
          you may have with your accounts or services.
        </>
      ),
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked{" "}
            <span className="from-primary bg-gradient-to-r to-rose-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about MVPBlocks and how to use our
            components to build your next project quickly.
          </motion.p>
        </div>
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient */}
          <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <Accordion
            type="single"
            collapsible
            className="border-border/40 bg-card/30 w-full rounded-xl border p-2 backdrop-blur-sm"
            defaultValue="1"
          >
            {faqs.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id.toString()}
                  className={cn(
                    "bg-card/50 my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all",
                    "data-[state=open]:bg-card/80 data-[state=open]:shadow-md"
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                        "hover:text-primary transition-all duration-300 outline-none",
                        "focus-visible:ring-primary/50 focus-visible:ring-2",
                        "data-[state=open]:text-primary"
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          "text-primary/70 shrink-0 transition-transform duration-300 ease-out",
                          "group-data-[state=open]:rotate-45"
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "text-muted-foreground overflow-hidden pt-0 pb-4",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div className="border-border/30 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
