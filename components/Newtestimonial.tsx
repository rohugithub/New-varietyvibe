"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    rating: 5,
    review:
      "Amazing shopping experience! The product quality exceeded my expectations and the delivery was super fast. I've been shopping here for over a year .",
    product: "Wireless Bluetooth Headphones",
    category: "Machine Zone",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
    rating: 5,
    review:
      "The furniture quality is outstanding! My new coffee table looks exactly like the pictures and the assembly was straightforward. Great customer service too.",
    product: "Modern Coffee Table",
    category: "Home Furnishing",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
    rating: 5,
    review:
      "Love the book collection! Fast delivery and books arrived in perfect condition. The packaging was excellent and prices are very competitive.",
    product: "Mystery Novel Collection",
    category: "BookWorms Paradise",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=DT",
    rating: 4,
    review:
      "Great gaming gear! The controller feels premium and the response time is excellent. Shipping was quick and the product was well-protected.",
    product: "Wireless Gaming Controller",
    category: "GameSphere",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=LW",
    rating: 5,
    review:
      "Beautiful dress and perfect fit! The fabric quality is amazing and it looks exactly as shown in the photos. Will definitely order more from this store.",
    product: "Designer Summer Dress",
    category: "Fashion Frenzy",
    date: "2 days ago",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Verified Customer",
    avatar: "/placeholder.svg?height=60&width=60&text=RK",
    rating: 5,
    review:
      "Excellent office supplies! The notebook quality is top-notch and the pen writes smoothly. Perfect for my daily work needs.",
    product: "Premium Notebook Set",
    category: "Stationary Sanctuary",
    date: "5 days ago",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-advance every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <section className="py-12 px-4 md:py-16 bg-[#e992bc20]">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 px-4">
          <h2 className="text-3xl sm:text-5xl text-[#B74D80] font-light tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-md max-w-2xl mt-2 text-gray-700">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their shopping experience.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative py-12 px-2 sm:px-4">
          {/* Navigation Arrows + Rating */}
          <div className="flex items-center justify-between mb-6 max-w-5xl mx-auto px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 bg-[#eb6fabec] hover:bg-[#b74d80af] text-white"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4.8/5</span>
              <span className="text-muted-foreground">from 2,847 reviews</span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 bg-[#eb6fabec] hover:bg-[#b74d80af] text-white"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-3 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <Card className="h-[330px] bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 py-3">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-2xl text-[#B74D80]">
                              {testimonial.name}
                            </h4>
                            <Quote className="h-7 w-7 text-[#B74D80]" />
                          </div>
                          <p className="text-sm text-[#b74d80de]">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <blockquote className="text-lg text-gray-800 font-light mb-4">
                        "{testimonial.review}"
                      </blockquote>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-gray-600">
                            {testimonial.product}
                          </span>
                          <span className="text-muted-foreground">
                            {testimonial.category}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {Array.from({
              length: Math.ceil(testimonials.length / itemsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-primary"
                    : "bg-muted"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
