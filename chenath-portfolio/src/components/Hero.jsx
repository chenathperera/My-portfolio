import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/profile.png';
import bgImage from '../assets/bg.png';

const SUBTITLE_TEXT = '3rd Year IT Undergraduate';

const CV_GLOW_BASE   = '0 0 20px rgba(239,68,68,0.5), 0 0 40px rgba(239,68,68,0.2)';
const CV_GLOW_HOVER  = '0 0 30px rgba(239,68,68,0.75), 0 0 60px rgba(239,68,68,0.35)';
const TOUCH_GLOW_BASE  = '0 0 15px rgba(148,163,184,0.15)';
const TOUCH_GLOW_HOVER = '0 0 25px rgba(148,163,184,0.35)';

function GitHubIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [cvGlowHover, setCvGlowHover] = useState(false);
  const [touchGlowHover, setTouchGlowHover] = useState(false);

  useEffect(() => {
    if (typedSubtitle.length >= SUBTITLE_TEXT.length) return;
    const interval = setInterval(() => {
      setTypedSubtitle((prev) => SUBTITLE_TEXT.slice(0, prev.length + 1));
    }, 60);
    return () => clearInterval(interval);
  }, [typedSubtitle]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
      <style>{`
        @keyframes hero-cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes hero-orb-drift-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-48px); }
        }
        @keyframes hero-orb-drift-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(40px); }
        }
        @keyframes hero-orb-drift-diagonal {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-36px, 32px); }
        }
        .hero-typewriter-cursor {
          animation: hero-cursor-blink 1s step-end infinite;
        }
      `}</style>

      {/* Overlay layers */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'rgba(10, 14, 22, 0.48)' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(10,14,22,0.55) 75%, rgba(10,14,22,0.80) 100%)' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 5% 95%, rgba(200,30,30,0.50) 0%, transparent 45%)' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 100% 40%, rgba(220,38,38,0.38) 0%, transparent 40%)' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(10,14,22,0.55) 0%, rgba(10,14,22,0.20) 35%, transparent 55%)' }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,14,22,0.60) 0%, transparent 40%)' }} />

      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-32 pb-16 relative z-10 overflow-hidden"
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute rounded-full blur-[120px]" style={{ width: 420, height: 420, top: '-8%', left: '-6%', background: 'rgba(220,38,38,0.15)', animation: 'hero-orb-drift-y 8s ease-in-out infinite alternate' }} />
          <div className="absolute rounded-full blur-[120px]" style={{ width: 360, height: 360, bottom: '5%', right: '-4%', background: 'rgba(180,20,20,0.1)', animation: 'hero-orb-drift-x 10s ease-in-out infinite alternate' }} />
          <div className="absolute rounded-full blur-[120px]" style={{ width: 480, height: 480, top: '20%', right: '10%', background: 'rgba(30,60,120,0.12)', animation: 'hero-orb-drift-diagonal 7s ease-in-out infinite alternate' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto relative z-10">

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
              className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-6 tracking-wide min-h-[1.5em]"
            >
              {typedSubtitle}
              <span className="text-red-500 hero-typewriter-cursor">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-200 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal"
            >
              Passionate Full Stack Developer specializing in creating innovative digital
              solutions with modern web technologies. Currently pursuing BSc (Hons) in
              Information Technology specializing in Software Engineering at SLIIT.
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
                style={{ boxShadow: cvGlowHover ? CV_GLOW_HOVER : CV_GLOW_BASE }}
                onMouseEnter={() => setCvGlowHover(true)}
                onMouseLeave={() => setCvGlowHover(false)}
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 bg-[#141a24]/80 hover:bg-[#1c2432] text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 hover:border-red-900/40 transition-all duration-300 cursor-pointer group"
                style={{ boxShadow: touchGlowHover ? TOUCH_GLOW_HOVER : TOUCH_GLOW_BASE }}
                onMouseEnter={() => setTouchGlowHover(true)}
                onMouseLeave={() => setTouchGlowHover(false)}
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* ── Social Icons — colored + larger ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {/* GitHub — slate/white */}
              <a
                href="https://github.com/chenathperera"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl transition-all duration-300 border hover:scale-110 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(148,163,184,0.1)',
                  border: '1px solid rgba(148,163,184,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(148,163,184,0.22)';
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.45)';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(148,163,184,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(148,163,184,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <GitHubIcon size={22} />
              </a>

              {/* LinkedIn — blue */}
              <a
                href="https://www.linkedin.com/in/chenath-perera-83bba0337/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.25)',
                  color: '#60a5fa',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(59,130,246,0.25)';
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(59,130,246,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(59,130,246,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <LinkedInIcon size={22} />
              </a>

              {/* Gmail — red */}
              <a
                href="mailto:chenathperera@gmail.com"
                className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(239,68,68,0.12)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#f87171',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(239,68,68,0.25)';
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.5)';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(239,68,68,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(239,68,68,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail size={22} />
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
              <div className="absolute inset-0 rounded-[32px] border border-red-500/25 shadow-[0_0_80px_rgba(239,68,68,0.25),0_0_40px_rgba(239,68,68,0.15)] pointer-events-none z-20" />
              <div className="w-full h-full rounded-[32px] overflow-hidden border border-slate-800/80 bg-[#141a24] shadow-2xl relative z-10">
                <img src={profilePhoto} alt="Chenath Perera" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}