import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Quote } from 'lucide-react'
import { ScrollColorImage } from '@/components/ScrollColorImage'

export function StorySection() {
  return (
    <section id="story" className="relative w-full bg-black text-white py-24 border-t border-white/10">
      {/* Section Title */}
      <div className="container mx-auto px-6 max-w-6xl mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              The Story · Origins &amp; Philosophy
            </span>
            <h1 className="font-poppins font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-[-0.06em] leading-none text-white">
              THE STORY
            </h1>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
            Origins, the science of non-binary dessert, creative friction, and the relentless discipline behind eightysix.
          </p>
        </div>

        {/* Origin Manifesto & Slang */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-xl space-y-6"
          >
            <h2 className="font-lacquer text-3xl sm:text-4xl text-white">
              bored of menus that never change.
            </h2>
            <div className="space-y-4 font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                eightysix started because I got bored of menus that never change. In kitchen slang, 
                <strong className="text-white"> "eightysix" means "sold out,"</strong> which is what happens when the same six items sit on a menu for 4 months.
              </p>
              <p>
                I wanted a dessert that behaved like the foods we grew up with — Twisties, Ice Kacang, Kaya Toast — except now I have the equipment and the stubbornness and determination to take it apart and rebuild it properly.
              </p>
              <p className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-white font-medium">
                "No shortcuts, even when the troublesome route adds three extra days."
              </p>
            </div>
          </motion.div>

          {/* Non-Binary Dessert & Flavor Science */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-xl space-y-6 flex flex-col justify-between"
          >
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Non-Binary Dessert
            </h3>
            <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
              "eightysix is a dessert we never imagined could be a dessert. It's a non-binary kind of dessert. 
              You could call it fusion, a mix of this and a little bit of that, but for me it represents what could be or what might have been. 
              Even though the English isn't perfect, why not try to make it work? Science says so."
            </p>
            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-white" />
              <span>Pairs scientifically across volatile aromatic compounds.</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Images: vessels, textures & tactile stoneware with Scroll Color Reveal */}
        <div className="mt-20">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                Tableware Architecture
              </span>
              <h4 className="font-lacquer text-3xl sm:text-4xl text-white">
                vessels, textures &amp; tactile stoneware
              </h4>
            </div>
            <p className="font-mono text-xs text-neutral-400 max-w-xs">
              Handpicked stoneware, textured glazes, and stone plinths engineered for thermal retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 group h-80 sm:h-96 shadow-xl"
            >
              <ScrollColorImage
                src="/vessels/vessels, textures & tactile stoneware.png"
                alt="vessels, textures & tactile stoneware 1"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90 bg-black/80 px-3 py-1 rounded-full border border-white/15">
                stoneware I
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 group h-80 sm:h-96 shadow-xl"
            >
              <ScrollColorImage
                src="/vessels/vessels, textures & tactile stoneware 2.png"
                alt="vessels, textures & tactile stoneware 2"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90 bg-black/80 px-3 py-1 rounded-full border border-white/15">
                stoneware II
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 group h-80 sm:h-96 shadow-xl"
            >
              <ScrollColorImage
                src="/vessels/vessels, textures & tactile stoneware 3.png"
                alt="vessels, textures & tactile stoneware 3"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90 bg-black/80 px-3 py-1 rounded-full border border-white/15">
                stoneware III
              </span>
            </motion.div>
          </div>
        </div>

        {/* Creative Philosophy */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-poppins font-bold text-2xl sm:text-4xl text-white tracking-tight">
                "I don't create things just because they look good."
              </h3>
              <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed">
                "I don't create things just because they look good, presentable, or taste good. I follow the science and what works. 
                That's why I call it non-binary dessert. When things just seamlessly work well together, creation doesn't have to stop there. 
                eightysix is where things end. Things are finished, things are done or sold out."
              </p>
            </div>
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black border border-white/10 font-code-body text-xs text-neutral-300">
              <Quote className="w-6 h-6 text-white mb-2" />
              <p>
                "We would never run out of creativity if we base our perspective on a one-dimensional look. 
                We will blind ourselves to the possibility of a new reality."
              </p>
            </div>
          </div>
        </div>

        {/* Dual Images with Scroll Color Reveal */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left image: From industry kitchen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 group shadow-2xl"
          >
            <ScrollColorImage
              src="/assets/media_1788077394546.png"
              alt="From industry kitchen"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-lacquer text-2xl sm:text-3xl text-white">
                From industry kitchen
              </p>
            </div>
          </motion.div>

          {/* Right image: To running solo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 group shadow-2xl"
          >
            <ScrollColorImage
              src="/assets/media_1788077394428.png"
              alt="To running solo"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-lacquer text-2xl sm:text-3xl text-white">
                To running solo
              </p>
            </div>
          </motion.div>
        </div>

        {/* About Ewan Section with Attached Chef Yawning Selfie (media_1788100492017.jpg) */}
        <div className="mt-20 border-t border-white/15 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block">
                Personal History
              </span>
              <h2 className="font-poppins font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
                about ewan
              </h2>
              <p className="font-lacquer text-xl sm:text-2xl text-neutral-300">
                Types of Bakers · Flavor Pairing · The Pandemic · True Discipline
              </p>
            </div>

            {/* Attached Candid Chef Yawning Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-72 sm:h-84 md:h-96 relative group"
            >
              <ScrollColorImage
                src="/assets/media_1788100492017.jpg"
                alt="Chef Shazwan in kitchen candid yawning selfie"
                className="w-full h-full"
                imgClassName="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-xs text-white bg-black/80 px-3 py-1 rounded-full border border-white/15">
                  The Real Grind
                </span>
                <span className="font-mono text-[10px] text-neutral-400">
                  Prep Lab
                </span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-neutral-950/90 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  2018
                </span>
                <h3 className="font-lacquer text-2xl text-white">
                  types of bakers
                </h3>
                <p className="font-code-body text-xs text-neutral-300 leading-relaxed">
                  "In 2018, I started writing a book. <em>Types Of Bakers</em>. Got four chapters in."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-neutral-400">
                Early ambitions &amp; foundational manuscripts.
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-neutral-950/90 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  The Pandemic
                </span>
                <h3 className="font-lacquer text-2xl text-white">
                  the shutdown
                </h3>
                <p className="font-code-body text-xs text-neutral-300 leading-relaxed">
                  "Short story long, I ended up writing a few chapters of this and I actually made another book which is called <em>The Flavor Pairing</em>.
                  Somewhere in there, the pandemic hit. Everything stopped. And underneath the shutdown, something else stopped too — my own discipline. 
                  I wasn't executing. I wasn't building anything. I had the idea buried in me, but not the structure to carry it."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-neutral-400">
                The loss of execution &amp; structure.
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl border border-white/15 bg-neutral-950/90 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  The Rebuild
                </span>
                <h3 className="font-lacquer text-2xl text-white">
                  the true discipline
                </h3>
                <p className="font-code-body text-xs text-neutral-300 leading-relaxed">
                  "So I lost time. I lost momentum. I lost the version of myself that thought four chapters and a decent instinct for cake would be enough.
                  Let's not forget the discipline I lacked back in 2018 — the type that comes from being tied to the desk, really scrutinizing your work instead of just winging it."
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-neutral-400">
                Scrutiny over instinct.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
