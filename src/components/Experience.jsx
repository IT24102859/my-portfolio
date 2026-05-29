import { motion } from 'framer-motion'
import { FaSearch, FaLaptopCode, FaRocket } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const timeline = [
  {
    icon: FaSearch,
    title: 'Internship Seeking',
    period: 'Present',
    description:
      'Actively seeking internship opportunities in AI/ML, software engineering, and full-stack development to gain hands-on industry experience.',
  },
  {
    icon: FaLaptopCode,
    title: 'Practical Project Experience',
    period: '2025 – 2026',
    description:
      'Built real-world systems including an AI-based hostel management platform, stock management system, and ML sales forecasting model through academic projects.',
  },
  {
    icon: FaRocket,
    title: 'Industry Exposure Goals',
    period: 'Future',
    description:
      'Eager to collaborate with professionals, contribute to production-grade applications, and deepen expertise in intelligent systems and scalable software.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Experience"
          title="My Journey"
          subtitle="Academic projects, practical development, and readiness for industry internships."
        />

        <div className="relative pl-1 md:pl-0">
          <div className="absolute top-0 bottom-0 left-[18px] w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className={`relative mb-8 flex flex-col last:mb-0 sm:mb-10 md:mb-12 md:flex-row ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="hidden flex-1 md:block" />
              <div className="absolute left-[18px] z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-500/50 bg-[#030308] text-sm text-cyan-400 shadow-[0_0_16px_rgba(0,212,255,0.25)] sm:h-12 sm:w-12 md:left-1/2">
                <item.icon />
              </div>
              <div
                className={`ml-12 flex-1 sm:ml-14 md:ml-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right lg:pr-12' : 'md:pl-10 lg:pl-12'}`}
              >
                <div className="neo-card rounded-xl p-4 sm:p-6">
                  <span className="font-mono text-[10px] tracking-wider text-cyan-400 sm:text-xs">
                    {item.period}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
