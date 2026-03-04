Nice — below is a detailed, ready-to-paste “Figma Make” style brief you can drop into Figma’s Make / AI plugin (or hand to a designer) to generate a mobile UI kit and interactive screens for NourishNet — Flock.io mobile features.
First I give a full, precise spec (what to create, how it should look & behave, copy, tokens, interactions, export rules, dev handoff). At the end I include a short single-block prompt you can paste straight into Figma Make if you want an immediate generation.

Full design brief — NourishNet (Flock.io) — Mobile app (detailed)
Purpose: mobile UX/UI kit + interactive prototype for NourishNet’s Flock.io features — an agent-driven system that detects food surplus, matches recipients, and notifies people. Build a clear, usable mobile experience for donors (businesses), recipients (public), volunteers, and human supervisors.
Target platforms: mobile first (iOS/Android) — design in 375×812 frame (iPhone X / typical phone). Use scalable tokens so it adapts to other widths.
Design language: friendly, modern, approachable. Flat + soft gradients, rounded corners, generous white space, micro-glow accents for agent activity. Visual hierarchy prioritized for readability on mobile. Use the color tokens below.

1) Design tokens (semantic + hex)
Use semantic tokens that map to components:
brand-primary = #2F80ED (blue) — Scout accents
brand-accent-1 = #F2C94C (yellow) — Coordinator accents
brand-accent-2 = #27AE60 (green) — Logistics accents
bg = #FFFFFF (white)
surface = #F6F8FA (very light neutral)
text-primary = #0F1724 (neutral dark)
text-secondary = #5B6470 (muted)
muted = #DDE6EE
danger = #E23E3E
success = #1EBC70
glow = linear gradient from #2FE0FF → #27AE60 (for streams)
Spacing & grid:
8pt base grid (4pt variant allowed).
Corner radii:
r-small = 6px; r-medium = 12px; r-pill = 9999px.
Touch targets ≥44×44 px.
Typography:
Primary: Inter (or system fallback), weights: Regular 400, Medium 600, Bold 700.
Sizes: 16/14 for body, 20–28 for headings, 32–40 for hero metrics. Use dynamic scaling tokens.
Iconography:
Rounded strokes, medium bold stroke weight, consistent line thickness. Use simple geometric metaphors (magnifier, network node, chat bubble).
Illustrations:
Friendly robot mascot icons for Scout/Coordinator/Logistics (blue/yellow/green). Provide simpler 48–64px icon versions for lists and a larger 160–240px illustrated mascot for onboarding/header.

