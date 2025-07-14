"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

/* desktop banners */
const desktopBanners = [
  { id: 1, src: "/ac.png", alt: "Promo AC" },
  { id: 2, src: "/car.png", alt: "Promo Car" },
];

/* mobile slider banners */
const mobileSlides = [
  { id: 1, src: "/mobile/ac-mobile.png", alt: "Mobile AC" },
  { id: 2, src: "/mobile/car-mobile.png", alt: "Mobile Car" },
  { id: 3, src: "/mobile/dog-mobile.png", alt: "Mobile Dog" },
];

export default function PromoSection() {
  return (
     <section className="w-full px-2">
      {/* 👨‍💻 Desktop view (grid) */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-2">
        {desktopBanners.map((b) => (
          <Link           /* ← wrap with Link */
            key={b.id}
            href="/services"        /* <-- go to /services */
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
          </Link>
        ))}
      </div>

      {/* 📱 Mobile view (swiper) */}
      <div className="sm:hidden relative w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg aspect-[16/9]"
        >
          {mobileSlides.map((s) => (
            <SwiperSlide key={s.id} className="relative w-full h-full">
              <Link href="/services" className="block w-full h-full">  {/* link */}
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
