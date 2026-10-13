import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ManifestoSection } from '@/components/ManifestoSection'
import { SliderSection } from '@/components/SliderSection'
import { SpotlightSection } from '@/components/SpotlightSection'
import { ValuesSection } from '@/components/ValuesSection'
import { FooterOpenPeeps } from '@/components/FooterOpenPeeps'
import { TermsModal } from '@/components/TermsModal'
import { EmailLink } from '@/components/EmailLink'
import { ArrowUp, Instagram } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  // Route-based direct deep-linking on initial load
  useEffect(() => {
    const handleInitialRoute = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '')
      let targetId = ''

      if (path === '/experience') {
        targetId = 'local-menu'
      } else if (path === '/reservations' || path === '/reservation') {
        targetId = 'reservation'
      } else if (path === '/story') {
        targetId = 'story'
      } else if (path === '/contact') {
        targetId = 'contact'
      }

      if (targetId) {
        setTimeout(() => {
          const lenis = (window as any).lenis
          const el = document.getElementById(targetId)
          if (el) {
            if (lenis) {
              lenis.scrollTo(el, { offset: -80, duration: 1.2 })
            } else {
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }, 300)
      }
    }

    handleInitialRoute()
  }, [])

  // Mechanic #7: footer handoff — short trigger that fades the footer in as
  // the values section scrolls out.
  useLayoutEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    gsap.set(footer, { opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: '#values',
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: 0.3,
      onUpdate: (self) => {
        gsap.set(footer, { opacity: self.progress })
      },
    })

    return () => trigger.kill()
  }, [])

  const scrollToTop = () => {
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (window.history.pushState) {
      window.history.pushState(null, '', '/')
    }
  }

  return (
    <div className="min-h-screen w-full bg-black text-white font-mono selection:bg-white selection:text-black overflow-x-hidden">
      {/* Global Inertia Smooth Scroll Engine */}
      <SmoothScroll />

      {/* Top Fixed Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Section 1: Hero — pinned clip-path reveal (GSAP ScrollTrigger mechanic #1) */}
        <HeroSection />

        {/* Section 2: Manifesto — pinned word-reveal slides (mechanic #2) */}
        <ManifestoSection />

        {/* Section 3: The Local Menu slider — pinned horizontal deck + outro (mechanics #3/#4) */}
        <SliderSection />

        {/* Section 4: Spotlight — one-shot onEnter reveal (mechanic #5) */}
        <SpotlightSection />

        {/* Section 5: The Facts — progress-driven highlight list (mechanic #6) */}
        <ValuesSection />
      </main>

      {/* Global Minimalist Editorial Footer */}
      <footer
        id="contact"
        ref={footerRef}
        className="w-full border-t border-white/10 bg-neutral-950 pt-8 pb-28 sm:pb-16 px-6 font-mono text-xs overflow-hidden"
      >
        {/* 1 row of half body open peeps at the footer - end to end screen width */}
        <FooterOpenPeeps />

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/media_1788077084539.png"
                alt="86 mark"
                className="w-6 h-6 object-contain filter invert"
              />
              <span className="font-poppins font-black text-lg text-white">
                eightysix <span className="text-neutral-400 text-xs font-mono font-normal tracking-normal ml-0.5">/ dining</span>
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm text-[11px] leading-relaxed">
              A private in-home seven-course plated dessert omakase run solo by pastry artisan Shazwan (Ewan) Sapari.
              Yishun St 11 Block 162, Singapore 760162.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
                Sessions
              </span>
              <p className="text-neutral-300">Mon – Sat</p>
              <p className="text-neutral-400 text-[11px]">4:00 PM – 6:30 PM</p>
              <p className="text-neutral-400 text-[11px]">7:30 PM – 9:30 PM</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
                Direct Contact
              </span>
              <a
                href="https://wa.me/6589953081"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white block transition-colors font-medium"
              >
                +65 8995 3081 (Bookings)
              </a>
              <div className="pt-1">
                <EmailLink email="reservations@eightysixdining.com" showActions={false} className="text-neutral-400 hover:text-white text-[11px]" />
              </div>
              <div>
                <EmailLink email="contact@eightysixdining.com" showActions={false} className="text-neutral-400 hover:text-white text-[11px]" />
              </div>
              <a
                href="https://instagram.com/eightysix_dining"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center gap-1 text-[11px] transition-colors pt-1"
              >
                <Instagram className="w-3 h-3" />
                <span>@eightysix_dining</span>
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
                Legal &amp; Policy
              </span>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-neutral-300 hover:text-white block underline text-[11px] transition-colors text-left cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <a
                href="/privacy-policy.html"
                className="text-neutral-400 hover:text-white block underline text-[11px] transition-colors"
              >
                Privacy Policy (PDPA)
              </a>
              <p className="text-neutral-500 text-[10px]">Private Dining License SG</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} eightysix dining · eightysixdining.com. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Global Terms Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  )
}