2) Primary screens to create (frames & components)
Design each screen as a separate frame. Build reusable components (Header, BottomNav, Card, Modal, Toast, Avatar, Chip, ProgressRing).
A. Splash / Onboarding (3 screens)
Frame 1: Splash: brand mark, brief tagline “NourishNet — Agents for Zero Hunger”, skip/continue.
Frame 2–3: Two short panels: (1) How it works (icons: detect → match → notify); (2) Privacy + phone verification note.
CTA: “Get started” → Sign in with phone.
B. Auth: Phone + OTP
Phone entry (country code select), CTA “Send code”.
OTP input screen (6-digit). Microcopy: “We’ll text a code to your number.”
Progress states: resend timer, invalid code error, success state transition.
C. Home Feed (default landing) — main hub for recipients & volunteers
Top: header with hamburger/profile avatar on left, agent status indicator (small pulsing dot with Scout/Coordinator/Logistics small icon) on right.
Main: vertical feed of Surplus Cards stacked. Card fields:
Thumbnail (image placeholder), title (“Sunrise Bakery — 3 sandwiches”), distance/time (e.g. “0.3 mi • Ready 7–8 PM”), urgency chip (High / Medium / Low), small icon for dietary notes.
Actions: “Request” primary button (green) and a small “Later” bookmark.
Card states: available / claimed / expired. Provide “swipe left” to reveal Quick Actions: Claim, Save, Share.
Bottom: persistent FAB (Create Listing for donors; if recipient view, hide).
D. Map View
Full-screen map with pins (surplus pin = blue, recipient pin = green). Clustering for nearby pins.
Top search bar, filters (distance, dietary, urgency).
Tap a pin: bottom sheet opens with card details + “Request pickup” CTA.
E. Create Listing (Donor flow)
Quick fill UI: Photo(s) upload, items (free text short chips), quantity, best-before / expiry (picker), pickup window, preferred recipient types (charity, public, volunteers).
Auto-extract: OCR mock UI (if user uploads snapped image), small preview of parsed text.
Submit: shows estimated matches / suggest pickup packaging; “Publish” button returns to Home.
F. Listing Detail
Show full details, AGENT status line (Scout detected at X:XX, Coordinator matched with priority score 0.92, Logistics notified), timeline of events.
Primary CTA: “Confirm pickup” (for volunteers), or “Cancel listing” for donor.
G. Notifications & Inbox
Tabbed list: All / Agent alerts / Confirmations.
Example notifications:
Push/Inbox: “🍱 Free food: Sunrise Bakery — Code NOURISH5 — pick up by 20:00. Reply YES to confirm.”
Delivered/Confirmed badges, message threads (integrated chat mock).
Actionable notifications: accept in 1 tap, or reply with quick responses (Yes / No / Ask).
H. Messages (Human ↔ Agent / Group)
Lightweight chat view for Logistics messages and volunteer confirm flows. Message types: text, quick actions (Confirm), attachments.
Use generic chat iconography — avoid real WhatsApp/Telegram logos. Create “multi-channel” badge for messages indicating channel type.
I. Supervisor Mobile View (Human-in-loop)
Queue list of elicit tasks: compact card with snippet + confidence bar + Accept/Edit/Reject quick action. Tapping opens an edit modal.
Include ability to escalate, add note, and push update to agent.
J. Profile & Settings
Account info, preferences (language, notification channels, accessibility), devices (manage phone numbers), data export, help & feedback.
K. Impact (compact)
Small overview card: “Meals rescued”, “People reached”, CO₂ avoided — clickable to full dashboard (web).

3) Components & variants (detailed)
Cards
Sizes: full width minus 16px margin. Variants: default, highlighted, disabled (claimed).
Elements: Thumbnail 64×64, title, meta row, chips row, action row.
Bottom Navigation
5 tabs: Home, Map, Create (FAB center), Messages, Profile.
Selected state: tint + small dot indicator.
Bottom Sheet
3 heights: peek (120px), mid, full. Smooth spring animation. Drag to dismiss.
Toasts / Snackbars
40–56px high, top or bottom. Use success green or amber for warnings. Dismissible.
Modal / Confirm
Centered, rounded, with two CTAs (primary green). Support for optional text input for human-in-loop.
Progress ring / Urgency meter
Circular ring with percentage and label under; use for urgency score widget.
Agent status indicator
Small circular icon with color pulsing: blue/yellow/green. Tooltip on long press: “Scout: detecting surplus” etc.
Microcopy examples
Request button: “Request pickup”
Donor: “Publish surplus”
Confirmation text in notifications: “Reply YES to confirm pickup within 20m.”
Supervisor card label: “Clarify listing — low confidence (62%)”

4) Interaction & animation guidelines
Use 180–300ms transitions for micro interactions.
Map pin taps: scale up (0.9→1.1) with 200ms ease out.
Data stream animation: subtle looping particle motion along a path (Lottie recommended).
Buttons: ripple on tap (Android) and subtle highlight on iOS; haptic on critical actions.
Bottom sheet: springy drag with 20% overshoot; keep motion accessible (option to disable animations).

5) Accessibility
Text contrast ≥4.5:1 for body text; ≥3:1 for large headings.
All interactive elements reachable with 44×44 px target.
VoiceOver/ TalkBack labels: provide clear content descriptions (e.g., “Surplus card — Sunrise Bakery, 3 sandwiches, pickup window 7–8pm, Request pickup”).
Allow dynamic type scaling; test at 200% font size.
Colorblind-safe design — do not rely on color alone; use icons, shapes, and labels for urgency.

