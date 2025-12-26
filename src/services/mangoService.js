import { isMangoInSeason, getSeasonStatus } from '../utils/dateUtils';

// Mock mango data with all required fields
const mangoVarieties = [
  {
    id: '1',
    name: 'Alphonso',
    origin: 'Maharashtra',
    tasteProfile: 'Sweet',
    seasonMonths: [3, 4, 5], // April, May, June
    pricePerDozen: 1200,
    images: [
      'https://images.unsplash.com/photo-1605027990121-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990122-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990123-1c5b0b0b0b0b?w=800',
    ],
    description: 'The King of Mangoes, Alphonso is known for its rich, creamy texture and sweet, aromatic flavor. Grown primarily in the Ratnagiri and Devgad regions of Maharashtra, this premium variety is highly sought after for its exceptional taste and golden-yellow color.',
    nutrition: {
      calories: 60,
      vitaminC: '36.4mg',
      vitaminA: '1082 IU',
      fiber: '1.6g',
      potassium: '168mg',
    },
  },
  {
    id: '2',
    name: 'Kesar',
    origin: 'Gujarat',
    tasteProfile: 'Sweet',
    seasonMonths: [4, 5, 6], // May, June, July
    pricePerDozen: 1000,
    images: [
      'https://images.unsplash.com/photo-1605027990124-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990125-1c5b0b0b0b0b?w=800',
    ],
    description: 'Kesar mango, also known as the "Queen of Mangoes", is famous for its saffron-colored flesh and sweet, aromatic taste. Grown in the Junagadh district of Gujarat, it has a distinct flavor that makes it perfect for desserts and traditional Indian sweets.',
    nutrition: {
      calories: 65,
      vitaminC: '38.2mg',
      vitaminA: '1200 IU',
      fiber: '1.8g',
      potassium: '175mg',
    },
  },
  {
    id: '3',
    name: 'Dasheri',
    origin: 'Uttar Pradesh',
    tasteProfile: 'Sweet',
    seasonMonths: [4, 5, 6, 7], // May, June, July, August
    pricePerDozen: 800,
    images: [
      'https://images.unsplash.com/photo-1605027990126-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990127-1c5b0b0b0b0b?w=800',
    ],
    description: 'Dasheri is one of the oldest and most popular mango varieties from Uttar Pradesh. Known for its elongated shape and fiberless, sweet flesh, Dasheri has a unique flavor profile that combines sweetness with a hint of tanginess.',
    nutrition: {
      calories: 62,
      vitaminC: '35.8mg',
      vitaminA: '1150 IU',
      fiber: '1.5g',
      potassium: '170mg',
    },
  },
  {
    id: '4',
    name: 'Langra',
    origin: 'Uttar Pradesh',
    tasteProfile: 'Sweet',
    seasonMonths: [5, 6, 7], // June, July, August
    pricePerDozen: 900,
    images: [
      'https://images.unsplash.com/photo-1605027990128-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990129-1c5b0b0b0b0b?w=800',
    ],
    description: 'Langra mango is famous for its green skin even when ripe and its exceptionally sweet, fiberless pulp. Originating from Varanasi, this variety has a distinct taste that makes it a favorite among mango connoisseurs.',
    nutrition: {
      calories: 58,
      vitaminC: '34.5mg',
      vitaminA: '1050 IU',
      fiber: '1.4g',
      potassium: '165mg',
    },
  },
  {
    id: '5',
    name: 'Banganapalli',
    origin: 'Andhra Pradesh',
    tasteProfile: 'Sweet',
    seasonMonths: [4, 5, 6], // May, June, July
    pricePerDozen: 750,
    images: [
      'https://images.unsplash.com/photo-1605027990130-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990131-1c5b0b0b0b0b?w=800',
    ],
    description: 'Banganapalli, also known as Benishan, is a large, oval-shaped mango variety from Andhra Pradesh. It has a thin skin, minimal fiber, and a sweet, mild flavor that makes it perfect for eating fresh or in salads.',
    nutrition: {
      calories: 64,
      vitaminC: '37.2mg',
      vitaminA: '1120 IU',
      fiber: '1.7g',
      potassium: '172mg',
    },
  },
  {
    id: '6',
    name: 'Totapuri',
    origin: 'Karnataka',
    tasteProfile: 'Tangy',
    seasonMonths: [5, 6, 7, 8], // June, July, August, September
    pricePerDozen: 600,
    images: [
      'https://images.unsplash.com/photo-1605027990132-1c5b0b0b0b0b?w=800',
      'https://images.unsplash.com/photo-1605027990133-1c5b0b0b0b0b?w=800',
    ],
    description: 'Totapuri, named for its parrot-beak shape, is known for its tangy flavor and firm texture. This variety is excellent for making pickles, chutneys, and juices. It has a longer shelf life compared to other varieties.',
    nutrition: {
      calories: 55,
      vitaminC: '40.5mg',
      vitaminA: '980 IU',
      fiber: '2.0g',
      potassium: '160mg',
    },
  },
];

