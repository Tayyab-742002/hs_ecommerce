"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, CheckCircle, Users, Clock } from "lucide-react";

export function UKWarehouseFinalCTA() {
  const handleWhatsAppClick = () => {
    // UK Warehouse specific WhatsApp message
    const message = encodeURIComponent(
      "Hi! I'm interested in your UK Warehouse Services. I'd like to discuss storage, pick & pack, and marketing support for expanding my business to the UK market. Can you help me get started?"
    );
    const phoneNumber = "923010510316"; // Your WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const reassurancePoints = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "No upfront cost",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Personal guidance",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Step-by-step support",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Proven results",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main CTA Content */}
          <div className="bg-background/90 backdrop-blur-sm border border-border/30 rounded-3xl p-12 lg:p-16 shadow-2xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-8">
                <CheckCircle className="w-4 h-4" />
                Ready to Get Started?
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Take the Next Step to
                <span className="block text-primary">UK Success</span>
              </h2>
            </motion.div>

            {/* Reassurance Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 mb-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <strong className="text-primary font-bold">
                    Zero upfront investment
                  </strong>{" "}
                  – simply share your requirements and our expert team will
                  create a step-by-step roadmap to accelerate your UK market
                  success.
                </p>
              </div>

              {/* Reassurance Points */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {reassurancePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary hover:bg-primary/15 transition-colors duration-300"
                  >
                    {point.icon}
                    <span className="text-sm font-semibold">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Primary WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Chat with Us on WhatsApp
              </Button>

              {/* Secondary Button - Scroll to Form */}
              <Button
                onClick={() => {
                  const formSection =
                    document.getElementById("consultation-form");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg font-bold rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                Fill Consultation Form
              </Button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-10 border-t border-border/30"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Usually responds within 5 minutes</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7 for urgent queries</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary">
                  <Users className="w-4 h-4" />
                  <span>500+ satisfied customers</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm font-semibold text-primary">
              <span className="flex items-center gap-2">
                🇬🇧 UK Registered Business
              </span>
              <span className="text-primary/40">•</span>
              <span className="flex items-center gap-2">
                📦 Insured Warehouse
              </span>
              <span className="text-primary/40">•</span>
              <span className="flex items-center gap-2">
                ⚡ Same Day Processing
              </span>
              <span className="text-primary/40">•</span>
              <span className="flex items-center gap-2">🔒 GDPR Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
