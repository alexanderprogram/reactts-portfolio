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
    <section className="min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
          {/* Left content */}
          <div
            className={`order-2 md:order-1 w-full max-w-2xl text-center md:text-left pl-0 md:pl-8 lg:pl-12
                       transition-all duration-700 transform ${animationClass}`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4
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
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-4 md:mb-6
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
              className={`text-base sm:text-lg md:text-xl text-neutral-700 mb-6 md:mb-8
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
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start
                            transition-all duration-700 delay-900 transform
                            ${
                              isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
            >
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg 
                          transform hover:scale-105 hover:bg-primary-700 
                          transition-all duration-300 shadow-md hover:shadow-lg
                          text-sm sm:text-base"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-600 text-primary-600 
                          rounded-lg hover:bg-primary-50 transform hover:scale-105 
                          transition-all duration-300
                          text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right content - Image */}
          <div
            className={`order-1 md:order-2 w-full flex justify-center px-4 sm:px-6 md:px-8
                       transition-all duration-1000 delay-300 transform
                       ${
                         isVisible
                           ? "translate-x-0 opacity-100"
                           : "translate-x-8 opacity-0"
                       }`}
          >
            <div className="relative w-full max-w-md">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
