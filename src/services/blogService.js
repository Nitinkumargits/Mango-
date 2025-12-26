// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Mango Varieties in India',
    excerpt: 'Discover the rich diversity of mango varieties grown across India, from the royal Alphonso to the tangy Totapuri. Learn about their unique flavors, origins, and best uses.',
    content: `
      <p>India is home to over 1,000 varieties of mangoes, each with its unique flavor, texture, and aroma. In this comprehensive guide, we explore the most popular varieties that have captured the hearts of mango lovers worldwide.</p>
      
      <h2>Alphonso - The King of Mangoes</h2>
      <p>Grown primarily in Maharashtra's Ratnagiri and Devgad regions, Alphonso is renowned for its rich, creamy texture and sweet, aromatic flavor. This premium variety is highly sought after and commands a premium price in the market.</p>
      
      <h2>Kesar - The Queen of Mangoes</h2>
      <p>Originating from Gujarat, Kesar mango is famous for its saffron-colored flesh and exceptional sweetness. It's perfect for making desserts and traditional Indian sweets.</p>
      
      <h2>Dasheri - The Classic Favorite</h2>
      <p>One of the oldest varieties from Uttar Pradesh, Dasheri is known for its elongated shape and fiberless, sweet flesh. It has a unique flavor profile that combines sweetness with a hint of tanginess.</p>
      
      <h2>Langra - The Green Wonder</h2>
      <p>Famous for its green skin even when ripe, Langra from Varanasi has exceptionally sweet, fiberless pulp that makes it a favorite among mango connoisseurs.</p>
      
      <h2>Banganapalli - The Large and Sweet</h2>
      <p>This large, oval-shaped variety from Andhra Pradesh has a thin skin, minimal fiber, and a sweet, mild flavor perfect for eating fresh or in salads.</p>
      
      <h2>Totapuri - The Tangy Delight</h2>
      <p>Named for its parrot-beak shape, Totapuri is known for its tangy flavor and firm texture. It's excellent for making pickles, chutneys, and juices.</p>
    `,
    author: 'Mango Expert',
    date: '2024-12-15',
    category: 'Varieties',
    image: 'https://images.unsplash.com/photo-1605027990121-1c5b0b0b0b0b?w=800',
    tags: ['varieties', 'guide', 'indian-mangoes'],
  },
  {
    id: '2',
    title: 'Seasonal Mango Availability: When to Buy Your Favorite Varieties',
    excerpt: 'Understanding mango seasons is crucial for getting the best quality fruits. Learn when each variety is in season and how to choose the perfect mango.',
    content: `
      <p>Mango season in India typically runs from March to September, with peak availability in May and June. However, different varieties have their own specific seasons.</p>
      
      <h2>Early Season (March - April)</h2>
      <p>Early season varieties like Alphonso start appearing in March. These are often the most expensive due to limited availability.</p>
      
      <h2>Peak Season (May - July)</h2>
      <p>This is when most varieties are at their peak. You'll find the best quality and variety during these months, including Kesar, Dasheri, and Langra.</p>
      
      <h2>Late Season (August - September)</h2>
      <p>Late-season varieties like Totapuri are available during this time. These are perfect for making preserves and pickles.</p>
      
      <h2>Tips for Choosing the Perfect Mango</h2>
      <ul>
        <li>Look for a fruity aroma at the stem end</li>
        <li>Gently press - it should yield slightly</li>
        <li>Check for uniform color (varies by variety)</li>
        <li>Avoid mangoes with dark spots or bruises</li>
      </ul>
    `,
    author: 'Seasonal Guide',
    date: '2024-12-10',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1605027990124-1c5b0b0b0b0b?w=800',
    tags: ['seasonal', 'buying-guide', 'tips'],
  },
  {
    id: '3',
    title: 'Health Benefits of Mangoes: Nature\'s Superfruit',
    excerpt: 'Mangoes are packed with vitamins, minerals, and antioxidants. Discover the incredible health benefits of this delicious superfruit.',
    content: `
      <p>Mangoes are not just delicious; they're also incredibly nutritious. This tropical fruit is packed with vitamins, minerals, and antioxidants that offer numerous health benefits.</p>
      
      <h2>Rich in Vitamins</h2>
      <p>Mangoes are an excellent source of vitamin C, which boosts immunity, and vitamin A, which is essential for eye health. They also contain vitamin K, E, and several B vitamins.</p>
      
      <h2>High in Antioxidants</h2>
      <p>Mangoes contain powerful antioxidants like mangiferin, quercetin, and beta-carotene that help protect against oxidative stress and inflammation.</p>
      
      <h2>Digestive Health</h2>
      <p>The fiber content in mangoes aids digestion and helps prevent constipation. Mangoes also contain enzymes that help break down proteins.</p>
      
      <h2>Heart Health</h2>
      <p>The potassium and magnesium in mangoes help regulate blood pressure and support heart health. The fiber content also helps lower cholesterol levels.</p>
      
      <h2>Skin and Hair Benefits</h2>
      <p>Vitamin C in mangoes promotes collagen production, keeping skin youthful. Vitamin A helps maintain healthy hair and skin.</p>
      
      <h2>Weight Management</h2>
      <p>Despite being sweet, mangoes can be part of a healthy diet. The fiber content helps you feel full, reducing overall calorie intake.</p>
    `,
    author: 'Health Expert',
    date: '2024-12-05',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1605027990126-1c5b0b0b0b0b?w=800',
    tags: ['health', 'nutrition', 'benefits'],
  },
  {
    id: '4',
    title: 'Traditional Mango Recipes from Indian Kitchens',
    excerpt: 'Explore authentic Indian mango recipes passed down through generations. From aamras to mango pickle, discover the culinary heritage of mangoes.',
    content: `
      <p>Mangoes hold a special place in Indian cuisine, featuring in everything from desserts to pickles. Here are some traditional recipes that celebrate this beloved fruit.</p>
      
      <h2>Aamras - The Royal Dessert</h2>
      <p>Aamras is a simple yet elegant dessert made from pureed ripe mangoes. It's traditionally served with puris during mango season and is a favorite in Maharashtra and Gujarat.</p>
      
      <h2>Mango Pickle (Aam ka Achar)</h2>
      <p>Raw mangoes are transformed into tangy, spicy pickles that can be preserved for months. Each region has its own unique recipe with different spices and techniques.</p>
      
      <h2>Mango Lassi</h2>
      <p>This refreshing drink combines ripe mangoes with yogurt, creating a creamy, sweet beverage perfect for hot summer days.</p>
      
      <h2>Mango Chutney</h2>
      <p>A sweet and tangy condiment made from raw or semi-ripe mangoes, mango chutney pairs perfectly with Indian breads and snacks.</p>
      
      <h2>Mango Kulfi</h2>
      <p>This frozen dessert combines the richness of kulfi with the sweetness of mangoes, creating a treat that's both traditional and refreshing.</p>
      
      <h2>Mango Rice (Mamidikaya Pulihora)</h2>
      <p>A tangy rice dish from South India made with raw mangoes, this recipe is a perfect example of how mangoes can be used in savory dishes.</p>
    `,
    author: 'Chef Priya',
    date: '2024-11-28',
    category: 'Recipes',
    image: 'https://images.unsplash.com/photo-1605027990128-1c5b0b0b0b0b?w=800',
    tags: ['recipes', 'indian-cuisine', 'traditional'],
  },
  {
    id: '5',
    title: 'How to Store and Ripen Mangoes at Home',
    excerpt: 'Learn the best techniques for storing and ripening mangoes to enjoy them at their peak flavor. Tips for both ripe and unripe mangoes.',
    content: `
      <p>Proper storage and ripening techniques can make all the difference in enjoying mangoes at their best. Here's how to handle mangoes at different stages of ripeness.</p>
      
      <h2>Ripening Unripe Mangoes</h2>
      <p>To ripen unripe mangoes, place them in a paper bag at room temperature. Adding an apple or banana to the bag can speed up the process due to ethylene gas.</p>
      
      <h2>Storing Ripe Mangoes</h2>
      <p>Once ripe, mangoes should be stored in the refrigerator to slow down further ripening. They can last for 3-5 days in the fridge.</p>
      
      <h2>Freezing Mangoes</h2>
      <p>Mangoes can be frozen for long-term storage. Peel and cut them into chunks, then freeze on a baking sheet before transferring to freezer bags.</p>
      
      <h2>Signs of Ripeness</h2>
      <ul>
        <li>Fruity aroma at the stem end</li>
        <li>Slight give when gently pressed</li>
        <li>Color changes (varies by variety)</li>
        <li>Skin may develop small wrinkles</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Don't store unripe mangoes in the refrigerator</li>
        <li>Avoid washing mangoes before they're ripe</li>
        <li>Don't stack mangoes on top of each other</li>
        <li>Keep them away from direct sunlight</li>
      </ul>
    `,
    author: 'Storage Expert',
    date: '2024-11-20',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1605027990130-1c5b0b0b0b0b?w=800',
    tags: ['storage', 'tips', 'preservation'],
  },
  {
    id: '6',
    title: 'The History and Cultural Significance of Mangoes in India',
    excerpt: 'Delve into the rich history of mangoes in India, from ancient times to modern cultivation. Learn about their cultural and religious significance.',
    content: `
      <p>Mangoes have been cultivated in India for over 4,000 years, making them an integral part of Indian culture, cuisine, and traditions.</p>
      
      <h2>Ancient Origins</h2>
      <p>Mangoes are believed to have originated in India and Myanmar. References to mangoes can be found in ancient Indian texts, including the Vedas and Buddhist literature.</p>
      
      <h2>Royal Connections</h2>
      <p>Mangoes were considered a symbol of prosperity and were often gifted to royalty. The Mughal emperors were particularly fond of mangoes and established orchards across their empire.</p>
      
      <h2>Religious Significance</h2>
      <p>In Hinduism, the mango tree is considered sacred. Mango leaves are used in religious ceremonies and decorations, especially during festivals.</p>
      
      <h2>Literary References</h2>
      <p>Mangoes feature prominently in Indian literature, poetry, and folklore. The famous poet Kalidasa wrote about mangoes in his works.</p>
      
      <h2>Modern Cultivation</h2>
      <p>Today, India is the world's largest producer of mangoes, with over 1,000 varieties grown across different regions. The country accounts for about 50% of global mango production.</p>
      
      <h2>Cultural Festivals</h2>
      <p>Many regions in India celebrate mango festivals during the season, showcasing different varieties and traditional mango-based dishes.</p>
    `,
    author: 'Cultural Historian',
    date: '2024-11-15',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1605027990132-1c5b0b0b0b0b?w=800',
    tags: ['history', 'culture', 'india'],
  },
];

// Simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all blog posts
 * @param {Object} filters - Filter options (category, tag, search)
 * @returns {Promise<Array>}
 */
export const fetchBlogPosts = async (filters = {}) => {
  await delay();
  
  let filtered = [...blogPosts];
  
  // Filter by category
  if (filters.category) {
    filtered = filtered.filter(post => 
      post.category.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Filter by tag
  if (filters.tag) {
    filtered = filtered.filter(post => 
      post.tags.some(tag => tag.toLowerCase() === filters.tag.toLowerCase())
    );
  }
  
  // Search in title and content
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort by date (newest first)
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return filtered;
};

/**
 * Fetch a single blog post by ID
 * @param {string} id - Blog post ID
 * @returns {Promise<Object|null>}
 */
export const fetchBlogPostById = async (id) => {
  await delay();
  return blogPosts.find(post => post.id === id) || null;
};

/**
 * Get all unique categories
 * @returns {Promise<Array>}
 */
export const fetchCategories = async () => {
  await delay();
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.sort();
};

/**
 * Get all unique tags
 * @returns {Promise<Array>}
 */
export const fetchTags = async () => {
  await delay();
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.sort();
};

