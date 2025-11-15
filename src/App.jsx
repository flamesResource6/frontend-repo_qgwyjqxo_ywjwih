import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, Menu, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-3 shadow-sm backdrop-blur-md dark:bg-zinc-900/60">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">Your Name</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
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
                href="#resume"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  // ensure Spline resizes smoothly
  const containerRef = useRef(null)
  useEffect(() => {
    const handleResize = () => {
      // trigger re-render for Spline container if needed
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-md dark:bg-zinc-900/60 dark:text-zinc-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Available for freelance
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-6xl dark:text-white">
            Building playful, modern interfaces for the web
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300">
            I’m a full‑stack developer focused on delightful UX, interactive 3D moments, and robust engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
              Contact Me <Mail size={16} />
            </a>
            <div className="ml-2 inline-flex items-center gap-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Linkedin size={18} /></a>
              <a href="mailto:hello@example.com" className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white/70 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        {/* Spline 3D scene */}
        <div ref={containerRef} className="relative h-[420px] w-full sm:h-[500px] md:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/50 shadow-xl backdrop-blur-md dark:bg-zinc-900/50" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  )
}

function TechPill({ label }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300">
      {label}
    </span>
  )
}

function About() {
  const skills = ['React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion', 'Spline']
  return (
    <section id="about" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">About</h2>
        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
          I design and build experiences that are fast, accessible, and fun. I love combining solid engineering
          with expressive visuals to make products people enjoy using.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((s) => (
            <TechPill key={s} label={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm transition hover:shadow-xl dark:bg-zinc-900/70">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-400/30 blur-2xl" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
        </div>
        <ExternalLink className="mt-1 opacity-60" size={18} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const items = [
    {
      title: 'Interactive 3D Landing',
      description: 'A marketing site with real‑time 3D interactions powered by Spline and Framer Motion.',
      tags: ['React', 'Spline', 'Framer Motion'],
    },
    {
      title: 'Realtime Dashboard',
      description: 'Analytics dashboard with live data, dark mode, and micro‑interactions.',
      tags: ['Vite', 'Tailwind', 'Charts'],
    },
    {
      title: 'E‑commerce Starter',
      description: 'Fast storefront with modern UI patterns and accessible components.',
      tags: ['React', 'Stripe', 'Best Practices'],
    },
  ]

  return (
    <section id="projects" className="relative bg-gradient-to-b from-transparent to-zinc-50 py-20 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-indigo-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">Selected Projects</h2>
          <a href="#contact" className="hidden rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 md:inline-flex dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
            Work with me
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">Let’s build something great</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Have an idea, project, or role in mind? I’m open to freelance and full‑time opportunities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm">
            <Mail size={16} /> Email me
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
            See more work
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 bg-white/60 py-8 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
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
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
