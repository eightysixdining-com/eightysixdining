import React from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { ScrollColorImage } from '@/components/ScrollColorImage'

export function CreatorsVisionSection() {
  return (
    <section id="creators-vision" className="relative w-full bg-black text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              Creator's Vision · Personal Note
            </span>
            <h1 className="font-poppins font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[100px] tracking-[-0.06em] leading-none text-white">
              The Creator's Vision
            </h1>
            <p className="font-lacquer text-2xl sm:text-3xl text-neutral-300 mt-2">
              shazwan sapari
            </p>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
            Raw, unfiltered reflections from the lab. Overcoming tech failure, embracing solitude, and building eightysix from the ground up.
          </p>
        </div>

        {/* Main Layout - Grid with matching height alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Stretched Creator Portrait Column Aligned to Bottom Right Text Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/20 bg-neutral-950 shadow-2xl relative flex flex-col justify-between min-h-[580px] lg:min-h-full"
          >
            <div className="absolute inset-0 w-full h-full">
              <ScrollColorImage
                src="/assets/media_1788099729086.png"
                alt="Shazwan Sapari posing with crossed arms"
                className="w-full h-full"
                imgClassName="object-cover object-top h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            
            {/* Top Badge */}
            <div className="relative z-20 p-6">
              <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white">
                Creator &amp; Pastry Artisan
              </span>
            </div>

            {/* Bottom Info Card */}
            <div className="relative z-20 p-6 flex items-end justify-between">
              <div>
                <h3 className="font-poppins font-bold text-2xl text-white">
                  Shazwan Sapari
                </h3>
                <a
                  href="https://instagram.com/eightysix_dining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-neutral-400 hover:text-white flex items-center gap-1 mt-1 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@eightysix_dining</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Verbatim Text Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Block 1: read here, then there */}
            <div className="p-8 rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-md space-y-6 flex-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-lacquer text-lg text-white">
                  read here, then there
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <div>
                  <p>
                    "This page is dedicated to myself, regardless of the brand, It's been hard going through this and not even half way through my instagram account got hacked at one point. It was so bad my not only my ig was shit my data in my previous laptop started loosing data one by one? and the screen decided to glitched happily...but not me, Cause i cant glitch...but i wasnt happy either"
                  </p>
                </div>
                <div className="border-l border-white/10 pl-4 md:pl-6">
                  <p>
                    "i have to restart all over again from scratch, i love the grind, it isnt demoralizing but it wasnt all fun either.. i'm way behind content posting way behind dued bills cause of this set back. i calmed down, ate a snicker bar, down a protein shake and decided to grab social media by its digital balls."
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2: finish there, then read here */}
            <div className="p-8 rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-md space-y-6 flex-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-lacquer text-lg text-white">
                  finish there, then read here
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <div>
                  <p>
                    "my time in sollitude (idc if its not a word) has been such a joy, i got my time back, self-love, self-harm (smoking) relax la we"
                  </p>
                  <p className="mt-4">
                    "I get to branch out realistics and workable business ideas, being in the flow is just fcking amazing"
                  </p>
                </div>
                <div className="border-l border-white/10 pl-4 md:pl-6 space-y-4">
                  <p>
                    "i cant wait to start all this ideas co-currentrunning eightysix, damn i should get a trademark...mark"
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-white font-medium text-xs">
                    "Thank you friends and family, for your support and understanding, to those who underestimate me, i love you. To those who arent, bitch when we meeting?"
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
