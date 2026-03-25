import React from 'react';

const socials = [
  {
    id: 'github-link',
    name: 'GitHub',
    handle: '@roquejessica',
    desc: 'Check out my code & open source contributions',
    href: 'https://github.com/roquejessica',
    gradient: 'from-slate-600 to-slate-800',
    hoverGlow: 'hover:shadow-slate-500/25',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 'linkedin-link',
    name: 'LinkedIn',
    handle: 'Jessica Roque',
    desc: 'Connect with me professionally',
    href: 'https://www.linkedin.com/in/jessica-roque-aaa0b3151',
    gradient: 'from-blue-600 to-blue-800',
    hoverGlow: 'hover:shadow-blue-500/25',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'discord-link',
    name: 'Discord',
    handle: 'essie.queue',
    desc: 'Reach me on Discord for quick chats',
    href: 'https://discord.com/users/essie.queue',
    gradient: 'from-indigo-500 to-purple-700',
    hoverGlow: 'hover:shadow-indigo-500/25',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    id: 'twitter-link',
    name: 'Twitter / X',
    handle: '@Dyeseekaaa',
    desc: 'Tech thoughts, dev tips & memes',
    href: 'https://twitter.com/yourhandle',
    gradient: 'from-sky-500 to-blue-600',
    hoverGlow: 'hover:shadow-sky-500/25',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'facebook-link',
    name: 'Facebook',
    handle: 'Jessica Roque',
    desc: 'Follow my updates and projects',
    href: 'https://www.facebook.com/jessica.roque.5249',
    gradient: 'from-blue-700 to-blue-900',
    hoverGlow: 'hover:shadow-blue-700/25',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: 'email-social-link',
    name: 'Email',
    handle: 'jessicaroque.ph@gmail.com',
    desc: 'Best way to reach me for work',
    href: 'mailto:[EMAIL_ADDRESS]',
    gradient: 'from-rose-500 to-pink-700',
    hoverGlow: 'hover:shadow-rose-500/25',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <section id="socials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="text-purple-400 font-mono text-sm mb-3">// let's connect</p>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Find Me <span className="text-gradient">Online</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            Reach out on any platform — I'm always happy to connect, collaborate, or just chat tech!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socials.map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group bg-glass rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${social.hoverGlow} flex flex-col gap-3`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {social.icon}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{social.name}</p>
                <p className="text-purple-300 text-xs font-mono mt-0.5">{social.handle}</p>
                <p className="text-slate-500 text-xs mt-1 leading-tight">{social.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-purple-400 transition-colors mt-auto">
                <span>Visit</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
