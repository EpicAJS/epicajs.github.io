"use client"

import { Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

const leadership = [
  {
    role: "President",
    organization: "Computer Science Society",
    period: "2023 - Present",
    description:
      "Leading a community of 200+ students. Organized 15+ technical workshops, hackathons, and networking events.",
    achievements: ["Increased membership by 150%", "Secured $10K in sponsorships", "Launched mentorship program"],
  },
  {
    role: "Technical Lead",
    organization: "Developer Student Club",
    period: "2022 - 2023",
    description:
      "Managed technical projects and workshops. Mentored junior developers and coordinated with industry partners.",
    achievements: ["Led 8 successful workshops", "Built 3 open-source projects", "Mentored 25+ students"],
  },
  {
    role: "Vice President",
    organization: "Robotics Club",
    period: "2021 - 2022",
    description: "Coordinated team logistics and competition preparation. Managed budget and outreach initiatives.",
    achievements: [
      "Won regional robotics competition",
      "Organized community STEM events",
      "Grew club from 20 to 60 members",
    ],
  },
]

export function Leadership() {
  const { ref, isInView } = useInView()

  return (
    <section id="leadership" className="py-24 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`space-y-4 mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Leadership & Clubs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building communities, mentoring peers, and creating impact through leadership roles in student
            organizations.
          </p>
        </div>

        <div className="space-y-6">
          {leadership.map((item, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-lg text-primary">{item.organization}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground list-disc">
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
