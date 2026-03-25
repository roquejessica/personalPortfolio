import React from 'react';

const publications = [
  {
    id: 'pub3',
    title: 'LAMMS: A Laravel-Powered Academic Management System for Local Schools',
    authors: 'Cris John Cañales, Angelow B. Larot, Jessica S. Roque, Lilibeth P. Coronel, Jehanie May A. Macasawang, Cris Niel Anthonny M. Gulfan, Trexia Alex Go, Rafael J. Vicente',
    venue: 'American Journal of  Interdisciplinary Research and Innovation (AJIRI',
    year: '2026',
    abstract: 'Documents the development and deployment of LAMMS, a school management system used by local institutions, covering curriculum management, grade tracking, and homeroom scheduling.',
    tags: ['Laravel', 'EdTech', 'Web Systems'],
    doi: '10.54536/ajiri.v5i1.7077',
    type: 'Research Paper',
    gradient: 'from-cyan-500 to-teal-500',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">// academic work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            My academic contributions — spanning research papers, theses, and symposium presentations.
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          {publications.map((pub, i) => (
            <PubCard key={pub.id} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PubCard({ pub, index }) {
  return (
    <div
      id={pub.id}
      className="reveal group bg-glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Number */}
        <div className={`hidden md:flex flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${pub.gradient} items-center justify-center text-white font-black text-xl shadow-lg`}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${pub.gradient} text-white font-medium`}>
              {pub.type}
            </span>
            <span className="text-xs text-slate-500 font-mono">{pub.year}</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300 leading-snug">
            {pub.title}
          </h3>
          <p className="text-sm text-purple-300 font-medium mb-1">{pub.authors}</p>
          <p className="text-xs text-slate-500 italic mb-4">{pub.venue}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{pub.abstract}</p>

          <div className="flex flex-wrap items-center gap-3">
            {pub.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
            <a
              href={pub.doi}
              className="ml-auto flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
