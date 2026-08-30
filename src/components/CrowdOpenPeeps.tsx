import React from 'react'
import { motion } from 'framer-motion'

// Staggered Y offsets to interlock heads and shoulders closely without hover jump
const staggerCrowdY = [0, -22, 14, -28, 10, -18, 24, -8, 18, -26, 12, -15, 22, -20, 8, -12, 16, -24]

// 5 dense rows of half body bust Open Peeps
const row1 = [1, 5, 9, 14, 18, 22, 27, 31, 36, 40, 45, 49, 54, 58, 63, 67, 72, 77]
const row2 = [2, 6, 11, 15, 19, 24, 28, 33, 37, 42, 46, 51, 55, 60, 64, 69, 74, 79]
const row3 = [3, 7, 12, 16, 20, 25, 29, 34, 38, 43, 47, 52, 56, 61, 65, 70, 75, 80]
const row4 = [4, 8, 13, 17, 21, 26, 30, 35, 39, 44, 48, 53, 57, 62, 66, 71, 76, 81]
const row5 = [10, 23, 32, 41, 50, 59, 68, 73, 78, 82, 85, 88, 92, 95, 98, 101, 104, 105]

export function CrowdOpenPeeps() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden select-none py-6 my-4 bg-[#ffffff] text-black border-y border-neutral-200">
      <div className="relative w-full flex flex-col items-center">
        {/* Row 1 (Back Layer) */}
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-75px] sm:mb-[-105px] md:mb-[-140px] z-10"
        >
          {row1.concat(row1).map((num, idx) => {
            const yOffset = staggerCrowdY[idx % staggerCrowdY.length]
            return (
              <div
                key={`c-r1-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-32 sm:w-44 md:w-56 -mr-16 sm:-mr-24 md:-mr-32"
              >
                <img
                  src={`/open-peeps/bust/peep-${num}.svg`}
                  alt={`Bust ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                  loading="lazy"
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 2 (Second Layer) */}
        <motion.div
          animate={{ x: [-80, 0, -80] }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-75px] sm:mb-[-105px] md:mb-[-140px] z-20"
        >
          {row2.concat(row2).map((num, idx) => {
            const yOffset = staggerCrowdY[(idx + 3) % staggerCrowdY.length]
            return (
              <div
                key={`c-r2-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-36 sm:w-48 md:w-60 -mr-18 sm:-mr-26 md:-mr-34"
              >
                <img
                  src={`/open-peeps/bust/peep-${num}.svg`}
                  alt={`Bust ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_3px_8px_rgba(0,0,0,0.1)]"
                  loading="lazy"
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 3 (Third Layer) */}
        <motion.div
          animate={{ x: [0, -120, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-75px] sm:mb-[-105px] md:mb-[-140px] z-30"
        >
          {row3.concat(row3).map((num, idx) => {
            const yOffset = staggerCrowdY[(idx + 6) % staggerCrowdY.length]
            return (
              <div
                key={`c-r3-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-40 sm:w-52 md:w-64 -mr-20 sm:-mr-28 md:-mr-36"
              >
                <img
                  src={`/open-peeps/bust/peep-${num}.svg`}
                  alt={`Bust ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                  loading="lazy"
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 4 (Fourth Layer) */}
        <motion.div
          animate={{ x: [-90, 0, -90] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max mb-[-75px] sm:mb-[-105px] md:mb-[-140px] z-40"
        >
          {row4.concat(row4).map((num, idx) => {
            const yOffset = staggerCrowdY[(idx + 9) % staggerCrowdY.length]
            return (
              <div
                key={`c-r4-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-44 sm:w-56 md:w-68 -mr-22 sm:-mr-30 md:-mr-38"
              >
                <img
                  src={`/open-peeps/bust/peep-${num}.svg`}
                  alt={`Bust ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_5px_12px_rgba(0,0,0,0.14)]"
                  loading="lazy"
                />
              </div>
            )
          })}
        </motion.div>

        {/* Row 5 (Front Layer) */}
        <motion.div
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex items-end justify-start w-max z-50"
        >
          {row5.concat(row5).map((num, idx) => {
            const yOffset = staggerCrowdY[(idx + 12) % staggerCrowdY.length]
            return (
              <div
                key={`c-r5-${idx}`}
                style={{ transform: `translateY(${yOffset}px)` }}
                className="flex-shrink-0 w-48 sm:w-60 md:w-72 -mr-24 sm:-mr-32 md:-mr-40"
              >
                <img
                  src={`/open-peeps/bust/peep-${num}.svg`}
                  alt={`Bust ${num}`}
                  className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_6px_16px_rgba(0,0,0,0.16)]"
                  loading="lazy"
                />
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
