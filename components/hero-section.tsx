// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getBannerSections, getMobileBannerSections } from "@/lib/api";

type Slide = {
  _id: string;
  image: string;      // common field in both APIs
  mobile?: string;    // only desktop‑banner docs might have this
  alt?: string;
  link?: string;
};

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const f = () => setM(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return m;
}

export function HeroSection() {
  const isMobile = useIsMobile();

  // keep both lists
  const [desktopSlides, setDesktopSlides] = useState<Slide[]>([]);
  const [mobileSlides, setMobileSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);

  // fetch once
  useEffect(() => {
    (async () => {
      const [desk, mob] = await Promise.all([
        getBannerSections(),
        getMobileBannerSections(),
      ]);
      setDesktopSlides(desk);
      setMobileSlides(mob);
    })();
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;
  const len = slides.length;

  /* auto‑play */
  useEffect(() => {
    if (len === 0) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % len), 7000);
    return () => clearInterval(t);
  }, [len, current]);

  if (len === 0) return null;

  const next = () => setCurrent((p) => (p + 1) % len);
  const prev = () => setCurrent((p) => (p - 1 + len) % len);

  return (
    <section className="relative overflow-hidden w-full">
      {/* track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <Link
            key={s._id}
            href={s.link || "#"}
            className="relative flex-shrink-0 w-full h-[340px] md:h-[435px] lg:h-[520px]"
          >
            <Image
              src={
                isMobile
                  ? s.mobile || s.image // mobile first • fallback to image
                  : s.image
              }
              alt={s.alt || "banner"}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
          </Link>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg z-20"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg z-20"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