// Harvest statistics for dashboard charts
export const harvestStatistics = {
  monthlyAvailability: [
    { month: 'January', count: 0 },
    { month: 'February', count: 0 },
    { month: 'March', count: 0 },
    { month: 'April', count: 2 },
    { month: 'May', count: 5 },
    { month: 'June', count: 6 },
    { month: 'July', count: 5 },
    { month: 'August', count: 3 },
    { month: 'September', count: 1 },
    { month: 'October', count: 0 },
    { month: 'November', count: 0 },
    { month: 'December', count: 0 },
  ],
  popularVarieties: [
    { name: 'Alphonso', orders: 1250 },
    { name: 'Kesar', orders: 980 },
    { name: 'Dasheri', orders: 850 },
    { name: 'Langra', orders: 720 },
    { name: 'Banganapalli', orders: 650 },
    { name: 'Totapuri', orders: 480 },
  ],
  seasonalTrends: [
    { season: 'Early Summer', varieties: 2, demand: 'High' },
    { season: 'Mid Summer', varieties: 5, demand: 'Very High' },
    { season: 'Late Summer', varieties: 4, demand: 'High' },
    { season: 'Monsoon', varieties: 1, demand: 'Medium' },
  ],
};

// Simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all mango varieties with optional filters
 * @param {Object} filters - Filter options (season, taste, origin)
 * @returns {Promise<Array>}
 */
export const fetchMangoes = async (filters = {}) => {
  await delay();
  
  let filtered = [...mangoVarieties];
  
  // Filter by season status
  if (filters.season) {
    const now = new Date();
    
    filtered = filtered.filter(mango => {
      if (filters.season === 'available') {
        return isMangoInSeason(now, mango.seasonMonths);
      } else if (filters.season === 'upcoming') {
        return getSeasonStatus(mango.seasonMonths) === 'upcoming';
      }
      return true;
    });
  }
  
  // Filter by taste profile
  if (filters.taste) {
    filtered = filtered.filter(mango => 
      mango.tasteProfile.toLowerCase() === filters.taste.toLowerCase()
    );
  }
  
  // Filter by origin
  if (filters.origin) {
    filtered = filtered.filter(mango => 
      mango.origin.toLowerCase() === filters.origin.toLowerCase()
    );
  }
  
  return filtered;
};

/**
 * Fetch a single mango by ID
 * @param {string} id - Mango ID
 * @returns {Promise<Object|null>}
 */
export const fetchMangoById = async (id) => {
  await delay();
  return mangoVarieties.find(mango => mango.id === id) || null;
};

/**
 * Get harvest statistics
 * @returns {Promise<Object>}
 */
export const fetchHarvestStatistics = async () => {
  await delay();
  return harvestStatistics;
};

/**
 * Submit order inquiry
 * @param {Object} orderData - Order form data
 * @returns {Promise<Object>}
 */
export const submitOrderInquiry = async (orderData) => {
  await delay(1000); // Simulate form submission delay
  
  // In a real app, this would make an API call
  return {
    success: true,
    orderId: `ORD-${Date.now()}`,
    message: 'Your order inquiry has been submitted successfully!',
    data: orderData,
  };
};

