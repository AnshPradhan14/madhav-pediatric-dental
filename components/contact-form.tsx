'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { treatments } from '@/lib/site'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    // Simulated submission — connect to a backend or email service to go live.
    setTimeout(() => setStatus('done'), 1100)
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your request has been received. Our team will call you shortly to
          confirm your appointment.
        </p>
        <Button
          className="mt-6 rounded-full"
          variant="outline"
          onClick={() => setStatus('idle')}
        >
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 00000 00000"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="treatment" className="text-sm font-medium text-foreground">
            Treatment of interest
          </label>
          <select id="treatment" name="treatment" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a treatment
            </option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="Other">Not sure yet</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about what you need…"
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-full text-base"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending…
          </>
        ) : (
          'Request Appointment'
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll never share your details. By submitting you agree to be contacted
        about your enquiry.
      </p>
    </form>
  )
}
