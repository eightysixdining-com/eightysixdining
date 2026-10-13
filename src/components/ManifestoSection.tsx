import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// PLACEHOLDER COPY — a future copy pass will replace these teaser lines with the
// real "non-binary dessert" narrative. Mechanics only in this pass.
interface ManifestoSlide {
  id: string
  teaser: string
  image: string
}

const slides: ManifestoSlide[] = [
  {
    id: 'slide-1',
    teaser: 'Placeholder teaser line one. This dessert does not sit neatly on either side of the line.',
    image: '/dessert-gallery/Kaya Toast v.5.png',
  },
  {
    id: 'slide-2',
    teaser: 'Placeholder teaser line two. Non-binary dessert, still being written, still being tasted.',
    image: '/dessert-gallery/Cupcorn v.4.png',
  },
  {
    id: 'slide-3',
    teaser: 'Placeholder teaser line three. The final word on this concept has not been plated yet.',
    image: '/dessert-gallery/Ice Kacang v.1.png',
  },
]

export function ManifestoSection() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const wordRefs = useRef<HTMLSpanElement[][]>([])
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const cleanups: (() => void)[] = []

    mm.add('(min-width: 851px)', () => {
      const previewScrub = 0.6
      slides.forEach((_, i) => {
        const el = slideRefs.current[i]
        const words = wordRefs.current[i]
        const img = imageRefs.current[i]
        if (!el || !words || !img) return

        const distance =
          i === 0 || i === slides.length - 1
            ? window.innerHeight * 2.5
            : window.innerHeight * Math.max(1.2, Math.min(2.2, words.length / 12))

        let revealedUpTo = -1

        const st = ScrollTrigger.create({
          trigger: el,
          pin: el,
          start: 'top top',
          end: `+=${distance}px`,
          pinSpacing: true,
          onUpdate: (self) => {
            const raw = self.progress * words.length
            // Hysteresis band of 0.5 words to avoid flicker right at pin boundaries
            if (raw > revealedUpTo + 0.5) {
              revealedUpTo = Math.floor(raw)
            } else if (raw < revealedUpTo - 0.5) {
              revealedUpTo = Math.floor(raw)
            }
            words.forEach((w, wi) => {
              if (wi < revealedUpTo) {
                w.style.color = '#ffffff'
                w.style.opacity = '1'
              } else {
                w.style.color = '#525252'
                w.style.opacity = '0.45'
              }
            })
          },
        })

        const previewTl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: previewScrub,
          },
        })
        previewTl.fromTo(
          img,
          { clipPath: 'inset(100% 0% 0% 0%)', scale: 1 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.05, ease: 'none' }
        )

        cleanups.push(() => {
          st.kill()
          previewTl.scrollTrigger?.kill()
        })
      })
    })

    mm.add('(max-width: 850px)', () => {
      const previewScrub = 0.15
      slides.forEach((_, i) => {
        const el = slideRefs.current[i]
        const words = wordRefs.current[i]
        const img = imageRefs.current[i]
        if (!el || !words || !img) return

        const distance =
          i === 0 || i === slides.length - 1
            ? window.innerHeight * 2.5
            : window.innerHeight * Math.max(1.1, Math.min(1.8, words.length / 14))

        let revealedUpTo = -1

        const st = ScrollTrigger.create({
          trigger: el,
          pin: el,
          start: 'top top',
          end: `+=${distance}px`,
          pinSpacing: true,
          onUpdate: (self) => {
            const raw = self.progress * words.length
            if (raw > revealedUpTo + 0.5) {
              revealedUpTo = Math.floor(raw)
            } else if (raw < revealedUpTo - 0.5) {
              revealedUpTo = Math.floor(raw)
            }
            words.forEach((w, wi) => {
              if (wi < revealedUpTo) {
                w.style.color = '#ffffff'
                w.style.opacity = '1'
              } else {
                w.style.color = '#525252'
                w.style.opacity = '0.45'
              }
            })
          },
        })

        const previewTl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: previewScrub,
          },
        })
        previewTl.fromTo(
          img,
          { clipPath: 'inset(100% 0% 0% 0%)', scale: 1 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.05, ease: 'none' }
        )

        cleanups.push(() => {
          st.kill()
          previewTl.scrollTrigger?.kill()
        })
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
      mm.revert()
    }
  }, [])

  return (
    <section id="story" className="relative w-full bg-black text-white">
      {slides.map((slide, i) => {
        const words = slide.teaser.split(' ')
        wordRefs.current[i] = []
        return (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[i] = el)}
            className="relative w-full h-screen overflow-hidden flex items-center border-t border-white/10"
          >
            <div className="container mx-auto px-6 sm:px-10 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-4">
                  Manifesto &middot; {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} &middot; placeholder copy
                </span>
                <p className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight">
                  {words.map((w, wi) => (
                    <span
                      key={wi}
                      ref={(el) => {
                        if (el) wordRefs.current[i][wi] = el
                      }}
                      className="inline-block mr-[0.3em] transition-none"
                      style={{ color: '#525252', opacity: 0.45 }}
                    >
                      {w}
                    </span>
                  ))}
                </p>
              </div>

              <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950">
                <img
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={slide.image}
                  alt="eightysix dessert preview"
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
