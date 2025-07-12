"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ImageIcon, Eye, Grid3X3, List } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { DeleteAlertDialog } from "@/components/delete-alert-dialog"
import { ProductImportExport } from "@/components/product-import-export"
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")
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

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold leading-12">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/products/all">
              <Grid3X3 className="h-4 w-4 mr-2" />
              View All
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/products/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      {/* Import/Export Section */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Import & Export</CardTitle>
          <CardDescription>Import products from Excel files or export your current products to Excel</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductImportExport />
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Products</CardTitle>
              <CardDescription>Your latest products and their status</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "table" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Inventory</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.slice(0, 10).map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0].url || "/placeholder.svg"}
                          alt={product.images[0].altText || product.title}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {product.category?.name} • {product.brand?.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "active" ? "default" : product.status === "draft" ? "secondary" : "outline"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {product.variants?.reduce((total, variant) => total + variant.inventoryQuantity, 0) || 0} in stock
                    </TableCell>
                    <TableCell>{product.productType || "—"}</TableCell>
                    <TableCell>{product.vendor || "—"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/products/${product._id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/products/${product._id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setDeleteDialog({ open: true, product })}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.slice(0, 9).map((product) => (
                <Card key={product._id} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0].url || "/placeholder.svg"}
                          alt={product.images[0].altText || product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium line-clamp-1">{product.title}</h3>
                        <Badge
                          variant={
                            product.status === "active"
                              ? "default"
                              : product.status === "draft"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {product.variants?.reduce((total, variant) => total + variant.inventoryQuantity, 0) || 0} in
                          stock
                        </span>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/products/${product._id}`}>
                              <Eye className="h-3 w-3" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/products/${product._id}/edit`}>
                              <Edit className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {products.length > (viewMode === "table" ? 10 : 9) && (
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/products/all">View All {products.length} Products</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

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
