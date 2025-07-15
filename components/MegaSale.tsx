// components/MegaSaleBanner.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  getMegaSaleSections,
  getMobileMegaSaleSections,
} from "@/lib/api";        // adjust path if needed

type Banner = {
  _id: string;
  image: string;   // URL saved in MongoDB
  alt?: string;
};

/* simple hook – detects ≤640 px */
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

export default function MegaSaleBanner() {
  const isMobile = useIsMobile();
  const [desktopBanner, setDesktopBanner] = useState<Banner | null>(null);
  const [mobileBanner, setMobileBanner]   = useState<Banner | null>(null);

  /* fetch once on mount */
  useEffect(() => {
    (async () => {
      const [desk, mob] = await Promise.all([
        getMegaSaleSections(),           // type=mega-sale
        getMobileMegaSaleSections(),     // type=mobile-mega-sale
      ]);

      // we assume each API returns a list; take the first active banner
      setDesktopBanner(desk[0] ?? null);
      setMobileBanner(mob[0] ?? null);
    })();
  }, []);

  const banner = isMobile ? mobileBanner : desktopBanner;
  if (!banner) return null;                  // loading / nothing to show

  return (
    /* wrapper keeps 1900:204 ratio (~9.3:1) so banner scales nicely */
    <section className="w-full px-2">
      <div className="relative w-full aspect-[1900/204] overflow-hidden rounded-lg">
        <Image
          src={banner.image}
          alt={banner.alt || "Mega sale"}
          fill
          className="object-contain"   /* show full artwork, no cropping */
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
