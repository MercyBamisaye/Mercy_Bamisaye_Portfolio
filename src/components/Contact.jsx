import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/MercyBamisaye', label: 'GitHub', username: 'github.com/MercyBamisaye', gradient: 'from-slate-600 to-slate-800' },
  { icon: LinkedinIcon, href: 'http://linkedin.com/in/mercybamisaye', label: 'LinkedIn', username: 'linkedin.com/in/mercybamisaye', gradient: 'from-blue-600 to-blue-800' },
  { icon: TwitterIcon, href: 'https://x.com/mercy_bamisaye', label: 'Twitter / X', username: '@mercy_bamisaye', gradient: 'from-sky-500 to-blue-600' },
  { icon: Mail, href: 'mailto:bamisayeiseoluwa@gmail.com', label: 'Email', username: 'bamisayeiseoluwa@gmail.com', gradient: 'from-violet-600 to-indigo-600' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [headRef, headVisible] = useScrollReveal()
  const [leftRef, leftVisible] = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      {/* Gradient blobs — no overflow-hidden so reveal-right isn't clipped */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/8 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div ref={headRef} className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Sparkles size={12} /> Say Hello
          </div>
          <h2 className="section-heading">Let&apos;s Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 rounded-full mx-auto mt-3" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mt-4">
            Have a project in mind or want to discuss an opportunity? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Info — slide from left */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            <h3 className="text-slate-900 dark:text-white font-bold text-xl sm:text-2xl mb-3">Get In Touch</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
              Whether you&apos;re looking for a frontend developer, need a freelance project delivered,
              or just want to connect — I&apos;d love to hear from you.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20">
                <MapPin size={15} className="text-white" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">Ado Ekiti, Nigeria</span>
            </div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">Available for freelance &amp; full-time roles</span>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label, username, gradient }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 group p-3 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-500/40 hover:bg-violet-50/50 dark:hover:bg-violet-500/5 transition-all duration-200 reveal ${leftVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {label}
                    </div>
                    <div className="text-slate-400 dark:text-slate-500 text-xs truncate max-w-[200px]">{username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form — wrapper handles the reveal so card class isn't conflicted */}
          <div ref={rightRef} className={`reveal ${rightVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="relative">
              {/* Gradient border glow behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600/30 via-purple-500/20 to-indigo-600/30 rounded-[1.25rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-violet-500/5">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30 animate-bounce">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-2">Message Sent!</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-violet-600 dark:text-violet-400 hover:text-violet-500 text-sm font-medium underline underline-offset-2">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { name: 'name', label: 'Name', type: 'text', placeholder: 'Mercy Bamisaye' },
                        { name: 'email', label: 'Email', type: 'email', placeholder: 'mercy@email.com' },
                      ].map(({ name, label, type, placeholder }) => (
                        <div key={name}>
                          <label className="block text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">{label}</label>
                          <input
                            name={name}
                            type={type}
                            value={form[name]}
                            onChange={handleChange}
                            required
                            placeholder={placeholder}
                            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-500/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">Subject</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project collaboration"
                        className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-500/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-500/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 py-3.5"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
