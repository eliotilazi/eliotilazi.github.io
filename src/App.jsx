import { useEffect, useRef, useState } from 'react'
import { profile, about, projects, skills, education } from './data.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const ROLES = ['websites', '3D tools', 'business apps']

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
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

// Rotating word in the hero ("I build websites / 3D tools / business apps")
function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % ROLES.length), 2200)
    return () => clearInterval(t)
  }, [])
  return <span className="rotating" key={i}>{ROLES[i]}</span>
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      <div className="hero-text">
        <p className="hello">👋 Hi, I am</p>
        <h1>{profile.name}</h1>
        <p className="role">I build <RotatingWord />,<br />from idea to launch.</p>
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
        <div className="ring" />
        <img src={profile.photo} alt={`Photo of ${profile.name}`} />
        <span className="badge">Open to remote work</span>
      </div>
    </section>
  )
}

function Section({ id, title, kicker, children }) {
  return (
    <section className="section reveal" id={id}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// Infinite scrolling band of skills
function SkillsMarquee() {
  const list = [...skills, ...skills]
  return (
    <div className="marquee" aria-label="Skills">
      <div className="marquee-track">
        {list.map((s, i) => <span key={i} className="chip">{s}</span>)}
      </div>
    </div>
  )
}

function ProjectVisual({ accent }) {
  return (
    <div className={`visual ${accent}`} aria-hidden="true">
      {accent === 'wood' && (
        <div className="room">
          <div className="floor" /><div className="box b-a" /><div className="box b-b" />
        </div>
      )}
      {accent === 'route' && (
        <svg viewBox="0 0 300 160">
          <path className="road" d="M20 130 C 80 20, 140 160, 200 70 S 270 30, 285 25" />
          <circle cx="20" cy="130" r="9" /><circle cx="200" cy="70" r="9" /><circle cx="285" cy="25" r="9" />
          <rect className="truck" x="0" y="0" width="22" height="14" rx="3" />
        </svg>
      )}
      {accent === 'quote' && (
        <div className="quoteviz">
          <span className="ql"><i>Kitchen 4.2 m</i><b>CHF 3'150</b></span>
          <span className="ql"><i>Quartz worktop</i><b>CHF 1'890</b></span>
          <span className="ql"><i>VAT 8.1 %</i><b>CHF 469</b></span>
          <span className="ql tot"><i>Total</i><b>CHF 6'264</b></span>
        </div>
      )}
      {accent === 'chat' && (
        <div className="chatviz">
          <span className="bub bot">Hello! How can I help?</span>
          <span className="bub me">Ku është porosia ime?</span>
          <span className="bub bot">Porosia LB-1002 është në përgatitje.</span>
        </div>
      )}
      {accent === 'web' && (
        <div className="devices">
          <div className="laptop"><i /><i /><i /><b /><b /><b /></div>
          <div className="phone"><b /><b /></div>
        </div>
      )}
    </div>
  )
}

// Project slider: arrows, dots, swipe and autoplay
function ProjectSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const count = projects.length
  const go = (n) => setIndex((n + count) % count)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((x) => (x + 1) % count), 6000)
    return () => clearInterval(t)
  }, [paused, count])

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; setPaused(true) }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
      }}
    >
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {projects.map((p, i) => (
          <article className="slide" key={p.title} aria-hidden={i !== index}>
            <ProjectVisual accent={p.accent} />
            <div className="slide-body">
              <span className="slide-num">0{i + 1} / 0{count}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="my-role"><strong>My role:</strong> {p.role}</p>
              <ul className="tags">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {(p.demo || p.code) && (
                <p className="proj-links">
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer">Source code ↗</a>}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      <button className="arrow left" aria-label="Previous project" onClick={() => go(index - 1)}>‹</button>
      <button className="arrow right" aria-label="Next project" onClick={() => go(index + 1)}>›</button>
      <div className="dots">
        {projects.map((p, i) => (
          <button key={p.title} className={i === index ? 'dot active' : 'dot'} aria-label={`Show ${p.title}`} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  // Fade-in animation when sections come into view
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

        <Section id="about" title="About me" kicker="Who I am">
          <div className="about">
            {about.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </Section>
      </main>

      <SkillsMarquee />

      <main>
        <Section id="projects" title="Projects" kicker="What I built">
          <ProjectSlider />
        </Section>

        <Section id="education" title="Education" kicker="Where I studied">
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.school}>
                <span className="years">{e.years}</span>
                <span className="school">{e.school}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Let's work together" kicker="Contact me">
          <div className="contact-card">
            <p>Available for remote work. The fastest way to reach me is by e-mail or LinkedIn.</p>
            <div className="contact">
              <a className="contact-item" href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">💻 GitHub</a>
            </div>
          </div>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name} · Built with React</footer>
    </>
  )
}
