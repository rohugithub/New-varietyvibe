import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { HomepageSection } from "@/models/homepage-section"

export async function GET() {
  try {
    await connectDB()
    const sections = await HomepageSection.find().sort({ position: 1 }).lean()

    return NextResponse.json(
      sections.map((section: any) => ({
        ...section,
        _id: section._id.toString(),
      })),
    )
  } catch (error) {
    console.error("Error fetching homepage sections:", error)
    return NextResponse.json({ error: "Failed to fetch homepage sections" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await connectDB()
    const data = await request.json()

    const section = new HomepageSection(data)
    await section.save()

    return NextResponse.json(
      {
        ...section.toObject(),
        _id: section._id.toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating homepage section:", error)
    return NextResponse.json({ error: "Failed to create homepage section" }, { status: 500 })
  }
}
