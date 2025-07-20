"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo-white.png";
interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "admin" | "agent" | "merchant";
}

export default function DashboardLayout({
  children,
  role,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  // Update the getNavItems function to include coupon management
  const getNavItems = () => {
    switch (role) {
      case "admin":
        return [
          { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
          { href: "/admin/agents", label: "Agents", icon: Users },
          { href: "/admin/merchants", label: "Merchants", icon: Users },
          { href: "/admin/coupons", label: "Coupons", icon: CreditCard },
          { href: "/admin/reports", label: "Reports", icon: FileText },
        ];
      case "agent":
        return [
          { href: "/agent", label: "Dashboard", icon: LayoutDashboard },
          { href: "/agent/merchants", label: "My Merchants", icon: Users },
          { href: "/agent/deposits", label: "Deposits", icon: CreditCard },
          { href: "/agent/coupons", label: "Coupons", icon: CreditCard },
          {
            href: "/agent/reports/collections",
            label: "Reports",
            icon: FileText,
          },
        ];
      case "merchant":
        return [
          { href: "/merchant", label: "Dashboard", icon: LayoutDashboard },
          {
            href: "/merchant/transactions",
            label: "Transactions",
            icon: FileText,
          },
          { href: "/merchant/deposits", label: "Deposits", icon: CreditCard },
          { href: "/merchant/coupons", label: "Coupons", icon: CreditCard },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 bg-blue-600">
          <div className="flex items-center gap-2 ">
            <Link href="/dashboard" className="hidden sm:inline-block">
              <Image
                src={Logo}
                alt="Logo"
                width={96} // 16 * 4 (Tailwind's rem base)
                height={96}
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}

        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <h1 className="text-xl font-bold capitalize">{role} Panel</h1>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <nav className="mt-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 w-full p-6">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16 px-6 bg-white border-b lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            <h1 className="text-lg font-semibold capitalize">
              {role} Dashboard
            </h1>
          </div>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
}
