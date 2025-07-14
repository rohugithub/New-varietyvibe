import { Suspense } from "react"
import ServiceGrid from "@/components/services/ServiceGrid"
import CategoryNavigation from "@/components/services/CategoryNavigation"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryNavigation />
          </Suspense>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading services...</div>}>
          <ServiceGrid />
        </Suspense>
      </div>
    </div>
  )
}
