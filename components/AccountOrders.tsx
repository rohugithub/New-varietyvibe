"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Eye, Download, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Order {
  _id: string
  order_number: string
  total: number
  status: string
  createdAt: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
}

export function AccountOrders() {
  const { data: session } = useSession()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session?.user?.id) {
      fetchOrders()
    }
  }, [session])

  const fetchOrders = async () => {
    try {
      const response = await fetch(`/api/users/${session?.user?.id}/orders`)
      if (response.ok) {
        const data = await response.json()
        setOrders(data)
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return <div>Loading orders...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Order History</h2>
        <p className="text-gray-600">Track and manage your orders</p>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No orders found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order._id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold">{order.order_number}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                      <p className="text-sm text-gray-600">
                        {order.items.length} item{order.items.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <p className="text-lg font-semibold mt-2">₹{order.total.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
