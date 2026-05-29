import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaRobot } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { PROJECTS, PROJECT_FILTERS } from '../data/constants'
import { useMediaQuery } from '../hooks/useMediaQuery'

function ProjectCard({ project, index, featured = false }) {
  const hasLinks = Boolean(project.github || project.demo)
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`neo-card group gradient-border flex flex-col overflow-hidden rounded-xl ${
        featured ? 'lg:col-span-2' : ''
      }`}
      whileHover={canHover ? { y: -6 } : undefined}
    >
      <div
        className={`relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-br from-cyan-600/20 via-purple-600/25 to-pink-600/10 p-4 sm:p-6 ${
          featured ? 'min-h-[140px] sm:min-h-[180px]' : 'min-h-[120px] sm:h-40'
        }`}
      >
        {featured && (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded border border-cyan-400/40 bg-cyan-500/15 px-2 py-0.5 font-mono text-[9px] tracking-wider text-cyan-300 uppercase sm:absolute sm:top-4 sm:left-4 sm:mb-0 sm:px-2.5 sm:py-1 sm:text-[10px]">
            <FaRobot className="shrink-0 text-cyan-400" />
            <span>Flagship · AI</span>
          </span>
        )}
        <span
          className={`font-mono text-[10px] text-cyan-300/90 sm:text-xs ${
            featured ? 'block sm:absolute sm:top-4 sm:right-4' : 'absolute top-3 right-3 sm:top-4 sm:right-4'
          }`}
        >
          [{project.year}]
        </span>
        <div className={`relative z-10 ${featured ? 'mt-1 sm:mt-8' : 'pr-12'}`}>
          <h3
            className={`font-display font-bold leading-snug text-white ${
              featured ? 'text-base sm:text-xl md:text-2xl' : 'text-base sm:text-lg'
            }`}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-1.5 font-mono text-[10px] text-purple-300/90 sm:mt-2 sm:text-xs">
              {project.subtitle}
            </p>
          )}
          {project.role && featured && (
            <p className="mt-1.5 text-xs text-slate-400 sm:mt-2 sm:text-sm">{project.role}</p>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/40 to-transparent opacity-80" />
      </div>

      <div className={`flex flex-1 flex-col p-4 sm:p-6 ${featured ? 'md:p-8' : ''}`}>
        <p className={`leading-relaxed text-slate-400 ${featured ? 'text-sm sm:text-base' : 'text-sm'}`}>
          {project.description}
        </p>
        <ul
          className={`mt-3 flex-1 space-y-2 sm:mt-4 ${featured ? 'md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2' : ''}`}
        >
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-xs leading-relaxed text-slate-500">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_#00d4ff]" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-cyan-500/20 bg-cyan-500/5 px-1.5 py-0.5 font-mono text-[9px] text-cyan-300/80 sm:px-2 sm:text-[10px]"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks ? (
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-cyber touch-target inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-mono text-xs tracking-wider uppercase sm:py-2"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber touch-target relative inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-mono text-xs tracking-wider text-white uppercase sm:py-2"
              >
                <FaExternalLinkAlt className="relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </a>
            )}
          </div>
        ) : (
          featured && (
            <p className="mt-4 font-mono text-[9px] tracking-wider text-slate-600 uppercase sm:mt-5 sm:text-[10px]">
              Add github & demo URLs in constants.js
            </p>
          )
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  const featured = PROJECTS.find((p) => p.featured)
  const showFeaturedBanner = filter === 'all' || filter === 'ai'

  return (
    <section id="projects" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Academic and practical projects showcasing AI, software engineering, and data science."
        />

        <div className="filter-scroll -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`touch-target shrink-0 rounded-lg px-4 py-2.5 font-mono text-[10px] tracking-wider whitespace-nowrap uppercase sm:text-xs ${
                filter === f.id
                  ? 'filter-cyber-active text-white'
                  : 'neo-card text-slate-500 active:text-cyan-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {showFeaturedBanner && featured && filter !== 'ai' && (
          <div className="mb-6 sm:mb-8">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-cyan-500/80 uppercase sm:mb-4 sm:text-xs">
              // Primary project
            </p>
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              if (showFeaturedBanner && project.featured && filter === 'all') {
                return null
              }
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  featured={project.featured && filter === 'ai'}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
