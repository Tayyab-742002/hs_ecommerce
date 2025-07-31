"use client";

import { motion } from "framer-motion";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Shield } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "After my Walmart account was suspended, I thought I'd lost everything. Their reinstatement service got me back online in just 9 days. Highly recommended!",
      author: "Sarah Johnson",
      title: "Online Store Owner",
      rating: 5,
      platformIcon: "/images/platforms/walmart-logo.png",
      platformName: "Walmart Seller",
      platformColor: "var(--color-walmart)",
      src: "/images/testimonials/sarahjohnson.JPG",
    },
    {
      quote:
        "The Amazon seller account I got was perfectly set up and ready to use. Their team helped me get started quickly, and the VA services are top-notch!",
      author: "James Wilson",
      title: "E-commerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/amazon-logo.png",
      platformName: "Amazon Seller",
      platformColor: "var(--color-amazon)",
      src: "/images/testimonials/jameswilson.JPG",
    },
    {
      quote:
        "I was struggling to get my TikTok account reinstated, but their team helped me through every step. Now I'm back in business and growing!",
      author: "Amna Ilyas",
      title: "Online Store Owner",
      rating: 5,
      platformIcon: "/images/platforms/tiktok-logo.png",
      platformName: "TikTok Seller",
      platformColor: "var(--color-tiktok)",
      src: "/images/testimonials/amnailyas.JPG",
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
      src: "/images/testimonials/michaelrodriguez.JPG",
    },
    {
      quote:
        "I was struggling to get my eBay account reinstated, but their team helped me through every step. Now I'm back in business and growing!",
      author: "Ali Raza",
      title: "E-commerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/ebay-logo.png",
      platformName: "eBay Seller",
      platformColor: "var(--color-ebay)",
      src: "/images/testimonials/aliraza.JPG",
    },
    {
      quote:
        "The eBay and Etsy accounts they provided were perfect for my handmade business. Their virtual assistant helped me set up listings that really sell.",
      author: "Alezander",
      title: "E-commerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/etsy-logo.png",
      platformName: "Etsy & eBay Seller",
      platformColor: "var(--color-etsy)",
      src: "/images/testimonials/alezander.JPG",
    },
    {
      quote:
        "I was struggling to get my eBay account reinstated, but their team helped me through every step. Now I'm back in business and growing!",
      author: "Jasmin",
      title: "Ebay Seller",
      rating: 5,
      platformIcon: "/images/platforms/ebay-logo.png",
      platformName: "eBay Seller",
      platformColor: "var(--color-ebay)",
      src: "/images/testimonials/jasmin.JPG",
    },
    {
      quote:
        "The 3PL services they provided were perfect for my business. I was able to scale my operations and grow my business without the hassle of managing inventory and logistics.",
      author: "Chika",
      title: "Ecommerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/3pl-logo.png",
      platformName: "3PL Services",
      platformColor: "var(--color-amazon)",
      src: "/images/testimonials/chika.JPG",
    },
    {
      // I want a pakistani boy to be in this testimonial getting our 3pl services
      quote:
        "I used their 3PL services and it was a game-changer for my business. I was able to scale my operations and grow my business without the hassle of managing inventory and logistics.",
      author: "Tahir Imtiaz",
      title: "Ecommerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/3pl-logo.png",
      platformName: "3PL Services",
      platformColor: "var(--color-amazon)",
      src: "/images/testimonials/tahirimtiaz.JPG",
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
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              <Shield className="w-3 h-3" />
              Customer Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Hear from satisfied sellers who have grown their businesses with
              our accounts, VA services, and reinstatement solutions.
            </p>
          </motion.div>

          {/* Testimonial cards */}
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
