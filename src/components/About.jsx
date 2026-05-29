import { motion } from 'framer-motion'
import { FaGraduationCap, FaBrain, FaBullseye, FaUsers } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { PERSON } from '../data/constants'

const cards = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    content: `Currently pursuing an undergraduate degree in Information Technology specializing in Data Science at ${PERSON.university}.`,
    color: 'blue',
  },
  {
    icon: FaBrain,
    title: 'Passion for AI & ML',
    content:
      'Deeply interested in Artificial Intelligence, Machine Learning, and building intelligent systems that solve real-world problems through data and automation.',
    color: 'purple',
  },
  {
    icon: FaBullseye,
    title: 'Career Objective',
    content:
      'Seeking internship opportunities to apply academic knowledge in industry settings, contribute to AI/ML and software engineering teams, and grow as a technology professional.',
    color: 'cyan',
  },
  {
    icon: FaUsers,
    title: 'Personal Strengths',
    content:
      'Strong problem-solving and analytical thinking skills, effective teamwork and communication, and adaptability when learning new technologies and tackling complex challenges.',
    color: 'pink',
  },
]

const iconColors = {
  blue: 'text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.3)]',
  purple: 'text-purple-400 shadow-[0_0_20px_rgba(176,38,255,0.3)]',
  cyan: 'text-[#00fff0] shadow-[0_0_20px_rgba(0,255,240,0.3)]',
  pink: 'text-pink-400 shadow-[0_0_20px_rgba(255,0,170,0.3)]',
}

export default function About() {
  return (
    <section id="about" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="About Me"
          title="Who I Am"
          subtitle="An aspiring technologist driven by curiosity, code, and intelligent systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="neo-card gradient-border group rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <card.icon className={`mb-4 text-2xl ${iconColors[card.color]}`} />
              <h3 className="font-display text-lg font-semibold tracking-wide text-cyan-50">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">{card.content}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="neo-card gradient-border mt-10 rounded-xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
            I combine{' '}
            <span className="font-semibold text-cyan-400">software engineering</span>,{' '}
            <span className="font-semibold text-purple-400">data science</span>, and{' '}
            <span className="font-semibold text-[#00fff0]">full-stack development</span>{' '}
            to create solutions that are scalable, intelligent, and user-focused.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
