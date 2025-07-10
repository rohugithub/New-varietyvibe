"use client";

import Link from "next/link";
import Image from "next/image";

/* same data */
const heroSlides = [
  { id: 2, image: "/Artboard 4.png", alt: "Fashion Frenzy", link: "/products" },
  { id: 3, image: "/Artboard 5.png", alt: "Home Furnish", link: "/products" },
  { id: 4, image: "/Artboard 6.png", alt: "New Collection", link: "/products" },

];

export function ElectronicsBannerSection() {
  return (
    <section className="w-full px-2">
      {/* 1 col mobile, 2 cols sm, 3 cols lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroSlides.map((s) => (
          <Link
            key={s.id}
            href={s.link}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-lg"
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              className="object-contain"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              priority={s.id === 1}
            />
          </Link>
        ))}
      </div>
    </section>

  );
}
