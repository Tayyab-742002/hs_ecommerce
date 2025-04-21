import { PageHeader } from '@/components/layout/PageHeader'

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Privacy Policy"
        description="Last updated: April 21, 2025"
        centered
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <p>
            At H&S Ecommerce Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Register for an account</li>
            <li>Submit a request for pricing or information</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us via our contact form, email, or phone</li>
            <li>Participate in promotions or surveys</li>
          </ul>
          
          <p>
            The personal information we collect may include your name, email address, phone number, business information, and any other information you choose to provide.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing transactions and sending related information</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Sending you technical notices, updates, security alerts, and support messages</li>
            <li>Communicating with you about products, services, offers, and promotions</li>
            <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
          </ul>
          
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Analytics, payment processors, and marketing platforms that collect, monitor, and analyze this information to help us improve our service.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>
          
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
          </p>
          
          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate or incomplete information</li>
            <li>The right to deletion of your personal information</li>
            <li>The right to restrict or object to our processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
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
