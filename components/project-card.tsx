import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
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
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
