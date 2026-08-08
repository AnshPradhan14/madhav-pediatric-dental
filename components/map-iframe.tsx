'use client'

import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export function MapIframe({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative h-[420px] w-full">
      {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
      <iframe
        title="Madhav Dental location on Google Maps"
        src={src}
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.2]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
