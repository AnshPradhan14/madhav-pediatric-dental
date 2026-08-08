import type { Metadata } from 'next'
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
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { SmileComparison } from '@/components/smile-comparison'
import { CtaSection } from '@/components/cta-section'
import { FaqAccordion } from '@/components/faq-accordion'
import { treatments } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Treatments | Madhav Dental',
  description:
    'Explore the full range of premium dental treatments at Madhav Dental — implants, cosmetic dentistry, whitening, root canals, orthodontics and more.',
}

const icons = [Anchor, Smile, Sparkles, ShieldCheck, AlignHorizontalDistributeCenter, Crown, Baby, HeartPulse]

export default function TreatmentsPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Treatments"
        eyebrow="Our Treatments"
        title="Complete, precise dental care under one roof."
        description="From preventive hygiene to advanced restorative and cosmetic dentistry, each treatment is delivered with meticulous attention and genuine comfort."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((t, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={t.slug} delay={(i % 2) * 100} className="group">
                <article className="flex h-full gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      {t.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                    <Button
                      render={<Link href="/contact" />}
                      variant="link"
                      className="mt-3 h-auto p-0 text-primary"
                    >
                      Book this treatment
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <SmileComparison />

      <FaqAccordion />

      <CtaSection />
    </main>
  )
}
