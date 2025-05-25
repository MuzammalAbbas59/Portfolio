'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Ruby on Rails',
  'React & Next.js',
  'PostgreSQL',
  'Tailwind CSS',
  'TypeScript',
  'API Design',
  'TDD & RSpec',
  'CI/CD',
];

const projects = [
  {
    name: 'DriveNasa',
    desc: 'Racing event management system for NASA club events.',
    img: '/drivenasa.png',
    link: '/projects',
  },
  {
    name: 'Get2Business',
    desc: 'Marketing campaign planning platform with drawing tools.',
    img: '/get2business.png',
    link: '/projects',
  },
];

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

const whoamiText = 'Muzammal Abbas — Software Engineer';

function TerminalTyping() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const interval = setInterval(() => {
      setDisplayed(whoamiText.slice(0, i + 1));
      i++;
      if (i === whoamiText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-black rounded-lg p-4 mb-4 shadow-lg text-left font-mono text-lg text-[#f4f4f6]">
      <span className="block text-green-400 text-sm">$ whoami</span>
      <span className="block text-[#ff4f81] text-lg">{displayed}<span className="animate-blink">{done ? '' : '|'}</span></span>
      <span className="block text-blue-400 text-xs mt-2"># Ruby on Rails | React | API Design | Poetry in Code</span>
    </div>
  );
}

export default function DeveloperPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#232946] via-[#3e2f5b] to-[#5f6caf] text-[#f4f4f6] font-sans">
      {/* Parallax SVG Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-20 animate-pulse" style={{filter:'blur(40px)'}}>
          <circle cx="70%" cy="20%" r="220" fill="#ff4f81" fillOpacity="0.10" />
          <circle cx="15%" cy="70%" r="140" fill="#ff6f61" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Hero/Terminal Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-[60vh] text-center relative px-4 pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <TerminalTyping />
        <motion.h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight mb-4 text-[#ff4f81] drop-shadow-lg" variants={fadeInUp} custom={1}>
          Developer &amp; Engineer
        </motion.h1>
        <motion.p className="text-xl md:text-2xl font-sans font-semibold mb-8 text-[#f4f4f6]/90" variants={fadeInUp} custom={2}>
          I build scalable, elegant solutions with code. My passion is to craft software that empowers people and tells a story.
        </motion.p>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Skills & Experience */}
      <motion.section
        className="relative z-10 py-20 md:py-28 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <motion.div className="bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/20 hover:shadow-2xl transition-all duration-300" variants={fadeInUp} custom={1}>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4">Skills</h2>
            <ul className="text-left space-y-2">
              {skills.map((skill, i) => (
                <motion.li key={skill} className="font-mono text-[#ff6f61] text-lg" variants={fadeInUp} custom={i+2}>{skill}</motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/20 hover:shadow-2xl transition-all duration-300" variants={fadeInUp} custom={2}>
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-4">Experience</h2>
            <motion.p className="text-[#f4f4f6]/90 mb-2" variants={fadeInUp} custom={3}>5+ years building web apps, APIs, and platforms.</motion.p>
            <motion.p className="text-[#f4f4f6]/90" variants={fadeInUp} custom={4}>I love TDD, clean code, and collaborating with creative teams.</motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#232946" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
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
          {projects.map((proj, i) => (
            <motion.div key={proj.name} className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col items-center" variants={fadeInUp} custom={i+2}>
              <Image
                src={proj.img}
                alt={proj.name}
                width={120}
                height={80}
                className="rounded shadow mb-4"
              />
              <h3 className="text-xl font-serif font-bold text-[#ff4f81] mb-2">{proj.name}</h3>
              <p className="text-[#f4f4f6]/90 mb-2 text-sm text-center">{proj.desc}</p>
              <a href={proj.link} className="text-[#ff6f61] hover:underline font-mono text-xs">View Project →</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Coding is Poetry */}
      <motion.section
        className="relative z-10 py-20 md:py-28 px-4 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-6">Coding is Poetry</h2>
        <p className="italic text-[#f4f4f6]/90 text-xl">&quot;Code is a canvas, logic is the brush, and every function is a verse.&quot;</p>
      </motion.section>
    </main>
  );
} 