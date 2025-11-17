import React from 'react'
import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-3xl md:text-5xl font-semibold text-white">Demo Preview</motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur-xl">
            <div className="text-sm text-white/60">Job Found</div>
            <div className="text-white text-xl font-semibold">UI/UX Designer – Bangalore</div>
            <div className="mt-3 flex items-center gap-4">
              <span className="text-[#00D1FF]">ATS: 87%</span>
              <span className="text-white/70">Status: Applied</span>
            </div>
            <div className="mt-2 text-white/70">Resume: Custom AI Version Sent</div>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white/80 backdrop-blur-xl">
            <div className="text-white/80">Features One-Liner</div>
            <div className="mt-2 text-white">Job Scraper + ATS Analyzer + Resume Rewriter + Job Auto-Apply Engine.</div>
            <div className="mt-6 flex flex-wrap gap-2 text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">⚡ Apply 10× Faster.</span>
              <span className="rounded-full bg-white/10 px-3 py-1">🤖 Your Personal Job-Hunting Agent.</span>
              <span className="rounded-full bg-white/10 px-3 py-1">🎯 Smart Apply. Zero Effort.</span>
              <span className="rounded-full bg-white/10 px-3 py-1">🚀 Designed for UI/UX, Tech & Remote roles.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
