'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]); // Add pathname as dependency to trigger on route changes

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 