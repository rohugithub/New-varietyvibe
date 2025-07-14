"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Eye, Edit, Trash2, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { DeleteAlertDialog } from "@/components/delete-alert-dialog"
import Link from "next/link"
import Image from "next/image"

interface Product {
  _id: string
  title: string
  description: string
  status: string
  productType: string
  vendor: string
  category: {
    _id: string
    name: string
  }
  brand: {
    _id: string
    name: string
  }
  variants: Array<{
    price: number
    inventoryQuantity: number
  }>
  images: Array<{
    url: string
    altText: string
  }>
  createdAt: string
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean
    product: Product | null
  }>({ open: false, product: null })
  const { toast } = useToast()

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/admin/products")
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteDialog.product) return

    try {
      const response = await fetch(`/api/admin/products/${deleteDialog.product._id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Product deleted successfully",
        })
        fetchProducts()
      } else {
        throw new Error("Failed to delete product")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      })
    } finally {
      setDeleteDialog({ open: false, product: null })
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    return matchesSearch && matchesStatus
  })

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground">Browse and manage your entire product catalog</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/products/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product._id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0].url || "/placeholder.svg"}
                    alt={product.images[0].altText || product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-2 left-2">
                  <Badge
                    variant={
                      product.status === "active" ? "default" : product.status === "draft" ? "secondary" : "outline"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={`/dashboard/products/${product._id}`}>
                        <Eye className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={`/dashboard/products/${product._id}/edit`}>
                        <Edit className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => setDeleteDialog({ open: true, product })}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-muted-foreground">
                    {product.category?.name} • {product.brand?.name}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">
                      ${Math.min(...product.variants.map((v) => v.price)).toFixed(2)}
                      {product.variants.length > 1 && (
                        <span className="text-sm text-muted-foreground"> + {product.variants.length - 1} more</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {product.variants.reduce((sum, v) => sum + v.inventoryQuantity, 0)} in stock
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Get started by creating your first product"}
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Button asChild>
                <Link href="/dashboard/products/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      <DeleteAlertDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog({ open, product: null })}
        onConfirm={handleDelete}
        title="Delete Product"
        description={`Are you sure you want to delete "${deleteDialog.product?.title}"? This action cannot be undone.`}
      />
    </div>
  )
}
