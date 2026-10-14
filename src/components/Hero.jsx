import React from 'react';
import { ArrowRight, FileDown, Mail, Terminal, ShieldCheck, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-850 border border-electric-500/30 text-xs font-mono text-slate-300 shadow-electric-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="text-electric-300 font-semibold">1.5 Yrs IT Experience</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Tech Mahindra to Java Backend</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-white">{personalInfo.name}</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-300 to-blue-500">
                  {personalInfo.title}
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
                Specializing in <span className="text-white font-medium">Java 21</span>, <span className="text-white font-medium">Spring Boot 3</span>, <span className="text-white font-medium">Spring Security (JWT)</span>, and high-integrity database design. Combining 1.5 years of enterprise production troubleshooting with backend engineering to build resilient, production-ready server applications.
              </p>
            </div>

            {/* Core Competencies Quick Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['Java 21', 'Spring Boot', 'Spring Data JPA', 'JWT & Security', 'MySQL', 'PostgreSQL', 'Docker', 'REST APIs'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md bg-space-800/80 text-slate-300 border border-white/5 hover:border-electric-500/40 hover:text-electric-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 text-slate-950 font-semibold text-sm hover:bg-electric-400 hover:shadow-electric-md transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-space-800 text-slate-200 border border-white/10 text-sm font-medium hover:border-electric-500/50 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-electric-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.links.resume}
                download="Karanjot_Singh_Java_Backend_Developer_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent text-electric-400 border border-electric-500/30 text-sm font-medium hover:bg-electric-500/10 hover:border-electric-400 transition-all duration-200"
                title="Download verified resume PDF"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="rounded-2xl bg-space-850/90 border border-electric-500/30 p-1 shadow-2xl shadow-black/80 backdrop-blur-xl relative">
                
                {/* Code window title bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-space-900/80 rounded-t-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-electric-400" />
                      OrderController.java
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-electric-500/10 text-electric-300 border border-electric-500/20">
                    Java 21 • Spring Boot 3
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto bg-[#070c18] rounded-b-xl leading-relaxed">
                  <pre>
                    <code>
                      <span className="text-purple-400">@RestController</span>{'\n'}
                      <span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">"/api/v1/orders"</span>){'\n'}
                      <span className="text-purple-400">@RequiredArgsConstructor</span>{'\n'}
                      <span className="text-blue-400">public class</span> <span className="text-yellow-300">OrderController</span> {'{'}{'\n'}
                      {'  '}<span className="text-blue-400">private final</span> <span className="text-yellow-300">OrderService</span> orderService;{'\n\n'}
                      {'  '}<span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">"/checkout"</span>){'\n'}
                      {'  '}<span className="text-purple-400">@Transactional</span>{'\n'}
                      {'  '}<span className="text-blue-400">public</span> ResponseEntity&lt;OrderResponse&gt; process({'\n'}
                      {'      '}<span className="text-purple-400">@AuthenticationPrincipal</span> <span className="text-yellow-300">UserPrincipal</span> user,{'\n'}
                      {'      '}<span className="text-purple-400">@Valid @RequestBody</span> <span className="text-yellow-300">CheckoutRequest</span> req{'\n'}
                      {'  '}) {'{'}{'\n'}
                      {'    '}<span className="text-slate-500">// Atomic transaction & stock validation</span>{'\n'}
                      {'    '}<span className="text-blue-400">var</span> order = orderService.createOrder(user.getId(), req);{'\n'}
                      {'    '}<span className="text-blue-400">return</span> ResponseEntity.status(HttpStatus.CREATED).body(order);{'\n'}
                      {'  '}{'}'}{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>

                {/* Floating Architectural Badge */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-space-800/95 border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-electric-500/10 text-electric-400 border border-electric-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Spring Security + JWT</div>
                    <div className="text-[11px] text-slate-400">Stateless RBAC & Refresh Tokens</div>
                  </div>
                </div>

                {/* Floating Database Badge */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-space-800/95 border border-white/10 p-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="text-white font-medium">ACID Compliant</span>
                    <span className="block text-[10px] text-slate-400">MySQL & Hibernate JPA</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-space-850/40 border border-white/5 hover:border-electric-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-electric-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
