// components/Projects.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

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
    <section id="projects" ref={elementRef} className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
            My Projects
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden 
                  transform hover:-translate-y-2 transition-all duration-300 
                  hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-600 
                          rounded-full text-sm font-medium"
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
      </div>
    </section>
  );
}

export default Projects;
