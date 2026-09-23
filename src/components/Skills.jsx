import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Product Management',
    icon: '🧭',
    gradient: 'from-pink-600 to-rose-600',
    skills: [
      { name: 'Requirements & PRDs', level: 90, color: 'from-pink-500 to-rose-500' },
      { name: 'Market & User Research', level: 85, color: 'from-amber-500 to-orange-500' },
      { name: 'Backlog & Roadmapping', level: 85, color: 'from-violet-600 to-indigo-600' },
      { name: 'Stakeholder Management', level: 88, color: 'from-emerald-500 to-teal-500' },
    ],
  },
  {
    category: 'Languages',
    icon: '🌐',
    gradient: 'from-violet-600 to-indigo-600',
    skills: [
      { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', level: 92, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-amber-500' },
      { name: 'TypeScript', level: 82, color: 'from-blue-600 to-cyan-500' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    gradient: 'from-cyan-600 to-blue-600',
    skills: [
      { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', level: 80, color: 'from-slate-600 to-slate-800' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-cyan-500' },
      { name: 'Framer Motion', level: 75, color: 'from-pink-500 to-rose-500' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '🔧',
    gradient: 'from-emerald-600 to-teal-600',
    skills: [
      { name: 'Git / GitHub', level: 88, color: 'from-slate-700 to-slate-900' },
      { name: 'Figma', level: 78, color: 'from-purple-500 to-pink-500' },
      { name: 'REST APIs', level: 85, color: 'from-green-500 to-emerald-500' },
      { name: 'Vite / Webpack', level: 80, color: 'from-violet-600 to-indigo-600' },
    ],
  },
]

const techBadges = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3',
  'Node.js', 'Git', 'GitHub', 'Figma', 'REST API', 'Vite', 'Redux', 'React Query',
  'Framer Motion', 'Responsive Design', 'Web Accessibility',
  'Agile / Scrum', 'Product Evaluation', 'Delivery Coordination', 'User Testing',
]

function SkillBar({ name, level, color, visible, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{name}</span>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [headRef, headVisible] = useScrollReveal()
  const [cardsRef, cardsVisible] = useScrollReveal()
  const [badgesRef, badgesVisible] = useScrollReveal()

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/20 dark:from-slate-900/40 dark:via-violet-950/20 dark:to-indigo-950/10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-400/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        <div ref={headRef} className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            🛠️ My Stack
          </div>
          <h2 className="section-heading">What I Work With</h2>
          <div className="gradient-divider" />
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {skillGroups.map(({ category, icon, gradient, skills }, gi) => (
            <div
              key={category}
              className={`card reveal ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${gi * 120}ms` }}
            >
              {/* Card header with gradient */}
              <div className={`flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-lg shadow-md`}>
                  {icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base">{category}</h3>
              </div>
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  visible={cardsVisible}
                  delay={gi * 120 + si * 100 + 200}
                />
              ))}
            </div>
          ))}
        </div>

        <div ref={badgesRef} className={`text-center reveal ${badgesVisible ? 'visible' : ''}`}>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className={`bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700
                  hover:border-violet-400 dark:hover:border-violet-500/60
                  hover:bg-gradient-to-r hover:from-violet-50 hover:to-indigo-50
                  dark:hover:bg-violet-500/10
                  text-slate-600 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300
                  text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full
                  transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:shadow-sm
                  reveal ${badgesVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
