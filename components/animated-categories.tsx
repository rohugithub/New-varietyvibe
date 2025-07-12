"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
  slug: string;
  subcategories: string[];
  color: string;
  gradient: string;
  icon: React.ReactNode;
  trending?: boolean;
}

export default function AnimatedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      image: "/cate1.png",
      count: 24,
      slug: "electronics",
      subcategories: [
        "LED TV",
        "Washing Machine",
        "Air Conditioner",
        "Refrigerator",
      ],
      color: "#3B82F6",
      gradient: "from-blue-500 to-purple-600",
      icon: <Sparkles className="h-6 w-6" />,
      trending: true,
    },
    {
      id: 2,
      name: "Appliances",
      image: "/cate3.png",
      count: 18,
      slug: "appliances",
      subcategories: [
        "Mixer Grinder",
        "Iron",
        "Microwave Oven",
        "Vacuum Cleaner",
      ],
      color: "#10B981",
      gradient: "from-green-500 to-blue-600",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: 3,
      name: "IT Products",
      image: "/cate2.png",
      count: 15,
      slug: "it-products",
      subcategories: ["Mobile Phones", "Laptops", "Tablets", "Accessories"],
      color: "#F59E0B",
      gradient: "from-orange-500 to-red-600",
      icon: <Sparkles className="h-6 w-6" />,
      trending: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-6 md:py-20 lg:py-20 px-14 bg-[#dbeafe34]">
      <div className="container px-2 md:px-6">
        {/* Static Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
         

          <div className="space-y-4">
            <h2 className="text-xl md:text-4xl font-medium text-[#efa46edb] tracking-tighter ">
              Shop by Category
            </h2>
            <p className="max-w-[700px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              Discover amazing products across our carefully curated categories
              with exclusive deals and fast delivery
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative"
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ y: -10 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.2,
                duration: 0.6,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href={`/${category.slug}`}>
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Trending badge */}
                  {category.trending && (
                    <motion.div
                      className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      🔥 Trending
                    </motion.div>
                  )}

                  {/* Background gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  />

                  {/* Static Image container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="relative h-full w-full">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-fill"
                      />

                      {/* Animated overlay on hover only */}
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      style={{ color: category.color }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        backgroundColor: category.color,
                        color: "white",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                  </div>

                  {/* Static Content section */}
                  <div className="p-8 relative">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {category.name}
                        </h3>
                        <motion.div
                          className="flex items-center text-sm font-medium text-gray-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          {/* <span className="bg-gray-100 px-3 py-1 rounded-full">
                            {category.count}+ products
                          </span> */}
                        </motion.div>
                      </div>

                      {/* Static subcategories */}
                      {/* <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <span
                                key={subcategory}
                                className="text-xs bg-gray-50 hover:bg-blue-50 px-3 py-1 rounded-full text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                              >
                                {subcategory}
                              </span>
                            )
                          )}
                        </div>
                      </div> */}

                      {/* Static CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          Explore collection
                        </span>
                        <motion.div
                          className="flex items-center text-blue-600 font-medium"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Link href="/products">
                            <span className="mr-2">Shop Now</span>
                          </Link>
                         
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover effect particles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Static bottom CTA */}
        {/* <div className="flex justify-center mt-16">
          <motion.div
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center">
              View All Categories
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </span>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}