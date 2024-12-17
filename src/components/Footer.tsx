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
