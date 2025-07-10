import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Brand } from "@/lib/models/Brand"

export async function GET() {
  try {
    await connectDB()
    const brands = await Brand.find().sort({ createdAt: -1 })
    return NextResponse.json(brands)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch brands" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("Hello")
    await connectDB()
    const body = await request.json()
    const brand = new Brand(body)
    await brand.save()
    return NextResponse.json(brand, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create brand" }, { status: 500 })
  }
}
