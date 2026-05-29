import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { PERSON } from '../data/constants'
import ProfileImage from './ProfileImage'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="section-pad relative flex min-h-[100dvh] items-center pb-24 pt-24 sm:pt-28 md:px-8 md:pb-16 lg:px-12"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Profile first on mobile for visual impact */}
        <motion.div
          className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
            <motion.div
              className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/40 via-purple-600/40 to-pink-500/30 blur-3xl sm:-inset-8"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="profile-ring hidden sm:block" />
            <div className="profile-ring-2 hidden md:block" />
            <div className="gradient-border relative mx-auto rounded-3xl p-1">
              <div className="glass-strong relative overflow-hidden rounded-[22px] p-1.5 sm:p-2">
                <span className="hud-corner hud-corner-tl hidden sm:block" />
                <span className="hud-corner hud-corner-tr hidden sm:block" />
                <span className="hud-corner hud-corner-bl hidden sm:block" />
                <span className="hud-corner hud-corner-br hidden sm:block" />
                <ProfileImage className="aspect-square w-full max-w-[260px] rounded-2xl object-cover object-top sm:max-w-[300px] lg:h-96 lg:w-96 lg:max-w-none" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030308]/80 via-transparent to-cyan-500/5" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
              <div className="neo-card rounded-lg px-3 py-2.5 text-center">
                <p className="font-mono text-[9px] tracking-widest text-cyan-500/80 uppercase">
                  Specialization
                </p>
                <p className="font-display text-xs font-semibold text-cyan-100">
                  {PERSON.specialization}
                </p>
              </div>
              <div className="neo-card rounded-lg px-3 py-2.5 text-center">
                <p className="font-mono text-[9px] tracking-widest text-purple-400/80 uppercase">
                  University
                </p>
                <p className="font-display text-xs font-semibold text-white">
                  {PERSON.university}
                </p>
              </div>
            </div>

            <motion.div
              className="neo-card absolute -bottom-2 -left-2 hidden rounded-lg px-4 py-3 sm:block md:-left-8"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-mono text-[10px] tracking-widest text-cyan-500/80 uppercase">
                Specialization
              </p>
              <p className="font-display text-sm font-semibold text-cyan-100">
                {PERSON.specialization}
              </p>
            </motion.div>
            <motion.div
              className="neo-card absolute -top-2 -right-2 hidden rounded-lg px-4 py-3 sm:block md:-right-6"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="font-mono text-[10px] tracking-widest text-purple-400/80 uppercase">
                University
              </p>
              <p className="font-display text-sm font-semibold text-white">{PERSON.university}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="order-2 text-center lg:order-1 lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="mb-3 flex items-center justify-center gap-2 sm:mb-4 lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="status-dot" />
            <span className="hud-badge rounded px-2.5 py-1 sm:px-3 sm:py-1.5">System Online</span>
          </motion.div>

          <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-400/80 uppercase sm:text-xs sm:tracking-[0.3em]">
            IT Undergraduate · Data Science
          </p>

          <h1 className="mt-2 font-display text-[1.75rem] font-bold leading-tight tracking-wide text-white sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <br />
            <span className="gradient-text break-words drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">
              {PERSON.name}
            </span>
          </h1>

          <div className="mt-3 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 font-mono text-sm text-slate-300 sm:mt-4 sm:gap-2 sm:text-base md:text-lg lg:justify-start">
            <span className="shrink-0 text-purple-400">&gt;</span>
            <TypeAnimation
              sequence={PERSON.typingRoles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="gradient-text text-left font-semibold"
            />
            <motion.span
              className="inline-block h-4 w-0.5 shrink-0 bg-cyan-400 sm:h-5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>

          <motion.p
            className="mx-auto mt-5 max-w-xl border-l-0 pl-0 text-sm leading-relaxed text-slate-400 sm:text-base md:mt-6 md:border-l-2 md:border-cyan-500/30 md:pl-4 md:text-lg lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A motivated IT undergraduate passionate about developing intelligent solutions
            using programming, machine learning, and data analysis technologies.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/resume.pdf"
              download
              className="btn-cyber touch-target group relative flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-medium text-white sm:w-auto sm:py-3"
            >
              <FaDownload className="relative z-10 shrink-0" />
              <span className="relative z-10">Download Resume</span>
            </a>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-ghost-cyber touch-target w-full rounded-lg px-6 py-3.5 font-medium text-cyan-100 sm:w-auto sm:py-3"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
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
                className="neo-card touch-target flex h-12 w-12 items-center justify-center rounded-lg text-cyan-300/80"
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
        className="safe-bottom absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0.5 font-mono text-[10px] tracking-widest text-cyan-500/60 uppercase sm:bottom-8"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <span>Scroll</span>
        <HiArrowDown size={22} className="text-cyan-400/80" />
      </motion.button>
    </section>
  )
}
