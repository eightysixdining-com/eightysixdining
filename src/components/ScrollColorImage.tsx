import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollColorImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
}

export function ScrollColorImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: ScrollColorImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Track scroll position of the element across viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress directly to filter string
  const filter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [
      'grayscale(100%) brightness(0.9) contrast(110%)',
      'grayscale(0%) brightness(1.05) contrast(100%)',
      'grayscale(0%) brightness(1.05) contrast(100%)',
      'grayscale(100%) brightness(0.9) contrast(110%)',
    ]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.97, 1, 1, 0.97]
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          filter,
          scale,
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out will-change-transform ${imgClassName}`}
      />
    </div>
  )
}
