import { notFound } from "next/navigation"

import { ProductsClient } from "@/components/ProductsClient"
import { connectDB } from "@/lib/mongodb"
import { Product } from "@/models/Product"
import { Category } from "@/models/Category"
import { Brand } from "@/models/Brand"

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: any
}

async function getCategoryProducts(categorySlug: string, searchParams: any) {
  await connectDB()

  // Find category by name (case insensitive)
  const category = await Category.findOne({
    name: { $regex: new RegExp(`^${categorySlug}$`, "i") },
  })

  if (!category) {
    return null
  }

  const query: any = { status: "active", category: category._id }

  if (searchParams.brand) {
    query.brand = searchParams.brand
  }

  const products = await Product.find(query).populate("category").populate("brand").limit(20).lean()

  return {
    products: JSON.parse(JSON.stringify(products)),
    category: JSON.parse(JSON.stringify(category)),
  }
}

async function getFilters() {
  await connectDB()

  const categories = await Category.find({ isActive: true }).lean()
  const brands = await Brand.find({ isActive: true }).lean()

  return {
    categories: JSON.parse(JSON.stringify(categories)),
    brands: JSON.parse(JSON.stringify(brands)),
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const data = await getCategoryProducts(params.category, searchParams)

  if (!data) {
    notFound()
  }

  const filters = await getFilters()

  return (
    <div className="min-h-screen bg-gray-50">
   
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold capitalize">{data.category.name}</h1>
            <p className="text-gray-600">{data.category.description}</p>
          </div>
          <ProductsClient
            initialProducts={data.products}
            categories={filters.categories}
            brands={filters.brands}
            currentCategory={data.category.slug} // ✅ SLUG not _id
          />
        </div>
      </main>
    </div>
  )
}


export async function generateStaticParams() {
  await connectDB()
  const categories = await Category.find({ isActive: true }).lean()

  return categories.map((category) => ({
    category: category.name.toLowerCase(),
  }))
}
