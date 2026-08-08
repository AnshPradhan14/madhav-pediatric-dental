import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { clinic } from '@/lib/site'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 lg:px-20 lg:py-24 noise-overlay">
        <Image
          src="/images/smile.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="relative max-w-2xl">
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            Ready for a smile you&apos;ll love?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Book your consultation today and discover dentistry that puts your
            comfort and confidence first.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="group rounded-full bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
              >
                Book Appointment
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
            <Button
              render={<a href={clinic.phoneHref} />}
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="mr-1 size-4" />
              {clinic.phone}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
