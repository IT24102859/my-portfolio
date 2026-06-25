import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SkillBar({ name, icon: Icon, index = 0, compact = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className={`neo-card rounded-lg ${compact ? 'p-3' : 'p-4'}`}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-cyan-500/25 bg-cyan-500/10">
            <Icon className="text-base text-[var(--accent)]" />
          </span>
        )}
        <span className={`font-medium text-[var(--text-primary)] ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}>
          {name}
        </span>
      </div>
    </motion.div>
  )
}
