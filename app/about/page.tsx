import type { Metadata } from 'next'
import Image from 'next/image'
import { HeartHandshake, Microscope, ShieldCheck, Sparkles, GraduationCap, Award, Stethoscope } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About Us | Madhav Dental',
  description:
    'Learn about Madhav Dental, a premium private dental clinic in Nikol, Ahmedabad, built around precision, comfort and patient confidence.',
}

const values = [
  {
    icon: HeartHandshake,
    title: 'Patient First',
    text: 'Every decision starts with your comfort, your goals and your peace of mind.',
  },
  {
    icon: Microscope,
    title: 'Clinical Precision',
    text: 'Magnification, digital imaging and meticulous technique in every procedure.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Hygiene',
    text: 'Hospital-grade sterilisation and single-use protocols you can trust.',
  },
  {
    icon: Sparkles,
    title: 'Aesthetic Excellence',
    text: 'Natural, beautiful results tailored to your unique smile and features.',
  },
]

const doctors = [
  {
    name: 'Dr. Jatin S. Patel',
    role: 'Maxillofacial Surgeon',
    qualification: 'MDS – KGMU Lucknow',
    experience: '10+ Years Experience',
    image: '/images/dr-jatin-patel.png',
    bio: 'Expert in dental implants, jaw reconstruction, and oral oncology with over a decade of clinical experience providing meticulous surgical outcomes.',
    specialties: ['Dental Implants', 'Jaw Reconstruction', 'Oral Oncology'],
  },
  {
    name: 'Dr. Poonam J. Patel',
    role: 'Pediatric Dentist Specialist',
    qualification: 'MDS – Pediatric Dentistry',
    experience: '10+ Years Experience',
    image: '/images/dr-poonam-patel.png',
    bio: 'Specialist in gentle, compassionate dental care for infants, children, and teens, dedicated to making every dental visit playful and stress-free.',
    specialties: ['Pediatric Dentistry', 'Preventative Care', 'Child Psychology'],
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumb="About"
        eyebrow="About Madhav Dental"
        title="Dentistry designed around you."
        description="A high-end private clinic in Ahmedabad where advanced technology, gentle expertise and genuine warmth come together."
      />

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/dentist.png"
                alt="Lead dentist at Madhav Dental"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A calmer, more considered kind of dental care."
              description="Madhav Dental was founded on a simple belief: exceptional dentistry should never feel clinical or rushed. We set out to build a space that feels more like a private retreat than a hospital."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                From our home in Nikol, Ahmedabad, we bring together
                internationally trained specialists, modern technology and a
                deeply personal approach. Whether you are visiting for a routine
                check-up or a complete smile transformation, you receive the same
                meticulous attention to detail.
              </p>
              <p>
                We take the time to listen, explain every option clearly, and
                design a treatment plan built entirely around you — no pressure,
                no surprises, just honest care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Specialist Care"
            title="Meet Our Lead Doctors"
            description="Our clinic is led by board-certified MDS specialists who bring decades of combined clinical excellence and compassionate patient care."
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {doctors.map((doc, idx) => (
              <Reveal key={doc.name} delay={idx * 150}>
                <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl sm:flex-row">
                  <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden sm:w-64">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 256px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <Stethoscope className="size-3.5" />
                          {doc.role}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-foreground">
                          <Award className="size-3.5" />
                          {doc.experience}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground">
                        {doc.name}
                      </h3>

                      <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <GraduationCap className="size-4 text-primary" />
                        {doc.qualification}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                        {doc.bio}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Areas of Expertise
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {doc.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Values"
            title="The principles behind every visit."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
