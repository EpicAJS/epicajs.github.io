"use client"

import { Trophy, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

const hackathons = [
  {
    name: "TechCrunch Disrupt 2024",
    date: "Sep 2024",
    award: "1st Place",
    project: "AI-Powered Code Review Tool",
    description:
      "Built an intelligent code review assistant that analyzes pull requests and provides actionable feedback.",
    team: "4 members",
    tags: ["AI", "Python", "GitHub API"],
  },
  {
    name: "HackMIT 2024",
    date: "May 2024",
    award: "Best UI/UX",
    project: "Campus Connect",
    description: "Created a social platform connecting students with shared interests and study groups.",
    team: "3 members",
    tags: ["React", "Firebase", "Figma"],
  },
  {
    name: "ETHGlobal San Francisco",
    date: "Nov 2023",
    award: "Top 10 Finalist",
    project: "DecentralFinance",
    description: "Developed a decentralized lending platform with smart contracts and Web3 integration.",
    team: "5 members",
    tags: ["Solidity", "Web3", "TypeScript"],
  },
]

export function Hackathons() {
  const { ref, isInView } = useInView()

  return (
    <section id="hackathons" className="py-24 px-4 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`space-y-4 mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Hackathons</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Rapid prototyping and innovation under pressure. Here are some hackathons where I've competed and won.
          </p>
        </div>

        <div className="space-y-6">
          {hackathons.map((hackathon, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold mb-1">{hackathon.name}</h3>
                        <p className="text-lg text-primary font-medium">{hackathon.project}</p>
                      </div>
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        <Trophy className="h-3 w-3 mr-1" />
                        {hackathon.award}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{hackathon.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{hackathon.team}</span>
                    </div>
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
