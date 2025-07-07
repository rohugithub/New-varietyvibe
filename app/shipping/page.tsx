import Link from "next/link"

export const metadata = {
  title: "Shipping Policy | Inox Secure",
  description: "Learn about Inox Secure's shipping policies, delivery times, and coverage areas",
}

export default function ShippingPolicyPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Policy</h1>
        <p className="text-lg text-gray-600 max-w-6xl">
          Our commitment to delivering security products quickly and efficiently to your doorstep.
        </p>
      </div>

      <div className="max-w-7xl px-6 mx-auto">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Delivery Areas</h2>
            <p>
              Inox Secure currently offers delivery services in select metropolitan areas across India. To check if we
              deliver to your location, enter your address or pincode on our homepage or product pages.
            </p>
            <p>
              Our service areas are continuously expanding. If we don't currently deliver to your area, you can sign up
              for notifications to be alerted when we expand to your location.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Delivery Times</h2>
            <p>
              At Inox Secure, we pride ourselves on our quick delivery service. Our standard delivery times are as
              follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Express Delivery:</strong> 10-15 minutes (available in select areas for eligible products)
              </li>
              <li>
                <strong>Standard Delivery:</strong> Within 30-60 minutes
              </li>
              <li>
                <strong>Scheduled Delivery:</strong> Choose a specific time slot (minimum 2-hour window)
              </li>
            </ul>
            <p>
              Please note that delivery times may vary based on factors such as weather conditions, traffic, product
              availability, and distance from our nearest warehouse.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Shipping Fees</h2>
            <p>Our shipping fees are structured as follows:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Orders below ₹499:</strong> ₹49 delivery fee
              </li>
              <li>
                <strong>Orders ₹499 and above:</strong> Free delivery
              </li>
              <li>
                <strong>Express Delivery (10-15 minutes):</strong> Additional ₹20 (when available)
              </li>
            </ul>
            <p>
              Special promotions and membership benefits may offer reduced or waived delivery fees. Check our app or
              website for current offers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
            <p>
              Once your order is confirmed, you can track its status in real-time through our mobile app or website. Our
              tracking system provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Real-time location of your delivery partner</li>
              <li>Estimated time of arrival</li>
              <li>Delivery partner contact information</li>
              <li>Order status updates</li>
            </ul>
            <p>
              You will also receive SMS and/or app notifications about your order status, including confirmation,
              preparation, dispatch, and delivery.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Delivery Verification</h2>
            <p>
              For security products, we may require verification at the time of delivery to ensure they are received by
              the intended recipient. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>OTP verification</li>
              <li>Signature confirmation</li>
              <li>ID verification for high-value items</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Failed Deliveries</h2>
            <p>
              If we are unable to deliver your order due to unavailability, incorrect address information, or other
              issues:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Our delivery partner will attempt to contact you using the provided phone number</li>
              <li>
                The order may be returned to our warehouse if delivery cannot be completed after reasonable attempts
              </li>
              <li>
                You will be notified about the failed delivery, and our customer service team will contact you to
                reschedule or process a refund
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Installation Services</h2>
            <p>
              For products that require installation, you can add professional installation services during checkout.
              Installation services are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Additional fees based on the product and complexity of installation</li>
              <li>Availability of technicians in your area</li>
              <li>Scheduling based on your convenience and technician availability</li>
            </ul>
            <p>
              Our technicians are trained professionals who will ensure your security products are properly installed
              and functioning correctly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our shipping policy or a specific order, please contact our
              customer service team:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Phone:</strong> +91 1234 567 890 (24/7 support)
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@inoxsecure.com" className="text-primary hover:underline">
                  support@inoxsecure.com
                </a>
              </li>
              <li>
                <strong>In-App Chat:</strong> Available through our mobile application
              </li>
            </ul>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600">
              This shipping policy was last updated on June 1, 2023. Inox Secure reserves the right to modify these
              policies at any time. Any changes will be reflected on this page with an updated revision date.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Have questions? Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
