import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-white/5 bg-space-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-400" />
              Professional Career
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            An honest, transparent record of enterprise production systems, server administration, and mission-critical support.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-space-850/80 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-blue-600 to-indigo-600" />

              {/* Role & Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-500/10 text-electric-400 border border-electric-500/30">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white pt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5 text-electric-300">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Honest Scope Callout */}
                <div className="p-3 rounded-xl bg-space-900 border border-white/5 lg:max-w-xs text-xs font-mono text-slate-300">
                  <span className="text-[10px] text-electric-400 uppercase tracking-wider block font-semibold mb-1">
                    Verified Scope of Responsibilities
                  </span>
                  <span>{exp.honestScope}</span>
                </div>
              </div>

              {/* Overview Summary */}
              <p className="text-sm text-slate-300 leading-relaxed my-6">
                {exp.summary}
              </p>

              {/* Detailed Responsibilities List */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Enterprise Responsibilities & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-xl bg-space-900/70 border border-white/5 hover:border-white/10 transition-colors space-y-1.5"
                    >
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>{resp.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-5.5">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bridge to Backend Engineering Callout */}
              <div className="mt-8 pt-6 border-t border-white/10 p-5 rounded-2xl bg-gradient-to-r from-space-900 to-space-850 border border-electric-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-electric-400 font-semibold flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    How This Sharpens My Java Backend Development
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.keyTakeaway}
                  </p>
                </div>
                <a
                  href="#projects"
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-space-800 text-slate-200 border border-white/10 hover:border-electric-400 hover:text-white text-xs font-mono transition-colors"
                >
                  <span>See Applied Java Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-electric-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
