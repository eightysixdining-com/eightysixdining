import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Expose lenis globally for seamless programmatic scrolling
    ;(window as any).lenis = lenis

    // Bridge Lenis into GSAP's own ticker so ScrollTrigger stays in sync
    lenis.on('scroll', ScrollTrigger.update)

    const gsapTick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(gsapTick)
    gsap.ticker.lagSmoothing(0)

    // Synchronize anchor clicks for butter-smooth navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.4,
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      gsap.ticker.remove(gsapTick)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])

  return null
}
