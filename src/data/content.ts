export const SITE_NAV = [
  { href: "#experience", label: "Overview" },
  { href: "#demos", label: "Videos" },
  { href: "#platform", label: "Benefits" },
  { href: "#journey", label: "How it works" },
] as const;

export const HERO = {
  eyebrow: "Virtual try-on for online shopping",
  title: "See it on yourself before you buy.",
  titleAccent: "A digital fitting room in your browser.",
  body: "Customers pick a product, turn on their camera, and instantly preview caps, hoodies, tees, and glasses on their own image—just like trying things on in store, from anywhere.",
  tagline: "Online store · Mobile · In-store display",
  ctaLive: "Try it yourself",
  ctaVideos: "Watch sample videos",
  ctaBenefits: "See the benefits",
} as const;

export const FEATURES = [
  {
    eyebrow: "Help customers decide",
    title: "Replace guesswork with a quick mirror moment.",
    body: "Shoppers can check color, shape, and overall look on themselves before they add an item to the cart or ask for help.",
  },
  {
    eyebrow: "Show more of your range",
    title: "Let more products get a fair try.",
    body: "In one visit, people can flip through tops, outerwear, hats, and eyewear without changing clothes or waiting for a dressing room.",
  },
  {
    eyebrow: "Support your sales team",
    title: "Start with what caught their eye.",
    body: "When someone finds a look they love, staff—or the website—can suggest sizes, similar styles, or the right product page to finish the purchase.",
  },
] as const;

export const DEMO_SECTION = {
  eyebrow: "Sample videos",
  title: "See how it looks",
  titleAccent: "in real use.",
  body: "These recordings show the same try-on experience your customers get: pick an item, see it live on camera, and switch to another style in seconds.",
  nowPlaying: "Now playing",
  footnote:
    "Videos show caps, hoodies, t-shirts, and glasses. To use your own camera, open the live fitting room.",
  ctaLive: "Open live fitting room",
} as const;

export const JOURNEY = {
  eyebrow: "Simple steps",
  title: "How customers",
  titleAccent: "use virtual try-on.",
  intro: "No app download. The flow is designed to feel familiar—browse, preview on camera, and keep shopping.",
  steps: [
    "Open the fitting room from your website or demo link",
    "Choose a product from the catalog",
    "Allow the camera when the browser asks",
    "See the item on yourself in live video",
    "Tap another product to compare looks",
    "Close the session when finished—the camera stops",
  ],
} as const;

export const PLATFORM = {
  eyebrow: "What you get",
  title: "A fitting room customers",
  titleAccent: "actually understand.",
  body: "Virtual try-on brings the in-store mirror online: pick a product, see it on yourself, and explore alternatives in seconds—without downloading an app or guessing from flat photos alone.",
} as const;

export const PLATFORM_STATS = [
  { label: "Preview updates as the customer moves", value: "Live" },
  { label: "Typical time for one try-on turn", value: "~30 sec" },
  { label: "Product types in these demos", value: "4" },
  { label: "App install required", value: "No" },
] as const;

export const PLATFORM_PILLARS = [
  {
    title: "For shoppers",
    items: [
      "Browse hats, tops, jackets, and glasses in one place",
      "Turn on the camera once and preview looks right away",
      "Switch products without starting over",
      "Shop with more confidence",
    ],
  },
  {
    title: "For your team",
    items: [
      "Organize items by category and highlight what’s new",
      "Use the product photos you already have",
      "Give staff a visual hook for recommendations",
      "Connect try-on to your live store experience",
    ],
  },
  {
    title: "Built for daily use",
    items: [
      "Works on phones, tablets, and computers",
      "Short sessions so the next customer can go",
      "Friendly messages if the camera or connection needs attention",
      "Camera runs only while someone is actively trying on",
    ],
  },
] as const;

export const FOOTER = {
  body: "Explore virtual try-on for your store. Watch the samples here, then step into the live fitting room with your own camera.",
  ctaLive: "Open live fitting room",
  legal: "Product demonstration",
} as const;
