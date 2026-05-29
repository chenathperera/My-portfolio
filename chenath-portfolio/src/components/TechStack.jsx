import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const technologies = [
    { name: "HTML5", level: "Advanced", type: "Frontend", color: "text-orange-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", level: "Advanced", type: "Frontend", color: "text-blue-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: "Advanced", type: "Frontend", color: "text-yellow-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "React", level: "Advanced", type: "Frontend", color: "text-cyan-400", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Tailwind", level: "Advanced", type: "Frontend", color: "text-teal-400", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", level: "Intermediate", type: "Backend", color: "text-green-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Java", level: "Intermediate", type: "Backend", color: "text-red-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "Python", level: "Intermediate", type: "Backend", color: "text-blue-400", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "MongoDB", level: "Intermediate", type: "Database", color: "text-green-600", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", level: "Intermediate", type: "Database", color: "text-blue-500", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Postman", level: "Intermediate", type: "Tools", color: "text-orange-500", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Git", level: "Intermediate", type: "Tools", color: "text-orange-600", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" }
  ];

  const getBadgeStyle = (type) => {
    switch(type) {
      case 'Frontend': return 'bg-blue-950/40 text-blue-400 border-blue-900/30';
      case 'Backend': return 'bg-green-950/40 text-green-400 border-green-900/30';
      case 'Database': return 'bg-purple-950/40 text-purple-400 border-purple-900/30';
      case 'Tools': return 'bg-orange-950/40 text-orange-400 border-orange-900/30';
      default: return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="tech" 
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0a0f16',
        backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(220, 38, 38, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 100% 10%, rgba(239, 68, 68, 0.05) 0%, transparent 40%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-red-500">Tech Stack</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-normal"
          >
            Technologies and programming languages I use to build modern web applications and manage data pipelines
          </motion.p>
        </div>

        {/* Tech Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#101620]/40 border border-slate-800/60 p-6 rounded-[20px] flex flex-col items-center text-center shadow-md hover:border-red-900/30 hover:bg-[#141d2a]/50 transition-all duration-300 group"
            >
              {/* Technology Icon Wrapper */}
              <div className="w-14 h-14 mb-4 flex items-center justify-center p-2 rounded-xl bg-[#141c28] group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Tech Details */}
              <h3 className="text-white font-bold text-sm tracking-wide group-hover:text-red-400 transition-colors duration-300">
                {tech.name}
              </h3>
              
              <p className="text-slate-500 text-[11px] mt-1 font-medium">
                {tech.level}
              </p>

              {/* Domain Tag Badge */}
              <span className={`text-[10px] font-semibold tracking-wide border px-2.5 py-0.5 rounded-full mt-3 ${getBadgeStyle(tech.type)}`}>
                {tech.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Bottom Layout Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-16"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-red-950/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            View My Projects
          </button>

          <a 
            href="https://github.com/chenathperera" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#101620]/60 hover:bg-[#141d2a] text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl border border-slate-800 hover:border-red-900/20 transition-all duration-300 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub Profile</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}