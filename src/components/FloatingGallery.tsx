import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollColorImage } from '@/components/ScrollColorImage'

interface GalleryItem {
  id: string
  name: string
  subtitle: string
  image: string
}

// Row 1: Signature R&D Final Iterations
const row1Items: GalleryItem[] = [
  { id: '1', name: 'Kaya Toast v.5', subtitle: 'Shokupan & Kaya Butter', image: '/dessert-gallery/Kaya Toast v.5.png' },
  { id: '2', name: 'Cupcorn v.4', subtitle: 'Miso Condensed Milk', image: '/dessert-gallery/Cupcorn v.4.png' },
  { id: '3', name: 'Prawn Cracker v.5', subtitle: 'Sweet Potato Dredge', image: '/dessert-gallery/Prawn Cracker v.5.png' },
  { id: '4', name: 'Houten Chilli v.5', subtitle: 'Peanut Foam & Gula Melaka', image: '/dessert-gallery/Houten Chilli Tapioca v.5.png' },
  { id: '5', name: 'Rice & Egg v.5', subtitle: 'Honey Cured Yolk', image: '/dessert-gallery/Rice & Egg v.5.png' },
  { id: '6', name: 'Doughnut v.5', subtitle: 'Glutinous Rice Mochi', image: '/dessert-gallery/Doughnut v.5.png' },
  { id: '7', name: 'Ice Kacang v.1', subtitle: 'Granita & Aloe Vera', image: '/dessert-gallery/Ice Kacang v.1.png' },
  { id: '8', name: 'Wang Wang v.2', subtitle: 'Crisp Rice Cracker', image: '/dessert-gallery/Wang Wang v.2.png' },
]

// Row 2: Components, Garnishes & Infusions
const row2Items: GalleryItem[] = [
  { id: '9', name: 'Cured Egg Yolk', subtitle: 'Black Garlic Curing', image: '/dessert-gallery/Cured Egg Yolk.png' },
  { id: '10', name: 'Bread Chips', subtitle: 'Crispy Brioche Texture', image: '/dessert-gallery/Bread Chips.png' },
  { id: '11', name: 'Tapioca Chips', subtitle: 'Spiced Crunch', image: '/dessert-gallery/Tapioca Chips.png' },
  { id: '12', name: 'Goji Berries', subtitle: 'Botanical Infusion', image: '/dessert-gallery/Goji Berries.png' },
  { id: '13', name: 'Hawthorn v.1', subtitle: 'Tart Plum Sorbet', image: '/dessert-gallery/Hawthorn v.1.png' },
  { id: '14', name: 'Iced Gems', subtitle: 'Nostalgic Meringue', image: '/dessert-gallery/Iced Gems.png' },
  { id: '15', name: 'Small Bites', subtitle: 'Prelude Course', image: '/dessert-gallery/Small Bites.png' },
  { id: '16', name: 'Bread Chip', subtitle: 'Fine Crisp Layer', image: '/dessert-gallery/Bread Chip.png' },
]

// Row 3: Early Lab Versions & Texture Studies
const row3Items: GalleryItem[] = [
  { id: '17', name: 'Kaya Toast v.1', subtitle: 'First Formula', image: '/dessert-gallery/Kaya Toast v.1.png' },
  { id: '18', name: 'Cupcorn v.1', subtitle: 'Sweet Kernel Base', image: '/dessert-gallery/Cupcorn v.1.png' },
  { id: '19', name: 'Doughnut v.1', subtitle: 'Ginger Citrus Glaze', image: '/dessert-gallery/Doughnut v.1.png' },
  { id: '20', name: 'Houten Chilli v.1', subtitle: 'Coconut Mousse Trial', image: '/dessert-gallery/Houten Chilli Tapioca v.1.png' },
  { id: '21', name: 'Rice & Egg v.1', subtitle: 'Rice Pudding Alpha', image: '/dessert-gallery/Rice & Egg v.1.png' },
  { id: '22', name: 'Wang Wang v.1', subtitle: 'Cracker Prototype', image: '/dessert-gallery/Wang Wang v.1.png' },
  { id: '23', name: 'Kaya Toast v.2', subtitle: 'Pandan Custard Gel', image: '/dessert-gallery/Kaya Toast v.2.png' },
  { id: '24', name: 'Cupcorn v.3', subtitle: 'Shiro Dashi Balance', image: '/dessert-gallery/Cupcorn v.3.png' },
]

