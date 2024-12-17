// src/components/Certificates.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  badgeUrl?: string;
  skills: string[];
  icon: JSX.Element;
}

function Certificates() {
  const { elementRef, isVisible } = useScrollAnimation();

  const certificates: Certificate[] = [
    {
      title: "Web Developer Certificate",
      issuer: "Austin Community College",
      date: "2024",
      credentialLink: "#",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      icon: <PiCertificateBold className="w-12 h-12" />,
    },
    {
      title: "Economics Bachelor's Degree",
      issuer: "University of Texas at Austin",
      date: "2024",
      credentialLink: "#",
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Economic Theory",
        "Research Methods",
      ],
      icon: <FaUniversity className="w-12 h-12" />,
    },
    {
      title: "Programming & Computation Certificate",
      issuer: "University of Texas at Austin",
      date: "2024",
      credentialLink: "#",
      skills: [
        "Computational Analysis",
        "Advanced Programming",
        "Data Structures",
      ],
      icon: <FaUniversity className="w-12 h-12" />,
    },
    {
      title: "General Studies Associate",
      issuer: "Austin Community College",
      date: "2023",
      credentialLink: "#",
      skills: [
        "Critical Thinking",
        "Academic Writing",
        "Interdisciplinary Studies",
      ],
      icon: <IoSchoolOutline className="w-12 h-12" />,
    },
    {
      title: "Computer Programming Associate",
      issuer: "Austin Community College",
      date: "2023",
      credentialLink: "#",
      skills: [
        "Software Development",
        "Algorithm Design",
        "Database Management",
      ],
      icon: <PiCertificateBold className="w-12 h-12" />,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-white to-primary-50"
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
          Education & Certifications
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="mb-6 flex justify-center">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-neutral-800 mb-2 text-center">
                  {cert.title}
                </h3>

                <div className="text-neutral-600 mb-4 text-center">
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                </div>

                <div className="mb-4 flex flex-wrap gap-2 justify-center">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors group/link"
                  >
                    <span>View Details</span>
                    <HiOutlineExternalLink className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
