export const clinic = {
  name: 'Madhav Pediatric Dental Care',
  tagline: 'Maxillofacial Surgery & Implant Center',
  address: 'T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat',
  phone: '+91 88723 00851',
  phoneHref: 'tel:+918872300851',
  whatsapp: '+91 88723 00851',
  whatsappHref: 'https://wa.me/918872300851',
  email: 'contact@madhavdental.com',
  emailHref: 'mailto:contact@madhavdental.com',
  hours: [
    { day: 'Monday – Saturday', time: '9:30 AM – 1:00 PM' },
    { day: 'Monday – Saturday', time: '5:30 PM – 9:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Madhav+Pediatric+Dental+Care+-+Maxillofacial+Surgery+%26+Implant+Center,+Nikol,+Ahmedabad&output=embed',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Contact', href: '/contact' },
]

export type Treatment = {
  slug: string
  title: string
  short: string
  description: string
}

export const treatments: Treatment[] = [
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    short: 'Permanent, natural-looking tooth replacement.',
    description:
      'Titanium implants that restore full function and confidence, engineered for a lifetime of comfort and a seamless, natural aesthetic.',
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    short: 'Veneers, bonding and smile makeovers.',
    description:
      'Bespoke smile design using premium porcelain veneers and bonding, tailored to your facial features for a radiant, balanced smile.',
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    short: 'Professional, enamel-safe brightening.',
    description:
      'Clinically supervised whitening that lifts years of staining in a single visit, leaving your smile visibly brighter and healthier.',
  },
  {
    slug: 'root-canal',
    title: 'Root Canal Therapy',
    short: 'Painless, precise endodontic care.',
    description:
      'Advanced rotary endodontics performed under magnification to save your natural tooth with virtually no discomfort.',
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics & Aligners',
    short: 'Clear aligners and modern braces.',
    description:
      'Discreet clear aligners and precision braces that gently guide your teeth into perfect alignment on a plan built around you.',
  },
  {
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges',
    short: 'Durable, aesthetic tooth restoration.',
    description:
      'Custom ceramic crowns and bridges crafted for strength and a flawless match to your surrounding teeth.',
  },
  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    short: 'Gentle care for young smiles.',
    description:
      'A calm, playful approach that makes every visit stress-free while building healthy habits that last a lifetime.',
  },
  {
    slug: 'preventive-care',
    title: 'Preventive Care',
    short: 'Cleanings, check-ups and hygiene.',
    description:
      'Comprehensive examinations, professional cleaning and personalised guidance to keep your smile healthy for years to come.',
  },
]
