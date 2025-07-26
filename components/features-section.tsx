"use client";

import type React from "react";
import {
  Truck,
  CreditCard,
  Shield,
  RotateCcw,
  Phone,
  Mail,
  Globe2,
} from "lucide-react";

export default function FeatureSection() {
  return(
    <section className="w-full py-12 md:py-16 lg:py-16 bg-[#ffffff] border-t px-10">
    {/* Features Banner */}
      <div className="text-black   font-light py-10 px-8 ">
        <div className="container mx-auto shadow-[0_4px_12px_0_rgba(192,99,143,0.15)] px-5 py-10 rounded-2xl bg-[#e992bc20] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center ">
              <Truck className="w-12 h-12 mb-4 font-light text-[#b74d80e0]" />
              <h3 className="font-medium text-2xl text-black">Free Delivery</h3>
              <p className="text-black text-sm">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black">
                Cash on Delivery
              </h3>
              <p className="text-black text-sm">Pay when you receive</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black ">
                Original Products
              </h3>
              <p className="text-black text-sm">100% authentic items</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black">
                Easy Replacement
              </h3>
              <p className=" text-sm text-black">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}
