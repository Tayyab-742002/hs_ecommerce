import { CTASection } from "@/components/pages/home/cta-section";

export const revalidate = 60;

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      {/* Header */}
      <div className="relative">
        <div className="relative container mx-auto px-4 py-12 sm:py-14 md:py-16 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            Last updated: April 21, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl shadow-lg border border-border overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
              <div className="prose dark:prose-invert prose-slate max-w-none prose-base sm:prose-lg">
                <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-border">
                  <p className="text-base sm:text-lg leading-relaxed text-foreground">
                    At{" "}
                    <span className="font-semibold text-primary">
                      H&S Ecommerce Agency
                    </span>
                    , we take your privacy seriously...
                  </p>
                </div>

                {/* Section Template */}
                <Section
                  title="Information We Collect"
                  color="primary"
                  bullets={[
                    "Register for an account",
                    "Submit a request for pricing or information",
                    "Sign up for our newsletter",
                    "Contact us via our contact form, email, or phone",
                    "Participate in promotions or surveys",
                  ]}
                  description="We may collect personal information that you voluntarily provide to us when you:"
                />
                <p className="mb-12 text-muted-foreground">
                  The personal information we collect may include your name,
                  email address, phone number, business information, and any
                  other information you choose to provide.
                </p>

                <Section
                  title="How We Use Your Information"
                  color="purple"
                  bullets={[
                    "Providing, maintaining, and improving our services",
                    "Processing transactions and sending related information",
                    "Responding to your comments, questions, and requests",
                    "Sending you technical notices, updates, security alerts, and support messages",
                    "Communicating with you about products, services, offers, and promotions",
                    "Monitoring and analyzing trends, usage, and activities in connection with our services",
                  ]}
                  description="We may use the information we collect for various purposes, including:"
                />

                <Section
                  title="Cookies and Tracking Technologies"
                  color="green"
                  description="We use cookies and similar tracking technologies..."
                />

                <Section
                  title="Third-Party Services"
                  color="orange"
                  description="We may use third-party services such as Google Analytics, payment processors..."
                />

                <Section
                  title="Data Security"
                  color="red"
                  description="We have implemented appropriate technical and organizational security measures..."
                />

                <Section
                  title="International Data Transfers"
                  color="indigo"
                  description="Your information may be transferred to — and maintained on — computers located outside of your jurisdiction..."
                />

                <Section
                  title="Your Rights"
                  color="teal"
                  bullets={[
                    "The right to access your personal information",
                    "The right to correct inaccurate or incomplete information",
                    "The right to deletion of your personal information",
                    "The right to restrict or object to our processing",
                    "The right to data portability",
                  ]}
                  description="Depending on your location, you may have certain rights regarding your personal information, such as:"
                />

                <Section
                  title="Changes to This Privacy Policy"
                  color="pink"
                  description="We may update our Privacy Policy from time to time. We will notify you of any changes..."
                />

                {/* Contact Section */}
                <h2 className="flex items-center text-2xl font-semibold mt-12 mb-6 pb-3 border-b-2 text-primary">
                  Contact Us
                </h2>
                <p className="mb-6 text-foreground">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <div className="space-y-3 p-6 bg-primary rounded-lg">
                  <p className="text-foreground">
                    <span className="font-semibold text-white">Email:</span>
                    <a
                      href="mailto:handsecommerce@gmail.com"
                      className="ml-2 text-sm text-white dark:text-blue-400 hover:underline transition-colors"
                    >
                      handsecommerce@gmail.com
                    </a>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold text-white">Phone:</span>
                    <span className="ml-2 text-white/80 text-sm">
                      +92 301 0510316 or +44 7955 426807
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

// Reusable Section Component
function Section({
  title,
  description,
  bullets,
  color,
}: {
  title: string;
  description?: string;
  bullets?: string[];
  color: string;
}) {
  return (
    <>
      <h2
        className={`flex items-center text-2xl font-semibold text-primary mt-12 mb-6 pb-3 border-b-2 border-primary/20 `}
      >
        <div className={`w-2 h-2 bg-${color}-500 rounded-full mr-3`}></div>
        {title}
      </h2>
      {description && <p className="mb-4 text-foreground">{description}</p>}
      {bullets && (
        <ul className="mb-12 space-y-3 text-muted-foreground">
          {bullets.map((item, index) => (
            <li className="flex items-start" key={index}>
              <div
                className={`w-1.5 h-1.5 bg-${color}-400 rounded-full mt-2.5 mr-3 flex-shrink-0`}
              ></div>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
