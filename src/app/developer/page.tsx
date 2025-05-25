import Navigation from '@/components/Navigation';

export default function DeveloperPage() {
  return (
    <main>
      <Navigation />
      
      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              I'm a passionate software engineer with expertise in Ruby on Rails and modern web technologies.
              My journey in software development has been marked by building scalable applications,
              solving complex problems, and continuously learning new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          
          <div className="space-y-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Software Engineer - Delta Labs</h3>
              <p className="text-gray-600 mb-4">2021 - Present</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Implemented Shopify integration for e-commerce functionality</li>
                <li>Developed React-based drawing tool for marketing campaigns</li>
                <li>Managed email communications via Mandrill integration</li>
                <li>Led Rails upgrades and MySQL to PostgreSQL migration</li>
                <li>Conducted JMeter performance testing for system optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Lab Instructor - FAST-NUCES</h3>
              <p className="text-gray-600 mb-4">2020 - 2021</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Taught programming concepts and best practices</li>
                <li>Mentored students in software development projects</li>
                <li>Conducted practical lab sessions and assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React</li>
                <li>TypeScript</li>
                <li>Fabric.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>JMeter</li>
                <li>Shopify API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">DriveNasa</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive racing event management system featuring licensing automation
                and advanced scheduling tools.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Automated licensing system</li>
                <li>Event scheduling and management</li>
                <li>Participant tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Get2Business</h3>
              <p className="text-gray-600 mb-4">
                Marketing campaign planning platform with integrated drawing tools
                for visual content creation.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Interactive drawing tools</li>
                <li>Campaign management</li>
                <li>Team collaboration features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 