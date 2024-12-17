// components/Skills.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "VS Code", "Docker", "AWS"] },
  ];

  return (
    <section id="skills" ref={elementRef} className="py-20 bg-gray-50">
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
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-50 text-primary-600 
                        rounded-lg text-sm transform hover:scale-105 
                        hover:bg-primary-100 transition-all duration-300 
                        cursor-default"
                      style={{
                        transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                      }}
                    >
                      {skill}
                    </span>
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
