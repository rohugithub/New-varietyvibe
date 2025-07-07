const mongoose = require("mongoose")

// Slugify utility
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

// Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/inoxsecure")
    console.log("✅ MongoDB connected")
  } catch (error) {
    console.error("❌ Connection failed:", error)
    process.exit(1)
  }
}

// Define minimal Category schema for update
const CategorySchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
  },
  { collection: "categories" } // Optional: ensure it targets the right collection
)

const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema)

const updateCategorySlugs = async () => {
  try {
    await connectDB()

    const categories = await Category.find()

    for (const category of categories) {
      const newSlug = slugify(category.name)

      // Only update if slug doesn't exist or needs correction
      if (!category.slug || category.slug !== newSlug) {
        category.slug = newSlug
        await category.save()
        console.log(`✅ Updated: ${category.name} → ${newSlug}`)
      } else {
        console.log(`🟡 Already OK: ${category.name}`)
      }
    }

    console.log("🎉 Slug update completed.")
    process.exit(0)
  } catch (error) {
    console.error("❌ Error updating slugs:", error)
    process.exit(1)
  }
}

updateCategorySlugs()
