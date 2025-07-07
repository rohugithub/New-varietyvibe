import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Order } from "@/models/Order"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const orders = await Order.find({ user_id: params.id }).sort({ createdAt: -1 }).lean()

    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching user orders:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
