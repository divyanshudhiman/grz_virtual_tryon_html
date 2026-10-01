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
    videoSrc: "videos/combine- caps.mp4",
    posterSrc: "images/demos/cap.jpg",
    thumbSrc: "images/demos/cap.jpg",
    description: "See different cap styles on your look in seconds.",
  },
  {
    id: "hoodie",
    chapter: "02",
    title: "Trying on hoodies",
    shortTitle: "Hoodies",
    category: "Jackets & layers",
    videoSrc: "videos/combine-hoodies.mp4",
    posterSrc: "images/demos/hoodie.jpg",
    thumbSrc: "images/demos/hoodie.jpg",
    description: "Preview hoodies and outer layers while you move naturally.",
  },
  {
    id: "tshirt",
    chapter: "03",
    title: "Trying on t-shirts",
    shortTitle: "T-shirts",
    category: "Tops",
    videoSrc: "videos/combine-t-shirt.mp4",
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
    videoSrc: "videos/combinine-glasses.mp4",
    posterSrc: "images/demos/glasses.jpg",
    thumbSrc: "images/demos/glasses.jpg",
    description: "Compare frames on your face without visiting a counter.",
  },
];
