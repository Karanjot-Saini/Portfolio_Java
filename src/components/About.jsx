import React from 'react';
import { CheckCircle2, Terminal } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            Background & Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {aboutData.headline}
          </h2>
        </div>

        {/* Two-column layout: Narrative Story + Technical Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} className="bg-space-850/40 p-4 sm:p-5 rounded-xl border border-white/5 shadow-inner">
                {para}
              </p>
            ))}

            {/* Quick Callout Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-space-800 to-space-850 border border-electric-500/30 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-electric-500/10 text-electric-400 mt-1 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">
                  Why Enterprise Support Transformed My Backend Code
                </h3>
                <p className="text-xs text-slate-300 leading-normal">
                  Having debugged hundreds of production incidents under tight SLAs, I don't just write code that passes tests locally. I write code designed for production: with atomic database transactions, idempotency, defensive validation, structured JSON error contracts, and searchable logs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {aboutData.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-space-850/70 border border-white/5 hover:border-electric-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-space-800 border border-electric-500/20 text-electric-400 flex items-center justify-center group-hover:border-electric-400 group-hover:scale-105 transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 pl-10 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Availability / Status Card */}
            <div className="p-5 rounded-xl bg-space-900 border border-white/10 mt-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Current Status</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Open for Opportunities
                </span>
              </div>
              <div className="text-xs text-slate-300">
                Targeting roles as a <span className="text-white font-semibold">Java Backend Developer</span> / <span className="text-white font-semibold">Spring Boot Engineer</span>.
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Location:</span>
                <span className="text-slate-200">{personalInfo.location}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
