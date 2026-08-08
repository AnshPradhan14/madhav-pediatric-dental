import { cn } from '@/lib/utils'

interface AmbientGlowProps {
  className?: string
  color?: 'primary' | 'accent' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
}

export function AmbientGlow({
  className,
  color = 'primary',
  size = 'lg',
  position = 'center',
}: AmbientGlowProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full mix-blend-multiply opacity-40 dark:mix-blend-lighten dark:opacity-20',
        {
          'bg-primary': color === 'primary',
          'bg-accent': color === 'accent',
          'bg-secondary': color === 'secondary',
        },
        {
          'w-32 h-32 blur-[40px]': size === 'sm',
          'w-64 h-64 blur-[80px]': size === 'md',
          'w-96 h-96 blur-[120px]': size === 'lg',
          'w-[40rem] h-[40rem] blur-[160px]': size === 'xl',
        },
        {
          '-top-1/4 -left-1/4': position === 'top-left',
          '-top-1/4 -right-1/4': position === 'top-right',
          '-bottom-1/4 -left-1/4': position === 'bottom-left',
          '-bottom-1/4 -right-1/4': position === 'bottom-right',
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': position === 'center',
        },
        className,
      )}
      aria-hidden="true"
    />
  )
}
