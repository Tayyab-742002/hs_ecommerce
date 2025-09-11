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
import { FileText, Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  sellingStatus: string;
  monthlyOrderVolume: string;
  interestedServices: string[];
  startTimeline: string;
}

export function UKWarehouseConsultationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    whatsappNumber: "",
    sellingStatus: "",
    monthlyOrderVolume: "",
    interestedServices: [],
    startTimeline: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

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
    const newErrors: Partial<FormData> = {};

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
        setIsSubmitted(true);
        toast({
          title: "Form submitted successfully!",
          description:
            "We&apos;ll get back to you within 24 hours with a customized plan.",
        });
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

  if (isSubmitted) {
    return (
      <section
        id="consultation-form"
        className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              We&apos;ve received your consultation request. Our UK warehouse
              specialists will review your requirements and get back to you
              within 24 hours with a customized plan.
            </p>

            <div className="bg-background border border-border/50 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                What happens next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Our team reviews your specific requirements and order volume
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div className="text-sm text-muted-foreground">
                    We prepare a customized quote and service plan for your
                    business
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div className="text-sm text-muted-foreground">
                    You&apos;ll receive a detailed proposal within 24 hours via email
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="consultation-form"
      className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <FileText className="w-4 h-4" />
            Free Consultation
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get Your
            <span className="block text-primary">Free Consultation</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us about your business needs and we'll create a customized UK 
            expansion plan tailored specifically for your success.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-background/80 backdrop-blur-sm border border-border/30 rounded-3xl p-10 lg:p-16 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Basic Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">Full Name *</Label>
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
                        className={`h-12 rounded-xl ${errors.fullName ? "border-red-500" : "border-border/50 focus:border-primary"}`}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="text-sm font-semibold text-foreground">Company Name *</Label>
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
                        className={`h-12 rounded-xl ${errors.companyName ? "border-red-500" : "border-border/50 focus:border-primary"}`}
                      />
                      {errors.companyName && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
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
                        className={`h-12 rounded-xl ${errors.email ? "border-red-500" : "border-border/50 focus:border-primary"}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="whatsappNumber" className="text-sm font-semibold text-foreground">WhatsApp Number *</Label>
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
                        className={`h-12 rounded-xl ${errors.whatsappNumber ? "border-red-500" : "border-border/50 focus:border-primary"}`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.whatsappNumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

              {/* Business Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sellingStatus">
                    Are you already selling in the UK or planning to sell in the
                    UK? *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, sellingStatus: value }))
                    }
                  >
                    <SelectTrigger
                      className={errors.sellingStatus ? "border-red-500" : ""}
                    >
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
                    <p className="text-sm text-red-500">
                      {errors.sellingStatus}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyOrderVolume">
                    What is your monthly order volume? *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        monthlyOrderVolume: value,
                      }))
                    }
                  >
                    <SelectTrigger
                      className={
                        errors.monthlyOrderVolume ? "border-red-500" : ""
                      }
                    >
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
                    <p className="text-sm text-red-500">
                      {errors.monthlyOrderVolume}
                    </p>
                  )}
                </div>
              </div>

              {/* Services Interest */}
              <div className="space-y-4">
                <Label>
                  Which services are you interested in? * (Select all that
                  apply)
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        checked={formData.interestedServices.includes(service)}
                        onCheckedChange={(checked) =>
                          handleServiceChange(service, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={service}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.interestedServices && (
                  <p className="text-sm text-red-500">
                    {errors.interestedServices[0]}
                  </p>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label htmlFor="startTimeline">
                  When do you want to start your plan? *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, startTimeline: value }))
                  }
                >
                  <SelectTrigger
                    className={errors.startTimeline ? "border-red-500" : ""}
                  >
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
                  <p className="text-sm text-red-500">{errors.startTimeline}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white px-16 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      Submitting Your Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3" />
                      Request Free Consultation
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We&apos;ll respond within 24 hours with a customized plan
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}