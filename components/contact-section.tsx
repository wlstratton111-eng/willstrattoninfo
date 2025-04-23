import { Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactSectionProps {
  email: string
  phone: string
  location: string
}

export default function ContactSection({ email, phone, location }: ContactSectionProps) {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </p>
      </div>
      <div className="mt-8 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <a href={`mailto:${email}`} className="text-lg text-gray-700 hover:text-primary dark:text-gray-300">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <a
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="text-lg text-gray-700 hover:text-primary dark:text-gray-300"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg text-gray-700 dark:text-gray-300">{location}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
