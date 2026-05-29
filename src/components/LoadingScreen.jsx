import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const bootLines = [
  'INITIALIZING NEURAL INTERFACE...',
  'LOADING AI/ML MODULES...',
  'CONNECTING DATA STREAMS...',
  'PORTFOLIO SYSTEM READY.',
]

export default function LoadingScreen({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, bootLines.length - 1))
    }, 400)
    const doneTimer = setTimeout(onComplete, 2200)
    return () => {
      clearInterval(lineTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030308]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="scanlines absolute inset-0 opacity-60" aria-hidden />
      <div className="mesh-bg absolute inset-0" aria-hidden />

      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="profile-ring" style={{ inset: '-16px' }} />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-500/30 bg-black/50 font-display text-2xl font-bold gradient-text shadow-[0_0_40px_rgba(0,212,255,0.3)]">
          AD
        </div>
      </motion.div>

      <div className="mt-8 w-72 font-mono text-xs">
        {bootLines.map((line, i) => (
          <motion.p
            key={line}
            className={`mb-1 ${i <= lineIndex ? 'text-cyan-400/90' : 'text-transparent'}`}
            initial={{ opacity: 0, x: -10 }}
            animate={i <= lineIndex ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-purple-500">&gt;</span> {line}
          </motion.p>
        ))}
      </div>

      <div className="mt-6 h-1 w-64 overflow-hidden rounded-full border border-cyan-500/20 bg-black/50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(0,212,255,0.8)]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
