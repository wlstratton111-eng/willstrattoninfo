import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  // Image paths for all sections
  const imagePaths = {
    profile: "/images/profile.jpg",
    verticalLift: {
      main: "/images/vertical-lift-1.jpg",
      side: "/images/vertical-lift-2.jpg",
      front: "/images/vertical-lift-3.jpg",
      closeup: "/images/vertical-lift-4.jpg",
      full: "/images/vertical-lift-5.jpg",
    },
    tracasa: {
      original: "/images/tracasa-pointcloud-original.png",
      pointcloud1: "/images/tracasa-pointcloud-1.jpg",
      pointcloud2: "/images/tracasa-pointcloud-2.jpg",
      model3d: "/images/tracasa-3d-model.jpg",
    },
    nightingale: {
      main: "/images/nightingale-drone.jpg",
      testing: "/images/nightingale-testing.jpg",
    },
    lunaguard: {
      main: "/images/lunaguard-project.jpg",
      thermal: "/images/lunaguard-thermal.jpg",
    },
    dbf: "/images/dbf-competition.jpg",
    rocket: {
      displacement: "/images/rocket-analysis.jpg",
      stress: "/images/rocket-stress.png",
    },
    pressureVessel: {
      main: "/images/pressure-vessel.jpg",
      analysis: "/images/pressure-analysis.jpg",
    },
  }

  // Experience descriptions as bullet points
  const experienceDescriptions = {
    verticalLift: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>
          Conducting in-depth experiments on coaxial, counter-rotating blades to analyze thrust and torque values using
          aerodynamic principles.
        </li>
        <li>
          Collecting data with load cells attached to each rotor, converting voltage to force, and performing fluid
          analysis in MATLAB.
        </li>
        <li>
          Studying how ground effect and turbulent forces affect the amount of power and thrust required for each blade.
        </li>
        <li>
          Collaborating with faculty researchers to develop novel testing methodologies for vertical lift systems.
        </li>
        <li>
          Implementing data acquisition systems to capture high-precision measurements of rotor performance under
          various conditions.
        </li>
        <li>
          Analyzing experimental results to identify optimal configurations for energy efficiency and thrust generation.
        </li>
        <li>
          Contributing to research papers and presentations that advance the understanding of coaxial rotor dynamics.
        </li>
      </ul>
    ),
    tracasa: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>
          Used 3D objects to simulate point-cloud scenes in a virtual setting to perform analysis on potential drone
          paths, heights, speeds and LiDAR sensors.
        </li>
        <li>Analyzed data in C++, and input the converted usable data into Helios++ to simulate virtual landscapes.</li>
        <li>
          Selected a 3D model, converted it into a usable object, ran tests and simulations, and reported findings to
          the company.
        </li>
        <li>
          Developed custom algorithms to optimize drone flight paths for maximum data collection efficiency while
          minimizing battery consumption.
        </li>
        <li>
          Collaborated with an international team to implement point cloud processing techniques that improved data
          accuracy by 27%.
        </li>
        <li>
          Created comprehensive documentation for simulation procedures that became the standard reference for new team
          members.
        </li>
        <li>
          Participated in weekly technical meetings to present findings and coordinate with cross-functional teams.
        </li>
      </ul>
    ),
    nightingale: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>Assisted the Flight Test team in running tests on security drones before shipping them to customers.</li>
        <li>
          Tested endurance and battery life, agility and individual rotor performance, navigation, flight distance and
          signal reception.
        </li>
        <li>
          Developed a portable battery replacement stand for the company in SolidWorks to enable battery changes in the
          field.
        </li>
        <li>Implemented standardized testing protocols that reduced pre-delivery quality assurance time by 15%.</li>
        <li>
          Conducted comprehensive flight performance analysis under various environmental conditions, including high
          winds and low visibility scenarios.
        </li>
        <li>
          Collaborated with the engineering team to identify and resolve hardware issues affecting drone stability and
          control systems.
        </li>
        <li>
          Created detailed technical reports documenting test results and recommendations for product improvements.
        </li>
      </ul>
    ),
  }

  // Project descriptions as bullet points
  const projectDescriptions = {
    lunaguard: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>
          Served as Head Thermal Engineer, leading the team in developing a hybrid multi-material blanket to resist
          high-heat and propulsive forces of a Lunar Landing.
        </li>
        <li>
          Developed Finite Element Analysis (FEA) in MATLAB for materials selection and thermal performance prediction.
        </li>
        <li>Created detailed SolidWorks models for comprehensive thermal analysis and simulation.</li>
        <li>Presented bi-yearly progress reports and technical findings to JPL and NASA representatives.</li>
        <li>
          Collaborated with interdisciplinary teams to integrate thermal protection systems with other lander
          components.
        </li>
      </ul>
    ),
    dbf: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>Served as Technical and Assembly Team Member for the 2024 AIAA Design, Build, Fly competition.</li>
        <li>
          Assisted the hardware team in soldering electrical components and assembling the fuselage, wings and other
          components.
        </li>
        <li>Contributed to design modifications that improved aircraft performance and reliability.</li>
        <li>Participated in test flights and performance analysis to optimize aircraft configuration.</li>
        <li>Our team placed 20th out of 107 national and international teams in the competition.</li>
      </ul>
    ),
    rocket: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>
          Used Structural Dynamics principles to analyze stress on a Rocket Body Engine under simulated 'earthquake'
          conditions.
        </li>
        <li>Developed custom code to model harmonic loading in X, Y, and Z directions simultaneously.</li>
        <li>Implemented Python solver algorithms to process complex structural equations efficiently.</li>
        <li>Utilized the Alabama Supercomputing Cluster to run computationally intensive simulations.</li>
        <li>Analyzed displacement and stress distribution patterns to identify critical structural vulnerabilities.</li>
      </ul>
    ),
    pressureVessel: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
        <li>Used Patran/Nastran software to analyze failure points for a self-developed pressure vessel.</li>
        <li>Conducted iterative design processes to optimize vessel geometry and material selection.</li>
        <li>Performed comprehensive stress and thermal analysis under various operating conditions.</li>
        <li>
          Developed and redeveloped designs to create a suitable pressure vessel that met all safety requirements.
        </li>
        <li>
          Demonstrated project development skills in the face of failures through systematic problem-solving approaches.
        </li>
      </ul>
    ),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold flex items-center gap-2">
            <span className="text-primary">William Stratton</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/william-stratton-wlstratton"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-4 md:gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">William Stratton</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Aerospace Engineering graduate with experience in drone technology, structural analysis, and thermal
                engineering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 bg-muted/50">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                I'm an Aerospace Engineering graduate from Auburn University with a minor in Computer Science. I have a
                strong foundation in programming languages including Python, MATLAB, Java, and C++.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                My experience spans research in aerodynamics, drone technology, and structural analysis. I'm passionate
                about applying engineering principles to solve complex problems in aerospace and beyond.
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Education:</span>
                  <span>Auburn University, Aerospace Engineering (GPA: 3.36/4.00)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Certification:</span>
                  <span>FAA Part 107 License (April 2025)</span>
                </div>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={imagePaths.profile || "/placeholder.svg"}
                alt="William Stratton at Auburn University"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              My professional journey and research experience.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            <div className="card p-6 border rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Undergraduate Research Assistant</h3>
                    <p className="text-primary font-medium">Vertical Lift Research Center of Excellence</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">May 2024 - December 2024</span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    {experienceDescriptions.verticalLift}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Aerodynamics", "MATLAB", "Data Analysis", "Fluid Dynamics"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video md:aspect-square overflow-hidden rounded-md">
                      <img
                        src={imagePaths.verticalLift.main || "/placeholder.svg"}
                        alt="Vertical Lift Research"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 border rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Data Gathering, Mapping and Simulations Intern</h3>
                    <p className="text-primary font-medium">Tracasa</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">May 2023 - July 2023</span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    {experienceDescriptions.tracasa}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["C++", "Helios++", "3D Modeling", "LiDAR", "Drone Path Planning"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video md:aspect-square overflow-hidden rounded-md">
                      <img
                        src={imagePaths.tracasa.original || "/placeholder.svg"}
                        alt="Tracasa LiDAR Point Cloud"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 border rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Flight Test/Drone Analyst Intern</h3>
                    <p className="text-primary font-medium">Nightingale Security</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">June 2022 - July 2022</span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    {experienceDescriptions.nightingale}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Drone Testing", "SolidWorks", "Flight Analysis", "Hardware Testing"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video md:aspect-square overflow-hidden rounded-md">
                      <img
                        src={imagePaths.nightingale.main || "/placeholder.svg"}
                        alt="Nightingale Security Drone"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 bg-muted/50">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Key projects and club activities I've been involved with.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div className="card p-6 border rounded-lg shadow-sm bg-white">
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <img
                  src={imagePaths.lunaguard.main || "/placeholder.svg"}
                  alt="LunaGuard Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">LunaGuard - NASA Human Lander Challenge</h3>
              {projectDescriptions.lunaguard}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Thermal Engineering", "MATLAB", "SolidWorks", "NASA", "Materials Science"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6 border rounded-lg shadow-sm bg-white">
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <img
                  src={imagePaths.dbf || "/placeholder.svg"}
                  alt="Design, Build, Fly Competition"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Design, Build, Fly Competition</h3>
              {projectDescriptions.dbf}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Aircraft Design", "Electronics", "Assembly", "Teamwork"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6 border rounded-lg shadow-sm bg-white">
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <img
                  src={imagePaths.rocket.displacement || "/placeholder.svg"}
                  alt="Rocket Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Structural Dynamic Analysis of a Rocket</h3>
              {projectDescriptions.rocket}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "Structural Analysis", "Supercomputing", "Rocket Design"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6 border rounded-lg shadow-sm bg-white">
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <img
                  src={imagePaths.pressureVessel.main || "/placeholder.svg"}
                  alt="Pressure Vessel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Failure Analysis of Pressure Vessel</h3>
              {projectDescriptions.pressureVessel}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Patran/Nastran", "Pressure Vessel Design", "Failure Analysis", "Engineering Design"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />

        <ContactSection email="wlstratton111@gmail.com" phone="(404) 234 0474" location="Atlanta, GA" />
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} William Stratton. All rights reserved.
          </p>
          <div className="flex gap-4">
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
      </footer>
    </div>
  )
}
