import React, { useState } from 'react';
import { Server, Database, Cpu, Layout, ShieldAlert } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Server className="w-5 h-5" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-space-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-400" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Technology Stack
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Organized across core backend engineering, persistent relational data layers, modern build pipelines, and production operations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-electric-500 text-slate-950 font-bold shadow-electric-sm'
                : 'bg-space-850 text-slate-300 border border-white/5 hover:border-white/20'
            }`}
          >
            All Categories ({skillsCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-electric-500 text-slate-950 font-bold shadow-electric-sm'
                  : 'bg-space-850 text-slate-300 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-space-850/80 border border-white/5 p-6 hover:border-electric-500/40 hover:shadow-electric-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Category */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-space-800 text-electric-400 border border-electric-500/20">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-3 mt-5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-space-900/60 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-slate-200 flex items-center gap-1.5">
                          {skill.core && (
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-400" title="Core Focus Skill" />
                          )}
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-electric-300/90 bg-electric-500/10 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>

                      {/* Micro tags */}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono text-slate-400 bg-space-800/80 px-1.5 py-0.5 rounded border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicating skill count */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} Competencies</span>
                <span className="text-electric-400/80">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
