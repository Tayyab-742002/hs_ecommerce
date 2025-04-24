"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "@/providers/theme-provider";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FormField } from "@/types/form";

interface RequirementsFormProps {
  platformName: string;
  fields: FormField[];
}

export function RequirementsForm({
  platformName,
  fields,
}: RequirementsFormProps) {
  const { getPlatformColor, getPlatformGradient } = useColorScheme();
  const platformColor = getPlatformColor(platformName);

  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Here you would integrate with your backend API or email service
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setFormData({});
    } catch (err) {
      setError(
        "An error occurred while submitting your requirements. Please try again."
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
          <h3 className="text-xl font-semibold mb-2">
            Requirements Submitted!
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            We've received your {platformName} account requirements. Our team
            will review and get back to you shortly.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            size="sm"
            style={{ borderColor: platformColor, color: platformColor }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <PlatformBadge
            platformName={platformName}
            size="md"
            variant="filled"
          />
          <h3 className="text-xl font-semibold">Account Requirements</h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Tell us your specific requirements for your {platformName} account,
          and we'll customize it to your needs.
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
          {/* Standard contact fields */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-1.5"
            >
              Your Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName || ""}
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
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
              Phone Number (WhatsApp preferred) *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ "--ring": platformColor } as React.CSSProperties}
            />
          </div>

          {/* Dynamic fields based on platform requirements */}
          {fields.map((field, index) => {
            const fieldId = field.label.toLowerCase().replace(/\s+/g, "-");

            switch (field.fieldType) {
              case "text":
                return (
                  <div key={index}>
                    <label
                      htmlFor={fieldId}
                      className="block text-sm font-medium mb-1.5"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      id={fieldId}
                      name={fieldId}
                      type="text"
                      required={field.required}
                      value={formData[fieldId] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
                      style={{ "--ring": platformColor } as React.CSSProperties}
                    />
                  </div>
                );

              case "select":
                return (
                  <div key={index}>
                    <label
                      htmlFor={fieldId}
                      className="block text-sm font-medium mb-1.5"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <select
                      id={fieldId}
                      name={fieldId}
                      required={field.required}
                      value={formData[fieldId] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
                      style={{ "--ring": platformColor } as React.CSSProperties}
                    >
                      <option value="">-- Select an option --</option>
                      {field.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );

              case "checkbox":
                return (
                  <div key={index} className="flex items-start pt-2">
                    <div className="flex items-center h-5">
                      <input
                        id={fieldId}
                        name={fieldId}
                        type="checkbox"
                        checked={formData[fieldId] || false}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-border focus:ring-offset-1"
                        style={
                          {
                            accentColor: platformColor,
                            "--ring": platformColor,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={fieldId} className="font-medium">
                        {field.label}
                      </label>
                    </div>
                  </div>
                );

              case "textarea":
                return (
                  <div key={index}>
                    <label
                      htmlFor={fieldId}
                      className="block text-sm font-medium mb-1.5"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <textarea
                      id={fieldId}
                      name={fieldId}
                      rows={3}
                      required={field.required}
                      value={formData[fieldId] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1"
                      style={{ "--ring": platformColor } as React.CSSProperties}
                    />
                  </div>
                );

              default:
                return null;
            }
          })}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 text-white mt-6"
            style={{ background: getPlatformGradient(platformName) }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </span>
            ) : (
              "Submit Requirements"
            )}
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
            We'll contact you shortly to discuss your requirements and provide a
            quote.
          </p>
        </form>
      </div>
    </div>
  );
}
