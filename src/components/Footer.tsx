import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-primary-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-serif font-semibold text-primary-900 mb-4">
              Muzammal Abbas
            </h3>
            <p className="text-primary-700 mb-4">
              Software Engineer by day, poet by night. Building elegant solutions
              and crafting verses that bridge the gap between technology and art.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/muzammal-abbas-6926691b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/abpoetry10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="mailto:abmuzammal17@gmail.com"
                className="text-primary-600 hover:text-primary-700 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/developer"
                  className="text-primary-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                  <span>Developer</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/poetry"
                  className="text-primary-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                  <span>Poetry</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-primary-700 mb-4">
              Subscribe to my newsletter for updates on new projects and poetry.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-200">
          <p className="text-center text-primary-700">
            © {currentYear} Muzammal Abbas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 