import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const points = [
  'Internationally trained, gentle specialists',
  'State-of-the-art, fully sterilised environment',
  'Transparent pricing with no surprises',
  'Personalised treatment plans for every patient',
]

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/clinic-detail.png"
              alt="Pristine dental equipment at Madhav Dental"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl sm:block lg:-right-8">
            <p className="font-serif text-4xl font-semibold">100%</p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              Focus on comfort, hygiene and patient confidence.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Madhav Dental"
            title="Where clinical precision meets a calming experience."
            description="We built Madhav Dental to feel nothing like a typical clinic. From the moment you arrive, expect meticulous care, honest advice, and a team that treats your smile like their own."
          />
          <ul className="mt-8 space-y-4">
            {points.map((point, i) => (
              <Reveal
                as="li"
                key={point}
                delay={i * 80}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-base leading-relaxed text-foreground/80">
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <Button
              render={<Link href="/about" />}
              size="lg"
              className="group mt-10 rounded-full px-7"
            >
              Learn More About Us
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
