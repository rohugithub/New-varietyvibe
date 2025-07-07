import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Category } from "@/lib/models/Category"

export async function GET() {
  try {
    await connectDB()
    const categories = await Category.find().populate("parentCategory").sort({ createdAt: -1 })
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()

    // Handle parentCategory - convert empty string or "none" to null
    if (body.parentCategory === "" || body.parentCategory === "none" || body.parentCategory === undefined) {
      body.parentCategory = null
    }

    const category = new Category(body)
    await category.save()
    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error("Error creating category:", error)
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
  }
}
