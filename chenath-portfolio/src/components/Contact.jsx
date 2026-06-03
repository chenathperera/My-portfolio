import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── Replace these three values with your own from emailjs.com ───────────────
const EMAILJS_SERVICE_ID  = 'service_jo9u05l';
const EMAILJS_TEMPLATE_ID = 'template_5ticc9k';
const EMAILJS_PUBLIC_KEY  = 'HxTVHQTonsyQpmFed';
  // get this from Account page// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputStyle = {
    background: '#1a2740',
    border: '1px solid rgba(148,163,184,0.12)',
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-slate-100 font-sans py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        backgroundColor: '#0d1520',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px),
          radial-gradient(circle at 0% 100%, rgba(220, 38, 38, 0.07) 0%, transparent 50%)
        `,
        backgroundSize: '44px 44px, 44px 44px, 100% 100%'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
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

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6 rounded-[24px] p-6 md:p-8 shadow-xl"
            style={{ backgroundColor: '#131e2e', border: '1px solid rgba(148,163,184,0.1)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl text-red-400" style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.25)' }}>
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Let's Build the Future Together!</h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a groundbreaking project idea, need technical expertise, or just want to connect over tech. I'm always excited to explore new possibilities. Feel free to reach out through any social media below!
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: '#1a2740', border: '1px solid rgba(148,163,184,0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}>
                  <Mail size={18} className="text-red-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email</span>
                  <a href="mailto:chenathperera@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-red-400 transition-colors">
                    chenathperera@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: '#1a2740', border: '1px solid rgba(148,163,184,0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Location</span>
                  <span className="text-sm font-semibold text-slate-200">Wadduwa, Kalutara, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)' }} className="pt-4">
              <h4 className="text-sm font-bold text-white mb-4">Connect With Me</h4>
              <div className="grid grid-cols-3 gap-3">

                <a href="https://www.linkedin.com/in/chenath-perera-83bba0337/" target="_blank" rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.2)' }}>
                    <Linkedin size={18} className="text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold text-blue-400 tracking-wide">LinkedIn</span>
                </a>

                <a href="https://github.com/chenathperera" target="_blank" rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.15)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(148,163,184,0.12)' }}>
                    <Github size={18} className="text-slate-300" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-wide">GitHub</span>
                </a>

                <a href="mailto:chenathperera@gmail.com"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(239,68,68,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.2)' }}>
                    <Mail size={18} className="text-red-400" />
                  </div>
                  <span className="text-[11px] font-bold text-red-400 tracking-wide">Email</span>
                </a>

              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-[24px] p-6 md:p-8 shadow-xl"
            style={{ backgroundColor: '#131e2e', border: '1px solid rgba(148,163,184,0.1)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl text-red-400" style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.25)' }}>
                <User size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-slate-500 mt-0.5">I typically respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>Full Name
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Enter your name" required
                    className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#ef4444'}
                    onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.12)'}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>Email Address
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="your@email.com" required
                    className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#ef4444'}
                    onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.12)'}
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>Subject
                </label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder="Let's work together!" required
                  className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#ef4444'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.12)'}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>Message
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  rows="5" placeholder="Hello! I'd like to discuss a potential project with you..." required
                  className="w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#ef4444'}
                  onBlur={e => e.target.style.borderColor = 'rgba(148,163,184,0.12)'}
                />
              </div>

              {/* Submit Button — changes based on status */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: status === 'success'
                    ? 'linear-gradient(to right, #16a34a, #15803d)'
                    : status === 'error'
                    ? 'linear-gradient(to right, #b91c1c, #991b1b)'
                    : status === 'sending'
                    ? 'linear-gradient(to right, #9f1239, #881337)'
                    : 'linear-gradient(to right, #ef4444, #dc2626)',
                  boxShadow: '0 4px 20px rgba(239,68,68,0.3)',
                  opacity: status === 'sending' ? 0.75 : 1,
                }}
              >
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && <>✓ Message Sent Successfully!</>}
                {status === 'error'   && <>✕ Failed — Please Try Again</>}
                {status === 'idle'    && <><Send size={16} /> Send Message →</>}
              </button>

              <p className="text-center text-[11px] text-slate-600 font-medium tracking-wide pt-1">
                Your information is secure and will never be shared
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}