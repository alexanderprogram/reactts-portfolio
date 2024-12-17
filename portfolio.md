# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "reactts-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`

```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.tsx

```tsx
// src/App.tsx
import { useState, useEffect } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingAnimation onAnimationComplete={() => setIsLoading(false)} />
      )}
      <div
        className={`min-h-screen bg-neutral-50 transition-opacity duration-500 
        ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
        <main>
          <Hero isVisible={contentVisible} />
          <About />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

```

# src\assets\images\Alexander-Landaverde.jpg

This is a binary file of the type: Image

# src\assets\react.svg

This is a file of the type: SVG Image

# src\components\About.tsx

```tsx
// components/About.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={elementRef}
      className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
            About Me
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="mb-4 text-primary-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                Education
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                First-generation college student at UT Austin, pursuing
                Economics with a Programming Certificate, complemented by Web
                Programming studies at ACC.
              </p>
            </div>

            {/* Experience Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="mb-4 text-primary-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                Experience
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Technology Apprentice at Emerson Electric Co., developing
                AI-driven solutions and VR interfaces with proven productivity
                improvements.
              </p>
            </div>

            {/* Skills Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="mb-4 text-primary-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                Expertise
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Full-stack developer skilled in Python, JavaScript, React, and
                AI technologies, with a track record of building innovative
                solutions.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Let's Connect
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

```

# src\components\Certificates.tsx

```tsx
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

```

# src\components\Contact.tsx

```tsx
// components/Contact.jsx
function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
          Let's Connect
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
        </h2>
        <form className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 transform hover:shadow-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 transform hover:shadow-md"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 transform hover:shadow-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

```

# src\components\Footer.tsx

```tsx
// components/Footer.tsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

```

# src\components\Hero.tsx

```tsx
// src/components/Hero.tsx
import { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

function Hero({ isVisible }: HeroProps) {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationClass("opacity-100 transform-none");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left content */}
          <div
            className={`order-2 md:order-1 w-full max-w-2xl text-center md:text-left pl-0 md:pl-8 lg:pl-12
                       transition-all duration-700 transform ${animationClass}`}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4
                           transition-all duration-700 delay-300 transform 
                           ${
                             isVisible
                               ? "translate-y-0 opacity-100"
                               : "translate-y-8 opacity-0"
                           }`}
            >
              Hi, I'm{" "}
              <span className="block mt-2 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                Alexander Landaverde
              </span>
            </h1>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-6
                           transition-all duration-700 delay-500 transform
                           ${
                             isVisible
                               ? "translate-y-0 opacity-100"
                               : "translate-y-8 opacity-0"
                           }`}
            >
              Full Stack Developer
            </h2>
            <p
              className={`text-lg md:text-xl text-neutral-700 mb-8
                          transition-all duration-700 delay-700 transform
                          ${
                            isVisible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-8 opacity-0"
                          }`}
            >
              Crafting innovative digital solutions with modern technologies and
              creative problem-solving approaches
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start
                            transition-all duration-700 delay-900 transform
                            ${
                              isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg 
                          transform hover:scale-105 hover:bg-primary-700 
                          transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 
                          rounded-lg hover:bg-primary-50 transform hover:scale-105 
                          transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right content - Image */}
          <div
            className={`order-1 md:order-2 w-full flex justify-center px-6 md:px-8
                       transition-all duration-1000 delay-300 transform
                       ${
                         isVisible
                           ? "translate-x-0 opacity-100"
                           : "translate-x-8 opacity-0"
                       }`}
          >
            <div className="relative w-full max-w-md">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                <div
                  className="w-full h-full rounded-full border-4 border-primary-200 
                             overflow-hidden transform hover:scale-105 transition-transform 
                             duration-300 shadow-xl relative z-10"
                >
                  <img
                    src="/src/assets/images/Alexander-Landaverde.jpg"
                    alt="Alexander Landaverde - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative circle */}
              {/* <div
                className="absolute -z-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 
                           rounded-full border-4 border-primary-100 
                           top-4 left-4 right-0 mx-auto"
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

```

# src\components\LoadingAnimation.tsx

