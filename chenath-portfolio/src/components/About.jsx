import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb, GraduationCap } from 'lucide-react';
import aboutPhoto from '../assets/about-profile.jpeg';

export default function About() {
  const cards = [
    {
      icon: <Code2 className="text-red-400" size={24} />,
      title: "Web Development",
      desc: "Building responsive and interactive web applications"
    },
    {
      icon: <Palette className="text-red-400" size={24} />,
      title: "UI/UX Design",
      desc: "Creating user-friendly and modern interfaces"
    },
    {
      icon: <Lightbulb className="text-red-400" size={24} />,
      title: "Problem Solving",
      desc: "Analyzing and solving complex technical challenges"
    }
  ];

  const stats = [
    { num: "5+", label: "Projects Completed", sub: "Web Applications" },
    { num: "7+", label: "Technologies", sub: "Mastered" },
    { num: "3rd", label: "Year Student", sub: "SLIIT" },
    { num: "BSc", label: "IT Degree", sub: "Software Engineering" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0d1526',
        backgroundImage: `
          radial-gradient(circle at 0% 40%, rgba(220, 38, 38, 0.10) 0%, transparent 50%),
          radial-gradient(circle at 100% 80%, rgba(239, 68, 68, 0.07) 0%, transparent 45%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-red-400 text-sm md:text-base font-bold tracking-widest uppercase mb-3"
          >
            <span className="w-6 h-[2px] bg-red-400"></span>
            ABOUT ME
            <span className="w-6 h-[2px] bg-red-400"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Get to Know <span className="text-red-400">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg mt-4 font-normal"
          >
            Learn about my journey, skills, and passion for technology
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Image + Education */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden border border-slate-600/50 bg-[#1a2438] p-3 shadow-2xl"
            >
              <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                <img
                  src={aboutPhoto}
                  alt="Chenath reading/working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Education Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#162035]/80 backdrop-blur-md border border-slate-600/50 p-6 rounded-[22px] shadow-lg"
            >
              <div className="flex items-center gap-3 text-red-400 font-bold text-xl mb-4">
                <GraduationCap size={24} />
                <h3>Education</h3>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-bold text-lg hover:text-red-400 transition-colors cursor-default">
                    SLIIT Malabe
                  </h4>
                  <p className="text-slate-300 text-sm mt-1">BSc (Hons) in Information Technology</p>
                  <p className="text-slate-400 text-sm mt-1">2023 - Present</p>
                </div>
                <span className="text-xs font-semibold bg-red-900/40 text-red-300 border border-red-700/40 px-3 py-1.5 rounded-full">
                  3rd Year
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Cards, Stats */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">

            {/* Bio Write-up */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed font-normal"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                Hello, I'm <span className="text-red-400">Chenath Perera</span>
              </h3>
              <p>
                I'm a passionate{' '}
                <span className="text-red-300 font-semibold underline decoration-red-500/40 underline-offset-4">
                  3rd year IT undergraduate
                </span>{' '}
                at Sri Lanka Institute of Information Technology (SLIIT), currently pursuing my{' '}
                <span className="text-red-300 font-semibold">
                  Bachelor's degree in Information Technology specializing in Software Engineering
                </span>.
              </p>
              <p>
                My journey in technology began with curiosity and has evolved into a deep passion for creating{' '}
                <span className="text-white font-bold">innovative digital solutions</span>. I specialize in
                developing modern web applications with clean, efficient code and user-centered design principles.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to projects, or
                learning about the latest trends in web development and UI/UX design.
              </p>
            </motion.div>

            {/* Core Domain Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#162035]/70 border border-slate-600/50 p-6 rounded-[18px] hover:border-red-700/50 hover:bg-[#1c2a42]/70 transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#1e2d47] rounded-xl w-fit group-hover:bg-red-900/30 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-white font-bold text-base mt-4 tracking-wide group-hover:text-red-300 transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-[#162035]/60 border border-slate-600/40 p-5 rounded-[18px] text-center flex flex-col justify-center items-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-red-400 tracking-tight">
                    {stat.num}
                  </div>
                  <div className="text-white font-semibold text-sm mt-2 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5 font-normal">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}