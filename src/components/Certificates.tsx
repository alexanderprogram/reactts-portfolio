// src/components/Certificates.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  badgeUrl?: string;
  skills: string[];
}

function Certificates() {
  const { elementRef, isVisible } = useScrollAnimation();

  const certificates: Certificate[] = [
    {
      title: "Full Stack Web Development",
      issuer: "Meta",
      date: "2024",
      credentialLink: "https://example.com/credential/123",
      badgeUrl: "https://placehold.co/150",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Advanced TypeScript Development",
      issuer: "Microsoft",
      date: "2023",
      credentialLink: "https://example.com/credential/456",
      badgeUrl: "https://placehold.co/150",
      skills: ["TypeScript", "Design Patterns", "Testing"],
    },
    // Add more certificates as needed
  ];

  return (
    <section id="certifications" className="py-20 bg-white" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
          Certifications
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </h2>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {cert.badgeUrl && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={cert.badgeUrl}
                      alt={`${cert.title} badge`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  {cert.title}
                </h3>

                <div className="text-neutral-600 mb-4">
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span>View Credential</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
