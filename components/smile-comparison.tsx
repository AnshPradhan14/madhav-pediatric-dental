'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { AmbientGlow } from '@/components/ambient-glow'

export function SmileComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }, [isDragging, handleMove])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }, [isDragging, handleMove])

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('mouseup', handleInteractionEnd)
      window.addEventListener('touchend', handleInteractionEnd)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseup', handleInteractionEnd)
      window.removeEventListener('touchend', handleInteractionEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd])

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <AmbientGlow position="center" color="accent" size="lg" />
      <SectionHeading
        align="center"
        eyebrow="Real Results"
        title="Transformations you have to see to believe."
      />

      <div className="mx-auto mt-16 max-w-4xl">
        <div 
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden rounded-3xl cursor-ew-resize select-none touch-none shadow-2xl ring-1 ring-border"
          onMouseDown={(e) => {
            setIsDragging(true)
            handleMove(e.clientX)
          }}
          onTouchStart={(e) => {
            setIsDragging(true)
            handleMove(e.touches[0].clientX)
          }}
        >
          {/* After Image (Base) */}
          <div className="absolute inset-0">
            <Image
              src="/images/after-smile.png"
              alt="Smile after treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Before Image (Top, clipped on right) */}
          <div 
            className="absolute inset-0 border-r-2 border-white"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/images/before-smile.png"
              alt="Smile before treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Frosted Glass Labels */}
          <div className="absolute top-4 left-4 z-10 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10 pointer-events-none shadow-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 z-10 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10 pointer-events-none shadow-sm">
            After
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
              <MoveHorizontal className="size-6 text-foreground" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Drag the slider to compare the results.
        </p>
      </div>
    </section>
  )
}
