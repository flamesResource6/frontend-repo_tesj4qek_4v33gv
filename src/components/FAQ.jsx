import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'How does the bot find jobs?', a: 'It continuously scrapes supported portals and filters by your preferences.' },
  { q: 'What about ATS optimization?', a: 'We score job descriptions, map keywords, and rewrite your resume per role.' },
  { q: 'Is auto-apply safe?', a: 'Yes. We simulate human-like behavior with delays and validations.' },
  { q: 'How do I get updates?', a: 'You receive Telegram alerts and a Google Sheet log of every action.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="relative w-full bg-[#0A0F1C] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-3xl md:text-5xl font-semibold text-white">FAQ</motion.h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
              <button onClick={() => setOpen(open===i?null:i)} className="flex w-full items-center justify-between px-4 py-4 text-left text-white">
                <span>{f.q}</span>
                <span className="text-[#00D1FF]">{open===i?'-':'+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open===i && (
                  <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} transition={{duration:0.3}} className="px-4 pb-4 text-white/80">
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
