"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Globe2, Phone, Mail, MapPin } from "lucide-react"
import Logo from "@/public/logo/Inoxsecurelogowhite.png";
import Image from "next/image";
import PhonePe from "@/public/Payment-icons/PhonePe.png";
import Cash from "@/public/Payment-icons/cash.png";
import Upi from "@/public/Payment-icons/upi.png";
import Paytm from "@/public/Payment-icons/Paytm.png";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="bg-[#0042adef]">
        <div className="container mx-auto px-4 md:px-16 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-20 w-32 ">
                <Image src={Logo} alt="Variety Logo" fill className="object-contain" />
              </div>
            </Link>
              <p className="text-lg text-blue-100">
                Your trusted partner for premium electronics and appliances, delivered with care and precision.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@inoxstore.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">Shop</h3>
              <ul className="space-y-2 text-lg text-blue-100">
                <li>
                  <Link href="/products" className="hover:text-orange-400 transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/electronics" className="hover:text-orange-400 transition-colors">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/appliances" className="hover:text-orange-400 transition-colors">
                    Appliances
                  </Link>
                </li>
                <li>
                  <Link href="/it-products" className="hover:text-orange-400 transition-colors">
                    IT Products
                  </Link>
                </li>
                <li>
                  <Link href="/hot-deals" className="hover:text-orange-400 transition-colors">
                    🔥 Hot Deals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-medium mb-4 text-orange-400">Quick Links</h3>
              <ul className="space-y-2 text-lg text-blue-100">
                <li>
                  <Link href="/about" className="hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="hover:text-orange-400 transition-colors">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="hover:text-orange-400 transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-orange-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Policy */}
            <div>
              <h3 className="text-2xl text-orange-400 font-medium mb-4">Customer Policy</h3>
              <ul className="space-y-2 text-lg text-blue-100">
                <li>
                  <Link href="/shipping" className="hover:text-orange-400 transition-colors">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-orange-400 transition-colors">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-orange-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-orange-400 transition-colors">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-10 py-6">
            {/* Left section - Country and Shipping */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 text-blue-100">
                <Globe2 className="w-6 h-6" />
                <span className="text-lg">India</span>
              </div>

              <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start text-blue-100">
                <span className="font-bold text-md">FedEx</span>
                <span className="font-bold text-md">
                  <span className="text-blue-400">BLUE</span>
                  <span className="text-yellow-400">DART</span>
                </span>
                <span className="font-bold text-md">DELHIVERY</span>
              </div>
            </div>

            {/* Center section - Copyright */}
            <div className="text-sm sm:text-md text-blue-100 text-center">© 2025 INOX Store. All rights reserved.</div>

            {/* Right section - Payment methods */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2  sm:gap-4 text-white text-center sm:text-left">
            <span className="text-sm sm:text-md whitespace-nowrap mt-3 text-white">
              100% Secure Payments
            </span>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {[Paytm, Cash, Upi, PhonePe].map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded h-10 w-20 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Payment ${i}`}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
