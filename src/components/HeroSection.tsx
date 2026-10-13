import React, { useLayoutEffect, useRef } from 'react'
import { MessageCircle, ArrowUpRight, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mechanic #1 (Victor Furuya "hero"): a single pinned ScrollTrigger timeline that
// clip-path-reveals a background card from a custom polygon to a full rectangle,
// with a parallel overlay fade, scrubbed 1:1 across a 150vh pin.
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const whatsappBusinessUrl =
    'https://wa.me/6589953081?text=Hi%20Ewan!%20I%20would%20like%20to%20reserve%20a%20seat%20for%20the%20eightysix%20dining%20session%20(S%2498%2Fpax).'

  const handleBookClick = () => {
    if (typeof (window as any).trackWhatsAppInquiry === 'function') {
      (window as any).trackWhatsAppInquiry('hero_reservation_button')
    }
  }

  useLayoutEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    const overlay = overlayRef.current
    if (!section || !card || !overlay) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 851px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        card,
        { clipPath: 'polygon(12% 8%, 88% 0%, 100% 92%, 0% 100%)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }
      ).fromTo(overlay, { opacity: 0.85 }, { opacity: 0, ease: 'none' }, 0)

      return () => tl.scrollTrigger?.kill()
    })

    mm.add('(max-width: 850px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        card,
        { clipPath: 'polygon(6% 4%, 94% 0%, 100% 96%, 0% 100%)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }
      ).fromTo(overlay, { opacity: 0.7 }, { opacity: 0, ease: 'none' }, 0)

      return () => tl.scrollTrigger?.kill()
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden"
    >
      {/* Top anchor for Home nav link */}
      <div id="hero" className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

      {/* Background reveal card */}
      <div
        ref={cardRef}
        className="absolute inset-0 w-full h-full bg-neutral-900"
        style={{ clipPath: 'polygon(12% 8%, 88% 0%, 100% 92%, 0% 100%)' }}
      >
        <img
          src="/dessert-gallery/Kaya Toast v.5.png"
          alt="eightysix dessert plating"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div ref={overlayRef} className="absolute inset-0 w-full h-full bg-black" />

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-poppins font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[144px] tracking-[-0.07em] leading-none text-white select-none">
          eightysix
        </h1>

        <p className="font-lacquer text-3xl sm:text-4xl md:text-5xl text-neutral-200 mt-3 tracking-wide">
          Private Dining
        </p>

        <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-4 max-w-xl">
          A non-binary dessert session. 4 seats. 1 table. Run solo by pastry chef Ewan.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono text-neutral-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Direct Host Access: Ewan replies personally on WhatsApp within 15–30 mins.</span>
        </div>

        <a
          href={whatsappBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookClick}
          className="group mt-8 py-4 px-8 rounded-full bg-white text-black font-poppins font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-[0.99]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Reserve via WhatsApp &middot; S$98 / pax</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <span className="mt-3 font-mono text-[11px] text-neutral-400">WhatsApp Business: +65 8995 3081</span>
      </div>
    </section>
  )
}
