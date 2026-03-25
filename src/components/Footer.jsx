import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                &lt;/&gt;
              </div>
              <span className="font-bold text-white text-lg">Dev<span className="text-gradient">Port</span></span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {['home', 'about', 'projects', 'publications', 'skills', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-slate-500 hover:text-purple-400 text-sm transition-colors capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/yourusername', id: 'footer-github' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', id: 'footer-linkedin' },
                { label: 'Discord', href: 'https://discord.com/users/yourid', id: 'footer-discord' },
                { label: 'Twitter', href: 'https://twitter.com/yourhandle', id: 'footer-twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-purple-500/20 text-xs transition-all duration-200 border border-white/10 hover:border-purple-500/30"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {year} Jessica Roque. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            React + Tailwind CSS + EmailJS
          </p>
        </div>
      </div>
    </footer>
  );
}
