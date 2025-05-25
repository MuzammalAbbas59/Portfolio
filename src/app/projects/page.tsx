import Navigation from '@/components/Navigation';

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">Projects</h1>
            <p className="text-lg text-gray-600">
              A collection of my work showcasing expertise in full-stack development,
              system architecture, and user experience design.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          
          <div className="space-y-12">
            {/* DriveNasa Project */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">DriveNasa</h3>
                  <p className="text-gray-600 mb-6">
                    A comprehensive racing event management system that streamlines the entire
                    process from registration to event completion. Built with Ruby on Rails
                    and React, this platform handles everything from licensing to scheduling.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Automated licensing system with document verification</li>
                        <li>Advanced event scheduling and management</li>
                        <li>Real-time participant tracking and updates</li>
                        <li>Integrated payment processing</li>
                        <li>Custom reporting and analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Ruby on Rails
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          PostgreSQL
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Redis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Project Screenshot</p>
                </div>
              </div>
            </div>

            {/* Get2Business Project */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get2Business</h3>
                  <p className="text-gray-600 mb-6">
                    A marketing campaign planning platform that combines powerful drawing tools
                    with campaign management features. This project helps businesses create
                    and manage their marketing campaigns efficiently.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Interactive drawing tools with Fabric.js</li>
                        <li>Campaign timeline management</li>
                        <li>Team collaboration features</li>
                        <li>Asset library and management</li>
                        <li>Campaign analytics and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Ruby on Rails
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Fabric.js
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          AWS S3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Project Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12">Other Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add more project cards here */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Name</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and its key features.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Technology 1
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Technology 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 