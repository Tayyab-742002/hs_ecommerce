"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Send,
  Loader2,
  Clock,
  User,
  Building,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  sellingStatus: string;
  monthlyOrderVolume: string;
  interestedServices: string[];
  startTimeline: string;
  serviceInquiryConfirmation: string;
}

export function UKWarehouseConsultationForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    whatsappNumber: "",
    sellingStatus: "",
    monthlyOrderVolume: "",
    interestedServices: [],
    startTimeline: "",
    serviceInquiryConfirmation: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string | string[]>>
  >({});

  const serviceOptions = [
    "Storage",
    "Pick & Pack",
    "Return Handling",
    "Labels",
    "Shopify",
    "Meta Ads",
    "TikTok Ads",
    "Social Media Handling & Management",
    "Content Creation",
    "Branding",
    "All of the Above",
  ];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string | string[]>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.whatsappNumber.trim())
      newErrors.whatsappNumber = "WhatsApp number is required";
    if (!formData.sellingStatus)
      newErrors.sellingStatus = "Please select your selling status";
    if (!formData.monthlyOrderVolume)
      newErrors.monthlyOrderVolume = "Please select your order volume";
    if (formData.interestedServices.length === 0)
      newErrors.interestedServices = ["Please select at least one service"];
    if (!formData.startTimeline)
      newErrors.startTimeline = "Please select when you want to start";
    if (!formData.serviceInquiryConfirmation)
      newErrors.serviceInquiryConfirmation =
        "Please confirm this is a service inquiry, not a job application";
    if (formData.serviceInquiryConfirmation === "no")
      newErrors.serviceInquiryConfirmation =
        "This form is only for 3PL service inquiries, not job applications";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (service === "All of the Above") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          interestedServices: serviceOptions,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          interestedServices: [],
        }));
      }
    } else {
      setFormData((prev) => {
        let newServices = [...prev.interestedServices];

        if (checked) {
          if (!newServices.includes(service)) {
            newServices.push(service);
          }
        } else {
          newServices = newServices.filter(
            (s) => s !== service && s !== "All of the Above"
          );
        }

        return {
          ...prev,
          interestedServices: newServices,
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fill in all required fields",
        description: "Check the form for any missing or invalid information.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-warehouse-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/services/uk-warehouse/thank-you");
        return;
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      toast({
        title: "Something went wrong ",
        description: `Please try again or contact us directly via WhatsApp. ${err}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-6">
            <FileText className="w-4 h-4" />
            Free Consultation
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Free UK Expansion
            <span className="block text-primary">Consultation</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your business details and receive a customized UK market entry
            strategy within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl border border-border p-8 lg:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="companyName"
                      className="text-sm font-medium text-foreground"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          companyName: e.target.value,
                        }))
                      }
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-600">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Contact Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="whatsappNumber"
                      className="text-sm font-medium text-foreground"
                    >
                      WhatsApp Number *
                    </Label>
                    <Input
                      id="whatsappNumber"
                      type="text"
                      placeholder="+92 300 1234567"
                      value={formData.whatsappNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          whatsappNumber: e.target.value,
                        }))
                      }
                    />
                    {errors.whatsappNumber && (
                      <p className="text-sm text-red-600">
                        {errors.whatsappNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      Current UK Market Status *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          sellingStatus: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="already-selling">
                          Already selling in the UK
                        </SelectItem>
                        <SelectItem value="planning-to-sell">
                          Planning to sell in the UK
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.sellingStatus && (
                      <p className="text-sm text-red-600">
                        {errors.sellingStatus}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      Monthly Order Volume *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          monthlyOrderVolume: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select order volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-100">
                          Less than 100 orders/month
                        </SelectItem>
                        <SelectItem value="100-500">
                          100–500 orders/month
                        </SelectItem>
                        <SelectItem value="500-1000">
                          500–1,000 orders/month
                        </SelectItem>
                        <SelectItem value="1000-plus">
                          1,000+ orders/month
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.monthlyOrderVolume && (
                      <p className="text-sm text-red-600">
                        {errors.monthlyOrderVolume}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <Label className="text-sm font-medium text-foreground">
                  Services of Interest * (Select all that apply)
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceOptions.map((service) => (
                    <div
                      key={service}
                      className="flex items-center space-x-3 p-3 cursor-pointer rounded-lg border border-border/30  hover:bg-primary/20"
                    >
                      <Checkbox
                        id={service}
                        checked={formData.interestedServices.includes(service)}
                        onCheckedChange={(checked) =>
                          handleServiceChange(service, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={service}
                        className="text-sm cursor-pointer flex-1"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.interestedServices && (
                  <p className="text-sm text-red-600">
                    {errors.interestedServices[0]}
                  </p>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  When would you like to start? *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, startTimeline: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="within-1-month">
                      Within 1 month
                    </SelectItem>
                    <SelectItem value="within-3-months">
                      Within 3 months
                    </SelectItem>
                    <SelectItem value="just-researching">
                      Just researching for now
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.startTimeline && (
                  <p className="text-sm text-red-600">{errors.startTimeline}</p>
                )}
              </div>

              {/* Service Inquiry Confirmation */}
              <div
                className="space-y-4 p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: "#ffcc00" }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      <strong
                        className="text-base"
                        style={{ color: "#1f2937" }}
                      >
                        ⚠️ This is a 3PL service inquiry form in the UK, not a
                        job application. Do you understand this?
                      </strong>
                    </Label>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#374151" }}
                    >
                      Please confirm that you are inquiring about warehouse and
                      fulfillment services for your e-commerce business, not
                      applying for employment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceInquiryConfirmation: value,
                        }))
                      }
                      value={formData.serviceInquiryConfirmation}
                    >
                      <SelectTrigger
                        className={`h-11 bg-white ${
                          formData.serviceInquiryConfirmation === "no"
                            ? "border-red-500 focus:border-red-500 bg-red-50"
                            : formData.serviceInquiryConfirmation === "yes"
                              ? "border-green-500 focus:border-green-500 bg-green-50"
                              : "border-gray-300 focus:border-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="Please select Yes or No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value="yes"
                          className="text-green-700 font-medium"
                        >
                          Yes
                        </SelectItem>
                        <SelectItem
                          value="no"
                          className="text-red-700 font-medium"
                        >
                          No
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceInquiryConfirmation && (
                      <p className="text-sm text-red-600 font-medium bg-red-50 p-2 rounded border border-red-200">
                        {errors.serviceInquiryConfirmation}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center pt-6 border-t border-border/30">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-12 cursor-pointer py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 " />
                      Get Free Consultation
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Response within 24 hours
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
