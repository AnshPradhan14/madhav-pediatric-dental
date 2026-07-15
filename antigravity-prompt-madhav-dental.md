# Antigravity Prompt: Madhav Dental & Maxillofacial — Full Website Redesign

---

## CONTEXT & MISSION

You are redesigning the homepage of **Madhav Dental & Maxillofacial Clinic** — a premium dental and maxillofacial practice. The previous version was described by the client as "too basic." Your task is to rebuild it from scratch using a **"Modern Glassmorphism"** design system into something that feels extraordinary — cinematic, luxurious, and deeply authoritative.

The result must feel like it belongs alongside the world's most prestigious medical brands (think Align Technology, Straumann, Invisalign's own site) — not a local clinic template.

**Repository:** `https://github.com/AnshPradhan14/madhav-pediatric-dental`

---

## DESIGN SYSTEM (STRICT — DO NOT DEVIATE)

### Color Palette
| Role | Value |
|---|---|
| Primary Canvas | `#121212` |
| Electric Indigo (accent) | `#4d61fc` |
| Bright Sterling (text) | `#eaeaea` |
| Slate Muted Blue (secondary text) | `#8c92ac` |
| Glass Surface | `rgba(255,255,255,0.03)` |
| Frosted Edge (border) | `rgba(255,255,255,0.05)` |

### Typography
- **Display/Headings:** `Lexend` — Bold/Extrabold, tight `letter-spacing: -0.03em`, often using `background-clip: text` gradient fills
- **Body:** `Inter` — `font-weight: 300`, `letter-spacing: 0.04em`, `line-height: 1.8`
- **Badges/Microcopy:** Uppercase, `font-size: 10px`, `letter-spacing: 0.2em`, pill-shaped containers

### Component Rules
- Buttons: `border-radius: 9999px`, faint `box-shadow: 0 0 15px rgba(77,97,252,0.1)`, border `rgba(255,255,255,0.08)`
- Cards: `border-radius: 2rem`, `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.05)`
- Section padding: `padding: 7rem 0` minimum
- Icon containers: `border-radius: 1rem`, subtle indigo-tinted backgrounds

---

## WHAT TO BUILD

### Tech Stack
- **Next.js 14** with App Router
- **Tailwind CSS** (with custom config extending the design tokens)
- **Framer Motion** for all animations
- **TypeScript**
- Fonts via `next/font/google`: `Lexend` + `Inter`

---

## SECTIONS TO BUILD (in order)

### 1. NAVIGATION
- Sticky, frosted glass navbar: `backdrop-blur-xl`, `bg-[rgba(18,18,18,0.7)]`, bottom `border-b border-[rgba(255,255,255,0.05)]`
- Logo left: "Madhav" in Lexend Extrabold indigo, "Dental" in Sterling Silver
- Nav links center: `text-[#8c92ac]`, hover transition to `#eaeaea`
- CTA right: pill button — "Book Consultation" with indigo gradient fill and subtle glow
- On scroll: add heavier blur + slight border opacity lift
- Mobile: slide-in drawer from right

### 2. HERO SECTION — **THE CENTERPIECE**
This is the most important section. Make it unforgettable.

**Layout:**
- Full viewport height (`min-h-screen`)
- Fixed mesh gradient background: three large blurred radial blobs — deep indigo (`#4d61fc` at 15% opacity), purple (`#7c3aed` at 10% opacity), and near-black — layered with CSS `filter: blur(120px)` absolute-positioned elements
- **Animated particle field** using Canvas API or CSS: ~80 tiny dots floating upward very slowly, randomized opacity pulses. These represent precision, technology, care.

**Content (centered, stacked vertically):**
1. Tiny badge — "AWARD-WINNING MAXILLOFACIAL CARE · AHMEDABAD" — uppercase, 10px, `letter-spacing: 0.2em`, pill container with glass border
2. Giant headline (Lexend Extrabold, 6xl–8xl, tight tracking):
   ```
   Excellence in
   Every Smile.
   ```
   "Every Smile" uses gradient text: `background: linear-gradient(135deg, #eaeaea 0%, #4d61fc 60%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent`
3. Subheadline: Inter Light, `#8c92ac`, max-width 520px, centered. e.g. "Specialist care in dental implants, maxillofacial surgery, and smile transformation — delivered with technology and compassion."
4. Two CTA buttons side-by-side:
   - Primary: "Book a Consultation" — indigo gradient pill with glow shadow
   - Secondary: "Explore Services" — ghost pill, `border: rgba(255,255,255,0.1)`, text `#eaeaea`
5. **Trust indicators row** below buttons: three stats in a glass pill strip
   - `2000+ Smiles Transformed` · `15 Years Experience` · `Advanced CBCT Imaging`
   - Dividers between them as 1px vertical lines in `rgba(255,255,255,0.08)`

