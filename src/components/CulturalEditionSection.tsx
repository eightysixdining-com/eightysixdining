import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'
import { ScrollColorImage } from '@/components/ScrollColorImage'

interface VolumeData {
  id: string
  title: string
  nativeScript: string
  volNumber: string
  dishName: string
  ingredients: string
  flavorProfile: string
  foodScience: string
  preface: string
  headerBannerImage: string
  accentBorder: string
  accentColor: string
}

const volumes: VolumeData[] = [
  {
    id: 'melayu',
    title: 'the melayu menu',
    nativeScript: 'melayu',
    volNumber: 'VOL.1',
    headerBannerImage: '/assets/media_1788097899961.png',
    accentBorder: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    preface:
      'satu: the focus is on "craving food" from Malay households, such as nasi lemak and mee rebus, which blur the lines between savory and sweet. the goal is to deconstruct these dishes and recreate their flavors as desserts using pastry techniques rather than traditional cooking methods.',
    dishName: 'dua: nasi lemak',
    ingredients:
      'tiga: sambal tumis ice cream · coconut-pandan rice cream · peanut praline · cucumber granita',
    flavorProfile:
      'empat: chili-hot coconut ice cream with real curry backbone over pandan rice, sweet peanut crunch alongside, and a cool cucumber ice to reset between bites.',
    foodScience:
      'limah: chili heat dissolves in fat, not water, so freezing capsaicin in a coconut-milk base results in a slower, longer-lasting burn compared to a watery sambal. frying the spice paste until the oil separates transforms raw shallot and garlic from harsh to sweet, enhancing flavor through a browning reaction similar to that of seared meat.',
  },
  {
    id: 'indian',
    title: 'the indian menu',
    nativeScript: 'இந்திய',
    volNumber: 'VOL.1',
    headerBannerImage: '/assets/media_1788097892926.png',
    accentBorder: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    preface:
      "க: i haven't started R&D on this one yet, so there's no dish to name here. what i can tell you is the method won't change: take something that's already loved exactly as it is, break it into its actual components, and see what happens when those components get pastry technique instead of a kadai.",
    dishName: 'உ: Jalebi',
    ingredients:
      'ங: Fermented batter spiral · Saffron-honey soak · Shrikhand cream · Fennel-cashew crumb',
    flavorProfile:
      'சு: Crisp, syrup-soaked spiral with a sour tang under the sweetness, served with a thick, cardamom-scented strained yogurt.',
    foodScience:
      'ஞ: Fermenting the batter lowers its pH and produces carbon dioxide, which creates the hollow tubes in fried spirals where syrup resides. When the hot fritter is placed in warm syrup, trapped steam helps pull the syrup inside as it cools and shrinks, while the crust remains firm.',
  },
  {
    id: 'chinese',
    title: 'the chinese menu',
    nativeScript: '中华',
    volNumber: 'VOL.1',
    headerBannerImage: '/assets/media_1788097877207.png',
    accentBorder: 'border-yellow-500/30',
    accentColor: 'text-yellow-400',
    preface:
      '一: the honest reason i haven\'t jumped ahead and started testing early: every volume so far has taught me something about the last one, and Chinese craving food covers such a wide range — bak kut teh porridge sides, bak kwa, the whole kopitiam breakfast set. slower start, fewer wasted ingredients.',
    dishName: '二: Bak Kut Teh',
    ingredients:
      '三: Poached pear · Pepper-garlic caramel · You tiao crumb · Coconut espuma',
    flavorProfile:
      '四: Warm white pepper heat riding on a honeyed garlic caramel, with herbal poached pear and a loud crumb of fried dough for contrast.',
    foodScience:
      '五: Pepper\'s heat compound is fat-soluble, allowing coconut foam to evenly distribute it, softening the spice sensation. Similarly, simmering garlic for twenty minutes breaks down harsh sulfur compounds into milder ones, caramelizing its natural sugars, which is why boiled garlic tastes sweet rather than sharp.',
  },
  {
    id: 'peranakan',
    title: 'the peranakan menu',
    nativeScript: '峇峇娘惹',
    volNumber: 'VOL.1',
    headerBannerImage: '/assets/media_1788097907337.png',
    accentBorder: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    preface:
      "chit: i haven't started R&D on this one yet, so there's no dish to name here. what i can tell you is the method won't change: take something that's already loved exactly as it is, break it into its actual components, and see what happens when those components get pastry technique instead of a kadai.",
    dishName: 'nn̄g: mee siam',
    ingredients:
      'sa: tamarind-taucheo sorbet · puffed rice vermicelli · egg cream · chive oil',
    flavorProfile:
      'sì: aggressively sour-sweet sorbet over a rich egg cream, with puffed noodle crunch and chive oil scattered through.',
    foodScience:
      "gō: mee siam's gravy is designed to remain flavorful even when cold, balancing intense sourness and sweetness, which is ideal for sorbet as freezing reduces these flavors. additionally, the hard-boiled egg adds richness through its yolk's fat, enhancing the dish's overall profile.",
  },
]

