import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { id: 'hero', path: '/', label: 'Home', num: '1' },
  { id: 'local-menu', path: '/experience', label: 'Experience', num: '2' },
  { id: 'reservation', path: '/reservations', label: 'Reservations', num: '3' },
  { id: 'story', path: '/story', label: 'Story', num: '4' },
  { id: 'contact', path: '/contact', label: 'Contact', num: '5' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 200
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string, path: string) => {
    setIsMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    if (window.history.pushState) {
      window.history.pushState(null, '', path)
    }
  }

  const handleNavBookClick = () => {
    if (typeof (window as any).trackWhatsAppInquiry === 'function') {
      (window as any).trackWhatsAppInquiry('navbar_book_button')
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand / Spelled out eightysix / dining */}
        <button
          onClick={() => scrollTo('hero', '/')}
          className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer"
        >
          <img
            src="/assets/media_1788077084539.png"
            alt="eightysix dining logo"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded object-contain filter invert"
          />
          <span className="font-poppins font-black text-lg sm:text-xl tracking-tighter text-white group-hover:opacity-80 transition-opacity">
            eightysix <span className="text-neutral-400 text-xs font-mono font-normal tracking-normal ml-0.5">/ dining</span>
          </span>
        </button>

        {/* Center: Frosted Glass Floating Nav Bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-white/15 bg-black/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id, link.path)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                <sup className={`relative z-10 text-[9px] ${isActive ? 'text-black/60' : 'text-neutral-500'}`}>
                  {link.num}
                </sup>
              </button>
            )
          })}
        </nav>

        {/* Right Action: Quick Reserve & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6589953081?text=Hi%20Ewan,%20I'd%20like%20to%20reserve%20a%20seat%20for%20The%20Suka-Suka%20Session."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavBookClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Book</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-neutral-900/90 border border-white/15 text-white active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="md:hidden mt-3 p-6 rounded-3xl bg-neutral-950/98 border border-white/20 shadow-2xl backdrop-blur-3xl font-mono text-sm space-y-3 z-50"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id, link.path)}
                className={`w-full text-left p-3.5 rounded-2xl flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-300 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">({link.num})</span>
              </button>
            ))}

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/6589953081?text=Hi%20Ewan,%20I'd%20like%20to%20reserve%20a%20seat%20for%20The%20Suka-Suka%20Session."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavBookClick}
                className="w-full py-3.5 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Reservation (+65 8995 3081)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
