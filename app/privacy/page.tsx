import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Inox Secure",
  description: "Learn how Inox Secure collects, uses, and protects your personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <div >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-transparent">
        <div className="flex flex-col items-center text-center mb-16 px-10 py-10 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Privacy policy
          </h1>
          <p className="text-lg text-white max-w-3xl">
             We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p>
              <strong>Last Updated:</strong> June 15, 2023
            </p>
            <p>
              This Privacy Policy describes how Inox Secure Pvt. Ltd. ("Inox Secure," "we," "us," or "our") collects,
              uses, shares, and protects your personal information when you use our website, mobile application, and
              services (collectively, the "Services"). By accessing or using our Services, you consent to the practices
              described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Services, including:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Contact Information:</strong> Name, email address, postal address, phone number
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, account preferences, profile picture
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details, billing address, payment history (note: full
                payment card details are processed securely by our payment service providers)
              </li>
              <li>
                <strong>Delivery Information:</strong> Delivery address, delivery instructions, preferred delivery times
              </li>
              <li>
                <strong>Identity Verification:</strong> For certain high-value products, we may collect
                government-issued ID information for verification purposes
              </li>
              <li>
                <strong>Communication Data:</strong> Records of your communications with us, including customer service
                interactions, reviews, and feedback
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Device Information:</strong> IP address, device type, operating system, browser type, mobile
                network information, device identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> Pages viewed, time spent on pages, links clicked, search queries, purchase
                history, browsing patterns
              </li>
              <li>
                <strong>Location Data:</strong> Precise location (with your consent) for delivery services, approximate
                location based on IP address
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons,
                pixel tags, and similar tracking technologies
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Social media platforms when you connect your accounts</li>
              <li>Payment processors and financial institutions</li>
              <li>Delivery partners and logistics providers</li>
              <li>Marketing partners and analytics providers</li>
              <li>Public databases and data aggregators</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect for various legitimate business purposes, including:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Service Provision</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Process and fulfill your orders for products and services</li>
              <li>Provide and maintain our Services</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Process payments and manage your account</li>
              <li>Deliver products to your specified location</li>
              <li>Provide customer support and respond to your inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Communication</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Send you transactional messages about your orders and account</li>
              <li>Send you marketing communications (with your consent where required)</li>
              <li>Notify you about changes to our Services or policies</li>
              <li>Respond to your comments, questions, and requests</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Personalization and Improvement</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Personalize your experience and provide product recommendations</li>
              <li>Improve our Services and develop new features</li>
              <li>Analyze usage patterns and conduct research</li>
              <li>Test new features and functionality</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.4 Legal and Security</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Ensure the security and integrity of our Services</li>
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Protect our rights and the rights of our users</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
            <p>We may share your personal information in the following circumstances:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Service Providers</h3>
            <p>We share information with third-party vendors who perform services on our behalf, including:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Payment processing companies</li>
              <li>Delivery and logistics partners</li>
              <li>Cloud hosting and data storage providers</li>
              <li>Customer service and support platforms</li>
              <li>Marketing and advertising partners</li>
              <li>Analytics and research providers</li>
              <li>Installation and technical support services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Business Partners</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Manufacturers and suppliers for warranty and support services</li>
              <li>Financial institutions for EMI and credit services</li>
              <li>Insurance providers for product protection plans</li>
              <li>Joint marketing partners (with your consent)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Legal Requirements</h3>
            <p>We may disclose your information when required by law or to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Comply with legal processes, court orders, or governmental requests</li>
              <li>Enforce our terms of service and other agreements</li>
              <li>Protect the rights, property, or safety of Inox Secure, our users, or others</li>
              <li>Investigate and prevent fraud, security breaches, or illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Business Transfers</h3>
            <p>
              In connection with a merger, acquisition, reorganization, or sale of assets, your information may be
              transferred to the acquiring entity, subject to the same privacy protections.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.5 With Your Consent</h3>
            <p>
              We may share your information in other ways with your consent or at your direction, such as when you
              choose to share information on social media platforms.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <p className="font-semibold text-blue-800">
                Important: We do not sell your personal information to third parties for their marketing purposes
                without your explicit consent.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights and Choices</h2>
            <p>
              Depending on your location and applicable laws, you may have certain rights regarding your personal
              information:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Access and Portability</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Request access to your personal information</li>
              <li>Receive a copy of your data in a structured, commonly used format</li>
              <li>Request information about how we process your data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Correction and Updates</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Correct inaccuracies in your personal information</li>
              <li>Update your account information and preferences</li>
              <li>Complete incomplete personal information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Deletion and Restriction</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Restrict or object to processing of your personal information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Marketing Communications</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Opt-out of marketing emails by clicking the unsubscribe link</li>
              <li>Adjust your communication preferences in your account settings</li>
              <li>Contact us to opt-out of SMS marketing messages</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Cookies and Tracking</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Manage cookie preferences through your browser settings</li>
              <li>Opt-out of targeted advertising through industry opt-out tools</li>
              <li>Disable location tracking through your device settings</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold mb-2">How to Exercise Your Rights</h4>
              <p className="text-sm">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@inoxsecure.com" className="text-primary hover:underline">
                  privacy@inoxsecure.com
                </a>{" "}
                or through your account settings. We will respond to your request in accordance with applicable law,
                typically within 30 days.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement comprehensive security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Technical Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Advanced encryption for data storage</li>
              <li>Secure server infrastructure with regular security updates</li>
              <li>Multi-factor authentication for administrative access</li>
              <li>Regular security audits and penetration testing</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Organizational Measures</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Access controls limiting data access to authorized personnel only</li>
              <li>Regular employee training on data protection and security</li>
              <li>Incident response procedures for security breaches</li>
              <li>Data retention policies to minimize data storage</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Payment Security</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>PCI DSS compliance for payment card processing</li>
              <li>Tokenization of payment information</li>
              <li>Secure payment gateways from trusted providers</li>
              <li>Fraud detection and prevention systems</li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <p className="font-semibold text-yellow-800 mb-2">Important Security Note:</p>
              <p className="text-yellow-700 text-sm">
                While we implement robust security measures, no method of transmission over the Internet or electronic
                storage is 100% secure. We cannot guarantee absolute security, but we continuously work to improve our
                security practices and respond quickly to any potential threats.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Retention Periods</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Account Information:</strong> Until you delete your account or request deletion
              </li>
              <li>
                <strong>Transaction Records:</strong> 7 years for tax and accounting purposes
              </li>
              <li>
                <strong>Customer Service Records:</strong> 3 years for quality assurance
              </li>
              <li>
                <strong>Marketing Data:</strong> Until you opt-out or 2 years of inactivity
              </li>
              <li>
                <strong>Technical Logs:</strong> 12 months for security and performance monitoring
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Deletion Process</h3>
            <p>
              When we no longer need your personal information, we securely delete or anonymize it. Some information may
              be retained in anonymized form for analytical purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in countries other than your country of
              residence. When we transfer data internationally, we ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Adequacy decisions by competent data protection authorities</li>
              <li>Certification schemes and codes of conduct</li>
              <li>Your explicit consent where required</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under the age of 18. We do not knowingly collect personal
              information from children under 18. If we become aware that we have collected personal information from a
              child under 18, we will take steps to delete such information promptly.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our Services:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Types of Cookies</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website functionality
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how visitors use our website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Managing Cookies</h3>
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may affect the
              functionality of our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Third-Party Links and Services</h2>
            <p>
              Our Services may contain links to third-party websites, applications, or services. This Privacy Policy
              does not apply to these third-party services. We encourage you to read the privacy policies of any
              third-party services you visit or use.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
              legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification (if you have an account)</li>
              <li>Displaying a prominent notice on our Services</li>
            </ul>
            <p>
              Your continued use of our Services after any changes indicates your acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Privacy Officer</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Email:{" "}
                    <a href="mailto:privacy@inoxsecure.com" className="text-primary hover:underline">
                      privacy@inoxsecure.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">Phone: +91 1234 567 890</p>
                  <p className="text-sm text-gray-600">Response Time: Within 48 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mailing Address</h4>
                  <address className="text-sm text-gray-600 not-italic">
                    Inox Secure Pvt. Ltd.
                    <br />
                    Attention: Privacy Officer
                    <br />
                    123 Security Plaza, Tech Park
                    <br />
                    Bangalore, Karnataka 560001
                    <br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Questions About Your Privacy?</h3>
            <p className="mb-4 opacity-90">
              Our privacy team is here to help you understand how we protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Privacy Team
                </button>
              </Link>
              <Link href="/faq">
                <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Privacy FAQ
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p>
              This Privacy Policy is effective as of the date stated above and will remain in effect except with respect
              to any changes in its provisions in the future, which will be in effect immediately after being posted on
              this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
