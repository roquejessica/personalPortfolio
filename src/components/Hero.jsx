import React, { useEffect, useState } from 'react';

const roles = ['IT Student', 'Web Developer', 'Tech Enthusiast', 'Problem Solver', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const role = roles[roleIndex];

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for internships &amp; collaborations
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          Hi, I'm{' '}
          <span className="text-gradient">Jessica Roque</span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center gap-0">
          <span className="font-mono text-purple-300">&lt;</span>
          <span className="text-white mx-1 min-w-[12ch] text-left">{displayed}</span>
          <span className="cursor" />
          <span className="font-mono text-purple-300">/&gt;</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Passionate IT student building elegant digital experiences.
          I turn complex problems into clean, modern solutions — one commit at a time.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Publications', value: '3+' },
            { label: 'GitHub Stars', value: '50+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-glass rounded-xl p-4 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-600 text-xs animate-float">
          <span>Scroll down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
