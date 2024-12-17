// components/Navbar.tsx
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold text-blue-600">Portfolio</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-white left-0 p-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#about"
            className="block py-2 text-gray-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
