'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

function Counter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: number
  suffix?: string
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)
    }
  }, [inView, value, motionValue, delay])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        // If it's a decimal like 4.9, keep 1 decimal place, else round to integer
        const format = value % 1 !== 0 
          ? latest.toFixed(1)
          : Intl.NumberFormat('en-US').format(Math.round(latest))
        ref.current.textContent = `${format}${suffix}`
      }
    })
  }, [springValue, suffix, value])

  return <span ref={ref}>0{suffix}</span>
}

export function AnimatedStats() {
  const stats = [
    { value: 15, suffix: '+', label: 'Years of Care' },
    { value: 12000, suffix: '+', label: 'Happy Smiles' },
    { value: 4.9, suffix: '★', label: 'Patient Rating' },
  ]

  return (
    <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <dt className="font-serif text-3xl font-semibold text-primary-foreground">
            <Counter value={stat.value} suffix={stat.suffix} delay={i * 0.15} />
          </dt>
          <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">
            {stat.label}
          </dd>
        </motion.div>
      ))}
    </dl>
  )
}
