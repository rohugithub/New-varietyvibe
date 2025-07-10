"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ChevronDown,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { CartSidebar } from "./CartSidebar";
import { AuthModal } from "./AuthModal";
import { useSession } from "next-auth/react";
import Logo from "@/public/logo/Inoxsecurelogowhite.png";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const { state: cartState } = useCart();
  const { state: wishlistState } = useWishlist();
  const { data: session } = useSession();

  // Handle animated cart open
  const handleCartClick = () => {
    if (!isCartOpen) {
      setIsCartAnimating(true);
      setIsCartOpen(true);
    }
  };

  const handleCartClose = () => {
    setIsCartAnimating(false);
    setTimeout(() => setIsCartOpen(false), 300);
  };

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  return (
    <>
      <header className="bg-[#0042ad] text-white sticky top-0 z-40">
        <div className="bg-white w-full py-3 px-10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between text-sm text-black">
              {/* <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>Delivery to:</span>
              <button className="flex items-center font-medium underline">
                Your Location
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div> */}
              <div className="hidden md:block">
                <span className="font-medium">
                  Get products delivered in minutes!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-8 w-8 text-gray-700" />
                  ) : (
                    <Menu className="h-8 w-8 text-gray-700" />
                  )}
                </Button>
              </div>

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-20 w-32 ">
                  <Image
                    src={Logo}
                    alt="Variety Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
              <Link href="/electronics" className="hover:text-blue-200">
                Electronics
              </Link>
              <Link href="/appliances" className="hover:text-blue-200">
                Appliances
              </Link>
              <Link href="/it-products" className="hover:text-blue-200">
                IT Products
              </Link>
              <Link href="/products" className="hover:text-blue-200">
                All Products
              </Link>
              <Link href="/services" className="hover:text-blue-200">
                Services
              </Link>
            </nav>

            {/* Search */}

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCartClick}
                className="relative text-white hover:bg-blue-600 hover:scale-105 transition-all duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartState.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {cartState.itemCount}
                  </Badge>
                )}
              </Button>

              {/* Wishlist */}
              <Link href="/wishlist">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:bg-blue-600"
                >
                  <Heart className="h-5 w-5" />
                  {wishlistState.itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                      {wishlistState.itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Account / Login */}
              {session ? (
                <Link href="/account">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-blue-600"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-blue-600"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <User className="h-5 w-5" />
                </Button>
              )}

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-600 animate-in slide-in-from-top-2">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-white text-black border-0"
                  />
                </div>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
                <Link href="/electronics" className="hover:text-blue-200">
                  Electronics
                </Link>
                <Link href="/appliances" className="hover:text-blue-200">
                  Appliances
                </Link>
                <Link href="/it-products" className="hover:text-blue-200">
                  IT Products
                </Link>
                <Link href="/products" className="hover:text-blue-200">
                  All Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Cart Sidebar with animation */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
              isCartAnimating ? "opacity-50" : "opacity-0"
            }`}
            onClick={handleCartClose}
          />

          {/* Sidebar */}
          <CartSidebar isOpen={isCartAnimating} onClose={handleCartClose} />
        </>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
