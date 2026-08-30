import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, ChevronRight, BookOpen, FlaskConical } from 'lucide-react'
import { ScrollColorImage } from '@/components/ScrollColorImage'

interface CourseItem {
  id: string
  number: string
  name: string
  subtitle: string
  image: string
  story?: string
  whyItWorks: string
  spicyBadge?: boolean
}

const localCourses: CourseItem[] = [
  {
    id: 'prawn-cracker',
    number: '0',
    name: 'prawn cracker',
    subtitle: 'SWEET POTATO CRACKER · YUZU DREDGE',
    image: '/local-menu/PRAWN CRACKER.png',
    story:
      "Prawn crackers came from a red-and-white plastic packet, always slightly stale by the time anyone opened it, and that was fine — that was the point. The doughnut is the roadside kind, sold hot out of a cart, gone in four bites. Small Bites isn't an appetizer course in the fancy-restaurant sense. It's just what you'd be handed first if I fed you like family instead of a guest.",
    whyItWorks:
      'Prawn brings two savory "MSG-type" flavor compounds (glutamate+inosinate) at once — together the savory taste gets boosted way more than either alone. Frying the sweet potato browns and crisps its sugar and starch, giving the actual "cracker" crunch. Yuzu is sour citrus, and sour flavors wake your tongue back up before the next bite.',
  },
  {
    id: 'doughnut',
    number: '0',
    name: 'doughnut',
    subtitle: 'GLUTINOUS RICE MOCHI DOUGHNUT · GINGER CITRUS GLAZE',
    image: '/local-menu/DOUGHNUT.png',
    story:
      "Doughnut: Glutinous rice flour is almost all one kind of starch molecule that's naturally stretchy, which is why the dough chews instead of crumbling.",
    whyItWorks:
      'Frying seals a dry crust outside while the inside stays soft. Ginger tricks the same nerve receptors as chili heat, just gently — so it blends with the citrus glaze instead of clashing.',
  },
  {
    id: 'cup-corn',
    number: '1',
    name: 'cup corn',
    subtitle: 'MISO CONDENSED MILK · WHITE SWEET CORN',
    image: '/local-menu/CUPCORN.png',
    story:
      "Cup corn used to mean a plastic cup, a small red plastic spoon, and however much butter the stall auntie felt like giving you that day. Roadside, five minutes, gone before you got back to your bike. I've eaten it standing up more times than sitting down.",
    whyItWorks:
      'Torching corn caramelizes its sugars, enhancing flavor beyond boiled corn. Shiro dashi caramel adds a savory soy-stock taste to the sweetness, akin to prawn crackers. The cream\'s gelatin creates a thick, clingy texture for a "silky" mouthfeel instead of watery sweetness.',
  },
  {
    id: 'kaya-toast',
    number: '2',
    name: 'kaya toast',
    subtitle: 'SHOKUPAN BREAD · KAYA PANDAN BUTTER',
    image: '/local-menu/KAYA TOAST.png',
    story:
      'Milk-bread-soft and warm, pandan running green and grassy-sweet, kaya butter salty-caramel on the finish. Every kopitiam breakfast features toast, kaya, and a soft-boiled egg. Due to a seven-course dessert menu, the toast alone conveys the nostalgic essence of the meal.',
    whyItWorks:
      'Milk protein softens gluten in bread dough, making "milk bread" fluffier than regular bread. Additionally, pandan shares the same smell molecule as jasmine rice and freshly toasted bread. The kaya butter\'s salt enhances sweetness by dulling bitter taste buds, while the toast evokes nostalgia.',
  },
  {
    id: 'houten-chilli',
    number: '3',
    name: 'houten chilli tapioca',
    subtitle: 'COCONUT MOUSSE · ROASTED PEANUT FOAM · GULA MELAKA GLAZE',
    image: '/local-menu/HOUTEN CHILLI TAPIOCA.png',
    spicyBadge: true,
    whyItWorks:
      'Chili heat (capsaicin) dissolves in fat, making fatty coconut mousse more effective at cooling the mouth than water. Foaming the peanut mixture enhances aroma and flavor, allowing roasted peanut taste to emerge before the chili heat. Gula melaka provides a richer flavor than white sugar, adding complexity to the glaze compared to typical sweet-chili sauce.',
  },
  {
    id: 'ice-kacang',
    number: '4',
    name: 'ice kacang',
    subtitle: 'ALOE VERA CHUNKS IN 3 WAY SYRUP · GRANITA',
    image: '/local-menu/ICE KACANG.png',
    story:
      'A bowl with four spoons symbolizes a shared memory of eagerly choosing dessert before it melts, highlighting the joy of the moment over the dessert itself.',
    whyItWorks:
      'Granita is frozen to achieve large ice crystals for a "shaved ice" texture, unlike smooth sorbet. A crunchy layer with melted chocolate prevents sogginess, and salting peanuts enhances the granita\'s sweetness without adding extra sugar.',
  },
  {
    id: 'rice-egg',
    number: '5',
    name: 'rice & egg',
    subtitle: 'WARM RICE PUDDING · HONEY FERMENTED YOLK · BLACK GARLIC',
    image: '/local-menu/RICE & EGG.png',
    story:
      "The final course before dessert transforms from a pretense into a satisfying dinner of rice, egg, and a savory layer beneath. It's a comfort dish I'd choose on a bad day, making it a worthy addition to a menu of favorites.",
    whyItWorks:
      'Black garlic is created by slow-aging regular garlic, which enhances its sweetness and savoriness. Curing egg yolks in honey and spices firms them while keeping them spreadable. Serving rice pudding warm preserves its creamy texture, while cooling makes it grainy.',
  },
]

