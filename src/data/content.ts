export const SITE_NAV = [
  { href: "#experience", label: "Overview" },
  { href: "#demos", label: "Videos" },
  { href: "#use", label: "How to use" },
  { href: "#platform", label: "Benefits" },
  { href: "#journey", label: "Steps" },
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

export const USE_GUIDE = {
  eyebrow: "Put it to work",
  title: "How you can",
  titleAccent: "use this.",
  intro:
    "Whether you are shopping, selling, or showing the product to your team, virtual try-on fits into a few simple workflows—no special training required.",
  paths: [
    {
      id: "shopper",
      title: "Try it as a customer",
      summary: "Experience the fitting room yourself in one visit.",
      steps: [
        "Open the live fitting room link on your phone or laptop.",
        "Select any product from the catalog panels.",
        "Allow camera access when prompted—nothing is saved unless you choose to.",
        "Move naturally and switch items to compare looks.",
        "When the session ends, pick another product to start again if you like.",
      ],
      ctaKey: "live" as const,
    },
    {
      id: "store",
      title: "Use it on your store or site",
      summary: "Give buyers a reason to stay on the product journey.",
      steps: [
        "Add a “Try it on” entry point on product or collection pages.",
        "Point customers to the same browser fitting room—they stay in your brand flow.",
        "Merchandise by category (tops, jackets, accessories, eyewear) so choices stay clear.",
        "Use try-on in stores on a tablet or kiosk for items not on the floor.",
        "Follow up with size guides or checkout once they find a look they want.",
      ],
      ctaKey: "live" as const,
    },
    {
      id: "share",
      title: "Share this presentation page",
      summary: "Walk stakeholders through the story before a live session.",
      steps: [
        "Start with the overview and sample videos on this page.",
        "Play each chapter (caps, hoodies, tees, glasses) during a call or pitch.",
        "Open the live fitting room so everyone can try on camera together.",
        "Use the benefits and steps sections to answer “how does it work?” questions.",
        "Bookmark this URL for internal demos and partner reviews.",
      ],
      ctaKey: "videos" as const,
    },
  ],
  ctaLive: "Open live fitting room",
  ctaVideos: "Jump to sample videos",
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
