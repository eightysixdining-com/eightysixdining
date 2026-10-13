import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mechanic #5: NOT continuously scrubbed. A one-shot onEnter timeline that plays
// once (title/image crossfade), guarded so re-entering the viewport doesn't replay it.
export function SpotlightSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const hasPlayed = useRef(false)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const image = imageRef.current
    if (!section || !title || !image) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 851px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        onEnter: () => {
          if (hasPlayed.current) return
          hasPlayed.current = true
          gsap.timeline()
            .fromTo(image, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' })
            .fromTo(title, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.2)
        },
      })
      return () => trigger.kill()
    })

    mm.add('(max-width: 850px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        onEnter: () => {
          if (hasPlayed.current) return
          hasPlayed.current = true
          gsap.timeline()
            .fromTo(image, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' })
            .fromTo(title, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.15)
        },
      })
      return () => trigger.kill()
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="spotlight"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-28 border-t border-white/10 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative h-[340px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950">
          <img
            ref={imageRef}
            src="/assets/media_1788099729086.png"
            alt="Shazwan (Ewan) Sapari, creator of eightysix"
            className="w-full h-full object-cover object-top opacity-0"
          />
        </div>

        <div className="lg:col-span-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-3">
            Spotlight &middot; placeholder copy
          </span>
          <h2 ref={titleRef} className="font-poppins font-extrabold text-4xl sm:text-6xl tracking-[-0.05em] text-white opacity-0">
            Shazwan Sapari
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-4 max-w-md">
            Placeholder spotlight line &mdash; a future copy pass tells the real story here.
          </p>
        </div>
      </div>
    </section>
  )
}
