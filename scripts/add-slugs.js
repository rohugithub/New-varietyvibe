const { MongoClient } = require("mongodb")
const slugify = require("slugify")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Enter your MongoDB URL: ", async (mongoUrl) => {
  rl.close()

  const client = new MongoClient(mongoUrl)

  try {
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db() // uses DB from the URL
    const collection = db.collection("servicecategories") // your collection name

    const categories = await collection
      .find({
        $or: [{ slug: { $exists: false } }, { slug: "" }],
      })
      .toArray()

    if (categories.length === 0) {
      console.log("⚠️ No categories found that need a slug.")
      return
    }

    for (const category of categories) {
      const newSlug = slugify(category.name, { lower: true, strict: true })

      await collection.updateOne(
        { _id: category._id },
        { $set: { slug: newSlug } }
      )

      console.log(`✅ Updated "${category.name}" → slug: "${newSlug}"`)
    }

    console.log("🎉 Slug update complete.")
  } catch (err) {
    console.error("❌ Error:", err)
  } finally {
    await client.close()
  }
})
