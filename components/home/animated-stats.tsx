'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function Counter({
  value,
  suffix = '',
  delay = 0,
  start = false,
}: {
  value: number
  suffix?: string
  delay?: number
  start?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (start && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        ease: 'easeOut',
        onUpdate(latest) {
          if (ref.current) {
            const format =
              value % 1 !== 0
                ? latest.toFixed(1)
                : Intl.NumberFormat('en-US').format(Math.round(latest))
            ref.current.textContent = `${format}${suffix}`
          }
        },
      })
      return () => controls.stop()
    }
  }, [start, value, delay, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function AnimatedStats() {
  const ref = useRef<HTMLDListElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px' })

  const stats = [
    { value: 15, suffix: '+', label: 'Years of Care' },
    { value: 12000, suffix: '+', label: 'Happy Smiles' },
    { value: 4.9, suffix: '★', label: 'Patient Rating' },
  ]

  return (
    <dl ref={ref} className="mt-14 grid max-w-lg grid-cols-3 gap-4 sm:gap-6 border-t border-primary-foreground/20 pt-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <dt className="font-serif text-2xl sm:text-3xl font-semibold text-primary-foreground">
            <Counter value={stat.value} suffix={stat.suffix} delay={i * 0.15} start={inView} />
          </dt>
          <dd className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground/70">
            {stat.label}
          </dd>
        </motion.div>
      ))}
    </dl>
  )
}
