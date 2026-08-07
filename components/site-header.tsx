'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { nav, clinic } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrolled(currentScrollY > 16)
      
      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !open) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300',
        hidden ? '-translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto',
      )}
    >
      <div
        className={cn(
          'flex h-16 w-full items-center justify-between rounded-full border px-5 sm:px-8 transition-all duration-300',
          scrolled
            ? 'border-border/40 bg-background/85 backdrop-blur-md shadow-sm'
            : 'border-border/20 bg-background/60 backdrop-blur-md',
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors hover:text-primary',
                  active ? 'text-primary' : 'text-foreground/70',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {clinic.phone}
          </a>
          <Button render={<Link href="/contact" />} className="rounded-full px-5">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'absolute inset-x-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out lg:hidden sm:inset-x-6',
          open ? 'max-h-[420px] border-border/40 opacity-100' : 'max-h-0 border-transparent opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-3 text-base font-medium transition-colors',
                  active
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/80 hover:bg-secondary',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button render={<Link href="/contact" />} className="mt-3 rounded-full">
            Book Appointment
          </Button>
          <a
            href={clinic.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            {clinic.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
