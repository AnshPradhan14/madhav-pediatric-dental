import Link from 'next/link'
import {
  Sparkles,
  Smile,
  Anchor,
  ShieldCheck,
  AlignHorizontalDistributeCenter,
  Crown,
  Baby,
  HeartPulse,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { treatments } from '@/lib/site'

const icons = [Anchor, Smile, Sparkles, ShieldCheck, AlignHorizontalDistributeCenter, Crown, Baby, HeartPulse]

export function TreatmentsPreview() {
  return (
    <section className="relative bg-secondary/60 py-24 lg:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Comprehensive care for every smile."
            description="From routine hygiene to complete smile transformations, every treatment is delivered with precision and comfort."
          />
          <Reveal delay={100}>
            <Button
              render={<Link href="/treatments" />}
              variant="outline"
              className="rounded-full bg-transparent px-6"
            >
              View All Treatments
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={t.slug}
                delay={(i % 4) * 90}
                className="group h-full"
              >
                <Link
                  href="/treatments"
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
