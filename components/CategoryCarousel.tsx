"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard"

interface CategoryCarouselProps {
  category: string
  showAll?: boolean
}

export function CategoryCarousel({ category, showAll = false }: CategoryCarouselProps) {
  const [products, setProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [category])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/products?category=${category}&limit=${showAll ? 20 : 8}`)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setProducts(data.products)
      }
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products found in this category</p>
      </div>
    )
  }

  const itemsToShow = showAll ? products.length : Math.min(4, products.length)
  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < products.length - itemsToShow

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (showAll) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="h-8 w-8 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="h-8 w-8 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="link" className="text-[#0042adef] p-0">
          View All Products →
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {products.map((product) => (
            <div key={product._id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
