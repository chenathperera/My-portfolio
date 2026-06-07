import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ShieldCheck, Terminal, Layers, Activity, Smartphone } from 'lucide-react';
import idocImg from '../assets/idoc-banner.png';
import dropmeImg from '../assets/dropme-banner.png';
import medicoreImg from '../assets/medicore-banner.png';
import pairpixImg from '../assets/pairpix-banner.png';
import tryonImg from '../assets/tryon-banner.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Academic', 'Personal', 'Mobile App'];

  const projectsData = [
    {
      title: "iDoc",
      subtitle: "AI-Enabled Smart Healthcare & Telemedicine Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: true,
      category: "Academic",
      isMobile: false,
      image: idocImg,
      description: "A cloud-native microservices healthcare platform that enables patients to book appointments, upload medical reports, attend secure telemedicine sessions, make online payments, and receive AI-assisted symptom guidance.",
      contribution: "My contribution: Engineered the comprehensive Doctor Module from scratch, including registration/approval workflows, appointment queues, medical report lookups, prescription issuance channels, and automated symptom analysis using OpenRouter AI APIs.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Microservices", "Stripe", "Docker", "OpenRouter AI"],
      features: [
        { icon: <Activity size={14} />, text: "Gateway Microservices" },
        { icon: <ShieldCheck size={14} />, text: "Doctor Approval Pipeline" },
        { icon: <Terminal size={14} />, text: "AI Symptom Tracking" }
      ],
      github: "https://github.com/idocTeam/IDOC"
    },
    {
      title: "DropMe",
      subtitle: "Smart Carpooling & Public Transport Mobility Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: true,
      category: "Academic",
      isMobile: false,
      image: dropmeImg,
      description: "A comprehensive transport and mobility management platform combining ride carpooling, automated train & bus ticket validation, and an eco-friendly travel tracking ecosystem.",
      contribution: "My contribution: Solely developed the entire Train Ticket Booking Module—handling live searches between stations, interactive timetables, secure payments, automated PDF ticket downloads, validation engines, and admin controls.",
      tags: ["React", "Node.js", "MongoDB", "Leaflet Maps", "Socket.IO", "Stripe", "Tailwind CSS"],
      features: [
        { icon: <Layers size={14} />, text: "Train Schedule Engine" },
        { icon: <ShieldCheck size={14} />, text: "PDF Ticket Generator" },
        { icon: <Terminal size={14} />, text: "Real-time Map Vectors" }
      ],
      github: "https://github.com/DropMeTeam/DropMe"
    },
    {
      title: "MediCore HMS",
      subtitle: "Modular Full-Stack Hospital Operations Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: false,
      category: "Academic",
      isMobile: false,
      image: medicoreImg,
      description: "An enterprise-grade hospital operational framework covering dynamic appointment scheduling, clinical history archiving, vaccination logs, automated lab reports, and AI insights.",
      contribution: "My contribution: Designed the Lab Report Management System featuring AI-based parsing. It securely uploads data, extracts critical blood markers (like cholesterol/diabetes values), visualizes trend lines, and serves personalized medical advice.",
      tags: ["React", "Node.js", "MongoDB", "Express", "AI Integration", "JWT Auth"],
      features: [
        { icon: <Activity size={14} />, text: "AI Extraction Lab Cards" },
        { icon: <Layers size={14} />, text: "Trend Analytics Lines" }
      ],
      github: "https://github.com/MedicoreTeam/Hospital-Management-System"
    },
    {
      title: "WellNest 🌿",
      subtitle: "Comprehensive Wellness Companion App for Android",
      type: "Mobile App",
      status: "Completed",
      isFeatured: true,
      category: "Academic",
      isMobile: true,
      image: null,
      description: "WellNest is a holistic Android wellness app combining habit tracking, mood journaling, and hydration reminders into one cohesive experience. Built with 100% Kotlin and Material 3, it follows Clean Architecture with a Single-Activity pattern using Jetpack Navigation.",
      contribution: "My contribution: Architected and developed the entire application — including the daily habit tracker with swipe-to-delete and donut progress, emoji mood journal with bar chart analytics, smart WorkManager hydration reminders, home-screen widget, and full Light/Dark/System theme support with JSON import/export.",
      tags: ["Kotlin", "Android", "Material 3", "Jetpack Navigation", "WorkManager", "AlarmManager", "StateFlow", "SharedPreferences"],
      features: [
        { icon: <Smartphone size={14} />, text: "Daily Habit Tracker" },
        { icon: <Activity size={14} />, text: "Mood Analytics Chart" },
        { icon: <Terminal size={14} />, text: "Smart Hydration Reminders" }
      ],
      github: "https://github.com/chenathperera/WellNest",
      // Extra highlights shown as bullet points
      highlights: [
        "📅 CRUD habit tracker with visual donut progress",
        "🎭 Emoji mood journal with 7-day bar chart",
        "💧 WorkManager & AlarmManager reminders",
        "🏠 Home-screen widget with real-time stats",
        "🎨 Material 3 Light / Dark / System themes",
        "📦 JSON import / export backup system"
      ]
    },
    {
      title: "PairPix",
      subtitle: "AI Image Generator & Transformation Workspace",
      type: "Personal Project",
      status: "Completed",
      isFeatured: true,
      category: "Personal",
      isMobile: false,
      image: pairpixImg,
      description: "A slick full-stack application for generating production-ready AI images from text descriptions and transforming existing photography utilizing premium architectural style structures.",
      contribution: "My contribution: Crafted the credit subscription engine, multi-character prompt history queues, custom responsive SVG layouts, dashboard panels, and direct interface controls with edge generation states.",
      tags: ["React 19", "Node.js", "MongoDB", "Pollinations.ai", "Stable Horde", "Multer"],
      features: [
        { icon: <Terminal size={14} />, text: "Stable Diffusion Hooks" },
        { icon: <Layers size={14} />, text: "Credit-based Gateways" }
      ],
      github: "https://github.com/chenathperera/AI-Image-Generator"
    },
    {
      title: "Virtual Try-On System",
      subtitle: "AI-Powered Fashion Store with Fitting Rooms",
      type: "Personal Project",
      status: "Completed",
      isFeatured: false,
      category: "Personal",
      isMobile: false,
      image: tryonImg,
      description: "An innovative digital clothing ecosystem matching premium modern shopping flows with a unique interactive virtual dressing room experience.",
      contribution: "My contribution: Programmed the visual workflow where shoppers upload full-body layout photographs to seamlessly view clothing mockups, powered by Google Gemini vision microcontrollers and Cloudinary CDNs.",
      tags: ["React 19", "Node.js", "MongoDB", "Google Gemini AI", "Cloudinary", "Stripe"],
      features: [
        { icon: <ShieldCheck size={14} />, text: "Gemini Vision Fittings" },
        { icon: <Layers size={14} />, text: "CDN Image Repositories" }
      ],
      github: "https://github.com/chenathperera/virtual-try-on-System"
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Mobile App') return project.isMobile;
    return project.category === activeTab;
  });

  return (
    <section
      id="projects"
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0d1520',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px),
          radial-gradient(circle at 100% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '44px 44px, 44px 44px, 100% 100%'
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-1.5 border border-red-900/30 bg-red-950/20 px-3 py-1 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 size={12} />
            Portfolio Showcase
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-normal">
            A verified collection of my advanced MERN stack builds, microservice systems, and mobile applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer border ${
                activeTab === tab
                  ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-950/40'
                  : 'bg-[#101620]/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab === 'Mobile App' ? '📱 Mobile App' : tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                className="rounded-[26px] shadow-xl overflow-hidden group flex flex-col"
                style={{
                  backgroundColor: '#131e2e',
                  border: '1px solid rgba(148,163,184,0.1)',
                  boxShadow: '0 12px 50px rgba(0,0,0,0.5)'
                }}
              >
                {/* IMAGE or Mobile Placeholder */}
                <div className="px-4 pt-4">
                  <div className="w-full relative overflow-hidden" style={{ height: '280px', borderRadius: '18px' }}>

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        style={{ opacity: 0.82 }}
                      />
                    ) : (
                      /* WellNest — no banner image, show a styled placeholder */
                      <div
                        className="w-full h-full flex flex-col items-center justify-center gap-4"
                        style={{
                          background: 'linear-gradient(135deg, #0d2018 0%, #0f2d1a 40%, #112410 70%, #0a1a10 100%)',
                        }}
                      >
                        <div className="text-6xl">🌿</div>
                        <div className="text-center">
                          <p className="text-emerald-400 font-bold text-xl tracking-wide">WellNest</p>
                          <p className="text-emerald-600 text-xs mt-1 tracking-widest uppercase">Android Wellness App</p>
                        </div>
                        {/* Decorative feature pills */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 px-8">
                          {['Habit Tracker', 'Mood Journal', 'Hydration', 'Widget', 'Material 3'].map(f => (
                            <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)', color: '#6ee7b7' }}>
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bottom fade */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(19,30,46,0.95) 100%)', borderRadius: '18px' }} />

                    {/* Glass Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full"
                          style={{ backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)', background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(52,211,153,0.35)', color: '#6ee7b7' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s infinite' }} />
                          {project.status}
                        </span>
                        {project.isFeatured && (
                          <span className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                            style={{ backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)', background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(248,113,113,0.35)', color: '#fca5a5' }}>
                            ★ Featured
                          </span>
                        )}
                        {project.isMobile && (
                          <span className="text-[11px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1"
                            style={{ backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)', background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7' }}>
                            📱 Mobile App
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                        style={{ backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)', background: 'rgba(30,41,59,0.75)', border: '1px solid rgba(148,163,184,0.2)', color: '#cbd5e1' }}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 md:p-9">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1 transition-colors duration-300 group-hover:text-red-400" style={{ color: '#f8fafc' }}>
                    {project.title}
                  </h3>
                  <h4 className="text-red-400 font-bold text-xs md:text-sm tracking-wide mb-5">
                    {project.subtitle}
                  </h4>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Contribution box */}
                  <div className="p-4 mb-5 rounded-r-xl" style={{ background: 'rgba(18,26,39,0.8)', borderLeft: '3px solid #ef4444' }}>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">{project.contribution}</p>
                  </div>

                  {/* WellNest highlights grid */}
                  {project.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 font-medium"
                          style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.12)' }}>
                          {h}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feature chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                        style={{ background: 'rgba(15,21,34,0.8)', border: '1px solid rgba(30,42,60,0.8)', color: '#94a3b8' }}>
                        <span className="text-red-500 flex-shrink-0">{feat.icon}</span>
                        <span className="text-[11px] font-semibold tracking-wide truncate">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-5 pb-6" style={{ borderTop: '1px solid rgba(30,42,60,0.8)' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-[11px] font-semibold"
                        style={{ background: '#0f1a28', color: '#94a3b8', border: '1px solid rgba(30,42,60,0.9)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-300"
                      style={{ background: '#0f1a28', border: '1px solid rgba(30,42,60,0.9)', color: '#94a3b8' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#ffffff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#0f1a28'; e.currentTarget.style.borderColor = 'rgba(30,42,60,0.9)'; e.currentTarget.style.color = '#94a3b8'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" style={{ boxShadow: '0 0 10px rgba(74,222,128,0.7)' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}