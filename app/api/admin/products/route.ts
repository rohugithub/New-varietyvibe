import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Product } from "@/lib/models/Product"

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const products = await Product.find()
      .populate("category", "name")
      .populate("brand", "name")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Product.countDocuments()

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()

    

    // Validate required fields
    if (!body.title || !body.description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 })
    }

    // Handle empty category and brand - convert to null if empty
    if (body.category === "" || body.category === undefined || body.category === "none") {
      delete body.category
    }
    if (body.brand === "" || body.brand === undefined || body.brand === "none") {
      delete body.brand
    }

    // Handle variants - ensure we have proper variant structure
    if (body.options && body.options.length > 0) {
      // If we have options but no variants, or variants don't match options, regenerate them
      if (!body.variants || body.variants.length === 0) {
        
        body.variants = generateVariants(body.options, 0)
      }
    } else if (!body.variants || body.variants.length === 0) {
      // Create a default variant if no options and no variants are provided
      
      body.variants = [
        {
          title: "Default Title",
          price: 0,
          compareAtPrice: null,
          costPerItem: null,
          profit: null,
          margin: null,
          sku: "",
          barcode: "",
          inventoryQuantity: 0,
          trackQuantity: true,
          continueSellingWhenOutOfStock: false,
          weight: 0,
          weightUnit: "kg",
          requiresShipping: true,
          taxable: true,
          images: [],
          optionValues: [],
          isActive: true,
        },
      ]
    }

    

    const product = new Product(body)
    await product.save()

    const populatedProduct = await Product.findById(product._id).populate("category", "name").populate("brand", "name")

    

    return NextResponse.json(populatedProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}

function generateVariants(options: any[], basePrice: number) {
  

  if (options.length === 0) return []

  const combinations = generateCombinations(options)
  

  const variants = combinations.map((combination, index) => ({
    title: combination.map((opt) => opt.value).join(" / "),
    price: basePrice,
    compareAtPrice: null,
    costPerItem: null,
    profit: null,
    margin: null,
    sku: "",
    barcode: "",
    inventoryQuantity: 0,
    trackQuantity: true,
    continueSellingWhenOutOfStock: false,
    weight: 0,
    weightUnit: "kg",
    requiresShipping: true,
    taxable: true,
    images: [],
    optionValues: combination,
    isActive: true,
  }))

  
  return variants
}

function generateCombinations(options: any[]): any[] {
  if (options.length === 0) return []
  if (options.length === 1) {
    return options[0].values
      .filter((value: string) => value.trim())
      .map((value: string) => [{ optionName: options[0].name, value }])
  }

  const result: any[] = []
  const firstOption = options[0]
  const restCombinations = generateCombinations(options.slice(1))

  for (const value of firstOption.values.filter((v: string) => v.trim())) {
    for (const restCombination of restCombinations) {
      result.push([{ optionName: firstOption.name, value }, ...restCombination])
    }
  }

  return result
}
