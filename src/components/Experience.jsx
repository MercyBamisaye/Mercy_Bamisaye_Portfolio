const experiences = [
 {
  role: "Product Manager Intern",
  company: "Int+ co.",
  period: "2026 - Present",
  type: "Full-time",
  description:
    "Supporting product planning and execution by assisting in defining requirements, writing product documentation, and maintaining the product backlog. Collaborating with designers, engineers, and stakeholders to translate user needs into clear product specifications. Participating in user research, testing, and iterative improvements to enhance product usability and delivery.",
  techs: ["Product Requirements", "Backlog Management", "User Research", "Stakeholder Collaboration"],
},
  {
    role: "Frontend Developer",
    company: "GFA Technologies",
    period: "2024 - Present",
    type: "Full-time",
    description:
      "Built and maintained client-facing websites and web applications for various industries. Collaborated closely with designers to implement pixel-perfect UIs. Integrated third-party APIs and payment gateways.",
    techs: ["React", "JavaScript", "CSS", "REST APIs"],
  },
  {
    role: "Frontend Intern",
    company: "GFA Technologies",
    period: "2024",
    type: "Internship",
    description:
      "Developed reusable UI components and landing pages. Assisted in migrating a legacy jQuery codebase to React. Participated in daily standups and code reviews.",
    techs: ["HTML", "CSS", "JavaScript", "React"],
  },
]

const certifications = [
  {
    title: "Frontend Web Development",
    issuer: "Coursera / Meta",
    date: "2023",
    category: "Frontend",
    color: "from-violet-600 to-indigo-600",
    credentialUrl: "https://coursera.org/share/6f17ddbb8793a27372faa48554641ba3",
  },
  {
    title: "Frontend Development Certification",
    issuer: "Ekiti Digital Skilling Academy",
    date: "2024",
    category: "Frontend",
    color: "from-yellow-600 to-orange-600",
    credentialUrl: "#",
  },
  {
    title: "Software Development (Frontend)",
    issuer: "Women Techsters Fellowship (Tech4dev)",
    date: "2024",
    category: "Frontend",
    color: "from-cyan-600 to-blue-600",
    credentialUrl: "https://drive.google.com/file/d/1IaMse71JDX2ilxhwWsuFDcVon4V9-jhs/view?usp=drive_link",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "2024",
    category: "JavaScript",
    color: "from-amber-600 to-yellow-600",
    credentialUrl: "https://www.mygreatlearning.com/certificate/TRCJETBY?referrer_code=GLUIMFURYAZBS",
  },
  {
    title: "Product Management Basics",
    issuer: "Pendo",
    date: "2025",
    category: "Product Management",
    color: "from-amber-600 to-yellow-600",
    credentialUrl: "https://go.pendo.io/rs/185-LQW-370/images/ProductManagementBasics_EmailTopcap_Certified.png?&utm_source=pendo&utm_medium=email&utm_campaign=FY24-Q2-07_GLBL_CRS_ALL_IM_Product-Management-Basics-Certification-Course&utm_content=topcap&mkt_tok=MTg1LUxRVy0zNzAAAAGenhDodITjTCLSLtcVdE62ZiFsCzb7BQRF4uWAsIxe_83s6nE1hhxNIm8oMCoDvSHMklgXMyAXe83JZGHkkGVnJ3uKjv_N_xnsEkV_KdLDY_RKXaA",
  },
  {
    title: "Professional Product Management Certification",
    issuer: "AQskill",
    date: "2026",
    category: "Product Management",
    color: "from-pink-600 to-rose-600",
    credentialUrl: "https://www.aqskill.org/verify/255624A109555",
  },
  {
    title: "Data Protection Officers Certification ",
    issuer: "Nigeria Data Protection Commission (NDPC)",
    date: "2026",
    category: " Data Protection",
    color: "from-emerald-600 to-teal-600",
    credentialUrl: "#",
  },
]

const education = [
  {
    degree: "B.Sc. Plant Science and Biotechnology",
    school: "Ekiti State University",
    period: "2018 - 2024",
    note:"Focused on plant science, biotechnology, and molecular laboratory techniques",
  },
]

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const [headRef, headVisible] = useScrollReveal()
  const [expRef, expVisible] = useScrollReveal()
  const [eduRef, eduVisible] = useScrollReveal()
  const [certRef, certVisible] = useScrollReveal()

  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/40" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div ref={headRef} className={`text-center mb-12 sm:mb-16 reveal ${headVisible ? 'visible' : ''}`}>
          <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Background</p>
          <h2 className="section-heading">Experience, Education &amp; Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        <div className="mb-14" ref={expRef}>
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg sm:text-xl mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-violet-600/10 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400">
              💼
            </span>
            Work Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className={`flex gap-4 sm:gap-6 reveal ${expVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
                
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-violet-600 ring-4 ring-white dark:ring-slate-950 shadow-md shadow-violet-500/30 z-10 mt-1.5" />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2" />
                  )}
                </div>

                <div className="card flex-1 mb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">{exp.role}</h4>
                      <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">{exp.period}</div>
                      <span className="inline-block mt-1 text-xs bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs?.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-14" ref={eduRef}>
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg sm:text-xl mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-violet-600/10 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400">
              🎓
            </span>
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className={`flex gap-4 sm:gap-6 reveal ${eduVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-950 shadow-md shadow-indigo-500/30 z-10 mt-1.5" />
                  {i < education.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2" />
                  )}
                </div>

                <div className="card flex-1 mb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">{edu.degree}</h4>
                      <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">{edu.school}</p>
                      <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">{edu.note}</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm flex-shrink-0">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div ref={certRef}>
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg sm:text-xl mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-violet-600/10 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400">
              🏆
            </span>
            Licenses &amp; Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={cert.title} className={`card group flex gap-4 items-start reveal ${certVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {cert.category.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-900 dark:text-white font-semibold text-sm leading-snug mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-violet-600 dark:text-violet-400 text-xs font-medium mb-2">{cert.issuer}</p>

                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-2 py-0.5 rounded-md">
                      {cert.category}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 dark:text-slate-500 text-xs">{cert.date}</span>

                      {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 text-xs font-medium underline underline-offset-2"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-600 text-xs italic">Soon</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}