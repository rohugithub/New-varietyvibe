import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Inox Secure",
  description:
    "Read the terms and conditions and key information for using Inox Secure’s services and products across India.",
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
            <h2 className="text-2xl font-bold mb-4">About Inoxsecure</h2>
            <p>
              Inoxsecure is India's No. 1 Local Search Engine that offers local
              search and essential service solutions through our platform. From
              electronics to groceries and day-to-day essentials, our "Search
              Plus" services make life simpler. We've evolved from providing
              search results to enabling real-time business transactions.
            </p>
            <p>
              Our platform empowers SMEs with online business tools, their own
              websites, and digital presence. We also provide a dedicated
              real-time chat messenger and a social content sharing platform for
              users.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Corporate Information</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Inoxsecure began operations in 2005 and became India’s leading
                local search engine.
              </li>
              <li>
                Official website{" "}
                <Link href="/" className="text-primary hover:underline">
                  www.inoxsecure.com
                </Link>{" "}
                launched in 2025.
              </li>
              <li>
                Provides service discovery across India through website and
                digital platforms.
              </li>
              <li>
                Helps users discover products and services, and enables listed
                businesses to grow.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Presence across 20+ cities in India.</li>
              <li>
                First-mover advantage with strong presence in urban and rural
                areas.
              </li>
              <li>
                User-friendly platform offering transaction-ready search, real-time
                chat, and a content sharing hub.
              </li>
              <li>
                3M+ users (quarterly) and 6M+ ratings/reviews (as of March 31,
                2025).
              </li>
              <li>
                Assists users in finding skilled artisans and nearby businesses
                online.
              </li>
              <li>
                Trustable platform for daily personal and professional service
                needs.
              </li>
              <li>
                Strong digital presence and value-added services for MSMEs,
                including websites and payment solutions.
              </li>
              <li>
                Dedicated sales force with local market expertise, enabling
                referrals and repeat business.
              </li>
              <li>
                Vendors are onboarded with full confidence and a money-back
                guarantee promise.
              </li>
              <li>Experienced management with a strong monetization model.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Membership and Subscription
            </h2>
            <p>
              Skilled artisans and businesses can grow their reach by joining
              Inoxsecure. Verification of documents is required. The services
              are:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Free lifetime access to online document verification</li>
              <li>
                Business support worth ₹2000 included in the lifetime
                subscription
              </li>
              <li>
                A joining fee of ₹299 is charged to every consumer to access the
                platform
              </li>
              <li>
                The service has no lock-in. You can choose to modify or exit
                whenever desired without pressure.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide accurate and updated information.</li>
              <li>
                Avoid any fraudulent, harmful, or misleading activities on the
                platform.
              </li>
              <li>
                Follow applicable Indian laws and regulations while using
                services.
              </li>
              <li>
                Businesses must comply with fair practices and consumer policies.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Privacy & Contact</h2>
            <p>
              Your personal data is protected under our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . We encourage you to read it carefully.
            </p>
            <p>
              For queries or concerns, you can reach us at:{" "}
              <a
                href="mailto:support@inoxsecure.com"
                className="text-primary hover:underline"
              >
                support@inoxsecure.com
              </a>
            </p>
            <address className="not-italic mt-2">
              Harshita Electronics Mart,
              <br />
              Shop No. 03, Shree Ram Market Agra Road,
              <br />
              Jaipur - 302031 (Rajasthan), India
            </address>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600">
              By using our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
