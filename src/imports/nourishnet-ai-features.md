# Figma Make Prompt: NourishNet Mobile App - Newest AI Features

**Figma Make command:** `Create production-ready iPhone 14 Pro mobile app screens (1170x2532, 460dpi) for NourishNet v2.0 showcasing 5 newest AI features with perfect dark theme (#0F1419 primary, #27AE60 emerald accents, #00D4FF cyan notifications, #F6AD55 impact gold), using 2026 neumorphic glassmorphism (8px corner radius, 12% backdrop blur, 20% splay control), integrating live Figma variables for nutrition scores (0-100), charity distances (0-50km), MCP message latency (18-47ms), and 87 UK charity network metrics. Generate 8 connected prototype flows with micro-interactions, haptics, and real-time data animations. Pull NourishNet design system components (NourishRoundedButton, NutritionGauge, CharityCard-v2, ImpactCounter).`

## Page 1: Core Design System & Variables Setup

**Design System Integration (Figma Make auto-import):**
```
Variables (Semantic Tokens):
--color-bg-primary: #0F1419 (charcoal)
--color-ai-emerald: #27AE60 (analytics/models)
--color-mcp-cyan: #00D4FF (agent coordination) 
--color-impact-gold: #F6AD55 (nutrition matches)
--radius-glass: 8px (neumorphic)
--blur-glass: 12% (2026 glassmorphism)
--spacing-xl: 24px (mobile scale)

Components (Auto-layout variants):
NourishRoundedButton (primary/secondary/ai)
NutritionGauge (0-100, 5 segments, emerald fill)
CharityCard-v2 (87 UK charities, protein gap indicator)
ImpactCounter (1,247 meals, 3.2t CO₂, £361K ARR)
MCPStatusBadge (latency 18-47ms, connected/disconnected)
```

**Glassmorphism 2026 Standards:**
```
Effects → Glass → Splay Control: 20% (subtle edge lift)
Corner radius: Individual control (TL:12px, TR:8px, BL:16px, BR:8px)
Backdrop blur: 12% + emerald tint (30% opacity)
Drop shadow: 0px 4px 24px rgba(39,174,96,0.12)
```

## Page 2: Screen 1 - AI Analytics Dashboard (Home)

**Frame: iPhone 14 Pro, Safe Area Padding: 20px**
```
[Status Bar: 09:47 | Signal | 87% | NourishNet v2.0.4]

[Hero Section - Glass Card, 100% width]
🚀 AI SCANNING LIVE - EC1Y 8LE
[Live Surplus Counter: 847 meals] [Rain Icon: +43% priority]

[3x Nutrition Gauges - Horizontal Scroll]
Protein: 92% [Emerald arc] | VitC: 78% [Cyan arc] | Carbs: 85%
"94% nutrition-perfect matches today"

[Bottom Nav: Home❤️ | Matches | Charities | Impact | Profile]
```

**Micro-interactions:**
```
Surplus counter: +1 animation → emerald pulse + haptic
Nutrition gauges: Live Prophet forecast arc → smooth 0.8s ease
Rain probability: Weather API → drop animation cascade
```

## Page 3: Screen 2 - Live MCP Agent Coordination

**Glass overlay notification system** (Figma Make AI flow):
```
[Floating MCP Status - Top Right, Always Visible]
🟢 3 Agents Active | 47ms Latency | 2.8 msg/sec

[Agent Status Cards - Vertical Stack, Auto-height]
SCOUT AGENT (YOLOv9 + Llama3.1)
"Sunrise Bakery EC1Y: 3 sandwiches 92.4% confidence"
[Live Camera Thumbnail → Bounding Boxes Emerald]

COORDINATOR AGENT (Mistral 7B)
"87 charities ranked | St Mungo's #1 (0.94 score)"
[Charity Leaderboard: 1px dashed emerald lines]

LOGISTICS AGENT (Gemma 2B)  
"WhatsApp/Telegram dispatched | 3/3 confirmed"
[Channel Icons: WhatsApp🟢 Telegram🟢 SMS🟡]
```

**Figma Make Interactions:**
```
Agent cards → Tap expands metrics (haptic medium)
MCP latency → Real-time counter (18-47ms range)
Live camera → 2s preview → bounding box overlay animation
```

