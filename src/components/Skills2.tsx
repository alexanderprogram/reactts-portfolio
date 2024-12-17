// src/components/Skills2.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { BiCode } from "react-icons/bi";
import { AiOutlineRobot } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiData } from "react-icons/bi";

function Skills2() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skills = [
    {
      category: "Web & Mobile",
      icon: <BiCode className="w-8 h-8" />,
      items: [
        "Python",
        "PHP",
        "C#",
        "HTML/CSS",
        "JavaScript (React)",
        "Java (Android)",
        "Swift (iOS)",
      ],
    },
    {
      category: "AI & Data",
      icon: <AiOutlineRobot className="w-8 h-8" />,
      items: [
        "Natural Language Processing",
        "OCR",
        "Data Analytics",
        "SQL",
        "Tableau",
      ],
    },
    {
      category: "Game Development",
      icon: <IoGameControllerOutline className="w-8 h-8" />,
      items: ["Python (Godot)", "C# (Unity)", "VR Development"],
    },
    {
      category: "Databases",
      icon: <BiData className="w-8 h-8" />,
      items: ["MySQL", "SQLite", "MongoDB", "Postgres"],
    },
  ];

  return (
    <section
      id="skills"
      ref={elementRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
            Skills & Technologies
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 group"
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary-600 mr-3 group-hover:scale-110 transition-transform duration-300">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-800">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 group/skill"
                      style={{
                        transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                      }}
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full group-hover/skill:scale-125 transition-transform duration-300" />
                      <span className="text-neutral-700 group-hover/skill:text-primary-600 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills2;
