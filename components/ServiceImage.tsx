"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* desktop banners */
const desktopBanners = [
  { id: 1, src: "/ac.png",  alt: "Promo AC"  },
  { id: 2, src: "/car.png", alt: "Promo Car" },
];

/* mobile carousel images (3) */
const mobileSlides = [
  { id: 1, src: "/mobile/ac-mobile.png",  alt: "Mobile AC"   },
  { id: 2, src: "/mobile/car-mobile.png", alt: "Mobile Car"  },
  { id: 3, src: "/mobile/dog-mobile.png",alt: "Mobile Dog" },
];

export default function PromoSection() {
  const [slide, setSlide] = useState(0);

  /* auto‑rotate every 5 s */
  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % mobileSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setSlide((p) => (p + 1) % mobileSlides.length);
  const prev = () => setSlide((p) => (p - 1 + mobileSlides.length) % mobileSlides.length);

  return (
    <section className="w-full px-2">
      {/* desktop / tablet */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-2">
        {desktopBanners.map((b) => (
          <div
            key={b.id}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-lg"
          >
            <Image
              src={b.src}
              alt={b.alt}
              fill
              className="object-contain"
              sizes="50vw"
              priority={b.id === 1}
            />
          </div>
        ))}
      </div>

      {/* mobile carousel */}
      <div className="sm:hidden relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        {mobileSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              i === slide
                ? "translate-x-0 z-10"
                : i < slide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </button>

        {/* dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {mobileSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2 h-2 rounded-full ${
                i === slide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
