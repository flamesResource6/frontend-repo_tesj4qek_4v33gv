import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: '$19', features: ['Daily Job Scan', 'ATS Score', 'Telegram Alerts'] },
  { name: 'Pro', price: '$49', features: ['All Starter', 'Resume Rewrite', 'Auto Apply (10/day)'] },
  { name: 'Ultimate', price: '$99', features: ['All Pro', 'Auto Apply (Unlimited)', 'Google Sheet Log'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-3xl md:text-5xl font-semibold text-white">Pricing</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:bg-white/15 hover:-translate-y-1 transition-transform">
              <div className="text-white text-2xl font-semibold">{p.name}</div>
              <div className="mt-2 text-4xl font-bold text-[#1A73E8]">{p.price}</div>
              <ul className="mt-4 space-y-2 text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00D1FF]">•</span> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">Choose</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
