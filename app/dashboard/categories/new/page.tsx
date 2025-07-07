import { CategoryForm } from "@/components/category-form"

export default function NewCategoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Category</h1>
        <p className="text-muted-foreground">Add a new category to your store</p>
      </div>
      <CategoryForm />
    </div>
  )
}
