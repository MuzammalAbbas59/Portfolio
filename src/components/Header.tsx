'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCode, FaPenFancy } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-serif font-extrabold text-accent-600 tracking-tight hover:text-accent-700 transition-colors"
          >
            <span className="hidden sm:inline-block">
              <FaCode className="w-6 h-6" />
            </span>
            <span>Muzammal</span>
            <span className="hidden sm:inline-block">
              <FaPenFancy className="w-6 h-6" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'text-accent-600 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/developer"
              className={`nav-link ${isActive('/developer') ? 'text-accent-600 font-semibold' : ''}`}
            >
              Developer
            </Link>
            <Link
              href="/poetry"
              className={`nav-link ${isActive('/poetry') ? 'text-accent-600 font-semibold' : ''}`}
            >
              Poetry
            </Link>
            <Link
              href="/projects"
              className={`nav-link ${isActive('/projects') ? 'text-accent-600 font-semibold' : ''}`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-accent-600 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-primary-700 hover:text-primary-900 hover:bg-primary-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-accent-600 bg-accent-50'
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/developer"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/developer')
                  ? 'text-accent-600 bg-accent-50'
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Developer
            </Link>
            <Link
              href="/poetry"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/poetry')
                  ? 'text-accent-600 bg-accent-50'
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Poetry
            </Link>
            <Link
              href="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-accent-600 bg-accent-50'
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-accent-600 bg-accent-50'
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 