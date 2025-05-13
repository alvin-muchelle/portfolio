import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Main content container */}
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar with higher z-index */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="z-50" />
        
        {/* ModeToggle positioned below navbar */}
        <div className="fixed top-20 right-4 z-40">
          <ModeToggle />
        </div>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;