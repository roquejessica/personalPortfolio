import React, { useEffect, useState, useRef } from 'react';

const roles = [
  'Full-Stack Developer',
  'Web Developer',
  'IT Professional',
  'UI/UX Enthusiast',
  'Open Source Contributor',
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  // Typewriter
  useEffect(() => {
    let timeout;
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Trigger counters when stats come into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(10, 1500, countersStarted);
  const publications = useCountUp(3, 1500, countersStarted);
  const stars = useCountUp(50, 1800, countersStarted);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background blobs — bigger & animated */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-purple-500/25 text-purple-300 text-sm font-medium mb-8 shimmer">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for internships &amp; collaborations
          <span className="ml-1 text-green-400">✦</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
          Hi, I'm{' '}
          <span className="text-gradient">Jessica Roque</span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-12 flex items-center justify-center">
          <span className="font-mono text-purple-400 mr-1">&lt;</span>
          <span className="text-white min-w-[16ch] text-left font-mono">{displayed}</span>
          <span className="cursor" />
          <span className="font-mono text-purple-400 ml-1">/&gt;</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate IT professional building elegant digital experiences.
          I turn complex problems into clean, modern solutions — one commit at a time.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary text-base px-8 py-3"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline text-base px-8 py-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Say Hello</span>
          </a>
        </div>

        {/* Stats counters */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-16">
          {[
            { label: 'Projects', value: projects, suffix: '+' },
            { label: 'Publications', value: publications, suffix: '+' },
            { label: 'GitHub Stars', value: stars, suffix: '+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-glass rounded-2xl p-4 text-center border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30 cursor-default"
            >
              <div className="text-2xl font-black text-gradient">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-slate-600 text-xs animate-float">
          <span className="text-slate-500 tracking-widest text-[10px] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-purple-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
