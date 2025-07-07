import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Us | Inox Secure",
  description: "Learn about Inox Secure's mission, vision, and team",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-transparent">
        <div className="flex flex-col items-center text-center mb-16 px-10 py-10 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Inox Secure
          </h1>
          <p className="text-lg text-white max-w-3xl">
            We're on a mission to make security products accessible to everyone,
            delivering them to your doorstep in minutes.
          </p>
        </div>
      </div>

      <div className="container px-20 py-10">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, Inox Secure was born out of a simple observation:
              when people need security products, they often need them urgently,
              but traditional retail and e-commerce options couldn't deliver
              quickly enough.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, after experiencing a home security emergency and
              waiting days for essential equipment to arrive, decided there had
              to be a better way. Inox Secure was created to solve this problem
              by combining cutting-edge technology with an extensive network of
              local warehouses to deliver security products in minutes, not
              days.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of customers across major cities,
              providing peace of mind through immediate access to quality
              security solutions.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/About.jpg"
              alt="Inox Secure Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide immediate access to high-quality security products,
              empowering people to protect what matters most to them without
              delay.
            </p>
          </div>
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a world where everyone feels secure in their homes and
              workplaces, with the right security solutions just minutes away.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring you can count on us when
                security matters most.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-gray-600">
                We prioritize your safety and the security of your data in
                everything we do.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer-First</h3>
              <p className="text-gray-600">
                We build our business around your needs, constantly improving to
                serve you better.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        {/* <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sarah Chen",
              role: "Chief Operations Officer",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Rodriguez",
              role: "Chief Technology Officer",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Priya Sharma",
              role: "Head of Customer Experience",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div> */}

        {/* Join Us */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who share our passion
            for security and customer service. Check out our open positions and
            become part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button variant="secondary" size="lg">
                View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
