// Mock occasion data for "Mangos Go With Every Occasion" section
const occasions = [
  {
    id: '1',
    title: 'Celebrate Mango Joy',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&h=580&fit=crop',
    link: '/holiday',
    buttonText: 'Celebrate Mango Joy',
  },
  {
    id: '2',
    title: 'Mango Education',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1440&h=836&fit=crop',
    link: '/education',
    buttonText: 'Learn More',
  },
  {
    id: '3',
    title: 'Mango Mixologist',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&h=580&fit=crop',
    link: '/mixologist',
    buttonText: 'Mix It Up',
  },
  {
    id: '4',
    title: 'Mango Certification',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop',
    link: '/certification',
    buttonText: 'Get Certified',
  },
  {
    id: '5',
    title: 'Set The Table',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1440&h=836&fit=crop',
    link: '/recipes',
    buttonText: 'Play Game',
  },
  {
    id: '6',
    title: 'Mango Cocktails',
    image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=1440&h=836&fit=crop',
    link: '/drinks',
    buttonText: 'See Recipes',
  },
  {
    id: '7',
    title: 'Origin Stories',
    image: 'https://images.unsplash.com/photo-1605027990121-1c5b0b0b0b0b?w=1000&h=580&fit=crop',
    link: '/origin-stories',
    buttonText: 'Learn More',
  },
  {
    id: '8',
    title: 'Webinars',
    image: 'https://images.unsplash.com/photo-1605027990124-1c5b0b0b0b0b?w=1440&h=836&fit=crop',
    link: '/webinars',
    buttonText: 'Listen In',
  },
];

// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch all occasions
 * @returns {Promise<Array>}
 */
export const fetchOccasions = async () => {
  await delay();
  return occasions;
};

/**
 * Fetch a single occasion by ID
 * @param {string} id - Occasion ID
 * @returns {Promise<Object|null>}
 */
export const fetchOccasionById = async (id) => {
  await delay();
  return occasions.find((occasion) => occasion.id === id) || null;
};

