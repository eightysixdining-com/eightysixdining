import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Reused existing dish images, plain captions only — no story copy (that's a
// future copy-pass concern, this pass is mechanics only).
const slides = [
  { id: 'prawn-cracker', number: '0', name: 'Prawn Cracker', image: '/local-menu/PRAWN CRACKER.png' },
  { id: 'doughnut', number: '0', name: 'Doughnut', image: '/local-menu/DOUGHNUT.png' },
  { id: 'cup-corn', number: '1', name: 'Cup Corn', image: '/local-menu/CUPCORN.png' },
  { id: 'kaya-toast', number: '2', name: 'Kaya Toast', image: '/local-menu/KAYA TOAST.png' },
  { id: 'houten-chilli', number: '3', name: 'Houten Chilli Tapioca', image: '/local-menu/HOUTEN CHILLI TAPIOCA.png' },
  { id: 'ice-kacang', number: '4', name: 'Ice Kacang', image: '/local-menu/ICE KACANG.png' },
  { id: 'rice-egg', number: '5', name: 'Rice & Egg', image: '/local-menu/RICE & EGG.png' },
]

export function SliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const outroRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const slider = sliderRef.current
    const track = trackRef.current
    const outro = outroRef.current
    if (!slider || !track || !outro) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 851px)', () => {
      const getMaxScroll = () => Math.max(0, track.scrollWidth - slider.clientWidth)

      const st = ScrollTrigger.create({
        trigger: slider,
        start: 'top top',
        end: () => `+=${getMaxScroll()}px`,
        pin: true,
        scrub: false,
        anticipatePin: 1,
        fastScrollEnd: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(track, { x: -self.progress * getMaxScroll() })
        },
      })

      const outroTl = gsap.timeline({
        scrollTrigger: { trigger: outro, start: 'top bottom', end: 'bottom center', scrub: 0.5 },
      })
      outroTl.fromTo(outro, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: 'none' })

      return () => {
        st.kill()
        outroTl.scrollTrigger?.kill()
      }
    })

    mm.add('(max-width: 850px)', () => {
      const getMaxScroll = () => Math.max(0, track.scrollWidth - slider.clientWidth)

      const st = ScrollTrigger.create({
        trigger: slider,
        start: 'top top',
        end: () => `+=${getMaxScroll() * 0.7}px`,
        pin: true,
        scrub: false,
        anticipatePin: 1,
        fastScrollEnd: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(track, { x: -self.progress * getMaxScroll() })
        },
      })

      const outroTl = gsap.timeline({
        scrollTrigger: { trigger: outro, start: 'top bottom', end: 'bottom center', scrub: 0.2 },
      })
      outroTl.fromTo(outro, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: 'none' })

      return () => {
        st.kill()
        outroTl.scrollTrigger?.kill()
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <section
        id="local-menu"
        ref={sliderRef}
        className="relative w-full h-screen bg-black text-white overflow-hidden border-t border-white/10"
      >
        <div className="absolute top-8 left-6 sm:left-10 z-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-1">
            The Local Menu &middot; placeholder captions
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl tracking-[-0.05em] text-white">
            THE LOCAL MENU
          </h2>
        </div>

        <div ref={trackRef} className="flex h-full items-center gap-6 sm:gap-10 pl-6 sm:pl-10 pr-[20vw] w-max will-change-transform">
          {slides.map((course) => (
            <div
              key={course.id}
              className="relative flex-shrink-0 w-[72vw] sm:w-[42vw] md:w-[32vw] h-[55vh] sm:h-[62vh] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl"
            >
              <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300 block mb-1">
                  Course ({course.number})
                </span>
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white uppercase">{course.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanic #4: simple scrub reveal bridging slider to next content, no pin */}
      <div
        ref={outroRef}
        className="w-full bg-black text-white py-24 border-t border-white/10 text-center px-6"
      >
        <p className="font-lacquer text-2xl sm:text-4xl text-neutral-300 max-w-xl mx-auto">
          placeholder outro line &mdash; the menu keeps moving.
        </p>
      </div>
    </>
  )
}
