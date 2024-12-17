// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsPerson, BsCode, BsAward } from "react-icons/bs";
import { MdOutlineContactMail } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isMobile?: boolean;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const NavLink = ({
    href,
    children,
    icon,
    onClick,
    isMobile = false,
  }: NavLinkProps) => (
    <a
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-2 transition-all duration-300 
        ${
          isMobile
            ? "py-3 px-4 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-lg w-full justify-center"
            : "text-gray-800 hover:text-primary-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        }`}
    >
      {icon && (
        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      )}
      {children}
    </a>
  );

  const navLinks = [
    { href: "#about", text: "About", icon: <BsPerson /> },
    { href: "#projects", text: "Projects", icon: <AiOutlineProject /> },
    { href: "#skills", text: "Skills", icon: <BsCode /> },
    { href: "#certifications", text: "Certifications", icon: <BsAward /> },
    { href: "#contact", text: "Contact", icon: <MdOutlineContactMail /> },
  ];

  return (
    <nav
      className={`fixed w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <span className="text-2xl font-bold text-primary-600">TaskSoft</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href.slice(1));
                }}
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <RiCloseLine className="w-6 h-6 text-primary-600" />
            ) : (
              <RiMenu3Line className="w-6 h-6 text-primary-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-[-10px] opacity-0 invisible"
          }`}
        >
          <div className="p-4 space-y-1 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href.slice(1));
                }}
                isMobile
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
