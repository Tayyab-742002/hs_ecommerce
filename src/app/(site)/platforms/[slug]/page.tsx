export const revalidate = 60;

import { Metadata } from "next";
import { getPlatformBySlug } from "@/lib/services/platforms";
import { getAccountsByPlatform } from "@/lib/services/accounts";
import { getReinstatementServicesByPlatform } from "@/lib/services/reinstatement";
import { AccountCard } from "@/components/accounts/AccountCard";
import { PriceInquiryForm } from "@/components/accounts/PriceInquiryForm";
import { RequirementsForm } from "@/components/accounts/RequirementsForm";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ReinstatementCard } from "@/components/services/ReinstatementCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Shield, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Platform, Account, ReinstatementService } from "@/types";
import { FormField } from "@/types/form";
import { CTASection } from "@/components/pages/home/cta-section";

// Function to convert portable text to plain text for descriptions
const getPlainTextDescription = (portableText?: any[]) => {
  if (!portableText || !Array.isArray(portableText)) {
    return "";
  }

  return portableText
    .filter((block) => block._type === "block")
    .map((block) =>
      block.children
        .filter((child: any) => child._type === "span")
        .map((span: any) => span.text)
        .join("")
    )
    .join(" ");
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const platformData = await getPlatformBySlug(slug);

  // Extract plain text description from rich text if available
  const description =
    getPlainTextDescription(platformData.description) ||
    `Professional seller and buyer accounts plus services for ${platformData.name}`;

  // Use SEO fields from Sanity if available
  const title =
    platformData.seo?.metaTitle ||
    `${platformData.name} Services | HS Ecommerce | H&S Ecommerce Agency`;

  const metaDescription =
    platformData.seo?.metaDescription ||
    `HS Ecommerce (H&S) provides professional ${platformData.name} seller accounts and services: ${description}`;

  // Get keywords from SEO or fallback to defaults
  const keywords =
    platformData.seo?.keywords?.join(", ") ||
    `hs ecommerce, h&s ecommerce, ${platformData.name}, ${platformData.name.toLowerCase()} accounts, ${platformData.name.toLowerCase()} seller, ecommerce services`;

  // Handle OG image
  const ogImage =
    platformData.seo?.ogImage?.asset?.url ||
    platformData.logo?.asset?.url ||
    undefined;

  return {
    title,
    description: metaDescription,
    keywords,
    openGraph: {
      title,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PlatformPage({ params, searchParams }: Props) {
  const { slug } = params;

  const platformData = await getPlatformBySlug(slug);

  // Ensure platformData has an _id before proceeding
  if (!platformData._id) {
    throw new Error(`Platform with slug ${slug} has no _id`);
  }

  try {
    const accountsData = await getAccountsByPlatform(platformData._id);
    const reinstatementServicesData = await getReinstatementServicesByPlatform(
      platformData._id
    );

    // Type assertions to match our defined types
    const platform = platformData as unknown as Platform;
    const accounts = accountsData as unknown as Account[];
    const reinstatementServices =
      reinstatementServicesData as unknown as ReinstatementService[];
    // Ensure vaServices exists and is an array
    if (!platform.vaServices) {
      platform.vaServices = [];
    }

    // Get platform description as plain text
    const description =
      getPlainTextDescription(platform.description) ||
      `Professional seller and buyer accounts plus services for ${platform.name}`;

    return (
      <div className="flex flex-col">
        {/* Enhanced Page header with platform-specific gradient */}
        <div
          className="relative w-full"
          style={{
            backgroundColor: `var(--color-${platform.name.toLowerCase()})20`,
          }}
        >
          <PageHeader
            title={platform.name}
            description={description}
            size="lg"
            className="relative z-10"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
              {platform.logo && (
                <div
                  className="w-20 h-20 rounded-full p-4 flex items-center justify-center shadow-md"
                  style={{
                    background: `linear-gradient(135deg, var(--color-${platform.name.toLowerCase()}), var(--color-${platform.name.toLowerCase()})70)`,
                  }}
                >
                  <Image
                    src={platform.logo.asset.url}
                    alt={platform.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              )}

              {platform.accountCategories &&
                platform.accountCategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {platform.accountCategories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background border"
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          </PageHeader>
        </div>

        {/* Main content with tabs */}
        <div className="container mx-auto px-4 ">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid bg-primary border-primary/70 text-white w-full max-w-3xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="overview" className="text-white!">
                Overview
              </TabsTrigger>
              <TabsTrigger value="accounts" className="text-white!">
                Accounts
              </TabsTrigger>
              <TabsTrigger value="services" className="text-white!">
                Services
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              {/* Platform Features */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-6">
                  Key Features
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {(platform.features || []).map((feature, index) => (
                    <div key={index} className="py-3 px-4 bg-card rounded-xl  ">
                      <div className="flex gap-4">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                          {<CheckCircle className="w-6 h-6 text-primary" />}
                        </div>

                        <div>
                          <h3 className="text-md font-semibold mb-2">
                            {feature.title}
                          </h3>
                          {feature.description && (
                            <p className="text-muted-foreground text-sm">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  Why Choose Our {platform.name} Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center py-2 px-4 rounded-xl bg-card border border-border">
                    <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-md font-semibold mb-2">
                      Secure & Verified
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      All accounts are properly verified and ready to use
                      immediately
                    </p>
                  </div>

                  <div className="text-center py-2 px-4 rounded-xl bg-card border border-border">
                    <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-md font-semibold mb-2">
                      Dedicated Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      24/7 customer support for all your {platform.name} account
                      needs
                    </p>
                  </div>

                  <div className="text-center py-2 px-4 rounded-xl bg-card border border-border">
                    <div
                      className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{
                        background: `var(--color-${platform.name.toLowerCase()})15`,
                      }}
                    >
                      <BarChart className="w-7 h-7" />
                    </div>
                    <h3 className="text-md font-semibold mb-2">
                      Growth Solutions
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Complete solution for your {platform.name} business
                      expansion
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Accounts Tab */}
            <TabsContent value="accounts" className="space-y-8">
              {accounts && accounts.length > 0 ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">
                    Available {platform.name} Accounts
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                    {accounts.map((account) => (
                      <AccountCard
                        key={account._id}
                        account={{
                          _id: account._id,
                          title:
                            account.title || `${account.platform.name} Account`,
                          platform: {
                            _ref: platform._id,
                            name: platform.name,
                            logo: platform.logo,
                          },
                          category: account.category || "standard",
                          price:
                            typeof account.price === "string"
                              ? parseFloat(account.price) || 0
                              : account.price || 0,
                          features: account.features || [],
                          metrics: account.metrics,
                          status:
                            account.status === "available" ||
                            account.status === "sold" ||
                            account.status === "pending"
                              ? account.status
                              : "available",
                          createdAt:
                            account.createdAt || new Date().toISOString(),
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">
                    No Accounts Available
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We don't have any {platform.name} accounts in stock at the
                    moment.
                  </p>
                  <Link href="/contact">
                    <Button>Request an Account</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-12">
              {/* Virtual Assistant Services Section */}
              {platform.vaServices && platform.vaServices.length > 0 ? (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-3">
                      {platform.name} Virtual Assistant Services
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                      Professional services to help you manage and grow your{" "}
                      {platform.name} business
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(platform.vaServices || []).map((service, index) => (
                      // <VAServiceCard
                      //   key={index}
                      //   service={{
                      //     ...service,
                      //     // Ensure all required properties exist
                      //     description: service.description || "",
                      //     price: service.price || "Contact for pricing",
                      //     platformName: platform.name,
                      //   }}
                      // />
                      <ServiceCard
                        key={index}
                        service={{
                          ...service,
                          // Ensure all required properties exist
                          description: service.description || "",
                          price: service.price || "Contact for pricing",
                          title: service.title,
                          category: platform.name || "",
                          id: platform._id || "",
                          icon: service.icon || undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-card rounded-xl border border-border">
                  <h3 className="text-xl font-medium mb-2">
                    VA Services Coming Soon
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                    We&apos;re currently developing specialized VA services for{" "}
                    {platform.name}. Contact us to discuss your needs.
                  </p>
                </div>
              )}

              {/* Account Reinstatement Services */}
              {reinstatementServices.length > 0 ? (
                <div className="mt-16">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-3">
                      {platform.name} Account Reinstatement
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                      Get your suspended or blocked {platform.name} account
                      reinstated with our specialized services
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reinstatementServices.map((service) => (
                      <ReinstatementCard key={service._id} service={service} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-card rounded-xl border border-border">
                  <h3 className="text-xl font-medium mb-2">
                    Reinstatement Services Available
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-4">
                    We offer customized reinstatement services for suspended{" "}
                    {platform.name} accounts. Contact us for details.
                  </p>
                  <Button className="bg-primary" asChild>
                    <Link href="#inquiry-forms">Get Help Now</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Inquiry Forms Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Request an Account
            </h2>
          </div>
          <div
            id="inquiry-forms"
            className="mt-16 grid md:grid-cols-2 gap-8 scroll-mt-16"
          >
            <div className="p-6 rounded-xl">
              <PriceInquiryForm
                platformName={platform.name.split(" ")[0].toLowerCase()}
              />
            </div>

            <div className="p-6 rounded-xl ">
              <RequirementsForm
                platformName={platform.name.split(" ")[0].toLowerCase()}
                fields={
                  (platform.accountRequirementFields || []) as FormField[]
                }
              />
            </div>
          </div>

          <CTASection />
        </div>
      </div>
    );
  } catch (error) {
    
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Error Loading Platform Data</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          There was an error loading the platform data. Please try again later.
        </p>
        <Button asChild>
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    );
  }
}
