"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Wallet } from "lucide-react"
import Link from "next/link"

interface Merchant {
  _id: string
  businessName: string
  userId: {
    name: string
    email: string
  }
  wallet: {
    balance: number
  }
}

export default function CollectDepositPage() {
  const [merchants, setMerchants] = useState<Merchant[]>([])
  const [formData, setFormData] = useState({
    merchantId: "",
    amount: "1000",
    notes: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchMerchants()
  }, [])

  const fetchMerchants = async () => {
    try {
      const response = await fetch("/api/agent/merchants?status=approved")
      const data = await response.json()
      setMerchants(data.merchants || [])
    } catch (error) {
      console.error("Failed to fetch merchants:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/agent/deposits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Deposit of ₹${formData.amount} collected successfully! Receipt: ${data.deposit.receiptNumber}`)
        setTimeout(() => {
          router.push("/agent/deposits/history")
        }, 3000)
      } else {
        setError(data.message || "Failed to collect deposit")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const selectedMerchant = merchants.find((m) => m._id === formData.merchantId)

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/agent/deposits">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Deposits
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Collect Deposit</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Manual Deposit Collection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="merchant">Select Merchant</Label>
              <Select value={formData.merchantId} onValueChange={(value) => handleInputChange("merchantId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a merchant" />
                </SelectTrigger>
                <SelectContent>
                  {merchants.map((merchant) => (
                    <SelectItem key={merchant._id} value={merchant._id}>
                      {merchant.businessName} - {merchant.userId.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedMerchant && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">{selectedMerchant.businessName}</h3>
                <p className="text-sm text-gray-600">{selectedMerchant.userId.name}</p>
                <p className="text-sm text-gray-600">{selectedMerchant.userId.email}</p>
                <p className="text-sm text-gray-600">
                  Current Wallet Balance: ₹{selectedMerchant.wallet.balance.toLocaleString()}
                </p>
              </div>
            )}

            <div>
              <Label htmlFor="amount">Deposit Amount (₹)</Label>
              <Select value={formData.amount} onValueChange={(value) => handleInputChange("amount", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">₹1,000</SelectItem>
                  <SelectItem value="2000">₹2,000</SelectItem>
                  <SelectItem value="5000">₹5,000</SelectItem>
                  <SelectItem value="10000">₹10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Add any additional notes about this deposit..."
              />
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900">Deposit Terms:</h4>
              <ul className="text-sm text-blue-800 mt-2 space-y-1">
                <li>• 3-month maturity period</li>
                <li>• Amount will be locked until maturity</li>
                <li>• Merchant will receive email confirmation</li>
                <li>• Receipt will be generated automatically</li>
              </ul>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={loading || !formData.merchantId}>
              {loading ? "Processing Deposit..." : `Collect ₹${formData.amount} Deposit`}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
