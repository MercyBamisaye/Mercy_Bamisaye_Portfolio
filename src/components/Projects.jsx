import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A full-featured admin dashboard for managing products, orders, and analytics. Built with React, TypeScript, and Recharts for data visualization.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: null,
    live: 'https://example.com',
    gradient: 'from-violet-600 to-indigo-600',
    emoji: '🛒',
  },
  {
    title: 'Weather App',
    description:
      'Real-time weather application with beautiful UI, 7-day forecast, location search, and animated weather conditions using the OpenWeather API.',
    tags: ['React', 'REST API', 'CSS Animations', 'Geolocation'],
    github: null,
    live: 'https://example.com',
    gradient: 'from-cyan-600 to-blue-600',
    emoji: '🌤️',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style task manager with drag-and-drop, team collaboration, due dates, and priority levels. State managed with Redux Toolkit.',
    tags: ['React', 'Redux Toolkit', 'DnD Kit', 'Tailwind CSS'],
    github: null,
    live: 'https://example.com',
    gradient: 'from-emerald-600 to-teal-600',
    emoji: '✅',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio — built from scratch with React and Tailwind CSS, featuring smooth animations, a typing effect, and fully responsive design.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    github: 'https://github.com/MercyBamisaye',
    live: 'https://example.com',
    gradient: 'from-pink-600 to-rose-600',
    emoji: '🚀',
  },
  {
    title: 'Blog Platform',
    description:
      'A Next.js blog platform with MDX support, dark mode, tag filtering, search functionality, and SEO-optimized static generation.',
    tags: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'],
    github: null,
    live: 'https://example.com',
    gradient: 'from-amber-600 to-orange-600',
    emoji: '📝',
  },
  {
    title: 'Movie Discovery App',
    description:
      'Browse and discover movies using the TMDB API. Features infinite scroll, genre filters, watchlist with local storage persistence, and trailer previews.',
    tags: ['React', 'TMDB API', 'React Query', 'Framer Motion'],
    github: null,
    live: 'https://example.com',
    gradient: 'from-red-600 to-pink-600',
    emoji: '🎬',
  },
]

function ProjectCard({ title, description, tags, github, live, gradient, emoji, visible, delay }) {
  return (
    <article
      className={`card group flex flex-col reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`h-36 sm:h-40 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl sm:text-6xl mb-5 shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}>
        {emoji}
      </div>
      <h3 className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-violet-50 dark:bg-slate-800 text-violet-600 dark:text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
        >
          <ExternalLink size={15} /> Live Demo
        </a>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-slate-500 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white text-sm font-medium px-4 rounded-xl transition-all duration-200"
          >
            <GithubIcon size={15} /> Code
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [headRef, headVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div ref={headRef} className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}>
          <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              visible={gridVisible}
              delay={i * 80}
            />
          ))}
        </div>

        <div className={`text-center mt-10 sm:mt-12 reveal ${gridVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <a href="https://github.com/MercyBamisaye" target="_blank" rel="noreferrer" className="btn-outline">
            <GithubIcon size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
