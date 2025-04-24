import { PageHeader } from '@/components/layout/PageHeader'

export const revalidate = 60;

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Terms of Service"
        description="Last updated: April 21, 2025"
        centered
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website and services operated by H&amp;S Ecommerce Agency ("us", "we", "our").
          </p>
          
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the services offered by H&amp;S Ecommerce Agency (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to comply with and be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
          </p>
          
          <h2>Services Description</h2>
          <p>
            H&amp;S Ecommerce Agency provides services related to e-commerce platforms including Amazon, eBay, Walmart, TikTok, and Etsy. Our services include but are not limited to:
          </p>
          <ul>
            <li>Provision of seller and buyer accounts for various e-commerce platforms</li>
            <li>Virtual assistant services for e-commerce businesses</li>
            <li>Account reinstatement services for suspended or blocked accounts</li>
            <li>Consultation and support for e-commerce operations</li>
          </ul>
          
          <h2>Account Terms</h2>
          <p>
            When you purchase an account through our services, you are responsible for:
          </p>
          <ul>
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Following all applicable terms and conditions of the respective platform</li>
            <li>Providing accurate information for account setup and verification</li>
          </ul>
          
          <h2>Payment and Refunds</h2>
          <p>
            Payment terms for our services are as follows:
          </p>
          <ul>
            <li>All prices are in USD unless otherwise specified</li>
            <li>Payment must be received before services are delivered</li>
            <li>We accept various payment methods as specified on our website</li>
            <li>Refund policies vary by service type and will be clearly communicated before purchase</li>
          </ul>
          
          <h2>Service Guarantees</h2>
          <p>
            For account reinstatement services, we offer the following guarantees:
          </p>
          <ul>
            <li>We will make our best effort to reinstate suspended accounts</li>
            <li>Success rates are not guaranteed as final decisions rest with the platform providers</li>
            <li>Specific service guarantees will be provided in writing at the time of service purchase</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of H&amp;S Ecommerce Agency and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall H&amp;S Ecommerce Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
          
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: contact@hsecommerce.com</li>
            <li>By phone: +92 301 0510316 or +44 7955 426807</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
