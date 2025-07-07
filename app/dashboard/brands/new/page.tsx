import { BrandForm } from "@/components/brand-form"

export default function NewBrandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Brand</h1>
        <p className="text-muted-foreground">Add a new brand to your store</p>
      </div>
      <BrandForm />
    </div>
  )
}
