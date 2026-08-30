import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    q: 'What is The Suka-Suka Session?',
    a: 'The Suka-Suka Session is a five-course plated dessert omakase ($138 / guest) exploring Singapore street memories and pastry science. "Suka-suka" is Malay slang for creative freedom — Chef Ewan often throws in experimental surprise courses, extra texture pairings, and palate cleansers throughout the seating.',
  },
  {
    q: 'Can you accommodate dietary restrictions and allergies?',
    a: 'Yes. All dietary restrictions (vegetarian, nut allergies, dairy sensitivity, gluten, seafood exclusions) are discussed and customized directly during your WhatsApp reservation consultation before your session date is locked.',
  },
  {
    q: 'How many seats are available per session?',
    a: 'Each session is strictly capped at up to four (4) seats at one private chef table. This ensures complete privacy, zero restaurant pretension, and uninterrupted tableside storytelling directly with the chef.',
  },
  {
    q: 'How do I confirm my booking and pay?',
    a: 'Inquire directly via WhatsApp (+65 8995 3081). Once your date and timing are selected, a secure Stripe / PayNow QR invoice is issued. A 50% deposit secures your seats immediately.',
  },
  {
    q: 'Where are you located and how do I get there?',
    a: 'We are a private home dining lab located in Yishun St 11 Block 162, Singapore 760162 (near Yishun / Khatib MRT stations). Exact lift lobby and unit arrival instructions are sent automatically upon deposit confirmation.',
  },
]

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  // FAQPage Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section className="w-full py-16 sm:py-24 border-t border-white/10 bg-neutral-950 font-mono">
      {/* Embedded FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
            Clarifications · Knowledge Base
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">
            Direct Host Access: Ewan replies personally on WhatsApp within 15–30 mins.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors hover:bg-white/[0.02]">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-sm sm:text-base text-neutral-200 group-hover:text-white font-medium transition-colors">
                    <span className="text-neutral-400 mr-3 text-xs">{String(idx + 1).padStart(2, '0')}.</span>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 p-1.5 rounded-full border border-white/10 text-neutral-400 group-hover:text-white"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pb-1 text-xs sm:text-sm text-neutral-400 leading-relaxed whitespace-pre-line pl-8 border-l border-white/10 ml-2 mt-2">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
