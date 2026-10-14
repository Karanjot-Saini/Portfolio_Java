import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04070F] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-space-850 border border-electric-500/40 flex items-center justify-center text-electric-400 font-mono font-bold text-xs">
                <span>&lt;KS/&gt;</span>
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Java Backend Developer targeting resilient RESTful services, transactional reliability, and secure Spring Boot microservices.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-space-850 border border-white/10 hover:border-electric-400 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-space-850 border border-white/10 hover:border-blue-400 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-space-850 border border-white/10 hover:border-electric-400 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-electric-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-electric-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-electric-400 transition-colors">Skills & Stack</a>
              <a href="#projects" className="hover:text-electric-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-electric-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-electric-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Core Stack Note */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Engineered With
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              React 18, Vite, Tailwind CSS, and Lucide React. Built with clean semantic structure, accessibility, and high visual standards.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-850 border border-white/5 hover:border-electric-500/40 text-slate-300 hover:text-electric-400 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
