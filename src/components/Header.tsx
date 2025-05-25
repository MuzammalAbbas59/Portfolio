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
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-[#ff4f81]' 
                  : 'text-[#232946] hover:text-[#ff4f81]'
              } group`}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute inset-0 bg-[#ff4f81]/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isActive('/') ? 'scale-x-100' : ''
              }`}></span>
            </Link>
            <Link
              href="/developer"
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                isActive('/developer') 
                  ? 'text-[#ff4f81]' 
                  : 'text-[#232946] hover:text-[#ff4f81]'
              } group`}
            >
              <span className="relative z-10">Developer</span>
              <span className={`absolute inset-0 bg-[#ff4f81]/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isActive('/developer') ? 'scale-x-100' : ''
              }`}></span>
            </Link>
            <Link
              href="/poetry"
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                isActive('/poetry') 
                  ? 'text-[#ff4f81]' 
                  : 'text-[#232946] hover:text-[#ff4f81]'
              } group`}
            >
              <span className="relative z-10">Poetry</span>
              <span className={`absolute inset-0 bg-[#ff4f81]/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isActive('/poetry') ? 'scale-x-100' : ''
              }`}></span>
            </Link>
            <Link
              href="/projects"
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-[#ff4f81]' 
                  : 'text-[#232946] hover:text-[#ff4f81]'
              } group`}
            >
              <span className="relative z-10">Projects</span>
              <span className={`absolute inset-0 bg-[#ff4f81]/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isActive('/projects') ? 'scale-x-100' : ''
              }`}></span>
            </Link>
            <Link
              href="/contact"
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-[#ff4f81]' 
                  : 'text-[#232946] hover:text-[#ff4f81]'
              } group`}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute inset-0 bg-[#ff4f81]/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isActive('/contact') ? 'scale-x-100' : ''
              }`}></span>
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