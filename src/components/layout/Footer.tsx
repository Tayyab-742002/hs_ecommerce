import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h3 className="font-semibold mb-4">About H&S Ecommerce</h3>
            <p className="text-sm text-foreground/80">
              We provide Amazon, eBay, Walmart, TikTok, and Etsy seller and
              buyer accounts for all countries, along with virtual assistant
              services and account reinstatement solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/platforms"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services/va-services"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  VA Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/reinstatement"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Account Reinstatement
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/80">
                <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/923010510316"
                  className="hover:text-primary"
                >
                  +92 301 0510316
                </a>
              </li>
              <li className="text-sm text-foreground/80">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+447955426807" className="hover:text-primary">
                  +44 7955 426807
                </a>
              </li>
              <li className="text-sm text-foreground/80">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:contact@hsecommerce.com"
                  className="hover:text-primary"
                >
                  contact@hsecommerce.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/80">
          &copy; {new Date().getFullYear()} H&S Ecommerce Agency. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
