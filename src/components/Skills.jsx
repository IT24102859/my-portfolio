import { motion } from 'framer-motion'
import {
  SiPython,
  SiReact,
  SiDjango,
  SiMongodb,
  SiPostman,
  SiJavascript,
} from 'react-icons/si'
import {
  FaJava,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCode,
  FaServer,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import SkillBar from './SkillBar'
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../data/constants'

const iconMap = {
  Python: SiPython,
  Java: FaJava,
  React: SiReact,
  Django: SiDjango,
  'MERN Stack': SiJavascript,
  'Machine Learning': FaBrain,
  'Artificial Intelligence': FaBrain,
  'SQL Server': FaDatabase,
  MongoDB: SiMongodb,
  'Data Analysis': FaChartLine,
  'Web Development': FaCode,
  'Database Management': FaServer,
  'API Testing (Postman)': SiPostman,
  'Problem Solving': FaLightbulb,
  'Team Collaboration': FaUsers,
  Communication: FaComments,
  'Critical Thinking': FaBrain,
  'Time Management': FaClock,
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Skills"
          title="Technical Expertise"
          subtitle="Tools and technologies I use to build intelligent, data-driven applications."
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold tracking-wide text-white">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d4ff]" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {TECHNICAL_SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={iconMap[skill.name] || FaCode}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold tracking-wide text-white">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_#b026ff]" />
              Soft Skills
            </h3>
            <div className="space-y-4">
              {SOFT_SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={iconMap[skill.name]}
                  index={i}
                  compact
                />
              ))}
            </div>

            <motion.div
              className="neo-card gradient-border mt-8 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-cyan-100">Core Focus Areas</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00d4ff]" />
                  AI & Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#b026ff]" />
                  Full-Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00fff0] shadow-[0_0_6px_#00fff0]" />
                  Data Analysis & Databases
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
