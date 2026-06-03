import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar, CheckCircle2, Award, TrendingUp } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      title: "Bachelor's Degree",
      subtitle: "BSc (Hons) in IT Specializing Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 – PRESENT",
      status: "IN PROGRESS",
      hasGrade: true,
      gradeLabel: "CURRENT CGPA",
      gradeValue: "3.54",
      gradeScale: "/ 4.00",
      highlights: [
        "Specializing in Software Engineering tracks",
        "Deep focus on MERN Stack, Java & Scalable Architecture Development",
        "Maintained an active engineering problem-solving roadmap"
      ],
      icon: <GraduationCap className="text-white" size={22} />,
      iconBg: "bg-red-600 shadow-red-900/30"
    },
    {
      title: "Secondary Education",
      subtitle: "GCE Advanced Level – Maths Stream",
      institution: "Wadduwa Central College, Wadduwa",
      period: "2020 – 2022",
      status: "COMPLETED",
      hasGrade: false,
      highlights: [
        "Combined Mathematics — Grade B",
        "Physics — Grade B",
        "ICT — Grade C"
      ],
      icon: <BookOpen className="text-white" size={22} />,
      iconBg: "bg-zinc-700 shadow-zinc-900/30"
    },
    {
      title: "GCE Ordinary Level",
      subtitle: "GCE Ordinary Level",
      institution: "Wadduwa Central College, Wadduwa",
      period: "2019",
      status: "COMPLETED",
      hasGrade: false,
      highlights: [
        "Excellent results in ICT and Mathematics streams",
        "Early foundation built in computational thinking & algorithmic workflows"
      ],
      icon: <School className="text-white" size={22} />,
      iconBg: "bg-zinc-800 shadow-zinc-900/30"
    }
  ];

  return (
    <section 
      id="education" 
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0a0f16',
        backgroundImage: `
          linear-gradient(to right, rgba(239, 68, 68, 0.015) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(239, 68, 68, 0.015) 1px, transparent 1px),
          radial-gradient(circle at 50% 100%, rgba(220, 38, 38, 0.07) 0%, transparent 60%)
        `,
        backgroundSize: '45px 45px, 45px 45px, 100% 100%'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading matching style from Screenshot 2026-06-01 135640.png */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 border border-red-900/40 bg-red-950/20 px-3.5 py-1.5 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Academic Background
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-red-500">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-normal">
            A chronological look at my academic foundations and engineering milestones.
          </p>
        </div>

        {/* 3-Column Grid matching card layout from Screenshot 2026-06-01 135640.png */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0e141f]/90 border border-slate-800/60 rounded-[24px] p-6 md:p-7 shadow-xl relative flex flex-col justify-between overflow-hidden group hover:border-red-900/30 transition-all duration-300"
            >
              <div>
                {/* Header Row: Custom Icon Box + Floating Date Stamp */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${edu.iconBg}`}>
                    {edu.icon}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 bg-red-950/20 border border-red-900/30 px-3 py-1 rounded-lg">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Card Main Information Headers */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                  {edu.title}
                </h3>
                <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mt-1.5 leading-snug">
                  {edu.subtitle}
                </h4>
                <p className="text-slate-400 font-medium text-xs md:text-sm mt-2 leading-relaxed">
                  {edu.institution}
                </p>

                {/* Specific GPA Highlight Block matching layout from Screenshot 2026-06-01 135658.png */}
                {edu.hasGrade && (
                  <div className="bg-[#121926] border border-slate-800/80 rounded-xl p-3.5 mt-5 flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-950/45 border border-red-900/40 flex items-center justify-center text-red-400">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                        {edu.gradeLabel}
                      </span>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-lg font-black text-slate-200">{edu.gradeValue}</span>
                        <span className="text-xs font-bold text-slate-500">{edu.gradeScale}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Custom Red/Emerald Checklist Alignment */}
                <ul className="mt-6 space-y-3">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle2 size={15} className="text-red-500 mt-0.5 shrink-0" />
                      <span className="text-xs md:text-[13px] leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Status Badging Footer matching screenshot indicators */}
              <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className={`text-[11px] font-black tracking-widest uppercase ${
                  edu.status === 'IN PROGRESS' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {edu.status}
                </span>
                
                <Award size={16} className="text-slate-700 group-hover:text-red-500 transition-colors duration-300" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Footer Ribbon matching layout from Screenshot 2026-06-01 135658.png */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto bg-[#0e141f]/60 border border-slate-800/40 rounded-xl p-4 flex items-center justify-center gap-3 shadow-md"
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></div>
          <p className="text-xs md:text-sm text-slate-400 font-medium">
             • Focused on <span className="text-white font-bold">Continuous Learning</span> & Architecture Design
          </p>
        </motion.div>

      </div>
    </section>
  );
}