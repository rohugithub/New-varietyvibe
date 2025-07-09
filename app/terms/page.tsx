import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Inox Secure",
  description:
    "Read the terms and conditions for using Inox Secure's services and products",
};

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-transparent">
        <div className="flex flex-col items-center text-center mb-16 px-10 py-10 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-white max-w-3xl">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p>
              <strong>Last Updated:</strong> June 1, 2023
            </p>
            <p>
              These Terms and Conditions ("Terms") govern your use of the Inox
              Secure website, mobile application, and services (collectively,
              the "Services"). By accessing or using our Services, you agree to
              be bound by these Terms. If you do not agree to these Terms,
              please do not use our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
            <p>In these Terms:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>"Inox Secure,"</strong> "we," "us," or "our" refers to
                Inox Secure Pvt. Ltd., a company registered under the laws of
                India.
              </li>
              <li>
                <strong>"User,"</strong> "you," or "your" refers to any
                individual or entity that accesses or uses our Services.
              </li>
              <li>
                <strong>"Content"</strong> refers to text, graphics, images,
                music, software, audio, video, information, or other materials.
              </li>
              <li>
                <strong>"Products"</strong> refers to security devices,
                equipment, and related items available for purchase through our
                Services.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Account Registration</h2>
            <p>
              To use certain features of our Services, you may need to create an
              account. When registering for an account, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if any
              information provided is inaccurate, outdated, or incomplete, or if
              we believe you have violated these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              3. Products and Services
            </h2>
            <p>
              Inox Secure offers various security products and related services.
              By purchasing our Products or using our Services, you acknowledge
              and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Product descriptions, images, specifications, and prices are
                subject to change without notice
              </li>
              <li>
                We strive to display Products as accurately as possible, but
                colors and appearances may vary based on your device
              </li>
              <li>
                We reserve the right to limit quantities, refuse orders, or
                discontinue Products at our discretion
              </li>
              <li>
                Installation services, if purchased, are subject to additional
                terms provided at the time of purchase
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
            <p>When placing an order through our Services:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                You represent that you are authorized to use the payment method
                provided
              </li>
              <li>
                You acknowledge that prices displayed do not include taxes,
                which will be added at checkout where applicable
              </li>
              <li>
                You understand that order confirmation does not constitute
                acceptance of your order; all orders are subject to availability
                and confirmation
              </li>
              <li>
                You agree that we may charge your payment method when your order
                is processed or at the time of shipment
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              5. Delivery and Shipping
            </h2>
            <p>
              Our delivery and shipping policies are detailed in our{" "}
              <Link href="/shipping" className="text-primary hover:underline">
                Shipping Policy
              </Link>
              . By placing an order, you agree to the terms outlined therein.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
            <p>
              Our return and refund policies are detailed in our{" "}
              <Link href="/returns" className="text-primary hover:underline">
                Return & Refund Policy
              </Link>
              . By placing an order, you agree to the terms outlined therein.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. User Conduct</h2>
            <p>When using our Services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>
                Attempt to gain unauthorized access to any part of our Services
              </li>
              <li>Use our Services to transmit harmful code or malware</li>
              <li>Impersonate any person or entity</li>
              <li>
                Engage in any activity that could damage, disable, or impair our
                Services
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              8. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of our Services,
              including but not limited to text, graphics, logos, icons, images,
              audio clips, digital downloads, data compilations, and software,
              are the exclusive property of Inox Secure or our licensors and are
              protected by copyright, trademark, and other intellectual property
              laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on our Services without our
              prior written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Privacy</h2>
            <p>
              Your privacy is important to us. Our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              describes how we collect, use, and share your personal
              information. By using our Services, you consent to the collection
              and use of information as described therein.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Inox Secure shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Your access to or use of or inability to access or use our
                Services
              </li>
              <li>Any conduct or content of any third party on our Services</li>
              <li>Any content obtained from our Services</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Inox Secure and
              its officers, directors, employees, agents, and affiliates from
              and against any claims, liabilities, damages, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) arising
              from or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Your violation of these Terms</li>
              <li>Your use of our Services</li>
              <li>Your violation of any rights of another party</li>
              <li>
                Your violation of any applicable laws, rules, or regulations
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              12. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting on our website or
              application. Your continued use of our Services after any changes
              indicates your acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions. Any dispute arising from or relating to these Terms or
              our Services shall be subject to the exclusive jurisdiction of the
              courts in Bangalore, Karnataka, India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@inoxsecure.com"
                className="text-primary hover:underline"
              >
                support@inoxsecure.com

              </a>{" "}
              or write to us at:
            </p>
            <address className="not-italic mt-2">
          Harshita Electronics Mart, 
              <br />
              Shop No. 03, Shree Ram Market Agra Road,
              <br />
             Jaipur - 302031 (Rajasthan)
              <br />
              India
            </address>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600">
              By using our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
