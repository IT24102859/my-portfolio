import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaFileAlt } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { PERSON } from '../data/constants'
import ProfileImage from './ProfileImage'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="section-pad relative flex min-h-[100dvh] items-center pb-24 pt-24 sm:pt-28 md:px-8 md:pb-16 lg:px-12"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Profile — centered above intro on mobile, beside text on desktop */}
        <motion.div
          className="relative order-1 flex justify-center lg:order-2 lg:justify-center xl:justify-end"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mx-auto flex flex-col items-center">
            <motion.div
              className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--gradient-start)]/40 to-[var(--accent-secondary)]/40 blur-2xl"
              animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              aria-hidden
            />
            <div className="relative rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--accent-secondary)] p-1 shadow-[var(--glow-md)]">
              <ProfileImage className="block h-40 w-40 rounded-full border-4 border-[var(--bg-page)] object-cover object-center shadow-lg shadow-black/30 ring-2 ring-[var(--border-strong)] sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72" />
            </div>
            <div className="mt-6 grid w-full max-w-xs grid-cols-3 gap-2 lg:hidden">
              {PERSON.stats.map((s) => (
                <div key={s.label} className="neo-card rounded-lg px-2 py-2.5 text-center">
                  <p className="font-display text-sm font-bold text-[var(--accent)]">{s.value}</p>
                  <p className="font-mono text-[9px] text-[var(--text-muted)] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-2 text-center lg:order-1 lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="mb-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <span className="status-dot" />
            <span className="hud-badge rounded px-2.5 py-1 sm:px-3 sm:py-1.5">
              Available for internships
            </span>
          </motion.div>

          <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)] uppercase sm:text-xs">
            {PERSON.title}
          </p>

          <h1 className="mt-2 font-display text-[1.75rem] font-bold leading-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text block sm:inline">{PERSON.name}</span>
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-secondary)] sm:text-base lg:mx-0">
            {PERSON.tagline}
          </p>

          <div className="mt-4 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-2 font-mono text-sm lg:justify-start">
            <span className="text-[var(--accent-secondary)]">&gt;</span>
            <TypeAnimation
              sequence={PERSON.typingRoles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="gradient-text font-semibold"
            />
          </div>

          <motion.div
            className="mt-6 hidden gap-6 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {PERSON.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-[var(--accent)]">{s.value}</p>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={PERSON.cvUrl}
              download="CV.pdf"
              className="btn-cyber touch-target relative flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium sm:py-3"
            >
              <FaDownload className="relative z-10" />
              <span className="relative z-10">Download CV</span>
            </a>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="btn-ghost-cyber touch-target flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium sm:py-3"
            >
              <FaFileAlt />
              View Projects
            </button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-mono text-xs text-[var(--text-muted)]">Connect</span>
            {[
              { icon: FaGithub, href: PERSON.github, label: 'GitHub' },
              { icon: FaLinkedin, href: PERSON.linkedin, label: 'LinkedIn' },
              { icon: FaEnvelope, href: `mailto:${PERSON.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="neo-card touch-target flex h-11 w-11 items-center justify-center rounded-lg text-[var(--accent)] transition hover:shadow-[var(--glow-sm)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        className="safe-bottom absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0.5 font-mono text-[10px] text-[var(--text-muted)] uppercase"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <span>Scroll</span>
        <HiArrowDown size={22} className="text-[var(--accent)]" />
      </motion.button>
    </section>
  )
}
