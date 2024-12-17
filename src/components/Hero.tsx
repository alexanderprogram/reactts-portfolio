// components/Hero.tsx
function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      {/* Changed the container class and added better centering */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left content - Updated classes for better alignment */}
          <div className="order-2 md:order-1 w-full max-w-2xl text-center md:text-left animate-fade-in pl-0 md:pl-8 lg:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 animate-slide-up">
              Hi, I'm{" "}
              <span className="block mt-2 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                Alexander Landaverde
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-6 animate-slide-up delay-100">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 animate-slide-up delay-150">
              Crafting innovative digital solutions with modern technologies and
              creative problem-solving approaches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up delay-300">
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

          {/* Right content - Image - Updated for better centering */}
          <div className="order-1 md:order-2 animate-fade-in w-full flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80">
                <div
                  className="w-full h-full rounded-full border-4 border-primary-200 
                              overflow-hidden transform hover:scale-105 transition-transform 
                              duration-300 shadow-xl"
                >
                  <img
                    src="/src/assets/images/Alexander-Landaverde.jpg"
                    alt="Alexander Landaverde - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative circle */}
              <div
                className="absolute -z-10 w-60 h-60 md:w-80 md:h-80 
                            rounded-full border-4 border-primary-100 
                            top-4 left-4 md:top-6 md:left-6"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
