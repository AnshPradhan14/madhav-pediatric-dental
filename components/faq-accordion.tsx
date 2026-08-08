'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Are dental implants painful?',
    answer: 'The procedure itself is performed under local anaesthetic, so you will not feel any pain. Post-procedure discomfort is usually mild and easily managed with over-the-counter painkillers. Most patients are surprised by how comfortable the process actually is.',
  },
  {
    question: 'How long do veneers last?',
    answer: 'With proper care and good oral hygiene, our premium porcelain veneers can last 10 to 15 years, sometimes even longer. They are highly resistant to staining and incredibly durable.',
  },
  {
    question: 'Is teeth whitening safe for my enamel?',
    answer: 'Yes. We use clinically approved, professional-grade whitening systems that are entirely safe for your enamel. Unlike over-the-counter kits, our process is supervised and tailored to prevent sensitivity while delivering optimal results.',
  },
  {
    question: 'Do you offer flexible payment plans?',
    answer: 'We believe that premium dental care should be accessible. We offer various structured payment options and transparent pricing right from the consultation phase, ensuring there are no surprises.',
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="Common Questions"
        title="Everything you need to know."
      />

      <div className="mt-16 divide-y divide-border border-y border-border">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i} className="py-6">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-lg"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-xl font-semibold text-foreground">
                  {faq.question}
                </span>
                <span className="ml-6 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                  <Plus
                    className={cn(
                      'size-4 transition-transform duration-300',
                      isOpen ? 'rotate-45 text-primary' : 'rotate-0'
                    )}
                  />
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-base leading-relaxed text-muted-foreground pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
