'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion, useSpring } from 'framer-motion'

export function MagneticButton({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const xPos = clientX - (left + width / 2)
    const yPos = clientY - (top + height / 2)

    x.set(xPos * 0.15) // Max offset
    y.set(yPos * 0.15)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-flex transition-transform duration-300 ${isHovered ? 'scale-105' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
