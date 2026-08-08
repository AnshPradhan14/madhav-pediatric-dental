import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'The most comfortable dental experience I have ever had. Spotless clinic, gentle team, and my smile has never looked better.',
    name: 'Priya Sharma',
    role: 'Cosmetic Veneers',
  },
  {
    quote:
      'I was terrified of dentists. The team here was so patient and reassuring that my root canal was completely painless.',
    name: 'Rahul Mehta',
    role: 'Root Canal Therapy',
  },
  {
    quote:
      'From consultation to implants, everything was transparent and precise. It genuinely feels like a premium private clinic.',
    name: 'Anjali Patel',
    role: 'Dental Implants',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-secondary/60 py-24 lg:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Patient Stories"
          title="Trusted by thousands of confident smiles."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl glass-card p-8">
                <Quote className="size-8 text-accent" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-serif text-lg font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
