"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ImageIcon, ZoomIn } from "lucide-react"

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

export default function ExperienceGalleryEnhanced({
  title,
  company,
  period,
  description,
  skills,
  images,
  captions,
}: ExperienceGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Card className="overflow-hidden border-2 border-gray-200 hover:border-primary/30 transition-all duration-300">
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
              <div className="relative group">
                <div
                  className="aspect-video md:aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-gray-100 cursor-pointer transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                  onClick={() => setShowLightbox(true)}
                >
                  <img
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${company} - ${title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
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
                  <div className="mt-2 text-sm text-center text-gray-500 italic">{captions[currentImageIndex]}</div>
                )}
                {images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-primary hover:text-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-primary hover:text-white"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white bg-black/50 z-10 rounded-full"
              onClick={() => setShowLightbox(false)}
            >
              <ChevronRight className="h-6 w-6 rotate-45" />
            </Button>
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${company} - ${title}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {captions && captions[currentImageIndex] && (
              <div className="text-center text-white mt-4 p-2 bg-black/50 rounded-md">
                {captions[currentImageIndex]}
              </div>
            )}
            {images.length > 1 && (
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 rounded-full hover:bg-primary/80"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 rounded-full hover:bg-primary/80"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
