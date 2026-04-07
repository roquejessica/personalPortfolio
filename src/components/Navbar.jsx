import React, { useState, useEffect } from 'react';

const navLinks = ['Home', 'About', 'Projects', 'Publications', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track which section is in view
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-glass shadow-2xl shadow-purple-900/10 py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none' }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
            &lt;/&gt;
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Jessica<span className="text-gradient">Roque</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          className="hidden md:flex btn-primary text-sm py-2 px-5"
        >
          <span>Hire Me</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backdropFilter: 'blur(24px)' }}
      >
        <div className="bg-glass border-t border-white/5 px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`nav-link text-base ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-5 border-t border-white/5">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="btn-primary w-full justify-center"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