**Animations (Framer Motion):**
- Stagger-reveal: badge → headline → subheadline → buttons → stats, each 100ms apart, `initial: {opacity:0, y:30}` → `animate: {opacity:1, y:0}`, `ease: [0.25, 0.46, 0.45, 0.94]`
- Headline words split and animate in individually
- Particle field fades in after 600ms

**Scroll indicator:** animated bouncing chevron at the very bottom

---

### 3. BENTO GRID — SERVICES
Section header pattern (use everywhere):
- Small indigo badge above: "OUR SPECIALITIES"
- Large Lexend gradient headline: "Treatments Designed Around You"
- Subtext in `#8c92ac`

**Bento Grid Layout (4-column, collapsing to 2 on tablet, 1 on mobile):**
Build 8 service cards, varying sizes:
- 2 cards span `col-span-2` (featured services: Dental Implants, Smile Design)
- 4 cards are `col-span-1`
- 1 full-width card at bottom spanning all 4 cols (Emergency Care / About clinic)

Each card:
- Glass morphism: `backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[2rem]`
- Icon in a rounded container with subtle indigo background tint
- Service name in Lexend Bold `#eaeaea`
- Short description in Inter Light `#8c92ac`
- Bottom-right "→" arrow that translates on hover
- On card hover: `bg-[rgba(18,18,18,0.8)]`, icon container gets indigo glow `box-shadow: 0 0 20px rgba(77,97,252,0.3)`
- Cards animate in with staggered scroll-triggered reveal using Framer Motion `useInView`

Services to include:
1. Dental Implants (featured, col-span-2)
2. Smile Design / Cosmetic (featured, col-span-2)
3. Orthodontics / Braces
4. Root Canal Treatment
5. Maxillofacial Surgery
6. Pediatric Dentistry
7. Teeth Whitening
8. Emergency Dental Care (full-width bottom card)

---

### 4. WHY CHOOSE US — MARQUEE STRIP + FEATURE ROW
**Marquee strip (between sections):**
- Infinite horizontal scroll of clinic credentials: "CBCT 3D Imaging" · "Painless Procedures" · "15+ Years Experience" · "ISO Certified" · "Digital X-Ray" · "Same-Day Emergency" · (repeating)
- `background: rgba(77,97,252,0.08)`, `border-top/bottom: 1px solid rgba(77,97,252,0.15)`
- Text in `#4d61fc`, uppercase, `letter-spacing: 0.15em`
- Use pure CSS `@keyframes marquee` — no library needed

**Feature Row:**
- 4 horizontal items with large Lexend numbers + label + Inter Light description
- e.g.: `2000+` / Patients Treated · `98%` / Satisfaction Rate · `15` / Years of Excellence · `6` / Specialist Doctors
- Thin vertical dividers `rgba(255,255,255,0.05)` between them
- Animate numbers counting up with Framer Motion when scrolled into view

---

### 5. TECHNOLOGY SECTION — DARK EDITORIAL FEEL
- Two-column layout: Left = text, Right = a glass card containing a "tech specs" list
- Headline: "Where Precision Meets Care" with indigo gradient accent
- Bullet-free list: 4 technologies with icons, names, and one-line descriptions
  - CBCT 3D Cone Beam Imaging
  - Digital Intraoral Scanner
  - CAD/CAM Same-Day Crowns
  - Laser Dentistry
- Right card: large glass morphism card with dark background showing a stylized "Technology Stack" — list with glowing indigo dots, thin horizontal dividers
- Full-bleed section background: very subtle radial indigo gradient at 5% opacity from center

---

### 6. TESTIMONIALS — FLOATING CARDS
- Section header: "Words From Our Patients"
- Horizontal scroll carousel of 5–6 testimonial cards
- Each card: glass morphism, patient name in `#eaeaea` Lexend Bold, role/age/treatment in `#8c92ac` 10px uppercase, quote in Inter Light 16px, 5-star rating in indigo
- Cards have `width: 380px`, don't stretch full width — they float in the dark space
- Navigation: two minimal pill buttons (prev/next) or draggable scroll
- Auto-advance every 5 seconds using `setInterval`, pause on hover

---

### 7. ABOUT / DOCTOR PROFILE — SPLIT SECTION
- Left: doctor image in a glass frame (rounded-3xl border with indigo gradient border `border-image` or pseudo-element)
- Right: credentials in Lexend + Inter stack
  - Name, qualifications
  - Short bio Inter Light
  - 3 achievement pills (MDS, 15 Years, 2000+ Patients)
  - CTA: "Meet Our Team →"
- Background: the section itself has a left-heavy radial glow in deep indigo at 8% opacity

---

### 8. LOCATION + CONTACT CTA — FULL-WIDTH SECTION
- Dark glass card spanning near full-width with generous padding
- Left: Address, phone, WhatsApp button (green pill), hours in Inter Light `#8c92ac`
- Right: embedded Google Map with a dark filter overlay to match the theme (`filter: invert(90%) hue-rotate(180deg)` trick for dark-mode maps)
- Above the card: section headline "Find Us, Reach Us" with badge "VISIT THE CLINIC"

