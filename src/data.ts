import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 3500000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    description: "M3 Max 칩을 탑재한 역대 가장 강력한 MacBook Pro",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1550000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop",
    description: "티타늄 디자인과 A17 Pro 칩 탑재",
  },
  {
    id: 3,
    name: "iPad Pro 12.9",
    price: 1790000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
    description: "M2 칩과 Liquid Retina XDR 디스플레이",
  },
  {
    id: 4,
    name: "AirPods Max",
    price: 769000,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop",
    description: "고충실도 오디오와 능동형 소음 차단",
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2",
    price: 1149000,
    category: "Wearable",
    image: "https://images.unsplash.com/photo-1696424911029-7c87c2b64a27?q=80&w=1000&auto=format&fit=crop",
    description: "극한의 활동을 위해 설계된 가장 견고한 Watch",
  },
  {
    id: 6,
    name: "Studio Display",
    price: 2090000,
    category: "Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
    description: "5K Retina 디스플레이와 12MP 울트라 와이드 카메라",
  },
];
