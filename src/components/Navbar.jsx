import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070D1A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Karanjot Singh Home"
        >
          <div className="w-10 h-10 rounded-lg bg-space-800 border border-electric-500/40 flex items-center justify-center text-electric-400 font-mono font-bold text-base shadow-electric-sm group-hover:border-electric-400 group-hover:scale-105 transition-all">
            <span className="text-white">&lt;</span>
            <span className="text-electric-400">KS</span>
            <span className="text-white">/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-100 font-semibold tracking-tight text-sm group-hover:text-electric-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              Java Backend Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-space-850/80 px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-electric-500/20 border border-electric-500/40 shadow-electric-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.links.resume}
            download="Karanjot_Singh_Java_Backend_Developer_Resume.pdf"
            className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-electric-500/10 text-electric-400 border border-electric-500/40 hover:bg-electric-500/20 hover:border-electric-400 hover:shadow-electric-sm transition-all duration-200"
            title="Download PDF Resume"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-electric-500 text-slate-950 font-semibold hover:bg-electric-400 hover:shadow-electric-md transition-all duration-200"
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={personalInfo.links.resume}
            download="Karanjot_Singh_Java_Backend_Developer_Resume.pdf"
            className="p-2 rounded-lg bg-space-800 border border-electric-500/30 text-electric-400 text-xs flex items-center justify-center"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-space-800 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5 text-electric-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#070D1A]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 transition-all shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-electric-400 hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.links.resume}
              download="Karanjot_Singh_Java_Backend_Developer_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-space-800 border border-electric-500/40 text-electric-400 text-sm font-medium"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-electric-500 text-slate-950 font-semibold text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
