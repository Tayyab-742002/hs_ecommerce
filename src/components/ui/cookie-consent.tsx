"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent") === "accepted";

    // If not already accepted, show the banner after a short delay
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-primary text-white rounded-lg shadow-lg border border-gray-200  p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className=" rounded-full p-2 text-white hidden sm:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
                  <p className="text-white/50 text-sm">
                    We use cookies to enhance your browsing experience, serve
                    personalized ads, and analyze our traffic. By clicking
                    "Accept All", you consent to our use of cookies. Read our{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-300 hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    to learn more.
                  </p>
                </div>

                <button
                  onClick={declineCookies}
                  className="text-foreground/70 hover:text-foreground md:hidden"
                  aria-label="Close cookie banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant="default"
                  onClick={declineCookies}
                  className="flex-1 md:flex-initial"
                >
                  Decline
                </Button>
                <Button
                  variant="outline"
                  onClick={acceptCookies}
                  className="flex-1 md:flex-initial"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
