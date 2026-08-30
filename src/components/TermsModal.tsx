import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldAlert, Clock, Calendar, CreditCard, AlertCircle, Camera, CheckCircle2 } from 'lucide-react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-white/20 p-6 sm:p-10 shadow-2xl text-white z-10 font-mono"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 block mb-2">
                Booking Protocol · Policies
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Terms &amp; Conditions
              </h2>
              <p className="font-lacquer text-lg text-neutral-300">
                Let me handle the rest.
              </p>
            </div>

            {/* Core Manifesto Box */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 space-y-3">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                "Pick a session. That's the only real decision. Everything after that is mine to handle. 
                I'm not staffing a floor — there's me, in a home kitchen, cooking for whoever's booked that slot. 
                Four seats, one cook, one session at a time. Get the format right and the rest takes care of itself."
              </p>
              <div className="text-[11px] text-neutral-400 font-mono flex items-center gap-2 pt-2 border-t border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>4 Seats · 1 Cook · Home Kitchen Private Dining</span>
              </div>
            </div>

            {/* Detailed Terms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-neutral-300">
              {/* The Window */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Calendar className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">The Window</h3>
                </div>
                <p>
                  Bookings open <strong className="text-white">21 days in advance</strong>.
                  Bookings close <strong className="text-white">12 hours before dinner</strong> so I can prepare the food.
                </p>
              </div>

              {/* Payment & Deposits */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <CreditCard className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">Payment &amp; Deposits</h3>
                </div>
                <p>
                  Full payment is encouraged. A <strong className="text-white">50% deposit</strong> at checkout secures your seat.
                </p>
              </div>

              {/* The Scheduling */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">The Scheduling</h3>
                </div>
                <p>
                  One penalty-free reschedule, no matter how much notice you give. 
                  Reschedule again after that? Cancellation terms kick in.
                </p>
              </div>

              {/* The Cancel */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <AlertCircle className="w-4 h-4 text-white" />
                  <h3 className="uppercase tracking-wider text-xs">The Cancel</h3>
                </div>
                <p>
                  Deposits are forfeited if you cancel <strong className="text-white">within 24 hours</strong> of your session.
                </p>
              </div>

              {/* The Allergies */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">The Allergies</h3>
                </div>
                <p>
                  Share dietary requirements / allergies when you book, not after. 
                  Common allergens handled in kitchen: dairy, gluten, nuts, soy, seafood.
                </p>
              </div>

              {/* The Liability & Food Safety */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">Liability &amp; Food Safety</h3>
                </div>
                <p>
                  Home-based kitchen in a private residence — booking means accepting that. 
                  Disclosed allergies accommodated to the best of ability; final call on safety is yours.
                </p>
              </div>

              {/* The Spotlight */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2 md:col-span-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Camera className="w-4 h-4" />
                  <h3 className="uppercase tracking-wider text-xs">The Spotlight</h3>
                </div>
                <p>
                  Sessions are documented for eightysix's social media and marketing. 
                  Let me know beforehand via WhatsApp if you'd rather not be filmed or photographed.
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-400">
                eightysix dining · Block 162 Yishun St 11 · Singapore 760162
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
              >
                I Understand &amp; Agree
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
