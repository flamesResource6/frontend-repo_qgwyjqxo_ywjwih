import { useMemo } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Printer, ArrowLeft } from 'lucide-react'

export default function ResumePage() {
  const PROFILE = useMemo(() => ({
    name: 'Sujal Tailor',
    title: 'B.Tech (3rd Year) — Computer Science',
    institution: 'Pandit Deendayal Energy University',
    email: 's.sujal.profiquence@gmail.com',
    phone: '',
    location: 'India',
    github: 'https://github.com/Sujal007T',
    linkedin: 'https://www.linkedin.com/in/sujal-tailor-4734932a9?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  }), [])

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased print:bg-white">
      {/* Top Bar (hidden on print) */}
      <div className="sticky top-0 z-10 border-b border-zinc-200/70 bg-white/80 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900">
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <div className="flex items-center gap-2">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"><Github size={16} className="inline mr-2"/>GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"><Linkedin size={16} className="inline mr-2"/>LinkedIn</a>
            <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:opacity-90">
              <Printer size={16} /> Print / Save as PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume Sheet */}
      <div className="mx-auto my-8 max-w-4xl bg-white px-6 py-8 print:my-0 print:max-w-none print:px-0">
        {/* Header */}
        <header className="border-b border-zinc-200 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight">{PROFILE.name}</h1>
          <p className="mt-1 text-sm text-zinc-700">{PROFILE.title}</p>
          <p className="text-sm text-zinc-700">{PROFILE.institution}</p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-700">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2"><Mail size={16} /> {PROFILE.email}</a>
            {PROFILE.phone && <span className="inline-flex items-center gap-2"><Phone size={16} /> {PROFILE.phone}</span>}
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {PROFILE.location}</span>
            <a href={PROFILE.github} className="inline-flex items-center gap-2" target="_blank" rel="noreferrer"><Github size={16} /> github.com/Sujal007T</a>
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-base font-semibold tracking-wide">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Computer Science undergrad focused on systems, security, and data-driven products—blending fundamentals
            (algorithms, networks, cryptography, compilers) with practical full‑stack development and ML. Passionate about
            building intuitive, performant solutions.
          </p>
        </section>

        {/* Education & Experience */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold">Education</h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="font-medium">B.Tech — Computer Science</div>
                <div className="text-zinc-600">Pandit Deendayal Energy University · 2023–Present</div>
              </div>
              <div>
                <div className="font-medium">Higher Secondary (PCM)</div>
                <div className="text-zinc-600">2023</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold">Experience</h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="font-medium">Python Tutor (Freelance)</div>
                <ul className="mt-1 list-disc pl-5 text-zinc-700">
                  <li>Guided peers on algorithmic problem solving, optimization, and debugging.</li>
                  <li>Designed practice sets and reviewed code quality.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h3 className="text-base font-semibold">Skills</h3>
          <div className="mt-2 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <div className="font-medium">Programming</div>
              <p className="text-zinc-700">Python, Java, C, C++</p>
            </div>
            <div>
              <div className="font-medium">Web & Databases</div>
              <p className="text-zinc-700">MySQL, JSP, PHP, CSS, TailwindCSS, XML</p>
            </div>
            <div>
              <div className="font-medium">Data Science</div>
              <p className="text-zinc-700">Python (Pandas, scikit‑learn), R, FAISS</p>
            </div>
            <div>
              <div className="font-medium">Concepts</div>
              <p className="text-zinc-700">Algorithms, Data Structures, Cryptography, Networking, Compiler Design</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h3 className="text-base font-semibold">Selected Projects</h3>
          <ul className="mt-2 space-y-3 text-sm text-zinc-700">
            <li>
              <span className="font-medium">Quote Recommendation System with FAISS:</span> Semantic search using vector embeddings for
              personalized quote recommendations.
            </li>
            <li>
              <span className="font-medium">Secure Data Wiping Protocols:</span> DoD-style software wipes with hash-based verification and documentation.
            </li>
            <li>
              <span className="font-medium">Sentiment Analysis of E‑Consultation Comments:</span> Text preprocessing, TF‑IDF, logistic regression, and LDA
              topic modeling; dashboard of insights.
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold">Certifications</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700">
              <li>Python Programming (Online)</li>
              <li>Database Design and SQL (Online)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Awards</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700">
              <li>Hackathon Finalist — Adobe India Round 1 (2025)</li>
            </ul>
          </div>
        </section>

        {/* Additional */}
        <section className="mt-6">
          <h3 className="text-base font-semibold">Leadership & Activities</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700">
            <li>Led a 3‑member team for the FAISS Quote project; owned planning and integration.</li>
            <li>UI/UX mentor in a tech club initiative; facilitated design critiques.</li>
            <li>Organized DSA review sessions for peers and juniors.</li>
          </ul>
        </section>

        {/* Footer note for print */}
        <div className="mt-8 text-center text-xs text-zinc-500 print:mt-4">
          Generated from portfolio — sujal-tailor · {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}
