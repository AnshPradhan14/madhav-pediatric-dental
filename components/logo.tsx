import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label="Madhav Dental — home"
    >
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-full border transition-colors',
          onDark
            ? 'border-primary-foreground/30 text-primary-foreground'
            : 'border-primary/25 text-primary',
        )}
      >
        {/* Tooth mark */}
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3c-2.5 0-3.5 1.2-5 1.2S4 3.6 3.3 5.2C2.4 7.4 3 10 3.6 12.4c.5 2 .7 3.4 1.2 5.3.4 1.6.9 3 1.8 3 1.1 0 1.3-1.8 1.7-3.4.3-1.3.6-2.3 1.7-2.3s1.4 1 1.7 2.3c.4 1.6.6 3.4 1.7 3.4.9 0 1.4-1.4 1.8-3 .5-1.9.7-3.3 1.2-5.3C20.9 10 21.6 7.4 20.7 5.2 20 3.6 18.5 4.2 17 4.2S14.5 3 12 3Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-xl font-semibold tracking-tight',
            onDark ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          Madhav Dental
        </span>
        <span
          className={cn(
            'text-[0.62rem] font-medium uppercase tracking-[0.22em]',
            onDark ? 'text-primary-foreground/60' : 'text-muted-foreground',
          )}
        >
          Ahmedabad
        </span>
      </span>
    </Link>
  )
}
