import React from 'react'
import { motion } from 'framer-motion'

// Staggered Y offsets to create natural interlocking height variation without mouse hover
const staggerY = [0, -18, 12, -24, 8, -14, 20, -6, 16, -20, 10, -12, 18, -16, 6]

// 3 rows of full-body standing Open Peeps
const row1Peeps = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
const row2Peeps = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
const row3Peeps = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 2, 5, 8, 11, 14]

export function HeroOpenPeeps() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden select-none py-4 mb-10 bg-[#ffffff] text-black border-y border-neutral-200">
      <div className="relative w-full flex flex-col items-center">
        {/* Row 1 (Back Layer) */}
        <motion.div
          animate={{ x: [0, -120, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-60px] sm:mb-[-90px] md:mb-[-120px] z-10"
        >
          {row1Peeps.concat(row1Peeps).map((num, idx) => {
            const yOffset = staggerY[idx % staggerY.length]
            return (
              <div
                key={`h-r1-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-28 sm:w-40 md:w-52 -mr-12 sm:-mr-20 md:-mr-28 opacity-90"
              >
                <img
                  src={`/open-peeps/standing/peep-${num}.svg`}
                  alt={`Standing Peep ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `/open-peeps/bust/peep-${num}.svg`
                  }}
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 2 (Middle Layer) */}
        <motion.div
          animate={{ x: [-100, 0, -100] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-50px] sm:mb-[-80px] md:mb-[-110px] z-20"
        >
          {row2Peeps.concat(row2Peeps).map((num, idx) => {
            const yOffset = staggerY[(idx + 4) % staggerY.length]
            return (
              <div
                key={`h-r2-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-32 sm:w-44 md:w-56 -mr-14 sm:-mr-22 md:-mr-32"
              >
                <img
                  src={`/open-peeps/standing/peep-${num}.svg`}
                  alt={`Standing Peep ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `/open-peeps/bust/peep-${num}.svg`
                  }}
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 3 (Front Layer) */}
        <motion.div
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max z-30"
        >
          {row3Peeps.concat(row3Peeps).map((num, idx) => {
            const yOffset = staggerY[(idx + 8) % staggerY.length]
            return (
              <div
                key={`h-r3-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-36 sm:w-48 md:w-64 -mr-16 sm:-mr-24 md:-mr-36"
              >
                <img
                  src={`/open-peeps/standing/peep-${num}.svg`}
                  alt={`Standing Peep ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `/open-peeps/bust/peep-${num}.svg`
                  }}
                />
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
