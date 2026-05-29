import { motion } from 'framer-motion'
import { FaBrain, FaGlobe, FaLayerGroup, FaDatabase, FaChartBar } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { SERVICES } from '../data/constants'

const iconComponents = {
  brain: FaBrain,
  web: FaGlobe,
  stack: FaLayerGroup,
  database: FaDatabase,
  chart: FaChartBar,
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Services"
          title="What I Offer"
          subtitle="Solutions I can help build for teams, startups, and academic collaborations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconComponents[service.icon]
            return (
              <motion.article
                key={service.title}
                className="neo-card group gradient-border rounded-xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="mb-4 inline-flex rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-2xl text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.15)] transition group-hover:border-purple-500/40 group-hover:text-purple-400">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
