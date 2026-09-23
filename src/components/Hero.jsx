import { useEffect, useState } from 'react'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

const roles = ['Product Manager', 'Frontend Developer', 'React Specialist', 'Builder of Useful Products']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24">

      {/* Layered animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-blob absolute -top-20 -left-20 w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-600/15 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-400/20 dark:bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-6000 absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-pink-400/10 dark:bg-pink-600/8 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.8) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-violet-500/8 rounded-full pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-indigo-500/6 rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center w-full z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-600/10 dark:to-indigo-600/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in shadow-sm">
          <Sparkles size={13} className="animate-pulse" />
          Available for opportunities
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
          Hi, I&apos;m{' '}
          <span className="gradient-text-animated">Mercy Bamisaye</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-7 h-9 sm:h-11 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <span className="gradient-text">{displayed}</span>
          <span className="animate-blink text-violet-500">|</span>
        </div>

        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up px-2" style={{ animationDelay: '0.25s' }}>
          I manage products from idea to delivery and build the interfaces people use. Product
          thinking and hands-on frontend skills, so what gets planned is what gets shipped.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <a href="#product" className="btn-primary text-sm sm:text-base">
            View My Work <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-outline text-sm sm:text-base">Get In Touch</a>
          <a
  href="/Mercy_Bamisaye_CV.pdf"
  download="Mercy_Bamisaye_Product_Manager_Frontend_Developer_CV.pdf"
  className="btn-outline text-sm sm:text-base"
>
  <Download size={15} /> Resume
</a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          {[
            { icon: GithubIcon, href: 'https://github.com/MercyBamisaye', label: 'GitHub', color: 'hover:bg-slate-100 dark:hover:bg-slate-800' },
            { icon: LinkedinIcon, href: 'http://linkedin.com/in/mercybamisaye', label: 'LinkedIn', color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
            { icon: TwitterIcon, href: 'https://x.com/mercy_bamisaye?s=21', label: 'Twitter / X', color: 'hover:bg-sky-50 dark:hover:bg-sky-900/20' },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 dark:hover:border-violet-500 ${color} transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-violet-500/20`}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

      </div>

      <a href="#about" className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors animate-bounce z-10" aria-label="Scroll down">
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