---

### 9. FOOTER
- Four-column footer: Logo+tagline · Services · Quick Links · Social
- All in `#8c92ac`, hover to `#eaeaea`
- Very bottom bar: `Copyright © 2025 Madhav Dental` · `Privacy Policy` · `Terms`
- Top border: 1px `rgba(255,255,255,0.05)`
- Social icons: LinkedIn, Instagram, Google — glass pill containers

---

## ANIMATIONS MASTER PLAN

Use Framer Motion throughout:
1. **Page load:** `AnimatePresence` wrapper with a slide-up reveal of the entire page
2. **Scroll reveals:** `useInView` + `motion.div` with `initial={opacity:0, y:40}` → `whileInView={opacity:1, y:0}` on all section content
3. **Card hover:** `whileHover={{scale:1.02}}` + CSS `box-shadow` transition
4. **Button hover:** `whileHover={{scale:1.04}}` + glow intensification
5. **Marquee:** Pure CSS `@keyframes` (no JS needed)
6. **Number counter:** Custom hook using Framer Motion's `useMotionValue` + `animate`
7. **Hero particles:** `requestAnimationFrame` canvas loop or individual `motion.div` elements with randomized `y` keyframes

---

## IMPLEMENTATION STEPS FOR STITCH MCP

Using Stitch MCP, apply the following modifications to the GitHub repo in order:

### Step 1: Update `tailwind.config.ts`
Extend with all custom design tokens: colors (`indigo: '#4d61fc'`, `canvas: '#121212'`, `sterling: '#eaeaea'`, `slate: '#8c92ac'`), fontFamily (`lexend`, `inter`), borderRadius (`card: '2rem'`), boxShadow (`glow: '0 0 15px rgba(77,97,252,0.3)'`, `button: '0 0 15px rgba(77,97,252,0.1)'`).

### Step 2: Update `app/layout.tsx`
Import Lexend + Inter via `next/font/google`. Apply CSS variables for both fonts. Set global `body` styles: `bg-canvas text-sterling antialiased`.

### Step 3: Create `components/ui/` directory with reusable components:
- `GlassCard.tsx` — the glass morphism card wrapper
- `Badge.tsx` — the uppercase microcopy pill badge
- `GlowButton.tsx` — primary CTA button with glow
- `GhostButton.tsx` — secondary ghost pill button
- `SectionHeader.tsx` — reusable badge + gradient headline + subtext pattern

### Step 4: Rebuild `app/page.tsx`
Replace entirely. Import and compose all sections:
```tsx
<HeroSection />
<ServicesSection />
<MarqueeStrip />
<StatsSection />
<TechnologySection />
<TestimonialsSection />
<DoctorSection />
<ContactSection />
```

### Step 5: Create all section components in `components/sections/`:
- `HeroSection.tsx` — with canvas particle animation, mesh background, staggered text reveals
- `ServicesSection.tsx` — bento grid with 8 service cards
- `MarqueeStrip.tsx` — CSS marquee credentials strip
- `StatsSection.tsx` — animated number counters
- `TechnologySection.tsx` — editorial two-column layout
- `TestimonialsSection.tsx` — horizontal scroll carousel
- `DoctorSection.tsx` — split layout with gradient image frame
- `ContactSection.tsx` — dark map embed + contact details

### Step 6: Add global CSS to `app/globals.css`
- Mesh background keyframes
- Marquee keyframe
- Scrollbar styling (thin, dark, indigo thumb)
- Custom selection color (indigo background)
- Smooth scroll: `scroll-behavior: smooth`

### Step 7: Update `package.json`
Ensure dependencies include: `framer-motion`, `@heroicons/react` (or `lucide-react`), `next`, `tailwindcss`.

---

## CRITICAL QUALITY BARS

- [ ] No white or light backgrounds anywhere — the entire site lives in the dark canvas
- [ ] Every interactive element has a hover state with a transition
- [ ] All animations respect `prefers-reduced-motion: reduce`
- [ ] Mobile-first responsive: sections collapse gracefully at 375px, 768px, 1024px
- [ ] No generic stock photo placeholders — use `bg-gradient` placeholder cards where images would go
- [ ] TypeScript strict mode — no `any` types
- [ ] The above-the-fold experience (Hero) must load with zero layout shift

---

## REFERENCE AESTHETIC

Think: the intersection of **Apple's product pages** (cinematic, confident, luxurious) + **Linear.app** (dark, precise, technical) + **Stripe's website** (trust-building through design authority). But applied to a dental clinic — warm enough to feel human, cold enough to feel clinical and precise.

The overarching feeling the client should have when they first see the homepage: *"This is clearly the best dental clinic in Ahmedabad."*
