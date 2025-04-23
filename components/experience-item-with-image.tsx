import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemWithImageProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  image?: string
}

export default function ExperienceItemWithImage({
  title,
  company,
  period,
  description,
  skills,
  image,
}: ExperienceItemWithImageProps) {
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
          {image && (
            <div className="aspect-video md:aspect-square overflow-hidden rounded-md">
              <img
                src={image || "/placeholder.svg"}
                alt={`${company} - ${title}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
