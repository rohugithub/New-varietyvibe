"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Users, CreditCard, Target } from "lucide-react"
import Link from "next/link"

interface CouponAnalytics {
  totalCoupons: number
  activeCoupons: number
  expiredCoupons: number
  totalRedemptions: number
  totalDiscountGiven: number
  averageDiscountPerRedemption: number
  topPerformingCoupons: Array<{
    code: string
    title: string
    merchantName: string
    redemptions: number
    totalDiscount: number
  }>
  recentActivity: Array<{
    couponCode: string
    merchantName: string
    customerName: string
    discountAmount: number
    redeemedAt: string
  }>
  monthlyStats: Array<{
    month: string
    redemptions: number
    discountGiven: number
  }>
}

export default function CouponAnalyticsPage() {
  const [analytics, setAnalytics] = useState<CouponAnalytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/admin/merchantCoupon/analytics")
      const data = await response.json()
      setAnalytics(data.analytics)
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="p-6">Loading analytics...</div>
  }

  if (!analytics) {
    return <div className="p-6">Failed to load analytics</div>
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/merchantCoupon">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Coupons
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Coupon Analytics</h1>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalCoupons}</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="text-green-600">
                {analytics.activeCoupons} Active
              </Badge>
              <Badge variant="outline" className="text-red-600">
                {analytics.expiredCoupons} Expired
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalRedemptions}</div>
            <p className="text-xs text-muted-foreground">All time redemptions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Discount Given</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{analytics.totalDiscountGiven.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Customer savings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Discount</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{analytics.averageDiscountPerRedemption.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">Per redemption</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Coupons */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analytics.topPerformingCoupons.map((coupon, index) => (
              <div key={coupon.code} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{coupon.code}</h3>
                    <p className="text-sm text-gray-600">{coupon.title}</p>
                    <p className="text-sm text-gray-500">Merchant: {coupon.merchantName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{coupon.redemptions} redemptions</p>
                  <p className="text-sm text-gray-600">₹{coupon.totalDiscount.toLocaleString()} saved</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Redemptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analytics.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{activity.couponCode}</h3>
                  <p className="text-sm text-gray-600">
                    Redeemed by {activity.customerName} at {activity.merchantName}
                  </p>
                  <p className="text-sm text-gray-500">{new Date(activity.redeemedAt).toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₹{activity.discountAmount}</p>
                  <p className="text-sm text-gray-600">Discount</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
