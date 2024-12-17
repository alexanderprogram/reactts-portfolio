// src/components/Skills.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skills = [
    {
      category: "Web & Mobile",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6.253v13h-1.25v-13H12zm1.25 13v-13h1.25v13H13.25zm-7.5-13v13H5.5v-13h.75zm11.25 13v-13h.75v13h-.75zM9.5 6.253v13H8.25v-13H9.5zm7.5 13v-13h.75v13h-.75z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      items: [
        { name: "Python (Godot)", proficiency: 85 },
        { name: "C# (Unity)", proficiency: 90 },
        { name: "VR Development", proficiency: 80 },
      ],
    },
    {
      category: "Databases",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 4.48 2 7.5v9C2 19.52 6.48 22 12 22s10-2.48 10-5.5v-9C22 4.48 17.52 2 12 2zm0 18c-4.42 0-8-1.79-8-4v-1.07c2.07 1.87 5.18 2.95 8 2.95s5.93-1.08 8-2.95V16c0 2.21-3.58 4-8 4zm0-6c-4.42 0-8-1.79-8-4v-1.07c2.07 1.87 5.18 2.95 8 2.95s5.93-1.08 8-2.95V10c0 2.21-3.58 4-8 4zm0-6c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4z" />
        </svg>
      ),
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
