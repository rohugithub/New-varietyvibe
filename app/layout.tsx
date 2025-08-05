import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { ShowFooter } from "@/components/ShowFooter"; // ⬅️ new
import { ShowHeader } from "@/components/ShowHeader"; // ⬅️ new

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Variety Vibes - Your Online Shopping Destination",
  description:
    "It is a local search‑engine platform. You can search for businesses and skilled artisans around you and buy daily‑use items.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ShowHeader />
          {children}
          <Toaster />
          <ShowFooter />   {/* Footer hidden on /dashboard routes */}
        </Providers>
      </body>
    </html>
  );
}
