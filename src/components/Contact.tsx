// components/Contact.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={elementRef} className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-16 text-center">
            Let's Connect
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg 
              hover:bg-primary-700 transition-all duration-300 transform 
              hover:shadow-lg active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
