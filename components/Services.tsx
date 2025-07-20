"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Service {
  _id: string
  name: string
  slug: string
  category: { _id: string; name: string }
  description: string
  rating: number
  reviews: number
  duration?: string
  image?: string
  verified: boolean
  popular: boolean
  tags: string[]
}

export default function HomeServicesSection() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services")
      const data = await res.json()
      setServices(data.slice(0, 8)) // show only 8 for homepage
    } catch (err) {
      console.error("Failed to fetch services:", err)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover trusted professionals for all your service needs. Verified
            experts, transparent pricing, and guaranteed satisfaction at your
            doorstep.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((s) => (
            <Card
              key={s._id}
              className="group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                {/* image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt={s.name}
                    fill
                    className="object-contain"
                  />
                  {s.popular && (
                    <Badge className="absolute top-3 left-3 bg-blue-800 text-white">
                      Popular
                    </Badge>
                  )}
                  {s.verified && (
                    <span className="absolute top-3 right-3 bg-green-600 text-white p-1 rounded-full">
                      <Shield className="h-4 w-4" />
                    </span>
                  )}
                </div>

                {/* content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {s.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {s.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-blue-800">

                      <span className="text-sm text-gray-500 ml-1">onwards</span>
                    </span>
                    <Link href={`/service/${s.slug}`}>
                      <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
                        Book&nbsp;Now
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* view more */}
        <div className="text-center">
          <Link href="/service">
            <Button className="bg-blue-800 hover:bg-blue-900 px-8 py-3 text-white rounded-lg shadow-md">
              View More Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
