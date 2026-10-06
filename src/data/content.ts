/** Single source for CTA labels — one primary action sitewide. */
export const CTAS = {
  live: "Try live demo",
  liveShort: "Try demo",
  demos: "Watch recorded demos",
  integrationGuide: "Integration guide",
  bookCall: "Book a call",
} as const;

export const TRUST = {
  worksWith: "Works with your stack",
  highlight: "+28% avg. conversion lift in pilot programs*",
  disclaimer:
    "*Illustrative outcomes from early deployments; results vary by category, traffic, and catalog.",
} as const;

export const FEATURES_SECTION = {
  eyebrow: "Why it helps",
  title: "Less abandonment.",
  titleAccent: "More confidence.",
  body: "Try-on gives store owners a clearer path from product view to purchase—and gives shoppers a reason to stay on site.",
} as const;

/** Nav order matches page scroll order (proof first, then value & depth). */
export const SITE_NAV = [
  { href: "#intro", label: "Intro" },
  { href: "#experience", label: "Overview" },
  { href: "#demos", label: "Demos" },
  { href: "#platform", label: "Benefits" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Why it helps" },
] as const;

export const INTRO_SECTION = {
  eyebrow: "Phone try-on",
  title: "Instant Fit from a phone.",
  titleAccent: "The fitting room shoppers actually use.",
  body: "Watch a mobile session: camera on, try the look on yourself, switch products in the same visit—no app to install.",
  videoSrc: "videos/Instantfit.mp4",
  videoLabel: "Instant Fit intro: virtual try-on from a phone",
  videoError: "This intro video could not load. Refresh the page or check that Instantfit.mp4 is in public/videos.",
} as const;

/** Primary audience: brands & retailers evaluating try-on for their store. */
export const HERO = {
  eyebrow: "For fashion & eyewear brands",
  title: "Give shoppers a fitting room online.",
  titleAccent: "Fewer guesses, more confident purchases.",
  body: "Browser-based virtual try-on helps customers see hats, tops, layers, and glasses on themselves before checkout—so your team can lift conversion and reduce fit-related returns.",
  chips: ["No app install", "Works on mobile & desktop", "In-store tablets supported"],
  previewBeforeLabel: "Catalog photo",
  previewAfterLabel: "Virtual try-on",
  previewCaption: "Category clips below go deeper on hats, layers, tops, and glasses—then open the live demo with your camera.",
  livePreviewBadge: "Live try-on preview",
  secondaryHint: "More category recordings:",
} as const;

export const FEATURES = [
  {
    image: "images/lifestyle/boutique-racks.webp",
    eyebrow: "Conversion",
    title: "Turn browsing into trying.",
    body: "When shoppers can preview on themselves, they move from interest to add-to-cart with less hesitation.",
  },
  {
    image: "images/lifestyle/retail-floor.webp",
    eyebrow: "Returns",
    title: "Fewer “not what I expected” moments.",
    body: "Visual try-on sets clearer expectations on fit, color, and scale before the order ships.",
  },
  {
    image: "images/lifestyle/flatlay-gear.webp",
    eyebrow: "Merchandising",
    title: "Show more SKUs without more floor space.",
    body: "Let customers explore categories in one session—online, in-store on a tablet, or in a sales demo.",
  },
] as const;

export const DEMO_SECTION = {
  eyebrow: "Step 1 · Proof",
  title: "Watch recorded",
  titleAccent: "try-on sessions.",
  bodyTop: "Four categories—caps, hoodies, tees, glasses. Pick a chapter, then open the live demo when you are ready.",
  body: "Four categories—caps, hoodies, t-shirts, glasses. Pick a chapter, then open the live room when you want to use your own camera.",
  nowPlaying: "Now playing",
  footnote: "These clips match the live fitting room. Your camera is only used when you open Try live.",
  sidebarLabel: "Pick a category",
  soundTip: "Tip: turn sound on to hear the session.",
  videoError: "This video could not load. Try another category or refresh the page.",
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "Step 3 · Rollout",
  title: "How it works",
  titleAccent: "for your store.",
  intro: "Three stages to go live—no heavy IT project. Shoppers get a simple browser session on your PDPs.",
  rolloutLabel: "Go live in 3 steps",
  integrationStages: [
    {
      step: "1",
      title: "Connect",
      summary: "Install the widget or add your API key.",
      detail: "Shopify app, storefront embed, or custom integration—same fitting room experience.",
    },
    {
      step: "2",
      title: "Catalog sync",
      summary: "Map apparel & eyewear to try-on.",
      detail: "Link SKUs to your product photos and category rules (hats, tops, layers, glasses).",
    },
    {
      step: "3",
      title: "Go live",
      summary: "Shoppers try on from your PDPs.",
      detail: "One camera prompt, live preview, switch products in the same session—camera off when they leave.",
    },
  ],
  useLabel: "Where you deploy it",
  useIntro: "Same build whether you are piloting, launching, or presenting to stakeholders.",
  paths: [
    {
      id: "shopper",
      icon: "🔗",
      title: "Pilot link",
      summary: "Share one URL for internal or partner trials.",
      steps: [
        "Send the live fitting room link.",
        "User picks a catalog item and allows the camera.",
        "They compare looks and exit—the camera stops.",
      ],
    },
    {
      id: "store",
      icon: "🛍️",
      title: "Store & site",
      summary: "Place try-on on the path to purchase.",
      steps: [
        "Add “Try it on” on PDPs or collection pages.",
        "Keep categories scannable.",
        "Use fixed tablets in-store where needed.",
      ],
    },
    {
      id: "share",
      icon: "📽️",
      title: "Sales & reviews",
      summary: "Use this page in pitches and QBRs.",
      steps: [
        "Walk through Intro, then Demos and Benefits.",
        "Open the live demo for a group moment.",
        "Bookmark for partners and leadership.",
      ],
    },
  ],
} as const;

export const PLATFORM = {
  eyebrow: "Step 2 · Business value",
  title: "What your store",
  titleAccent: "gets from day one.",
  body: "Live preview, short sessions, and category patterns that match how fashion and eyewear are sold—without a native app.",
} as const;

export const PLATFORM_STATS = [
  { label: "Fewer sizing & style mismatches (target)", value: "~30%" },
  { label: "Return-rate reduction potential", value: "Lower" },
  { label: "On-site time & engagement", value: "Higher" },
  { label: "Add-to-cart conversion lift (pilots)*", value: "+28%" },
] as const;

export const PLATFORM_PILLARS = [
  {
    title: "Revenue",
    items: [
      "Stronger path from product page to decision",
      "More SKUs get a visual trial per visit",
      "Upsell with what they already previewed",
      "Works alongside your existing catalog photos",
    ],
  },
  {
    title: "Operations",
    items: [
      "Organize by category and highlights",
      "Reuse standard product photography",
      "Short sessions for queues and kiosks",
      "Camera on only during try-on",
    ],
  },
  {
    title: "Experience",
    items: [
      "Phones, tablets, and desktop browsers",
      "Clear prompts for camera access",
      "Switch products in one session",
      "Plain-language errors when something fails",
    ],
  },
] as const;

export const CTA_BAND = {
  title: "Try the live fitting room",
  body: "Open the deployed demo with your camera—the same flow your customers would use on site.",
  secondary: "Not ready for camera?",
  secondaryLink: "Watch recorded demos first",
} as const;

export const FOOTER = {
  body: "Product demo for GRZ virtual try-on—share with merchants, partners, and internal teams.",
  legal: "Product demonstration",
} as const;
