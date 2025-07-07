import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const user = await User.findById(params.id).select("addresses")
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user.addresses || [])
  } catch (error) {
    console.error("Error fetching user addresses:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()

    const addressData = await request.json()

    const user = await User.findById(params.id)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    user.addresses.push(addressData)
    await user.save()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error adding address:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
