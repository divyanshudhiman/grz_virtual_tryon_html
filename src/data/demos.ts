export interface TryOnDemo {
  id: string;
  chapter: string;
  title: string;
  shortTitle: string;
  category: string;
  videoSrc: string;
  description: string;
}

export const TRYON_DEMOS: TryOnDemo[] = [
  {
    id: "cap",
    chapter: "01",
    title: "Trying on caps",
    shortTitle: "Caps",
    category: "Hats & accessories",
    videoSrc: "/videos/combine-%20caps.mp4",
    description: "See different cap styles on your look in seconds.",
  },
  {
    id: "hoodie",
    chapter: "02",
    title: "Trying on hoodies",
    shortTitle: "Hoodies",
    category: "Jackets & layers",
    videoSrc: "/videos/combine-hoodies.mp4",
    description: "Preview hoodies and outer layers while you move naturally.",
  },
  {
    id: "tshirt",
    chapter: "03",
    title: "Trying on t-shirts",
    shortTitle: "T-shirts",
    category: "Tops",
    videoSrc: "/videos/combine-t-shirt.mp4",
    description: "Check fit and color on everyday tops before you buy.",
  },
  {
    id: "glasses",
    chapter: "04",
    title: "Trying on glasses",
    shortTitle: "Glasses",
    category: "Eyewear",
    videoSrc: "/videos/combinine-glasses.mp4",
    description: "Compare frames on your face without visiting a counter.",
  },
];