6) Copy, placeholders & sample data
Add sample dataset for prototype:
Bakery: “Sunrise Bakery — 3 unsold sandwiches” — expires 20:00 — distance 0.3 mi — urgency: High (0.92)
Volunteer message: “🍱 Free food alert! Code: NOURISH5 — pickup 7–8pm. Reply YES to confirm.”
Supervisor elicit entry: “Clarify: Sunrise Bakery listing — 3 unsold items? [Accept / Edit / Reject]”
Localization:
Provide space for i18n keys; avoid embedded text in images; use tokenized copy.

7) Prototyping & flows
Create interactive prototype flows:
Onboarding → Auth → Home feed
Home card → Detail → Request pickup → Notification → Confirm
Map tap → bottom sheet → Request
Donor Create flow → Publish → Auto-match simulation (show coordinator widget)
Supervisor queue → open elicit → Accept → pushes update to listing
Link transitions with hotspots: tap behavior, swipe to reveal actions.

8) Export & dev handoff
Icons: export SVG.
Screens: export 2× and 3× PNG for assets; provide 4k PNG for hero images.
Motion: export Lottie JSON for data flows / pulses.
Tokens: export design tokens JSON (colors, typography, spacing).
Component naming convention: component/element/variant (e.g., card/surplus/available).
Provide brief React Native mapping: Button → PrimaryButton, Card → SurplusCard, BottomSheet → BottomSheet.
Handoff notes:
Provide measurements, spacing, exportable SVG icons, and CSS-like style map (colors, font sizes, weights).
Supply content spec file with sample JSON payloads for feeds.

9) Asset list to include in Figma file
Robot mascots (blue/yellow/green) — multiple sizes & icon versions.
Generic chat icon (multi-channel).
Placeholder photos/illustrations for food thumbnails.
Small set of icons: plate, leaf, people group, clock, location, urgency flame.
Lottie assets: pulsing nodes for data stream, progress ring.

10) Handoff checklist for final delivery
All frames named & organized in pages: 01 Onboarding, 02 Auth, 03 Home, 04 Map, 05 Create, 06 ListingDetail, 07 Messages, 08 Supervisor, 09 Profile, 10 Impact.
Component library & tokens page.
Prototype links for the main flows.
Exported assets + tokens JSON included in a handoff page.
README in Figma describing interactions and dev suggestions.

One-line Figma Make prompt (copy-paste)
Use this short prompt with Figma’s Make plugin or paste into a design request:
Create a mobile UI kit and interactive 375×812 prototype for NourishNet (Flock.io) focused on agent-driven food rescue. Include: Splash/onboarding, Phone+OTP auth, Home feed (surplus cards with Request/Claim actions and swipe gestures), Map view with pins & filters, Create Listing flow (quick form + OCR preview), Listing detail (agent timeline + urgency score), Notifications/Inbox (actionable multi-channel messages), Messages (agent/volunteer chat), Supervisor mobile queue (elicit card + Accept/Edit/Reject), Profile & compact Impact view. Build a component library (Header, BottomNav 5 tabs, FAB, Card variants, BottomSheet, ProgressRing, Toast, Modal) and design tokens (brand blue #2F80ED, yellow #F2C94C, green #27AE60, bg white, surface #F6F8FA, text #0F1724), 8pt grid, Inter typography, accessible touch targets (≥44px), and animation guidance (200–300ms micro transitions, spring bottom sheet). Provide sample data for cards (e.g., “Sunrise Bakery — 3 unsold sandwiches — expires 20:00 — urgency 0.92”), push/notification copy (🍱 “Free food alert! Code: NOURISH5 — reply YES to confirm”), export-ready assets (SVG icons, 2×/3× PNG, Lottie for data stream), variant states (available/claimed/expired), and a linked prototype for flows: onboarding→auth→home→detail→request→confirm and supervisor elicit flow. Name components with component/element/variant convention, produce tokens JSON for dev handoff, and include a README with accessibility notes and dev mapping to React Native components.

If you want I can:
generate an even more compact “copy-paste into Figma Make” block tailored for only the Home + Map + Notifications screens, or
produce a ready JSON of design tokens you can import or paste into Figma Tokens plugin, or
output sample screen copy and localized text keys for i18n.
Which one would help you next?

