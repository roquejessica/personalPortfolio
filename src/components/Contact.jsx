import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_2n9nox5';
const EMAILJS_TEMPLATE_ID = 'template_xf00rzq';
const EMAILJS_PUBLIC_KEY = 'gO_PSJWfYk2bq4Fm4';

function Toast({ message, type, visible }) {
  return (
    <div className={`toast ${type} ${visible ? 'show' : ''}`}>
      <div className="flex items-center gap-2">
        {type === 'success' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        {message}
      </div>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        showToast('✅ Message sent! I\'ll reply soon.', 'success');
        formRef.current.reset();
      })
      .catch(() => {
        showToast('❌ Failed to send. Try emailing me directly.', 'error');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">// get in touch</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Send Me a <span className="text-gradient">Message</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project idea, want to collaborate, or just want to say hi?
            Fill out the form below and it lands directly in my inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <div className="reveal flex flex-col gap-6">
            <div className="bg-glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">Let's work together</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I'm open to freelance projects, internship opportunities, research collaborations,
                and long-term partnerships. Don't hesitate to reach out!
              </p>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'jessicaroque.ph@gmail.com',
                  href: 'mailto:[EMAIL_ADDRESS]',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Philippines 🇵🇭',
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Response time',
                  value: 'Usually within 24 hours',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 mb-4 last:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-slate-200 hover:text-purple-300 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for work</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Currently open to internships, freelance gigs, and exciting project collaborations. Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="reveal">
            <form
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-glass rounded-2xl p-8 border border-white/5 flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-2" htmlFor="user_name">Your Name</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Lin Manuel-Miranda"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2" htmlFor="user_email">Your Email</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="linmanuelmiranda@gmail.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Collaboration / Internship / etc."
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-btn"
                disabled={loading}
                className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-600">
                Powered by EmailJS • Your message goes straight to my inbox
              </p>
            </form>
          </div>
        </div>
      </div>

      <Toast message={toast.message} type={toast.type} visible={toast.visible} />
    </section>
  );
}
