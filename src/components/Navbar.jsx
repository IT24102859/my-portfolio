import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS } from '../data/constants'

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
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'glass-strong border-cyan-500/20 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:py-3'
            : 'border-transparent bg-transparent py-3 md:py-4'
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group touch-target flex shrink-0 items-center gap-2 text-left"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 font-display text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(0,212,255,0.15)] transition group-hover:border-cyan-400/50">
            AD
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold leading-none text-white">
              Dilshan
            </span>
            <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              Portfolio
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="btn-cyber relative hidden rounded-lg px-4 py-2 text-sm font-medium text-white sm:inline-flex"
          >
            <span className="relative z-10">Hire Me</span>
          </button>

          <button
            type="button"
            className="touch-target flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/25 bg-white/5 text-cyan-300 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              className="glass-strong fixed inset-x-3 top-[calc(env(safe-area-inset-top)+4.25rem)] z-50 overflow-hidden rounded-2xl border border-cyan-500/20 md:hidden"
            >
              <ul className="max-h-[min(70dvh,480px)] overflow-y-auto p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className={`touch-target w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium transition ${
                        active === link.id
                          ? 'bg-cyan-500/15 text-cyan-300'
                          : 'text-slate-400 active:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/5 p-3">
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="btn-cyber touch-target relative w-full rounded-xl py-3.5 text-sm font-medium text-white"
                >
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
