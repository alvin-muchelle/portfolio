import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About: React.FC = () => {
  const frontendSkills: string[] = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills: string[] = ["Node.js", "Express.js", "Python", "AWS", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-border hover:-translate-y-1 transition-all duration-200">
            <p className="text-muted-foreground mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4 text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accent text-accent-foreground py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-accent-glow transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4 text-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accent text-accent-foreground py-1 px-3 rounded-full text-sm hover:bg-accent/20 hover:shadow-accent-glow transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-border hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-4 text-foreground">🏫 Education</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">B.S. in Computer Science</strong> - XYZ University (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-4 text-foreground">💼 Work Experience</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">
                    Software Engineer at ABC Corp (2020 - Present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>
                    Assisted in building front-end components and integrating
                    REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};