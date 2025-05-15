import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,  
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GradientText } from "../GradientText";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12" 
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <GradientText>Let's link!</GradientText>
        </h2>
        <div className="flex justify-center space-x-6 mb-8"> 
          <a 
            href="mailto:muchellealvin@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a 
            href="https://www.linkedin.com/in/alvin-muchelle-97b7151ba"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a 
            id="profile-link" 
            href="https://github.com/alvin-muchelle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};