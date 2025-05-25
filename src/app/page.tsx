import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
              Code & Verse
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where technology meets poetry, and innovation dances with creativity.
              Welcome to my digital space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link href="/developer" className="btn-primary">
                Explore My Work
              </Link>
              <Link href="/poetry" className="btn-secondary">
                Read My Poetry
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-serif font-semibold mb-4">Development</h2>
              <p className="text-gray-600 mb-4">
                Specializing in Ruby on Rails, React, and full-stack web development.
                Building scalable and elegant solutions.
              </p>
              <Link href="/developer" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card group">
              <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-200 transition-colors">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-serif font-semibold mb-4">Projects</h2>
              <p className="text-gray-600 mb-4">
                Explore my work on DriveNasa, Get2Business, and other innovative projects
                that showcase technical excellence.
              </p>
              <Link href="/projects" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
                View projects
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card group">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-serif font-semibold mb-4">Poetry</h2>
              <p className="text-gray-600 mb-4">
                Discover my creative side through poetry and literary works that
                explore the intersection of technology and human experience.
              </p>
              <Link href="/poetry" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
                Read poetry
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into my latest projects and creative endeavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Screenshot
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">DriveNasa</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive racing event management system that streamlines
                the entire process from registration to event completion.
              </p>
              <Link href="/projects" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Learn more →
              </Link>
            </div>

            <div className="card group">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Screenshot
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Get2Business</h3>
              <p className="text-gray-600 mb-4">
                A marketing campaign planning platform that combines powerful
                drawing tools with campaign management features.
              </p>
              <Link href="/projects" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re interested in collaboration, have a project in mind,
              or just want to say hello, I&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
