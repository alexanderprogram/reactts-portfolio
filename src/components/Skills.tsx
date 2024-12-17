// src/components/Skills.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { BiCode } from "react-icons/bi";
import { AiOutlineRobot } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiData } from "react-icons/bi";

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skills = [
    {
      category: "Web & Mobile",
      icon: <BiCode className="w-8 h-8" />,
      items: [
        { name: "Python", proficiency: 90 },
        { name: "PHP", proficiency: 85 },
        { name: "C#", proficiency: 80 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "JavaScript (React)", proficiency: 90 },
        { name: "Java (Android)", proficiency: 85 },
        { name: "Swift (iOS)", proficiency: 80 },
      ],
    },
    {
      category: "AI & Data",
      icon: <AiOutlineRobot className="w-8 h-8" />,
      items: [
        { name: "Natural Language Processing", proficiency: 85 },
        { name: "OCR", proficiency: 80 },
        { name: "Data Analytics", proficiency: 90 },
        { name: "SQL", proficiency: 95 },
        { name: "Tableau", proficiency: 85 },
      ],
    },
    {
      category: "Game Development",
      icon: <IoGameControllerOutline className="w-8 h-8" />,
      items: [
        { name: "Python (Godot)", proficiency: 85 },
        { name: "C# (Unity)", proficiency: 90 },
        { name: "VR Development", proficiency: 80 },
      ],
    },
    {
      category: "Databases",
      icon: <BiData className="w-8 h-8" />,
      items: [
        { name: "MySQL", proficiency: 90 },
        { name: "SQLite", proficiency: 85 },
        { name: "MongoDB", proficiency: 90 },
        { name: "Postgres", proficiency: 85 },
      ],
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
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary-600 mr-3">{skillGroup.icon}</div>
                  <h3 className="text-2xl font-semibold text-neutral-800">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="space-y-2"
                      style={{
                        transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transform origin-left transition-transform duration-1000"
                          style={{
                            transform: isVisible
                              ? `scaleX(${skill.proficiency / 100})`
                              : "scaleX(0)",
                          }}
                        />
                      </div>
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

export default Skills;
