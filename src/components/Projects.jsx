import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Server
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'features' | 'code'

  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-400" />
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Projects & Architecture
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production-grade software architectures showcasing secure authentication, database consistency, and modular Spring Boot engineering.
          </p>
        </div>

        {/* Featured Project Showcase: Grewal Electric Store */}
        <div className="space-y-12">
          {projectsData.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-gradient-to-b from-space-800/90 to-space-850/90 border border-electric-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-500 text-slate-950 shadow-electric-sm">
                      FEATURED PROJECT
                    </span>
                    <span className="text-xs font-mono text-electric-300 bg-space-900 px-3 py-1 rounded-full border border-electric-500/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2 lg:pt-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-space-900 text-slate-200 border border-white/10 hover:border-electric-400 hover:text-white text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-electric-400" />
                    <span>View GitHub Repo</span>
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-electric-500 text-slate-950 hover:bg-electric-400 text-xs font-semibold transition-all shadow-electric-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-space-900/80 border border-white/5 text-[11px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Demo Available on Request
                    </span>
                  )}
                </div>
              </div>

              {/* Summary & Problem Statement */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    System Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="p-4 rounded-xl bg-space-900/60 border border-white/5 text-xs text-slate-400 space-y-1">
                    <span className="text-white font-medium block">Core Challenge Solved:</span>
                    <p>{project.problemStatement}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-space-900 text-slate-200 border border-white/5 text-xs font-mono flex items-center gap-1.5 hover:border-electric-500/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Deep-Dive Tabs: Architecture / Features / Code Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeTab === 'architecture'
                        ? 'bg-electric-500/20 text-electric-300 border border-electric-500/40 shadow-electric-sm'
                        : 'bg-space-900 text-slate-400 border border-white/5 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-electric-400" />
                    <span>System Architecture</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeTab === 'features'
                        ? 'bg-electric-500/20 text-electric-300 border border-electric-500/40 shadow-electric-sm'
                        : 'bg-space-900 text-slate-400 border border-white/5 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-electric-400" />
                    <span>Key Features ({project.features.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeTab === 'code'
                        ? 'bg-electric-500/20 text-electric-300 border border-electric-500/40 shadow-electric-sm'
                        : 'bg-space-900 text-slate-400 border border-white/5 hover:text-slate-200'
                    }`}
                  >
                    <Code className="w-4 h-4 text-electric-400" />
                    <span>Engineering Highlights</span>
                  </button>
                </div>

                {/* Tab 1: Architecture View */}
                {activeTab === 'architecture' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-space-900/80 border border-white/5 hover:border-electric-500/30 transition-all">
                      <div className="text-xs font-mono text-electric-400 mb-1 flex items-center gap-1.5">
                        <Server className="w-4 h-4" />
                        01. Client & API Gateway
                      </div>
                      <div className="text-sm font-semibold text-white mb-1.5">React SPA + Interceptors</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.architecture.client}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-space-900/80 border border-white/5 hover:border-electric-500/30 transition-all">
                      <div className="text-xs font-mono text-electric-400 mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        02. Security & Auth Filter
                      </div>
                      <div className="text-sm font-semibold text-white mb-1.5">Stateless JWT + Refresh</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.architecture.apiGateway}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-space-900/80 border border-white/5 hover:border-electric-500/30 transition-all">
                      <div className="text-xs font-mono text-electric-400 mb-1 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4" />
                        03. Core Business Services
                      </div>
                      <div className="text-sm font-semibold text-white mb-1.5">Spring Boot 3 / Java 21</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.architecture.backend}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-space-900/80 border border-white/5 hover:border-electric-500/30 transition-all">
                      <div className="text-xs font-mono text-electric-400 mb-1 flex items-center gap-1.5">
                        <Database className="w-4 h-4" />
                        04. ORM & Transaction Boundary
                      </div>
                      <div className="text-sm font-semibold text-white mb-1.5">Spring Data JPA / Hibernate</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.architecture.dataAccess}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-space-900/80 border border-white/5 hover:border-electric-500/30 transition-all md:col-span-2">
                      <div className="text-xs font-mono text-electric-400 mb-1 flex items-center gap-1.5">
                        <Database className="w-4 h-4" />
                        05. Relational Persistence
                      </div>
                      <div className="text-sm font-semibold text-white mb-1.5">MySQL Database</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.architecture.database}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Features List */}
                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-space-900/70 border border-white/5 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-electric-500/10 text-electric-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 3: Code Highlights */}
                {activeTab === 'code' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.codeHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-space-900/80 border border-white/5 space-y-2"
                      >
                        <div className="text-xs font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-electric-400" />
                          {highlight.title}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Enterprise Architecture</span>
                <span className="text-emerald-400/80">Production Pattern Verified</span>
              </div>
            </div>
          ))}

          {/* Additional Reusable Projects Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Additional Projects & Boilerplates</span>
              <span className="text-xs font-mono text-slate-400 font-normal">
                (Easily extendable in data config)
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.filter(p => !p.featured).map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl bg-space-850/70 border border-white/5 p-6 hover:border-electric-500/30 hover:shadow-electric-sm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-electric-300 bg-space-900 px-2.5 py-1 rounded-md border border-electric-500/20">
                        {proj.category}
                      </span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {proj.summary}
                    </p>

                    {/* Key Highlights / Features */}
                    {proj.features && proj.features.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {proj.features.map((feat, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.techStack.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono bg-space-900 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-400 hover:text-electric-300 flex items-center gap-1"
                    >
                      <span>Explore Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
