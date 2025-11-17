import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-3xl md:text-5xl font-semibold text-white">Activate My Job Bot</motion.h2>
        <form className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input placeholder="Name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur" />
          <input placeholder="Email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur" />
          <input placeholder="Resume Link" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur md:col-span-2" />
          <input placeholder="Job Role" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur md:col-span-2" />
          <button className="mt-2 w-full rounded-full bg-[#1A73E8] px-6 py-3 text-white shadow-lg shadow-[#1A73E8]/30 hover:shadow-[#1A73E8]/50 md:col-span-2">🚀 Activate My Job Bot</button>
        </form>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
    </section>
  )
}
