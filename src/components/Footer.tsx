import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Muzammal Abbas
            </h3>
            <p className="text-gray-600 mb-4">
              Software Engineer by day, poet by night. Building elegant solutions
              and crafting verses that bridge the gap between technology and art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/developer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Developer
                </Link>
              </li>
              <li>
                <Link
                  href="/poetry"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Poetry
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/muzammal-abbas-6926691b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/abpoetry10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:abmuzammal17@gmail.com"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} Muzammal Abbas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 