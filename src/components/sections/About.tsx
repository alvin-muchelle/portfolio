import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GradientText } from "../GradientText"; 

export const About: React.FC = () => {
  const frontendSkills: string[] = ["React.js", "Next.js", "TypeScript", "TailwindCSS"];
  const backendSkills: string[] = ["Node.js", "Express.js", "Python", "AWS", "PostreSQL", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GradientText>About Me</GradientText>
          </h2>

          <div className="rounded-xl p-8 border border-border hover:-translate-y-1 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4">
                  <GradientText>Frontend</GradientText>
                </h3>
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
                <h3 className="text-xl font-bold mb-4">
                  <GradientText>Backend</GradientText>
                </h3>
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

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            <div className="p-6 rounded-xl border border-border hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-6">
                <GradientText>Education</GradientText>
              </h3>
              <div className="text-muted-foreground">
                <div className="space-y-2">
                  <div className="text-foreground text-lg font-semibold">
                    B.Sc Electrical and Electronics Engineering - 2023
                  </div>
                  <div className="text-base">
                    Jomo Kenyatta University of Agriculture and Technology
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-6">
                <GradientText>Experience</GradientText>
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <div className="space-y-1">
                  <div className="text-foreground text-lg font-semibold">
                    Operations Assistant - NCBA Group
                  </div>
                  <div className="text-base text-muted-foreground font-bold">
                    Oct 2023 - Feb 2024
                  </div>
                  <div>
                    <h3>Key Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                      <li>
                        Performed exploratory testing on new digital banking products to ensure alignment with bank business requirements.
                      </li>
                      <li>
                        Conducted comprehensive data analysis on NCBA SASA customers to develop business insights on how customers borrow money.
                      </li>
                      <li>
                        Solved customer issues raised via email concerning issues they were encountering during lending from the NCBA SASA platform.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};