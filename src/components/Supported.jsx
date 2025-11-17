import React from 'react'
import { motion } from 'framer-motion'

const portals = ['Naukri', 'Indeed', 'Foundit', 'Google Jobs', 'CutShort', 'Wellfound', 'Internshala', 'Upwork', 'Hirect']

export default function Supported() {
  return (
    <section className="relative w-full bg-[#0A0F1C] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white">
          Supported Portals
        </motion.h2>

        <div className="mt-8 overflow-hidden">
          <div className="flex animate-[slide_25s_linear_infinite] gap-8 whitespace-nowrap [--tw:translateX(0)]">
            {portals.concat(portals).map((p, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 backdrop-blur">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes slide{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  )
}
