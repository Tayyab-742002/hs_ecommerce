import { CTASection } from "@/components/pages/home/cta-section";

export const revalidate = 60;

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      {/* Aesthetic Header */}
      <div className="relative ">
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Last updated: April 21, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div className="max-w-4xl mx-auto">
          {/* Document-style content with aesthetic touches */}
          <div className="  rounded-xl shadow-lg border border-border  overflow-hidden">
            <div className="p-12 lg:p-16">
              <div className="prose dark:prose-invert prose-slate max-w-none prose-lg">
                <div className="mb-12 pb-8 border-b border-border ">
                  <p className="text-lg leading-relaxed  text-foreground">
                    Please read these Terms of Service carefully before using
                    the website and services operated by{" "}
                    <span className="font-semibold text-primary ">
                      H&S Ecommerce Agency.
                    </span>{" "}
                  </p>
                </div>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 ">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Agreement to Terms
                </h2>
                <p className="mb-12 text-foreground ">
                  By accessing or using the services offered by H&S Ecommerce
                  Agency ("Company", "we", "us", "our"), you agree to comply
                  with and be bound by these Terms of Service ("Terms"). If you
                  do not agree to these Terms, please do not use our services.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 ">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Services Description
                </h2>
                <p className="mb-4 text-foreground ">
                  H&S Ecommerce Agency provides services related to e-commerce
                  platforms including Amazon, eBay, Walmart, TikTok, and Etsy.
                  Our services include but are not limited to:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Provision of seller and buyer accounts for various
                    e-commerce platforms
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Virtual assistant services for e-commerce businesses
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Account reinstatement services for suspended or blocked
                    accounts
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Consultation and support for e-commerce operations
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 ">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Account Terms
                </h2>
                <p className="mb-4 text-foreground ">
                  When you purchase an account through our services, you are
                  responsible for:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Maintaining the security of your account credentials
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    All activities that occur under your account
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Following all applicable terms and conditions of the
                    respective platform
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Providing accurate information for account setup and
                    verification
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Payment and Refunds
                </h2>
                <p className="mb-4 text-foreground ">
                  Payment terms for our services are as follows:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    All prices are in USD unless otherwise specified
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Payment must be received before services are delivered
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    We accept various payment methods as specified on our
                    website
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Refund policies vary by service type and will be clearly
                    communicated before purchase
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Service Guarantees
                </h2>
                <p className="mb-4 text-foreground ">
                  For account reinstatement services, we offer the following
                  guarantees:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    We will make our best effort to reinstate suspended accounts
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Success rates are not guaranteed as final decisions rest
                    with the platform providers
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Specific service guarantees will be provided in writing at
                    the time of service purchase
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Intellectual Property
                </h2>
                <p className="mb-12 text-foreground ">
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  H&S Ecommerce Agency and its licensors. The Service is
                  protected by copyright, trademark, and other laws of both the
                  United States and foreign countries.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Limitation of Liability
                </h2>
                <p className="mb-4 text-foreground ">
                  In no event shall H&S Ecommerce Agency, nor its directors,
                  employees, partners, agents, suppliers, or affiliates, be
                  liable for any indirect, incidental, special, consequential or
                  punitive damages, including without limitation, loss of
                  profits, data, use, goodwill, or other intangible losses,
                  resulting from:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Your access to or use of or inability to access or use the
                    Service
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Any conduct or content of any third party on the Service
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Any content obtained from the Service
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Governing Law
                </h2>
                <p className="mb-12 text-foreground ">
                  These Terms shall be governed and construed in accordance with
                  the laws of [Your Country/State], without regard to its
                  conflict of law provisions.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Changes to Terms
                </h2>
                <p className="mb-12 text-foreground ">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days' notice prior to any new terms
                  taking effect. What constitutes a material change will be
                  determined at our sole discretion.
                </p>

                <h2 className="flex items-center text-2xl font-semibold mt-12 mb-6 pb-3 border-b-2 text-primary">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Contact Us
                </h2>
                <p className="mb-6 text-foreground ">
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className="space-y-3 p-6  bg-primary rounded-lg ">
                  <p className="text-foreground ">
                    <span className="font-semibold text-white ">Email:</span>
                    <a
                      href="mailto:handsecommerce@gmail.com"
                      className="ml-2 text-white dark:text-blue-400 hover:underline transition-colors"
                    >
                      handsecommerce@gmail.com
                    </a>
                  </p>
                  <p className="text-foreground ">
                    <span className="font-semibold text-white ">Phone:</span>
                    <span className="ml-2 text-white/80">
                      +92 301 0510316 or +44 7955 426807
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
