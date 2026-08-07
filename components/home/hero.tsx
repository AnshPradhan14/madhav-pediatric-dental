import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
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
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="group rounded-full px-7 text-base"
            >
              Book Your Appointment
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              render={<Link href="/treatments" />}
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Treatments
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
            {[
              { value: '15+', label: 'Years of Care' },
              { value: '12k+', label: 'Happy Smiles' },
              { value: '4.9★', label: 'Patient Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-primary-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
