import React, { useEffect, useRef, useState } from 'react';
import ScatterText from './ScatterText';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    gradient: 'from-rose-500 to-pink-500',
    bar: 'linear-gradient(90deg, #f43f5e, #ec4899)',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    gradient: 'from-teal-500 to-cyan-500',
    bar: 'linear-gradient(90deg, #0d9488, #06b6d4)',
    skills: [
      { name: 'Laravel / PHP', level: 80 },
      { name: 'Node.js', level: 65 },
      { name: 'REST API Design', level: 78 },
      { name: 'MySQL / PostgreSQL', level: 75 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    category: 'Dev Tools & Others',
    icon: '🛠️',
    gradient: 'from-amber-500 to-orange-500',
    bar: 'linear-gradient(90deg, #f59e0b, #f97316)',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vite / Webpack', level: 72 },
      { name: 'Docker (basic)', level: 55 },
      { name: 'Linux / WSL', level: 65 },
      { name: 'Figma (UI Design)', level: 70 },
    ],
  },
];

const tools = [
  'VS Code', 'Postman', 'TablePlus', 'GitHub Copilot',
  'Notion', 'Vercel', 'XAMPP', 'Insomnia', 'Figma', 'Warp',
];

function SkillGroup({ group }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal bg-glass rounded-2xl p-6 border border-white/5 hover:border-rose-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-900/10 group"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {group.icon}
        </div>
        <h3 className="font-bold text-white text-lg">{group.category}</h3>
      </div>

      <div className="flex flex-col gap-5">
        {group.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 font-medium">{skill.name}</span>
              <span className="text-slate-500 font-mono text-xs">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{
                  background: group.bar,
                  width: animated ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-rose-400 font-mono text-sm mb-3">// tech stack</p>
          <div className="section-divider" />
          <ScatterText
            tag="h2"
            className="text-4xl md:text-5xl font-black mb-4"
            segments={[
              { text: 'Skills & ' },
              { text: 'Technologies', className: 'text-rose-400' },
            ]}
          />
          <p className="text-slate-400 max-w-xl mx-auto">
            My toolkit — constantly evolving as I learn and build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>

        <div className="reveal bg-glass rounded-2xl p-8 border border-white/5">
          <p className="text-xs text-slate-500 font-mono mb-6 text-center">// other tools i use daily</p>
          <div className="flex flex-wrap gap-3 justify-center reveal-stagger">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm border border-white/8 hover:border-rose-500/35 hover:text-white hover:bg-rose-500/8 hover:-translate-y-1 hover:shadow-md hover:shadow-rose-900/15 transition-all duration-200 cursor-default font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
