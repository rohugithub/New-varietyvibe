// app/api/account/me/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { User } from "@/models/User"
import { connectDB } from "@/lib/mongodb"
export async function GET() {
  // You would typically fetch from DB based on auth token/session
  await connectDB()
  const session = await getServerSession()
  

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const user = await User.findOne({ email: session?.user?.email })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  return NextResponse.json({ name : user.name, email: user.email, phone: user.phone })
  



  }
