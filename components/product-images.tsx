"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Upload, X, GripVertical } from "lucide-react"
import Image from "next/image"

interface ProductImage {
  url: string
  altText: string
  position: number
}

interface ProductImagesProps {
  images: ProductImage[]
  onImagesChange: (images: ProductImage[]) => void
}

export function ProductImages({ images, onImagesChange }: ProductImagesProps) {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileUpload = async (files: FileList) => {
    setUploading(true)
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        })

        if (response.ok) {
          const data = await response.json()
          return {
            url: data.url,
            altText: "",
            position: images.length,
          }
        } else {
          throw new Error("Upload failed")
        }
      })

      const newImages = await Promise.all(uploadPromises)
      onImagesChange([...images, ...newImages])

      toast({
        title: "Success",
        description: "Images uploaded successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload images",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    onImagesChange(newImages)
  }

  const updateAltText = (index: number, altText: string) => {
    const newImages = [...images]
    newImages[index] = { ...newImages[index], altText }
    onImagesChange(newImages)
  }

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images]
    const [movedImage] = newImages.splice(fromIndex, 1)
    newImages.splice(toIndex, 0, movedImage)

    // Update positions
    newImages.forEach((img, index) => {
      img.position = index
    })

    onImagesChange(newImages)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Media</CardTitle>
        <CardDescription>Add images, videos, or 3D models</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">{uploading ? "Uploading..." : "Add files or drop files to upload"}</p>
            <p className="text-xs text-gray-500 mt-1">Accept images, videos, or 3D models</p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = e.target.files
              if (files && files.length > 0) {
                handleFileUpload(files)
              }
            }}
          />

          {/* Image Grid */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square relative rounded-lg overflow-hidden border">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.altText || `Product image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />

                    {/* Controls */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Drag Handle */}
                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
                      <GripVertical className="h-4 w-4 text-white" />
                    </div>

                    {/* Primary Badge */}
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Primary</span>
                      </div>
                    )}
                  </div>

                  {/* Alt Text Input */}
                  <div className="mt-2">
                    <Input
                      placeholder="Alt text"
                      value={image.altText}
                      onChange={(e) => updateAltText(index, e.target.value)}
                      className="text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
