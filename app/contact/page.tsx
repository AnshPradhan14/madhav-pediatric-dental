import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { clinic } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Appointments | Madhav Dental',
  description:
    'Book an appointment or visit Madhav Dental at T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad. Call +91 88723 00851 or message us on WhatsApp.',
}

const details = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: clinic.address,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: clinic.phone,
    href: clinic.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: clinic.whatsapp,
    href: clinic.whatsappHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: clinic.email,
    href: clinic.emailHref,
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact & Appointments"
        title="Let's plan your visit."
        description="Book an appointment, ask a question, or simply drop by. Our team is ready to welcome you to Madhav Dental."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="We're here to help you smile."
              description="Reach us through any of the channels below, or use the form to request an appointment and we'll call you back to confirm."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {details.map((d, i) => {
                const content = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">
                        {d.value}
                      </p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={d.label} delay={i * 80}>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={120}>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Working Hours
                  </p>
                </div>
                <ul className="mt-5 divide-y divide-border">
                  {clinic.hours.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="text-foreground">{h.day}</span>
                      <span className="font-medium text-muted-foreground">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section aria-label="Clinic location map" className="w-full">
        <iframe
          title="Madhav Dental location on Google Maps"
          src={clinic.mapEmbed}
          className="h-[420px] w-full border-0 grayscale-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>
  )
}
