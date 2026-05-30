import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`touch-target flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition hover:border-[var(--accent)] hover:shadow-[var(--glow-sm)] ${className}`}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
    </motion.button>
  )
}
