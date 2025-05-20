import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import ProjectGallery from "@/components/project-gallery"
import MobileNav from "@/components/mobile-nav"
import ExperienceGalleryEnhanced from "@/components/experience-gallery-enhanced"

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
                  <span>Auburn University, B.S. Aerospace Engineering, Minor in Computer Science (GPA: 3.36/4.00)</span>
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
            <ExperienceGalleryEnhanced
              title="Robotics Technician"
              company="Serve Robotics"
              period="April 2025 - Present"
              description="Supporting the launch of Serve Robotics' Atlanta operations as one of the first technicians on the ground. Playing a key role in establishing local workflows and operational readiness for autonomous sidewalk delivery. Performing hands-on diagnostics, maintenance, and field service of delivery robots to ensure high fleet reliability and uptime. Collaborating with cross-functional teams to report issues, optimize robot performance, and improve service processes. Contributing to the successful deployment and scaling of cutting-edge robotics technology in a dynamic urban environment."
              skills={["Robotics", "Diagnostics", "Maintenance", "Field Service", "Autonomous Systems"]}
              images={["/images/Serve-robotics.jpg"]}
              captions={["Serve Robotics Autonomous Delivery Robot"]}
            />
            <ExperienceGalleryEnhanced
              title="Undergraduate Research Assistant"
              company="Vertical Lift Research Center of Excellence"
              period="May 2024 - December 2024"
              description="Conducting in-depth experiments on coaxial, counter-rotating blades to analyze thrust and torque values using aerodynamic principles. Collecting data with load cells attached to each rotor, converting voltage to force, and performing fluid analysis in MATLAB. Studying how ground effect and turbulent forces affect the amount of power and thrust required for each blade. Collaborating with faculty researchers to develop novel testing methodologies for vertical lift systems. Implementing data acquisition systems to capture high-precision measurements of rotor performance under various conditions. Analyzing experimental results to identify optimal configurations for energy efficiency and thrust generation. Contributing to research papers and presentations that advance the understanding of coaxial rotor dynamics in next-generation aircraft designs."
              skills={["Aerodynamics", "MATLAB", "Data Analysis", "Fluid Dynamics"]}
              images={[
                imagePaths.verticalLift.main,
                imagePaths.verticalLift.side,
                imagePaths.verticalLift.front,
                imagePaths.verticalLift.closeup,
                imagePaths.verticalLift.full,
              ]}
              captions={[
                "Coaxial Rotor Test Setup - Front View",
                "Coaxial Rotor Test Setup - Side View",
                "Coaxial Rotor Test Setup - Front Angle",
                "Coaxial Rotor Mechanism - Close-up",
                "Complete Test Platform with Circular Ground Effect Surface",
              ]}
            />
            <ExperienceGalleryEnhanced
              title="Data Gathering, Mapping and Simulations Intern"
              company="Tracasa"
              period="May 2023 - July 2023"
              description="Used 3D objects to simulate point-cloud scenes in a virtual setting to perform analysis on potential drone paths, heights, speeds and LiDAR sensors. Analyzed data in C++, and input the converted usable data into Helios++ to simulate virtual landscapes. Selected a 3D model, converted it into a usable object, ran tests and simulations, and reported findings to the company. Developed custom algorithms to optimize drone flight paths for maximum data collection efficiency while minimizing battery consumption. Collaborated with an international team to implement point cloud processing techniques that improved data accuracy by 27%. Created comprehensive documentation for simulation procedures that became the standard reference for new team members. Participated in weekly technical meetings to present findings and coordinate with cross-functional teams across multiple countries. Assisted in the development of a machine learning approach to automatically classify terrain features from LiDAR data, significantly reducing manual processing time."
              skills={["C++", "Helios++", "3D Modeling", "LiDAR", "Drone Path Planning"]}
              images={[
                imagePaths.tracasa.original,
                imagePaths.tracasa.pointcloud1,
                imagePaths.tracasa.pointcloud2,
                imagePaths.tracasa.model3d,
              ]}
              captions={[
                "Auburn University Samford Hall LiDAR Point Cloud",
                "LiDAR Point Cloud Visualization - Aerial View",
                "LiDAR Point Cloud Visualization - Top View",
                "3D Model Rendering from Point Cloud Data",
              ]}
            />
            <ExperienceGalleryEnhanced
              title="Flight Test/Drone Analyst Intern"
              company="Nightingale Security"
              period="June 2022 - July 2022"
              description="Assisted the Flight Test team in running tests on security drones before shipping them to customers. Tested endurance and battery life, agility and individual rotor performance, navigation, flight distance and signal reception. Developed a portable battery replacement stand for the company in SolidWorks to enable battery changes in the field. Implemented standardized testing protocols that reduced pre-delivery quality assurance time by 15% while maintaining rigorous performance standards. Conducted comprehensive flight performance analysis under various environmental conditions, including high winds and low visibility scenarios. Collaborated with the engineering team to identify and resolve hardware issues affecting drone stability and control systems. Created detailed technical reports documenting test results and recommendations for product improvements. Participated in client demonstrations to showcase drone capabilities and explain technical specifications to potential customers. Contributed to the development of emergency response procedures for various drone malfunction scenarios."
              skills={["Drone Testing", "SolidWorks", "Flight Analysis", "Hardware Testing"]}
              images={[imagePaths.nightingale.main, imagePaths.nightingale.testing]}
              captions={["Security Drone Model", "Drone Testing Platform"]}
            />
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
            <ProjectGallery
              title="LunaGuard - NASA Human Lander Challenge"
              description="As Head Thermal Engineer, I led the team in developing a hybrid multi-material blanket to resist high-heat and propulsive forces of a Lunar Landing. Developed FEA in MATLAB for materials selection and created SolidWorks models for thermal analysis. Presented bi-yearly meetings with JPL and NASA. Collaborated with interdisciplinary teams to integrate thermal protection systems with other lander components. Conducted extensive material testing to identify optimal combinations for heat resistance and durability under extreme conditions. Implemented innovative design solutions to address the unique challenges of lunar dust contamination and thermal cycling in the vacuum of space."
              tags={["Thermal Engineering", "MATLAB", "SolidWorks", "NASA", "Materials Science"]}
              images={[imagePaths.lunaguard.main, imagePaths.lunaguard.thermal]}
              captions={["Beta 1D Thermal Test", "LunaGuard 1D Thermal FEA Model"]}
              link="#"
            />
            <ProjectCard
              title="Design, Build, Fly Competition"
              description="Technical and Assembly Team Member for the 2024 AIAA DBF competition. Assisted the hardware team in soldering electrical components and assembling the fuselage, wings and other components. Contributed to design modifications that improved aircraft performance and reliability. Participated in test flights and performance analysis to optimize aircraft configuration. Our team placed 20th out of 107 national and international teams in the competition, demonstrating exceptional teamwork and engineering capabilities in a highly competitive environment."
              tags={["Aircraft Design", "Electronics", "Assembly", "Teamwork"]}
              image={imagePaths.dbf}
              link="#"
            />
            <ProjectGallery
              title="Structural Dynamic Analysis of a Rocket"
              description="Used Structural Dynamics to analyze stress on a Rocket Body Engine under an 'earthquake' composed of harmonic loading in X, Y, and Z directions. Coded the solver in Python and ran it by accessing the Alabama Supercomputing Cluster. Developed custom code to model harmonic loading in multiple directions simultaneously. Implemented Python solver algorithms to process complex structural equations efficiently. Analyzed displacement and stress distribution patterns to identify critical structural vulnerabilities and proposed design modifications to enhance structural integrity under extreme conditions."
              tags={["Python", "Structural Analysis", "Supercomputing", "Rocket Design"]}
              images={[imagePaths.rocket.displacement, imagePaths.rocket.stress]}
              captions={["Displacement Analysis (disp_x)", "Stress Analysis (sigma_zx)"]}
              link="#"
            />
            <ProjectGallery
              title="Failure Analysis of Pressure Vessel"
              description="Used Patran/Nastran to analyze failure points for a self-developed pressure vessel. Developed and redeveloped designs to create a suitable pressure vessel, demonstrating project development skills in the face of failures. Conducted iterative design processes to optimize vessel geometry and material selection. Performed comprehensive stress and thermal analysis under various operating conditions. Demonstrated systematic problem-solving approaches through multiple design iterations, ultimately creating a pressure vessel that exceeded safety requirements while minimizing weight and manufacturing complexity."
              tags={["Patran/Nastran", "Pressure Vessel Design", "Failure Analysis", "Engineering Design"]}
              images={[imagePaths.pressureVessel.main, imagePaths.pressureVessel.analysis]}
              captions={["Pressure Vessel Model", "Thermal/Stress Analysis"]}
              link="#"
            />
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
