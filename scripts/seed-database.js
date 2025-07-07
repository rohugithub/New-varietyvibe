const mongoose = require("mongoose")

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/inox-store")
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

// Category Schema
const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

// Brand Schema
const BrandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    logo: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

// Product Schema
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    handle: { type: String, required: true, unique: true },
    status: { type: String, enum: ["active", "draft", "archived"], default: "active" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
    images: [{ url: String, altText: String }],
    variants: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
        title: String,
        price: Number,
        compareAtPrice: Number,
        inventoryQuantity: Number,
      },
    ],
    isHotDeal: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// Generate slug from title
ProductSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }
  if (this.isModified("title") && !this.handle) {
    this.handle = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }
  next()
})

const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema)
const Brand = mongoose.models.Brand || mongoose.model("Brand", BrandSchema)
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)

// Seed data
const seedData = async () => {
  try {
    await connectDB()

    // Clear existing data
    await Category.deleteMany({})
    await Brand.deleteMany({})
    await Product.deleteMany({})

    // Create Categories
    const categories = await Category.insertMany([
      {
        name: "Electronics",
        description: "TVs, Audio Systems, and Electronic Devices",
        icon: "📺",
      },
      {
        name: "Appliances",
        description: "Home and Kitchen Appliances",
        icon: "🏠",
      },
      {
        name: "IT Products",
        description: "Computers, Laptops, and IT Equipment",
        icon: "💻",
      },
    ])

    // Create Brands
    const brands = await Brand.insertMany([
      { name: "Samsung", description: "Leading electronics manufacturer" },
      { name: "LG", description: "Home appliances and electronics" },
      { name: "Sony", description: "Premium electronics and entertainment" },
      { name: "Whirlpool", description: "Home appliances specialist" },
      { name: "Dell", description: "Computer and IT solutions" },
      { name: "HP", description: "Technology solutions provider" },
    ])

    // Create Products
    const products = [
      // Electronics
      {
        title: '32" 4K Smart LED TV',
        description:
          "Experience stunning 4K resolution with smart TV features, built-in WiFi, and multiple streaming apps.",
        category: categories[0]._id,
        brand: brands[0]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=32-4K-TV", altText: "32 inch 4K Smart TV" }],
        variants: [
          {
            title: "Standard",
            price: 18999,
            compareAtPrice: 22999,
            inventoryQuantity: 10,
          },
        ],
        isHotDeal: true,
      },
      {
        title: "Front Load Washing Machine 8kg",
        description: "Energy efficient front loading washing machine with multiple wash programs and steam cleaning.",
        category: categories[1]._id,
        brand: brands[1]._id,
        images: [
          { url: "/placeholder.svg?height=400&width=400&text=Washing-Machine", altText: "Front Load Washing Machine" },
        ],
        variants: [
          {
            title: "Standard",
            price: 32999,
            compareAtPrice: 39999,
            inventoryQuantity: 5,
          },
        ],
      },
      {
        title: "1.5 Ton Inverter Split AC",
        description: "Energy saving inverter AC with fast cooling, copper condenser, and smart connectivity.",
        category: categories[0]._id,
        brand: brands[1]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=Split-AC", altText: "1.5 Ton Split AC" }],
        variants: [
          {
            title: "Standard",
            price: 28999,
            compareAtPrice: 34999,
            inventoryQuantity: 8,
          },
        ],
      },
      {
        title: "Double Door Refrigerator 350L",
        description: "Spacious double door refrigerator with frost-free technology and energy efficient operation.",
        category: categories[1]._id,
        brand: brands[3]._id,
        images: [
          { url: "/placeholder.svg?height=400&width=400&text=Refrigerator", altText: "Double Door Refrigerator" },
        ],
        variants: [
          {
            title: "Standard",
            price: 25999,
            compareAtPrice: 29999,
            inventoryQuantity: 3,
          },
        ],
      },
      {
        title: 'Gaming Laptop 15.6" i7',
        description: "High performance gaming laptop with Intel i7 processor, 16GB RAM, and dedicated graphics card.",
        category: categories[2]._id,
        brand: brands[4]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=Gaming-Laptop", altText: "Gaming Laptop" }],
        variants: [
          {
            title: "Standard",
            price: 75999,
            compareAtPrice: 89999,
            inventoryQuantity: 6,
          },
        ],
        isHotDeal: true,
      },
      {
        title: "Wireless Bluetooth Headphones",
        description:
          "Premium wireless headphones with noise cancellation, 30-hour battery life, and superior sound quality.",
        category: categories[0]._id,
        brand: brands[2]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=Headphones", altText: "Wireless Headphones" }],
        variants: [
          {
            title: "Standard",
            price: 8999,
            compareAtPrice: 12999,
            inventoryQuantity: 15,
          },
        ],
      },
      {
        title: "Smart Home Security Camera",
        description: "1080p HD security camera with night vision, motion detection, and smartphone app control.",
        category: categories[2]._id,
        brand: brands[0]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=Security-Camera", altText: "Security Camera" }],
        variants: [
          {
            title: "Standard",
            price: 4999,
            compareAtPrice: 6999,
            inventoryQuantity: 20,
          },
        ],
      },
      {
        title: "Microwave Oven 25L",
        description: "Convection microwave oven with grill function, auto-cook menus, and child safety lock.",
        category: categories[1]._id,
        brand: brands[1]._id,
        images: [{ url: "/placeholder.svg?height=400&width=400&text=Microwave", altText: "Microwave Oven" }],
        variants: [
          {
            title: "Standard",
            price: 12999,
            compareAtPrice: 15999,
            inventoryQuantity: 12,
          },
        ],
      },
    ]

    await Product.insertMany(products)

    console.log("Database seeded successfully!")
    console.log(`Created ${categories.length} categories`)
    console.log(`Created ${brands.length} brands`)
    console.log(`Created ${products.length} products`)

    process.exit(0)
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seedData()
