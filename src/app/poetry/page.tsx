import Navigation from '@/components/Navigation';

export default function PoetryPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">Poetry</h1>
            <p className="text-lg text-gray-600 mb-8">
              Words have always been my refuge, a way to express emotions and thoughts
              that transcend the boundaries of code. Through poetry, I explore the
              intersection of technology and human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Latest Poems</h2>
          <div className="text-center mb-12">
            <a
              href="https://instagram.com/abpoetry10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Follow me on Instagram @abpoetry10 →
            </a>
          </div>
          
          {/* Instagram Feed Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-square relative bg-gray-100 rounded-lg mb-4">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Instagram Post {i}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  A glimpse into my poetic journey...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Poetry Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">About My Poetry</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Poetry has been my creative outlet for expressing thoughts and emotions
                that go beyond the logical world of programming. Through verses, I explore
                themes of technology, human connection, and personal growth.
              </p>
              <p className="text-gray-600">
                My Instagram account @abpoetry10 serves as a digital canvas where I share
                my poetic journey. Each poem is a reflection of moments, thoughts, and
                experiences that shape my perspective as both a software engineer and a poet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Join My Poetic Journey</h2>
            <p className="text-gray-600 mb-8">
              Follow me on Instagram to read my latest poems and be part of my creative journey.
            </p>
            <a
              href="https://instagram.com/abpoetry10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Follow @abpoetry10
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 