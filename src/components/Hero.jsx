import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const particlesCount = 60

function useMouseParallax(strength = 20) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const handle = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth
      const y = (e.clientY - innerHeight / 2) / innerHeight
      node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [strength])
  return ref
}

function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const nodes = Array.from({ length: particlesCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // glow bg
      const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 1.2)
      gradient.addColorStop(0, 'rgba(0,209,255,0.06)')
      gradient.addColorStop(1, 'rgba(10,15,28,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      // nodes
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.5)'
        ctx.fill()
      })

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,209,255,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(draw)
    }

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        w = canvas.width = window.innerWidth
        h = canvas.height = window.innerHeight
      }, 150)
    }

    draw()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  const layerBot = useMouseParallax(12)
  const layerCards = useMouseParallax(18)
  const layerResume = useMouseParallax(24)

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-[#0A0F1C]">
      {/* Background gradient + particles */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_70%_-10%,rgba(0,209,255,0.25),transparent),radial-gradient(800px_500px_at_10%_10%,rgba(122,86,217,0.25),transparent)]" />
      <Particles />

      {/* Spline 3D bot layer */}
      <div ref={layerBot} className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-28 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D1FF] shadow-[0_0_12px_#00D1FF]" />
          Autonomous AI + Automations
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,209,255,0.15)] max-w-4xl">
          🚀 Let an Autonomous AI Bot Hunt & Apply for Jobs While You Chill
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-white/70">
          AI agent that auto-searches jobs, rewrites your resume for ATS, applies, tracks submissions, and alerts you via Telegram.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex flex-wrap gap-4">
          <a href="#pricing" className="rounded-full bg-[#1A73E8] px-6 py-3 text-white shadow-lg shadow-[#1A73E8]/30 transition hover:-translate-y-0.5 hover:shadow-[#1A73E8]/50">
            🔵 Start Automation
          </a>
          <a href="#demo" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/20">
            ⚪ Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Floating UI cards and resume layers */}
      <div ref={layerCards} className="pointer-events-none absolute inset-0">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="absolute left-10 top-40 hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <div className="text-xs text-white/60">Job Found</div>
            <div className="text-white font-semibold">Product Designer — Remote</div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="text-[#00D1FF]">ATS: 92%</span>
              <span className="text-white/60">Applied</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="absolute right-6 bottom-24 hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
            <div className="text-xs text-white/60">Resume</div>
            <div className="text-white">Custom AI Version Sent</div>
          </div>
        </motion.div>
      </div>

      <div ref={layerResume} className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-white/80 backdrop-blur-xl">
            "Stop applying manually. Let AI find, score, rewrite, and auto-apply to high-match jobs for you."
          </div>
        </motion.div>
      </div>

      {/* subtle bottom gradient to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
    </section>
  )
}
