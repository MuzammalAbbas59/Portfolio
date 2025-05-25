'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaInstagram, FaGithub } from 'react-icons/fa';

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        className="flex flex-col items-center justify-center min-h-[30vh] text-center relative px-4 pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-4 text-[#ff4f81] drop-shadow-lg" variants={fadeInUp} custom={1}>
          Get in Touch
        </motion.h1>
        <motion.p className="text-xl md:text-2xl font-sans font-semibold mb-8 text-[#f4f4f6]/90" variants={fadeInUp} custom={2}>
          I&apos;d love to connect — whether you want to collaborate, chat code, or share poetry.
        </motion.p>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Contact Info & Socials */}
      <motion.section
        className="py-16 relative z-10 bg-[#f4f4f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-12">
          <motion.div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#ff4f81]/10 flex flex-col gap-6" variants={fadeInUp} custom={1}>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4 flex items-center gap-2"><FaEnvelope /> Email</h2>
            <a href="mailto:abmuzammal17@gmail.com" className="text-[#3e2f5b] hover:text-[#ff4f81] font-mono text-lg transition-colors">abmuzammal17@gmail.com</a>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4 flex items-center gap-2"><FaLinkedin /> LinkedIn</h2>
            <a href="https://linkedin.com/in/muzammal-abbas-6926691b9" target="_blank" rel="noopener noreferrer" className="text-[#3e2f5b] hover:text-[#ff4f81] font-mono text-lg transition-colors">linkedin.com/in/muzammal-abbas-6926691b9</a>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4 flex items-center gap-2"><FaPhone /> Phone</h2>
            <a href="tel:+923104277608" className="text-[#3e2f5b] hover:text-[#ff4f81] font-mono text-lg transition-colors">(+92) 310-4277608</a>
          </motion.div>
          <motion.div className="bg-white/80 p-8 rounded-2xl shadow-xl border border-[#ff4f81]/10 flex flex-col gap-6" variants={fadeInUp} custom={2}>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4 flex items-center gap-2"><FaInstagram /> Instagram (Poetry)</h2>
            <a href="https://instagram.com/abpoetry10" target="_blank" rel="noopener noreferrer" className="text-[#3e2f5b] hover:text-[#ff4f81] font-mono text-lg transition-colors">@abpoetry10</a>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4 flex items-center gap-2"><FaGithub /> GitHub</h2>
            <a href="https://github.com/MuzammalAbbas59" target="_blank" rel="noopener noreferrer" className="text-[#3e2f5b] hover:text-[#ff4f81] font-mono text-lg transition-colors">github.com/MuzammalAbbas59</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#3e2f5b" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Contact Form */}
      <motion.section
        className="py-16 relative z-10 bg-[#3e2f5b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto bg-white/90 p-8 rounded-2xl shadow-xl border border-[#ff4f81]/10">
          <motion.h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-6 text-center" variants={fadeInUp} custom={1}>Send Me a Message</motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeInUp} custom={2}>
              <label htmlFor="name" className="block text-sm font-medium text-[#3e2f5b] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#ff4f81]/30 rounded-lg focus:ring-2 focus:ring-[#ff4f81] focus:border-transparent bg-white text-[#3e2f5b] font-mono transition-all"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp} custom={3}>
              <label htmlFor="email" className="block text-sm font-medium text-[#3e2f5b] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#ff4f81]/30 rounded-lg focus:ring-2 focus:ring-[#ff4f81] focus:border-transparent bg-white text-[#3e2f5b] font-mono transition-all"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp} custom={4}>
              <label htmlFor="message" className="block text-sm font-medium text-[#3e2f5b] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-[#ff4f81]/30 rounded-lg focus:ring-2 focus:ring-[#ff4f81] focus:border-transparent bg-white text-[#3e2f5b] font-mono transition-all"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-[#ff4f81] text-white px-6 py-3 rounded-lg hover:bg-[#3e2f5b] hover:text-[#ff4f81] font-bold shadow-lg transition-colors text-lg"
              variants={fadeInUp}
              custom={5}
              whileHover={{ scale: 1.04 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </main>
  );
} 