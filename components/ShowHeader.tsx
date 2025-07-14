// app/components/ShowFooter.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function ShowHeader() {
  const pathname = usePathname();
  const show = !pathname.startsWith("/dashboard"); // true on all pages except dashboard
  return show ? <Header /> : null;
}
