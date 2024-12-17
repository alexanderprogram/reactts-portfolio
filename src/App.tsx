// src/App.tsx
import { useState, useEffect } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Skills2 from "./components/Skills2";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Prevent scroll restoration on page load
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Handle content visibility after loading
    if (!isLoading) {
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }

    return () => {
      // Reset scroll restoration when component unmounts
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
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
          {/* <Skills2 /> */}
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
