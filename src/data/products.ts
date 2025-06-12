export interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Map of the Soul: 7",
    artist: "BTS",
    price: 2990,
    originalPrice: 3490,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isSale: true,
    description:
      "Полный студийный альбом группы BTS с 20 треками. Включает хиты 'ON', 'Black Swan' и 'My Time'. Наполнение: скоро",
  },
  {
    id: 2,
    title: "THE ALBUM",
    artist: "BLACKPINK",
    price: 2790,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Дебютный полноформатный альбом BLACKPINK с треками 'How You Like That', 'Ice Cream', 'Lovesick Girls'. Наполнение: скоро",
  },
  {
    id: 3,
    title: "Formula of Love",
    artist: "TWICE",
    price: 2590,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Третий полный альбом TWICE с заглавным треком 'Scientist' и 16 яркими композициями. Наполнение: скоро",
  },
  {
    id: 4,
    title: "CIRCUS",
    artist: "Stray Kids",
    price: 2690,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Мини-альбом Stray Kids с мощными треками включая заглавный 'CIRCUS' и яркие B-side композиции. Наполнение: скоро",
  },
  {
    id: 5,
    title: "BTS Army Bomb Ver.4",
    artist: "BTS",
    price: 8990,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
    category: "lightsticks",
    rating: 5,
    inStock: true,
    description:
      "Официальный лайтстик BTS четвертого поколения с Bluetooth подключением и синхронизацией с концертами. Наполнение: скоро",
  },
  {
    id: 6,
    title: "BLACKPINK Lightstick",
    artist: "BLACKPINK",
    price: 7990,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
    category: "lightsticks",
    rating: 5,
    inStock: true,
    description:
      "Стильный лайтстик BLACKPINK в фирменном розово-черном дизайне с LED подсветкой и управлением через приложение. Наполнение: скоро",
  },
  {
    id: 7,
    title: "BTS Hoodie Purple",
    artist: "BTS",
    price: 4990,
    originalPrice: 5990,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "clothing",
    rating: 4,
    inStock: true,
    isSale: true,
    description:
      "Уютная толстовка BTS в фирменном фиолетовом цвете с логотипом группы. Материал: 80% хлопок, 20% полиэстер. Наполнение: скоро",
  },
  {
    id: 8,
    title: "TWICE Photocards Set",
    artist: "TWICE",
    price: 1290,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Коллекционный набор фотокарт TWICE из последнего альбома. 9 карт всех участниц в высоком качестве печати. Наполнение: скоро",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Альбомы",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    itemCount: 156,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Лайтстики",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300",
    itemCount: 24,
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    name: "Одежда",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
    itemCount: 89,
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    name: "Фотокарты",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
    itemCount: 234,
    color: "from-green-500 to-blue-500",
  },
  {
    id: 5,
    name: "Постеры",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300",
    itemCount: 67,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    name: "Аксессуары",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300",
    itemCount: 145,
    color: "from-indigo-500 to-purple-500",
  },
];
