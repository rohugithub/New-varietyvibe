"use client";

import type React from "react";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  name: string;
  icon: React.ReactNode;
  count: number;
}

export default function FAQClientPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories: FAQCategory[] = [
    { name: "All", icon: "📋", count: 24 },
    { name: "General", icon: "ℹ️", count: 6 },
    { name: "Orders & Payment", icon: "💳", count: 5 },
    { name: "Shipping & Delivery", icon: "🚚", count: 4 },
    { name: "Returns & Exchanges", icon: "🔄", count: 4 },
    { name: "Products & Warranty", icon: "🛡️", count: 3 },
    { name: "Account & Technical", icon: "⚙️", count: 2 },
  ];

  const faqData: FAQItem[] = [
    // General
    {
      id: 1,
      category: "General",
      question: "What is Inox Secure and what products do you sell?",
      answer:
        "Inox Secure is a leading e-commerce platform specializing in electronics, home appliances, and IT products. We offer a wide range of products including TVs, washing machines, refrigerators, air conditioners, smartphones, laptops, kitchen appliances, and much more. All our products are 100% genuine and come with manufacturer warranties.",
    },
    {
      id: 2,
      category: "General",
      question: "What are your delivery areas?",
      answer:
        "We currently deliver to major metropolitan areas across India including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and many other cities. To check if we deliver to your location, simply enter your pincode on our homepage or product pages. We're continuously expanding our delivery network to serve more customers.",
    },
    {
      id: 3,
      category: "General",
      question: "Are all products on your website genuine?",
      answer:
        "Yes, absolutely! We guarantee that all products sold on our platform are 100% genuine and sourced directly from authorized distributors and manufacturers. Every product comes with valid manufacturer warranties and proper documentation. We have strict quality control measures to ensure authenticity.",
    },
    {
      id: 4,
      category: "General",
      question: "Do you offer installation services?",
      answer:
        "Yes, we offer professional installation services for most of our products including air conditioners, washing machines, TVs, and other appliances. You can add installation service during checkout for an additional fee. Our certified technicians will ensure proper installation and provide basic usage guidance.",
    },
    {
      id: 5,
      category: "General",
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team 24/7 through multiple channels: Call us at +91 1234 567 890, email us at support@inoxsecure.com, use the live chat feature on our website/app, or visit our Help Center for instant answers to common questions.",
    },
    {
      id: 6,
      category: "General",
      question: "Do you have a mobile app?",
      answer:
        "Yes! Our mobile app is available for both Android and iOS devices. You can download it from Google Play Store or Apple App Store. The app offers exclusive deals, faster checkout, real-time order tracking, and push notifications for offers and order updates.",
    },

    // Orders & Payment
    {
      id: 7,
      category: "Orders & Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods for your convenience: Credit/Debit Cards (Visa, MasterCard, American Express, RuPay), Net Banking from all major banks, UPI payments (Google Pay, PhonePe, Paytm, etc.), Digital Wallets (Paytm, Amazon Pay, etc.), EMI options, and Cash on Delivery (COD) for eligible orders.",
    },
    {
      id: 8,
      category: "Orders & Payment",
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "Yes, you can modify or cancel your order within 30 minutes of placement, provided it hasn't been dispatched from our warehouse. To modify or cancel, go to 'My Orders' in your account or contact our customer support immediately. Once the order is dispatched, you can only return it as per our return policy.",
    },
    {
      id: 9,
      category: "Orders & Payment",
      question: "Do you offer EMI options?",
      answer:
        "Yes, we offer EMI options on most products above ₹3,000. You can choose from 3, 6, 9, 12, 18, and 24-month EMI plans. EMI is available on credit cards from major banks and through digital lending partners. The EMI amount and interest rates vary based on the bank and tenure selected.",
    },
    {
      id: 10,
      category: "Orders & Payment",
      question: "Is it safe to make payments on your website?",
      answer:
        "We use industry-standard SSL encryption and are PCI DSS compliant to ensure your payment information is completely secure. We partner with trusted payment gateways and never store your complete card details on our servers. All transactions are processed through secure, encrypted channels.",
    },
    {
      id: 11,
      category: "Orders & Payment",
      question: "Why was my payment declined?",
      answer:
        "Payment declines can happen due to various reasons: Insufficient funds, incorrect card details, expired card, bank security restrictions, daily transaction limits exceeded, or technical issues. Please verify your payment details and try again. If the problem persists, contact your bank or try an alternative payment method.",
    },

    // Shipping & Delivery
    {
      id: 12,
      category: "Shipping & Delivery",
      question: "How fast is your delivery?",
      answer:
        "We offer multiple delivery options: Express Delivery (10-15 minutes) for select products in certain areas, Standard Delivery (same day to 3 days) depending on your location and product, and Scheduled Delivery where you can choose a specific time slot. Delivery times may vary based on product availability and location.",
    },
    {
      id: 13,
      category: "Shipping & Delivery",
      question: "What are the delivery charges?",
      answer:
        "Delivery charges are: FREE for orders above ₹499, ₹49 for orders below ₹499, and an additional ₹20 for Express Delivery (10-15 minutes) when available. Special delivery charges may apply for large appliances or remote locations. Current delivery charges are displayed at checkout.",
    },
    {
      id: 14,
      category: "Shipping & Delivery",
      question: "How can I track my order?",
      answer:
        "You can track your order in real-time through: Our mobile app or website by logging into your account and visiting 'My Orders', SMS updates sent to your registered mobile number, email notifications with tracking details, or by calling our customer support with your order number.",
    },
    {
      id: 15,
      category: "Shipping & Delivery",
      question: "What if I'm not available during delivery?",
      answer:
        "If you're not available during delivery, our delivery partner will attempt to contact you. You can reschedule the delivery for a convenient time through our app/website or by calling customer support. For high-value items, we may require ID verification and cannot leave packages unattended.",
    },

    // Returns & Exchanges
    {
      id: 16,
      category: "Returns & Exchanges",
      question: "What is your return policy?",
      answer:
        "We offer a 7-day return policy for most products from the date of delivery. Items must be unused, in original packaging with all accessories, tags, and warranty cards. We provide free pickup from your doorstep. Refunds are processed within 7-10 business days after we receive and inspect the returned item.",
    },
    {
      id: 17,
      category: "Returns & Exchanges",
      question: "How do I return a product?",
      answer:
        "To return a product: Log into your account and go to 'My Orders', select the item you want to return and click 'Return Item', choose your reason for return and schedule a pickup, pack the item securely in original packaging, and hand it over to our delivery partner during pickup. You'll receive a pickup receipt for your records.",
    },
    {
      id: 18,
      category: "Returns & Exchanges",
      question: "Can I exchange a product instead of returning it?",
      answer:
        "Yes, we offer exchanges for size, color, or model variations within 7 days of delivery, subject to availability. The exchange item must be of equal or higher value. If there's a price difference, you'll need to pay the additional amount or receive a refund for the difference.",
    },
    {
      id: 19,
      category: "Returns & Exchanges",
      question: "What if I receive a damaged or defective product?",
      answer:
        "If you receive a damaged or defective product, please don't accept the delivery if the package appears damaged. If you've already accepted it, report the issue within 24 hours by contacting customer support with photos of the damage. We'll arrange for immediate replacement at no extra cost.",
    },

    // Products & Warranty
    {
      id: 20,
      category: "Products & Warranty",
      question: "Do products come with warranty?",
      answer:
        "Yes, all products come with manufacturer warranties. Warranty periods vary by product and brand - typically 1-2 years for electronics and appliances. Warranty covers manufacturing defects and malfunctions under normal usage. Extended warranty plans are also available for purchase on select products.",
    },
    {
      id: 21,
      category: "Products & Warranty",
      question: "How do I claim warranty for a product?",
      answer:
        "To claim warranty: Contact the manufacturer's customer service (details provided with the product), or reach out to our customer support for assistance. Keep your purchase invoice and warranty card safe as they're required for warranty claims. We'll help coordinate with the manufacturer for repairs or replacements.",
    },
    {
      id: 22,
      category: "Products & Warranty",
      question: "Can I get product demonstrations or technical support?",
      answer:
        "Yes, we provide product demonstrations for select high-value items during delivery/installation. Our customer support team can also provide basic technical guidance. For detailed technical support, you can contact the manufacturer's support team or refer to the product manual and online resources.",
    },

    // Account & Technical
    {
      id: 23,
      category: "Account & Technical",
      question: "How do I create an account or reset my password?",
      answer:
        "To create an account, click 'Sign Up' on our homepage and provide your email, phone number, and create a password. To reset your password, click 'Forgot Password' on the login page, enter your email/phone number, and follow the instructions sent to you. You can also sign up/login using your Google or Facebook account.",
    },
    {
      id: 24,
      category: "Account & Technical",
      question: "Why is the website/app running slowly or not working?",
      answer:
        "If you're experiencing technical issues: Check your internet connection, clear your browser cache and cookies, try using a different browser or device, update your app to the latest version, or restart your device. If problems persist, contact our technical support team for assistance.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-transparent">
        <div className="flex flex-col items-center text-center mb-16 px-10 py-10 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white max-w-3xl">
            Find quick answers to common questions about our products, services,
            and policies
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 px-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-lg border text-center transition-all duration-200 hover:shadow-md ${
                  selectedCategory === category.name
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-gray-200 hover:border-primary"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-medium text-sm">{category.name}</div>
                <div className="text-xs opacity-75">
                  {category.count} questions
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "All" ? "All Questions" : selectedCategory}
            </h2>
            <span className="text-gray-500">
              {filteredFAQs.length} question
              {filteredFAQs.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No questions found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get instant help from our support team
            </p>
            <Button className="w-full">Start Chat</Button>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Speak directly with our team
            </p>
            <Button variant="outline" className="w-full">
              <a href="tel:+91 9680849577">Call Now</a>
            </Button>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">Send us your questions</p>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </Link>
          </div>
        </div>

        {/* Still Need Help */}
        {/* <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our customer support team
            is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </Button>
            </Link>
            <Link href="/help">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 flex items-center gap-2"
              >
                <Clock className="h-4 w-4" />
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div> */}

        {/* Support Hours */}
        {/* <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            Support Availability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600">24/7 Available</p>
              <p className="text-xs text-gray-500">+91 1234 567 890</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600">24/7 Available</p>
              <p className="text-xs text-gray-500">Instant responses</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-gray-600">Response within 24 hours</p>
              <p className="text-xs text-gray-500">support@inoxsecure.com</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
