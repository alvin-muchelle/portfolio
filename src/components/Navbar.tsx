import React, { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  className,
}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg ${className || ""}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-foreground">
            Alvin <span className="text-primary">Muchelle</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-foreground"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
