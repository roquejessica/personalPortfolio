import React, { useState, useRef, useEffect, useCallback } from 'react';
import ScatterText from './ScatterText';

/* ─── Project data ─── */
const projects = [
  {
    id: 'proj1',
    title: 'School Management System',
    description: 'A full-stack LAMMS platform for managing grades, schedules, curriculum, and faculty — built with Laravel + React.',
    longDescription:
      'LAMMS (Learner Attendance Monitoring and Management System) is a comprehensive school management platform built for Naawan Central School. It handles grade management, subject scheduling, curriculum tracking, faculty management, homeroom assignments, and detailed attendance analytics. The system was designed to replace manual paper-based processes with a streamlined digital workflow.',
    tags: ['Laravel', 'React', 'MySQL', 'Vite'],
    link: '#',
    github: 'https://github.com/roquejessica',
    featured: true,
    gradient: 'from-purple-500 to-blue-500',
    glow: 'rgba(168,85,247,0.3)',
    icon: '🏫',
    screenshots: [], // Add real paths like ['/screenshots/lamms-1.png'] when available
    placeholderColor: 'from-purple-900/60 to-blue-900/60',
    highlights: ['Role-based access control', 'Real-time grade submission', 'Attendance analytics dashboard', 'Automated report generation'],
  },
  {
    id: 'proj2',
    title: 'Subscription Manager (Subly)',
    description: 'Privacy-first subscription tracker with NLP logging, spending analytics, and a sleek Next.js dashboard.',
    longDescription:
      'Subly is a privacy-first, open-core subscription manager that lets users track recurring expenses conversationally. It features an NLP-powered logging interface ("Add Netflix $15 monthly"), a real-time spending analytics dashboard, automatic renewal reminders, and category breakdowns — all with a focus on privacy and a premium UI.',
    tags: ['Next.js', 'Tailwind', 'Laravel', 'OpenAI'],
    link: '#',
    github: 'https://github.com/roquejessica',
    featured: true,
    gradient: 'from-pink-500 to-orange-500',
    glow: 'rgba(236,72,153,0.3)',
    icon: '💳',
    screenshots: [],
    placeholderColor: 'from-pink-900/60 to-orange-900/60',
    highlights: ['NLP-powered subscription logging', 'Spending analytics & charts', 'Renewal reminders', 'Privacy-first architecture'],
  },
  {
    id: 'proj3',
    title: 'Real-Time Chat App',
    description: 'Discord-like chat platform with voice call support, rooms, and real-time messaging using Pusher and React Native.',
    longDescription:
      'A full-featured real-time communication platform built with React Native and Node.js. Supports multiple rooms, text messaging with Pusher WebSockets, voice call rooms with participant avatars, microphone toggle, and a clean mobile-first UI that mirrors the Discord experience.',
    tags: ['React Native', 'Pusher', 'Node.js', 'Socket.io'],
    link: '#',
    github: 'https://github.com/roquejessica',
    featured: false,
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.3)',
    icon: '💬',
    screenshots: [],
    placeholderColor: 'from-cyan-900/60 to-teal-900/60',
    highlights: ['Real-time messaging via Pusher', 'Voice call rooms', 'Microphone toggle', 'Cross-platform (iOS & Android)'],
  },
  {
    id: 'proj4',
    title: 'Personal Portfolio Website',
    description: 'This very site — a modern, animated portfolio built with React, Tailwind CSS, and EmailJS for contact.',
    longDescription:
      'The portfolio you are currently browsing! Built with React + Vite and Tailwind CSS, it features particle animations, mouse-follow cursor glow, 3D tilt project cards, scroll-triggered skill bar animations, count-up stat counters, a typewriter role rotator, and a functional EmailJS contact form.',
    tags: ['React', 'Tailwind', 'EmailJS', 'Vite'],
    link: '#',
    github: 'https://github.com/roquejessica/personalPortfolio',
    featured: false,
    gradient: 'from-violet-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.3)',
    icon: '🚀',
    screenshots: [],
    placeholderColor: 'from-violet-900/60 to-indigo-900/60',
    highlights: ['Particle canvas background', 'Mouse-follow cursor glow', '3D tilt cards', 'Animated skill bars'],
  },
];

const filters = ['All', 'React', 'Laravel', 'Next.js', 'Node.js'];

