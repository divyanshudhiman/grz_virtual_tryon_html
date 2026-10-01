/** Single source for CTA labels — one primary action sitewide. */
export const CTAS = {
  live: "Open live fitting room",
  liveShort: "Try live",
  demos: "See recorded demos",
} as const;

/** Nav order matches page scroll order. */
export const SITE_NAV = [
  { href: "#experience", label: "Overview" },
  { href: "#demos", label: "Demos" },
  { href: "#journey", label: "How it works" },
  { href: "#use", label: "How to use" },
  { href: "#platform", label: "Benefits" },
  { href: "#features", label: "Why it helps" },
] as const;

export const HERO = {
  eyebrow: "Virtual try-on for online shopping",
  title: "See it on yourself before you buy.",
  titleAccent: "A digital fitting room in your browser.",
  body: "Customers pick a product, turn on their camera, and preview caps, hoodies, tees, and glasses on themselves—like an in-store mirror, from any device.",
  tagline: "Web · Mobile · In-store kiosk",
} as const;

export const FEATURES = [
  {
    eyebrow: "Help customers decide",
    title: "Replace guesswork with a quick mirror moment.",
    body: "Shoppers check color, shape, and overall look before they add to cart or ask for help.",
  },
  {
    eyebrow: "Show more of your range",
    title: "Let more products get a fair try.",
    body: "Flip through tops, outerwear, hats, and eyewear in one visit—no dressing-room queue.",
  },
  {
    eyebrow: "Support your sales team",
    title: "Start with what caught their eye.",
    body: "Use the styles they preview to guide size advice, alternatives, or the right product page.",
  },
] as const;

export const DEMO_SECTION = {
  eyebrow: "Step 1 · Proof",
  title: "Watch recorded",
  titleAccent: "try-on sessions.",
  body: "Four real categories—caps, hoodies, t-shirts, glasses. Select a chapter, then open the live room when you are ready to use your own camera.",
  nowPlaying: "Now playing",
  footnote: "Recordings mirror the production fitting room. Live mode uses your camera.",
} as const;

export const USE_GUIDE = {
  eyebrow: "Step 3 · Deployment",
  title: "How you can",
  titleAccent: "use this.",
  intro: "Same product, three entry points—shopper trial, storefront integration, or stakeholder demo.",
  paths: [
    {
      id: "shopper",
      title: "Customer trial",
      summary: "One link, one session, immediate preview.",
      steps: [
        "Share the live fitting room URL.",
        "Customer picks a catalog item and allows the camera.",
        "They compare looks and exit when done—the camera stops.",
      ],
    },
    {
      id: "store",
      title: "Store & website",
      summary: "Embed the flow in the purchase path.",
      steps: [
        "Place “Try it on” on PDPs or collection pages.",
        "Keep categories clear so choices stay scannable.",
        "Use tablets in-store for items not on the floor.",
      ],
    },
    {
      id: "share",
      title: "Presentations",
      summary: "Use this page in reviews and pitches.",
      steps: [
        "Walk through Demos, then How it works.",
        "Open the live room for a group try-on moment.",
        "Bookmark this URL for partners and internal teams.",
      ],
    },
  ],
} as const;

export const JOURNEY = {
  eyebrow: "Step 2 · Flow",
  title: "What happens",
  titleAccent: "in a session.",
  intro: "End-to-end shopper flow—no app install.",
  steps: [
    "Fitting room opens in the browser",
    "Customer selects a product",
    "Camera permission (one prompt)",
    "Live preview on video",
    "Switch products in the same session",
    "Session ends; camera turns off",
  ],
} as const;

export const PLATFORM = {
  eyebrow: "Step 4 · Outcomes",
  title: "What you get",
  titleAccent: "out of the box.",
  body: "Live preview, short sessions, and catalog patterns that match how fashion is sold online and in store.",
} as const;

export const PLATFORM_STATS = [
  { label: "Preview updates as the customer moves", value: "Live" },
  { label: "Typical time for one try-on turn", value: "~30 sec" },
  { label: "Demo categories on this site", value: "4" },
  { label: "App install required", value: "No" },
] as const;

export const PLATFORM_PILLARS = [
  {
    title: "For shoppers",
    items: [
      "Browse hats, tops, jackets, and glasses in one place",
      "Turn on the camera once and preview right away",
      "Switch products without starting over",
      "Shop with more confidence",
    ],
  },
  {
    title: "For your team",
    items: [
      "Organize by category and highlight new items",
      "Use existing product photography",
      "Support recommendations with a visual anchor",
      "Link to your live store experience",
    ],
  },
  {
    title: "Built for daily use",
    items: [
      "Phones, tablets, and desktop browsers",
      "Short sessions for fair queueing",
      "Clear errors for camera or connection issues",
      "Camera active only during try-on",
    ],
  },
] as const;

export const CTA_BAND = {
  title: "Ready to try with your camera?",
  body: "Open the live fitting room on the deployed demo, or replay recorded sessions above.",
} as const;

export const FOOTER = {
  body: "Presentation site for the virtual try-on experience.",
  legal: "Product demonstration",
} as const;
