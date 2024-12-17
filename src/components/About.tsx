// components/About.jsx
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Hello! I'm a passionate full-stack developer with a strong focus on
            creating intuitive and performant web applications. With several
            years of experience in modern web technologies, I enjoy turning
            complex problems into simple, beautiful solutions.
          </p>
          <p>
            My expertise includes React, Node.js, and modern CSS frameworks like
            Tailwind CSS. I'm constantly learning and exploring new technologies
            to stay at the forefront of web development.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source
            projects, writing technical articles, or exploring new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
