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