// Row 4: Plating Archive Set 01 (Numbers 1 to 8)
const row4Items: GalleryItem[] = [
  { id: '25', name: 'Plating Archive 01', subtitle: 'Course Assembly', image: '/dessert-gallery/1.png' },
  { id: '26', name: 'Plating Archive 02', subtitle: 'Stoneware Pairing', image: '/dessert-gallery/2.png' },
  { id: '27', name: 'Plating Archive 03', subtitle: 'Textures & Saucing', image: '/dessert-gallery/3.png' },
  { id: '28', name: 'Plating Archive 04', subtitle: 'Thermal Layering', image: '/dessert-gallery/4.png' },
  { id: '29', name: 'Plating Archive 05', subtitle: 'Foam Dispensing', image: '/dessert-gallery/5.png' },
  { id: '30', name: 'Plating Archive 06', subtitle: 'Surface Glaze', image: '/dessert-gallery/6.png' },
  { id: '31', name: 'Plating Archive 07', subtitle: 'Granita Structure', image: '/dessert-gallery/7.png' },
  { id: '32', name: 'Plating Archive 08', subtitle: 'Tableside Finish', image: '/dessert-gallery/8.png' },
]

// Row 5: Plating Archive Set 02 (Numbers 9 to 16)
const row5Items: GalleryItem[] = [
  { id: '33', name: 'Plating Archive 09', subtitle: 'Suka-Suka Service', image: '/dessert-gallery/9.png' },
  { id: '34', name: 'Plating Archive 10', subtitle: 'Pastry Precision', image: '/dessert-gallery/10.png' },
  { id: '35', name: 'Plating Archive 11', subtitle: 'Cold Element Hold', image: '/dessert-gallery/11.png' },
  { id: '36', name: 'Plating Archive 12', subtitle: 'Plinth Stoneware', image: '/dessert-gallery/12.png' },
  { id: '37', name: 'Plating Archive 13', subtitle: 'Aroma Chemistry', image: '/dessert-gallery/13.png' },
  { id: '38', name: 'Plating Archive 14', subtitle: 'Garnish Symmetry', image: '/dessert-gallery/14.png' },
  { id: '39', name: 'Plating Archive 15', subtitle: 'Five Course Flow', image: '/dessert-gallery/15.png' },
  { id: '40', name: 'Plating Archive 16', subtitle: 'Lab Signature', image: '/dessert-gallery/16.png' },
]

export function FloatingGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // 5 alternating, smooth scroll-driven parallax translations
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['-20%', '5%'])
  const xRow3 = useTransform(scrollYProgress, [0, 1], ['5%', '-20%'])
  const xRow4 = useTransform(scrollYProgress, [0, 1], ['-25%', '0%'])
  const xRow5 = useTransform(scrollYProgress, [0, 1], ['-5%', '-30%'])

  // Smooth zoom-in on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.01, 0.96])

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative w-full bg-black text-white py-24 border-t border-white/10 overflow-hidden"
    >
      {/* Title Header */}
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              Research &amp; Development Archive
            </span>
            <h2 className="font-poppins font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-[-0.06em] text-white">
              The Gallery
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
            40 unique dessert iterations, archive plates, and texture studies across 5 smooth parallax rows.
          </p>
        </div>
      </div>

      {/* 5 Parallax Rows: 40 unique pictures, evenly spaced, tight uniform gaps, no overlapping, smooth zoom */}
      <motion.div style={{ scale }} className="space-y-6 sm:space-y-8">
        {/* Row 1 */}
        <motion.div style={{ x: xRow1 }} className="flex gap-4 sm:gap-6 w-max pl-6">
          {row1Items.concat(row1Items).map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="group relative flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
            >
              <ScrollColorImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: xRow2 }} className="flex gap-4 sm:gap-6 w-max pl-6">
          {row2Items.concat(row2Items).map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="group relative flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
            >
              <ScrollColorImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div style={{ x: xRow3 }} className="flex gap-4 sm:gap-6 w-max pl-6">
          {row3Items.concat(row3Items).map((item, idx) => (
            <div
              key={`r3-${idx}`}
              className="group relative flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
            >
              <ScrollColorImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 4 */}
        <motion.div style={{ x: xRow4 }} className="flex gap-4 sm:gap-6 w-max pl-6">
          {row4Items.concat(row4Items).map((item, idx) => (
            <div
              key={`r4-${idx}`}
              className="group relative flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
            >
              <ScrollColorImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 5 */}
        <motion.div style={{ x: xRow5 }} className="flex gap-4 sm:gap-6 w-max pl-6">
          {row5Items.concat(row5Items).map((item, idx) => (
            <div
              key={`r5-${idx}`}
              className="group relative flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-88 md:h-96 rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-xl transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
            >
              <ScrollColorImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.subtitle}
                </span>
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
