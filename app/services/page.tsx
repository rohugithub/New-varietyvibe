import type { Metadata } from "next"
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "Professional Services | Inox Secure",
  description:
    "Find trusted professionals for home services, healthcare, fitness, automotive, and more. Book verified service providers in your area.",
}

export default function ServicesPage() {
  return <ServicesClient />
}
