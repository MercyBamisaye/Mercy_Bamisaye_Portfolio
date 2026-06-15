import { Code2, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Gradient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-8 bg-violet-500/5 blur-xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md shadow-violet-500/20">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="gradient-text">Mercy Bamisaye</span>
          </a>

          <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" /> using React &amp; Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <p className="text-slate-400 dark:text-slate-500 text-sm">&copy; {year} Mercy Bamisaye</p>
            <a
              href="#home"
              className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md shadow-violet-500/20"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
