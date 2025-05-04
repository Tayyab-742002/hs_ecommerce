import { VAServiceCard } from "@/components/services/VAServiceCard";
import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/lib/services/all-services";
import { AllServiceDetail } from "@/types";
import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

export default async function VAServicesPage() {
  const allServices = await getAllServices({ useFallback: true });
  const typedAllServices = allServices as unknown as AllServiceDetail[];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Virtual Assistant Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional e-commerce services to help you manage and grow your
            online business across all major platforms.
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Our Services</h2>
            <div className="ml-4 h-px bg-border flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {typedAllServices.map((service) => (
              <div key={service._id || `service-${service.name}`}>
                {service.slug && typeof service.slug === 'object' ? (
                  <div>
                    <VAServiceCard
                      service={{
                        title: service.name,
                        description: service.shortDescription,
                        price: service.price,
                        icon: service.icon,
                        platformName: service.platform?.name || "All Platforms",
                      }}
                    />
                  </div>
                ) : (
                  <VAServiceCard
                    service={{
                      title: service.name,
                      description: service.shortDescription,
                      price: service.price,
                      icon: service.icon,
                      platformName: service.platform?.name || "All Platforms",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-card rounded-xl border border-border p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Why Choose Our VA Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Expert Professionals
              </h3>
              <p className="text-muted-foreground">
                Our team consists of experienced professionals with specialized
                knowledge in e-commerce operations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Time-Saving Solutions
              </h3>
              <p className="text-muted-foreground">
                Free up your valuable time by delegating operational tasks to
                our efficient virtual assistants.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                We stand behind our work with a satisfaction guarantee on all
                our virtual assistant services.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            How Our VA Services Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative">
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">
                  Request a Service
                </h3>
                <p className="text-muted-foreground">
                  Choose the service you need and submit your request through
                  our website or contact form.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">
                  Consultation
                </h3>
                <p className="text-muted-foreground">
                  We'll discuss your specific requirements and create a tailored
                  plan for your business needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">
                  Service Delivery
                </h3>
                <p className="text-muted-foreground">
                  Our team executes the service according to the agreed plan,
                  with regular updates and communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 bg-primary/5 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-muted-foreground mb-4">
                "Their product listing optimization service transformed my
                Amazon store. Sales increased by 40% within the first month!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Amazon Seller</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-muted-foreground mb-4">
                "The customer service team has been a game-changer for my
                business. They handle all customer inquiries professionally,
                allowing me to focus on product development."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">SM</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">
                    eBay Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-2">
                How quickly can I get started?
              </h3>
              <p className="text-muted-foreground">
                Most of our services can be initiated within 24-48 hours after
                your order is confirmed and requirements are gathered.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-2">
                Do you offer custom packages?
              </h3>
              <p className="text-muted-foreground">
                Yes, we can create custom service packages tailored to your
                specific business needs and budget.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-2">
                What platforms do you support?
              </h3>
              <p className="text-muted-foreground">
                We provide services for all major e-commerce platforms including
                Amazon, eBay, Walmart, TikTok Shop, and Etsy.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-2">
                How do you ensure quality?
              </h3>
              <p className="text-muted-foreground">
                We have strict quality control processes and all work is
                reviewed by experienced team leads before delivery.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Grow Your E-commerce Business?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Get started with our professional VA services today and take your
            online business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Request Service Now
              </Button>
            </Link>
            <Link href="/platforms">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8"
              >
                Explore Platforms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
