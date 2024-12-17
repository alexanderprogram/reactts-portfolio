// src/components/Navbar.tsx
import { useState } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(href.slice(1));
      }}
      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 
                 relative after:content-[''] after:absolute after:w-full after:h-0.5 
                 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 
                 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold text-blue-600">TaskSoft</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-white left-0 p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <a
            href="#about"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("certifications");
            }}
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