/* ─── Placeholder slide ─── */
function PlaceholderSlide({ project, index, total }) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${project.placeholderColor} rounded-xl relative overflow-hidden`}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="relative z-10 text-center px-8">
        <div className="text-6xl mb-4">{project.icon}</div>
        <p className="text-white/70 font-mono text-sm mb-1">Screenshot {index + 1} / {total}</p>
        <p className="text-white/40 text-xs">Coming soon — screenshots will appear here</p>
      </div>
    </div>
  );
}

/* ─── Project Modal ─── */
function ProjectModal({ project, onClose }) {
  const [slide, setSlide] = useState(0);
  const [imgError, setImgError] = useState({});

  // Total slides: real screenshots + at least 3 placeholders if none exist
  const PLACEHOLDER_COUNT = 3;
  const realShots = project.screenshots || [];
  const totalSlides = realShots.length > 0 ? realShots.length : PLACEHOLDER_COUNT;

  const prev = useCallback(() => setSlide((s) => (s - 1 + totalSlides) % totalSlides), [totalSlides]);
  const next = useCallback(() => setSlide((s) => (s + 1) % totalSlides), [totalSlides]);

  // Keyboard nav + close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const isRealShot = realShots.length > 0 && !imgError[slide];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl shadow-lg`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <div className="flex gap-2 flex-wrap mt-1">
                {project.tags.map((t) => (
                  <span key={t} className="tag text-[10px] py-0.5 px-2">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div className="relative bg-black/40 h-56 md:h-72 flex-shrink-0">
          {isRealShot ? (
            <img
              src={realShots[slide]}
              alt={`${project.title} screenshot ${slide + 1}`}
              className="w-full h-full object-cover"
              onError={() => setImgError((prev) => ({ ...prev, [slide]: true }))}
            />
          ) : (
            <PlaceholderSlide project={project} index={slide} total={totalSlides} />
          )}

          {/* Prev / Next */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === slide
                    ? 'w-5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-white/60 text-xs font-mono">
            {slide + 1} / {totalSlides}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.longDescription}</p>

          {/* Highlights */}
          <div className="mb-5">
            <p className="text-xs text-slate-500 font-mono mb-3">// key features</p>
            <div className="grid grid-cols-2 gap-2">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-slate-300 hover:text-white transition-all border border-white/10 hover:border-white/20 font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View Code
            </a>
            <a
              href={project.link}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 text-sm text-purple-300 hover:text-white transition-all border border-purple-500/20 hover:border-purple-500/50 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3D tilt card ─── */
function TiltCard({ children, glow }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -7;
    const rotateY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    card.style.boxShadow = `0 25px 60px ${glow}`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.boxShadow = 'none';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.3s ease', height: '100%' }}
    >
      {children}
    </div>
  );
}

/* ─── Project card (clickable) ─── */
function ProjectCard({ project, onOpen }) {
  const realShots = project.screenshots || [];
  const previewSrc = realShots[0] || null;
  const [previewError, setPreviewError] = useState(false);

  return (
    <TiltCard glow={project.glow}>
      <div
        id={project.id}
        onClick={() => onOpen(project)}
        className="reveal group bg-glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 h-full cursor-pointer"
      >
        {/* Screenshot thumbnail / placeholder */}
        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.placeholderColor}`}>
          {previewSrc && !previewError ? (
            <img
              src={previewSrc}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setPreviewError(true)}
            />
          ) : (
            <>
              {/* Placeholder with grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                <span className="text-white/30 text-xs font-mono">Click to preview</span>
              </div>
            </>
          )}

          {/* Overlay hint on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              View Screenshots
            </div>
          </div>

          {/* Top gradient bar */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />
        </div>

        <div className="p-5">
          {/* Icon + featured badge */}
          <div className="flex items-start justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {project.icon}
            </div>
            {project.featured && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold">
                ✦ Featured
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-rose-300 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="tag text-[10px] py-0.5">{t}</span>
            ))}
          </div>

          {/* Links row */}
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-all border border-white/10 hover:border-white/20 font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Code
            </a>
            <a
              href={project.link}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 text-xs text-purple-300 hover:text-white transition-all border border-purple-500/20 hover:border-purple-500/50 font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

/* ─── Main section ─── */
export default function Projects() {
  const [active, setActive] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === active));

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">// my work</p>
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <ScatterText
              tag="h2"
              className="text-4xl md:text-5xl font-black mb-4"
              segments={[
                { text: 'Featured ' },
                { text: 'Projects', className: 'text-rose-400' },
              ]}
            />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Click any card to explore screenshots, features, and details.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === f
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-glass text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/30 hover:scale-105'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setOpenProject} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}
