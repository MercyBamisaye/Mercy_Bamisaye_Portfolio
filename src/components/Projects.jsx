import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useScrollReveal } from '../hooks/useScrollReveal'

import dimpifiedImg from '../assets/projects/dimpified.jpeg'
import remsanaImg from '../assets/projects/remsana.jpeg'
import unleashifiedImg from '../assets/projects/unleashified.jpeg'
import adminImg from '../assets/projects/admin.dimpified.jpeg'
import bycImg from '../assets/projects/byc.jpeg'
import honsurgImg from '../assets/projects/honsurg.jpeg'

const projects = [
  {
    title: 'Dimpified Platform',
    description:
      'A no.1 booking solution for service-based businesses. Enables professionals to accept bookings, manage schedules, and receive payments seamlessly while growing their business online.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    github: null,
    live: 'https://dimpified.com/',
    gradient: 'from-violet-600 to-indigo-600',
    image: dimpifiedImg,
  },
  {
    title: 'Dimpified Admin Dashboard',
    description:
      'Internal admin system for managing the Dimpified ecosystem, including users, bookings, platform performance, and operational controls for the entire application.',
    tags: ['React', 'Redux Toolkit', 'Dashboard UI', 'System Design'],
    github: null,
    live: 'https://admin.dimpified.com/',
    gradient: 'from-slate-700 to-indigo-600',
    image: adminImg,
  },
  {
    title: 'Remsana Platform',
    description:
      'A complete business-building ecosystem for African SMEs — from business registration to banking access, credit support, and expert growth guidance, all in one place.',
    tags: ['React', 'Product UI', 'API Integration', 'UX Design'],
    github: null,
    live: 'https://remsana.com/',
    gradient: 'from-emerald-600 to-teal-600',
    image: remsanaImg,
  },
  {
    title: 'Unleashified Platform',
    description:
      'A digital transformation platform helping startups and SMEs automate operations, manage workflows, and scale using structured digital products tailored for African businesses.',
    tags: ['React', 'Frontend Architecture', 'API Integration'],
    github: null,
    live: 'https://unleashified.com/',
    gradient: 'from-pink-600 to-rose-600',
    image: unleashifiedImg,
  },
  {
    title: 'Believers Youth Convention',
    description:
      'Event website for a youth convention featuring schedules, announcements, media updates, and registration flow for attendees and organizers.',
    tags: ['React', 'Responsive Design', 'UI/UX'],
    github: null,
    live: 'https://believersyouthconventionakure.com.ng/',
    gradient: 'from-amber-600 to-orange-600',
    image: bycImg,
  },
  {
    title: 'Honsurg Shoes',
    description:
      'E-commerce platform for a footwear brand showcasing products, collections, and brand identity with a smooth shopping experience.',
    tags: ['React', 'E-commerce UI', 'Product Design'],
    github: null,
    live: 'https://honsurg-ssff.vercel.app/',
    image: honsurgImg,
    gradient: 'from-cyan-600 to-blue-600',
  },
]

function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
  gradient,
  image,
  visible,
  delay,
}) {
  return (
    <article
      className={`card group flex flex-col reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* IMAGE AREA (FIXED) */}
      <div
        className={`h-36 sm:h-40 rounded-xl mb-5 overflow-hidden shadow-inner bg-gradient-to-br ${gradient}`}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
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
        <div
          ref={headRef}
          className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}
        >
          <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              visible={gridVisible}
              delay={i * 80}
            />
          ))}
        </div>

        <div
          className={`text-center mt-10 sm:mt-12 reveal ${gridVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://github.com/MercyBamisaye"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <GithubIcon size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}