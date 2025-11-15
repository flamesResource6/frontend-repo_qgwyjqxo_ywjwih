import { useState } from 'react'
import { Github, Linkedin, Mail, Menu, Download, ArrowRight, ExternalLink, BookOpen, Certificate, Award, Users, Brain, Target, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Pill({ children }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300">
      {children}
    </span>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-600 dark:text-zinc-300">{subtitle}</p>}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:bg-zinc-900/70">
          {children}
        </div>
      </div>
    </section>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#intro', label: 'Introduction' },
    { href: '#resume', label: 'Resume' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#ethics', label: 'Ethics' },
    { href: '#swot', label: 'SWOT' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/70 p-3 shadow-sm backdrop-blur-md dark:bg-zinc-900/70">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">Sujal Tailor</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              <Download size={16} /> Resume
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-xl p-2 hover:bg-black/5 md:hidden dark:hover:bg-white/5" aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-3 shadow-sm backdrop-blur-md md:hidden dark:bg-zinc-900/70">
            <div className="flex flex-col">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
              >
                <ArrowRight size={16} /> Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-md dark:bg-zinc-900/60 dark:text-zinc-300">
            <Sparkles size={14} className="text-indigo-600" /> Digital Portfolio — Cover Page
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-6xl dark:text-white">
            Sujal Tailor
          </h1>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">B.Tech (3rd Year), Computer Science</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill>[Your Institution Name]</Pill>
            <Pill>Submission Date: November 2025</Pill>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            "Architecting solutions, from secure systems to intelligent data."
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
              Contact <Mail size={16} />
            </a>
            <div className="ml-2 inline-flex items-center gap-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Linkedin size={18} /></a>
              <a href="mailto:hello@example.com" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] w-full sm:h-[500px] md:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/50 shadow-xl backdrop-blur-md dark:bg-zinc-900/50" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

function TableOfContents() {
  const items = [
    { href: '#intro', label: 'Introduction & Learning Philosophy' },
    { href: '#resume', label: 'Resume / CV' },
    { href: '#interests', label: 'Areas of Interest' },
    { href: '#specialization', label: 'Specialization' },
    { href: '#skills', label: 'Skills' },
    { href: '#certs', label: 'Certifications' },
    { href: '#awards', label: 'Awards & Honors' },
    { href: '#volunteer', label: 'Volunteer Experience' },
    { href: '#cocurricular', label: 'Co‑Curricular Activities' },
    { href: '#hobbies', label: 'Hobbies' },
    { href: '#projects', label: 'Interdisciplinary Projects & Research' },
    { href: '#advanced', label: 'Advanced Skill Development' },
    { href: '#leadership', label: 'Collaborative & Leadership' },
    { href: '#ethics', label: 'Global Awareness & Ethics' },
    { href: '#future', label: 'Future Aspirations' },
    { href: '#swot', label: 'SWOT Analysis' },
    { href: '#reflection', label: 'Self‑Reflection' },
  ]
  return (
    <Section id="toc" title="Table of Contents">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((i) => (
          <a key={i.href} href={i.href} className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white/60 p-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-800/60">
            {i.label}
            <ArrowRight size={16} className="opacity-60" />
          </a>
        ))}
      </div>
    </Section>
  )
}

function Intro() {
  return (
    <Section id="intro" title="Introduction & Learning Philosophy" subtitle="Learning by doing, driven by curiosity and impact.">
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          I believe in learning by doing. My academic journey is shaped by curiosity, continuous exploration, and a strong desire to solve meaningful problems. My philosophy centers on a full‑stack understanding, exploring everything from low‑level system design and secure protocols to building intelligent, data‑driven applications.
        </p>
        <p>
          My early exposure to Python, Java, and web technologies (JSP, PHP) gave me an appreciation for creating impact. This has expanded into a deeper interest in compiler design, computer networking, and cryptography, which I see as the fundamental pillars of modern technology.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Building solutions that reflect empathy, clarity, and security.</li>
          <li>Approaching every challenge with iterative improvements and a systems‑thinking mindset.</li>
          <li>Blending rigorous technical expertise with design thinking to create intuitive user experiences.</li>
        </ul>
      </div>
    </Section>
  )
}

function Resume() {
  return (
    <Section id="resume" title="Resume / CV" subtitle="Snapshot of education and experience.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-white"><BookOpen size={18} /> Education</div>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
              <div className="font-semibold">B.Tech – Computer Science (2nd Year)</div>
              <div className="text-zinc-600 dark:text-zinc-300">[Your Institution] | 2023–Present</div>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
              <div className="font-semibold">Higher Secondary (PCM)</div>
              <div className="text-zinc-600 dark:text-zinc-300">2023</div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-white"><Users size={18} /> Work Experience</div>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
              <div className="font-semibold">Python Tutor (Freelance)</div>
              <div className="text-zinc-600 dark:text-zinc-300">Assisting peers with algorithm‑based problem solving, code optimization, and debugging sessions.</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-white"><Target size={18} /> Job Profile / Role Interests</div>
          <div className="flex flex-wrap gap-2">
            {['Data Science Intern','Software Engineering Intern (Systems/Security)','Full Stack Web Developer','ML Engineer Intern'].map((t)=> (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Interests() {
  const list = ['Natural Language Processing','Applied Cryptography & Network Security','Compiler Design & Optimization','Data Science & Visualization','Full Stack Web Development','Ethical AI & Digital Forensics']
  return (
    <Section id="interests" title="Areas of Interest">
      <div className="flex flex-wrap gap-2">
        {list.map((i)=> <Pill key={i}>{i}</Pill>)}
      </div>
    </Section>
  )
}

function Specialization() {
  const list = ['Algorithms and Data Structures','Applied Cryptography (RSA, Ciphers)','Network Protocols & Subnetting','Compiler Theory (Parsing, Grammars)','System Design & Software Architecture']
  return (
    <Section id="specialization" title="Specialization">
      <ul className="grid list-disc gap-2 pl-5 text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
        {list.map((i)=> <li key={i}>{i}</li>)}
      </ul>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="mb-2 font-semibold">Programming Languages</div>
          <div className="flex flex-wrap gap-2">{['Python','Java','C','C++'].map((s)=> <Pill key={s}>{s}</Pill>)}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold">Web & Database</div>
          <div className="flex flex-wrap gap-2">{['MySQL','JSP','PHP','CSS','TailwindCSS','XML'].map((s)=> <Pill key={s}>{s}</Pill>)}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold">Data Science</div>
          <div className="flex flex-wrap gap-2">{['Python (Pandas, Scikit‑learn)','R','FAISS'].map((s)=> <Pill key={s}>{s}</Pill>)}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold">Concepts</div>
          <div className="flex flex-wrap gap-2">{['MVC','Design Patterns','Algorithms','Data Structures','Cryptography','Computer Networking (VLANs, Routing)','Compiler Design','Agile Methodologies'].map((s)=> <Pill key={s}>{s}</Pill>)}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold">Soft Skills</div>
          <div className="flex flex-wrap gap-2">{['Leadership','Public Speaking','Mentoring','Team Collaboration','Problem‑Solving'].map((s)=> <Pill key={s}>{s}</Pill>)}</div>
        </div>
      </div>
    </Section>
  )
}

function CertsAwards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-white"><Certificate size={18} /> Certifications & Professional Development</div>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Python Programming (Online)</li>
          <li>Database Design and SQL (Online)</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-white"><Award size={18} /> Awards and Honors</div>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Hackathon Finalist – Adobe India Round 1 (2025)</li>
        </ul>
      </div>
    </div>
  )
}

function Volunteering() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <div className="mb-3 font-semibold">Volunteer Experience</div>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Mentoring Juniors in Beginner‑level Problem Solving (DSA)</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 font-semibold">Co‑Curricular Activities</div>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>UI/UX Design Hackathon</li>
          <li>Tech Newsletter Writer</li>
          <li>Participant, Competitive Programming</li>
        </ul>
      </div>
    </div>
  )
}

function Hobbies() {
  return (
    <div>
      <div className="mb-3 font-semibold">Hobbies</div>
      <div className="flex flex-wrap gap-2">
        {['Reading (Sci‑Fi, Tech Non‑Fiction)','Blogging on Tech (e.g., Compilers, Security)','Learning Design Systems'].map((h)=> <Pill key={h}>{h}</Pill>)}
      </div>
    </div>
  )
}

function ProjectCard({ title, overview, objectives, methodologies, outcomes, extrasLabel, extras }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm transition hover:shadow-xl dark:bg-zinc-900/70">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-400/30 blur-2xl" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
        <ExternalLink className="mt-1 opacity-60" size={18} />
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{overview}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
        <div>
          <div className="font-semibold">Objectives</div>
          <ul className="list-disc pl-5">{objectives.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
        <div>
          <div className="font-semibold">Methodologies</div>
          <ul className="list-disc pl-5">{methodologies.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
      </div>
      <div className="mt-3">
        <div className="font-semibold">Outcomes</div>
        <ul className="list-disc pl-5 text-sm">{outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
      </div>
      {extras?.length > 0 && (
        <div className="mt-3">
          <div className="font-semibold">{extrasLabel || 'Notes'}</div>
          <ul className="list-disc pl-5 text-sm">{extras.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      )}
    </div>
  )
}

function Projects() {
  const items = [
    {
      title: 'Project 1: Quote Recommendation System with FAISS',
      overview: 'A quote website utilizing vector embeddings (FAISS) to provide high‑relevance search results and personalized daily recommendations.',
      objectives: ['Improve search relevance over keyword matching','Provide daily personalized quotes'],
      methodologies: ['Cosine Similarity','FAISS (Facebook AI Similarity Search)','MySQL','Java/JSP','TailwindCSS','Calendar Syncing'],
      outcomes: ['50% reduction in search latency vs SQL LIKE queries','Clean, responsive UI'],
      extrasLabel: 'Innovations',
      extras: ['Calendar‑based quote mapping','Vector‑embedding matching for semantic search'],
    },
    {
      title: 'Project 2: Secure Data Wiping for IT Asset Recycling',
      overview: 'Research and implementation of secure, verifiable data erasure protocols for IT assets intended for recycling.',
      objectives: ['Ensure 100% data sanitization','Comply with data privacy standards','Prevent post‑disposal breaches'],
      methodologies: ['DoD 5220.22‑M style software wipes','Hashing for verification','Protocol documentation'],
      outcomes: ['3‑step protocol for secure wiping and verification','White paper for internal IT asset management'],
      extrasLabel: 'Challenges',
      extras: ['Balancing speed with thoroughness','Tamper‑proof post‑wipe verification'],
    },
    {
      title: 'Project 3: Sentiment Analysis of E‑Consultation Comments',
      overview: 'Analyzing patient comments to identify areas of satisfaction and concern.',
      objectives: ['Classify sentiment (Positive/Negative/Neutral)','Extract key topics'],
      methodologies: ['Python (Pandas, NLTK)','Text Preprocessing','TF‑IDF','Logistic Regression','Topic Modeling (LDA)'],
      outcomes: ['Dashboard visualizing sentiment trends','Actionable insights for platform improvement'],
      extrasLabel: 'Challenges',
      extras: ['Handling medical jargon, sarcasm, and abbreviations'],
    },
    {
      title: 'Project 4: Predictive Analysis of Customer Purchase Behavior (R)',
      overview: 'A statistical modeling project to understand and predict purchase tendencies using R.',
      objectives: ['Data cleaning and feature engineering','Model training and evaluation'],
      methodologies: ['R','Regression/Classification techniques','Visualization'],
      outcomes: ['Reliable baseline model and insights for business strategy'],
      extras: [],
    },
    {
      title: 'Project 5: Java Design Patterns with GUI‑Based MVC',
      overview: 'Implementation of Iterator, MVC, Observer, and Facade patterns for a scalable event‑driven GUI app.',
      objectives: ['Reusable abstractions','Loose coupling and testability'],
      methodologies: ['Java','Swing/JavaFX','Design Patterns'],
      outcomes: ['Feature growth without regressions','Observer pattern demo included'],
      extras: [],
    },
    {
      title: 'Project 6: Digital Forensics Case Study — The Antikythera Mechanism',
      overview: 'Exploring the Antikythera Mechanism with modern digital forensics and reverse‑engineering lenses.',
      objectives: ['Deconstruct the what, why, and how','Analyze components as data'],
      methodologies: ['Literature review','Comparative analysis of 3D scanning data','Reverse‑engineering principles'],
      outcomes: ['Peer presentation connecting ancient artifacts to modern investigation frameworks'],
      extras: [],
    },
  ]
  return (
    <Section id="projects" title="Interdisciplinary Projects & Research">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}

function Advanced() {
  return (
    <Section id="advanced" title="Advanced Skill Development & Mastery">
      <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        <li><span className="font-semibold">Python and Data Structures:</span> Competitive programming solutions focused on time/space optimization. (Artifact: Longest subarray snippet)</li>
        <li><span className="font-semibold">Design Patterns (Java):</span> Iterator, MVC, Observer, Facade for an event‑driven GUI. (Artifact: Observer demo)</li>
        <li><span className="font-semibold">Applied Cryptography:</span> RSA, Vigenere, Hill; mathematics of hashing and digital signatures.</li>
        <li><span className="font-semibold">Network Engineering:</span> Mastery of VLANs, subnetting, IP addressing, routing protocols (viva cleared).</li>
        <li><span className="font-semibold">Database & Query Optimization:</span> Authentication, storage, complex joins in web projects. (Artifact: MySQL corrected insertion queries)</li>
        <li><span className="font-semibold">Frontend Design:</span> Aesthetic, responsive UIs with TailwindCSS/JSP.</li>
      </ul>
    </Section>
  )
}

function Leadership() {
  return (
    <Section id="leadership" title="Collaborative & Leadership Experiences">
      <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        <li>Led a team of 3 to build the FAISS Quote Generation website, managing timeline, Git workflow, and integration.</li>
        <li>UI/UX mentor in a tech club project.</li>
        <li>Facilitated team coordination and resolved commit conflicts.</li>
        <li>Organized study sessions for DSA revision for peers and juniors.</li>
      </ul>
    </Section>
  )
}

function Ethics() {
  return (
    <Section id="ethics" title="Global Awareness & Ethical Considerations" subtitle="Privacy, fairness, and accountability by design.">
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          My work on the Secure Data Wiping project was rooted in ethical principles, addressing the critical need for data privacy in an era of constant hardware turnover. I studied regulatory frameworks like GDPR to ensure protocols met global standards, protecting individuals from data theft.
        </p>
        <p>
          The Sentiment Analysis project involved an Ethical AI framework to identify and mitigate biases in training data, ensuring insights were fair and representative across demographics.
        </p>
      </div>
    </Section>
  )
}

function Future() {
  return (
    <Section id="future" title="Future Aspirations & Professional Development" subtitle="High‑impact roles and principled technology.">
      <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        <li>Aim: High‑impact internship at a leading tech/fin‑tech firm (e.g., Data Scientist at Mastercard, Summer Analyst at Goldman Sachs).</li>
        <li>Long‑term: Build open‑source tools for ethical AI and privacy‑preserving technologies.</li>
        <li><span className="font-semibold">Strategy:</span> Advanced courses in Reinforcement Learning, Automation, Secure System Design; research hackathons; contributions to OSS in cryptography or compiler tools.</li>
      </ul>
    </Section>
  )
}

function SWOT() {
  return (
    <Section id="swot" title="SWOT Analysis">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-600 dark:text-emerald-400"><ShieldCheck size={18} /> Strengths</div>
          <ul className="list-disc pl-5 text-sm">
            <li>Strong problem‑solving skills</li>
            <li>Deep technical knowledge across Data Science, Networking, Cryptography</li>
            <li>Fast learner</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div className="mb-2 flex items-center gap-2 font-semibold text-amber-600 dark:text-amber-400"><Brain size={18} /> Weaknesses</div>
          <ul className="list-disc pl-5 text-sm">
            <li>Improve large‑scale system architecture documentation</li>
            <li>Time management on passion projects</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div className="mb-2 flex items-center gap-2 font-semibold text-sky-600 dark:text-sky-400"><Target size={18} /> Opportunities</div>
          <ul className="list-disc pl-5 text-sm">
            <li>Convergence of AI, Cybersecurity, and Systems Engineering</li>
            <li>Alignment with personal interests</li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div className="mb-2 flex items-center gap-2 font-semibold text-rose-600 dark:text-rose-400"><Lightbulb size={18} /> Threats</div>
          <ul className="list-disc pl-5 text-sm">
            <li>Rapid tech advancements require constant upskilling and prioritization</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Reflection() {
  return (
    <Section id="reflection" title="Conclusion & Self‑Assessment">
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          Throughout my journey, I’ve embraced challenges that pushed my boundaries—from understanding core data structures to implementing secure protocols and exploring compiler theory. I’ve grown as a thinker, collaborator, and builder.
        </p>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div className="mb-2 font-semibold">Self‑Reflection</div>
          <p><span className="font-semibold">Goal alignment:</span> I have successfully achieved fundamental coding fluency and gained exposure to real‑world projects.</p>
          <p className="mt-2"><span className="font-semibold">Improvement Areas:</span> I need a deeper focus on optimization in low‑level systems and contributing to larger, established codebases.</p>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-zinc-700 dark:text-zinc-300">Open to internships and collaborations. Let’s connect.</p>
          <div className="mt-3 flex items-center gap-2">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              <Mail size={16} /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="text-right text-sm text-zinc-500 dark:text-zinc-400">
          <div>Submission Date: November 2025</div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 bg-white/60 py-8 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Sujal Tailor. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Github size={16} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Linkedin size={16} /></a>
          <a href="mailto:hello@example.com" className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <TableOfContents />
        <Intro />
        <Resume />
        <Interests />
        <Specialization />
        <Skills />
        <Section id="certs" title="Certificates & Awards"><CertsAwards /></Section>
        <Section id="volunteer" title="Volunteer & Co‑Curricular"><Volunteering /></Section>
        <Section id="hobbies" title="Hobbies"><Hobbies /></Section>
        <Projects />
        <Advanced />
        <Leadership />
        <Ethics />
        <Future />
        <SWOT />
        <Reflection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
