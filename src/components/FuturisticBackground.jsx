import { motion } from 'framer-motion'

const orbs = [
  { color: 'rgba(0, 212, 255, 0.35)', size: 400, x: '10%', y: '15%', duration: 18 },
  { color: 'rgba(176, 38, 255, 0.3)', size: 350, x: '75%', y: '25%', duration: 22 },
  { color: 'rgba(0, 255, 240, 0.2)', size: 280, x: '50%', y: '70%', duration: 16 },
  { color: 'rgba(255, 0, 170, 0.15)', size: 220, x: '85%', y: '65%', duration: 20 },
]

export default function FuturisticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="cyber-horizon" />
      <div className="perspective-grid" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <svg
        className="absolute inset-0 hidden h-full w-full opacity-[0.07] sm:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z"
              fill="none"
              stroke="rgba(0,212,255,0.5)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  )
}
