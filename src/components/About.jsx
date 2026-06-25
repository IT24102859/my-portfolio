import { motion } from 'framer-motion'
import { FaGraduationCap, FaBrain, FaBullseye, FaCode } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { PERSON } from '../data/constants'

const cards = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    content: `BSc in Information Technology (Data Science) at ${PERSON.university}. Strong foundation in statistics, programming, databases, and software engineering.`,
  },
  {
    icon: FaBrain,
    title: 'AI & Machine Learning',
    content:
      'Passionate about building intelligent systems - from recommendation engines and forecasting models to data-driven decision support tools.',
  },
  {
    icon: FaCode,
    title: 'Engineering',
    content:
      'Experienced in full-stack development with React, Django, MERN, and SQL Server. Focus on clean architecture, APIs, and production-ready code.',
  },
  {
    icon: FaBullseye,
    title: 'Career Goals',
    content:
      'Seeking a Data Science Intern opportunity to apply academic knowledge, collaborate with industry teams, and grow through real-world analytics and AI projects.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="About Me"
          title="AI/ML Engineer in Training"
          subtitle="Turning data and code into intelligent, scalable solutions."
        />

        <motion.div
          className="neo-card gradient-border mb-10 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I&apos;m <strong className="text-[var(--text-primary)]">{PERSON.name}</strong>, a
            motivated Data Science undergraduate with a strong passion for artificial intelligence,
            machine learning, data analytics, and modern software technologies. Through academic
            learning and hands-on projects, I&apos;ve built strong analytical thinking,
            problem-solving skills, and practical experience in creating intelligent, data-driven
            solutions for real-world challenges.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="neo-card gradient-border rounded-xl p-5 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <card.icon className="mb-4 text-2xl text-[var(--accent)]" />
              <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {card.content}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
