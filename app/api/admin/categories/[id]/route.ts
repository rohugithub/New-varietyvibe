import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Category } from "@/lib/models/Category"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    const category = await Category.findById(params.id).populate("parentCategory")
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    const body = await request.json()

    // Handle parentCategory - convert empty string or "none" to null
    if (body.parentCategory === "" || body.parentCategory === "none" || body.parentCategory === undefined) {
      body.parentCategory = null
    }

    const category = await Category.findByIdAndUpdate(params.id, body, { new: true })
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
    return NextResponse.json(category)
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    const category = await Category.findByIdAndDelete(params.id)
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
    return NextResponse.json({ message: "Category deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 })
  }
}
