"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink, ImageIcon, X } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  title: string
  description: string
  tags: string[]
  images: string[]
  captions?: string[]
  link: string
}

export default function ProjectGallery({ title, description, tags, images, captions, link }: ProjectGalleryProps) {
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
      <Card className="overflow-hidden">
        <div className="aspect-video overflow-hidden cursor-pointer relative" onClick={() => setShowLightbox(true)}>
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
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
          <div className="px-6 py-2 text-sm text-center text-gray-500 border-b">{captions[currentImageIndex]}</div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 text-gray-500 hover:text-primary" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 w-full justify-center items-center">
              <Button variant="outline" size="icon" onClick={prevImage} aria-label="Previous image">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500">
                View more images ({currentImageIndex + 1}/{images.length})
              </span>
              <Button variant="outline" size="icon" onClick={nextImage} aria-label="Next image">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      {showLightbox && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white bg-black/50 z-10"
              onClick={() => setShowLightbox(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {captions && captions[currentImageIndex] && (
              <div className="text-center text-white mt-2 p-2 bg-black/50">{captions[currentImageIndex]}</div>
            )}
            {images.length > 1 && (
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
                <Button variant="ghost" size="icon" className="bg-black/50" onClick={prevImage}>
                  <ChevronLeft className="h-8 w-8 text-white" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
                  Image {currentImageIndex + 1} of {images.length}
                </div>
                <Button variant="ghost" size="icon" className="bg-black/50" onClick={nextImage}>
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
