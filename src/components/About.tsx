// src/components/About.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";

function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  const aboutCards = [
    {
      title: "Education",
      icon: <PiGraduationCapDuotone className="w-8 h-8" />,
      description:
        "First-generation college student at UT Austin, pursuing Economics with a Programming Certificate, complemented by Web Programming studies at ACC.",
    },
    {
      title: "Experience",
      icon: <MdOutlineBusinessCenter className="w-8 h-8" />,
      description:
        "Technology Apprentice at Emerson Electric Co., developing AI-driven solutions and VR interfaces with proven productivity improvements.",
    },
    {
      title: "Expertise",
      icon: <BiCodeAlt className="w-8 h-8" />,
      description:
        "Full-stack developer skilled in Python, JavaScript, React, and AI technologies, with a track record of building innovative solutions.",
    },
  ];

  return (
    <section
      id="about"
      ref={elementRef}
      className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
            About Me
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 text-primary-600">{card.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 group"
            >
              Let's Connect
              <HiOutlineArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
