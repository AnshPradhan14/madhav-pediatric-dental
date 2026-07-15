# Design System: Madhav Dental & Maxillofacial Homepage
**Project ID:** 11255269271424682671

## 1. Visual Theme & Atmosphere
The core aesthetic is "Modern Glassmorphism" with a premium, futuristic, and highly authoritative mood. The website feels airy yet grounded by its dark-mode focus, establishing trust and clinical excellence through sleek, tech-forward interfaces. It avoids typical generic sterile clinic designs, instead relying on a dynamic, deep, and luxurious environment accented by softly glowing mesh gradient backgrounds and frosted glass layers.

## 2. Color Palette & Roles
* **Deep Charcoal Space** (#121212): Functions as the primary canvas and base background. It provides a luxurious depth that makes text high-contrast and allows glowing elements to stand out.
* **Vibrant Electric Indigo** (#4d61fc): The primary interaction, accent, and highlight color. Used in button glows, icons, gradients, and hovering states to direct user attention.
* **Bright Sterling Silver** (#eaeaea): The core foreground text color. Highly legible against the dark background, used for primary headings and important information.
* **Slate Muted Blue** (#8c92ac): Softened secondary text color utilized for long-form body paragraphs and descriptions, offering visual relief from high-contrast whites.
* **Glass Shimmer Surface** (rgba(255, 255, 255, 0.03)): A semi-transparent overlay color applied to cards and containers to create the frosted "glass" illusion.
* **Thin Frosted Edge** (rgba(255, 255, 255, 0.05)): Used exclusively for borders on interactive elements and containers, anchoring translucent shapes to the viewport.

## 3. Typography Rules
* **Headings (Display):** Uses "Lexend" (sans-serif). Headers are styled with high font weights (Bold, Extrabold) and tight letter-spacing (`tracking-tight`) for a commanding, cinematic presence. Special headers often utilize transparent gradient clips.
* **Body Text (Sans):** Uses "Inter" (sans-serif). Body paragraphs leverage lighter font weights (`font-light`), open and airy letter-spacing (`tracking-wide`), and relaxed line heights to promote readability and elegance.
* **Badges/Microcopy:** Features extremely open letter-spacing (`tracking-[0.2em]`) with uppercase and small font sizes (`text-[10px]`) to exude premium luxury.

## 4. Component Stylings
* **Buttons & Badges:** Pill-shaped or completely rounded geometries (`rounded-full`). They regularly feature subtle, elegant primary-colored shadows (e.g., `shadow-[0_0_15px_rgba(77,97,252,0.1)]`) and translucent white borders. Interaction prompts smooth icon translations and amplified drop shadows.
* **Cards/Containers (Bento Grid Elements):** Substantial and generous curved corners (`rounded-[2rem]`). Backgrounds are frosted (`backdrop-blur-xl`, `bg-[rgba(255,255,255,0.03)]`) accompanied by a distinct 1px translucent border (`border-[rgba(255,255,255,0.05)]`). Interactive cards transition into richer opacities (`bg-[#121212]/80`) and feature magnetic glow effects under icons. 
* **Inputs/Forms:** Thin, crisp frosted borders overlaid on deep, semi-transparent dark backgrounds. Corners are softly contoured or pill-shaped to match the rounded nature of buttons, emitting a faint `Primary` glow when focused.
* **Icons:** Employed dynamically with extremely thin, elegant strokes (`font-extralight`), frequently housed within their own rounded-rectangle utility containers with slight color-tinted backgrounds.

## 5. Layout Principles
* **Whitespace Strategy:** Highly abundant and unrestricted. Utilizes very generous vertical padding (`py-24`) to give content sections plenty of breathing room, reinforcing the serene, spa-like feeling of the clinical brand.
* **Grid Alignment:** Highly structured following exact Bento Box principles (`grid gap-6 sm:grid-cols-2 lg:grid-cols-4`). Cards lock neatly into multi-column layouts, keeping dense information structured and digestible.
* **Visual Rhythm:** Section intros use centralized alignments, pairing a small upper-case badge with a large gradient headline to create a consistent, predictable, and grand entry into each new modular block. Layers frequently rely on high z-index stacking atop fixed, blurred mesh backgrounds.
