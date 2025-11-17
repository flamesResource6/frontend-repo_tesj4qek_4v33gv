import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '1️⃣', t: 'Upload Your Resume' },
  { n: '2️⃣', t: 'AI Hunts Jobs Daily' },
  { n: '3️⃣', t: 'ATS Score + Tailored Resume + Auto Apply' },
  { n: '4️⃣', t: 'Telegram Updates + Google Sheets Tracking' },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white">
          How It Works
        </motion.h2>

        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-[800px] gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-1 rounded-2xl border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur-xl">
                <div className="text-2xl">{s.n}</div>
                <div className="mt-2 text-lg text-white">{s.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