## Page 4: Screen 3 - Newest AI Feature #1: Nutrition Gap Heatmap

**Full-screen interactive UK map** (Leaflet-style, 87 charity markers):
```
[Search Bar: "EC1Y 8LE" | Live Location 🔴]

[Heatmap Legend]
🔴 Critical: -43% protein (St Mungo's, Crisis UK)
🟠 High: -28% to -42% (Trussell, Shelter Cymru)
🟡 Medium: -15% to -27% (Food Foundation)

[Live Charity Cards - Bottom Sheet, Drag-to-expand]
1️⃣ St Mungo's EC1Y 8LE
📍 217m away | -43% protein ← 3 sandwiches PERFECT
👤 847/wk capacity | 12 residents waiting
[Claim Button: Emerald → Haptic Heavy]

2️⃣ Trussell Trust M1 1AA
📍 262km Manchester | -32% protein gap
[Driver Dispatch: £28 subsidy | 3hr ETA]
```

**Map Interactions (Figma Make Prototyping):**
```
Markers → Pulse emerald when nutrition-perfect match
Distance → Live calculation (PostGIS 50km radius)
Bottom sheet → Drag handle with 3 detent positions
```

## Page 5: Screen 4 - Newest AI Feature #2: Prophet Forecasting

**Full-width time series chart** (7-day Prophet forecast):
```
[Chart Header: "Tomorrow: 847 meals predicted"]
[Line Chart: Historical 623 → Forecast 847 ↑]
Confidence: 95% (784-912) [Emerald Shaded Area]

[Weather Impact Cards - Horizontal Scroll]
🌧️ Rain London: +43% surplus probability
❄️ Cold Snap Manchester: +28% bakery leftovers
🎓 School Half-Term: -15% demand (more surplus)

[Action Buttons]
"Pre-dispatch Drivers" [Gold → 87 charities alerted]
"Boost Scanning EC1Y/SE1" [Cyan → 15min intervals]
```

**Chart Animations:**
```
Forecast line → Draw from left, 1.2s cubic-bezier
Confidence bands → Fill emerald gradient post-line
Weather cards → Stack reorder by impact magnitude
```

## Page 6: Screen 5 - Newest AI Feature #3: NFT Food Donations

**Blockchain wallet integration** (CashScript L2):
```
[NFT Gallery - Horizontal Scroll]
#1747 "Sunrise Sandwiches EC1Y" [3D Sandwich Render]
Metadata: 24g protein | 847 cal | Expiry 17:00
Status: Claimed by St Mungo's ✓ Tx:0x847a1b...

[Subsidy Breakdown - Glass Pie Chart]
Driver: £1.47 (31%) | Donor Credit: £2.18 (46%)
DAO Treasury: £0.87 (18%) | Protocol: £0.28 (6%)

[Mint New Surplus Button]
"Post Bakery Surplus → Auto-Mint NFT" [Violet Pulse]
```

**NFT Interactions:**
```
NFT cards → Long-press reveals metadata JSON
Pie chart → Explode segments on tap (haptic light)
Mint button → Success → Confetti + emerald flash
```

## Page 7: Screen 6 - Newest AI Feature #4: Human-in-Loop Tasks

**Supervisor dashboard** (React Native bottom sheet):
```
[Task Priority Header]
#1747 HIGH: Clarify Sunrise Bakery listing [Timer: 2:41]

[Live Camera Feed - 1:1 Aspect]
[Emerald Bounding Boxes: Sandwich x3 92.4%]

[Allergy Confirmation Toggle List]
☑️ Ham & cheese (12 residents)
☐ Nuts/peanuts (0 flagged)  
☐ Gluten-free needed (3 residents)

[Action Buttons - Dual Emerald/Cyan]
✅ HAM OK FOR ALL [Primary → Claim Instantly]
❓ NEEDS REVIEW [Secondary → Escalate to Team]
```

**Haptic Feedback:**
```
Toggle switches → Selection haptic (light)
Primary button → Heavy success haptic
Camera feed → Subtle scan line sweep every 3s
```

