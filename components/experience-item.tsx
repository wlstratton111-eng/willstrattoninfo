import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export default function ExperienceItem({ title, company, period, description, skills }: ExperienceItemProps) {
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
      <CardContent className="space-y-4">
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
