// src/components/sections/Projects.tsx
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

interface Project {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    tech: ["React", "Node.js", "AWS", "Docker"],
    href: "https://chanjo-chonjo.netlify.app/",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    tech: ["Python", "TensorFlow", "D3.js", "Flask"],
    href: "#",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    tech: ["Socket.IO", "Express", "React", "Redis"],
    href: "#",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, description, tech, href }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-border hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary-glow transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-accent/10 text-accent-foreground py-1 px-3 rounded-full text-sm transition-all hover:bg-accent/20 hover:shadow-accent-glow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={href} 
                    className="text-accent hover:text-accent/80 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};