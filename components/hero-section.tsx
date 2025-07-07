"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/hero/hero1.png", // Fixed: Remove "./public" and use just "/"
    alt: "Machine Zone Electronics Sale",
    link: "",
  },
  {
    id: 2,
    image: "/hero/hero2.png", // Fixed: Remove "./public" and use just "/"
    alt: "Fashion Frenzy Collection",
    link: "",
  },
  {
    id: 3,
    image: "/hero/hero3.png", // Fixed: Remove "./public" and use just "/"
    alt: "Home Furnishing Paradise",
    link: "",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-x-0 z-10"
                : index < currentSlide
                ? "-translate-x-full z-0"
                : "translate-x-full z-0"
            }`}
          >
            <Link href={slide.link} className="block w-full h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
