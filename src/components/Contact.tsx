// src/components/Contact.tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // email
  const YOUR_EMAIL = "lxxndr119@gmail.com";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Compose email
    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=Portfolio Contact from ${
      formData.name
    }&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                outline-none transition-all duration-300 transform 
                hover:shadow-md bg-white/80 backdrop-blur-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 bg-primary-600 text-white rounded-lg 
              transition-all duration-300 transform 
              hover:shadow-lg active:scale-95
              ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
