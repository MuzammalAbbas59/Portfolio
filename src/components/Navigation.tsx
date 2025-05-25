'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Muzammal Abbas
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'text-gray-900 font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/developer"
              className={`nav-link ${isActive('/developer') ? 'text-gray-900 font-medium' : ''}`}
            >
              Developer
            </Link>
            <Link
              href="/poetry"
              className={`nav-link ${isActive('/poetry') ? 'text-gray-900 font-medium' : ''}`}
            >
              Poetry
            </Link>
            <Link
              href="/projects"
              className={`nav-link ${isActive('/projects') ? 'text-gray-900 font-medium' : ''}`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-gray-900 font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 