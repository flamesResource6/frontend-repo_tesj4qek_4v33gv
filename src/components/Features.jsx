import React from 'react'
import { motion } from 'framer-motion'
import { Search, BarChart3, FileText, Send, MessageSquare, Sheet } from 'lucide-react'

const features = [
  { icon: Search, title: 'Job Discovery', desc: 'Continuously scrapes top job boards to surface high-match roles.' },
  { icon: BarChart3, title: 'ATS Scoring & Keyword Mapping', desc: 'Calculates match score and maps missing keywords instantly.' },
  { icon: FileText, title: 'Resume Rewriting', desc: 'Auto-rewrites your resume for each role with role-specific emphasis.' },
  { icon: Send, title: 'Automatic Applying', desc: 'Auto-fills forms and submits tailored applications at scale.' },
  { icon: MessageSquare, title: 'Telegram Alerts', desc: 'Get instant updates, approvals, and status in your DM.' },
  { icon: Sheet, title: 'Google Sheet Logging', desc: 'Every action is logged for transparency and tracking.' },
]

export default function Features() {
  return (
    <section className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white">
          A Job Search Agent That Never Sleeps
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/[0.14] transition">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon className="h-6 w-6 text-[#00D1FF]" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
