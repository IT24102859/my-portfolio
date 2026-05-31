import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaDownload } from 'react-icons/fa'
import { NAV_LINKS, PERSON, MAILTO } from '../data/constants'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id))
      const scrollPos = window.scrollY + 140
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (el && el.offsetTop <= scrollPos) {
          setActive(NAV_LINKS[i].id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navLinks = NAV_LINKS.filter((l) => l.id !== 'contact')

  return (
    <motion.header
      className="safe-top fixed left-0 right-0 z-50 px-3 md:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'glass-strong border-[var(--border)] py-2.5 shadow-[var(--glow-sm)] md:py-3'
            : 'border-[var(--border)] bg-[var(--surface)] py-3 md:py-4'
        }`}
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group touch-target flex shrink-0 items-center gap-2 text-left"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--accent-muted)] font-display text-sm font-bold text-[var(--accent)] transition group-hover:shadow-[var(--glow-sm)]">
            AD
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold leading-none text-[var(--text-primary)]">
              Dilshan
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-secondary)] uppercase">
              AI/ML Portfolio
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg border border-[var(--border-strong)] bg-[var(--accent-muted)] shadow-[var(--glow-sm)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <a
            href={PERSON.cvUrl}
            download="CV.pdf"
            className="btn-ghost-cyber hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium sm:inline-flex md:px-4"
            aria-label="Download CV"
          >
            <FaDownload className="text-[var(--accent)]" size={14} />
            <span className="hidden lg:inline">CV</span>
          </a>
          <a
            href={MAILTO.contact}
            className="btn-ghost-cyber relative hidden items-center justify-center rounded-lg px-4 py-2 text-sm font-medium lg:inline-flex"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
          <a
            href={MAILTO.hire}
            className="btn-cyber relative hidden items-center justify-center rounded-lg px-4 py-2 text-sm font-medium md:inline-flex"
          >
            <span className="relative z-10">Hire Me</span>
          </a>
          <ThemeToggle className="sm:hidden" />
          <button
            type="button"
            className="touch-target flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-strong fixed inset-x-3 top-[calc(env(safe-area-inset-top)+4.25rem)] z-50 overflow-hidden rounded-2xl border border-[var(--border)] md:hidden"
            >
              <ul className="max-h-[min(70dvh,480px)] overflow-y-auto p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className={`touch-target w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium ${
                        active === link.id
                          ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
                          : 'text-[var(--text-secondary)]'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 border-t border-[var(--border)] p-3">
                <a
                  href={PERSON.cvUrl}
                  download="CV.pdf"
                  className="btn-ghost-cyber touch-target flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaDownload size={14} />
                  Download CV
                </a>
                <a
                  href={MAILTO.hire}
                  onClick={() => setMobileOpen(false)}
                  className="btn-cyber touch-target relative flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-medium"
                >
                  <span className="relative z-10">Hire Me</span>
                </a>
                <a
                  href={MAILTO.contact}
                  onClick={() => setMobileOpen(false)}
                  className="btn-ghost-cyber touch-target flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-medium"
                >
                  <span className="relative z-10">Contact Me</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
