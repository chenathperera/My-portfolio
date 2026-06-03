import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare, User, AtSign, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be hooked up here (e.g., EmailJS or a backend route)
    console.log('Form Submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0a0f16',
        backgroundImage: `
          linear-gradient(to right, rgba(239, 68, 68, 0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(239, 68, 68, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: '45px 45px, 45px 45px'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading matching Screenshot 2026-06-01 140813.jpg */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-red-500"></div>
            <div className="p-1.5 rounded-md border border-red-900/40 bg-red-950/20 text-red-500">
              <Mail size={16} />
            </div>
            <div className="w-6 h-[1px] bg-red-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-normal">
            Let's create something amazing together. Drop me a message and let's bring your ideas to life!
          </p>
        </div>

        {/* Two-Column Grid matching Screenshot 2026-06-01 140802.jpg & 140813.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Cards & Social Links */}
          <div className="lg:col-span-5 bg-[#0e141f]/90 border border-slate-800/60 rounded-[24px] p-6 md:p-8 shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-red-950/30 border border-red-900/40 text-red-500">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Let's Build the Future Together!</h3>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Whether you have a groundbreaking project idea, need technical expertise, or just want to connect over tech. I'm always excited to explore new possibilities. Feel free to reach out through any social media below!
            </p>

            {/* Direct Details Stack */}
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#121926] border border-slate-800/80 group hover:border-red-900/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-950/20 border border-red-900/30 flex items-center justify-center text-red-500">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email</span>
                    <a href="mailto:chenathperera@gmail.com" className="text-xs md:text-sm font-medium text-slate-300 hover:text-red-400 transition-colors">
                      chenathperera@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#121926] border border-slate-800/80 group hover:border-red-900/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-950/20 border border-red-900/30 flex items-center justify-center text-red-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</span>
                    <span className="text-xs md:text-sm font-medium text-slate-300">
                      Wadduwa, Kalutara, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect With Me Grid matching layout from Screenshot 2026-06-01 140802.jpg */}
            <div className="mt-4 pt-6 border-t border-slate-900">
              <h4 className="text-sm font-bold text-white mb-4">Connect With Me</h4>
              <div className="grid grid-cols-3 gap-3">
                
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/chenath-perera-83bba0337/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-950/10 border border-blue-900/20 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all duration-300 gap-1.5 group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold tracking-wide">LinkedIn</span>
                </a>

                {/* GitHub Link */}
                <a 
                  href="https://github.com/chenathperera" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-500/50 text-slate-400 hover:text-white transition-all duration-300 gap-1.5 group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold tracking-wide">GitHub</span>
                </a>

                {/* Direct Mail Shortcut */}
                <a 
                  href="mailto:chenathperera@gmail.com"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-red-950/10 border border-red-900/20 hover:border-red-500/50 text-slate-400 hover:text-red-400 transition-all duration-300 gap-1.5 group"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold tracking-wide">Email</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form Module */}
          <div className="lg:col-span-7 bg-[#0e141f]/90 border border-slate-800/60 rounded-[24px] p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-red-950/30 border border-red-900/40 text-red-500">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-slate-500 mt-0.5">I typically respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Full Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-[#121926] border border-slate-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-[#121926] border border-slate-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input Field */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's work together!"
                  required
                  className="w-full bg-[#121926] border border-slate-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300"
                />
              </div>

              {/* Message Content Textarea */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Hello! I'd like to discuss a potential project with you..."
                  required
                  className="w-full bg-[#121926] border border-slate-800 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit CTA Button matching gradient span look from Screenshot 2026-06-01 140802.jpg */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-red-950/50 cursor-pointer group"
              >
                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Send Message</span>
              </button>

              <p className="text-center text-[11px] text-slate-600 font-medium tracking-wide pt-2">
                Your information is secure and will never be shared
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}