import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Service from "@/models/Service"

export async function GET(request: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    const query: any = { isActive: true }

    // Category filter
    if (category && category !== "all") {
      query.category = category
    }

    const services = await Service.find(query).populate("category", "name").sort({ popular: -1, rating: -1 })

    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
  }
}
