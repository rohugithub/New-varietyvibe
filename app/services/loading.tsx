export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-white/20 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded-lg mb-8 animate-pulse"></div>
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
