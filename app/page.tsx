import { Hero } from '@/components/home/hero'
import { AboutPreview } from '@/components/home/about-preview'
import { TreatmentsPreview } from '@/components/home/treatments-preview'
import { Process } from '@/components/home/process'
import { Testimonials } from '@/components/home/testimonials'
import { CtaSection } from '@/components/cta-section'

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <TreatmentsPreview />
      <Process />
      <Testimonials />
      <CtaSection />
    </main>
  )
}
