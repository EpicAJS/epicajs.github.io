"use client"

import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Startup Inc.",
    period: "Jun 2024 - Aug 2024",
    location: "San Francisco, CA",
    description:
      "Worked on the core product team building features for a B2B SaaS platform. Collaborated with designers and product managers to ship user-facing features.",
    achievements: [
      "Built and deployed 5 major features affecting 10K+ users",
      "Reduced page load time by 40% through optimization",
      "Implemented comprehensive test coverage (85%)",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "University Research Lab",
    period: "Jan 2024 - Present",
    location: "Remote",
    description:
      "Developing web applications for academic research projects. Creating data visualization tools and analysis dashboards for research teams.",
    achievements: [
      "Built 3 research tools used by 50+ researchers",
      "Automated data processing pipeline",
      "Published open-source library with 200+ stars",
    ],
    skills: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "Jun 2023 - Dec 2023",
    location: "New York, NY",
    description:
      "Created responsive websites and web applications for various clients. Worked closely with design team to implement pixel-perfect interfaces.",
    achievements: [
      "Delivered 10+ client projects on time",
      "Improved client satisfaction scores by 30%",
      "Mentored 2 junior developers",
    ],
    skills: ["Vue.js", "Tailwind CSS", "Figma", "Git", "Agile"],
  },
]

export function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 px-4 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`space-y-4 mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Professional experience building production-ready applications and collaborating with cross-functional
            teams.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>Key Contributions</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground list-disc">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
