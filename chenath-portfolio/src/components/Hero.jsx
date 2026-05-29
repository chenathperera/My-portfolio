import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/profile.png';
import bgImage from '../assets/bg.png'; // 👈 Your Gemini desk background image

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-500 selection:text-white relative overflow-x-hidden"
      style={{
        backgroundColor: '#0d1420',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Overlay layers ── */}

      {/* 1. Light base dimmer — only slightly darkens, keeps center visible */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'rgba(10, 14, 22, 0.48)' }}
      />

      {/* 2. Vignette — edges only, bright window in the center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(10,14,22,0.55) 75%, rgba(10,14,22,0.80) 100%)',
        }}
      />

      {/* 3. Red vignette — bottom-left corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 5% 95%, rgba(200,30,30,0.50) 0%, transparent 45%)',
        }}
      />

      {/* 4. Red vignette — right edge */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 40%, rgba(220,38,38,0.38) 0%, transparent 40%)',
        }}
      />

      {/* 5. Subtle left-side dark band — just enough contrast behind text, does NOT extend to center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,14,22,0.55) 0%, rgba(10,14,22,0.20) 35%, transparent 55%)',
        }}
      />

      {/* 6. Bottom dark fade — grounds the page */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(10,14,22,0.60) 0%, transparent 40%)',
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1420]/80 backdrop-blur-xl border-b border-slate-900/60 px-6 py-4 md:px-16 lg:px-24 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wide text-red-500 cursor-pointer hover:text-red-400 transition-colors"
          onClick={() => scrollToSection('home')}
        >
          Chenath Perera
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400"
        >
          {['home', 'about', 'projects', 'education', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              className="capitalize hover:text-red-500 transition-colors cursor-pointer duration-300 relative group"
            >
              {tab}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          href="/chenath_cv.pdf"
          download
          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-red-950/50 transition-all duration-300"
        >
          <Download size={16} />
          <span>CV</span>
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-32 pb-16 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-red-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-4"
            >
              <span className="w-6 h-[2px] bg-red-500"></span>
              HELLO, I'M
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white"
            >
              <span className="text-red-500">Chenath</span>
              <br />
              <span>Perera</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-6 tracking-wide"
            >
              3rd Year IT Undergraduate
              <span className="text-red-500 animate-pulse">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-200 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal"
            >
              Passionate Full Stack Developer specializing in creating
              innovative digital solutions with modern web technologies.
              Currently pursuing BSc (Hons) in Information Technology
              specializing in Software Engineering at SLIIT.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="/chenath_cv.pdf"
                download
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xl shadow-red-950/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 bg-[#141a24]/80 hover:bg-[#1c2432] text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 hover:border-red-900/40 transition-all duration-300 cursor-pointer group"
              >
                <span>Get In Touch</span>
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/chenathperera"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-[#141a24]/80 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-700/60 shadow-md"
              >
                <GitHubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/chenath-perera-83bba0337/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-[#141a24]/80 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-700/60 shadow-md"
              >
                <LinkedInIcon size={20} />
              </a>

              <a
                href="mailto:chenathperera@gmail.com"
                className="p-3.5 bg-[#141a24]/80 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-700/60 shadow-md"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-80 h-[420px] sm:w-[380px] sm:h-[480px] md:w-[440px] md:h-[560px]"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-[32px] border border-red-500/25 shadow-[0_0_80px_rgba(239,68,68,0.25),0_0_40px_rgba(239,68,68,0.15)] pointer-events-none z-20" />

              {/* Profile Image */}
              <div className="w-full h-full rounded-[32px] overflow-hidden border border-slate-800/80 bg-[#141a24] shadow-2xl relative z-10">
                <img
                  src={profilePhoto}
                  alt="Chenath Perera"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}