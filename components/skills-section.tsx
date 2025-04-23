import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "MATLAB", "Java", "C++"],
    },
    {
      category: "Engineering Software",
      skills: ["SolidWorks", "Patran/Nastran", "VisIT", "Helios++", "CloudCompare"],
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "LabView", "Conda"],
    },
    {
      category: "Engineering Disciplines",
      skills: [
        "Aerospace Engineering",
        "Thermal Analysis",
        "Structural Analysis",
        "Fluid Dynamics",
        "Drone Technology",
      ],
    },
    {
      category: "Certifications",
      skills: ["FAA Part 107 License"],
    },
  ]

  return (
    <section id="skills" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Technical skills and competencies I've developed through education and experience.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.category} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
