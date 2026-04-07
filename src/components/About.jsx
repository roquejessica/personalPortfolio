import React from 'react';
import RotatingCube from './RotatingCube';
import ScatterText from './ScatterText';

const details = [
  { label: 'Name', value: 'Jessica Roque' },
  { label: 'Focus', value: 'Web & Software Dev' },
  { label: 'Location', value: 'Philippines 🇵🇭' },
  { label: 'Status', value: 'Open to Opportunities' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Cube side */}
          <div className="reveal flex justify-center">
            <div className="relative flex items-center justify-center">

              {/* Ambient glow behind cube */}
              <div className="absolute w-72 h-72 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
              <div className="absolute w-56 h-56 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" style={{ transform: 'translate(30px, 20px)' }} />

              {/* The rotating cube */}
              <RotatingCube imageSrc="/images/myID.png" size={300} />

              {/* Floating chips */}
              <div className="float-badge absolute -top-4 -right-2 bg-glass px-3 py-2 rounded-xl text-xs font-mono text-rose-300 border border-rose-500/20 shadow-lg shadow-rose-900/20 whitespace-nowrap z-10">
                👩‍💻 IT Professional
              </div>
              <div className="float-badge-2 absolute -bottom-4 -left-2 bg-glass px-3 py-2 rounded-xl text-xs font-mono text-teal-300 border border-teal-500/20 shadow-lg shadow-teal-900/20 whitespace-nowrap z-10">
                🚀 Always Learning
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal">
            <p className="text-rose-400 font-mono text-sm mb-3">// about me</p>
            <div className="section-divider mb-0" style={{ margin: '0 0 1rem 0' }} />
            <ScatterText
              tag="h2"
              className="text-4xl md:text-5xl font-black mb-6"
              segments={[
                { text: 'Who Am ' },
                { text: 'I?', className: 'text-rose-400' },
              ]}
            />
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a passionate tech professional with a strong focus on web development, software
              engineering, and emerging technologies. I thrive on transforming complex problems into
              clean, scalable solutions — from polished frontends to robust backends.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Beyond building software, I invest in research and knowledge-sharing — including a
              published study on learner management systems. I believe great software comes from
              curiosity, craft, and the drive to keep improving.
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3 mb-8 reveal-stagger">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="bg-glass rounded-xl p-3.5 border border-white/5 hover:border-rose-500/20 hover:bg-rose-500/5 transition-all duration-300 group cursor-default"
                >
                  <p className="text-xs text-slate-500 mb-0.5 font-mono">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                id="about-linkedin"
                href="https://www.linkedin.com/in/jessica-roque-aaa0b3151"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                id="about-github"
                href="https://github.com/roquejessica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                id="about-publication"
                href="https://www.researchgate.net/publication/401703874_LAMMS_A_Learner's_Attendance_Monitoring_and_Management_System_for_Naawan_Central_School_Misamis_Oriental_Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Publication</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
