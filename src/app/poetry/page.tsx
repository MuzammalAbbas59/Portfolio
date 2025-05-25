'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const urduPoem = [
  'خوابوں کی سرزمیں پہ کبھی چل کے تو دیکھو',
  'لفظوں کے آئینے میں کبھی ڈھل کے تو دیکھو',
  'یہ شاعری بھی کوڈ کی طرح ہے،',
  'جذبوں کو کمپائل کر کے سنبھل کے تو دیکھو',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 * i,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

function UrduTypewriter({ lines }: { lines: string[] }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (current >= lines.length) return;
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(lines[current].slice(0, i + 1));
      i++;
      if (i === lines[current].length) {
        clearInterval(interval);
        setTimeout(() => setCurrent((c) => c + 1), 900);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [current, lines]);
  return (
    <div className="mb-10">
      {lines.slice(0, current + 1).map((line, idx) => (
        <motion.p
          key={idx}
          className="text-2xl md:text-3xl font-serif text-[#ff4f81] mb-2 animate-fade-in"
          style={{ direction: 'rtl', fontFamily: 'Noto Nastaliq Urdu, serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.5 }}
        >
          {idx === current ? displayed : line}
        </motion.p>
      ))}
    </div>
  );
}

export default function PoetryPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#3e2f5b] via-[#ff4f81] to-[#f4f4f6] text-[#232946] font-sans">
      {/* Parallax SVG Ink Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-20 animate-pulse" style={{filter:'blur(40px)'}}>
          <ellipse cx="80%" cy="20%" rx="180" ry="80" fill="#ff4f81" fillOpacity="0.10" />
          <ellipse cx="20%" cy="80%" rx="120" ry="60" fill="#3e2f5b" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-[60vh] text-center relative px-4 pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-6 text-[#ff4f81] drop-shadow-lg" variants={fadeInUp} custom={1}>
          Poetry &amp; Expression
        </motion.h1>
        <motion.p className="mb-8 text-xl md:text-2xl text-[#232946]/80 font-serif italic" variants={fadeInUp} custom={2}>
          Where words become art, and emotions find their code.
        </motion.p>
        <UrduTypewriter lines={urduPoem} />
        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8" variants={fadeInUp} custom={3}>
          <Image
            src="/allama-iqbal.jpg"
            alt="Allama Iqbal"
            width={100}
            height={100}
            className="rounded-full border-4 border-[#ff4f81] shadow-lg"
          />
          <div className="text-left">
            <h2 className="text-2xl font-serif font-bold text-[#ff4f81] mb-2">Allama Iqbal</h2>
            <blockquote className="italic text-[#3e2f5b]">
              &quot;خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br />خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے&quot;
            </blockquote>
            <p className="mt-2 text-[#3e2f5b]/70 text-sm">— Poet of the East</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Instagram Feed Section */}
      <motion.section
        className="py-16 relative z-10 bg-[#f4f4f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-8 text-center" variants={fadeInUp} custom={1}>Latest Poems</motion.h2>
        <div className="text-center mb-12">
          <a
            href="https://instagram.com/abpoetry10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3e2f5b] hover:text-[#ff4f81] transition-colors"
          >
            Follow me on Instagram @abpoetry10 →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" variants={fadeInUp} custom={i+1}>
              <div className="aspect-square relative bg-[#ff4f81]/10 rounded-lg mb-4 flex items-center justify-center text-[#ff4f81] text-xl font-serif">
                Instagram Post {i}
              </div>
              <p className="text-[#3e2f5b]/80 text-sm">
                A glimpse into my poetic journey...
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#3e2f5b" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* About Poetry Section */}
      <motion.section
        className="py-16 relative z-10 bg-[#3e2f5b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ff4f81] mb-8 text-center" variants={fadeInUp} custom={1}>About My Poetry</motion.h2>
          <div className="prose max-w-none">
            <motion.p className="text-[#f4f4f6]/90 mb-6" variants={fadeInUp} custom={2}>
              Poetry has been my creative outlet for expressing thoughts and emotions
              that go beyond the logical world of programming. Through verses, I explore
              themes of technology, human connection, and personal growth.
            </motion.p>
            <motion.p className="text-[#f4f4f6]/90" variants={fadeInUp} custom={3}>
              My Instagram account @abpoetry10 serves as a digital canvas where I share
              my poetic journey. Each poem is a reflection of moments, thoughts, and
              experiences that shape my perspective as both a software engineer and a poet.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <svg width="100%" height="100" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
        <path fill="#f4f4f6" fillOpacity="1" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Call to Action */}
      <motion.section
        className="py-16 relative z-10 bg-[#f4f4f6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 className="text-2xl font-bold mb-6 text-[#ff4f81]" variants={fadeInUp} custom={1}>Join My Poetic Journey</motion.h2>
          <motion.p className="text-[#3e2f5b]/80 mb-8" variants={fadeInUp} custom={2}>
            Follow me on Instagram to read my latest poems and be part of my creative journey.
          </motion.p>
          <motion.a
            href="https://instagram.com/abpoetry10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff4f81] text-white px-8 py-3 rounded-lg hover:bg-[#3e2f5b] hover:text-[#ff4f81] transition-colors font-bold shadow-lg"
            variants={fadeInUp}
            custom={3}
            whileHover={{ scale: 1.05 }}
          >
            Follow @abpoetry10
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
} 