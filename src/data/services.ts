import placeholderImage from '@/assets/placeholder.webp';

export interface Service {
  id: string;
  category: 'activity' | 'tour' | 'transportation';
  subcategory?: 'agafay' | 'palmeraie' | string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  duration: string;
  image: string;
  location: string;
  inclusions: string[];
  gallery?: string[];
}

export const services: Service[] = [
  // Activities
  {
    id: 'quad-biking-palm-grove',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad Biking in Palm Grove',
    shortDescription: 'Thrilling desert adventure through Marrakech palm groves',
    description: 'Experience the thrill of quad biking through the stunning palm groves of Marrakech. Navigate through traditional Berber villages and enjoy breathtaking desert landscapes.',
    price: '€45',
    duration: '2 hours',
    image: placeholderImage,
    location: 'Marrakech Palm Grove',
    inclusions: ['Professional guide', 'Safety equipment', 'Hotel pickup/drop-off', 'Refreshments'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'camel-riding-sunset',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Sunset Camel Ride',
    shortDescription: 'Magical sunset experience on camelback in the desert',
    description: 'Embark on a traditional camel ride through the desert as the sun sets, creating unforgettable memories against stunning Moroccan landscapes.',
    price: '€35',
    duration: '1.5 hours',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['Experienced camel guide', 'Traditional tea ceremony', 'Hotel transfer', 'Sunset viewing'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'hot-air-balloon',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Hot Air Balloon Adventure',
    shortDescription: 'Soar above Marrakech at sunrise for breathtaking views',
    description: 'Float peacefully above the stunning landscapes of Marrakech and the Atlas Mountains in a hot air balloon at sunrise.',
    price: '€195',
    duration: '4 hours',
    image: placeholderImage,
    location: 'Marrakech Region',
    inclusions: ['Balloon flight', 'Berber breakfast', 'Flight certificate', 'Hotel pickup/drop-off'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

  // Tours
  {
    id: 'marrakech-city-tour',
    category: 'tour',
    title: 'Marrakech City Discovery',
    shortDescription: 'Complete guided tour of Marrakech historical sites',
    description: 'Explore the magical red city of Marrakech with our expert guides. Visit the Koutoubia Mosque, Bahia Palace, Saadian Tombs, and the vibrant souks.',
    price: '€55',
    duration: 'Full day',
    image: placeholderImage,
    location: 'Marrakech Medina',
    inclusions: ['Professional guide', 'Entrance fees', 'Traditional lunch', 'Hotel pickup/drop-off'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'sahara-desert-3-days',
    category: 'tour',
    title: '3-Day Sahara Desert Tour',
    shortDescription: 'Epic journey to the Sahara with camel trek and camping',
    description: 'Unforgettable 3-day adventure to the Sahara Desert. Experience camel trekking, spend a night under the stars, and explore the stunning Erg Chebbi dunes.',
    price: '€285',
    duration: '3 days / 2 nights',
    image: placeholderImage,
    location: 'Merzouga Desert',
    inclusions: ['4x4 transportation', 'Camel trek', 'Desert camp', 'All meals', 'Professional driver/guide'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'atlas-mountains-trek',
    category: 'tour',
    title: 'Atlas Mountains Day Trek',
    shortDescription: 'Hiking adventure through traditional Berber villages',
    description: 'Discover the majestic Atlas Mountains on this guided trek. Visit authentic Berber villages and enjoy stunning mountain landscapes.',
    price: '€75',
    duration: 'Full day',
    image: placeholderImage,
    location: 'Atlas Mountains',
    inclusions: ['Mountain guide', 'Traditional lunch', 'Village visits', 'Hotel transfer'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'essaouira-day-trip',
    category: 'tour',
    title: 'Essaouira Coastal Escape',
    shortDescription: 'Day trip to the beautiful Atlantic coast city',
    description: 'Visit the charming coastal city of Essaouira, a UNESCO World Heritage site with stunning beaches and vibrant blue and white architecture.',
    price: '€65',
    duration: 'Full day',
    image: placeholderImage,
    location: 'Essaouira',
    inclusions: ['Comfortable transportation', 'Free time to explore', 'Seafood lunch option', 'Coastal views'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

  // Transportation
  {
    id: 'airport-transfer',
    category: 'transportation',
    title: 'Airport Transportation',
    shortDescription: 'Comfortable private transfer to/from Marrakech airport',
    description: 'Reliable and comfortable private transfer service between Marrakech airport and your accommodation. Our professional drivers ensure a smooth and stress-free journey.',
    price: 'From €25',
    duration: '30 minutes',
    image: placeholderImage,
    location: 'Marrakech Airport',
    inclusions: ['Professional driver', 'Meet & greet', 'Air-conditioned vehicle', 'Luggage assistance'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'city-to-city',
    category: 'transportation',
    title: 'City to City Transportation',
    shortDescription: 'Comfortable intercity travel across Morocco',
    description: 'Travel in comfort between Moroccan cities with our reliable transportation service. Perfect for exploring multiple destinations across the country with professional drivers.',
    price: 'From €100',
    duration: 'Varies by destination',
    image: placeholderImage,
    location: 'Morocco Wide',
    inclusions: ['Professional driver', 'Air-conditioned vehicle', 'Flexible schedule', 'Rest stops'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
];

export const getServicesByCategory = (category: 'activity' | 'tour' | 'transportation') => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return services.filter(service => service.subcategory === subcategory);
};

export const getFeaturedServices = () => {
  return [
    services.find(s => s.id === 'quad-biking-palm-grove'),
    services.find(s => s.id === 'sahara-desert-3-days'),
    services.find(s => s.id === 'airport-transfer'),
  ].filter(Boolean) as Service[];
};
