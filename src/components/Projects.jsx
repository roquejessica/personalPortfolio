import React, { useState } from 'react';

const projects = [
  {
    id: 'proj1',
    title: 'School Management System',
    description: 'A full-stack LAMMS platform for managing grades, schedules, curriculum, and faculty — built with Laravel + React.',
    tags: ['Laravel', 'React', 'MySQL', 'Vite'],
    link: '#',
    github: '#',
    featured: true,
    gradient: 'from-purple-500 to-blue-500',
    icon: '🏫',
  },
  {
    id: 'proj2',
    title: 'Subscription Manager (Subly)',
    description: 'Privacy-first subscription tracker with NLP logging, spending analytics, and a sleek Next.js dashboard.',
    tags: ['Next.js', 'Tailwind', 'Laravel', 'OpenAI'],
    link: '#',
    github: '#',
    featured: true,
    gradient: 'from-pink-500 to-orange-500',
    icon: '💳',
  },
  {
    id: 'proj3',
    title: 'Real-Time Chat App',
    description: 'Discord-like chat platform with voice call support, rooms, and real-time messaging using Pusher and React Native.',
    tags: ['React Native', 'Pusher', 'Node.js', 'Socket.io'],
    link: '#',
    github: '#',
    featured: false,
    gradient: 'from-cyan-500 to-teal-500',
    icon: '💬',
  },
  {
    id: 'proj4',
    title: 'Personal Portfolio Website',
    description: 'This very site — a modern, animated portfolio built with React, Tailwind CSS, and EmailJS for contact.',
    tags: ['React', 'Tailwind', 'EmailJS', 'Vite'],
    link: '#',
    github: '#',
    featured: false,
    gradient: 'from-violet-500 to-indigo-500',
    icon: '🚀',
  },
];

const filters = ['All', 'React', 'Laravel', 'Next.js', 'Node.js'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === active));

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">// my work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collection of things I've built — from class projects to personal experiments.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === f
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-glass text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/30'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      id={project.id}
      className="reveal group bg-glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/30"
    >
      {/* Top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6">
        {/* Icon + title */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
            {project.icon}
          </div>
          {project.featured && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-slate-300 hover:text-white transition-all duration-200 border border-white/10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Code
          </a>
          <a
            href={project.link}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 text-sm text-purple-300 hover:text-white transition-all duration-200 border border-purple-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
