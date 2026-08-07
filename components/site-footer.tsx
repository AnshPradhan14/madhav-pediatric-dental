import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Logo } from '@/components/logo'
import { nav, treatments, clinic } from '@/lib/site'

const socials = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.1a1.54 1.54 0 1 1-1.54-1.54 1.54 1.54 0 0 1 1.54 1.54Z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v7A10 10 0 0 0 22 12Z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M18.9 2.75h3.3l-7.2 8.24 8.47 11.2h-6.63l-5.2-6.79-5.94 6.79H2.4l7.7-8.8L2 2.75h6.8l4.7 6.22 5.4-6.22Zm-1.16 17.7h1.83L6.35 4.6H4.4l13.34 15.85Z',
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:pr-6">
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A high-end private dental clinic in Ahmedabad dedicated to precision,
              comfort and smiles you can be confident in.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Treatments
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {treatments.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href="/treatments"
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={clinic.phoneHref} className="transition-colors hover:text-primary-foreground">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={clinic.emailHref} className="transition-colors hover:text-primary-foreground">
                  {clinic.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Mon–Sat: 9:30–13:00, 17:30–21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Madhav Dental. All rights reserved.</p>
          <p>Crafted with care in Ahmedabad, Gujarat.</p>
        </div>
      </div>
    </footer>
  )
}
