export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating: number;
  description?: string;
  images?: string[];
  isOnSale?: boolean;
}

export const categories = [
  { name: 'Electronics', icon: '', slug: 'electronics' },
  { name: 'Fashion', icon: '', slug: 'fashion' },
  { name: 'Groceries', icon: '', slug: 'groceries' },
  { name: 'Beauty & Health', icon: '', slug: 'beauty-health' },
  { name: 'Home Essentials', icon: '', slug: 'home-essentials' },
  { name: 'Sports', icon: '', slug: 'sports' },
];

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 82997,
    originalPrice: 99567,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
    category: 'Electronics',
    rating: 4.8,
    description: 'The latest iPhone with advanced camera system and A17 Pro chip.',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500'
    ],
    isOnSale: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 74617,
    originalPrice: 82917,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    category: 'Electronics',
    rating: 4.7,
    description: 'Premium Android smartphone with AI-powered features.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500'
    ],
    isOnSale: true
  },
  {
    id: 3,
    name: 'MacBook Pro M3',
    price: 165917,
    originalPrice: 207417,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'Electronics',
    rating: 4.9,
    description: 'Professional laptop with M3 chip for ultimate performance.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    ],
    isOnSale: true
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 20667,
    originalPrice: 24817,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
    category: 'Electronics',
    rating: 4.6,
    description: 'Wireless earbuds with active noise cancellation.',
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500'
    ],
    isOnSale: true
  },
  {
    id: 16,
    name: 'iPad Pro 12.9"',
    price: 91217,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    category: 'Electronics',
    rating: 4.8,
    description: 'Powerful tablet with M2 chip and Liquid Retina XDR display.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'
    ]
  },
  {
    id: 17,
    name: 'Sony WH-1000XM5',
    price: 33087,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
    category: 'Electronics',
    rating: 4.7,
    description: 'Industry-leading noise canceling wireless headphones.',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500'
    ]
  },
  {
    id: 18,
    name: 'Apple Watch Series 9',
    price: 33087,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    category: 'Electronics',
    rating: 4.6,
    description: 'Advanced smartwatch with health monitoring and fitness tracking.',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    ]
  },

  // Fashion
  {
    id: 5,
    name: 'Designer Jeans',
    price: 7387,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Fashion',
    rating: 4.5,
    description: 'Premium denim jeans with perfect fit and comfort.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500'
    ]
  },
  {
    id: 6,
    name: 'Summer Dress',
    price: 5395,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
    category: 'Fashion',
    rating: 4.4,
    description: 'Elegant summer dress perfect for any occasion.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500'
    ]
  },
  {
    id: 7,
    name: 'Leather Jacket',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
    category: 'Fashion',
    rating: 4.7,
    description: 'Genuine leather jacket with classic style.',
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500'
    ]
  },
  {
    id: 19,
    name: 'Casual T-Shirt',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Fashion',
    rating: 4.3,
    description: 'Comfortable cotton t-shirt in various colors and sizes.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500'
    ]
  },
  {
    id: 20,
    name: 'Winter Coat',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
    category: 'Fashion',
    rating: 4.6,
    description: 'Warm and stylish winter coat for cold weather.',
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'
    ]
  },
  {
    id: 21,
    name: 'Sneakers',
    price: 6557,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    category: 'Fashion',
    rating: 4.4,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'
    ]
  },

  // Groceries
  {
    id: 8,
    name: 'Organic Bananas',
    price: 331,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
    category: 'Groceries',
    rating: 4.3,
    description: 'Fresh organic bananas, perfect for healthy snacking.',
    images: [
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500'
    ]
  },
  {
    id: 9,
    name: 'Fresh Milk',
    price: 373,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
    category: 'Groceries',
    rating: 4.6,
    description: 'Fresh whole milk, perfect for your daily nutrition.',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500'
    ]
  },
  {
    id: 22,
    name: 'Organic Apples',
    price: 415,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
    category: 'Groceries',
    rating: 4.5,
    description: 'Crisp and sweet organic apples, great for snacking.',
    images: [
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500'
    ]
  },
  {
    id: 23,
    name: 'Whole Grain Bread',
    price: 273,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
    category: 'Groceries',
    rating: 4.4,
    description: 'Fresh baked whole grain bread, perfect for sandwiches.',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500'
    ]
  },
  {
    id: 24,
    name: 'Greek Yogurt',
    price: 497,
    image: 'https://images.unsplash.com/photo-1571212515413-4b4b4b4b4b4b?w=500',
    category: 'Groceries',
    rating: 4.7,
    description: 'Creamy Greek yogurt with probiotics for gut health.',
    images: [
      'https://images.unsplash.com/photo-1571212515413-4b4b4b4b4b4b?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    ]
  },

  // Beauty & Health
  {
    id: 10,
    name: 'Vitamin C Serum',
    price: 2489,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    category: 'Beauty & Health',
    rating: 4.8,
    description: 'Anti-aging vitamin C serum for glowing skin.',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 11,
    name: 'Moisturizing Cream',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
    category: 'Beauty & Health',
    rating: 4.5,
    description: 'Hydrating moisturizer for all skin types.',
    images: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 25,
    name: 'Hyaluronic Acid Serum',
    price: 2905,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    category: 'Beauty & Health',
    rating: 4.7,
    description: 'Intensive hydrating serum for plump, youthful skin.',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500'
    ]
  },
  {
    id: 26,
    name: 'Retinol Night Cream',
    price: 3319,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'Beauty & Health',
    rating: 4.6,
    description: 'Anti-aging night cream with retinol for smoother skin.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 27,
    name: 'Sunscreen SPF 50',
    price: 1659,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    category: 'Beauty & Health',
    rating: 4.5,
    description: 'Broad spectrum sunscreen for daily protection.',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500'
    ]
  },

  // Home Essentials
  {
    id: 12,
    name: 'Smart Coffee Maker',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    category: 'Home Essentials',
    rating: 4.6,
    description: 'WiFi-enabled coffee maker with app control.',
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'
    ]
  },
  {
    id: 13,
    name: 'Air Purifier',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.7,
    description: 'HEPA air purifier for clean indoor air.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'
    ]
  },
  {
    id: 28,
    name: 'Smart Vacuum Cleaner',
    price: 24817,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.5,
    description: 'Robot vacuum with smart mapping and app control.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'
    ]
  },
  {
    id: 29,
    name: 'Smart Thermostat',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    category: 'Home Essentials',
    rating: 4.6,
    description: 'WiFi thermostat with energy-saving features.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
    ]
  },
  {
    id: 30,
    name: 'LED Desk Lamp',
    price: 6557,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.4,
    description: 'Adjustable LED desk lamp with multiple brightness levels.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'
    ]
  },

  // Sports
  {
    id: 14,
    name: 'Running Shoes',
    price: 10707,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Sports',
    rating: 4.6,
    description: 'Comfortable running shoes with excellent cushioning.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'
    ]
  },
  {
    id: 15,
    name: 'Yoga Mat',
    price: 3319,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    category: 'Sports',
    rating: 4.4,
    description: 'Non-slip yoga mat for all types of exercises.',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'
    ]
  },
  {
    id: 31,
    name: 'Dumbbell Set',
    price: 7387,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
    category: 'Sports',
    rating: 4.5,
    description: 'Adjustable dumbbell set for home workouts.',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'
    ]
  },
  {
    id: 32,
    name: 'Resistance Bands',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    category: 'Sports',
    rating: 4.3,
    description: 'Set of resistance bands for strength training.',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    ]
  },
  {
    id: 33,
    name: 'Fitness Tracker',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    category: 'Sports',
    rating: 4.7,
    description: 'Advanced fitness tracker with heart rate monitoring.',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'
    ]
  },
  {
    id: 3,
    name: 'MacBook Pro M3',
    price: 165917,
    originalPrice: 207417,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'Electronics',
    rating: 4.9,
    description: 'Professional laptop with M3 chip for ultimate performance.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    ],
    isOnSale: true
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 20667,
    originalPrice: 24817,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
    category: 'Electronics',
    rating: 4.6,
    description: 'Wireless earbuds with active noise cancellation.',
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500'
    ],
    isOnSale: true
  },
  {
    id: 16,
    name: 'iPad Pro 12.9"',
    price: 91217,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    category: 'Electronics',
    rating: 4.8,
    description: 'Powerful tablet with M2 chip and Liquid Retina XDR display.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'
    ]
  },
  {
    id: 17,
    name: 'Sony WH-1000XM5',
    price: 33087,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
    category: 'Electronics',
    rating: 4.7,
    description: 'Industry-leading noise canceling wireless headphones.',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500'
    ]
  },
  {
    id: 18,
    name: 'Apple Watch Series 9',
    price: 33087,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    category: 'Electronics',
    rating: 4.6,
    description: 'Advanced smartwatch with health monitoring and fitness tracking.',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    ]
  },

  // Fashion
  {
    id: 5,
    name: 'Designer Jeans',
    price: 7387,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Fashion',
    rating: 4.5,
    description: 'Premium denim jeans with perfect fit and comfort.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500'
    ]
  },
  {
    id: 6,
    name: 'Summer Dress',
    price: 5395,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
    category: 'Fashion',
    rating: 4.4,
    description: 'Elegant summer dress perfect for any occasion.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500'
    ]
  },
  {
    id: 7,
    name: 'Leather Jacket',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
    category: 'Fashion',
    rating: 4.7,
    description: 'Genuine leather jacket with classic style.',
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500'
    ]
  },
  {
    id: 19,
    name: 'Casual T-Shirt',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Fashion',
    rating: 4.3,
    description: 'Comfortable cotton t-shirt in various colors and sizes.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500'
    ]
  },
  {
    id: 20,
    name: 'Winter Coat',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
    category: 'Fashion',
    rating: 4.6,
    description: 'Warm and stylish winter coat for cold weather.',
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'
    ]
  },
  {
    id: 21,
    name: 'Sneakers',
    price: 6557,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    category: 'Fashion',
    rating: 4.4,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'
    ]
  },

  // Groceries
  {
    id: 8,
    name: 'Organic Bananas',
    price: 331,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
    category: 'Groceries',
    rating: 4.3,
    description: 'Fresh organic bananas, perfect for healthy snacking.',
    images: [
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500'
    ]
  },
  {
    id: 9,
    name: 'Fresh Milk',
    price: 373,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
    category: 'Groceries',
    rating: 4.6,
    description: 'Fresh whole milk, perfect for your daily nutrition.',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500'
    ]
  },
  {
    id: 22,
    name: 'Organic Apples',
    price: 415,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
    category: 'Groceries',
    rating: 4.5,
    description: 'Crisp and sweet organic apples, great for snacking.',
    images: [
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b04e?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500'
    ]
  },
  {
    id: 23,
    name: 'Whole Grain Bread',
    price: 273,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
    category: 'Groceries',
    rating: 4.4,
    description: 'Fresh baked whole grain bread, perfect for sandwiches.',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500'
    ]
  },
  {
    id: 24,
    name: 'Greek Yogurt',
    price: 497,
    image: 'https://images.unsplash.com/photo-1571212515413-4b4b4b4b4b4b?w=500',
    category: 'Groceries',
    rating: 4.7,
    description: 'Creamy Greek yogurt with probiotics for gut health.',
    images: [
      'https://images.unsplash.com/photo-1571212515413-4b4b4b4b4b4b?w=500',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    ]
  },

  // Beauty & Health
  {
    id: 10,
    name: 'Vitamin C Serum',
    price: 2489,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    category: 'Beauty & Health',
    rating: 4.8,
    description: 'Anti-aging vitamin C serum for glowing skin.',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 11,
    name: 'Moisturizing Cream',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
    category: 'Beauty & Health',
    rating: 4.5,
    description: 'Hydrating moisturizer for all skin types.',
    images: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 25,
    name: 'Hyaluronic Acid Serum',
    price: 2905,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    category: 'Beauty & Health',
    rating: 4.7,
    description: 'Intensive hydrating serum for plump, youthful skin.',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500'
    ]
  },
  {
    id: 26,
    name: 'Retinol Night Cream',
    price: 3319,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    category: 'Beauty & Health',
    rating: 4.6,
    description: 'Anti-aging night cream with retinol for smoother skin.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    ]
  },
  {
    id: 27,
    name: 'Sunscreen SPF 50',
    price: 1659,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    category: 'Beauty & Health',
    rating: 4.5,
    description: 'Broad spectrum sunscreen for daily protection.',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500'
    ]
  },

  // Home Essentials
  {
    id: 12,
    name: 'Smart Coffee Maker',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    category: 'Home Essentials',
    rating: 4.6,
    description: 'WiFi-enabled coffee maker with app control.',
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'
    ]
  },
  {
    id: 13,
    name: 'Air Purifier',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.7,
    description: 'HEPA air purifier for clean indoor air.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'
    ]
  },
  {
    id: 28,
    name: 'Smart Vacuum Cleaner',
    price: 24817,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.5,
    description: 'Robot vacuum with smart mapping and app control.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'
    ]
  },
  {
    id: 29,
    name: 'Smart Thermostat',
    price: 12367,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    category: 'Home Essentials',
    rating: 4.6,
    description: 'WiFi thermostat with energy-saving features.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
    ]
  },
  {
    id: 30,
    name: 'LED Desk Lamp',
    price: 6557,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Home Essentials',
    rating: 4.4,
    description: 'Adjustable LED desk lamp with multiple brightness levels.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'
    ]
  },

  // Sports
  {
    id: 14,
    name: 'Running Shoes',
    price: 10707,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Sports',
    rating: 4.6,
    description: 'Comfortable running shoes with excellent cushioning.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'
    ]
  },
  {
    id: 15,
    name: 'Yoga Mat',
    price: 3319,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    category: 'Sports',
    rating: 4.4,
    description: 'Non-slip yoga mat for all types of exercises.',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'
    ]
  },
  {
    id: 31,
    name: 'Dumbbell Set',
    price: 7387,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
    category: 'Sports',
    rating: 4.5,
    description: 'Adjustable dumbbell set for home workouts.',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'
    ]
  },
  {
    id: 32,
    name: 'Resistance Bands',
    price: 2075,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    category: 'Sports',
    rating: 4.3,
    description: 'Set of resistance bands for strength training.',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    ]
  },
  {
    id: 33,
    name: 'Fitness Tracker',
    price: 16517,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
    category: 'Sports',
    rating: 4.7,
    description: 'Advanced fitness tracker with heart rate monitoring.',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'
    ]
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getPopularProducts = () => {
  return products.filter(product => product.rating >= 4.6);
};

export const getProductsOnSale = () => {
  return products.filter(product => product.isOnSale === true);
};
