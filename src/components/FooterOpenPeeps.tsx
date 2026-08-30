import React from 'react'
import { motion } from 'framer-motion'

const footerStaggerY = [0, -18, 12, -22, 8, -14, 18, -10, 14, -20, 10, -16]
const footerPeeps = [12, 18, 25, 33, 47, 52, 68, 74, 85, 91, 99, 104, 3, 15, 29, 42, 55, 70]

export function FooterOpenPeeps() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden select-none py-6 mb-10 bg-[#ffffff] text-black border-y border-neutral-200">
      <motion.div
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="flex items-end justify-start w-max px-4"
      >
        {footerPeeps.concat(footerPeeps).map((num, idx) => {
          const yOffset = footerStaggerY[idx % footerStaggerY.length]
          return (
            <div
              key={`f-peep-${idx}`}
              style={{ transform: `translateY(${yOffset}px)` }}
              className="flex-shrink-0 w-32 sm:w-44 md:w-52 -mr-16 sm:-mr-24"
            >
              <img
                src={`/open-peeps/bust/peep-${num}.svg`}
                alt={`Footer Peep ${num}`}
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                loading="lazy"
              />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
