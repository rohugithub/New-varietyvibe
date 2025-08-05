"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

interface Category {
  href: string;
  description: string;
  name: string;
  image: string;
  productCount: string;
  bgGradient: string;
}

export default function AnimatedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      name: "Machine Zone",
      href: "/category/machine-zone",
      description: "Electronics & Technology",
      image: "/category-banner/cat1.png",
      productCount: "2,500+ Products",
      bgGradient: "from-slate-900 to-blue-900",
    },
    {
      name: "Fashion Frenzy",
      href: "/category/fashion-frenzy",
      description: "Clothing & Accessories",
      image: "/category-banner/cat2.png",
      productCount: "3,200+ Products",
      bgGradient: "from-rose-900 to-pink-900",
    },
    {
      name: "Home Furnishing",
      href: "/category/home-furnishing",
      description: "Furniture & Home Decor",
      image: "/category-banner/cat3.png",
      productCount: "1,800+ Products",
      bgGradient: "from-emerald-900 to-green-900",
    },
    {
      name: "BookWorms Paradise",
      href: "/category/bookworms-paradise",
      description: "Books & Literature",
      image: "/category-banner/cat6.png",
      productCount: "5,000+ Products",
      bgGradient: "from-amber-900 to-orange-900",
    },
    {
      name: "Stationary Sanctuary",
      href: "/category/stationary-sanctuary",
      description: "Office & School Supplies",
      image: "/category-banner/cat5.png",
      productCount: "1,200+ Products",
      bgGradient: "from-purple-900 to-violet-900",
    },
    {
      name: "GameSphere",
      href: "/category/gamesphere",
      description: "Gaming & Entertainment",
      image: "/category-banner/cat4.png",
      productCount: "900+ Products",
      bgGradient: "from-red-900 to-rose-900",
    },
  ];

  return (
    <section className="w-full py-6 md:py-20 px-6 lg:px-14 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-5xl text-[#B74D80] font-light tracking-tight leading-tight">
            Explore Our Categories
          </h2>
          <p className="max-w-[700px] text-gray-900 md:text-xl font-light">
            Discover premium products across our carefully curated categories,
            each designed to meet your specific needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {category.name}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {category.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {category.productCount}
                    </span>
                    <span className="text-sm text-primary text-black font-semibold group-hover:text-primary/80 transition-colors">
                      Shop Now →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
