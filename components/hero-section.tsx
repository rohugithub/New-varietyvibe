"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* desktop images */
const heroSlides = [
  { id: 1,  image: "/hero/hero1.png",  mobile: "/mobile/Mobile (1).png",  alt: "Machine Zone",   link: "/products" },
  { id: 2,  image: "/hero/hero2.png",  mobile: "/mobile/Mobile (2).png",  alt: "Fashion Frenzy", link: "/products" },
  { id: 3,  image: "/hero/hero3.png",  mobile: "/mobile/Mobile (3).png",  alt: "Home Furnish",   link: "/products" },
// reuse if only 10 mobile imgs
];

/* helper: detect mobile */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handle = () => setMobile(mq.matches);
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  return mobile;
}

export function HeroSection() {
  const isMobile = useIsMobile();

  const [current, setCurrent] = useState(0);
  const len = heroSlides.length;

  /* autoplay */
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % len), 5000);
    return () => clearInterval(t);
  }, [len]);

  const next  = () => setCurrent((p) => (p + 1) % len);
  const prev  = () => setCurrent((p) => (p - 1 + len) % len);
  const goto  = (i: number) => setCurrent(i);

  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative w-full h-[340px] md:h-[435]px] lg:h-[520px]">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              i === current ? "translate-x-0 z-10"
              : i < current ? "-translate-x-full z-0"
              : "translate-x-full z-0"
            }`}
          >
            <Link href={s.link} className="block w-full h-full">
              <Image
                src={isMobile ? s.mobile : s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* arrows */}
      <button onClick={prev}  className="absolute left-4  top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg z-20">
        <ChevronLeft  className="h-6 w-6 text-gray-800" />
      </button>
      <button onClick={next}  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full p-3 shadow-lg z-20">
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            aria-label={`slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
