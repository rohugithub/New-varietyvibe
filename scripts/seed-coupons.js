const mongoose = require("mongoose")

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://chetanwebmytech:Zt3MqftCacBLJZu9@webmytech.ydut7g6.mongodb.net/inoxsecure?retryWrites=true&w=majority&appName=WebmyTech")
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

// Coupon Schema
const CouponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    discount_type: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    discount_value: {
      type: Number,
      required: true,
      min: 0,
    },
    minimum_purchase: {
      type: Number,
      default: 0,
      min: 0,
    },
    start_date: {
      type: Date,
      default: Date.now,
    },
    expiry_date: {
      type: Date,
      required: true,
    },
    usage_limit: {
      type: Number,
      default: 0, // 0 means unlimited
    },
    usage_count: {
      type: Number,
      default: 0,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    applies_to: {
      type: String,
      enum: ["all", "categories", "products"],
      default: "all",
    },
    applicable_categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    applicable_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
)

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema)

// Helper function to generate random coupon codes
const generateCouponCode = (prefix = '') => {
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase()
  return prefix + randomStr
}

// Seed coupons data
const seedCoupons = async () => {
  try {
    await connectDB()

    // Clear existing coupons
    await Coupon.deleteMany({})
    console.log("Cleared existing coupons")

    // Get some categories and products to associate with coupons
    const Category = mongoose.models.Category || mongoose.model("Category", new mongoose.Schema({ name: String }))
    const Product = mongoose.models.Product || mongoose.model("Product", new mongoose.Schema({ title: String }))
    
    const categories = await Category.find().limit(2)
    const products = await Product.find().limit(2)

    // Create coupons
    const coupons = [
      {
        code: "WELCOME10",
        description: "Welcome discount - 10% off on first purchase",
        discount_type: "percentage",
        discount_value: 10,
        minimum_purchase: 0,
        start_date: new Date(),
        expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        usage_limit: 100,
        is_active: true,
        applies_to: "all"
      },
      {
        code: "SUMMER25",
        description: "Summer special - 25% off on all electronics",
        discount_type: "percentage",
        discount_value: 25,
        minimum_purchase: 5000,
        start_date: new Date(),
        expiry_date: new Date("2024-08-31"),
        usage_limit: 50,
        is_active: true,
        applies_to: "categories",
        applicable_categories: categories.map(c => c._id)
      },
      {
        code: "FREESHIP",
        description: "Free shipping on all orders",
        discount_type: "fixed",
        discount_value: 0, // Handle shipping discount separately in your logic
        minimum_purchase: 0,
        start_date: new Date(),
        expiry_date: new Date("2024-12-31"),
        usage_limit: 0, // unlimited
        is_active: true,
        applies_to: "all"
      },
      {
        code: generateCouponCode('HOT'),
        description: "Hot deal - ₹1000 off on selected products",
        discount_type: "fixed",
        discount_value: 1000,
        minimum_purchase: 5000,
        start_date: new Date(),
        expiry_date: new Date("2024-07-31"),
        usage_limit: 20,
        is_active: true,
        applies_to: "products",
        applicable_products: products.map(p => p._id)
      },
      {
        code: "SAVE500",
        description: "Flat ₹500 off on orders above ₹3000",
        discount_type: "fixed",
        discount_value: 500,
        minimum_purchase: 3000,
        start_date: new Date(),
        expiry_date: new Date("2024-09-30"),
        usage_limit: 0, // unlimited
        is_active: true,
        applies_to: "all"
      }
    ]

    const createdCoupons = await Coupon.insertMany(coupons)
    console.log(`Created ${createdCoupons.length} coupons`)

    // Display created coupons
    console.log("\nCreated Coupons:")
    createdCoupons.forEach(coupon => {
      console.log(`- ${coupon.code}: ${coupon.description}`)
      console.log(`  Discount: ${coupon.discount_value}${coupon.discount_type === 'percentage' ? '%' : '₹'}`)
      console.log(`  Valid: ${coupon.start_date.toDateString()} to ${coupon.expiry_date.toDateString()}`)
      console.log(`  Usage: ${coupon.usage_count}/${coupon.usage_limit === 0 ? '∞' : coupon.usage_limit}`)
      console.log(`  Applies to: ${coupon.applies_to}`)
      if (coupon.applies_to === 'categories' && coupon.applicable_categories.length > 0) {
        console.log(`  Categories: ${coupon.applicable_categories.length} categories`)
      }
      if (coupon.applies_to === 'products' && coupon.applicable_products.length > 0) {
        console.log(`  Products: ${coupon.applicable_products.length} products`)
      }
      console.log("")
    })

    process.exit(0)
  } catch (error) {
    console.error("Error seeding coupons:", error)
    process.exit(1)
  }
}

seedCoupons()