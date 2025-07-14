"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  { id: 2, image: "/Artboard 4.png", alt: "Fashion Frenzy", link: "/services" },
  { id: 3, image: "/Artboard 5.png", alt: "Home Furnish", link: "/services" },
  { id: 4, image: "/Artboard 6.png", alt: "New Collection", link: "/services" },
  { id: 5, image: "/Artboard 11.png", alt: "Delivery", link: "/services" },
  { id: 6, image: "/Artboard 12.png", alt: "Flavours", link: "/services" },
];

export function ElectronicsBannerSection() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]} // ① register modules
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // ② auto‑scroll
        navigation                           // ③ show prev / next arrows
      >
        {heroSlides.map((s) => (
          <SwiperSlide key={s.id}>
            <Link href={s.link} className="block relative w-full aspect-[16/9]">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                className="object-contain rounded-lg"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority={s.id === 2}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
