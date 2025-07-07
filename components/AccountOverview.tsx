"use client"

import { useSession } from "next-auth/react"
import { Package, Star, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface AccountOverviewProps {
  userStats: {
    totalOrders: number
    totalSpent: number
    loyaltyPoints: number
    memberSince: string
  }
}

export function AccountOverview({ userStats }: AccountOverviewProps) {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <p className="text-gray-600">Update your personal details</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue={session?.user?.name || ""} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={session?.user?.email || ""} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" placeholder="dd-mm-yyyy" className="mt-1" />
            </div>
          </div>
          <Button className="bg-[#0042adef] hover:bg-[#0042ad]">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Package className="h-12 w-12 mx-auto mb-4 text-[#0042adef]" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{userStats.totalOrders}</div>
            <div className="text-gray-600">Total Orders</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Star className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{userStats.loyaltyPoints}</div>
            <div className="text-gray-600">Loyalty Points</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Heart className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Wishlist Items</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
