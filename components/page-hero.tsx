import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-primary-foreground) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <li>
              <Link href="/" className="transition-colors hover:text-primary-foreground">
                Home
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li className="text-primary-foreground/90">{breadcrumb}</li>
          </ol>
        </nav>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
