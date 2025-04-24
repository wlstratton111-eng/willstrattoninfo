"use client"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Mail, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-bold text-lg text-primary">William Stratton</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-6">
            <Link href="#about" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#experience" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Experience
            </Link>
            <Link href="#projects" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="#skills" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="mt-auto border-t pt-4">
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/william-stratton-wlstratton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:wlstratton111@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:4042340474">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
