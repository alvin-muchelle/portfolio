import React, { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Alvin Muchelle";
  const typingSpeed = 100;

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            {text}
            {!isTypingComplete && (
              <span className="ml-1 border-r-4 border-primary animate-pulse" />
            )}
          </h1>

          {isTypingComplete && (
            <>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto animate-fade-in opacity-0">
                I am a software developer who loves designing clean, scalable
                applications. My goal is to build solutions that offer both
                exceptional performance and a delightful user experience.
              </p>
              <div className="flex justify-center gap-4 animate-fade-in opacity-0">
                <a
                  href="#projects"
                  className="bg-primary text-primary-foreground py-3 px-6 rounded font-medium transition-all 
                            hover:scale-105 hover:shadow-primary-glow focus:ring-2 focus:ring-ring"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-primary/50 text-primary hover:bg-primary/10 py-3 px-6 rounded font-medium 
                            transition-all hover:scale-105 focus:ring-2 focus:ring-ring"
                >
                  Contact Me
                </a>
              </div>
            </>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};