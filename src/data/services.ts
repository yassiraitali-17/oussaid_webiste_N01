export interface Service {
  id: string;
  category: 'activity' | 'tour' | 'transportation';
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
    title: 'Quad Biking in Palm Grove',
    shortDescription: 'Thrilling desert adventure through Marrakech palm groves',
    description: 'Experience the thrill of quad biking through the stunning palm groves of Marrakech. Navigate through traditional Berber villages and enjoy breathtaking desert landscapes.',
    price: '€45',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Marrakech Palm Grove',
    inclusions: ['Professional guide', 'Safety equipment', 'Hotel pickup/drop-off', 'Refreshments'],
  },
  {
    id: 'camel-riding-sunset',
    category: 'activity',
    title: 'Sunset Camel Ride',
    shortDescription: 'Magical sunset experience on camelback in the desert',
    description: 'Embark on a traditional camel ride through the desert as the sun sets, creating unforgettable memories against stunning Moroccan landscapes.',
    price: '€35',
    duration: '1.5 hours',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Agafay Desert',
    inclusions: ['Experienced camel guide', 'Traditional tea ceremony', 'Hotel transfer', 'Sunset viewing'],
  },
  {
    id: 'hot-air-balloon',
    category: 'activity',
    title: 'Hot Air Balloon Adventure',
    shortDescription: 'Soar above Marrakech at sunrise for breathtaking views',
    description: 'Float peacefully above the stunning landscapes of Marrakech and the Atlas Mountains in a hot air balloon at sunrise.',
    price: '€195',
    duration: '4 hours',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Marrakech Region',
    inclusions: ['Balloon flight', 'Berber breakfast', 'Flight certificate', 'Hotel pickup/drop-off'],
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
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Marrakech Medina',
    inclusions: ['Professional guide', 'Entrance fees', 'Traditional lunch', 'Hotel pickup/drop-off'],
  },
  {
    id: 'sahara-desert-3-days',
    category: 'tour',
    title: '3-Day Sahara Desert Tour',
    shortDescription: 'Epic journey to the Sahara with camel trek and camping',
    description: 'Unforgettable 3-day adventure to the Sahara Desert. Experience camel trekking, spend a night under the stars, and explore the stunning Erg Chebbi dunes.',
    price: '€285',
    duration: '3 days / 2 nights',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Merzouga Desert',
    inclusions: ['4x4 transportation', 'Camel trek', 'Desert camp', 'All meals', 'Professional driver/guide'],
  },
  {
    id: 'atlas-mountains-trek',
    category: 'tour',
    title: 'Atlas Mountains Day Trek',
    shortDescription: 'Hiking adventure through traditional Berber villages',
    description: 'Discover the majestic Atlas Mountains on this guided trek. Visit authentic Berber villages and enjoy stunning mountain landscapes.',
    price: '€75',
    duration: 'Full day',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Atlas Mountains',
    inclusions: ['Mountain guide', 'Traditional lunch', 'Village visits', 'Hotel transfer'],
  },
  {
    id: 'essaouira-day-trip',
    category: 'tour',
    title: 'Essaouira Coastal Escape',
    shortDescription: 'Day trip to the beautiful Atlantic coast city',
    description: 'Visit the charming coastal city of Essaouira, a UNESCO World Heritage site with stunning beaches and vibrant blue and white architecture.',
    price: '€65',
    duration: 'Full day',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Essaouira',
    inclusions: ['Comfortable transportation', 'Free time to explore', 'Seafood lunch option', 'Coastal views'],
  },

  // Transportation
  {
    id: 'airport-transfer-private',
    category: 'transportation',
    title: 'Private Airport Transfer',
    shortDescription: 'Comfortable private transfer to/from Marrakech airport',
    description: 'Reliable and comfortable private transfer service between Marrakech airport and your accommodation.',
    price: '€25',
    duration: '30 minutes',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Marrakech Airport',
    inclusions: ['Professional driver', 'Meet & greet', 'Air-conditioned vehicle', 'Luggage assistance'],
  },
  {
    id: 'luxury-minivan-rental',
    category: 'transportation',
    title: 'Luxury Minivan with Driver',
    shortDescription: 'Full day luxury minivan rental with professional driver',
    description: 'Rent a comfortable, air-conditioned luxury minivan with an experienced driver for your custom itinerary.',
    price: '€150/day',
    duration: 'Flexible',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Marrakech & Beyond',
    inclusions: ['Professional driver', 'Fuel included', 'Air conditioning', 'Flexible schedule'],
  },
  {
    id: '4x4-rental',
    category: 'transportation',
    title: '4x4 Vehicle Rental',
    shortDescription: 'Rugged 4x4 rental for desert and mountain adventures',
    description: 'Explore Morocco at your own pace with our well-maintained 4x4 vehicles, perfect for desert and mountain terrain.',
    price: '€95/day',
    duration: 'Flexible',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=60',
    location: 'Morocco Wide',
    inclusions: ['Full insurance', 'GPS included', 'Unlimited mileage', '24/7 support'],
  },
];

export const getServicesByCategory = (category: 'activity' | 'tour' | 'transportation') => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getFeaturedServices = () => {
  return [
    services.find(s => s.id === 'quad-biking-palm-grove'),
    services.find(s => s.id === 'sahara-desert-3-days'),
    services.find(s => s.id === 'airport-transfer-private'),
  ].filter(Boolean) as Service[];
};
