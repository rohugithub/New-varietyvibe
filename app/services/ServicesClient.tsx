"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Shield,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  startingPrice: number;
  duration: string;
  image: string;
  verified: boolean;
  popular: boolean;
  tags: string[];
}

const services: Service[] = [
  // Home Services
  {
    id: "plumber-1",
    name: "Professional Plumbing Services",
    category: "Home Services",
    description:
      "Expert plumbing repairs, installations, and maintenance for residential and commercial properties.",
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
    description:
      "Licensed electricians for wiring, repairs, installations, and electrical maintenance.",
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
    description:
      "Custom furniture, repairs, installations, and woodworking services by skilled carpenters.",
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
    description:
      "Professional air conditioning repair, maintenance, and installation services.",
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
    description:
      "Professional interior design services for homes and offices with 3D visualization.",
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
    description:
      "Reliable packing and moving services for local and long-distance relocations.",
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
    description:
      "Transform your space with modern interior styling and personalized home decor solutions.",
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
    description:
      "Complete wedding planning services from venue to vendor coordination for your big day.",
    rating: 4.9,
    reviews: 2100,
    startingPrice: 9999,
    duration: "Multi-day",
    image: "/service/Wedding-Planning.jpg",
    verified: true,
    popular: true,
    tags: ["Wedding", "Events", "Planner"],
  },
  {
    id: "vehicle-rental-1",
    name: " Car & Bike Rentals",
    category: "Home Services",
    description:
      "Affordable and flexible vehicle rental services for cars, bikes, and luxury rides.",
    rating: 4.5,
    reviews: 745,
    startingPrice: 399,
    duration: "30 minutes to Full Day",
    image: "/service/Car Rental Services.jpg",
    verified: true,
    popular: false,
    tags: ["Transport", "Bike Rental", "Car Hire"],
  },
  {
    id: "contractor-services-1",
    name: "Building Contractor Services",
    category: "Home Services",
    description:
      "Experienced contractors for residential and commercial construction, renovation, and civil work.",
    rating: 4.8,
    reviews: 654,
    startingPrice: 4999,
    duration: "Project-based",
    image: "/service/Building-Contractor.jpg",
    verified: true,
    popular: true,
    tags: ["Construction", "Renovation", "Civil Work"],
  },
  {
    id: "bridal-services-1",
    name: " Bridal Makeup & Essentials",
    category: "Home Services",
    description:
      "Complete bridal beauty package including makeup, hair styling, draping, and accessories.",
    rating: 4.9,
    reviews: 1890,
    startingPrice: 7999,
    duration: "90-180 minutes",
    image: "/service/BridalMakeup&Essentials.jpg",
    verified: true,
    popular: true,
    tags: ["Bridal", "Makeup", "Beauty"],
  },
  {
    id: "digital-marketing-1",
    name: "Digital Marketing Services",
    category: "Home Services",
    description:
      "SEO, social media, paid ads, and complete brand strategy services for your business.",
    rating: 4.7,
    reviews: 998,
    startingPrice: 2999,
    duration: "Project-based",
    image: "/service/DigitalMarketingServices.jpg",
    verified: true,
    popular: true,
    tags: ["SEO", "Marketing", "Social Media"],
  },
  {
    id: "web-development-1",
    name: "Web Development & Design",
    category: "Home Services",
    description:
      "Custom websites, e-commerce portals, and web apps built with latest technologies.",
    rating: 4.8,
    reviews: 1134,
    startingPrice: 4999,
    duration: "Project-based",
    image: "/service/WebDevelopment.jpg",
    verified: true,
    popular: true,
    tags: ["Website", "Developer", "E-commerce"],
  },

  // New and noteworthy
  {
    id: "insta-help-1",
    name: "Insta Help",
    category: "New and noteworthy",
    description:
      "Professional kitchen help and cooking assistance for daily meals and special occasions.",
    rating: 4.8,
    reviews: 1250,
    startingPrice: 299,
    duration: "2-4 hours",
    image: "/service/InstaHelp.jpg",
    verified: true,
    popular: true,

    tags: ["NEW", "Cooking Help", "Daily Meals"],
  },
  {
    id: "wall-panels-1",
    name: "Wall Panels",
    category: "New and noteworthy",
    description:
      "Modern wall panel installation and interior wall decoration services for homes and offices.",
    rating: 4.7,
    reviews: 856,
    startingPrice: 1999,
    duration: "4-6 hours",
    image: "/service/Wall Panels.jpg",
    verified: true,
    popular: false,

    tags: ["Modern Design", "Interior Decor", "Professional Install"],
  },
  {
    id: "native-water-purifier-1",
    name: "Native Water Purifier",
    category: "New and noteworthy",
    description:
      "Advanced water purifier installation, maintenance, and repair services for clean drinking water.",
    rating: 4.6,
    reviews: 743,
    startingPrice: 499,
    duration: "1-2 hours",
    image: "/service/NativeWaterPurifier.jpg",
    verified: true,
    popular: true,

    tags: ["Clean Water", "Installation", "Maintenance"],
  },
  {
    id: "native-smart-locks-1",
    name: "Native Smart Locks",
    category: "New and noteworthy",
    description:
      "Smart lock installation and setup for enhanced home security with digital access control.",
    rating: 4.8,
    reviews: 567,
    startingPrice: 2499,
    duration: "1-2 hours",
    image: "/service/NativeSmartLocks.jpg",
    verified: true,
    popular: true,

    tags: ["Smart Home", "Security", "Digital Access"],
  },
  {
    id: "kitchen-cleaning-1",
    name: "Kitchen Cleaning",
    category: "New and noteworthy",
    description:
      "Professional kitchen cleaning including chimney, appliances, and deep sanitization.",
    rating: 4.7,
    reviews: 1123,
    startingPrice: 799,
    duration: "3-4 hours",
    image: "/service/KitchenCleaning.jpg",
    verified: true,
    popular: true,

    tags: ["Deep Clean", "Chimney Service", "Sanitization"],
  },
  {
    id: "full-home-painting-1",
    name: "Full Home Painting",
    category: "New and noteworthy",
    description:
      "Complete home painting services with premium paints and professional painters.",
    rating: 4.6,
    reviews: 934,
    startingPrice: 4999,
    duration: "2-5 days",
    image: "/service/FullHomePainting.jpg",
    verified: true,
    popular: true,

    tags: ["Premium Paint", "Professional Team", "Interior/Exterior"],
  },
  {
    id: "laptop-service-1",
    name: "Laptop",
    category: "New and noteworthy",
    description:
      "Professional laptop repair, maintenance, and upgrade services for all brands.",
    rating: 4.6,
    reviews: 823,
    startingPrice: 499,
    duration: "2-4 hours",
    image: "/service/Laptop.jpg",
    verified: true,
    popular: true,

    tags: ["All Brands", "Data Recovery", "Quick Service"],
  },
  {
    id: "spa-ayurveda-1",
    name: "Spa Ayurveda",
    category: "New and noteworthy",
    description:
      "Authentic Ayurvedic spa treatments and massages for relaxation and wellness.",
    rating: 4.8,
    reviews: 678,
    startingPrice: 1299,
    duration: "60-90 minutes",
    image: "/service/SpaAyurveda.jpg",
    verified: true,
    popular: true,
    tags: ["Ayurvedic", "Relaxation", "Wellness"],
  },
  {
    id: "hair-studio-women-1",
    name: "Hair Studio for Women",
    category: "New and noteworthy",
    description:
      "Professional hair styling, cutting, coloring, and treatment services for women.",
    rating: 4.7,
    reviews: 1045,
    startingPrice: 599,
    duration: "45-120 minutes",
    image: "/service/HairStudioforWomen.jpg",
    verified: true,
    popular: true,

    tags: ["Hair Styling", "Coloring", "Professional"],
  },
  {
    id: "ac-service-repair-1",
    name: "AC Service & Repair",
    category: "New and noteworthy",
    description:
      "Professional air conditioning repair, maintenance, and installation services for all brands.",
    rating: 4.6,
    reviews: 892,
    startingPrice: 349,
    duration: "1-2 hours",
    image: "/service/Ac-ser.jpg",
    verified: true,
    popular: true,

    tags: ["All Brands", "Quick Service", "Warranty"],
  },

  // Healthcare
  {
    id: "dentist-1",
    name: "Dental Care Services",
    category: "Healthcare",
    description:
      "Comprehensive dental care including checkups, cleanings, and treatments.",
    rating: 4.9,
    reviews: 678,
    startingPrice: 599,
    duration: "30-60 minutes",
    image: "/service/DentalCareServices.jpg",
    verified: true,
    popular: true,
    tags: ["Digital X-Ray", "Painless Treatment", "Insurance Accepted"],
  },
  {
    id: "gynecologist-1",
    name: "Gynaecologist & Obstetrician",
    category: "Healthcare",
    description:
      "Specialized women's health services including prenatal care and gynecological treatments.",
    rating: 4.8,
    reviews: 523,
    startingPrice: 799,
    duration: "45-60 minutes",
    image: "/service/Gynaecologist & Obstetrician.jpg",
    verified: true,
    popular: false,
    tags: ["Women's Health", "Prenatal Care", "Experienced"],
  },
  {
    id: "ent-doctor-1",
    name: "ENT Specialist",
    category: "Healthcare",
    description:
      "Expert treatment for ear, nose, and throat conditions with modern equipment.",
    rating: 4.7,
    reviews: 412,
    startingPrice: 699,
    duration: "30-45 minutes",
    image: "/service/ENT Specialist.jpg",
    verified: true,
    popular: false,
    tags: ["Modern Equipment", "All Ages", "Quick Diagnosis"],
  },

  // Beauty & Wellness
  {
    id: "beauty-spa-1",
    name: "Luxury Beauty Spa",
    category: "Beauty & Wellness",
    description:
      "Premium spa services including facials, massages, and wellness treatments.",
    rating: 4.8,
    reviews: 934,
    startingPrice: 899,
    duration: "60-90 minutes",
    image: "/service/LuxuryBeautySpa.jpg",
    verified: true,
    popular: true,
    tags: ["Luxury Treatment", "Organic Products", "Relaxing"],
  },
  {
    id: "beauty-parlour-1",
    name: "Professional Beauty Parlour",
    category: "Beauty & Wellness",
    description:
      "Complete beauty services including hair styling, makeup, and grooming.",
    rating: 4.6,
    reviews: 1156,
    startingPrice: 399,
    duration: "45-120 minutes",
    image: "/service/Professional Beauty Parlour.jpg",
    verified: true,
    popular: true,
    tags: ["Bridal Makeup", "Hair Styling", "Skin Care"],
  },
  {
    id: "gym-1",
    name: "Premium Fitness Gym",
    category: "Beauty & Wellness",
    description:
      "State-of-the-art gym facilities with personal trainers and group classes.",
    rating: 4.7,
    reviews: 789,
    startingPrice: 1999,
    duration: "Monthly",
    image: "/service/Premium Fitness Gym.jpg",
    verified: true,
    popular: true,
    tags: ["Personal Training", "Modern Equipment", "Group Classes"],
  },
  {
    id: "yoga-classes-1",
    name: "Yoga & Meditation Classes",
    category: "Beauty & Wellness",
    description:
      "Professional yoga instruction for all levels with meditation and wellness programs.",
    rating: 4.8,
    reviews: 567,
    startingPrice: 799,
    duration: "60 minutes",
    image: "/service/Yoga & Meditation Classes.jpg",
    verified: true,
    popular: false,
    tags: ["All Levels", "Meditation", "Stress Relief"],
  },

  // Automotive
  {
    id: "car-repair-1",
    name: "Car Repair & Services",
    category: "Automotive",
    description:
      "Complete automotive repair and maintenance services for all car brands.",
    rating: 4.6,
    reviews: 1023,
    startingPrice: 599,
    duration: "1-4 hours",
    image: "/service/Car Repair & Services.jpg",
    verified: true,
    popular: true,
    tags: ["All Brands", "Genuine Parts", "Warranty"],
  },
  {
    id: "car-rental-1",
    name: "Car Rental Services",
    category: "Automotive",
    description:
      "Reliable car rental services for daily, weekly, and monthly requirements.",
    rating: 4.5,
    reviews: 834,
    startingPrice: 1299,
    duration: "Daily",
    image: "/service/Car Rental Services.jpg",
    verified: true,
    popular: true,
    tags: ["Clean Cars", "Flexible Plans", "Insurance Included"],
  },
  {
    id: "motor-training-1",
    name: "Motor Training School",
    category: "Automotive",
    description:
      "Professional driving lessons with experienced instructors and modern vehicles.",
    rating: 4.7,
    reviews: 445,
    startingPrice: 2999,
    duration: "30 days",
    image: "/service/Motor Training School.jpg",
    verified: true,
    popular: false,
    tags: ["Licensed Instructors", "Modern Cars", "License Support"],
  },

  // Events & Entertainment
  {
    id: "banquet-halls-1",
    name: "Banquet Halls & Events",
    category: "Events & Entertainment",
    description:
      "Elegant banquet halls for weddings, parties, and corporate events.",
    rating: 4.6,
    reviews: 678,
    startingPrice: 15999,
    duration: "Per Event",
    image: "/service/BanquetHalls&Events.jpg",
    verified: true,
    popular: true,
    tags: ["Wedding Venue", "Catering Available", "Decoration"],
  },
  {
    id: "caterers-1",
    name: "Professional Catering",
    category: "Events & Entertainment",
    description:
      "Premium catering services for all types of events and celebrations.",
    rating: 4.7,
    reviews: 892,
    startingPrice: 299,
    duration: "Per Person",
    image: "/service/Professional Catering.jpg",
    verified: true,
    popular: true,
    tags: ["Multi-Cuisine", "Fresh Food", "Event Planning"],
  },
  {
    id: "photo-studio-1",
    name: "Professional Photo Studio",
    category: "Events & Entertainment",
    description:
      "Professional photography services for portraits, events, and commercial shoots.",
    rating: 4.8,
    reviews: 534,
    startingPrice: 1999,
    duration: "2-4 hours",
    image: "/service/Professional Photo Studio.jpg",
    verified: true,
    popular: false,
    tags: ["Professional Equipment", "Editing Included", "Quick Delivery"],
  },
  {
    id: "music-classes-1",
    name: "Music Classes & Training",
    category: "Events & Entertainment",
    description:
      "Learn music instruments and vocals from experienced professional instructors.",
    rating: 4.7,
    reviews: 423,
    startingPrice: 1499,
    duration: "Monthly",
    image: "/service/Music Classes & Training.jpg",
    verified: true,
    popular: false,
    tags: ["All Instruments", "Beginner Friendly", "Performance Training"],
  },

  // Business & Travel
  {
    id: "estate-agent-1",
    name: "Real Estate Services",
    category: "Business & Travel",
    description:
      "Professional real estate services for buying, selling, and renting properties.",
    rating: 4.5,
    reviews: 756,
    startingPrice: 9999,
    duration: "Per Deal",
    image: "/service/Real Estate Services.jpg",
    verified: true,
    popular: true,
    tags: ["Property Expert", "Legal Support", "Market Analysis"],
  },
  {
    id: "hotels-1",
    name: "Hotel Bookings",
    category: "Business & Travel",
    description:
      "Book comfortable hotels and accommodations for business and leisure travel.",
    rating: 4.6,
    reviews: 1234,
    startingPrice: 1999,
    duration: "Per Night",
    image: "/service/Hotel Bookings.jpg",
    verified: true,
    popular: true,
    tags: ["Clean Rooms", "Good Location", "Amenities"],
  },
  {
    id: "tour-travels-1",
    name: "Tour & Travel Services",
    category: "Business & Travel",
    description:
      "Complete travel packages and tour planning services for domestic and international trips.",
    rating: 4.7,
    reviews: 689,
    startingPrice: 4999,
    duration: "Per Package",
    image: "/service/Tour&TravelServices.jpg",
    verified: true,
    popular: true,
    tags: ["Custom Packages", "Guided Tours", "Best Prices"],
  },
  {
    id: "courier-service-1",
    name: "Courier & Delivery",
    category: "Business & Travel",
    description:
      "Fast and reliable courier services for documents and packages.",
    rating: 4.4,
    reviews: 945,
    startingPrice: 99,
    duration: "1-3 days",
    image: "/service/Courier & Delivery.jpg",
    verified: true,
    popular: false,
    tags: ["Same Day", "Tracking", "Secure Delivery"],
  },

  // Pet Care
  {
    id: "petshop-1",
    name: "Pet Shop & Care",
    category: "Pet Care",
    description:
      "Complete pet care services including grooming, veterinary care, and pet supplies.",
    rating: 4.8,
    reviews: 567,
    startingPrice: 399,
    duration: "1-2 hours",
    image: "/service/Pet Shop & Care.jpg",
    verified: true,
    popular: false,
    tags: ["Pet Grooming", "Vet Care", "Pet Supplies"],
  },
];

