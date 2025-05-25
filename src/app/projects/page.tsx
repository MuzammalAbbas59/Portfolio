'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#232946] via-[#3e2f5b] to-[#5f6caf] text-[#f4f4f6] font-sans">
      {/* Parallax SVG Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-20 animate-pulse" style={{filter:'blur(40px)'}}>
          <circle cx="60%" cy="30%" r="220" fill="#ff4f81" fillOpacity="0.10" />
          <circle cx="20%" cy="80%" r="140" fill="#ff6f61" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-[40vh] text-center relative px-4 pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-4 text-[#ff4f81] drop-shadow-lg" variants={fadeInUp} custom={1}>
          Projects
        </motion.h1>
        <motion.p className="text-xl md:text-2xl font-sans font-semibold mb-8 text-[#f4f4f6]/90" variants={fadeInUp} custom={2}>
          A collection of my work showcasing expertise in full-stack development, system architecture, and user experience design.
        </motion.p>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Featured Projects */}
      <motion.section
        className="relative z-10 py-20 md:py-28 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-12 text-center" variants={fadeInUp} custom={1}>Featured Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* DriveNasa Project */}
          <motion.div className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8" variants={fadeInUp} custom={2} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #ff4f81aa' }}>
            <div className="flex-1 flex items-center justify-center">
              <Image src="/drivenasa.png" alt="DriveNasa" width={220} height={140} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-serif font-bold text-[#ff4f81] mb-2">DriveNasa</h3>
              <p className="text-[#f4f4f6]/90 mb-4">
                A comprehensive racing event management system that streamlines the entire process from registration to event completion. Built with Ruby on Rails and React, this platform handles everything from licensing to scheduling.
              </p>
              <h4 className="font-semibold text-[#ff6f61] mb-1">Key Features</h4>
              <ul className="list-disc list-inside text-[#f4f4f6]/80 mb-2">
                <li>Automated licensing system with document verification</li>
                <li>Advanced event scheduling and management</li>
                <li>Real-time participant tracking and updates</li>
                <li>Integrated payment processing</li>
                <li>Custom reporting and analytics</li>
              </ul>
              <h4 className="font-semibold text-[#ff6f61] mb-1">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Ruby on Rails</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">React</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">PostgreSQL</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Redis</span>
              </div>
            </div>
          </motion.div>

          {/* Get2Business Project */}
          <motion.div className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8" variants={fadeInUp} custom={3} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #ff4f81aa' }}>
            <div className="flex-1 flex items-center justify-center">
              <Image src="/get2business.png" alt="Get2Business" width={220} height={140} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-serif font-bold text-[#ff4f81] mb-2">Get2Business</h3>
              <p className="text-[#f4f4f6]/90 mb-4">
                A marketing campaign planning platform that combines powerful drawing tools with campaign management features. This project helps businesses create and manage their marketing campaigns efficiently.
              </p>
              <h4 className="font-semibold text-[#ff6f61] mb-1">Key Features</h4>
              <ul className="list-disc list-inside text-[#f4f4f6]/80 mb-2">
                <li>Interactive drawing tools with Fabric.js</li>
                <li>Campaign timeline management</li>
                <li>Team collaboration features</li>
                <li>Asset library and management</li>
                <li>Campaign analytics and reporting</li>
              </ul>
              <h4 className="font-semibold text-[#ff6f61] mb-1">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Ruby on Rails</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">React</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Fabric.js</span>
                <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">AWS S3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#232946" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Other Projects */}
      <motion.section
        className="relative z-10 py-20 md:py-28 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-12 text-center" variants={fadeInUp} custom={1}>Other Projects</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          <motion.div className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300" variants={fadeInUp} custom={2} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #ff4f81aa' }}>
            <h3 className="text-xl font-serif font-bold text-[#ff4f81] mb-2">Project Name</h3>
            <p className="text-[#f4f4f6]/90 mb-4">
              Brief description of the project and its key features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Technology 1</span>
              <span className="px-3 py-1 bg-[#ff4f81]/10 text-[#ff4f81] rounded-full text-xs font-mono">Technology 2</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
} 