import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ShieldCheck, Terminal, Layers, Code, ExternalLink, Activity } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Academic', 'Personal', 'AI Integrated'];

  const projectsData = [
    {
      title: "iDoc",
      subtitle: "AI-Enabled Smart Healthcare & Telemedicine Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: true,
      category: "Academic",
      isAI: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", // Replace with your project screenshots
      description: "A cloud-native microservices healthcare platform that enables patients to book appointments, upload medical reports, attend secure telemedicine sessions, make online payments, and receive AI-assisted symptom guidance.",
      contribution: "My contribution: Engineered the comprehensive Doctor Module from scratch, including registration/approval workflows, appointment queues, medical report lookups, prescription issuance channels, and automated symptom analysis using OpenRouter AI APIs.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Microservices", "Stripe", "Docker", "OpenRouter AI"],
      features: [
        { icon: <Activity size={14} />, text: "Gateway Microservices" },
        { icon: <ShieldCheck size={14} />, text: "Doctor Approval Pipeline" },
        { icon: <Terminal size={14} />, text: "AI Symptom Tracking" }
      ],
      github: "https://github.com/chenathperera/iDoc"
    },
    {
      title: "DropMe",
      subtitle: "Smart Carpooling & Public Transport Mobility Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: true,
      category: "Academic",
      isAI: false,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive transport and mobility management platform combining ride carpooling, automated train & bus ticket validation, and an eco-friendly travel tracking ecosystem.",
      contribution: "My contribution: Solely developed the entire Train Ticket Booking Module—handling live searches between stations, interactive timetables, secure payments, automated PDF ticket downloads, validation engines, and admin controls.",
      tags: ["React", "Node.js", "MongoDB", "Leaflet Maps", "Socket.IO", "Stripe", "Tailwind CSS"],
      features: [
        { icon: <Layers size={14} />, text: "Train Schedule Engine" },
        { icon: <ShieldCheck size={14} />, text: "PDF Ticket Generator" },
        { icon: <Terminal size={14} />, text: "Real-time Map Vectors" }
      ],
      github: "https://github.com/chenathperera/DropMe"
    },
    {
      title: "MediCore HMS",
      subtitle: "Modular Full-Stack Hospital Operations Platform",
      type: "Academic Project",
      status: "Completed",
      isFeatured: false,
      category: "Academic",
      isAI: true,
      image: "https://images.unsplash.com/photo-1584515933487-780216b26b53?auto=format&fit=crop&w=800&q=80",
      description: "An enterprise-grade hospital operational framework covering dynamic appointment scheduling, clinical history archiving, vaccination logs, automated lab reports, and AI insights.",
      contribution: "My contribution: Designed the Lab Report Management System featuring AI-based parsing. It securely uploads data, extracts critical blood markers (like cholesterol/diabetes values), visualizes trend lines, and serves personalized medical advice.",
      tags: ["React", "Node.js", "MongoDB", "Express", "AI Integration", "JWT Auth"],
      features: [
        { icon: <Activity size={14} />, text: "AI Extraction Lab Cards" },
        { icon: <Layers size={14} />, text: "Trend Analytics Lines" }
      ],
      github: "https://github.com/chenathperera/MediCore"
    },
    {
      title: "PairPix",
      subtitle: "AI Image Generator & Transformation Workspace",
      type: "Personal Project",
      status: "Completed",
      isFeatured: true,
      category: "Personal",
      isAI: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "A slick full-stack application for generating production-ready AI images from text descriptions and transforming existing photography utilizing premium architectural style structures.",
      contribution: "My contribution: Crafted the credit subscription engine, multi-character prompt history queues, custom responsive SVG layouts, dashboard panels, and direct interface controls with edge generation states.",
      tags: ["React 19", "Node.js", "MongoDB", "Pollinations.ai", "Stable Horde", "Multer"],
      features: [
        { icon: <Terminal size={14} />, text: "Stable Diffusion Hooks" },
        { icon: <Layers size={14} />, text: "Credit-based Gateways" }
      ],
      github: "https://github.com/chenathperera/PairPix"
    },
    {
      title: "Virtual Try-On System",
      subtitle: "AI-Powered Fashion Store with Fitting Rooms",
      type: "Personal Project",
      status: "Completed",
      isFeatured: false,
      category: "Personal",
      isAI: true,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
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
    if (activeTab === 'AI Integrated') return project.isAI;
    return project.category === activeTab;
  });

  return (
    <section 
      id="projects" 
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0a0f16',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px),
          radial-gradient(circle at 100% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '45px 45px, 45px 45px, 100% 100%'
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 border border-red-900/30 bg-red-950/20 px-3 py-1 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 size={12} />
            Portfolio Showcase
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-normal">
            A verified collection of my advanced MERN stack builds, microservice systems, and artificial intelligence models.
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
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
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Layout Stack Container */}
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
                className="bg-[#0e141f]/90 backdrop-blur-md border border-slate-800/80 rounded-[24px] shadow-xl relative overflow-hidden group flex flex-col"
              >
                {/* Embedded Project Image Header Frame with Fade Gradient */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e141f] via-[#0e141f]/40 to-transparent" />
                  
                  {/* Floating Badges Overlay Row inside image header space */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-green-950/80 text-green-400 backdrop-blur-sm border border-green-800/40 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        {project.status}
                      </span>
                      {project.isFeatured && (
                        <span className="text-[11px] font-bold bg-red-950/80 text-red-400 backdrop-blur-sm border border-red-800/40 px-2.5 py-0.5 rounded-full">
                          ★ Featured
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-bold bg-slate-900/80 text-slate-400 backdrop-blur-sm border border-slate-800 px-2.5 py-0.5 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Card Inner Explanatory Body */}
                <div className="p-6 md:p-8 -mt-4 relative z-10 bg-[#0e141f]">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <h4 className="text-red-400/90 font-bold text-xs md:text-sm tracking-wide mt-1">
                    {project.subtitle}
                  </h4>

                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal mt-4">
                    {project.description}
                  </p>

                  {/* Highlight Contribution Box Accent Layout */}
                  <div className="bg-[#121a27] border-l-2 border-red-500 rounded-r-xl p-4 mt-5">
                    <p className="text-slate-300 font-medium text-xs md:text-sm leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Modular Features Row Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-slate-400 bg-[#101620]/40 border border-slate-900/60 px-4 py-2.5 rounded-xl">
                        <div className="text-red-500">{feat.icon}</div>
                        <span className="text-[11px] font-medium tracking-wide truncate">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal Technologies Tag List Footer */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-900">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-[#141d2a] text-slate-300 border border-slate-800/80 px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions Bottom Row - GitHub Code Toggle Button */}
                  <div className="mt-8 pt-2 flex items-center justify-between">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#141d2a] hover:bg-red-600 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-300 cursor-pointer"
                    >
                      {/* GitHub Branding Logo Vector Icon */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                    
                    {/* Tiny active node dot indicator representing live status matching snapshot */}
                    <span className="w-2 h-2 rounded-full bg-green-400 block shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
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