import React from 'react'
import { motion } from 'framer-motion'

const personas = [
  'UI/UX & Product Designers',
  'Developers & Tech Candidates',
  'Remote Job Seekers',
  'Freelancers & Upworkers',
  'Students & Freshers',
]

export default function Personas() {
  return (
    <section className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-3xl md:text-5xl font-semibold text-white">Ideal For</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {personas.map((p, i) => (
            <motion.div key={p} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 backdrop-blur-xl">
              <span className="text-2xl">✔</span>
              <span>{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
