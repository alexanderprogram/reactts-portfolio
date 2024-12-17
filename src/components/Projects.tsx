// src/components/Projects.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { HiOutlineExternalLink } from "react-icons/hi";
import gameWorthWizard from "../assets/images/gameworthwizard.png";
import discoverLocalLore from "../assets/images/discoverlocallore.png";

function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Game Worth Wizard",
      description:
        "A platform for estimating gaming account values across popular titles like League of Legends, CS2, and Fortnite, featuring premium analytics and account tracking.",
      tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      image: gameWorthWizard,
      link: "https://gameworthwizard.com",
    },
    {
      title: "Discover Local Lore",
      description:
        "A tourism platform connecting travelers with local tour guides, featuring custom tour creation, interactive maps, and secure payment processing.",
      tech: ["React", "Firebase", "Node.js", "Google Maps API", "Stripe"],
      image: discoverLocalLore,
      link: "https://discoverlocallore.com",
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
          <div className="grid md:grid-cols-2 gap-8">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <HiOutlineExternalLink className="w-10 h-10 text-white" />
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-neutral-800">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <HiOutlineExternalLink className="w-5 h-5" />
                    </a>
                  </div>
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
