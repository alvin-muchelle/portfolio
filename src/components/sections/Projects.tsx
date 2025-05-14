import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GradientText } from "../GradientText";

interface Project {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Vaccination tracker",
    description:
      "An app that allows mothers to track their new born children's vaccination regimens.",
    tech: ["React", "Typescript", "Express.js", "Node.js", "MongoDB"],
    href: "https://chanjo-chonjo.netlify.app/",
  },
  
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, description, tech, href }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-border hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary-glow transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-2">
                 <GradientText>{title}</GradientText>
                </h3>
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
                    className="bg-primary text-primary-foreground py-3 px-6 rounded font-medium transition-all 
                            hover:scale-105 hover:shadow-primary-glow focus:ring-2 focus:ring-ring"
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