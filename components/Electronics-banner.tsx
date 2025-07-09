"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/256.jpg",
    alt: "Machine Zone Electronics Sale",
    link: "/products",
  },
  {
    id: 2,
    image: "/256.jpg",
    alt: "Fashion Frenzy Collection",
    link: "/products",
  },
  {
    id: 3,
    image: "/256.jpg",
    alt: "Home Furnishing Paradise",
    link: "/products",
  },
  {
    id: 4,
    image: "/256.jpg",
    alt: "New Collection",
    link: "/products",
  },
  {
    id: 5,
    image: "/256.jpg",
    alt: "Tech Deals",
    link: "/products",
  },
];

const itemsPerView = 3;

export function ElectronicsBannerSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = Math.ceil(heroSlides.length / itemsPerView) - 1;

  const nextPage = () => {
    setCurrentPage((prev) => (prev === maxPage ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? maxPage : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextPage();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentPage]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            width: `${Math.ceil(heroSlides.length / itemsPerView) * 100}%`,
          }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-2 flex-shrink-0"
            >
              <Link href={slide.link} className="block w-full h-64 relative">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevPage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-2 z-10 shadow"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-2 z-10 shadow"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: maxPage + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentPage ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
