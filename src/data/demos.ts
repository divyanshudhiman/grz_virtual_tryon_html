export interface TryOnDemo {
  id: string;
  chapter: string;
  title: string;
  shortTitle: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  thumbSrc: string;
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
    posterSrc: "images/demos/cap.webp",
    thumbSrc: "images/demos/cap.webp",
    description: "See different cap styles on your look in seconds.",
  },
  {
    id: "hoodie",
    chapter: "02",
    title: "Trying on hoodies",
    shortTitle: "Hoodies",
    category: "Jackets & layers",
    videoSrc: "/videos/combine-hoodies.mp4",
    posterSrc: "images/demos/hoodie.webp",
    thumbSrc: "images/demos/hoodie.webp",
    description: "Preview hoodies and outer layers while you move naturally.",
  },
  {
    id: "tshirt",
    chapter: "03",
    title: "Trying on t-shirts",
    shortTitle: "T-shirts",
    category: "Tops",
    videoSrc: "/videos/combine-t-shirt.mp4",
    posterSrc: "images/demos/tshirt.webp",
    thumbSrc: "images/demos/tshirt.webp",
    description: "Check fit and color on everyday tops before you buy.",
  },
  {
    id: "glasses",
    chapter: "04",
    title: "Trying on glasses",
    shortTitle: "Glasses",
    category: "Eyewear",
    videoSrc: "/videos/combinine-glasses.mp4",
    posterSrc: "images/demos/glasses.webp",
    thumbSrc: "images/demos/glasses.webp",
    description: "Compare frames on your face without visiting a counter.",
  },
];
