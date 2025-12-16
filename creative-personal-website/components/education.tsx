"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

const education = [
  {
    school: "University Name",
    degree: "Bachelor of Science in Computer Science",
    period: "2020 - 2024",
    gpa: "3.9/4.0",
    achievements: [
      "Dean's List all semesters",
      "Computer Science Outstanding Student Award",
      "Research Assistant - Machine Learning Lab",
    ],
    courses: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    school: "High School Name",
    degree: "High School Diploma",
    period: "2016 - 2020",
    gpa: "4.0/4.0",
    achievements: ["Valedictorian", "National Merit Scholar", "AP Scholar with Distinction"],
    courses: [],
  },
]

export function Education() {
  const { ref, isInView } = useInView()

  return (
    <section id="education" className="py-24 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`space-y-4 mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            My academic journey and the foundation of my technical knowledge.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{edu.school}</h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.courses.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
