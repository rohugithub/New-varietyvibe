// app/components/ShowFooter.tsx
"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function ShowFooter() {
  const pathname = usePathname();
  const show = !pathname.startsWith("/dashboard"); // true on all pages except dashboard
  return show ? <Footer /> : null;
}
