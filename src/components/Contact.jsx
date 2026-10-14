import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  FileDown, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { contactData, personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic client-side submission without exposing third-party API keys
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {contactData.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            {contactData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl bg-space-850/90 border border-white/10 hover:border-electric-500/40 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-electric-400 hover:text-electric-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              
              <a
                href={`mailto:${contactData.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-electric-300 transition-colors break-all"
              >
                {contactData.email}
              </a>
              
              <p className="text-xs text-slate-400 mt-2">
                Click to send an email, or use the quick copy action above.
              </p>
            </div>

            {/* Social & Professional Profile Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-space-850/80 border border-white/5 hover:border-blue-500/50 hover:bg-space-800 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    Connect <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-space-850/80 border border-white/5 hover:border-slate-400/50 hover:bg-space-800 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-slate-700/30 text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-slate-200">
                    GitHub
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    Codebase <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>
            </div>

            {/* Quick Details Box */}
            <div className="p-5 rounded-2xl bg-space-900 border border-white/5 space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0" />
                <span>{contactData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-electric-400 shrink-0" />
                <span>{personalInfo.availability}</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px]">Resume Ready:</span>
                <a
                  href={contactData.resumePath}
                  download="Karanjot_Singh_Java_Backend_Developer_Resume.pdf"
                  className="text-electric-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download .pdf</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-space-850/80 border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an opening for a Java Backend Developer or want to discuss a project? Drop your message below.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-space-900 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I typically respond within 24 hours. You can also reach me directly at <code className="text-electric-300">{contactData.email}</code>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-space-800 text-xs font-mono text-slate-200 border border-white/10 hover:border-white/30"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl bg-space-900 text-slate-100 text-sm border focus:outline-none transition-all ${
                          errors.name 
                            ? 'border-rose-500 focus:border-rose-400' 
                            : 'border-white/10 focus:border-electric-400 focus:shadow-electric-sm'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-space-900 text-slate-100 text-sm border focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-rose-500 focus:border-rose-400' 
                            : 'border-white/10 focus:border-electric-400 focus:shadow-electric-sm'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Java Backend Developer Opportunity / Interview"
                      className={`w-full px-4 py-2.5 rounded-xl bg-space-900 text-slate-100 text-sm border focus:outline-none transition-all ${
                        errors.subject 
                          ? 'border-rose-500 focus:border-rose-400' 
                          : 'border-white/10 focus:border-electric-400 focus:shadow-electric-sm'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding the role, requirements, or tech stack..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-space-900 text-slate-100 text-sm border focus:outline-none transition-all resize-y ${
                        errors.message 
                          ? 'border-rose-500 focus:border-rose-400' 
                          : 'border-white/10 focus:border-electric-400 focus:shadow-electric-sm'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-electric-500 text-slate-950 font-semibold text-sm hover:bg-electric-400 hover:shadow-electric-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Validating & Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
