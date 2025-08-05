"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { ProductQuickView } from "./ProductQuickView";
import { useProductAction } from "@/contexts/ProductActionContext";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    slug: string;
    images: Array<{ url: string; altText?: string }>;
    variants: Array<{
      _id: string;
      title: string;
      price: number;
      compareAtPrice?: number;
      inventoryQuantity: number;
    }>;
    isHotDeal?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showProductAction } = useProductAction();

  const mainVariant = product.variants[0];
  const isInWishlistState = isInWishlist(product._id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      productId: product._id,
      variantId: mainVariant._id,
      name: product.title,
      price: mainVariant.price,
      image: product.images[0]?.url || "",
      quantity: 1,
    });

    // Show the big product action toast
    showProductAction(
      {
        _id: product._id,
        title: product.title,
        slug: product.slug,
        price: mainVariant.price,
        compareAtPrice: mainVariant.compareAtPrice,
        image: product.images[0]?.url || "",
        quantity: 1,
      },
      "cart"
    );
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlistState) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist({
        id: product._id,
        productId: product._id,
        name: product.title,
        price: mainVariant.price,
        compareAtPrice: mainVariant.compareAtPrice,
        image: product.images[0]?.url || "",
        inStock: mainVariant.inventoryQuantity > 0,
      });

      // Show the big product action toast for wishlist
      showProductAction(
        {
          _id: product._id,
          title: product.title,
          slug: product.slug,
          price: mainVariant.price,
          compareAtPrice: mainVariant.compareAtPrice,
          image: product.images[0]?.url || "",
        },
        "wishlist"
      );
    }
  };

  return (
    <>
      <div className="group relative rounded-lg border w-full h-[380px] overflow-hidden border-gray-200 hover:shadow-lg transition-shadow duration-300 max-w-2xl">
        {product.isHotDeal && (
          <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Trending
          </Badge>
        )}

        <Link href={`/products/${product.slug}`}>
          <div className="aspect-[1/1] relative overflow-hidden rounded-t-lg">
            {/* Wishlist button on top right */}
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  isInWishlistState ? "text-red-500" : "text-gray-400"
                } hover:text-red-500`}
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isInWishlistState ? "fill-current" : ""
                  }`}
                />
              </Button>
            </div>

            <Image
              src={product.images[0]?.url || "/placeholder.svg"}
              alt={product.images[0]?.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        <div className="p-4">
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-md  font-medium text-gray-900 mb-1 line-clamp-2 ">
              {product.title}
            </h3>
          </Link>

          {/* Star Rating + Reviews */}
          <div className="flex items-center text-yellow-500 text-sm mb-2">
            {[...Array(Math.round(product.rating || 4))].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.134 3.49a1 1 0 00.95.69h3.671c.969 0 1.371 1.24.588 1.81l-2.971 2.16a1 1 0 00-.364 1.118l1.134 3.49c.3.921-.755 1.688-1.54 1.118l-2.971-2.16a1 1 0 00-1.175 0l-2.971 2.16c-.784.57-1.838-.197-1.54-1.118l1.134-3.49a1 1 0 00-.364-1.118l-2.971-2.16c-.784-.57-.38-1.81.588-1.81h3.671a1 1 0 00.95-.69l1.134-3.49z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">
              ({product.reviews || 267})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-[#d8689e] font-semibold text-md">
              ₹{mainVariant.price.toLocaleString()}
            </span>
            {mainVariant.compareAtPrice && (
              <span className="text-sm text-[#d8689e9a] line-through ml-2">
                ₹{mainVariant.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