export function CulturalEditionSection() {
  const [selectedVol, setSelectedVol] = useState<string>(volumes[0].id)

  const scrollToVolume = (volId: string) => {
    setSelectedVol(volId)
    const targetElement = document.getElementById(`vol-${volId}`)
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  const scrollToRojak = () => {
    setSelectedVol('rojak')
    const targetElement = document.getElementById('rojak-vol')
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <section id="cultural-edition" className="relative w-full bg-black text-white py-24 border-t border-white/10">
      {/* Title Header */}
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              The Cultural Edition · Culinary Volumes
            </span>
            <h1 className="font-poppins font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[100px] tracking-[-0.06em] leading-none text-white">
              The Cultural Edition
            </h1>
            <p className="font-lacquer text-2xl sm:text-3xl text-neutral-400 mt-2">
              Section 4: The Culinary Volumes
            </p>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
            Deconstructing Singapore's four cultural food pillars: Melayu, Indian, Chinese, Peranakan — and the concluding Rojak harmony.
          </p>
        </div>

        {/* Volume Selector Pills Navbar */}
        <div className="flex flex-wrap gap-3 mt-8 sticky top-20 z-30 p-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 w-max max-w-full">
          {volumes.map((vol) => (
            <button
              key={vol.id}
              onClick={() => scrollToVolume(vol.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 border cursor-pointer ${
                selectedVol === vol.id
                  ? 'bg-white text-black border-white font-bold shadow-[0_0_16px_rgba(255,255,255,0.3)] scale-[1.02]'
                  : 'bg-neutral-950 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>{vol.nativeScript}</span>
              <span className="opacity-60 text-[10px]">{vol.volNumber}</span>
            </button>
          ))}
          <button
            onClick={scrollToRojak}
            className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 border cursor-pointer ${
              selectedVol === 'rojak'
                ? 'bg-white text-black border-white font-bold shadow-[0_0_16px_rgba(255,255,255,0.3)] scale-[1.02]'
                : 'bg-neutral-950 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <span>ROJAK</span>
            <span className="opacity-60 text-[10px]">Home Vol.1</span>
          </button>
        </div>
      </div>

      {/* Volumes Presentation with Header Banner Images RIGHT BEFORE respective ethnics */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-28">
        {volumes.map((vol) => {
          const isSelected = selectedVol === vol.id
          return (
            <div key={vol.id} id={`vol-${vol.id}`} className="space-y-6 scroll-mt-28">
              {/* The Cultural Edition Image RIGHT BEFORE its respective ethnic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl flex items-center justify-center p-4"
              >
                <ScrollColorImage
                  src={vol.headerBannerImage}
                  alt={`${vol.title} Header Banner`}
                  className="w-full h-full"
                  imgClassName="object-contain"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-medium">
                    {vol.nativeScript} · {vol.volNumber}
                  </span>
                </div>
              </motion.div>

              {/* Volume Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`rounded-3xl border ${vol.accentBorder} bg-neutral-950/90 overflow-hidden shadow-2xl transition-all ${
                  isSelected ? 'ring-2 ring-white/60 shadow-[0_0_32px_rgba(255,255,255,0.1)]' : ''
                }`}
              >
                {/* Card Header Bar */}
                <div className="p-6 sm:p-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <span className={`font-poppins font-black text-3xl sm:text-4xl ${vol.accentColor}`}>
                      {vol.nativeScript}
                    </span>
                    <span className="font-lacquer text-xl text-neutral-300">
                      {vol.title} {vol.volNumber}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Preface & Overview */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-2">
                        Preface · R&amp;D Hypothesis
                      </span>
                      <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {vol.preface}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="font-lacquer text-2xl text-white">
                        {vol.dishName}
                      </div>
                      <div className="font-mono text-xs text-neutral-400 pb-2 border-b border-white/10">
                        {vol.ingredients}
                      </div>
                      <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed pl-3 border-l-2 border-white/30">
                        {vol.flavorProfile}
                      </p>
                    </div>
                  </div>

                  {/* Right: Food Science Breakdown */}
                  <div className="lg:col-span-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-white font-lacquer text-xl">
                      <FlaskConical className="w-4 h-4 text-neutral-400" />
                      <span>the science of fat, fermentation &amp; heat</span>
                    </div>
                    <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {vol.foodScience}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}

        {/* ROJAK — THIS IS HOME VOL.1 */}
        <motion.div
          id="rojak-vol"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-3xl border border-white/20 bg-neutral-950 text-center space-y-6 relative overflow-hidden scroll-mt-28"
        >
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none">
            <span className="font-poppins font-black text-[220px] text-white">ROJAK</span>
          </div>

          <h2 className="font-poppins font-black text-6xl sm:text-8xl md:text-9xl text-white tracking-tight">
            ROJAK
          </h2>

          <p className="font-lacquer text-2xl sm:text-3xl text-neutral-300">
            THIS IS HOME — VOL.1
          </p>

          <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-3">
            <p className="font-mono text-sm sm:text-base text-white italic">
              "Let's make it this far first."
            </p>
            <span className="text-xl">😉</span>
          </div>

          <p className="font-mono text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed pt-4">
            The collective synthesis where every culture's sweet, sour, savory, and spicy elements fuse into a single unifying culinary identity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