export function LocalMenuSection() {
  const [activeCourse, setActiveCourse] = useState<string>(localCourses[0].id)

  return (
    <section id="local-menu" className="relative w-full bg-black text-white py-24 border-t border-white/10">
      {/* Title Header */}
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              The Local Menu · Five Acts
            </span>
            <h1 className="font-poppins font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-[-0.06em] leading-none text-white">
              THE LOCAL MENU
            </h1>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
            A deconstructive five-course tribute to Singapore street memories, kopitiams, and hawker heritage through pastry technique.
          </p>
        </div>

        {/* Menu Index Overview */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6 text-neutral-400 font-mono text-xs uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Course Overview</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {localCourses.map((c) => (
              <a
                key={c.id}
                href={`#course-${c.id}`}
                onClick={() => setActiveCourse(c.id)}
                className="p-4 rounded-xl border border-white/10 bg-black/60 hover:bg-white/[0.06] hover:border-white/30 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400 font-semibold">({c.number})</span>
                    <span className="text-white font-bold uppercase tracking-wider group-hover:underline">
                      {c.name}
                    </span>
                    {c.spicyBadge && (
                      <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-bold">
                        *SPICY LVL MID-HIGH, MUST TRY
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-400">{c.subtitle}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Full Bleed Visuals with Scroll Color Reveal and Overlapping Typography */}
      <div className="space-y-32">
        {localCourses.map((course, idx) => (
          <div
            key={course.id}
            id={`course-${course.id}`}
            className="relative w-full overflow-hidden border-y border-white/10"
          >
            {/* Massive Background Title */}
            <div className="absolute top-4 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden opacity-10">
              <h2 className="font-poppins font-black text-7xl sm:text-9xl md:text-[180px] lg:text-[249px] tracking-[-0.08em] whitespace-nowrap text-center text-white uppercase">
                {course.name}
              </h2>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Full Bleed Picture Container with Scroll-driven Color Reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 relative h-[420px] sm:h-[540px] md:h-[620px] rounded-3xl overflow-hidden border border-white/20 bg-neutral-950 shadow-2xl group ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <ScrollColorImage
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Course Index Overlay */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-medium">
                      Course ({course.number})
                    </span>
                  </div>

                  {course.spicyBadge && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white text-black font-bold">
                        ★ Must Try
                      </span>
                    </div>
                  )}

                  {/* Subtitle Bar */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-200 bg-black/80 px-4 py-2 rounded-xl backdrop-blur-md border border-white/15 inline-block">
                      {course.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Overlapping Editorial Text Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className={`lg:col-span-5 relative z-20 space-y-6 lg:-ml-12 ${
                    idx % 2 === 1 ? 'lg:-mr-12 lg:ml-0 lg:order-1' : ''
                  }`}
                >
                  <div className="p-6 sm:p-10 rounded-3xl border border-white/20 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl space-y-6">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                        Course {course.number}
                      </span>
                      <h3 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.05em] text-white leading-tight uppercase">
                        {course.name}
                      </h3>
                    </div>

                    {/* Story Section */}
                    {course.story && (
                      <div className="space-y-2 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 text-white font-lacquer text-xl tracking-wide">
                          <BookOpen className="w-4 h-4 text-neutral-400" />
                          <h4>story</h4>
                        </div>
                        <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed pl-3 border-l-2 border-white/30">
                          {course.story}
                        </p>
                      </div>
                    )}

                    {/* Why It Works Section */}
                    <div className="space-y-2 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-white font-lacquer text-xl tracking-wide">
                        <FlaskConical className="w-4 h-4 text-neutral-400" />
                        <h4>why it works</h4>
                      </div>
                      <p className="font-code-body text-xs sm:text-sm text-neutral-300 leading-relaxed pl-3 border-l-2 border-white/60">
                        {course.whyItWorks}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
