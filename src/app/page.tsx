'use client';
import Link from 'next/link';
import { FaArrowRight, FaFeatherAlt, FaCode } from 'react-icons/fa';
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

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#232946] via-[#3e2f5b] to-[#5f6caf] text-[#f4f4f6] font-sans">
      {/* Parallax SVG Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-30 animate-pulse" style={{filter:'blur(40px)'}}>
          <circle cx="60%" cy="30%" r="320" fill="#ff4f81" fillOpacity="0.10" />
          <circle cx="20%" cy="80%" r="180" fill="#ff6f61" fillOpacity="0.10" />
        </svg>
        <svg width="100%" height="100" viewBox="0 0 1440 100" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path fill="#232946" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-[90vh] text-center relative px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-6 text-[#f4f4f6] drop-shadow-lg"
          variants={fadeInUp}
          custom={1}
        >
          Code <span className="text-[#ff4f81]">&</span> Verse
        </motion.h1>
        <div className="mx-auto max-w-2xl">
          <motion.p
            className="text-2xl md:text-3xl font-sans font-semibold mb-8 text-[#f4f4f6] drop-shadow-xl"
            variants={fadeInUp}
            custom={2}
          >
            <span className="inline-block bg-gradient-to-r from-[#ff4f81] via-[#ff6f61] to-[#f4f4f6] bg-clip-text text-transparent animate-gradient-x">
              Where logic meets lyric, and software becomes art.
            </span>
            <br/>
            <span className="block mt-2 text-[#f4f4f6]/80">Welcome to a portfolio that codes, creates, and inspires.</span>
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
          custom={3}
        >
          <Link href="/developer" className="px-8 py-3 rounded-full bg-[#232946] text-[#ff4f81] font-bold text-lg shadow-lg border-2 border-[#ff4f81] hover:bg-[#ff4f81] hover:text-[#232946] hover:scale-105 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#ff4f81]">
            <FaCode /> Explore My Code
          </Link>
          <Link href="/poetry" className="px-8 py-3 rounded-full border-2 border-[#ff6f61] text-[#ff6f61] font-bold text-lg shadow-lg hover:bg-[#ff6f61] hover:text-[#232946] hover:scale-105 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#ff6f61]">
            <FaFeatherAlt /> Read My Poetry
          </Link>
        </motion.div>
      </motion.section>

      {/* About/Intro Section */}
      <motion.section
        className="relative z-10 py-24 md:py-32 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="flex-1 bg-[#f4f4f6]/10 rounded-3xl shadow-xl p-10 backdrop-blur-md border border-[#ff4f81]/20" variants={fadeInUp} custom={1}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-4">Who am I?</h2>
          <p className="text-lg text-[#f4f4f6]/90 mb-4">
            I&apos;m Muzammal Abbas — a <span className="text-[#ff4f81] font-semibold">Ruby on Rails developer</span> and <span className="text-[#ff4f81] font-semibold">poet</span> who believes that code and creativity are two sides of the same coin.
          </p>
          <p className="text-[#f4f4f6]/70">
            My work blends technical rigor with artistic vision, building digital experiences that are as elegant as they are functional. Whether I&apos;m architecting scalable systems or crafting verses, I strive for beauty, clarity, and impact.
          </p>
        </motion.div>
        <motion.div className="flex-1 flex flex-col items-center gap-6" variants={fadeInUp} custom={2}>
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#ff4f81]/80 to-[#ff6f61]/60 shadow-2xl flex items-center justify-center relative overflow-hidden">
            <span className="text-[5rem] font-serif text-[#232946]">{`</>`}</span>
            <span className="absolute bottom-4 right-4 text-2xl text-[#ff4f81]/80 font-serif">诗</span>
          </div>
          <div className="text-center text-[#f4f4f6]/80 italic text-lg">&quot;To code is to compose, to write is to architect.&quot;</div>
        </motion.div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Featured Work Section */}
      <motion.section
        className="relative z-10 py-24 md:py-32 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-12 text-center" variants={fadeInUp} custom={1}>Featured Work</motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300" variants={fadeInUp} custom={2}>
            <h3 className="text-2xl font-serif font-bold text-[#ff4f81] mb-2">DriveNasa</h3>
            <p className="text-[#f4f4f6]/90 mb-4">A comprehensive racing event management system built with Ruby on Rails and React. Streamlines everything from registration to event completion.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#ff4f81] font-semibold hover:underline">
              Learn more <FaArrowRight />
            </Link>
          </motion.div>
          <motion.div className="group bg-[#f4f4f6]/10 rounded-2xl shadow-xl p-8 border border-[#ff4f81]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300" variants={fadeInUp} custom={3}>
            <h3 className="text-2xl font-serif font-bold text-[#ff4f81] mb-2">Get2Business</h3>
            <p className="text-[#f4f4f6]/90 mb-4">A marketing campaign platform with powerful drawing tools and campaign management features. Built for creative teams and efficient workflows.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#ff4f81] font-semibold hover:underline">
              Learn more <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#232946" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Poetry Section */}
      <motion.section
        className="relative z-10 py-24 md:py-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="flex-1" variants={fadeInUp} custom={1}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-6">Poetry in Code</h2>
          <p className="text-lg text-[#f4f4f6]/90 mb-4 italic">خوابوں کی سرزمیں پہ کبھی چل کے تو دیکھو<br/>لفظوں کے آئینے میں کبھی ڈھل کے تو دیکھو<br/>یہ شاعری بھی کوڈ کی طرح ہے،<br/>جذبوں کو کمپائل کر کے سنبھل کے تو دیکھو</p>
          <Link href="/poetry" className="inline-block mt-4 px-8 py-3 rounded-full border-2 border-[#ff6f61] text-[#ff6f61] font-bold text-lg shadow-lg hover:bg-[#ff6f61] hover:text-[#232946] hover:scale-105 transition-all">
            Read More Poetry
          </Link>
        </motion.div>
        <motion.div className="flex-1 flex flex-col items-center gap-6" variants={fadeInUp} custom={2}>
          <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-[#ff4f81]/80 to-[#ff6f61]/60 shadow-2xl flex items-center justify-center relative overflow-hidden">
            <span className="text-[4rem] font-serif text-[#232946]">诗</span>
          </div>
          <div className="text-center text-[#f4f4f6]/80 italic text-lg">&quot;Poetry is the code of the soul.&quot;</div>
        </motion.div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Contact/CTA Section */}
      <motion.section
        className="relative z-10 py-20 md:py-28 px-4 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-6">Let&apos;s Connect</h2>
        <p className="text-lg text-[#f4f4f6]/90 mb-8">Whether you&apos;re interested in collaboration, have a project in mind, or just want to say hello, I&apos;d love to hear from you.</p>
        <Link href="/contact" className="px-10 py-4 rounded-full bg-[#ff4f81] text-[#232946] font-bold text-xl shadow-lg hover:scale-105 hover:bg-[#ff6f61] hover:text-[#232946] transition-all inline-block">
          Get in Touch
        </Link>
      </motion.section>
    </main>
  );
}
