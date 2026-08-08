'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { AmbientGlow } from '@/components/ambient-glow'

const steps = [
  {
    step: '01',
    title: 'Consultation',
    text: 'We listen first. A thorough assessment and honest conversation about your goals and concerns.',
  },
  {
    step: '02',
    title: 'Personalised Plan',
    text: 'A clear, tailored treatment plan with transparent pricing and no hidden surprises.',
  },
  {
    step: '03',
    title: 'Gentle Treatment',
    text: 'Precise, comfortable care delivered with modern technology and a calm environment.',
  },
  {
    step: '04',
    title: 'Ongoing Care',
    text: 'Follow-ups and preventive guidance to keep your smile healthy for years to come.',
  },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  })
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32 overflow-hidden">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title="A calm, considered journey to your best smile."
      />
      
      <div ref={containerRef} className="relative mt-24">
        {/* Connecting line (Desktop) */}
        <div className="absolute top-[34px] left-0 hidden h-[2px] w-full bg-border lg:block" />
        <motion.div 
          className="absolute top-[34px] left-0 hidden h-[2px] bg-primary origin-left lg:block"
          style={{ scaleX, width: '100%' }} 
        />
        
        {/* Connecting line (Mobile) */}
        <div className="absolute left-[34px] top-0 h-full w-[2px] bg-border lg:hidden" />
        <motion.div 
          className="absolute left-[34px] top-0 h-full w-[2px] bg-primary origin-top lg:hidden"
          style={{ scaleY: scaleX }} 
        />

        <div className="grid gap-14 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex lg:block gap-6 lg:gap-0 group">
              <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border-[6px] border-background bg-secondary text-lg font-serif font-semibold text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground lg:mx-auto lg:text-xl">
                {s.step}
              </div>
              <div className="lg:mt-8 lg:text-center relative pt-2 lg:pt-0">
                <AmbientGlow position="center" color="primary" size="sm" className="opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
