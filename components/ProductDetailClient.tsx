"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Phone, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishlistContext"
import { useProductAction } from "@/contexts/ProductActionContext"
import { ProductCard } from "./ProductCard"

interface ProductDetailClientProps {
  product: any
  relatedProducts: any[]
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { showProductAction } = useProductAction()

  const handleAddToCart = () => {
    addToCart({
      productId: product._id,
      variantId: selectedVariant._id,
      name: product.title,
      price: selectedVariant.price,
      image: product.images[0]?.url || "",
      quantity,
    })

    // Show the big product action toast
    showProductAction(
      {
        _id: product._id,
        title: product.title,
        slug: product.slug,
        price: selectedVariant.price,
        compareAtPrice: selectedVariant.compareAtPrice,
        image: product.images[0]?.url || "",
        quantity,
      },
      "cart",
    )
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id)
    } else {
      addToWishlist({
        id: product._id,
        productId: product._id,
        name: product.title,
        price: selectedVariant.price,
        compareAtPrice: selectedVariant.compareAtPrice,
        image: product.images[0]?.url || "",
        inStock: selectedVariant.inventoryQuantity > 0,
      })

      // Show the big product action toast for wishlist
      showProductAction(
        {
          _id: product._id,
          title: product.title,
          slug: product.slug,
          price: selectedVariant.price,
          compareAtPrice: selectedVariant.compareAtPrice,
          image: product.images[0]?.url || "",
        },
        "wishlist",
      )
    }
  }

  const discountPercentage = selectedVariant.compareAtPrice
    ? Math.round((1 - selectedVariant.price / selectedVariant.compareAtPrice) * 100)
    : 0

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span>{product.category?.name}</span> /{" "}
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-white rounded-lg border overflow-hidden">
              <Image
                src={product.images[selectedImage]?.url || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />
              {product.isHotDeal && <Badge className="absolute top-4 left-4 bg-red-500 text-white">Hot Deal</Badge>}
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative bg-white rounded border overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-[#0042adef]" : ""
                    }`}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5) 124 Reviews</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              {product.brand && (
                <p className="text-gray-600">
                  Brand: <span className="font-medium">{product.brand.name}</span>
                </p>
              )}
            </div>

            {/* Variant Selection */}
            {product.variants.length > 1 && (
              <div className="space-y-3">
                <h3 className="font-medium">Select Variant:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant: any) => (
                    <button
                      key={variant._id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                        selectedVariant._id === variant._id
                          ? "border-[#0042adef] bg-[#0042adef] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {variant.title} - ₹{variant.price.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">₹{selectedVariant.price.toLocaleString()}</span>
              {selectedVariant.compareAtPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{selectedVariant.compareAtPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive" className="text-sm">
                    {discountPercentage}% OFF
                  </Badge>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gray-700">Availability:</span>
                <Badge variant={selectedVariant.inventoryQuantity > 0 ? "default" : "destructive"} className="ml-2">
                  {selectedVariant.inventoryQuantity > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-700">Delivery:</span>
                <span className="ml-2 text-sm text-green-600">10-15 days</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1 border-x">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-[#0042adef] hover:bg-[#0042ad] text-white"
                onClick={handleAddToCart}
                disabled={selectedVariant.inventoryQuantity === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="lg" className="w-full bg-transparent" onClick={handleWishlistToggle}>
                <Heart className={`h-5 w-5 mr-2 ${isInWishlist(product._id) ? "fill-current text-red-500" : ""}`} />
                {isInWishlist(product._id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm">Free delivery on orders above ₹499</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-orange-600" />
                <span className="text-sm">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Product Features</h3>
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>High-quality construction and materials</li>
                    <li>Advanced technology integration</li>
                    <li>Energy efficient operation</li>
                    <li>User-friendly interface</li>
                    <li>Comprehensive warranty coverage</li>
                    <li>Professional installation support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">General</h4>
                    <dl className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <dt>Brand:</dt>
                        <dd>{product.brand?.name || "INOX"}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Model:</dt>
                        <dd>{product.handle.toUpperCase()}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Category:</dt>
                        <dd>{product.category?.name}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Variants</h4>
                    <dl className="space-y-1 text-sm">
                      {product.variants.map((variant: any, index: number) => (
                        <div key={variant._id} className="flex justify-between">
                          <dt>{variant.title}:</dt>
                          <dd>₹{variant.price.toLocaleString()}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Customer {review}</span>
                        <span className="text-sm text-gray-500">{review} days ago</span>
                      </div>
                      <p className="text-gray-700">
                        Great product with excellent quality. Easy to use and the delivery was fast. Highly recommended!
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
