import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const projects = {
  "project-1": {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with modern web technologies. Features include real-time inventory management, secure payment processing with Stripe, comprehensive admin dashboard, and responsive design.",
    image: "/placeholder.svg?key=yokel",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
    date: "October 2024",
    team: "Solo Project",
    overview:
      "This project was built to demonstrate full-stack development capabilities, focusing on creating a seamless shopping experience with robust backend infrastructure. The platform handles product management, user authentication, order processing, and payment integration.",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart with real-time updates",
      "Secure checkout with Stripe integration",
      "Admin dashboard for inventory management",
      "Order tracking and email notifications",
      "Responsive design for all devices",
    ],
    challenges:
      "The main challenge was implementing a reliable payment system while ensuring data security. I solved this by leveraging Stripe's secure APIs and implementing proper error handling and validation throughout the checkout process.",
    impact:
      "The platform successfully handles 1000+ products and processes multiple concurrent transactions. It has been used as a reference implementation for similar projects.",
  },
  "project-2": {
    title: "AI Chat Application",
    description:
      "A sophisticated real-time chat application powered by artificial intelligence, featuring natural language processing, context-aware responses, and seamless WebSocket communication.",
    image: "/placeholder.svg?key=b4rbg",
    tags: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
    date: "September 2024",
    team: "2 Developers",
    overview:
      "An intelligent chat application that leverages AI to provide helpful, context-aware responses. Built with real-time communication in mind, it offers a smooth user experience with instant message delivery and smart suggestions.",
    features: [
      "Real-time messaging with WebSocket",
      "AI-powered response generation",
      "Context-aware conversation history",
      "Message search and filtering",
      "User authentication and profiles",
      "Typing indicators and read receipts",
    ],
    challenges:
      "Managing WebSocket connections at scale and ensuring low-latency AI responses required careful architecture. Implemented connection pooling and response caching to optimize performance.",
    impact:
      "The application handles 500+ concurrent users with sub-100ms message latency, providing a seamless chat experience comparable to major messaging platforms.",
  },
  "project-3": {
    title: "Task Management Dashboard",
    description:
      "A collaborative task management system featuring drag-and-drop functionality, team analytics, real-time updates, and comprehensive project tracking capabilities.",
    image: "/placeholder.svg?key=50hi0",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js", "Vuex", "Firestore"],
    github: "https://github.com",
    demo: "https://example.com",
    date: "August 2024",
    team: "3 Developers",
    overview:
      "A comprehensive task management solution designed for teams to collaborate effectively. Features include drag-and-drop task organization, team analytics, deadline tracking, and real-time synchronization across all team members.",
    features: [
      "Drag-and-drop task organization",
      "Real-time collaboration",
      "Team analytics and reporting",
      "Deadline tracking and notifications",
      "Project and task templates",
      "File attachments and comments",
    ],
    challenges:
      "Implementing smooth drag-and-drop with real-time updates across multiple users required careful state management. Utilized Firebase's real-time database with optimistic UI updates to maintain responsiveness.",
    impact:
      "Used by 50+ teams to manage their projects, with users reporting 40% improvement in task completion rates and better team coordination.",
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="default" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border border-border/50">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Challenges & Solutions</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Impact</h2>
              <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
