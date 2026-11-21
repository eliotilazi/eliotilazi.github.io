import { useEffect, useState } from 'react'
import { profile, about, projects, skills, education } from './data.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a href="#top" className="logo">EI<span>.</span></a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="hello">Hi, I am</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}, from idea to launch</p>
        <p className="intro">{profile.intro}</p>
        <div className="meta">
          <span>📍 {profile.location}</span>
          <span>🗣️ {profile.languages.join(' · ')}</span>
        </div>
        <div className="actions">
          <a className="btn primary" href="#projects">View my projects</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={profile.photo} alt={`Photo of ${profile.name}`} />
      </div>
    </section>
  )
}

function Section({ id, title, children }) {
  return (
    <section className="section reveal" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="card">
      <div className={`card-visual ${p.accent}`} aria-hidden="true">
        {p.accent === 'wood' && <div className="cube" />}
        {p.accent === 'route' && (
          <svg viewBox="0 0 200 90"><path d="M10 70 C 50 10, 90 90, 130 35 S 180 20, 190 15" /><circle cx="10" cy="70" r="6" /><circle cx="130" cy="35" r="6" /><circle cx="190" cy="15" r="6" /></svg>
        )}
        {p.accent === 'web' && (
          <div className="browser"><i /><i /><i /><b /><b /><b /></div>
        )}
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <p className="my-role"><strong>My role:</strong> {p.role}</p>
        <ul className="tags">
          {p.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default function App() {
  // Small fade-in animation when sections come into view
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="about">
            {about.map((t, i) => <p key={i}>{t}</p>)}
          </div>
          <ul className="skills">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.school}>
                <span className="years">{e.years}</span>
                <span className="school">{e.school}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Contact Me">
          <p className="contact-text">Available for remote work. The fastest way to reach me is by e-mail or LinkedIn.</p>
          <div className="contact">
            <a className="contact-item" href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">💻 GitHub</a>
          </div>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name} · Built with React</footer>
    </>
  )
}
