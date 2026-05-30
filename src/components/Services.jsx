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
    <section
      id="services"
      className="section-pad section-radial relative py-20 sm:py-24 md:px-8 md:py-28 lg:px-12"
    >
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
                className="group relative overflow-hidden rounded-2xl border border-slate-500/30 bg-slate-800 shadow-lg shadow-black/30 transition hover:border-sky-400/50 hover:shadow-[0_0_32px_rgba(56,189,248,0.2)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl transition group-hover:bg-violet-500/15" />
                <div className="relative p-6 sm:p-7">
                  <div className="mb-5 inline-flex rounded-xl border border-sky-400/40 bg-sky-500/15 p-3.5 text-2xl text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-50 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
