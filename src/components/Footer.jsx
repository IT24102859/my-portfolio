import { PERSON } from '../data/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-pad safe-bottom relative border-t border-cyan-500/10 py-8 md:px-8">
      <div className="neon-line absolute top-0 left-1/2 w-48 -translate-x-1/2 opacity-50" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
        <p className="font-mono text-slate-500">
          © {year}{' '}
          <span className="font-display font-semibold text-cyan-100/90">{PERSON.name}</span>
          <span className="text-purple-500/80"> // </span>
          <span className="text-slate-600">all_rights_reserved</span>
        </p>
        <p className="gradient-text font-mono text-xs tracking-wider">
          REACT · TAILWIND · FRAMER MOTION
        </p>
      </div>
    </footer>
  )
}
