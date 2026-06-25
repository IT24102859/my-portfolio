import { motion } from 'framer-motion'
import {
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTensorflow,
} from 'react-icons/si'
import {
  FaBrain,
  FaBug,
  FaChartLine,
  FaClock,
  FaCode,
  FaComments,
  FaDatabase,
  FaJava,
  FaLightbulb,
  FaProjectDiagram,
  FaServer,
  FaTools,
  FaUsers,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const featuredSkills = [
  { name: 'Python', icon: SiPython },
  { name: 'React', icon: SiReact },
  { name: 'Django', icon: SiDjango },
  { name: 'Machine Learning', icon: FaBrain },
  { name: 'SQL', icon: FaDatabase },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'QA Testing', icon: FaBug },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    accent: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Full-Stack Development',
    icon: FaServer,
    accent: 'from-sky-400 to-violet-500',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Django', icon: SiDjango },
      { name: 'MERN Stack', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: FaBrain,
    accent: 'from-cyan-300 to-purple-500',
    skills: [
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Artificial Intelligence', icon: SiTensorflow },
      { name: 'Data Analysis', icon: FaChartLine },
      { name: 'Forecasting Models', icon: FaProjectDiagram },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    accent: 'from-blue-400 to-cyan-500',
    skills: [
      { name: 'SQL Server', icon: FaDatabase },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Database Design', icon: FaServer },
    ],
  },
  {
    title: 'QA & Testing',
    icon: FaBug,
    accent: 'from-violet-400 to-fuchsia-500',
    skills: [
      { name: 'API Testing', icon: SiPostman },
      { name: 'Postman', icon: SiPostman },
      { name: 'Debugging', icon: FaBug },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    accent: 'from-cyan-400 to-indigo-500',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Web Development', icon: FaCode },
    ],
  },
  {
    title: 'Soft Skills',
    icon: FaUsers,
    accent: 'from-blue-300 to-purple-400',
    skills: [
      { name: 'Problem Solving', icon: FaLightbulb },
      { name: 'Team Collaboration', icon: FaUsers },
      { name: 'Communication', icon: FaComments },
      { name: 'Time Management', icon: FaClock },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function SkillItem({ skill, index }) {
  const Icon = skill.icon || FaCode

  return (
    <motion.li
      className="flex items-center gap-3 rounded-xl border border-cyan-300/10 bg-slate-950/35 px-3 py-2.5 transition group-hover:border-cyan-300/20"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <motion.span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
        whileHover={{ rotate: -8, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      >
        <Icon className="text-sm" />
      </motion.span>
      <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
    </motion.li>
  )
}

function SkillCard({ group, index }) {
  const Icon = group.icon

  return (
    <motion.article
      variants={cardVariants}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/45 p-5 shadow-[0_18px_55px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:p-6"
    >
      <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${group.accent} opacity-15 blur-3xl transition group-hover:opacity-25`} />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] via-transparent to-purple-500/[0.04]" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br ${group.accent} text-white shadow-[0_0_28px_rgba(56,189,248,0.22)]`}
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <Icon className="text-xl" />
            </motion.div>
            <h3 className="font-display text-base font-semibold leading-tight text-[var(--text-primary)] sm:text-lg">
              {group.title}
            </h3>
          </div>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] text-cyan-200">
            {group.skills.length} skills
          </span>
        </div>

        <ul className="space-y-3">
          {group.skills.map((skill, skillIndex) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={skillIndex}
            />
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading
          tag="Skills"
          title="Technical Expertise"
          subtitle="A recruiter-friendly snapshot of my programming, AI, full-stack, database, testing, and collaboration strengths."
        />

        <motion.div
          className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuredSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-300/15 bg-slate-950/40 p-4 text-center shadow-[0_14px_40px_rgba(2,6,23,0.3)] backdrop-blur-xl"
              >
                <motion.span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition group-hover:border-cyan-300/45 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                  whileHover={{ rotate: -8 }}
                >
                  <Icon className="text-xl" />
                </motion.span>
                <span className="text-xs font-semibold leading-snug text-[var(--text-secondary)]">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
