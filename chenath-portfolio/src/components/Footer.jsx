import React from 'react';
import { MapPin, Mail, ArrowRight, ArrowUpCircle, Phone } from 'lucide-react';

const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.363-1.669a11.867 11.867 0 005.689 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const navigationLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-slate-400 font-sans"
      style={{ backgroundColor: '#0d1520' }}
    >
      {/* Subtle top border line */}
      <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

          {/* ── Column 1: Name + Bio + Social Icons ── */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-5">
              <span className="text-red-500">Chenath</span>
              <br />
              <span className="text-white">Perera</span>
            </h2>

            <p className="text-sm leading-relaxed max-w-sm mb-8 text-slate-400">
              IT Undergraduate passionate about creating{' '}
              <span className="text-slate-200">innovative web solutions</span> and digital
              experiences that make a difference.
            </p>

            {/* Social icon boxes — colored like hers */}
            <div className="flex items-center gap-3">

              {/* GitHub — dark */}
              <a href="https://github.com/chenathperera" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(148,163,184,0.1)', border: '1px solid rgba(148,163,184,0.15)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(148,163,184,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(148,163,184,0.1)'}
              >
                <GitHubIcon className="w-5 h-5 text-slate-300" />
              </a>

              {/* LinkedIn — blue */}
              <a href="https://www.linkedin.com/in/chenath-perera-83bba0337/" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.28)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.15)'}
              >
                <LinkedInIcon className="w-5 h-5 text-blue-400" />
              </a>

              

              {/* Email — red */}
              <a href="mailto:chenathperera@gmail.com"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.25)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.28)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.15)'}
              >
                <Mail size={18} className="text-red-400" />
              </a>

            </div>
          </div>

          {/* ── Column 2: Navigation ── */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" style={{ boxShadow: '0 0 8px #ef4444' }}></span>
              <h4 className="text-base font-bold text-white tracking-wide">Navigation</h4>
            </div>
            <ul className="space-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-300 text-sm font-medium cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Info ── */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" style={{ boxShadow: '0 0 8px #ef4444' }}></span>
              <h4 className="text-base font-bold text-white tracking-wide">Contact Info</h4>
            </div>
            <div className="space-y-4">

              {/* Location */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}
                >
                  <MapPin size={16} className="text-purple-400" />
                </div>
                <p className="text-sm text-slate-300">Wadduwa, Kalutara, Sri Lanka</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.25)' }}
                >
                  <Mail size={16} className="text-red-400" />
                </div>
                <a href="mailto:chenathperera@gmail.com"
                  className="text-sm text-slate-300 hover:text-red-400 transition-colors break-all">
                  chenathperera@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* ── Column 4: Let's Connect ── */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" style={{ boxShadow: '0 0 8px #ef4444' }}></span>
              <h4 className="text-base font-bold text-white tracking-wide">Let's Connect</h4>
            </div>
            <p className="text-sm leading-relaxed mb-7 text-slate-400">
              Interested in collaborating? Feel free to reach out for project discussions, tech talks, or just to say hello!
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-fit"
              style={{
                background: 'rgba(239,68,68,0.15)',
                border: '1px solid rgba(239,68,68,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ef4444';
                e.currentTarget.style.borderColor = '#ef4444';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(239,68,68,0.15)';
                e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)';
              }}
            >
              <span className="text-red-400 group-hover:text-white">Get In Touch</span>
              <ArrowRight size={16} className="text-red-400" />
            </button>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(148,163,184,0.08)' }}
        >
          <p className="text-xs text-slate-600 font-medium">
            © {currentYear} Chenath Perera • All rights reserved • Made by ❤️ Chenath Perera
          </p>

          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
            style={{
              background: 'rgba(148,163,184,0.08)',
              border: '1px solid rgba(148,163,184,0.12)',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(148,163,184,0.12)'}
          >
            Back to Top
            <ArrowUpCircle size={16} className="text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}