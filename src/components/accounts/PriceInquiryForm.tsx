"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "@/providers/theme-provider";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface PriceInquiryFormProps {
  platformName: string;
  accountType?: string;
}

export function PriceInquiryForm({
  platformName,
  accountType,
}: PriceInquiryFormProps) {
  const { getPlatformColor, getPlatformGradient } = useColorScheme();
  const platformColor = getPlatformColor(platformName);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-pricing-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          platformName,
          accountType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(
        "An error occurred while submitting your inquiry. Please try again."
      );
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center mb-4">
          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: `var(--color-success)20` }}
          >
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Your inquiry has been received. We'll get back to you shortly with
            pricing information.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            size="sm"
            style={{ borderColor: platformColor, color: platformColor }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
          <PlatformBadge
            platformName={""}
            size="md"
            variant="subtle"
          />
          <h3 className="text-xl font-semibold">Pricing Request</h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Request pricing for {platformName}{" "}
          {accountType ? `${accountType} accounts` : "accounts"} and our expert
          team will get back to you within 24 hours.
        </p>

        {error && (
          <div
            className="p-3 rounded-md mb-6 flex items-center gap-2"
            style={{
              backgroundColor: `var(--color-destructive)10`,
              color: "var(--color-destructive)",
            }}
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
              Phone Number (WhatsApp preferred)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1.5"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 text-white bg-primary"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </span>
            ) : (
              "Request Pricing"
            )}
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
            We respect your privacy and will handle your information according
            to our privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
}
