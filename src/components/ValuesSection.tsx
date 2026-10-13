import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, Layers, Calendar, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const facts = [
  {
    icon: DollarSign,
    label: 'Price',
    value: 'S$98 / pax',
  },
  {
    icon: Layers,
    label: 'Format',
    value: '7-course dessert + 3 pairing drinks + a Pandan Kaya jar to take home',
  },
  {
    icon: Calendar,
    label: 'Run',
    value: '4-month run, Nov 2026 – Feb 2027, across two menu versions',
  },
  {
    icon: Users,
    label: 'Capacity',
    value: '4 pax max per session, 4 sessions a week',
  },
]

// Mechanic #6: non-pinned ScrollTrigger with manual onUpdate progress math
// (not a GSAP tween scrub) driving which fact is highlighted/dimmed.
export function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 851px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const progress = self.progress
          const activeIndex = Math.min(facts.length - 1, Math.floor(progress * facts.length))
          itemRefs.current.forEach((el, i) => {
            if (!el) return
            if (i === activeIndex) {
              el.style.opacity = '1'
              el.style.transform = 'scale(1.02) translateX(0px)'
            } else {
              el.style.opacity = '0.3'
              el.style.transform = 'scale(1) translateX(0px)'
            }
          })
        },
      })
      return () => trigger.kill()
    })

    mm.add('(max-width: 850px)', () => {
      // Mobile tuning: a softer, continuous blend across neighboring items
      // instead of a single hard-cut active index.
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const progress = self.progress
          const activePos = progress * (facts.length - 1)
          itemRefs.current.forEach((el, i) => {
            if (!el) return
            const distance = Math.abs(i - activePos)
            const opacity = Math.max(0.3, 1 - distance * 0.45)
            el.style.opacity = String(opacity)
            el.style.transform = `scale(${1 + Math.max(0, 0.02 - distance * 0.02)}) translateX(0px)`
          })
        },
      })
      return () => trigger.kill()
    })

    return () => mm.revert()
  }, [])

  // Force an initial correct paint (double rAF) on mount.
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    })
  }, [])

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-28 border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-3 text-center">
          The Facts
        </span>
        <h2 className="font-poppins font-extrabold text-4xl sm:text-6xl tracking-[-0.05em] text-white text-center mb-16">
          what you're actually booking
        </h2>

        <div className="space-y-6">
          {facts.map((fact, i) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.label}
                ref={(el) => (itemRefs.current[i] = el)}
                className="flex items-start gap-5 p-6 sm:p-8 rounded-3xl border border-white/15 bg-neutral-950/80 transition-none"
                style={{ opacity: 0.3 }}
              >
                <Icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                    {fact.label}
                  </span>
                  <p className="font-poppins font-semibold text-lg sm:text-2xl text-white">{fact.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
