import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { PERSON } from '../data/constants'

const initialForm = { name: '', email: '', subject: '', message: '' }

const inputClass =
  'w-full rounded-xl border border-slate-500/40 bg-slate-900/80 px-4 py-3.5 text-base text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) {
      next.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email'
    }
    if (!form.subject.trim()) next.subject = 'Subject is required'
    if (!form.message.trim()) next.message = 'Message is required'
    else if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: PERSON.email,
        },
        publicKey,
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section-pad section-radial relative py-20 sm:py-24 md:px-8 md:py-28 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Contact"
          title="Get In Touch"
          subtitle="Have a project, internship opportunity, or collaboration in mind? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            className="space-y-4 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaEnvelope, label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
              { icon: FaPhone, label: 'Phone', value: PERSON.phone, href: `tel:${PERSON.phone}` },
              { icon: FaMapMarkerAlt, label: 'Location', value: PERSON.location },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-500/30 bg-slate-800 p-5 shadow-lg shadow-black/25"
              >
                <item.icon className="mt-0.5 shrink-0 text-xl text-sky-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-all text-base font-medium text-slate-50 hover:text-sky-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-medium text-slate-50">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: FaGithub, href: PERSON.github, label: 'GitHub' },
                { icon: FaLinkedin, href: PERSON.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: `mailto:${PERSON.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500/30 bg-slate-800 text-sky-300 transition hover:border-sky-400/50 hover:text-sky-200 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-500/30 bg-slate-800 p-6 shadow-xl shadow-black/30 lg:col-span-3 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@email.com"
                />
                {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                placeholder="Project inquiry"
              />
              {errors.subject && <p className="mt-1.5 text-sm text-red-400">{errors.subject}</p>}
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-cyber touch-target relative mt-6 w-full rounded-xl py-3.5 text-base font-semibold text-white disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-3 text-sm font-medium text-emerald-400">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">
                Failed to send. Please email directly at {PERSON.email}
              </p>
            )}
            {status === 'mailto' && (
              <p className="mt-3 text-sm text-amber-300">
                EmailJS not configured — opening your email client instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
