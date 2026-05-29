import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      className="mb-8 text-center sm:mb-12 md:mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      {tag && <span className="section-tag mb-3 inline-block sm:mb-4">{tag}</span>}
      <h2 className="font-display text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl px-2 font-mono text-xs leading-relaxed text-slate-500 sm:mt-4 sm:text-sm">
          {subtitle}
        </p>
      )}
      <div className="neon-line mx-auto mt-6 w-24 sm:mt-8 sm:w-32" />
    </motion.div>
  )
}
