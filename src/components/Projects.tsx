// components/Projects.jsx
function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with React",
      tech: ["React", "Node.js", "Tailwind"],
      image: "https://placehold.co/600x400",
    },
    {
      title: "Social Media App",
      description: "A modern social networking platform",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
          My Projects
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