const categories = [
  "All Services",
  "New and noteworthy",
  "Home Services",
  "Healthcare",
  "Beauty & Wellness",
  "IT Services",
  "Automotive",
  "Events & Entertainment",
  "Business & Travel",
  "Pet Care",
];

export default function ServicesClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [sortBy, setSortBy] = useState("popular");
  const [location, setLocation] = useState("Delhi NCR");

  const filteredServices = services
    .filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All Services" ||
        service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.startingPrice - b.startingPrice;
        case "price-high":
          return b.startingPrice - a.startingPrice;
        case "reviews":
          return b.reviews - a.reviews;
        default: // popular
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-800 to-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Professional Services at Your Doorstep
            </h1>
            <p className="text-xl mb-8 opacity-90 text-white">
              Find trusted professionals for all your service needs. Verified
              experts, transparent pricing, guaranteed satisfaction.
            </p>

            
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All service providers are background verified and highly rated</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Booking</h3>
              <p className="text-gray-600">Book services instantly and get confirmed appointments</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee with quality service delivery</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <div className="py-12 px-10">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort and Filter */}
            {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  {filteredServices.length} services found
                </span>
                {searchTerm && (
                  <Badge variant="secondary">Searching: "{searchTerm}"</Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {service.popular && (
                      <Badge className="absolute top-3 left-3 bg-secondary text-white">
                        Popular
                      </Badge>
                    )}
                    {service.verified && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
                        <Shield className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      {/* <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge> */}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-gray-500 text-sm">
                          ({service.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                    </div> */}

                    {/* <div className="flex flex-wrap gap-1 mb-4">
                      {service.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div> */}

                    <div className="flex items-center justify-between">
                      {/* <div>
                        <span className="text-2xl font-bold text-primary">
                          ₹{service.startingPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          onwards
                        </span>
                      </div> */}
                      <Button className="group-hover:bg-primary group-hover:text-white transition-colors text-sm">
                        Book Now
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your service today and experience professional quality at your doorstep
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
            Browse All Services
          </Button>
        </div>
      </div> */}
    </div>
  );
}
