import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { AnimatedStats } from '@/components/home/animated-stats'
import { AmbientGlow } from '@/components/ambient-glow'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden noise-overlay">
      <Image
        src="/images/hero-clinic.png"
        alt="Interior of the Madhav Dental clinic in Ahmedabad"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      <AmbientGlow position="center" color="accent" size="lg" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
            <Star className="size-3.5 fill-accent text-accent" />
            Premium Dental Care in Ahmedabad
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
            A smile crafted with precision and care.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            At Madhav Dental, world-class dentistry meets genuine warmth. We combine
            advanced technology with a calm, luxurious experience so every visit
            leaves you confident.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="group rounded-full px-7 text-base"
              >
                Book Your Appointment
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
            <Button
              render={<Link href="/treatments" />}
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Treatments
            </Button>
          </div>

          <AnimatedStats />
        </div>
      </div>
    </section>
  )
}
