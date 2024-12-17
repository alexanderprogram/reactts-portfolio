// components/Skills.jsx
function Skills() {
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
          Skills & Technologies
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm transform hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
