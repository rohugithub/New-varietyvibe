import mongoose from "mongoose"

const couponCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  merchantId: { type: mongoose.Schema.Types.ObjectId, ref: "Merchant", required: true },
  title: { type: String, required: true },
  description: { type: String },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true },
  minOrderAmount: { type: Number, default: 0 },
  maxDiscount: { type: Number },
  usageLimit: { type: Number },
  usedCount: { type: Number, default: 0 },
  validFrom: { type: Date, required: true },
  validUntil: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
})

export const CouponCode = mongoose.models.CouponCode || mongoose.model("CouponCode", couponCodeSchema)
