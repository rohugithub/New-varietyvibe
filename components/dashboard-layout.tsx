import type React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserNav } from "@/components/user-nav";
import { ResizableSidebar } from "@/components/resizable-sidebar";
import { SidebarProvider } from "@/components/sidebar-context";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/VarietyVibesLogo-white.png";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4 bg-[#b74d80e0]">
            <div className="flex items-center gap-2 ">
              <MobileSidebar />
              <Link href="/dashboard" className="hidden sm:inline-block">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={96} // 16 * 4 (Tailwind's rem base)
                  height={96}
                />
              </Link>
              {/* <Link href="/dashboard">
                <span className="hidden font-bold sm:inline-block">
                  Admin Dashboard
                </span>
              </Link> */}
            </div>
            <div className="flex items-center gap-2">
              <UserNav user={session.user} />
            </div>
          </div>
        </header>

        <div className="flex flex-1 min-h-0">
          {/* Sticky Sidebar */}
          <div className="sticky top-16 h-[calc(100vh-4rem)] z-30">
            <ResizableSidebar />
          </div>

          {/* Scrollable Main Content */}
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
