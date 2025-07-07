const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/inoxsecure")
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

const CouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    description: { type: String, required: true },
    discount_type: { type: String, enum: ["percentage", "fixed"], required: true },
    discount_value: { type: Number, required: true, min: 0 },
    minimum_purchase: { type: Number, default: 0, min: 0 },
    start_date: { type: Date, default: Date.now },
    expiry_date: { type: Date, required: true },
    usage_limit: { type: Number, default: 0 },
    usage_count: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    applies_to: { type: String, enum: ["all", "categories", "products"], default: "all" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
)

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema)

const seedCoupons = async () => {
  try {
    await connectDB()

    // Clear existing coupons
    await Coupon.deleteMany({})

    // Create sample coupons
    const coupons = [
      {
        code: "SAVE10",
        description: "10% off on all orders",
        discount_type: "percentage",
        discount_value: 10,
        minimum_purchase: 1000,
        expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        usage_limit: 100,
      },
      {
        code: "FLAT500",
        description: "₹500 off on orders above ₹5000",
        discount_type: "fixed",
        discount_value: 500,
        minimum_purchase: 5000,
        expiry_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
        usage_limit: 50,
      },
      {
        code: "WELCOME20",
        description: "20% off for new customers",
        discount_type: "percentage",
        discount_value: 20,
        minimum_purchase: 2000,
        expiry_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
        usage_limit: 200,
      },
    ]

    await Coupon.insertMany(coupons)

    console.log("Coupons seeded successfully!")
    console.log(`Created ${coupons.length} coupons`)

    process.exit(0)
  } catch (error) {
    console.error("Error seeding coupons:", error)
    process.exit(1)
  }
}

seedCoupons()
