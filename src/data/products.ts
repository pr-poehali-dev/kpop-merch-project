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
    title: "CHECKMATE",
    artist: "ITZY",
    price: 2490,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Пятый мини-альбом ITZY с заглавным треком 'SNEAKERS' и энергичными композициями. Включает фотобук и стикеры. Наполнение: скоро",
  },
  {
    id: 6,
    title: "I NEVER DIE",
    artist: "(G)I-DLE",
    price: 2390,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Первый полный альбом (G)I-DLE с хитом 'TOMBOY' и уникальным звучанием группы. Содержит CD, фотобук 84 страницы. Наполнение: скоро",
  },
  {
    id: 7,
    title: "Face the Sun",
    artist: "SEVENTEEN",
    price: 2890,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Четвертый студийный альбом SEVENTEEN с заглавным треком 'Hot' и 9 новыми композициями. Наполнение: скоро",
  },
  {
    id: 8,
    title: "minisode 2: Thursday's Child",
    artist: "TXT",
    price: 2290,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Четвертый мини-альбом TXT с треком 'Good Boy Gone Bad' и меланхоличными композициями о взрослении. Наполнение: скоро",
  },
  {
    id: 9,
    title: "DIMENSION: DILEMMA",
    artist: "ENHYPEN",
    price: 2590,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Первый студийный альбом ENHYPEN с хитом 'Tamed-Dashed' и драматическими композициями. Наполнение: скоро",
  },
  {
    id: 10,
    title: "BORN PINK (Limited Edition)",
    artist: "BLACKPINK",
    price: 3990,
    originalPrice: 4490,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isSale: true,
    description:
      "Лимитированное издание второго студийного альбома BLACKPINK с треками 'Shut Down' и 'Pink Venom'. Включает эксклюзивные фотокарты. Наполнение: скоро",
  },
  {
    id: 11,
    title: "PROOF (Collector's Edition)",
    artist: "BTS",
    price: 4290,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Антологический альбом BTS с 48 треками, включая новые композиции 'Yet To Come' и 'Run BTS'. Коллекционное издание с 3 CD. Наполнение: скоро",
  },
  {
    id: 12,
    title: "NOEASY (Special Edition)",
    artist: "Stray Kids",
    price: 3190,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Специальное издание второго студийного альбома Stray Kids с хитом 'Thunderous' и бонусными треками. Наполнение: скоро",
  },
  {
    id: 13,
    title: "IM NAYEON (Solo Debut)",
    artist: "NAYEON (TWICE)",
    price: 2190,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Дебютный сольный альбом Нэён из TWICE с заглавным треком 'POP!' и личными композициями. Наполнение: скоро",
  },
  {
    id: 14,
    title: "NewJeans 2nd EP 'Get Up'",
    artist: "NewJeans",
    price: 2390,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Второй мини-альбом NewJeans с тройным заглавным треком 'Get Up', 'Super Shy', 'ETA'. Свежее звучание Y2K стиля. Наполнение: скоро",
  },
  {
    id: 15,
    title: "UNFORGIVEN",
    artist: "LE SSERAFIM",
    price: 2590,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "albums",
    rating: 5,
    inStock: true,
    description:
      "Первый студийный альбом LE SSERAFIM с заглавным треком 'UNFORGIVEN' в стиле вестерн-поп. Наполнение: скоро",
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
    title: "TWICE Candybong Z",
    artist: "TWICE",
    price: 7490,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
    category: "lightsticks",
    rating: 5,
    inStock: true,
    description:
      "Официальный лайтстик TWICE третьего поколения в форме леденца с яркими цветами и Bluetooth функциями. Наполнение: скоро",
  },
  {
    id: 19,
    title: "Stray Kids Nachimbong",
    artist: "Stray Kids",
    price: 7890,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
    category: "lightsticks",
    rating: 5,
    inStock: true,
    description:
      "Лайтстик Stray Kids в форме компаса с многоцветной LED подсветкой и синхронизацией с концертами. Наполнение: скоро",
  },
  {
    id: 20,
    title: "BTS Photocards Set (Map of the Soul: 7)",
    artist: "BTS",
    price: 1490,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    description:
      "Полный набор официальных фотокарт BTS из альбома Map of the Soul: 7. 7 карт всех участников в высоком качестве. Наполнение: скоро",
  },
  {
    id: 21,
    title: "TWICE Photocards Set (Formula of Love)",
    artist: "TWICE",
    price: 1290,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Коллекционный набор фотокарт TWICE из альбома Formula of Love. 9 карт всех участниц в высоком качестве печати. Наполнение: скоро",
  },
  {
    id: 22,
    title: "BLACKPINK Individual Photocards",
    artist: "BLACKPINK",
    price: 890,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    description:
      "Индивидуальные фотокарты участниц BLACKPINK из различных альбомов. Цена за одну карту, выберите участницу. Наполнение: скоро",
  },
  {
    id: 23,
    title: "SEVENTEEN Photocards Collection",
    artist: "SEVENTEEN",
    price: 1690,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    description:
      "Большая коллекция фотокарт SEVENTEEN из альбома Face the Sun. 13 карт всех участников группы. Наполнение: скоро",
  },
  {
    id: 24,
    title: "ITZY Special Photocards",
    artist: "ITZY",
    price: 1090,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    description:
      "Специальные фотокарты ITZY с эксклюзивными кадрами и автографами участниц. 5 карт в наборе. Наполнение: скоро",
  },
  {
    id: 25,
    title: "NewJeans 'Get Up' Photocards",
    artist: "NewJeans",
    price: 990,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "photocards",
    rating: 5,
    inStock: true,
    isNew: true,
    description:
      "Фотокарты NewJeans из альбома Get Up с уникальным Y2K дизайном. 5 карт участниц в ретро стиле. Наполнение: скоро",
  },
  {
    id: 26,
    title: "[ПРЕДЗАКАЗ] aespa 'MY WORLD' (Май 2024)",
    artist: "aespa",
    price: 2890,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "preorders",
    rating: 5,
    inStock: false,
    isNew: true,
    description:
      "Предзаказ третьего мини-альбома aespa 'MY WORLD' с заглавным треком 'Spicy'. Ожидаемая дата выхода: май 2024. Наполнение: скоро",
  },
  {
    id: 27,
    title: "[ПРЕДЗАКАЗ] IVE 'I'VE MINE' (Октябрь 2024)",
    artist: "IVE",
    price: 2690,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    category: "preorders",
    rating: 5,
    inStock: false,
    description:
      "Предзаказ первого студийного альбома IVE 'I'VE MINE' от Starship Entertainment. Ожидается в октябре 2024. Наполнение: скоро",
  },
  {
    id: 28,
    title: "[ПРЕДЗАКАЗ] (G)I-DLE '2' (Январь 2024)",
    artist: "(G)I-DLE",
    price: 2590,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    category: "preorders",
    rating: 5,
    inStock: false,
    description:
      "Предзаказ второго студийного альбома (G)I-DLE с рабочим названием '2'. Продолжение успеха I NEVER DIE. Наполнение: скоро",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Альбомы",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    itemCount: 89,
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
    name: "Фотокарты",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
    itemCount: 156,
    color: "from-green-500 to-blue-500",
  },
  {
    id: 4,
    name: "Предзаказы",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300",
    itemCount: 12,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    name: "Постеры",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300",
    itemCount: 67,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    name: "Аксессуары",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300",
    itemCount: 45,
    color: "from-indigo-500 to-purple-500",
  },
];
