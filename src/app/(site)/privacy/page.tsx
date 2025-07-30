import { CTASection } from "@/components/pages/home/cta-section";

export const revalidate = 60;

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      {/* Aesthetic Header */}
      <div className="relative ">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="6" cy="6" r="6"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            Privacy Policy
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
                    At{" "}
                    <span className="font-semibold text-primary ">
                      H&S Ecommerce Agency
                    </span>
                    , we take your privacy seriously. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website or use our services.
                  </p>
                </div>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 ">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Information We Collect
                </h2>
                <p className="mb-4 text-foreground ">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="mb-8 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Register for an account
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Submit a request for pricing or information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Sign up for our newsletter
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Contact us via our contact form, email, or phone
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Participate in promotions or surveys
                  </li>
                </ul>
                <p className="mb-12 text-muted-foreground ">
                  The personal information we collect may include your name,
                  email address, phone number, business information, and any
                  other information you choose to provide.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 ">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  How We Use Your Information
                </h2>
                <p className="mb-4 text-foreground ">
                  We may use the information we collect for various purposes,
                  including:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Providing, maintaining, and improving our services
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Processing transactions and sending related information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Responding to your comments, questions, and requests
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Sending you technical notices, updates, security alerts, and
                    support messages
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Communicating with you about products, services, offers, and
                    promotions
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Monitoring and analyzing trends, usage, and activities in
                    connection with our services
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Cookies and Tracking Technologies
                </h2>
                <p className="mb-12 text-foreground ">
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. Cookies
                  are files with a small amount of data which may include an
                  anonymous unique identifier. You can instruct your browser to
                  refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Third-Party Services
                </h2>
                <p className="mb-4 text-foreground ">
                  We may use third-party services such as Google Analytics,
                  payment processors, and marketing platforms that collect,
                  monitor, and analyze this information to help us improve our
                  service.
                </p>
                <p className="mb-12 text-foreground ">
                  H&S Ecommerce Agency may use third-party service providers to
                  help us operate our business and the site or administer
                  activities on our behalf, such as sending out newsletters or
                  surveys. We may share your information with these third
                  parties for those limited purposes.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Data Security
                </h2>
                <p className="mb-12 text-foreground ">
                  We have implemented appropriate technical and organizational
                  security measures designed to protect the security of any
                  personal information we process. However, please also remember
                  that we cannot guarantee that the internet itself is 100%
                  secure.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  International Data Transfers
                </h2>
                <p className="mb-12 text-foreground ">
                  Your information may be transferred to — and maintained on —
                  computers located outside of your state, province, country, or
                  other governmental jurisdiction where the data protection laws
                  may differ from those of your jurisdiction.
                </p>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Your Rights
                </h2>
                <p className="mb-4 text-foreground ">
                  Depending on your location, you may have certain rights
                  regarding your personal information, such as:
                </p>
                <ul className="mb-12 space-y-3 text-muted-foreground ">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    The right to access your personal information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    The right to correct inaccurate or incomplete information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    The right to deletion of your personal information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    The right to restrict or object to our processing of your
                    personal information
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    The right to data portability
                  </li>
                </ul>

                <h2 className="flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Changes to This Privacy Policy
                </h2>
                <p className="mb-12 text-foreground ">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date at the top of
                  this page.
                </p>

                <h2 className="flex items-center text-2xl font-semibold mt-12 mb-6 pb-3 border-b-2 text-primary">
                  Contact Us
                </h2>
                <p className="mb-6 text-foreground ">
                  If you have any questions about this Privacy Policy, please
                  contact us:
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
