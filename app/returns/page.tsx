import Link from "next/link";
import {
  Clock,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Returns & Exchange Policy | Inox Secure",
  description:
    "Learn about Inox Secure's return and exchange policies, process, and terms",
};

export default function ReturnsPage() {
  return (
    <div >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-transparent">
        <div className="flex flex-col items-center text-center mb-16 px-10 py-10 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Returns & Exchange Policy
          </h1>
          <p className="text-lg text-white max-w-3xl">
            We want you to be completely satisfied with your purchase. Learn
            about our hassle-free return and exchange process.
          </p>
        </div>
      </div>

      <div className="max-w-7xl  px-6 py-4 mx-auto">
        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">7-Day Returns</h3>
            <p className="text-sm text-gray-600">
              Easy returns within 7 days of delivery
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Pickup</h3>
            <p className="text-sm text-gray-600">
              We'll pick up the item from your doorstep
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <RefreshCw className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quick Refunds</h3>
            <p className="text-sm text-gray-600">
              Refunds processed within 7-10 business days
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Return Policy Overview</h2>
            <p>
              At Inox Secure, we understand that sometimes a product may not
              meet your expectations. That's why we offer a comprehensive return
              policy to ensure your complete satisfaction.
            </p>
            <p>
              <strong>Return Window:</strong> You can return most items within 7
              days of delivery. The return period starts from the date of
              delivery as confirmed by our delivery partner.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Eligible Items for Return
            </h2>
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Items You Can Return
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Electronics (TVs, laptops, smartphones, tablets)</li>
                <li>Home appliances (washing machines, refrigerators, ACs)</li>
                <li>
                  Kitchen appliances (microwaves, mixer grinders, induction
                  cooktops)
                </li>
                <li>IT accessories (keyboards, mice, headphones, speakers)</li>
                <li>
                  Small appliances (irons, vacuum cleaners, air purifiers)
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                Items You Cannot Return
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal care and hygiene products</li>
                <li>Software and digital downloads</li>
                <li>Customized or personalized products</li>
                <li>Products damaged due to misuse or normal wear and tear</li>
                <li>
                  Items without original packaging, accessories, or warranty
                  cards
                </li>
                <li>Products with tampered or damaged serial numbers</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Return Conditions</h2>
            <p>
              To be eligible for a return, items must meet the following
              conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Original Condition:</strong> Items must be unused and in
                the same condition as received
              </li>
              <li>
                <strong>Original Packaging:</strong> All original packaging,
                including boxes, plastic wrapping, and protective materials
              </li>
              <li>
                <strong>Accessories:</strong> All accessories, manuals, warranty
                cards, and free gifts must be included
              </li>
              <li>
                <strong>No Damage:</strong> Items should not have any physical
                damage, scratches, or signs of use
              </li>
              <li>
                <strong>Hygiene:</strong> For hygiene reasons, certain products
                cannot be returned once opened
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Step-by-Step Return Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Initiate Return Request</h4>
                    <p className="text-gray-600">
                      Log into your account, go to "My Orders," and select the
                      item you want to return. Click "Return Item" and choose
                      your reason for return.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Schedule Pickup</h4>
                    <p className="text-gray-600">
                      Choose a convenient time slot for pickup. Our delivery
                      partner will contact you to confirm the pickup time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Package the Item</h4>
                    <p className="text-gray-600">
                      Pack the item securely in its original packaging with all
                      accessories and documents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Handover to Delivery Partner
                    </h4>
                    <p className="text-gray-600">
                      Our delivery partner will collect the item and provide you
                      with a pickup receipt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality Check & Refund</h4>
                    <p className="text-gray-600">
                      We'll inspect the item and process your refund within 7-10
                      business days if everything is in order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Exchange Policy</h2>
            <p>
              We offer exchanges for size, color, or model variations within 7
              days of delivery, subject to availability.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Exchange Conditions:
            </h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                The item you want to exchange to must be available in stock
              </li>
              <li>
                Price difference (if any) will be adjusted in your favor or
                charged accordingly
              </li>
              <li>Exchange is subject to the same conditions as returns</li>
              <li>Only one exchange is allowed per order</li>
              <li>Exchanges are not available for all product categories</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
            <p>
              Once we receive and inspect your returned item, we'll process your
              refund according to the following timeline:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-4">Refund Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Credit/Debit Cards</span>
                  <span className="font-semibold">5-7 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Net Banking</span>
                  <span className="font-semibold">5-7 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>UPI/Digital Wallets</span>
                  <span className="font-semibold">3-5 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cash on Delivery</span>
                  <span className="font-semibold">7-10 business days</span>
                </div>
              </div>
            </div>
            <p>
              <strong>Note:</strong> For Cash on Delivery orders, refunds will
              be processed to your bank account. You'll need to provide your
              bank details during the return process.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Damaged or Defective Items
            </h2>
            <p>
              If you receive a damaged or defective item, please follow these
              steps:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Don't accept delivery</strong> if the package appears
                damaged
              </li>
              <li>
                <strong>Report immediately</strong> within 24 hours of delivery
              </li>
              <li>
                <strong>Take photos</strong> of the damaged item and packaging
              </li>
              <li>
                <strong>Contact customer support</strong> with your order number
                and photos
              </li>
              <li>We'll arrange for immediate replacement at no extra cost</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Large Appliances Return</h2>
            <p>
              For large appliances like refrigerators, washing machines, and air
              conditioners:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Installation must not have been attempted</li>
              <li>Original packaging and accessories must be available</li>
              <li>Special pickup arrangements may be required</li>
              <li>
                Additional inspection may be needed before refund approval
              </li>
              <li>
                Installation charges (if paid) are non-refundable for returns
                due to change of mind
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our return policy or need
              assistance with a return, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Customer Support</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Phone: +91 1234 567 890
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Email: returns@inoxsecure.com
                  </p>
                  <p className="text-sm text-gray-600">Hours: 24/7 Support</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Returns Department</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Email: returns@inoxsecure.com
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Response Time: Within 24 hours
                  </p>
                  <p className="text-sm text-gray-600">
                    Live Chat: Available on website
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Need Help with a Return?</h3>
            <p className="mb-4 opacity-90">
              Our customer support team is here to assist you with any
              return-related queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary">Contact Support</Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p>
              <strong>Last Updated:</strong> June 15, 2023. This return policy
              is subject to change without prior notice. Please check this page
              regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
