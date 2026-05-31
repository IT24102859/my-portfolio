import { motion } from 'framer-motion'
import { FaSearch, FaLaptopCode, FaRocket } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const timeline = [
  {
    icon: FaSearch,
    title: 'Internship Seeking',
    period: 'Present',
    status: 'Active',
    description:
      'Actively seeking internship opportunities in AI/ML, software engineering, and full-stack development to gain hands-on industry experience.',
  },
  {
    icon: FaLaptopCode,
    title: 'Practical Project Experience',
    period: '2025 – 2026',
    status: 'Projects',
    description:
      'Built real-world systems including an AI-based hostel management platform, stock management system, and ML sales forecasting model through academic projects.',
  },
  {
    icon: FaRocket,
    title: 'Industry Exposure Goals',
    period: 'Future',
    status: 'Goals',
    description:
      'Eager to collaborate with professionals, contribute to production-grade applications, and deepen expertise in intelligent systems and scalable software.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function TimelineCard({ item, align = 'left' }) {
  return (
    <motion.article
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative ${align === 'right' ? 'md:text-right' : ''}`}
    >
      <div className="gradient-border overflow-hidden rounded-2xl">
        <div className="glass-card relative rounded-2xl p-5 sm:p-7">
          <div
            className={`pointer-events-none absolute -top-20 h-40 w-40 rounded-full bg-[var(--accent)]/10  ${
              align === 'right' ? 'left-0' : 'right-0'
            }`}
            aria-hidden
          />
          <div
            className={`mb-4 flex flex-wrap items-center gap-2 ${
              align === 'right' ? 'md:justify-end' : ''
            }`}
          >
            <span className="rounded-full border border-[var(--border-strong)] bg-[var(--accent-muted)] px-3 py-1 font-mono text-[10px] font-medium tracking-wider text-[var(--accent)] uppercase sm:text-xs">
              {item.period}
            </span>
            <span className="rounded-full bg-[var(--accent-secondary)]/15 px-2.5 py-0.5 text-[10px] font-medium text-[var(--accent-secondary)]">
              {item.status}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {item.description}
          </p>
          <div
            className={`mt-5 h-px w-full bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
              align === 'right' ? 'md:bg-gradient-to-l' : ''
            }`}
          />
        </div>
      </div>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad section-radial relative overflow-hidden py-20 sm:py-24 md:px-8 md:py-28 lg:px-12"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-secondary)]/5 "
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Experience"
          title="My Journey"
          subtitle="Academic projects, practical development, and readiness for industry internships."
        />

        {/* Mobile & tablet: single-column timeline */}
        <div className="relative md:hidden">
          <div
            className="absolute top-2 bottom-2 left-5 w-0.5 rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent shadow-[var(--glow-sm)]"
            aria-hidden
          />
          <ul className="space-y-8 sm:space-y-10">
            {timeline.map((item, i) => (
              <li key={item.title} className="relative pl-14">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                  className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-[var(--glow-sm)]"
                >
                  <item.icon className="text-sm" />
                </motion.div>
                <TimelineCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: alternating timeline */}
        <div className="relative hidden md:block">
          <div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            aria-hidden
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                className={`relative mb-14 flex last:mb-0 ${isLeft ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="w-1/2" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 320, delay: i * 0.08 }}
                  className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] text-lg text-[var(--accent)] shadow-[var(--glow-active)]"
                >
                  <item.icon />
                </motion.div>
                <div className={`w-1/2 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    <motion.article
                      whileHover={{ y: -6 }}
                      className={`group ${isLeft ? 'text-right' : ''}`}
                    >
                      <div className="gradient-border overflow-hidden rounded-2xl">
                        <div className="glass-card relative rounded-2xl p-6 lg:p-7">
                          <div
                            className={`pointer-events-none absolute -top-16 h-32 w-32 rounded-full bg-[var(--accent)]/10  ${
                              isLeft ? 'left-0' : 'right-0'
                            }`}
                          />
                          <div
                            className={`mb-4 flex flex-wrap gap-2 ${
                              isLeft ? 'justify-end' : ''
                            }`}
                          >
                            <span className="rounded-full border border-[var(--border-strong)] bg-[var(--accent-muted)] px-3 py-1 font-mono text-xs text-[var(--accent)]">
                              {item.period}
                            </span>
                            <span className="rounded-full bg-[var(--accent-secondary)]/15 px-2.5 py-0.5 text-xs text-[var(--accent-secondary)]">
                              {item.status}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h3>
                          <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
