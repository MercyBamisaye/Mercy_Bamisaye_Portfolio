import { useEffect, useState } from 'react'
import { MapPin, Coffee, BookOpen, Zap, Award } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img from '../assets/projects/about.jpg'

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', gradient: 'from-violet-600 to-indigo-600' },
  { value: 20, suffix: '+', label: 'Projects Done', gradient: 'from-pink-600 to-rose-500' },
  { value: 10, suffix: '+', label: 'Happy Clients', gradient: 'from-emerald-600 to-teal-500' },
  { value: 6, suffix: '', label: 'Products Managed', gradient: 'from-amber-500 to-orange-500' },
]

const highlights = [
  { icon: MapPin, text: 'Based in Oyo State, Nigeria', color: 'from-violet-600 to-indigo-600' },
  { icon: Coffee, text: 'Fuelled by curiosity', color: 'from-amber-500 to-orange-500' },
  { icon: BookOpen, text: 'Always learning something new', color: 'from-emerald-500 to-teal-600' },
  { icon: Zap, text: 'Fast, clean, accessible code', color: 'from-pink-500 to-rose-500' },
]

function Counter({ value, suffix, visible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(1500 / value)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [visible, value])
  return <>{count}{suffix}</>
}

export default function About() {
  const [headRef, headVisible] = useScrollReveal()
  const [leftRef, leftVisible] = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()
  const [statsRef, statsVisible] = useScrollReveal()

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-100/60 to-transparent dark:from-violet-900/10 dark:to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/40 to-transparent dark:from-indigo-900/10 dark:to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <div ref={headRef} className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Award size={12} /> About Me
          </div>
          <h2 className="section-heading">Who I Am</h2>
          <div className="gradient-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">

         {/* Avatar */}
<div ref={leftRef} className={`flex justify-center lg:justify-start reveal-left ${leftVisible ? 'visible' : ''}`}>
  <div className="relative">

    {/* Spinning gradient ring */}
    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-600 opacity-20 blur-xl animate-pulse" />
    <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-violet-600 to-indigo-600 opacity-30" />

    {/* IMAGE  */}
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/30 animate-float">
      <img
        src={img}
        alt="About"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Floating badge */}
    <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 border border-violet-200 dark:border-violet-500/30 rounded-2xl px-4 py-3 shadow-xl shadow-violet-500/10 flex flex-col items-center">
      <span className="text-xl sm:text-2xl font-bold gradient-text leading-none">3+</span>
      <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Years of Code</span>
    </div>

    {/* Floating icon top-left */}
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 animate-float animation-delay-2000">
      <Zap size={20} className="text-white" />
    </div>

  </div>
</div>
          

          {/* Bio */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Product Manager &amp; Frontend Developer
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              I&apos;m a passionate frontend developer with over 3 years of experience building modern,
              responsive web applications. I specialize in React and the JavaScript ecosystem,
              with a strong eye for design and user experience.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
              As a product manager, I own products end to end across AI, fintech, legaltech, and
              edtech: market research, requirements, stakeholder alignment, and delivery coordination.
              Because I also write code, I bridge business goals and engineering reality, and I
              believe great products are built where clear strategy meets thoughtful design.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map(({ icon: Icon, text, color }, i) => (
                <li
                  key={text}
                  className={`flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base reveal ${rightVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className={`flex-shrink-0 w-9 h-9 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon size={15} className="text-white" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">Let&apos;s Talk</a>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ value, suffix, label, gradient }, i) => (
            <div
              key={label}
              className={`card text-center reveal ${statsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-1 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                <Counter value={value} suffix={suffix} visible={statsVisible} />
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
