"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Service {
  id: string
  name: string
  category: string
  description: string
  rating: number
  reviews: number
  startingPrice: number
  duration: string
  image: string
  verified: boolean
  popular: boolean
  tags: string[]
}

// First row services from your data
const featuredServices: Service[] = [
  {
    id: "plumber-1",
    name: "Professional Plumbing Services",
    category: "Home Services",
    description: "Expert plumbing repairs, installations, and maintenance for residential and commercial properties.",
    rating: 4.8,
    reviews: 1250,
    startingPrice: 299,
    duration: "1-2 hours",
    image: "/service/plumbing.jpg",
    verified: true,
    popular: true,
    tags: ["Emergency Service", "Licensed", "24/7 Available"],
  },
  {
    id: "electrician-1",
    name: "Certified Electrical Services",
    category: "Home Services",
    description: "Licensed electricians for wiring, repairs, installations, and electrical maintenance.",
    rating: 4.9,
    reviews: 980,
    startingPrice: 399,
    duration: "1-3 hours",
    image: "/service/Electrician.jpg",
    verified: true,
    popular: true,
    tags: ["Licensed", "Safety Certified", "Emergency"],
  },
  {
    id: "carpenter-1",
    name: "Expert Carpentry Services",
    category: "Home Services",
    description: "Custom furniture, repairs, installations, and woodworking services by skilled carpenters.",
    rating: 4.7,
    reviews: 756,
    startingPrice: 499,
    duration: "2-4 hours",
    image: "/service/Expert Carpentry Services.jpg",
    verified: true,
    popular: false,
    tags: ["Custom Work", "Quality Wood", "Experienced"],
  },
  {
    id: "ac-repair-1",
    name: "AC Repair & Service",
    category: "Home Services",
    description: "Professional air conditioning repair, maintenance, and installation services.",
    rating: 4.6,
    reviews: 892,
    startingPrice: 349,
    duration: "1-2 hours",
    image: "/service/Ac-ser.jpg",
    verified: true,
    popular: true,
    tags: ["All Brands", "Quick Service", "Warranty"],
  },
  {
    id: "interior-designer-1",
    name: "Interior Design Consultation",
    category: "Home Services",
    description: "Professional interior design services for homes and offices with 3D visualization.",
    rating: 4.8,
    reviews: 445,
    startingPrice: 1999,
    duration: "2-3 hours",
    image: "/service/Interior Design Consultation.jpg",
    verified: true,
    popular: false,
    tags: ["3D Design", "Modern Style", "Budget Friendly"],
  },
  {
    id: "packers-movers-1",
    name: "Packers & Movers",
    category: "Home Services",
    description: "Reliable packing and moving services for local and long-distance relocations.",
    rating: 4.5,
    reviews: 1120,
    startingPrice: 2499,
    duration: "4-8 hours",
    image: "/service/packers.jpg",
    verified: true,
    popular: true,
    tags: ["Insured", "Professional Team", "Safe Transport"],
  },
  {
    id: "home-decor-1",
    name: "Home Decor & Interior Styling",
    category: "Home Services",
    description: "Transform your space with modern interior styling and personalized home decor solutions.",
    rating: 4.6,
    reviews: 876,
    startingPrice: 1499,
    duration: "60-180 minutes",
    image: "/service/Home-Decor.jpg",
    verified: true,
    popular: true,
    tags: ["Interior", "Furniture", "Styling"],
  },
  {
    id: "wedding-planning-1",
    name: "Wedding Planning & Coordination",
    category: "Home Services",
    description: "Complete wedding planning services from venue to vendor coordination for your big day.",
    rating: 4.9,
    reviews: 2100,
    startingPrice: 9999,
    duration: "Multi-day",
    image: "/service/Wedding-Planning.jpg",
    verified: true,
    popular: true,
    tags: ["Wedding", "Events", "Planner"],
  },
]

export default function HomeServicesSection() {
  return (
    <>

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

        {/* grid 1‑4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((s) => (
            <Card
              key={s.id}
              className="group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                {/* image wrapper keeps 4:3 ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-contain" /* full image, no crop */
                    sizes="(min-width:1280px) 25vw,
                           (min-width:1024px) 33vw,
                           (min-width:640px) 50vw,
                           100vw"
                    priority={s.id === featuredServices[0].id}
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

                {/* text + price */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {s.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {s.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-blue-800">
                      ₹{s.startingPrice.toLocaleString()}
                      <span className="text-sm text-gray-500 ml-1">onwards</span>
                    </span>

                    <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
                      Book&nbsp;Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* view more */}
        <div className="text-center">
          <Link href="/services">
            <Button className="bg-blue-800 hover:bg-blue-900 px-8 py-3 text-white rounded-lg shadow-md">
              View More Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    </>
  )
}
