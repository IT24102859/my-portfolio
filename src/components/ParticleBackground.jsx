import { useMemo } from 'react'
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery'

function getParticleOptions(isMobile, reducedMotion) {
  if (reducedMotion) {
    return {
      fullScreen: { enable: false },
      particles: { number: { value: 0 } },
    }
  }

  return {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 45 : 60,
    particles: {
      number: {
        value: isMobile ? 35 : 90,
        density: { enable: true, width: 1200, height: 800 },
      },
      color: { value: ['#00d4ff', '#b026ff', '#00fff0', '#ff00aa'] },
      opacity: { value: { min: 0.15, max: isMobile ? 0.4 : 0.55 } },
      size: { value: { min: 1, max: isMobile ? 2 : 2.5 } },
      links: {
        enable: !isMobile,
        distance: 130,
        color: '#00d4ff',
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.6 : 1.2,
        direction: 'none',
        random: true,
        outModes: { default: 'bounce' },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5, color: '#00fff0' } },
      },
    },
    detectRetina: true,
  }
}

function ParticleCanvas() {
  const { loaded } = useParticlesProvider()
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const options = useMemo(
    () => getParticleOptions(isMobile, reducedMotion),
    [isMobile, reducedMotion],
  )

  if (!loaded || reducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  )
}

export default function ParticleBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <ParticleCanvas />
    </ParticlesProvider>
  )
}
