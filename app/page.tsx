import { CategoryCarousel } from "@/components/CategoryCarousel";
import AnimatedCategories from "@/components/animated-categories";
import { HeroSection } from "@/components/hero-section";
import FeatuedSection from "@/components/features-section";
import HomeServicesSection from "@/components/Services";
import { ElectronicsBannerSection } from "@/components/Electronics-banner";
import Newtestimonial from "@/components/Newtestimonial";
import { Button } from "@/components/ui/button";
import PromoSection from "@/components/ServiceImage";
import MegaSale from "@/components/MegaSale";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <main>
        {/* Hero Section */}

        {/* Animated Categories Section */}
        <AnimatedCategories />

        {/* Hot Deals Section */}
        {/* <HotDealsSection /> */}

        {/* Categories Section */}

        {/* Featured Electronics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-start mb-12">
              <h2 className="text-3xl sm:text-5xl text-[#B74D80] font-light tracking-tight leading-tight text-left">
                Machine Zone
              </h2>
              <p className="text-gray-800 text-md max-w-2xl text-left">
                Latest Electronics & Technology
              </p>
            </div>
            <CategoryCarousel category="machinezone" showAll />
          </div>
          {/* <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-[#B74D80] text-sm hover:bg-[#b74d80af] text-white hover:text-white"
            >
              <a href="">View All Products</a>
            </Button>
          </div> */}
        </section>

        <ElectronicsBannerSection />
        {/* Featured Home Appliances */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl text-[#B74D80] font-light tracking-tight leading-tight text-left">
                Home Furnishing
              </h2>
              <p className="text-gray-800 text-md max-w-2xl text-left">
                Premium Furniture & Home Decor
              </p>
            </div>
            <CategoryCarousel category="Homefurnishing" showAll />
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl text-[#B74D80] font-light tracking-tight leading-tight text-left">
                Books
              </h2>
              <p className="text-gray-800 text-md max-w-2xl text-left">
                Knowledge & Entertainment
              </p>
            </div>
            <CategoryCarousel category="books" showAll />
          </div>
        </section>

        {/* New Testimonial */}
        {/* <Newtestimonial /> */}

        {/* Services Section */}

        {/* Trending */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0042adef] mb-4">
                Trending
              </h2>
              <p className="text-gray-600">
                Explore our range of TVs, audio systems, and smart devices
              </p>
            </div>
            <CategoryCarousel category="electronics" showAll />
          </div>
        </section> */}

        {/* Featured Section */}
        <FeatuedSection />
      </main>
    </div>
  );
}
