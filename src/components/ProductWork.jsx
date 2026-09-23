import {
  Calculator, Church, Receipt, ArrowLeftRight, FileSignature, GraduationCap,
  Search, ClipboardList, Users, Rocket, Briefcase,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    name: 'QuantityTech',
    domain: 'ConstructionTech · AI',
    icon: Calculator,
    gradient: 'from-violet-600 to-indigo-600',
    description:
      'AI-powered quantity surveying and estimation platform focused on faster estimating, collaboration, precision, and compliance.',
    focus: ['Requirements', 'Product Evaluation', 'Market Research', 'Delivery Coordination'],
  },
  {
    name: 'ChurchWatch',
    domain: 'Church Management · SaaS',
    icon: Church,
    gradient: 'from-amber-500 to-orange-600',
    description:
      'Church management product supporting financial accounting, HR, and administrative operations across Directors/Super Admins, Branch or Lead Pastors, Accountants, and Branch Administrators.',
    focus: ['Multi-role Access', 'Financial Accounting', 'HR & Admin Workflows'],
  },
  {
    name: 'Expense Management System',
    domain: 'FinTech · Operations',
    icon: Receipt,
    gradient: 'from-emerald-600 to-teal-600',
    description:
      'Digital expense-management solution for organizing, tracking, reviewing, and managing business expenditure workflows.',
    focus: ['Expense Workflows', 'Review & Approval', 'Spend Tracking'],
  },
  {
    name: 'Transaction Tracking',
    domain: 'FinTech · Payments',
    icon: ArrowLeftRight,
    gradient: 'from-cyan-600 to-blue-600',
    description:
      'Product focused on payment and transaction tracking, giving teams clear operational visibility.',
    focus: ['Payment Tracking', 'Operational Visibility'],
  },
  {
    name: 'LegalTech',
    domain: 'LegalTech · AI',
    icon: FileSignature,
    gradient: 'from-slate-700 to-indigo-600',
    description:
      'E-signature platform built around secure document workflows with built-in forensic AI capabilities.',
    focus: ['E-signature', 'Secure Document Workflows', 'Forensic AI'],
  },
  {
    name: 'EdApp',
    domain: 'EdTech · Administration',
    icon: GraduationCap,
    gradient: 'from-pink-600 to-rose-600',
    description:
      'Education administration product supporting school operations and fee reconciliation, including role-based access and administrative processes.',
    focus: ['Fee Reconciliation', 'Role-based Access', 'School Operations'],
  },
]

const process = [
  { icon: Search, title: 'Discover', text: 'Market research, user needs, and product evaluation.' },
  { icon: ClipboardList, title: 'Define', text: 'Clear requirements, specs, and a prioritised backlog.' },
  { icon: Users, title: 'Align', text: 'Keep design, engineering, and stakeholders on the same page.' },
  { icon: Rocket, title: 'Deliver', text: 'Coordinate delivery, test, and iterate on what ships.' },
]

function ProductCard({ name, domain, icon: Icon, gradient, description, focus, visible, delay }) {
  return (
    <article
      className={`card group flex flex-col reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {name}
          </h3>
          <p className="text-violet-600 dark:text-violet-400 text-xs font-medium mt-0.5">{domain}</p>
        </div>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
        {description}
      </p>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <p className="text-slate-400 dark:text-slate-500 text-[11px] font-semibold uppercase tracking-widest mb-2">
          Product focus
        </p>
        <div className="flex flex-wrap gap-2">
          {focus.map((f) => (
            <span
              key={f}
              className="bg-violet-50 dark:bg-slate-800 text-violet-600 dark:text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProductWork() {
  const [headRef, headVisible] = useScrollReveal()
  const [processRef, processVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="product" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/40" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div ref={headRef} className={`text-center mb-12 sm:mb-14 reveal ${headVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Briefcase size={12} /> Product Management
          </div>
          <h2 className="section-heading">Products I&apos;ve Managed</h2>
          <div className="gradient-divider" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            I take products from idea to delivery across AI, fintech, legaltech, edtech, and
            organisational software. My frontend background means I understand how things get
            built, so specs are realistic and handoffs to engineering are smooth.
          </p>
        </div>

        {/* How I work */}
        <div ref={processRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-14">
          {process.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`card text-center reveal ${processVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
                <Icon size={18} />
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">0{i + 1}</div>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base mb-1">{title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} {...product} visible={gridVisible} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
