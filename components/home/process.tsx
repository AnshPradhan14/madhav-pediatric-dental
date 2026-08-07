import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

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
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title="A calm, considered journey to your best smile."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 100} className="relative">
            <div className="flex h-full flex-col">
              <span className="font-serif text-5xl font-semibold text-accent">
                {s.step}
              </span>
              <div className="mt-4 h-px w-full bg-border" />
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
