import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function SkillBar({
  name,
  level,
  icon: Icon,
  index = 0,
  compact = false,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const [count, setCount] = useState(0)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const delay = index * 0.07

    const countAnim = animate(0, level, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })

    const fillTimer = setTimeout(() => setFilled(true), delay * 1000 + 1200)

    return () => {
      countAnim.stop()
      clearTimeout(fillTimer)
    }
  }, [isInView, level, index])

  return (
    <motion.div
      ref={ref}
      className={`neo-card rounded-lg ${compact ? 'p-3' : 'p-4'}`}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          {Icon && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-cyan-500/25 bg-cyan-500/10">
              <Icon className="text-base text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.6)]" />
            </span>
          )}
          <span className={`min-w-0 flex-1 truncate font-medium text-slate-200 ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}>
            {name}
          </span>
        </div>
        <motion.span
          className="font-mono text-sm tabular-nums text-purple-400"
          animate={filled ? { color: '#00fff0' } : {}}
          transition={{ duration: 0.3 }}
        >
          {count}%
        </motion.span>
      </div>

      <div className="skill-bar-track">
        <div className="skill-bar-ticks" aria-hidden>
          {[25, 50, 75].map((tick) => (
            <span key={tick} className="skill-bar-tick" style={{ left: `${tick}%` }} />
          ))}
        </div>

        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.4,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="skill-bar-shimmer" aria-hidden />
        </motion.div>

        <motion.span
          className="skill-bar-cap"
          initial={{ left: 0, opacity: 0 }}
          animate={
            isInView
              ? { left: `calc(${level}% - 4px)`, opacity: 1 }
              : { left: 0, opacity: 0 }
          }
          transition={{
            duration: 1.4,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden
        />
      </div>
    </motion.div>
  )
}