## Page 8: Screen 7 - Newest AI Feature #5: RL Pricing Optimization

**Dynamic pricing dashboard** (QMIX MARL live):
```
[Current Surplus: Sunrise Bakery EC1Y 8LE]
Sandwich: £2.47 → RL Optimal: £2.18 (-12%) [Gold ↓]

[Agent Coordination Status]
🟢 7 NourishNet Agents vs 3 Competitors
📊 Coordination Score: 0.847 | +23% Social Welfare

[Pricing Impact Preview]
£2.18 → +29 meals matched (vs £2.47 = 18 meals)
St Mungo's: Fills 56% protein gap (-43% → -19%)
CO₂ Saved: 1.2kg → Blockchain Recorded ✓

[Deploy Pricing Button]
"Apply to 87 Charities" [Pulsing Gold]
```

**Pricing Animations:**
```
Price comparison → Smooth number transition 0.6s
Coordination score → Radial sweep animation
Impact metrics → Counter + particles effect
```

## Page 9: Screen 8 - Impact Dashboard (Network Effects)

**Full-screen celebration layout** (confetti-ready):
```
[Header Impact Counters - 3x Horizontal]
1,247 MEALS RESCUED | 3.2t CO₂ SAVED | £361K ARR

[UK Network Map - 12 Active Cities]
London 43 | Manchester 12 | Birmingham 9 | Bristol 7
Leeds 6 | Glasgow 5 | Cardiff 3 | Liverpool 2

[Live Celebration Cards]
🎉 St Mungo's: 3 sandwiches claimed (perfect match!)
🚚 Driver Aisha: 217m delivery (4min cycle)
⛓️ Blockchain: Tx confirmed 0x847a1b2c...

[Share Impact Button]
"Post to X: I rescued 3 meals today!" [Emerald Share Sheet]
```

**Celebration Interactions:**
```
Counters → Live increment + haptic on milestone
Map cities → Tap reveals charity count + pulse
Share sheet → Native iOS share with dynamic text
```

## Page 10: Prototype Flows & Handoff Instructions

**Figma Make Prototype Connections (8 Flows):**
```
1. Home → Nutrition Heatmap → Charity Detail → Claim
2. Home → MCP Agents → Human-in-Loop Task → Success  
3. Home → Prophet Forecast → Pre-dispatch Drivers
4. Home → NFT Gallery → Mint New Surplus → Success
5. Charity Detail → RL Pricing → Deploy Pricing → Impact
6. Human-in-Loop → Accept → Impact Celebration → Share
7. Impact Dashboard → UK Map → City Deep-dive
8. Profile → Wallet → Transaction History → NFT Gallery
```

**Dev Handoff Export (Figma Make Auto-Generate):**
```
✅ React Native + Expo + Reanimated 3
✅ Design Tokens → Style Dictionary → native-base
✅ Lottie animations for all micro-interactions
✅ Deep links: nourishnet://claim/EC1Y-1747
✅ Push notifications: MCP surplus alerts
✅ Offline-first: IndexedDB + Service Worker
✅ Web3Auth + CashScript wallet connect
```

**Figma Make Final Polish:**
```
Apply glassmorphism 2026 effects to ALL cards/buttons
Add emerald haptic feedback to ALL interactive elements
Live data bindings to 87 UK charity network
Dark theme variant + Light theme variant
iPhone 14 Pro + iPhone 16 Pro Max responsive
Perfect 60fps prototype with device frame
Export Dev Package: Tokens + Components + Code
```

**Production Metrics Displayed:**
```
87 UK Charities | 94% Nutrition-Perfect Matches
1,247 Meals/Week | 3.2t CO₂ Saved | £361K ARR
47ms MCP Latency | 18ms Chainlink Oracles
OpenClaw + FLock API + CashScript L2 Ready
```

This Figma Make prompt generates **production-ready mobile screens** showcasing **5 newest AI features** (Analytics Dashboard, MCP Coordination, Nutrition Heatmap, Prophet Forecasting, NFT Donations, Human-in-Loop, RL Pricing) with **perfect 2026 glassmorphism**, **live data bindings**, **micro-interactions**, and **87 UK charity network integration** - **hackathon judge-ready** for iOS deployment.