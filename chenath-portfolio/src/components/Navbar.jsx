import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = ['home', 'about', 'projects', 'education', 'contact'];

  // Track which section is in view
  useEffect(() => {
    const observers = [];

    tabs.forEach((tab) => {
      const el = document.getElementById(tab);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(tab);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1420]/80 backdrop-blur-xl border-b border-slate-900/60 px-6 py-4 md:px-16 lg:px-24 flex justify-between items-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold tracking-wide text-red-500 cursor-pointer hover:text-red-400 transition-colors"
        onClick={() => scrollToSection('home')}
      >
        Chenath Perera
      </motion.div>

      {/* Nav Links */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`capitalize px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-300 font-medium
              ${
                activeTab === tab
                  ? 'bg-red-600/20 text-red-400 border border-red-600/40'
                  : 'text-slate-400 hover:text-red-400 border border-transparent hover:border-red-900/30'
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* CV Button */}
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
  );
}