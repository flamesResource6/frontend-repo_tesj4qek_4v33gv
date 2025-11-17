import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Supported from './components/Supported'
import Demo from './components/Demo'
import Personas from './components/Personas'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="w-full bg-[#0A0F1C] py-10 text-center text-white/60">
      © 2025 Autonomous Job Hunter Bot — Powered by AI & Automation
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0F1C] text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Supported />
      <Demo />
      <Personas />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
