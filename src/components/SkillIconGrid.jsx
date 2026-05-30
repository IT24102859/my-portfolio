import { motion } from 'framer-motion'
import { SiPython, SiReact, SiDjango, SiMongodb, SiTensorflow } from 'react-icons/si'
import { FaBrain, FaChartLine, FaDatabase } from 'react-icons/fa'
import { SKILL_HIGHLIGHTS } from '../data/constants'

const ICONS = {
  python: SiPython,
  react: SiReact,
  django: SiDjango,
  mongo: SiMongodb,
  sql: FaDatabase,
  ml: SiTensorflow,
  brain: FaBrain,
  chart: FaChartLine,
}

export default function SkillIconGrid() {
  return (
    <motion.div
      className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {SKILL_HIGHLIGHTS.map((skill, i) => {
        const Icon = ICONS[skill.iconKey] || FaBrain
        return (
          <motion.div
            key={skill.name}
            className="neo-card group flex flex-col items-center gap-2 rounded-xl p-3 sm:p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -4, scale: 1.03 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent-muted)] transition group-hover:border-[var(--accent)] group-hover:shadow-[var(--glow-sm)] sm:h-12 sm:w-12">
              <Icon className="text-xl text-[var(--accent)] sm:text-2xl" />
            </div>
            <span className="text-center text-[10px] font-medium text-[var(--text-muted)] sm:text-xs">
              {skill.name}
            </span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
