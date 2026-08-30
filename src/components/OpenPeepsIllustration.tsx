import React from 'react'
import { motion } from 'framer-motion'

// 15 Open Peeps characters from C:\Users\DSIP219058\Downloads\Flat Assets
const peepsCrowd = [
  { id: 1, file: '/open-peeps/peep-1.svg', x: '2%', y: '12%', scale: 0.95, z: 2, rotate: -3 },
  { id: 2, file: '/open-peeps/peep-2.svg', x: '8%', y: '0%', scale: 1.05, z: 4, rotate: 2 },
  { id: 3, file: '/open-peeps/peep-3.svg', x: '15%', y: '15%', scale: 0.9, z: 1, rotate: -4 },
  { id: 4, file: '/open-peeps/peep-4.svg', x: '22%', y: '2%', scale: 1.02, z: 3, rotate: 3 },
  { id: 5, file: '/open-peeps/peep-5.svg', x: '29%', y: '10%', scale: 0.92, z: 2, rotate: -2 },
  { id: 6, file: '/open-peeps/peep-6.svg', x: '36%', y: '0%', scale: 1.1, z: 5, rotate: 1 },
  { id: 7, file: '/open-peeps/peep-7.svg', x: '43%', y: '14%', scale: 0.95, z: 2, rotate: -3 },
  { id: 8, file: '/open-peeps/peep-8.svg', x: '50%', y: '2%', scale: 1.08, z: 4, rotate: 2 },
  { id: 9, file: '/open-peeps/peep-9.svg', x: '57%', y: '12%', scale: 0.9, z: 1, rotate: -1 },
  { id: 10, file: '/open-peeps/peep-10.svg', x: '64%', y: '0%', scale: 1.05, z: 3, rotate: 4 },
  { id: 11, file: '/open-peeps/peep-11.svg', x: '71%', y: '15%', scale: 0.92, z: 2, rotate: -2 },
  { id: 12, file: '/open-peeps/peep-12.svg', x: '78%', y: '2%', scale: 1.06, z: 4, rotate: 1 },
  { id: 13, file: '/open-peeps/peep-13.svg', x: '84%', y: '10%', scale: 0.95, z: 1, rotate: -3 },
  { id: 14, file: '/open-peeps/peep-14.svg', x: '90%', y: '0%', scale: 1.02, z: 3, rotate: 2 },
  { id: 15, file: '/open-peeps/peep-15.svg', x: '95%', y: '14%', scale: 0.9, z: 2, rotate: -4 },
]

export function OpenPeepsIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-5xl mx-auto overflow-hidden py-10 ${className}`}>
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,rgba(255,255,255,0.08),rgba(0,0,0,0))] pointer-events-none" />

      {/* 15 Open Peeps Crowded Composition */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full flex items-end justify-center select-none">
        {peepsCrowd.map((peep, idx) => (
          <motion.div
            key={peep.id}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: peep.scale }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: idx * 0.04,
              type: 'spring',
              stiffness: 300,
              damping: 24,
            }}
            whileHover={{ y: -12, scale: peep.scale * 1.08, zIndex: 30 }}
            className="absolute bottom-0 w-28 sm:w-36 md:w-44 flex-shrink-0 cursor-pointer transition-transform duration-300"
            style={{
              left: peep.x,
              bottom: peep.y,
              zIndex: peep.z,
              transform: `rotate(${peep.rotate}deg)`,
            }}
          >
            <div className="relative p-2 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
              <img
                src={peep.file}
                alt={`Open Peeps character ${peep.id}`}
                className="w-full h-auto max-h-56 sm:max-h-72 md:max-h-84 object-contain filter invert contrast-200 brightness-125"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}

        {/* Counter Surface Line at base */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />
      </div>

      <div className="text-center mt-6">
        <p className="font-mono text-xs text-neutral-400">
          The eightysix dining community · Four seats per session
        </p>
      </div>
    </div>
  )
}
