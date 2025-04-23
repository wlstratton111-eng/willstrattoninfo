"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ExperienceGalleryProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  images: string[]
  captions?: string[]
}

export default function ExperienceGallery({
  title,
  company,
  period,
  description,
  skills,
  images,
  captions,
}: ExperienceGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
          </div>
          <p className="text-primary font-medium">{company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          {images.length > 0 && (
            <div className="relative">
              <div className="aspect-video md:aspect-square overflow-hidden rounded-md relative">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${company} - ${title}`}
                  className="w-full h-full object-cover"
                />
                {images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span>
                      {currentImageIndex + 1}/{images.length}
                    </span>
                  </div>
                )}
              </div>
              {captions && captions[currentImageIndex] && (
                <div className="mt-2 text-sm text-center text-gray-500">{captions[currentImageIndex]}</div>
              )}
              {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-3">
                  <Button variant="outline" size="icon" onClick={prevImage} aria-label="Previous image">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextImage} aria-label="Next image">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
