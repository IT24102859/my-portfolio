import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      className="mb-10 text-center sm:mb-12 md:mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      {tag && <span className="section-tag mb-4 inline-block sm:mb-5">{tag}</span>}
      <h2 className="section-title font-display text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="neon-line mx-auto mt-8 w-32 sm:w-40" />
    </motion.div>
  )
}
