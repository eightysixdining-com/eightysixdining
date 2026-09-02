import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Clock, Calendar, MapPin, Sparkles, ArrowUpRight, DollarSign, Users, FileText, Instagram, ShieldCheck, Zap, Mail } from 'lucide-react'
import { LocationMap } from '@/components/ui/expand-map'
import { HeroOpenPeeps } from '@/components/HeroOpenPeeps'
import { CrowdOpenPeeps } from '@/components/CrowdOpenPeeps'
import { TermsModal } from '@/components/TermsModal'
import { FAQSection } from '@/components/FAQSection'
import { EmailLink } from '@/components/EmailLink'

export function ReservationSection() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const whatsappBusinessUrl =
    'https://wa.me/6589953081?text=Hi%20Ewan!%20I%20would%20like%20to%20reserve%20a%20seat%20for%20The%20Suka-Suka%20Session%20($138/guest).'

  const handleBookClick = () => {
    if (typeof (window as any).trackWhatsAppInquiry === 'function') {
      (window as any).trackWhatsAppInquiry('hero_reservation_button')
    }
  }

  return (
    <section id="reservation" className="relative w-full bg-black text-white pt-20 pb-20 overflow-x-hidden">
      {/* Top Anchor for Home */}
      <div id="hero" className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

      {/* 1) Hero Section: 3 rows of fullbody Open Peeps on #ffffff background */}
      <HeroOpenPeeps />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Huge Poppins Logoword Mark (font size 144, letter spacing -80) */}
          <h1 className="font-poppins font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[144px] tracking-[-0.07em] leading-none text-white select-none">
            eightysix
          </h1>
          
          {/* Subtitle: Private Dining */}
          <p className="font-lacquer text-3xl sm:text-4xl md:text-5xl text-neutral-200 mt-3 tracking-wide">
            Private Dining
          </p>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-4 max-w-xl">
            5-course plated dessert omakase. 4 seats. 1 table. Run solo by pastry chef Ewan.
          </p>

          {/* Response Time Promise Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono text-neutral-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Host Access: Ewan replies personally on WhatsApp within 15–30 mins.</span>
          </div>
        </div>

        {/* Core Reservation Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16">
          {/* Main Booking Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-10 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 block">
                    Fixed Menu · Seasonal R&amp;D
                  </span>
                  <h2 className="font-poppins text-3xl sm:text-4xl font-bold tracking-tight mt-1">
                    The Suka-Suka Session
                  </h2>
                </div>
                <div className="text-right">
                  <div className="font-poppins text-3xl sm:text-4xl font-extrabold tracking-tight">
                    $138 <span className="text-sm font-normal text-neutral-400 font-mono">/ guest</span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400">5 Dessert Course Omakase</span>
                </div>
              </div>

              {/* Course Note */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 font-mono text-xs text-neutral-300 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <p>
                  "That's one price for a fixed course, knowing me I would throw in extra desserts too."
                </p>
              </div>

              {/* Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-neutral-300 mb-8">
                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Days</strong>
                    <span>Monday – Saturday</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Operating Hours</strong>
                    <span>4:00 PM – 6:30 PM<br />7:30 PM – 9:30 PM</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-start gap-3">
                  <Users className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Format</strong>
                    <span>Up to 4 Guests / 1 Table</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-start gap-3">
                  <DollarSign className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Payment</strong>
                    <span>Stripe / PayNow QR (50% deposit)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={whatsappBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookClick}
                className="group w-full py-4 px-6 rounded-full bg-white text-black font-poppins font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Reserve via WhatsApp · $138 / guest</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-2">
                <span>WhatsApp Business: +65 8995 3081</span>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="underline hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Terms &amp; Policy</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Location & Interactive Map Panel (Contact Target) */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl border border-white/15 bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between gap-6 scroll-mt-24"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  Private Address · Contact &amp; Lab
                </span>
                <MapPin className="w-4 h-4 text-white" />
              </div>

              <h3 className="font-poppins text-2xl font-bold tracking-tight text-white mb-2">
                Yishun St 11 Block 162
              </h3>
              <p className="font-mono text-xs text-neutral-400 mb-1">
                Postal Code: Singapore 760162 (Near Yishun &amp; Khatib MRT)
              </p>
              <p className="font-lacquer text-xs text-neutral-400 italic">
                "that's all the address you're getting you perv"
              </p>
            </div>

            {/* Embedded ExpandMap Interactive Component */}
            <div className="my-auto py-6 flex flex-col items-center justify-center">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3">
                Live Coordinates Map
              </span>
              <LocationMap
                location="Yishun St 11 Block 162, Singapore"
                coordinates="1.4294° N, 103.8370° E"
              />
            </div>

            {/* Verified Email & Contact Links with 1-Click Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-[11px] font-mono text-neutral-400">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Mail className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                  Reservations:
                </span>
                <EmailLink email="reservations@eightysixdining.com" subject="eightysix dining Reservation Inquiry" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Mail className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                  General Contact:
                </span>
                <EmailLink email="contact@eightysixdining.com" subject="eightysix dining General Inquiry" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Mail className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                  Founder / Ewan:
                </span>
                <EmailLink email="ewan@eightysixdining.com" subject="eightysix dining Direct Inquiry" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span>Instagram:</span>
                <a
                  href="https://instagram.com/eightysix_dining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1 font-medium"
                >
                  @eightysix_dining
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2) four seats, one cook, no pretension section: Full #ffffff background with 5 rows of normal Open Peeps */}
      <div className="w-full bg-[#ffffff] text-black py-16 mt-16 border-y border-neutral-300">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-6xl">
          <h3 className="font-lacquer text-4xl sm:text-6xl text-black mb-4">
            four seats, one cook, no pretension
          </h3>
          <p className="font-mono text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-8">
            An intimate tableside fellowship where diners and dessert art meet under domestic warmth.
          </p>
          
          <CrowdOpenPeeps />
        </div>
      </div>

      {/* FAQ Section with Schema.org FAQPage */}
      <FAQSection />

      {/* Terms & Conditions Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </section>
  )
}