```tsx
// src/components/LoadingAnimation.tsx
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

function LoadingAnimation({ onAnimationComplete }: LoadingAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        onAnimationComplete();
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-primary-50 to-primary-100 
        flex items-center justify-center z-[9999]
        ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"}
        transition-opacity duration-500`}
    >
      <div className="relative transform-gpu">
        <svg
          className="w-[400px] h-[120px] md:w-[600px] md:h-[160px]"
          viewBox="0 0 600 160"
          aria-label="TaskSoft Logo Animation"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-8xl md:text-9xl font-bold select-none"
            fill="none"
            stroke="currentColor"
          >
            <tspan
              className="text-primary-600 animate-[strokeDraw_2s_ease-in-out_forwards]"
              strokeWidth="2"
              strokeDasharray="500"
              strokeDashoffset="500"
            >
              TaskSoft
            </tspan>
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-8xl md:text-9xl font-bold select-none"
          >
            <tspan
              className="fill-primary-600 animate-[fillText_1s_ease-in-out_1s_forwards]"
              fillOpacity="0"
            >
              TaskSoft
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default LoadingAnimation;

```

# src\components\Navbar.tsx

```tsx
// src/components/Navbar.tsx
import { useState } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(href.slice(1));
      }}
      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 
                 relative after:content-[''] after:absolute after:w-full after:h-0.5 
                 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 
                 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold text-blue-600">TaskSoft</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-white left-0 p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <a
            href="#about"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("certifications");
            }}
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

```

# src\components\Projects.tsx

```tsx
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

```

# src\components\Skills.tsx

```tsx
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

```

# src\hooks\useScrollAnimation.tsx

```tsx
// src/hooks/useScrollAnimation.tsx
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isVisible };
}

```

# src\hooks\useSmoothScroll.tsx

```tsx
// src/hooks/useSmoothScroll.tsx
export const useSmoothScroll = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return { scrollToSection };
};

```

# src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Adjust this value based on your navbar height */
}

/* Custom Scrollbar Styles */
/* For Webkit browsers (Chrome, Safari, newer versions of Opera) */
::-webkit-scrollbar {
  width: 8px; /* Made slightly thinner */
}

::-webkit-scrollbar-track {
  background: #f8fafc; /* Changed to neutral-50 for subtlety */
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1; /* Using a neutral gray color */
  border-radius: 20px; /* Increased radius for smoother look */
  border: 2px solid #f8fafc; /* Matching track color */
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8; /* Subtle hover effect */
}

/* For Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f8fafc; /* Using the same neutral colors */
}

```

# src\main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

# src\vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f6ff", // Lightest blue, great for backgrounds
          100: "#e0eeff", // Light blue, for hover states
          200: "#bad9ff", // Soft blue, for secondary elements
          300: "#7eb6ff", // Medium light blue
          400: "#4891ff", // Bright blue
          500: "#1a6dff", // Primary blue
          600: "#0050e0", // Darker blue for hover states
          700: "#0040b8", // Deep blue for text
          800: "#003494", // Very dark blue
          900: "#002670", // Darkest blue
        },
        neutral: {
          50: "#f8fafc", // Nearly white
          100: "#f1f5f9", // Very light gray
          800: "#1e293b", // Dark gray for text
          900: "#0f172a", // Nearly black
        },
        accent: {
          100: "#fef3c7", // Light yellow for highlights
          200: "#fde68a", // Muted yellow
          500: "#f59e0b", // Orange/yellow for CTAs
        },
      },
      zIndex: {
        9999: "9999",
      },
      transform: {
        gpu: "translateZ(0)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "slide-down": "slideDown 0.7s ease-out forwards",
        "width-grow": "widthGrow 0.7s ease-out forwards",
        pulse: "pulse 1s ease-in-out infinite",
        "stroke-draw": "strokeDraw 1.5s ease-out forwards",
        "fill-text": "fillText 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-100%) skewX(-12deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) skewX(-12deg)",
            opacity: "1",
          },
        },
        widthGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
        },
        strokeDraw: {
          "0%": {
            strokeDashoffset: "500",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
        fillText: {
          "0%": {
            fillOpacity: "0",
          },
          "100%": {
            fillOpacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}

```

# vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

