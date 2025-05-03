"use client";

import { motion } from "framer-motion";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const testimonials = [
    {
      quote:
        "The Amazon seller account I got was perfectly set up and ready to use. Their team helped me get started quickly, and the VA services are top-notch!",
      author: "James Wilson",
      title: "E-commerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/amazon-logo.png",
      platformName: "Amazon Seller",
      platformColor: "var(--color-amazon)",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "After my Walmart account was suspended, I thought I'd lost everything. Their reinstatement service got me back online in just 9 days. Highly recommended!",
      author: "Sarah Johnson",
      title: "Online Store Owner",
      rating: 5,
      platformIcon: "/images/platforms/walmart-logo.png",
      platformName: "Walmart Seller",
      platformColor: "var(--color-walmart)",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The eBay and Etsy accounts they provided were perfect for my handmade business. Their virtual assistant helped me set up listings that really sell.",
      author: "Michael Rodriguez",
      title: "Handmade Goods Seller",
      rating: 5,
      platformIcon: "/images/platforms/etsy-logo.png",
      platformName: "Etsy Seller",
      platformColor: "var(--color-etsy)",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The eBay and Etsy accounts they provided were perfect for my handmade business. Their virtual assistant helped me set up listings that really sell.",
      author: "Michael Rodriguez",
      title: "Handmade Goods Seller",
      rating: 5,
      platformIcon: "/images/platforms/etsy-logo.png",
      platformName: "eBay Seller",
      platformColor: "var(--color-ebay)",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The eBay and Etsy accounts they provided were perfect for my handmade business. Their virtual assistant helped me set up listings that really sell.",
      author: "Michael Rodriguez",
      title: "Handmade Goods Seller",
      rating: 5,
      platformIcon: "/images/platforms/etsy-logo.png",
      platformName: "Etsy & eBay Seller",
      platformColor: "var(--color-etsy)",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // const testimonials = [
  //   {
  //     quote:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     name: "Sarah Chen",
  //     designation: "Product Manager at TechFlow",
  //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
  //     name: "Michael Rodriguez",
  //     designation: "CTO at InnovateSphere",
  //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
  //     name: "Emily Watson",
  //     designation: "Operations Director at CloudScale",
  //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
  //     name: "James Kim",
  //     designation: "Engineering Lead at DataPro",
  //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  //     name: "Lisa Thompson",
  //     designation: "VP of Technology at FutureNet",
  //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  return (
    <>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Customer Success Stories
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              What Our Clients Say
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-foreground/70 text-lg max-w-3xl mx-auto"
            >
              Hear from satisfied sellers who have grown their businesses with
              our accounts, VA services, and reinstatement solutions.
            </motion.p>
          </motion.div>

          {/* Background decorations */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            <div className="absolute top-1/2 -left-24 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          </div>

          {/* Testimonial cards */}
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
